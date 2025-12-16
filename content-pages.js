/**
 * ============================================
 * CONTENT PAGES JAVASCRIPT
 * ============================================
 * Scroll spy and smooth scrolling for About/Services
 */

class ContentPageNav {
    constructor() {
        this.init();
    }

    init() {
        const sections = document.querySelectorAll('.content-section, .service-card');
        const navLinks = document.querySelectorAll('.content-nav-links a');

        if (sections.length === 0 || navLinks.length === 0) return;

        // Scroll spy
        this.initScrollSpy(sections, navLinks);

        // Smooth scrolling
        this.initSmoothScroll(navLinks);
    }

    initScrollSpy(sections, navLinks) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        
                        // Remove active class from all links
                        navLinks.forEach(link => link.classList.remove('active'));
                        
                        // Add active class to current link
                        const activeLink = document.querySelector(`.content-nav-links a[href="#${id}"]`);
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
    }

    initSmoothScroll(navLinks) {
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
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new ContentPageNav();
});
