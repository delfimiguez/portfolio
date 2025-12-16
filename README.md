# Portfolio Website - Complete System with Project Detail Pages

## Overview

Complete portfolio website for Delfina Miguez featuring three audience-focused entry points, individual project detail pages, and modernized About/Services pages with sticky sidebar navigation.

## File Structure

```
portfolio/
├── index.html                      # Landing page with blob animation
├── styles.css                      # Landing page styles
├── script.js                       # Landing page letter blob interaction
│
├── global.css                      # Shared styles for all pages
├── global.js                       # Shared JavaScript (Process toggle, nav, tabs, renderers)
├── projects-data-extended.js       # Complete project database with detail content
│
├── recruiters.html                 # Case studies with Process toggle
├── clients.html                    # Client work with tabs (Design/Photography)
├── playground.html                 # Interactive experiments
│
├── projects/
│   └── project.html                # Reusable project detail template
├── project-detail.css              # Styles for project pages
├── project-detail.js               # Dynamic project page population
│
├── about.html                      # About page with modern layout
├── services.html                   # Services page with card layout
├── content-pages.css               # Styles for About/Services
├── content-pages.js                # Scroll spy for content pages
│
└── contact.html                    # Contact information
```

## New Features

### 1. Project Detail Pages ✨

**Every project now has its own dedicated page.**

#### How It Works
- Project cards link to `/projects/project.html?slug=project-name`
- URL slug parameter identifies which project to load
- Data fetched from `projects-data-extended.js`
- Page dynamically populated with project content

#### Project Page Structure
- **Header**: Title, subtitle, category, year, client
- **Sticky Sidebar**: Contents navigation with scroll spy
- **Hero Image**: Large format placeholder
- **Content Sections**: Summary, Challenge, Process, Outcome, Learnings
- **Image Grids**: Placeholder support for project imagery
- **Back Navigation**: Return to project list

#### Data Structure
Each project in `projects-data-extended.js` includes:
```javascript
{
    id: 'project-id',
    slug: 'project-slug',           // Used in URL
    title: 'Project Title',
    subtitle: 'Short description',
    category: 'Graphic Design',
    tags: ['Tag1', 'Tag2'],
    year: '2024',
    clientType: 'Client',
    client: 'Client Name',
    
    sections: {
        summary: {
            title: 'Summary',
            content: 'Detailed text...',
            images: ['hero', 'overview-1']
        },
        challenge: {
            title: 'Challenge',
            content: 'Problem description...',
            images: ['challenge-before']
        }
        // ... more sections
    }
}
```

#### Adding New Projects
1. Open `projects-data-extended.js`
2. Add project object to appropriate array (graphicDesign, photography, vibeCoding)
3. Include all required fields + slug
4. Define sections with title, content, and optional images
5. Project automatically appears in listings and has detail page

### 2. Data-Driven System

**Single source of truth for all content.**

- All projects defined in `projects-data-extended.js`
- Project lists automatically render from data
- Project detail pages automatically populate from data
- Change data → changes appear everywhere

#### Helper Functions
```javascript
getProjectBySlug(slug)      // Get single project
getProjectsByCategory(cat)  // Get all in category
getRecruiterProjects()      // Curated for recruiters
getClientProjects()         // All for clients
```

### 3. Modernized About & Services Pages

**Editorial layout with sticky sidebar navigation.**

#### About Page Features
- Summary section
- Strength cards (grid layout)
- Industries as pill tags
- Experience and approach sections
- Background narrative

#### Services Page Features
- Service cards (one per offering)
- Deliverables as pills
- How I Work section
- Contact CTA

#### Shared Features
- Sticky sidebar: "Contents" with jump links
- Scroll spy: Highlights current section
- Smooth scrolling to sections
- Mobile responsive: Sidebar becomes horizontal tabs

## Key Concepts

### Sticky Sidebar Navigation
Both project detail pages and content pages use:
```css
.sidebar {
    position: sticky;
    top: calc(60px + var(--spacing-lg));
}
```

Mobile: Converts to horizontal scrolling pills

### Scroll Spy
Active nav link updates based on scroll position:
```javascript
IntersectionObserver monitors sections
Adds 'active' class to current nav link
```

### Responsive Behavior
- **Desktop**: Sidebar left, content right
- **Tablet**: Narrower sidebar
- **Mobile**: Sidebar above content as horizontal nav

## Usage Guide

### Updating Project Content

**To edit existing project:**
1. Find project in `projects-data-extended.js`
2. Update fields as needed
3. Modify section content
4. Add/remove images arrays

**To add new project:**
1. Copy existing project object
2. Change slug (must be unique, URL-safe)
3. Update all content fields
4. Add to appropriate array
5. Project appears automatically

### Customizing Layouts

**Project Detail Pages:**
- Edit `project-detail.css` for styling
- Edit `project-detail.js` for rendering logic
- Template is `projects/project.html`

**Content Pages:**
- Edit `content-pages.css` for styling
- Edit `content-pages.js` for scroll behavior
- Templates are `about.html` and `services.html`

### Design Principles Maintained

- **Typography**: Original Helvetica/Gelasio combination
- **Colors**: Black text, white background, subtle grays
- **Spacing**: Consistent rhythm and whitespace
- **Interactions**: Minimal, purposeful
- **Layout**: Editorial, content-first

## Process Toggle

**Still works on recruiters page:**
- Toggle between summary and detailed case studies
- State persists via localStorage
- Shows/hides `.project-case-study` sections
- Uses CSS class toggle (no page reload)

## Navigation

### Global Nav
- Fixed header on all pages (except landing)
- Links to: Recruiters, Clients, Playground, About, Services, Contact
- Mobile: Hamburger menu

### Landing Nav
- Three pill buttons at bottom
- Link to: Recruiters, Clients, Playground
- Responsive: Stack vertically on mobile

## Error Handling

### Project Detail Pages
If slug missing or project not found:
- Hides project content
- Shows error state with message
- Provides link back to projects

## Performance Notes

- All JavaScript is vanilla (no frameworks)
- Minimal DOM manipulation
- Intersection Observer for scroll spy (performant)
- CSS-only animations where possible

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions
Mobile Safari and Chrome Android fully supported

## File Relationships

```
Landing (index.html)
  ├─> styles.css (landing-specific)
  └─> script.js (blob animation)

Main Pages (recruiters, clients, playground)
  ├─> global.css (shared styles)
  ├─> global.js (shared functionality)
  └─> projects-data-extended.js (project data)
      └─> Links to projects/project.html?slug=X

Project Detail (projects/project.html)
  ├─> global.css (nav/base)
  ├─> project-detail.css (detail page specific)
  ├─> project-detail.js (population logic)
  └─> projects-data-extended.js (fetches by slug)

Content Pages (about, services)
  ├─> global.css (nav/base)
  ├─> content-pages.css (layout specific)
  └─> content-pages.js (scroll spy)
```

## Maintenance Checklist

**Adding Projects:**
- [ ] Add to `projects-data-extended.js`
- [ ] Include unique slug
- [ ] Define all sections with content
- [ ] Test detail page renders correctly
- [ ] Check mobile responsiveness

**Updating Content:**
- [ ] Edit text in data file
- [ ] No code changes needed
- [ ] Changes reflect across site

**Styling Changes:**
- [ ] Maintain existing visual identity
- [ ] Test across breakpoints
- [ ] Verify scroll behavior

## Next Steps (Future Enhancements)

- Add real images (replace placeholders)
- Implement image lightbox for project images
- Add project filtering/sorting
- Add related projects section
- Implement search functionality
- Add animation on page transitions

---

**Built with vanilla HTML/CSS/JS for maintainability and performance.**
**Data-driven architecture enables easy content updates without code changes.**
**Modern editorial layout maintains clean, professional aesthetic.**
