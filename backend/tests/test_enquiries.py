"""Backend tests for The Brioche Team enquiries API."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://page-builder-789.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestEnquiries:
    def test_health_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200

    def test_create_event_enquiry(self, api_client):
        payload = {
            "type": "event",
            "full_name": "TEST_Alice Event",
            "email": "test_alice@example.com",
            "phone": "+911234567890",
            "event_type": "Wedding",
            "event_date": "2026-06-01",
            "event_location": "Mumbai",
            "guest_numbers": "100",
        }
        r = api_client.post(f"{API}/enquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["type"] == "event"
        assert data["full_name"] == "TEST_Alice Event"
        assert data["email"] == "test_alice@example.com"
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data

        # Verify persistence via GET filter
        rg = api_client.get(f"{API}/enquiries", params={"type": "event"})
        assert rg.status_code == 200
        items = rg.json()
        assert any(it["id"] == data["id"] for it in items)
        assert all(it["type"] == "event" for it in items)

    def test_create_franchise_enquiry(self, api_client):
        payload = {
            "type": "franchise",
            "full_name": "TEST_Bob Franchise",
            "email": "test_bob@example.com",
            "phone": "+911111111111",
            "current_location": "Delhi",
            "preferred_locations": "Mumbai, Pune",
            "investment": "1 Cr+",
            "owned_business": "Yes",
            "message": "Interested in franchise",
        }
        r = api_client.post(f"{API}/enquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["type"] == "franchise"
        assert data["current_location"] == "Delhi"
        assert data["preferred_locations"] == "Mumbai, Pune"

        rg = api_client.get(f"{API}/enquiries", params={"type": "franchise"})
        assert rg.status_code == 200
        items = rg.json()
        assert any(it["id"] == data["id"] for it in items)
        assert all(it["type"] == "franchise" for it in items)

    def test_list_all_enquiries(self, api_client):
        r = api_client.get(f"{API}/enquiries")
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_missing_required_fields_returns_422(self, api_client):
        # Missing full_name and email
        r = api_client.post(f"{API}/enquiries", json={"type": "event"})
        assert r.status_code == 422

    def test_missing_email_only(self, api_client):
        r = api_client.post(f"{API}/enquiries", json={"type": "event", "full_name": "TEST_x"})
        assert r.status_code == 422

    def test_create_contact_enquiry(self, api_client):
        payload = {
            "type": "contact",
            "full_name": "TEST_QA Tester",
            "email": "test_qa@example.com",
            "phone": "+911234500000",
            "event_type": "General Enquiry",
            "message": "hello",
        }
        r = api_client.post(f"{API}/enquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["type"] == "contact"
        assert data["full_name"] == "TEST_QA Tester"
        assert "id" in data

        rg = api_client.get(f"{API}/enquiries", params={"type": "contact"})
        assert rg.status_code == 200
        items = rg.json()
        assert any(it["id"] == data["id"] for it in items)
        assert all(it["type"] == "contact" for it in items)
