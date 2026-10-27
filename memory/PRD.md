# The Brioche Team — PRD

## Problem Statement
Rebuild the user's uploaded static multi-page HTML site "The Brioche Team" (luxury dessert brand) 100% faithfully as a React app with all 6 pages, add page-transition animations for all pages, and elevate it to an award-worthy level (framer-motion + lenis smooth scrolling, kinetic hero, masked reveals, marquee, manifesto, parallax). Enquiry forms functional (save to MongoDB).

## Stack
FastAPI + MongoDB (backend), React 19 + framer-motion + lenis (frontend). Fonts: Fraunces + Poppins. Colors: peach #FFEBE3/#FFF2EB, orange #DF6029, cream #FFEFE5, dark #1A1A1A.

## Architecture
- Backend: /api/enquiries (POST create, GET list w/ optional ?type). Model stores event + franchise fields flexibly.
- Frontend: BrowserRouter + AnimatePresence page transitions (orange curtain wipe w/ wordmark). Lenis smooth scroll w/ per-route reset. Shared Header (peach on Home / orange interior + mobile drawer), Footer, InstagramStrip, InteriorLayout, Reveal (scroll reveals), Marquee, EnquiryForm.
- Pages: Home (/), Menu (/menu), Locations (/locations), BrandOrigin (/brand-origin), Events (/events), Franchise (/franchise).
- Assets: original images extracted from HTML base64 -> /app/frontend/public/brioche/*.

## Implemented (2026-08-05)
- All 6 pages faithful to original design + content.
- Signature Home: masked line-by-line hero reveal, parallax texture/product card, marquee, numbered manifesto, featured menu preview.
- Page transitions on every route; smooth momentum scrolling.
- Functional Events + Franchise enquiry forms -> MongoDB, sonner toasts, validation.
- Tested: backend 6/6, frontend 100% (iteration_1.json).

## Backlog / Next
- P1: Admin view to browse submitted enquiries.
- P2: Backend enforce type Literal + EmailStr; spam protection (captcha/rate limit).
- P2: Real booking flow / date picker; live Instagram feed; SEO meta per route.

## Update (2026-08-05) — Interactive "Our Menu" redesign
- /menu rebuilt as an interactive single-page showcase: left list of 6 signature items; selecting one animates a hero-image swap, animates the page background color, and updates name/description/price; a "Up next" teaser peeks bottom-right; right-side progress dots; gentle 5.2s auto-advance (resets on selection).
- Items + bg: Brioche Bites #FFC892, Banana Pudding #FAF1D5, Tiramisu #FAC395, Miss Truchbull Cake #FFCAB9, San Sebastian #F0D1BA, Signature Croissant #FFEBD2.
- Dessert PNGs cut out (transparent) from user mockups -> /app/frontend/public/brioche/menu/<slug>.png (+ -thumb). Files: pages/Menu.jsx, menu.css.
- Tested: iteration_2.json, 24/24 frontend checks pass, no regressions.

## Update (2026-08-16) — Design refresh to match provided desktop mockups
- Global: Header right button changed **BOOK NOW → CONTACT US** (orange, links to /events#enquiry). Footer redesigned with huge "THE BRIOCHE TEAM" wordmark and 2-col nav + orange mail/mobile.
- Home REBUILT: removed old animation/scroll-sequence sections. New sections in order: Hero (kept, animation TBD) → A Legacy of Perfection (centered heading + 4 stat cards: 100+/24+/250+/120+) → Our Masterpieces (2 dark cards) → Savour banner → Marquee → Customers Reviews (3 cards) → Events & Corporate preview → Instagram → Footer.
- Locations: added 3rd branch "Coming soon — Victoria Food Village, Wolverhampton".
- Interior pages breadcrumbs corrected: Locations/Brand origin/Events & Corporate/Franchise.
- Files: /app/frontend/src/home.css (new), Home.jsx (rewritten), Footer.jsx (rewritten), Header.jsx (CONTACT US), brioche.css (footer wordmark + contact-orange btn), Locations.jsx (3rd branch).
- Verified visually via screenshots. Prior test iteration_2.json remains valid for menu; enquiry APIs unchanged.

## Update (2026-08-16 v2) — New pages + fixes
- **New pages** (page transitions inherited): Careers (/careers), Contact (/contact — orange top with 3 cream cards + peach enquiry form), Privacy Policy (/privacy), Terms & Conditions (/terms). All wired to Footer links (Career/Contact us/Privacy Policy/Terms & Conditions).
- **Header CONTACT US** now routes to /contact.
- **Brand Origin**: switched first section image to /brioche/brand-origin-0.jpg (900x300) with object-fit:contain to prevent bottom clipping.
- **Em-dash "—" removed** from all body copy across Home, Menu, Brand Origin, EnquiryForm success toast.
- **DJ images**: Events page Private Parties tile → /brioche/events-corporate-5.jpg. Home Masterclasses tile → /brioche/events-corporate-6.jpg.
- **Backend**: EnquiryCreate accepts `type='contact'` (already flexible). Contact form persists via POST /api/enquiries.
- Testing (iteration_3.json): backend 100%, frontend 100%; no regressions.

## Update (2026-08-16 v3) — Logo, hero animation, contact info
- **Logo image**: TBT circular logo saved at /brioche/logo/tbt.png. Replaces text in Header (data-testid='logo-link' → img) and in the page-transition curtain (motion.img instead of motion.span). Also placed as the content of Franchise "Our Ideal Franchise Partner" white/cream box (.partner-logo-box).
- **Hero animation**: 150 transparent WebP frames at /brioche/hero-anim/ (2.7MB, 800px wide with alpha) rendered via a canvas auto-loop component (HeroAnimation.jsx) centered on the Home hero (replaces the old product-card).
- **Contact info globally updated**: phone +44 79169 60123, email ask@thebriocheteam.com — verified across Header, Contact page, Footer, all forms.
- **Franchise Our Story center image** swapped to /brioche/franchise-4.jpg.
- Testing (iteration_4.json): backend 100%, frontend 100% — all requested acceptance criteria pass, no regressions.

### Still remaining (larger scope for follow-up passes)
- Per-page pixel-accurate background colours matching each design (currently unified peach/orange system with dark/cream sections).
- Typography weight/size/spacing pixel matching every design (currently uses Fraunces + Poppins with reasonable sizing).
- Form styling pixel-tightening to match design examples.
- Full mobile responsive tuning per mobile mockups.

## Update (2026-08-16 v4) — Header + section backgrounds per design
- **Header** on every page now matches design: peach bg (transparent over .interior-shell peach), "THE BRIOCHE TEAM" Fraunces serif black text logo (34px), BOOK NOW + Call +44 79169 60123 left block, orange CONTACT US button right.
- **Interior pages** switched to peach base (.interior-shell) with per-section bg classes:
  - .sec-bg-orange (hero + enquiry sections)
  - .sec-bg-peach (story/celebrations/corporate sections)
  - .sec-bg-salmon (What We Offer, Ideal Franchise Partner)
  - .sec-bg-dark (Franchise support grid)
- **Page transition curtain**: peach background with the orange TBT logo — colours now balanced/harmonious with the rest of the site.
- Locations & Privacy & Terms: forced .sec-bg-orange on their sections to keep orange base with white text.
- Brand Origin: full peach with dark text and orange eyebrow — matches design.

## Update (2026-08-16 v5) — Home audit + Forms + Mobile + Locations peach
- **Critical bug fix**: HeroAnimation canvas was throwing runtime error (broken image state). Added `naturalWidth > 0` check + `onerror` handler + try/catch around drawImage. Error overlay resolved on all pages.
- **Forms rebuilt**: peach input backgrounds (#FFE1CE), tighter border-radius (10px), 16px padding, focused state with #FFECD8 bg + dark border, larger submit button (16px×40px, border-radius 8px, weight 600, letter-spacing).
- **Locations page**: switched to peach background with dark text (matches design system).
- **Mobile pass**: added @media (max-width:640px) breakpoint tuning: hero heights, section paddings, wordmark size, Ideal Partner logo box, form row stacking, careers grid, hero-anim wrap, insta grid to 2-col.
- **Home audit**: hero min-height tightened to 820px, verified all sections render clean on desktop + mobile.

## Update (2026-08-16 v6) — Mobile QA + copy + hero progressive load + menu tweaks
- **HeroAnimation progressive load**: priority loader hits first 10 frames + keyframes every 5, then `requestIdleCallback` streams the rest. Canvas starts drawing once the first 10 are ready — no more "wait for 150 frames". Verified request order via testing agent.
- **Home copy**: refreshed 3 review card copies + Legacy of Perfection description in brand voice.
- **Mobile pass**: added tighter `@media (max-width:640px)` rules for menu interactive page, event card text, corp-card padding, page hero sizes, story/celebrations/corporate/offer/story/partner section paddings.
- **Menu palette**: keeps per-item background colours; palette already aligned with brand (peach/salmon/cream tones).
- Testing (iteration_5.json): 100% backend + 100% frontend, zero horizontal scroll on 8 mobile pages, 7/7 backend pytest pass, curtain logo image verified.

## Update (2026-08-16 v7) — Backgrounds + hero cleanup + flip transitions
- **Locations**: reverted to orange background (matches design) with white text.
- **Brand Origin**: alternating section backgrounds — orange hero ("Where It All Began") with new black-and-white split image /brioche/where-it-all-began.png, peach "A Passion Perfected", orange "Courage to Create", peach "Legacy of Indulgence", peach "More Than Dessert". Text colours flip automatically via `.story-block.sec-bg-orange h2/p` overrides.
- **Menu**: `.menu-caption .price` hidden — prices removed from all items.
- **Home hero**: removed the "Savour the extraordinary" text + description; the branded bowl animation now takes centre-stage at `width:min(1120px,92vw)` with `saturate(1.35) contrast(1.12) brightness(1.08)` + drop-shadow for a premium finish.
- **Photo flip hover**: added `perspective + rotateY/rotateX + scale + brightness/contrast` transitions on all photograph elements (story-block, loc-img, cel-card, evp, hm-card, corp-photo, legacy-card, master m-img, wu-img, savour) — cursor over any image plays a subtle 3D flip.
- Header untouched (per instruction).

## Update (2026-08-16 v8) — Contact bg + reviews scroll + one-shot anim
- **Contact page bg fixed**: `.contact-hero` now orange, `.contact-form-sec` now peach — matches design.
- **Home Reviews**: 3 new reviews prepended (Ayesha Kazi, Ali ahmed, Mo Afzal) with the 3 previous kept below. Redesigned each card with avatar circle + orange name (no more pill); wrapped in `.reviews-scroll` horizontal snap-scroll with visible orange scrollbar.
- **Hero animation**: plays ONCE on load and clamps at the final frame (perfect drizzled bowl matching your reference image). Refresh triggers the animation again. Enhanced quality: `saturate 1.45`, `contrast 1.16`, `brightness 1.10`, `drop-shadow`, `imageSmoothingQuality: high`.
