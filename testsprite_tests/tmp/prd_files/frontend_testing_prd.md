# Frontend Testing PRD — Portfolio Website

## 1. Overview

This document defines the testing requirements for the portfolio website built with **React + Vite**, covering all sections: Navbar, Hero, TechStack, Projects, Experience, Contact, and Footer.

---

## 2. Objectives

- Verify all components render correctly across Desktop, Tablet, and Mobile viewports
- Validate user interactions (navigation, form submission, skill filtering, hover effects)
- Ensure responsive layouts work without horizontal overflow
- Confirm animations and transitions fire smoothly
- Validate the contact form (EmailJS integration) handles success/error states

---

## 3. Scope

### In Scope
| Area | Components |
|------|-----------|
| Navigation | `NavBar` — desktop links, mobile hamburger drawer |
| Hero Section | [Hero](file:///c:/Users/Meeran/Desktop/Projects/portfolio/src/components/hero.jsx#8-295) — typing animation, profile image, CTAs |
| Skills | [TechStack](file:///c:/Users/Meeran/Desktop/Projects/portfolio/src/components/TechStack.jsx#6-115) — category filter tabs, icon grid |
| Projects | `ProjectGrid` — cards, tech tags, external links |
| Experience | [Experience](file:///c:/Users/Meeran/Desktop/Projects/portfolio/src/components/Experience.jsx#4-117) — timeline, cards |
| Contact | [Contact](file:///c:/Users/Meeran/Desktop/Projects/portfolio/src/components/Contact.jsx#6-288) — form validation, EmailJS submission |
| Footer | [Footer](file:///c:/Users/Meeran/Desktop/Projects/portfolio/src/components/Footer.jsx#10-104) — social links, credits |
| Global | Scroll-reveal animations, particle background, responsive utilities |

### Out of Scope
- Backend / API testing (no backend exists)
- Performance benchmarking / Lighthouse audits
- Accessibility audit (a11y) — can be a future phase

---

## 4. Test Breakpoints

| Device | Width |
|--------|-------|
| Mobile S | 320px |
| Mobile M | 375px |
| Mobile L | 425px |
| Tablet | 768px |
| Desktop | 1280px |

---

## 5. Test Cases

### 5.1 Navbar

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 1 | Desktop ≥768px: nav links visible | All 5 links (About, Skills, Projects, Experience, Contact) displayed inline |
| 2 | Mobile <768px: hamburger icon visible | Menu button shown, desktop links hidden |
| 3 | Tap hamburger icon | Mobile drawer animates open with all 5 links |
| 4 | Tap a link in drawer | Drawer closes, page scrolls to correct section |
| 5 | Scroll down >50px | Navbar background becomes opaque with blur |
| 6 | Active section highlighting | Current section's nav link is highlighted cyan |

### 5.2 Hero

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 7 | Desktop: layout is side-by-side | Text content left, profile image right |
| 8 | Mobile: layout stacks vertically | Text centered above image, all centered |
| 9 | Typing animation cycles | Taglines cycle with type/delete effect and blinking cursor |
| 10 | CTA buttons: mobile | Buttons shrink (10px 20px padding), centered |
| 11 | CTA buttons: desktop | Buttons full size (14px 32px), left-aligned |
| 12 | Profile image scales | Image uses `clamp(140px, 40vw, 300px)` — no overflow |
| 13 | No horizontal scrollbar at 320px | Zero overflow on smallest mobile viewport |
| 14 | "View My Work" navigates to #projects | Smooth scroll to Projects section |
| 15 | "Get In Touch" navigates to #contact | Smooth scroll to Contact section |

### 5.3 TechStack

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 16 | Default: "Frontend" tab is active | Frontend skills displayed |
| 17 | Click "All" tab | All skills from all categories shown |
| 18 | Click "Backend" tab | Only backend skills shown |
| 19 | Click "Tools" tab | Only tools shown |
| 20 | Skill cards centered | Cards are flex-wrapped and centered in container |
| 21 | Hover on skill icon | Icon color changes to its brand color |
| 22 | Mobile: cards still centered | Grid shrinks and wraps naturally |

### 5.4 Projects

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 23 | Cards render with title, description, tech tags | Both projects visible with all metadata |
| 24 | External link icon opens project URL | Link opens in new tab |
| 25 | Hover: card lifts with glow effect | `translateY(-8px)` + glow overlay visible |
| 26 | Featured badge renders (if flagged) | "Featured" pill shown top-right |
| 27 | Mobile: cards stack single-column | Grid collapses to 1 column ≤420px |

### 5.5 Experience

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 28 | Timeline renders with vertical gradient line | Cyan→purple gradient line visible on left |
| 29 | Timeline dots glow | Gradient dot with cyan box-shadow |
| 30 | Card content: role, type, period, description, tags | All fields rendered correctly |
| 31 | Mobile: card padding reduces | Uses `.card-padding-lg` (20px mobile, 32px desktop) |

### 5.6 Contact

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 32 | Info cards render (Email, Location, Availability) | 3 cards with icons and correct text |
| 33 | Email link is clickable | Opens mailto: intent |
| 34 | "Currently available" indicator glows green | Pulsing green dot with label |
| 35 | Form: empty submit blocked | HTML5 `required` prevents submission |
| 36 | Form: valid submit → success | Success toast: "✓ Message sent successfully!" |
| 37 | Form: EmailJS failure → error | Error toast: "✗ Something went wrong" |
| 38 | Submit button shows loading state | Spinner + "Sending..." while submitting |
| 39 | Mobile: form and info stack vertically | Grid collapses to single column |

### 5.7 Footer

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 40 | Social icons render (GitHub, LinkedIn, Email) | 3 circular icon buttons displayed |
| 41 | Hover: icon lifts with cyan glow | Color, border, shadow, transform all transition |
| 42 | GitHub/LinkedIn open in new tab | `target="_blank"` applied |
| 43 | Copyright year is dynamic | Displays current year (2026) |

### 5.8 Global / Cross-Cutting

| # | Test Case | Expected Result |
|---|-----------|----------------|
| 44 | Particle background renders | Canvas with animated particles behind all content |
| 45 | Scroll-reveal animations fire on scroll | Elements fade/slide in when scrolled into view |
| 46 | Section padding responsive | 100px/24px on mobile → 120px/48px on desktop |
| 47 | No horizontal scroll at any breakpoint | `overflow-x: hidden` + no fixed-width overflow |
| 48 | Smooth scroll between sections | `scroll-behavior: smooth` active |

---

## 6. Tools & Approach

| Tool | Purpose |
|------|---------|
| **Chrome DevTools** | Manual viewport testing, element inspection |
| **Vitest + React Testing Library** | Unit tests for component rendering & interactions |
| **Playwright / Cypress** | E2E tests for navigation, form submission, responsive layout |

---

## 7. Priority

| Priority | Test Cases |
|----------|-----------|
| **P0 — Critical** | #13 (no overflow), #35–38 (form), #1–4 (nav), #7–8 (hero layout) |
| **P1 — High** | #9–12 (hero details), #16–22 (skills), #23–27 (projects) |
| **P2 — Medium** | #28–31 (experience), #40–43 (footer), #44–48 (global) |

---

## 8. Success Criteria

- ✅ Zero horizontal scrollbar on all 5 breakpoints
- ✅ All interactive elements (links, buttons, tabs, form) function correctly
- ✅ Contact form sends email via EmailJS and displays correct status
- ✅ Layout gracefully transitions between mobile ↔ desktop
- ✅ All animations are smooth (no layout shift or jank)
