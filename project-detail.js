/**
 * ============================================
 * PROJECT DETAIL PAGE POPULATION
 * ============================================
 * Dynamically loads and displays project details
 */

class ProjectDetailPage {
    constructor() {
        this.init();
    }

    init() {
        // Get slug from URL
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');

        if (!slug) {
            this.showError();
            return;
        }

        // Get project data
        const project = getProjectBySlug(slug);

        if (!project) {
            this.showError();
            return;
        }

        // Populate page
        this.populateHeader(project);
        this.populateNavigation(project);
        this.populateSections(project);
        this.initScrollSpy();
        this.initLightbox();
    }

    populateHeader(project) {
        // Update page title
        document.getElementById('page-title').textContent = `${project.title} — Delfina Miguez`;

        // Populate meta info
        const metaEl = document.getElementById('project-meta');
        const metaParts = [project.category, project.year];
        if (project.client) {
            metaParts.push(project.client);
        }
        metaEl.textContent = metaParts.join(' • ');

        // Populate title and subtitle
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-subtitle').textContent = project.subtitle;
    }

    populateNavigation(project) {
        const navEl = document.getElementById('project-nav');
        navEl.innerHTML = '';

        // Get section keys
        const sections = project.sections || {};
        const sectionKeys = Object.keys(sections);

        if (sectionKeys.length === 0) return;

        sectionKeys.forEach(key => {
            const section = sections[key];
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#section-${key}`;
            a.textContent = section.title;
            a.dataset.section = key;
            li.appendChild(a);
            navEl.appendChild(li);
        });
    }

    populateSections(project) {
        const sectionsContainer = document.getElementById('project-sections');
        sectionsContainer.innerHTML = '';

        const sections = project.sections || {};
        const sectionKeys = Object.keys(sections);

        if (sectionKeys.length === 0) {
            sectionsContainer.innerHTML = '<p>No detailed content available for this project.</p>';
            return;
        }

        sectionKeys.forEach(key => {
            const section = sections[key];
            const sectionEl = this.createSectionElement(key, section, project);
            sectionsContainer.appendChild(sectionEl);
        });
    }

    createSectionElement(key, section, project) {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'project-section';
        sectionEl.id = `section-${key}`;

        // Section title
        const title = document.createElement('h2');
        title.textContent = section.title;
        sectionEl.appendChild(title);

        // Section content
        const content = document.createElement('div');
        content.className = 'project-section-content';
        content.textContent = section.content;
        sectionEl.appendChild(content);

        // Section images (if any)
        if (section.images && section.images.length > 0) {
            const imagesGrid = this.createImagesGrid(section.images, project);
            sectionEl.appendChild(imagesGrid);
        }

        return sectionEl;
    }

    createImagesGrid(images, project) {
        const grid = document.createElement('div');
        grid.className = 'section-images';

        // Check if this is a photography project
        const isPhotography = project.category === 'Photography';

        if (isPhotography) {
            // Photography uses single column vertical grid
            grid.classList.add('photography-grid');
        } else {
            // Design projects use adaptive grid
            if (images.length === 1) {
                grid.classList.add('single-image');
            } else if (images.length === 2) {
                grid.classList.add('two-images');
            }
        }

        images.forEach(imageName => {
            const placeholder = document.createElement('div');
            placeholder.className = 'section-image-placeholder';
            
            // Create img element and attempt to load
            const img = document.createElement('img');
            
            if (isPhotography) {
                // Photography: images/photography/slug/01.jpg, 02.jpg, etc.
                img.src = `../images/photography/${project.slug}/${imageName}.jpg`;
            } else {
                // Design projects: images/projects/slug/imagename.jpg
                img.src = `../images/projects/${project.slug}/${imageName}.jpg`;
            }
            
            img.alt = `${project.title} - ${imageName}`;
            
            // If image loads successfully, append it
            img.onload = function() {
                placeholder.appendChild(img);
            };
            
            // If image fails to load, placeholder::after will show
            img.onerror = function() {
                // Image failed to load, placeholder will show gray box
            };
            
            grid.appendChild(placeholder);
        });

        return grid;
    }

    initScrollSpy() {
        // Highlight active nav link based on scroll position
        const sections = document.querySelectorAll('.project-section');
        const navLinks = document.querySelectorAll('.project-nav-links a');

        if (sections.length === 0 || navLinks.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const sectionKey = id.replace('section-', '');
                        
                        // Remove active class from all links
                        navLinks.forEach(link => link.classList.remove('active'));
                        
                        // Add active class to current link
                        const activeLink = document.querySelector(`[data-section="${sectionKey}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            },
            {
                rootMargin: '-100px 0px -66% 0px'
            }
        );

        sections.forEach(section => observer.observe(section));

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    showError() {
        document.querySelector('.project-detail-container').style.display = 'none';
        document.getElementById('error-state').style.display = 'flex';
    }

    initLightbox() {
        // Create lightbox element
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-content" src="" alt="Project image">
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('.lightbox-content');
        const lightboxClose = lightbox.querySelector('.lightbox-close');

        // Add click handlers to all project images
        document.addEventListener('click', (e) => {
            // Check if clicked element is an image inside section-image-placeholder
            const placeholder = e.target.closest('.section-image-placeholder');
            if (placeholder) {
                const img = placeholder.querySelector('img');
                if (img && img.complete) {
                    // Open lightbox with this image
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });

        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close button
        lightboxClose.addEventListener('click', (e) => {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new ProjectDetailPage();
});
