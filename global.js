/**
 * ============================================
 * GLOBAL PORTFOLIO JAVASCRIPT
 * ============================================
 * Handles Process toggle and project rendering
 */

// ============================================
// PROCESS TOGGLE SYSTEM
// ============================================

class ProcessToggle {
    constructor() {
        this.init();
    }

    init() {
        this.toggle = document.getElementById('processToggle');
        if (!this.toggle) return;

        // Determine initial state (single source of truth)
        // 1) localStorage if present
        // 2) otherwise default OFF
        const saved = localStorage.getItem('processMode');
        const initialOn = saved === 'on';

        this.applyState(initialOn);

        // Listen for toggle changes
        this.toggle.addEventListener('change', (e) => {
            const isOn = !!e.target.checked;
            this.applyState(isOn);
        });
    }

    applyState(isOn) {
        // Sync checkbox UI
        this.toggle.checked = isOn;

        // Sync DOM state
        document.body.classList.toggle('process-on', isOn);

        // Persist
        localStorage.setItem('processMode', isOn ? 'on' : 'off');
    }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

class MobileNav {
    constructor() {
        this.init();
    }

    init() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav-links');

        if (!toggle || !nav) return;

        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isActive = nav.classList.contains('active');
            toggle.textContent = isActive ? 'Close' : 'Menu';
        });

        // Close nav when clicking a link
        const links = nav.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.textContent = 'Menu';
            });
        });
    }
}

// ============================================
// PROJECT RENDERER
// ============================================

class ProjectRenderer {
    static renderProjectCard(project) {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = `projects/project.html?slug=${project.slug}`;
        card.dataset.projectId = project.id;

        card.innerHTML = `
            <div class="project-thumbnail" data-thumbnail="${project.thumbnail}"></div>
            <div class="project-info">
                <div class="project-tags">${(project.tags || []).join(' / ')}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">${project.year} • ${project.clientType}${project.client ? ` • ${project.client}` : ''}</div>

                <div class="project-summary">
                    ${project.summary || ''}
                </div>

                ${project.caseStudy ? this.renderCaseStudy(project.caseStudy) : ''}
            </div>
        `;

        return card;
    }

    // --- helpers to safely render arrays/strings ---
    static _asTextList(value) {
        if (!value) return '';
        if (Array.isArray(value)) return value.join(', ');
        return String(value);
    }

    static renderCaseStudy(caseStudy) {
        return `
            <div class="project-case-study">
                ${caseStudy.context ? `
                    <div class="case-study-section">
                        <h4>Context</h4>
                        <p>${caseStudy.context}</p>
                    </div>
                ` : ''}

                ${caseStudy.role ? `
                    <div class="case-study-section">
                        <h4>Role</h4>
                        <p>${caseStudy.role}</p>
                    </div>
                ` : ''}

                ${caseStudy.problem ? `
                    <div class="case-study-section">
                        <h4>Problem</h4>
                        <p>${caseStudy.problem}</p>
                    </div>
                ` : ''}

                ${caseStudy.process ? `
                    <div class="case-study-section">
                        <h4>Process</h4>
                        <p>${caseStudy.process}</p>
                    </div>
                ` : ''}

                ${caseStudy.approach ? `
                    <div class="case-study-section">
                        <h4>Approach</h4>
                        <p>${caseStudy.approach}</p>
                    </div>
                ` : ''}

                ${caseStudy.tools ? `
                    <div class="case-study-section">
                        <h4>Tools</h4>
                        <p class="case-study-tools">${this._asTextList(caseStudy.tools)}</p>
                    </div>
                ` : ''}

                ${caseStudy.tech ? `
                    <div class="case-study-section">
                        <h4>Technology</h4>
                        <p class="case-study-tools">${this._asTextList(caseStudy.tech)}</p>
                    </div>
                ` : ''}

                ${caseStudy.outcome ? `
                    <div class="case-study-section">
                        <h4>Outcome</h4>
                        <p>${caseStudy.outcome}</p>
                    </div>
                ` : ''}

                ${caseStudy.learnings ? `
                    <div class="case-study-section">
                        <h4>Learnings</h4>
                        <p>${caseStudy.learnings}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    static renderPhotoSeriesCard(series) {
        const card = document.createElement('a');
        card.className = 'photo-series-card';
        card.href = `projects/project.html?slug=${series.slug}`;
        card.dataset.projectId = series.id;

        card.innerHTML = `
            <div class="series-thumbnail" data-thumbnail="${series.thumbnail}"></div>
            <div class="series-frames">
                <div class="series-frame"></div>
                <div class="series-frame"></div>
                <div class="series-frame"></div>
            </div>
            <div class="project-info">
                <div class="project-tags">${(series.tags || []).join(' / ')}</div>
                <h3 class="project-title">${series.title}</h3>
                <div class="project-meta">${series.seriesCount} images • ${series.year}</div>

                <div class="project-summary">
                    ${series.summary || ''}
                </div>

                ${series.caseStudy ? this.renderPhotoCaseStudy(series.caseStudy) : ''}
            </div>
        `;

        return card;
    }

    static renderPhotoCaseStudy(caseStudy) {
        return `
            <div class="project-case-study">
                ${caseStudy.context ? `
                    <div class="case-study-section">
                        <h4>Context</h4>
                        <p>${caseStudy.context}</p>
                    </div>
                ` : ''}

                ${caseStudy.approach ? `
                    <div class="case-study-section">
                        <h4>Approach</h4>
                        <p>${caseStudy.approach}</p>
                    </div>
                ` : ''}

                ${caseStudy.tools ? `
                    <div class="case-study-section">
                        <h4>Equipment</h4>
                        <p class="case-study-tools">${this._asTextList(caseStudy.tools)}</p>
                    </div>
                ` : ''}

                ${caseStudy.outcome ? `
                    <div class="case-study-section">
                        <h4>Outcome</h4>
                        <p>${caseStudy.outcome}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    static renderExperimentCard(project) {
        const card = document.createElement('div');
        card.className = 'experiment-card';

        card.innerHTML = `
            <div class="experiment-thumbnail" data-thumbnail="${project.thumbnail}"></div>
            <div class="project-info">
                <div class="project-tags">${(project.tags || []).join(' / ')}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">${project.year}</div>
            </div>
            <p class="experiment-description">${project.summary || ''}</p>
            ${project.liveLink ? `<a href="${project.liveLink}" class="experiment-link" target="_blank" rel="noopener">Open Experiment →</a>` : ''}
        `;

        return card;
    }
}

// ============================================
// TAB SYSTEM (FOR CLIENT PAGE)
// ============================================

class TabSystem {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.init();
    }

    init() {
        const buttons = this.container.querySelectorAll('.tab-button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.tab;
                this.switchTab(targetId);
            });
        });
    }

    switchTab(targetId) {
        const buttons = this.container.querySelectorAll('.tab-button');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === targetId);
        });

        const contents = this.container.querySelectorAll('.tab-content');
        contents.forEach(content => {
            content.classList.toggle('active', content.id === targetId);
        });
    }
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    new ProcessToggle();
    new MobileNav();
    setActiveNavLink();

    if (document.querySelector('.tabs')) {
        new TabSystem('.tabs');
    }
});
