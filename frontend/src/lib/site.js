import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Our Menu", to: "/menu" },
  { label: "Locations", to: "/locations" },
  { label: "Brand Origin", to: "/brand-origin" },
  { label: "Events & Corporate", to: "/events" },
  { label: "Franchise", to: "/franchise" },
];

export const CONTACT = {
  phone: "+44 79169 60123",
  email: "ask@thebriocheteam.com",
  mobile: "+44 79169 60123",
  instagram: "@thebrioheteam",
  instagramUrl: "https://www.instagram.com/thebriocheteam?stkn=bXA2eXdqM3Ywa2lw",
  tiktokUrl: "https://www.tiktok.com/@thebriocheteam?_r=1&_t=ZN-99ohPKtsOdn",
};

// Instagram strip images — same unified set of 6 across every page
const INSTA_STRIP = [1, 2, 3, 4, 5, 6].map((n) => `/brioche/insta-strip/strip-${n}.jpg`);

export const INSTA = {
  menu: INSTA_STRIP,
  locations: INSTA_STRIP,
  origin: INSTA_STRIP,
  events: INSTA_STRIP,
  franchise: INSTA_STRIP,
  home: INSTA_STRIP,
};
