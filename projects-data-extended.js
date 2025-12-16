/**
 * ============================================
 * PORTFOLIO PROJECTS DATABASE - EXTENDED
 * ============================================
 * Complete project data including detail page content
 */

const PORTFOLIO_DATA = {
    // ========================================
    // GRAPHIC DESIGN PROJECTS
    // ========================================
    graphicDesign: [
        {
            id: 'revizto-brand-system',
            slug: 'revizto-brand-system',
            title: 'Revizto Brand System Toolkit',
            subtitle: 'Scalable design system for construction technology platform',
            category: 'Graphic Design',
            tags: ['Branding', 'Design System', 'B2B SaaS'],
            year: '2024',
            clientType: 'Client',
            client: 'Revizto',
            thumbnail: 'revizto-thumb',
            
            summary: 'Comprehensive brand output simulator and design system documentation for construction technology platform.',
            
            // Case study for Process toggle (recruiters page)
            caseStudy: {
                context: 'Revizto needed scalable brand guidelines that could be applied consistently across digital and print touchpoints by both internal teams and external partners.',
                role: 'Senior Creative Developer & Brand System Designer',
                problem: 'Existing brand assets lacked systematic guardrails, leading to inconsistent application across social media, presentations, and marketing materials.',
                process: 'Developed an interactive brand simulator that generates social media formats with automated composition rules. Built comprehensive documentation covering typography, color systems, layout grids, and asset usage. Created constraint-based output templates to prevent brand misuse.',
                tools: ['Figma', 'JavaScript', 'HTML/CSS', 'Brand Guidelines'],
                outcome: 'Delivered automated brand consistency tool that reduced design review cycles by 60% and empowered non-designers to create on-brand content.',
                learnings: 'Constraint-based systems are more effective than infinite customization options for maintaining brand integrity at scale.'
            },
            
            // Full project detail content
            sections: {
                summary: {
                    title: 'Summary',
                    content: 'Revizto needed a systematic approach to brand application that could scale across teams and touchpoints. This project delivered both strategic guidelines and practical tools—including an interactive brand simulator that generates social media assets with automated composition rules. The system empowers non-designers to create on-brand content while maintaining visual consistency.',
                    images: ['hero', 'overview-1', 'overview-2']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Existing brand assets lacked systematic guardrails, leading to inconsistent application across social media, presentations, and marketing materials. Each new asset required design team review, creating bottlenecks. The company needed a solution that preserved brand integrity while enabling distributed content creation. The challenge was building a system flexible enough for diverse use cases but constrained enough to prevent misuse.',
                    images: ['challenge-before', 'challenge-analysis']
                },
                process: {
                    title: 'Process',
                    content: 'Started with comprehensive brand audit documenting existing touchpoints and pain points. Conducted stakeholder interviews across marketing, sales, and product teams to understand workflow constraints. Developed compositional rules based on grid systems and optical balance principles. Built interactive prototypes to test constraint effectiveness. Iterated based on real-world usage, adjusting rules where they felt too restrictive or too loose. Created extensive documentation with clear examples of correct and incorrect applications.',
                    images: ['process-audit', 'process-sketches', 'process-prototype', 'process-testing']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The brand system reduced design review cycles by 60%, freeing the design team to focus on strategic work. Marketing team adoption was immediate—within two weeks, 90% of social posts used the new system. Brand consistency metrics improved measurably across all channels. The interactive simulator became the most-used internal tool, with teams requesting expansions to additional formats. Six months post-launch, the company reported stronger brand recognition in user surveys.',
                    images: ['outcome-tool', 'outcome-examples', 'outcome-metrics']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Constraint-based systems are more effective than infinite customization options for maintaining brand integrity at scale. Users need clear boundaries, not endless choices. The most successful aspect was making "correct" choices automatic—when the tool only allows good outcomes, users don\'t need deep design knowledge. Documentation matters, but tools matter more. People will use a good tool over reading guidelines every time.',
                    images: []
                }
            }
        },
        {
            id: 'fintech-rebrand',
            slug: 'fintech-rebrand',
            title: 'Altura Financial Identity',
            subtitle: 'Complete rebrand for emerging fintech platform',
            category: 'Graphic Design',
            tags: ['Rebrand', 'FinTech', 'Identity System'],
            year: '2023',
            clientType: 'Client',
            client: 'Altura Financial',
            thumbnail: 'altura-thumb',
            
            summary: 'Complete visual identity overhaul for emerging financial technology platform targeting Gen Z investors.',
            
            caseStudy: {
                context: 'Altura Financial needed to differentiate in a crowded fintech market while building trust with a skeptical younger demographic.',
                role: 'Lead Brand Designer',
                problem: 'Existing identity felt corporate and dated, failing to connect with the target audience\'s values around transparency and accessibility.',
                process: 'Developed bold, approachable visual language combining geometric precision with organic gradients. Created comprehensive brand book including logo system, color palette, typography, illustration style, and photography guidelines.',
                tools: ['Illustrator', 'Photoshop', 'InDesign', 'Brand Strategy'],
                outcome: 'New identity contributed to 180% increase in app downloads within first quarter post-launch.',
                learnings: 'Financial brands can embrace personality without sacrificing credibility when grounded in strategic positioning.'
            },
            
            sections: {
                summary: {
                    title: 'Summary',
                    content: 'Altura Financial needed to differentiate in a crowded fintech market while building trust with a skeptical younger demographic. The rebrand balances approachability with credibility, using bold geometric forms softened by organic gradients. The system spans logo, color palette, typography, illustration style, photography guidelines, and motion principles.',
                    images: ['hero', 'logo-system', 'color-palette']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'The existing identity felt corporate and dated, failing to connect with target audience values around transparency and accessibility. However, the rebrand couldn\'t swing too far into "playful startup" territory—users need confidence when trusting a platform with their money. Finding the balance between friendly and trustworthy was the core challenge.',
                    images: ['challenge-old-brand', 'challenge-competitive']
                },
                process: {
                    title: 'Process',
                    content: 'Began with audience research—interviews with Gen Z investors about their perception of financial brands. Identified key attributes: clear, modern, honest, optimistic. Explored visual directions through mood boards and style tiles. Developed logo concepts balancing geometric structure with dynamic energy. Created comprehensive brand guidelines covering all touchpoints. Designed sample applications to test system flexibility.',
                    images: ['process-research', 'process-exploration', 'process-applications']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'New identity contributed to 180% increase in app downloads within first quarter post-launch. Brand recognition in target demographic doubled within six months. Internal teams reported confidence in representing the brand consistently. The identity system proved robust across digital and print applications while maintaining distinct personality.',
                    images: ['outcome-app', 'outcome-marketing', 'outcome-touchpoints']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Financial brands can embrace personality without sacrificing credibility when grounded in strategic positioning. The key is consistency—bold moves work when applied systematically. Gradient usage required careful technical specification to ensure reproduction quality across mediums. Building flexibility into the system from day one prevented future constraints.',
                    images: []
                }
            }
        },
        {
            id: 'music-festival-identity',
            slug: 'music-festival-identity',
            title: 'Sónar Fringe Festival Identity',
            subtitle: 'Dynamic visual system for experimental music events',
            category: 'Graphic Design',
            tags: ['Event Branding', 'Music', 'Experiential'],
            year: '2024',
            clientType: 'Client',
            client: 'Sónar Fringe BCN',
            thumbnail: 'sonar-thumb',
            
            summary: 'Dynamic visual identity for experimental music and technology festival fringe events.',
            
            caseStudy: {
                context: 'Fringe events needed distinct identity that complemented main Sónar festival while establishing independent presence.',
                role: 'Visual Identity Designer',
                problem: 'How to honor electronic music\'s experimental nature while maintaining legibility across chaotic festival environments.',
                process: 'Created generative visual system where typography and color respond to audio input. Developed flexible poster templates, wayfinding, and digital assets that adapt to venue-specific contexts.',
                tools: ['Processing', 'Illustrator', 'Generative Design'],
                outcome: 'Identity received international design recognition and contributed to 120% attendance increase.',
                learnings: 'Systematic thinking can coexist with spontaneity—structure enables improvisation.'
            },
            
            sections: {
                summary: {
                    title: 'Summary',
                    content: 'Sónar Fringe events needed distinct identity that complemented the main festival while establishing independent presence. The solution: a generative visual system where typography and color respond to audio input, creating unique expressions for each event while maintaining systematic coherence.',
                    images: ['hero', 'system-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'How to honor electronic music\'s experimental nature while maintaining legibility across chaotic festival environments. The identity needed to work on everything from Instagram posts to large-format venue signage, often competing with complex visual backgrounds. It had to feel related to main Sónar brand without being derivative.',
                    images: ['challenge-context', 'challenge-applications']
                },
                process: {
                    title: 'Process',
                    content: 'Explored generative design systems using Processing, feeding audio files to generate visual outputs. Developed rules for how waveforms translate to typographic distortion and color selection. Created flexible poster templates that work with generated elements. Tested legibility across scales and contexts. Developed application guidelines that maintain systematic thinking while embracing variation.',
                    images: ['process-generative', 'process-templates', 'process-testing']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Identity received international design recognition including features in multiple design publications. More importantly, it contributed to 120% attendance increase year-over-year. The generative approach allowed each event to have distinct personality while maintaining brand recognition. Artists specifically mentioned the identity quality in booking decisions.',
                    images: ['outcome-posters', 'outcome-venue', 'outcome-digital']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Systematic thinking can coexist with spontaneity—structure enables improvisation rather than constraining it. Generative systems require clear constraints to avoid visual chaos. The most successful elements were those with strong underlying grids despite surface-level dynamism. Technical execution matters: generating high-quality outputs at scale required significant optimization.',
                    images: []
                }
            }
        }
    ],

    // ========================================
    // PHOTOGRAPHY PROJECTS (SERIES)
    // ========================================
    photography: [
        {
            id: 'urban-silence',
            slug: 'urban-silence',
            title: 'Urban Silence',
            subtitle: 'Architectural study of Barcelona modernism',
            category: 'Photography',
            tags: ['Architecture', 'Urban', 'Fine Art'],
            year: '2024',
            clientType: 'Personal',
            seriesCount: 18,
            thumbnail: 'urban-silence-hero',
            
            summary: 'Architectural study of Barcelona\'s modernist buildings in early morning light, emphasizing geometric forms and negative space.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Urban Silence explores Barcelona\'s modernist architecture during liminal morning hours when the city is emptiest. Shot between 6-7am, the series emphasizes geometric forms, negative space, and the relationship between built environment and sky. Each image isolates architectural elements from their urban context, creating abstract compositions from functional structures.',
                    images: ['hero', 'overview-1', 'overview-2', 'overview-3']
                },
                approach: {
                    title: 'Approach',
                    content: 'Photographed consistently during early morning hours to capture empty streets and dramatic light. Focused on symmetry, leading lines, and relationship between built form and sky. Used minimal post-processing to preserve architectural colors while emphasizing structural clarity. Selected final images prioritize graphic quality and spatial rhythm.',
                    images: ['approach-1', 'approach-2', 'approach-3', 'approach-4']
                },
                technical: {
                    title: 'Technical Details',
                    content: 'Shot on Canon EOS R5 with 24-70mm f/2.8 lens. Tripod used for consistency and precision. Raw processing in Lightroom focused on maintaining architectural color accuracy while enhancing tonal separation. Minimal cropping—compositions framed in-camera.',
                    images: []
                },
                outcome: {
                    title: 'Exhibition & Recognition',
                    content: 'Series exhibited at Barcelona gallery space, receiving positive critical response. Featured in architectural photography publication. Several images licensed for architecture firm marketing materials. The work sparked ongoing exploration of urban geometry in other cities.',
                    images: ['outcome-exhibition', 'outcome-publication']
                }
            }
        },
        {
            id: 'makers-hands',
            slug: 'makers-hands',
            title: 'Makers\' Hands',
            subtitle: 'Documentary series profiling Barcelona artisans',
            category: 'Photography',
            tags: ['Documentary', 'Craft', 'Portrait'],
            year: '2023',
            clientType: 'Client',
            client: 'Barcelona Artisan Collective',
            seriesCount: 15,
            thumbnail: 'makers-hero',
            
            summary: 'Documentary series profiling Barcelona artisans through detailed portraits of hands at work.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Commissioned by Barcelona Artisan Collective to create visual narrative celebrating traditional craftsmanship. The series focuses on hands—gestures, tools, materials—as vessels of generational knowledge. Combined environmental portraits with extreme close-ups of hand-tool interactions, creating dialogue between maker and making.',
                    images: ['hero', 'series-1', 'series-2', 'series-3']
                },
                approach: {
                    title: 'Approach',
                    content: 'Spent full days with ceramicists, leather workers, and textile artists, photographing gesture and process. Avoided staged moments, waiting for natural working rhythm. Combined environmental portraits establishing context with macro details revealing material interaction. Natural light supplemented with continuous lighting for detail shots.',
                    images: ['approach-ceramicist', 'approach-leather', 'approach-textile', 'approach-detail']
                },
                technical: {
                    title: 'Technical Details',
                    content: 'Canon EOS R5 with 50mm f/1.2 for environmental portraits and 100mm Macro for detail work. Combination of natural light and continuous LED panels to maintain working atmosphere. High shutter speeds to freeze gesture while maintaining shallow depth of field on detail shots.',
                    images: []
                },
                outcome: {
                    title: 'Exhibition & Impact',
                    content: 'Exhibited alongside finished artisan works at collective\'s annual showcase, creating dialogue between process and product. Images used in collective\'s marketing and grant applications. Several artisans commissioned individual portrait sessions after seeing exhibition. Work contributed to increased visitor engagement at collective\'s open studios.',
                    images: ['outcome-exhibition', 'outcome-context']
                }
            }
        }
    ],

    // ========================================
    // VIBE CODING (INTERACTIVE EXPERIMENTS)
    // ========================================
    vibeCoding: [
        {
            id: 'microplastics-viz',
            slug: 'microplastics-viz',
            title: 'Atmospheric Microplastics',
            subtitle: 'Data visualization of environmental crisis',
            category: 'Vibe Coding',
            tags: ['Three.js', 'Data Viz', 'Environmental'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'microplastics-thumb',
            liveLink: '#',
            
            summary: '3D particle system visualizing microplastic concentration in atmosphere using real environmental data.',
            
            caseStudy: {
                context: 'Interactive piece making invisible environmental crisis tangible through data visualization.',
                role: 'Creative Technologist',
                problem: 'How to make invisible atmospheric pollution visible and emotionally resonant without sensationalizing.',
                process: 'Built particle system in Three.js where particle count, color, and movement speed represent microplastic measurements from scientific studies. Viewers can rotate view and explore different atmospheric layers.',
                tech: ['Three.js', 'JavaScript', 'WebGL', 'Scientific Data APIs'],
                outcome: 'Featured in creative coding showcase and sparked discussions about data-driven environmental storytelling.',
                learnings: 'Abstract data becomes visceral when given physical form—interactivity deepens understanding.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Interactive piece making invisible environmental crisis tangible through data visualization. Users explore a 3D space where particle count, color, and movement speed represent microplastic measurements from scientific studies. The experience transforms abstract data into visceral understanding.',
                    images: ['hero', 'interface-1', 'interface-2']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'How to make invisible atmospheric pollution visible and emotionally resonant without sensationalizing. Data needed to remain scientifically accurate while being aesthetically compelling. Performance optimization was critical—rendering thousands of particles smoothly across devices required careful technical execution.',
                    images: ['challenge-data', 'challenge-performance']
                },
                process: {
                    title: 'Process',
                    content: 'Started with scientific data from environmental research studies. Built particle system in Three.js mapping data to visual variables. Iterated on particle appearance, movement algorithms, and camera controls. Optimized rendering using instanced meshes and LOD systems. Tested across devices to ensure consistent experience.',
                    images: ['process-prototype', 'process-optimization']
                },
                outcome: {
                    title: 'Reception',
                    content: 'Featured in creative coding showcase and multiple online design publications. Sparked discussions about data-driven environmental storytelling. Educators requested permission to use in environmental science courses. Technical breakdown published on personal blog became reference for others building similar visualizations.',
                    images: ['outcome-showcase']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Abstract data becomes visceral when given physical form—interactivity deepens understanding beyond static visualization. Performance matters: beautiful but sluggish experiences fail to engage. Real-world data constraints forced creative solutions more interesting than unconstrained experimentation would have produced.',
                    images: []
                }
            }
        },
        {
            id: 'kinetic-type-generator',
            slug: 'kinetic-type-generator',
            title: 'Kinetic Typography Generator',
            subtitle: 'Interactive motion design tool',
            category: 'Vibe Coding',
            tags: ['Animation', 'Typography', 'Generative'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'kinetic-type-thumb',
            liveLink: '#',
            
            summary: 'Interactive tool generating animated typography compositions across multiple animation modes.',
            
            caseStudy: {
                context: 'Exploration of programmatic motion design and generative typography systems.',
                role: 'Creative Developer',
                problem: 'Creating constraint-based creativity tools that suggest rather than dictate.',
                process: 'Built system offering wave, spiral, scatter, and typewriter animation modes. Users input text and select animation style—system handles timing, easing, and composition automatically.',
                tech: ['JavaScript', 'CSS Animations', 'Canvas API', 'Animation Libraries'],
                outcome: 'Used in personal portfolio and inspired client work exploring motion in branding.',
                learnings: 'Constraint-based creativity tools are most effective when they suggest rather than dictate.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Exploration of programmatic motion design and generative typography systems. The tool offers multiple animation modes—wave, spiral, scatter, typewriter—each with customizable parameters. Users input text and select style; the system handles timing, easing, and composition automatically.',
                    images: ['hero', 'modes-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Creating constraint-based creativity tools that suggest rather than dictate. Too few options feel limiting; too many overwhelm. Finding the right balance required extensive testing. Animation timing needed to feel natural across different text lengths and modes.',
                    images: ['challenge-iterations']
                },
                process: {
                    title: 'Process',
                    content: 'Studied motion design principles from film titles and kinetic typography references. Prototyped individual animation modes, refining timing curves and spatial relationships. Built modular system where modes share core animation engine but implement unique behaviors. Created interface that exposes useful parameters without overwhelming users.',
                    images: ['process-sketches', 'process-development', 'process-refinement']
                },
                outcome: {
                    title: 'Usage',
                    content: 'Used in personal portfolio and inspired client work exploring motion in branding. Designers requested feature additions for commercial use. The project validated approach to constraint-based creative tools, informing later work on brand systems. Code published as open-source reference implementation.',
                    images: ['outcome-applications']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Constraint-based creativity tools are most effective when they suggest rather than dictate. Preset modes with subtle customization work better than blank canvas. Animation timing requires iteration—mathematical curves rarely feel natural without adjustment. Good defaults matter more than endless options.',
                    images: []
                }
            }
        }
    ]
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function getProjectBySlug(slug) {
    const allProjects = [
        ...PORTFOLIO_DATA.graphicDesign,
        ...PORTFOLIO_DATA.photography,
        ...PORTFOLIO_DATA.vibeCoding
    ];
    return allProjects.find(project => project.slug === slug);
}

function getProjectsByCategory(category) {
    switch(category) {
        case 'Graphic Design':
            return PORTFOLIO_DATA.graphicDesign;
        case 'Photography':
            return PORTFOLIO_DATA.photography;
        case 'Vibe Coding':
            return PORTFOLIO_DATA.vibeCoding;
        default:
            return [];
    }
}

function getRecruiterProjects() {
    return {
        graphicDesign: PORTFOLIO_DATA.graphicDesign.slice(0, 9),
        vibeCoding: PORTFOLIO_DATA.vibeCoding
    };
}

function getClientProjects() {
    return {
        graphicDesign: PORTFOLIO_DATA.graphicDesign,
        photography: PORTFOLIO_DATA.photography
    };
}
