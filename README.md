# Portfolio Website - Complete System

## Overview

This is a complete portfolio website for Delfina Miguez featuring three audience-focused entry points: Recruiters (process-focused), Clients (outcome-focused), and Playground (interactive experiments).

## File Structure

```
portfolio/
├── index.html              # Landing page (unchanged design + 3 nav buttons)
├── styles.css              # Landing page styles (original)
├── script.js               # Landing page letter blob interaction (original)
│
├── global.css              # Shared styles for all pages
├── global.js               # Shared JavaScript (Process toggle, nav, tabs)
├── projects-data.js        # Centralized project database
│
├── recruiters.html         # Case studies with Process toggle
├── clients.html            # Client work with tabs (Design/Photography)
├── playground.html         # Interactive experiments
├── about.html              # Professional bio
├── services.html           # Service offerings
└── contact.html            # Contact information
```

## Key Features

### 1. Process Toggle System
- Global toggle labeled "Process" in header of recruiters page
- **OFF** (default): Shows minimal text, visual-first, fast scanning
- **ON**: Reveals detailed case study sections (Context, Role, Problem, Process, Tools, Outcome, Learnings)
- State persists across page loads using localStorage
- Works without page reload via CSS class toggling

### 2. Content Management
All project content lives in `projects-data.js`:
- **Graphic Design**: 9 projects (curated for recruiters) + full set for clients
- **Photography**: 12 series with hero + frame thumbnails
- **Vibe Coding**: 6 interactive experiments

To update content, edit `projects-data.js` only. The system automatically renders projects on each page.

### 3. Navigation Structure

**Landing Page (index.html)**
- Maintains original design completely
- Added 3 outline navigation buttons:
  - For Recruiters → recruiters.html
  - For Clients → clients.html
  - Playground → playground.html

**Global Navigation (all other pages)**
- Fixed header with logo + menu
- Links to: Recruiters, Clients, Playground, About, Services, Contact
- Mobile-responsive with hamburger menu

### 4. Page Descriptions

**recruiters.html**
- Shows 9 Graphic Design + 6 Vibe Coding projects
- Process toggle in header
- Focus: Case studies, strategic thinking, measurable outcomes

**clients.html**
- Two tabs: Graphic Design (all projects) / Photography (12 series)
- Photography shown as series with hero + 3 frames
- Focus: Visual outcomes, completed work

**playground.html**
- 6 interactive experiments
- Each with thumbnail, description, "Open Experiment" link
- Focus: Creative coding, technical exploration

**about.html**
- Professional bio
- Core strengths, industries, approach
- Content page layout (max-width 800px, centered)

**services.html**
- Four service categories with deliverables
- How I work section
- Content page layout

**contact.html**
- Email, Instagram, LinkedIn, website
- Availability statement
- Content page layout

## How to Use

### Updating Projects

1. Open `projects-data.js`
2. Find the appropriate array (graphicDesign, photography, vibeCoding)
3. Add/edit project objects following the existing structure
4. Save - changes will appear automatically on relevant pages

### Customizing Styles

- Landing page styles: `styles.css`
- Global site styles: `global.css`
- All styles use CSS variables for easy theming

### Process Toggle

The Process toggle is implemented as:
```javascript
// When toggle is ON, body gets class "process-on"
body.process-on .project-case-study { display: block; }
body.process-on .project-summary { display: none; }
```

## Design Principles

1. **Minimal, Editorial, Clean**: Typography-led hierarchy, generous whitespace
2. **Landing Integrity**: Original design completely preserved
3. **Systematic Thinking**: Constraint-based, scalable content models
4. **No Lorem Ipsum**: All placeholder text is realistic and professional
5. **Accessibility**: Proper focus states, semantic HTML, reduced motion support

## Technology Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- Vanilla JS for interactivity
- CSS Grid for layouts
- localStorage for Process toggle persistence
- Mobile-responsive throughout

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions
Mobile Safari and Chrome Android fully supported

## Future Expansion

To add new pages:
1. Create HTML file using content-page or projects-container layout
2. Include global.css and global.js
3. Add link to global navigation
4. Follow existing naming conventions

To add new project types:
1. Add new array to PORTFOLIO_DATA in projects-data.js
2. Create renderer function in global.js (see ProjectRenderer class)
3. Create page to display them

## Notes

- All thumbnails are placeholders (use data-thumbnail attribute to reference images later)
- Landing page blob interaction is self-contained in script.js
- Mobile navigation uses hamburger menu (auto-generated by global.js)
- Tab system on clients page is self-contained
- Active nav link highlighting is automatic

## Maintenance

Content updates: Edit projects-data.js only
Style updates: global.css for site-wide, styles.css for landing only
New features: Add to global.js for site-wide functionality

---

Built with attention to systematic design, scalability, and maintainability.
