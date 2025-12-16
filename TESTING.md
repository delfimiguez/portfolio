# Portfolio Testing Checklist

## ✅ Files Included

### HTML Files
- [x] index.html - Landing page
- [x] recruiters.html - Case studies with Process toggle
- [x] clients.html - Client work with tabs
- [x] playground.html - Interactive experiments
- [x] about.html - About page with sidebar
- [x] services.html - Services page with cards
- [x] contact.html - Contact information
- [x] projects/project.html - Project detail template

### CSS Files
- [x] styles.css - Landing page styles
- [x] global.css - Shared styles for all pages
- [x] project-detail.css - Project detail page styles
- [x] content-pages.css - About/Services page styles

### JavaScript Files
- [x] script.js - Landing page letter blob animation
- [x] global.js - Shared functionality (nav, toggles, renderers)
- [x] project-detail.js - Project page population
- [x] content-pages.js - Scroll spy for content pages
- [x] projects-data-extended.js - Complete project database

### Documentation
- [x] README.md - Complete documentation

## 🧪 Functionality Testing

### Landing Page (index.html)
- [ ] Page loads correctly
- [ ] Letter blob animation works on hover
- [ ] Name splits into individual letters
- [ ] Colored capsules appear behind letters on hover
- [ ] Capsules fade out after animation
- [ ] Three navigation buttons visible at bottom
- [ ] Buttons are rounded rectangles (not pills)
- [ ] Buttons link to correct pages:
  - For Recruiters → recruiters.html
  - For Clients → clients.html
  - Playground → playground.html
- [ ] Mobile: Buttons stack vertically

### Recruiters Page (recruiters.html)
- [ ] Page loads correctly
- [ ] Global navigation appears at top
- [ ] Process toggle is visible in header
- [ ] Process toggle works (click to toggle)
- [ ] Projects render from data file
- [ ] Graphic Design projects appear (3 projects)
- [ ] Vibe Coding projects appear (2 projects)
- [ ] When Process OFF: Shows short summaries
- [ ] When Process ON: Shows full case study sections
- [ ] Toggle state persists on page reload
- [ ] Project cards are clickable
- [ ] Clicking project opens detail page

### Clients Page (clients.html)
- [ ] Page loads correctly
- [ ] Two tabs visible: "Graphic Design" and "Photography"
- [ ] Graphic Design tab shows all design projects
- [ ] Photography tab shows photography series
- [ ] Photography series show hero + 3 frame thumbnails
- [ ] Tab switching works
- [ ] Project cards link to detail pages

### Playground Page (playground.html)
- [ ] Page loads correctly
- [ ] Experiments render from data (6 experiments)
- [ ] Each experiment shows:
  - Thumbnail
  - Title
  - Tags
  - Description
  - "Open Experiment" link (if has liveLink)
- [ ] Experiment cards link to detail pages

### Project Detail Pages (projects/project.html?slug=X)
- [ ] Page loads with valid slug
- [ ] Header shows: category, year, client
- [ ] Project title displays correctly
- [ ] Project subtitle displays correctly
- [ ] Sticky sidebar appears on left
- [ ] Sidebar "Contents" links to sections
- [ ] Hero image placeholder displays
- [ ] Content sections render:
  - Summary
  - Challenge
  - Process
  - Outcome
  - Learnings (or appropriate sections)
- [ ] Image placeholders appear in sections
- [ ] Scroll spy works (active link updates on scroll)
- [ ] Clicking sidebar link scrolls to section smoothly
- [ ] "Back to Projects" link works
- [ ] Invalid slug shows error page
- [ ] Mobile: Sidebar moves to top as horizontal nav

### About Page (about.html)
- [ ] Page loads correctly
- [ ] Sticky sidebar appears with Contents
- [ ] Sections render:
  - Summary
  - Core Strengths (as cards)
  - Industries (as pills)
  - Experience
  - Approach
  - Background
- [ ] Strength cards display in grid
- [ ] Industry pills wrap correctly
- [ ] Scroll spy works
- [ ] Mobile: Sidebar becomes horizontal

### Services Page (services.html)
- [ ] Page loads correctly
- [ ] Header intro text displays
- [ ] Sticky sidebar with Contents
- [ ] Service cards render (4 services):
  - Branding & Visual Identity
  - Campaign & Graphic Design
  - Photography
  - Interactive Experiences
- [ ] Each service shows deliverables as pills
- [ ] "How I Work" section visible
- [ ] "Let's Talk" section with contact link
- [ ] Scroll spy works
- [ ] Mobile responsive

### Contact Page (contact.html)
- [ ] Page loads correctly
- [ ] Email, Instagram, LinkedIn, Website links work
- [ ] Availability statement visible
- [ ] Links have proper styling

### Global Navigation
- [ ] Fixed header on all pages (except landing)
- [ ] Logo links to index.html
- [ ] All nav links work:
  - Recruiters
  - Clients
  - Playground
  - About
  - Services
  - Contact
- [ ] Mobile: Hamburger menu appears
- [ ] Mobile: Menu opens/closes on click
- [ ] Mobile: Menu closes when link clicked
- [ ] Active page highlighted in nav

### Process Toggle
- [ ] Toggle appears on recruiters page only
- [ ] Label says "Process"
- [ ] Clicking label toggles state
- [ ] Clicking switch toggles state
- [ ] Visual feedback: switch moves, fills background
- [ ] Projects update immediately (no reload)
- [ ] State saves to localStorage
- [ ] State restores on page reload

### Data System
- [ ] Projects render from projects-data-extended.js
- [ ] All project cards appear correctly
- [ ] Project thumbnails show placeholders
- [ ] Project metadata displays (tags, year, client)
- [ ] Summary text appears
- [ ] Links contain correct slugs

### Responsive Behavior
- [ ] Desktop (1200px+): Full sidebar layout
- [ ] Tablet (768-1199px): Narrower sidebar
- [ ] Mobile (< 768px): Sidebar converts to horizontal
- [ ] All text remains readable
- [ ] Buttons/links remain tappable
- [ ] No horizontal scroll on any page
- [ ] Navigation usable on all sizes

### Visual Consistency
- [ ] Typography consistent across pages (Helvetica + Gelasio)
- [ ] Color scheme consistent (black, white, grays)
- [ ] Spacing rhythm consistent
- [ ] Hover states work on interactive elements
- [ ] Focus states visible for keyboard navigation
- [ ] No visual bugs or layout breaks

## 🐛 Common Issues & Fixes

### "Projects not appearing"
→ Check: Is projects-data-extended.js loaded before rendering scripts?
→ Fix: Ensure script order in HTML

### "Project detail page shows error"
→ Check: Does project have `slug` field in data?
→ Fix: Add slug to project in data file

### "Process toggle doesn't work"
→ Check: Is checkbox before toggle-switch in HTML?
→ Fix: Ensure structure: <input> then <label class="toggle-switch">

### "Sidebar not sticky"
→ Check: Is CSS loaded correctly?
→ Fix: Verify position: sticky and top values in CSS

### "Landing animation not working"
→ Check: Is script.js loaded?
→ Check: Are classes .split-text present on elements?
→ Fix: Verify script.js loads and executes

### "Mobile menu not working"
→ Check: Is global.js loaded?
→ Fix: Check MobileNav class initialization

## 📁 File Structure Verification

```
portfolio/
├── index.html
├── recruiters.html
├── clients.html
├── playground.html
├── about.html
├── services.html
├── contact.html
├── projects/
│   └── project.html
├── styles.css
├── global.css
├── project-detail.css
├── content-pages.css
├── script.js
├── global.js
├── project-detail.js
├── content-pages.js
├── projects-data-extended.js
└── README.md
```

All files should be in the same directory level (except projects/ folder).

## ✅ Final Checklist

- [ ] All files present
- [ ] No console errors in browser
- [ ] All links work
- [ ] All animations work
- [ ] Mobile responsive
- [ ] No broken features
- [ ] Data loads correctly
- [ ] Navigation works
- [ ] Ready for deployment

---

**If any test fails, check the specific section in README.md for troubleshooting.**
