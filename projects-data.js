/**
 * ============================================
 * PORTFOLIO PROJECTS DATABASE
 * ============================================
 * Central data source for all portfolio content
 * Edit this file to update projects across the site
 */

const PORTFOLIO_DATA = {
    // ========================================
    // GRAPHIC DESIGN PROJECTS
    // ========================================
    graphicDesign: [
        {
            id: 'revizto-brand-system',
            title: 'Revizto Brand System Toolkit',
            category: 'Graphic Design',
            tags: ['Branding', 'Design System', 'B2B SaaS'],
            year: '2024',
            clientType: 'Client',
            client: 'Revizto',
            thumbnail: 'revizto-thumb',
            
            summary: 'Comprehensive brand output simulator and design system documentation for construction technology platform.',
            
            caseStudy: {
                context: 'Revizto needed scalable brand guidelines that could be applied consistently across digital and print touchpoints by both internal teams and external partners.',
                role: 'Senior Creative Developer & Brand System Designer',
                problem: 'Existing brand assets lacked systematic guardrails, leading to inconsistent application across social media, presentations, and marketing materials.',
                process: 'Developed an interactive brand simulator that generates social media formats with automated composition rules. Built comprehensive documentation covering typography, color systems, layout grids, and asset usage. Created constraint-based output templates to prevent brand misuse.',
                tools: ['Figma', 'JavaScript', 'HTML/CSS', 'Brand Guidelines'],
                outcome: 'Delivered automated brand consistency tool that reduced design review cycles by 60% and empowered non-designers to create on-brand content.',
                learnings: 'Constraint-based systems are more effective than infinite customization options for maintaining brand integrity at scale.'
            }
        },
        {
            id: 'sustainable-tech-campaign',
            title: 'Green Tech Initiative Campaign',
            category: 'Graphic Design',
            tags: ['Campaign', 'Social Impact', 'Print + Digital'],
            year: '2024',
            clientType: 'Studio',
            client: 'Environmental Tech Collective',
            thumbnail: 'greentech-thumb',
            
            summary: 'Multi-channel campaign promoting sustainable technology adoption across enterprise clients.',
            
            caseStudy: {
                context: 'Environmental Tech Collective launched a program to help corporations transition to sustainable technology infrastructure.',
                role: 'Campaign Designer & Art Director',
                problem: 'Complex sustainability metrics needed to be communicated in engaging, accessible ways that resonated with C-suite decision-makers.',
                process: 'Created a visual system using data visualization and kinetic typography to make environmental impact tangible. Developed cohesive assets across conference materials, digital ads, white papers, and social media.',
                tools: ['After Effects', 'Illustrator', 'InDesign', 'Figma'],
                outcome: 'Campaign drove 240% increase in program enrollment and won recognition at regional design awards.',
                learnings: 'Data-driven storytelling requires balancing analytical rigor with emotional resonance.'
            }
        },
        {
            id: 'fintech-rebrand',
            title: 'Altura Financial Identity',
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
            }
        },
        {
            id: 'artisan-collective',
            title: 'Artisan Collective Brand Suite',
            category: 'Graphic Design',
            tags: ['Packaging', 'Craft', 'Local Business'],
            year: '2024',
            clientType: 'Client',
            client: 'Barcelona Artisan Collective',
            thumbnail: 'artisan-thumb',
            
            summary: 'Packaging and brand identity celebrating local craftsmanship for multi-vendor marketplace.',
            
            caseStudy: {
                context: 'Barcelona\'s artisan community needed unified branding that honored individual maker identities while creating marketplace cohesion.',
                role: 'Packaging Designer & Brand Consultant',
                problem: 'Diverse product categories (ceramics, textiles, food) required flexible system that felt premium but approachable.',
                process: 'Designed modular packaging system using sustainable materials with customizable accent colors per maker. Created maker badges and storytelling templates that highlight craft narratives.',
                tools: ['Illustrator', 'Photoshop', 'Sustainable Materials Research'],
                outcome: 'Packaging system adopted by 40+ makers, increasing collective sales by 85% at market events.',
                learnings: 'Effective systems empower users rather than constrain them—flexibility within structure.'
            }
        },
        {
            id: 'wellness-editorial',
            title: 'Mindful Living Editorial Series',
            category: 'Graphic Design',
            tags: ['Editorial', 'Wellness', 'Typography'],
            year: '2023',
            clientType: 'Personal',
            client: null,
            thumbnail: 'wellness-thumb',
            
            summary: 'Typography-led editorial layouts exploring mindfulness practices and mental wellness.',
            
            caseStudy: {
                context: 'Personal exploration of how editorial design can support contemplative reading experiences.',
                role: 'Editorial Designer',
                problem: 'Wellness content often feels clinical or overly decorative—wanted to find middle ground of warmth and sophistication.',
                process: 'Developed layouts emphasizing whitespace, generous margins, and thoughtful typographic hierarchy. Experimented with single-accent color systems and subtle textures.',
                tools: ['InDesign', 'Illustrator', 'Typography Studies'],
                outcome: 'Series featured in design publication and sparked conversations about conscious design practices.',
                learnings: 'Restraint in design can create space for reader reflection—less is genuinely more.'
            }
        },
        {
            id: 'music-festival-identity',
            title: 'Sónar Fringe Festival Identity',
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
            }
        },
        {
            id: 'nonprofit-annual-report',
            title: 'Ocean Conservation Annual Report',
            category: 'Graphic Design',
            tags: ['Publication', 'Data Viz', 'Nonprofit'],
            year: '2023',
            clientType: 'Client',
            client: 'Mediterranean Ocean Alliance',
            thumbnail: 'ocean-thumb',
            
            summary: 'Data-rich annual report making marine conservation metrics accessible and compelling.',
            
            caseStudy: {
                context: 'Annual reports typically feel obligatory—organization wanted donor-facing document that inspired action.',
                role: 'Information Designer & Art Director',
                problem: 'Dense scientific data needed translation for general audience without oversimplification.',
                process: 'Collaborated with marine biologists to identify key narratives. Designed custom data visualizations, infographics, and illustrated timelines. Used oceanic color palette and flowing layouts to reinforce content.',
                tools: ['InDesign', 'Illustrator', 'Data Visualization'],
                outcome: 'Report drove 45% increase in donor renewals and was distributed at international conservation conference.',
                learnings: 'Effective information design requires deep subject matter understanding—design serves story, not vice versa.'
            }
        },
        {
            id: 'restaurant-rebrand',
            title: 'Menta Verde Restaurant Identity',
            category: 'Graphic Design',
            tags: ['Restaurant', 'Branding', 'Environmental Graphics'],
            year: '2024',
            clientType: 'Client',
            client: 'Menta Verde',
            thumbnail: 'menta-thumb',
            
            summary: 'Farm-to-table restaurant rebrand emphasizing seasonal ingredients and culinary craftsmanship.',
            
            caseStudy: {
                context: 'Restaurant transitioning from casual eatery to elevated dining experience while maintaining neighborhood approachability.',
                role: 'Brand Designer & Environmental Graphics',
                problem: 'Needed to signal quality upgrade without alienating existing loyal customer base.',
                process: 'Developed botanical-inspired visual language with hand-drawn elements and earthy color palette. Designed menus, signage, staff uniforms, and interior graphics that feel artisanal yet refined.',
                tools: ['Illustrator', 'Photoshop', 'Procreate', 'Print Production'],
                outcome: 'Successful repositioning led to featured reviews in culinary publications and 30% revenue growth.',
                learnings: 'Authenticity in brand expression comes from understanding not just client goals but craft itself.'
            }
        },
        {
            id: 'tech-conference-materials',
            title: 'EuroTech Summit Materials',
            category: 'Graphic Design',
            tags: ['Conference', 'B2B', 'Multi-format'],
            year: '2023',
            clientType: 'Client',
            client: 'EuroTech Summit',
            thumbnail: 'eurotech-thumb',
            
            summary: 'Comprehensive conference collateral system for 3,000+ attendee technology summit.',
            
            caseStudy: {
                context: 'Annual technology summit needed cohesive materials spanning digital, print, environmental, and swag.',
                role: 'Lead Conference Designer',
                problem: 'Previous years felt disjointed—no clear visual thread connecting pre-event marketing, on-site experience, and post-event materials.',
                process: 'Created modular design system built on bold geometric shapes representing technology sectors. Developed templates for badges, signage, presentations, programs, and digital screens that maintained consistency while allowing content flexibility.',
                tools: ['Illustrator', 'InDesign', 'Figma', 'Print Management'],
                outcome: 'Unified visual experience elevated perceived professionalism, contributing to 25% increase in sponsor commitments for following year.',
                learnings: 'Large-scale projects require ruthless systematization—anticipate needs before they\'re articulated.'
            }
        }
    ],

    // ========================================
    // PHOTOGRAPHY PROJECTS (SERIES)
    // ========================================
    photography: [
        {
            id: 'urban-silence',
            title: 'Urban Silence',
            category: 'Photography',
            tags: ['Architecture', 'Urban', 'Fine Art'],
            year: '2024',
            clientType: 'Personal',
            seriesCount: 18,
            thumbnail: 'urban-silence-hero',
            
            summary: 'Architectural study of Barcelona\'s modernist buildings in early morning light, emphasizing geometric forms and negative space.',
            
            caseStudy: {
                context: 'Personal exploration of how architecture shapes urban atmosphere during liminal hours.',
                approach: 'Photographed between 6-7am to capture empty streets and dramatic light. Focused on symmetry, leading lines, and relationship between built form and sky.',
                tools: ['Canon EOS R5', '24-70mm f/2.8', 'Lightroom', 'Photoshop'],
                outcome: 'Series exhibited at local gallery and featured in architectural photography publication.'
            }
        },
        {
            id: 'coastal-textures',
            title: 'Coastal Textures',
            category: 'Photography',
            tags: ['Nature', 'Abstract', 'Mediterranean'],
            year: '2024',
            clientType: 'Personal',
            seriesCount: 24,
            thumbnail: 'coastal-hero',
            
            summary: 'Macro photography series exploring weathered surfaces along Mediterranean coastline—rust, salt deposits, peeling paint.',
            
            caseStudy: {
                context: 'Investigation of how time and elements create abstract compositions on coastal structures.',
                approach: 'Used macro lens to isolate small sections of deteriorating boats, piers, and buildings. Emphasized color relationships and textural detail.',
                tools: ['Canon EOS R5', '100mm Macro f/2.8', 'Natural Light'],
                outcome: 'Series sold as limited edition prints, with proceeds supporting marine conservation.'
            }
        },
        {
            id: 'makers-hands',
            title: 'Makers\' Hands',
            category: 'Photography',
            tags: ['Documentary', 'Craft', 'Portrait'],
            year: '2023',
            clientType: 'Client',
            client: 'Barcelona Artisan Collective',
            seriesCount: 15,
            thumbnail: 'makers-hero',
            
            summary: 'Documentary series profiling Barcelona artisans through detailed portraits of hands at work.',
            
            caseStudy: {
                context: 'Commissioned to create visual narrative celebrating traditional craftsmanship for collective\'s exhibition.',
                approach: 'Spent days with ceramicists, leather workers, and textile artists, photographing gesture and process. Combined environmental portraits with extreme close-ups of hand-tool interactions.',
                tools: ['Canon EOS R5', '50mm f/1.2', '100mm Macro', 'Natural + Continuous Light'],
                outcome: 'Exhibited alongside finished artisan works, creating dialogue between process and product.'
            }
        },
        {
            id: 'restaurant-atmospheres',
            title: 'Restaurant Atmospheres',
            category: 'Photography',
            tags: ['Commercial', 'Food', 'Interior'],
            year: '2024',
            clientType: 'Client',
            client: 'Various Restaurants',
            seriesCount: 45,
            thumbnail: 'restaurant-hero',
            
            summary: 'Commercial photography for restaurant clients emphasizing ambiance, plating, and ingredient quality.',
            
            caseStudy: {
                context: 'Ongoing work with Barcelona hospitality industry creating marketing assets.',
                approach: 'Focus on storytelling over traditional food photography—capturing atmosphere, preparation moments, and diner experience alongside hero dish shots.',
                tools: ['Canon EOS R5', 'Prime Lens Set', 'Strobe + Available Light'],
                outcome: 'Images used across restaurant websites, social media, and press features.'
            }
        },
        {
            id: 'nocturnal-city',
            title: 'Nocturnal City',
            category: 'Photography',
            tags: ['Night', 'Urban', 'Cinematic'],
            year: '2023',
            clientType: 'Personal',
            seriesCount: 22,
            thumbnail: 'nocturnal-hero',
            
            summary: 'Cinematic study of Barcelona nightlife—streets, neon, reflections, and urban solitude after midnight.',
            
            caseStudy: {
                context: 'Exploration of urban atmosphere transformation between day and night identity.',
                approach: 'Shot between midnight-4am focusing on artificial light, reflections on wet surfaces, and isolated figures. Emphasized color contrast between warm streetlights and cool neon.',
                tools: ['Canon EOS R5', '35mm f/1.4', 'High ISO Natural Light'],
                outcome: 'Featured in photography magazine and inspired ongoing "Liminal Hours" project.'
            }
        },
        {
            id: 'mediterranean-harvest',
            title: 'Mediterranean Harvest',
            category: 'Photography',
            tags: ['Food', 'Agriculture', 'Editorial'],
            year: '2024',
            clientType: 'Client',
            client: 'Slow Food Catalunya',
            seriesCount: 30,
            thumbnail: 'harvest-hero',
            
            summary: 'Editorial series documenting traditional agricultural practices and seasonal produce across Catalonia.',
            
            caseStudy: {
                context: 'Commission from Slow Food movement documenting regional food systems and heritage crops.',
                approach: 'Visited farms during harvest seasons, photographing farmers, fields, and raw ingredients. Combined landscape, portrait, and still life approaches.',
                tools: ['Canon EOS R5', '24-70mm f/2.8', 'Natural Light'],
                outcome: 'Published in regional food culture magazine and used in sustainable agriculture advocacy campaign.'
            }
        },
        {
            id: 'studio-portraits',
            title: 'Creator Portraits',
            category: 'Photography',
            tags: ['Portrait', 'Studio', 'Creative Industry'],
            year: '2023-2024',
            clientType: 'Client',
            client: 'Various',
            seriesCount: 35,
            thumbnail: 'portrait-hero',
            
            summary: 'Professional headshots and environmental portraits for designers, artists, and entrepreneurs.',
            
            caseStudy: {
                context: 'Ongoing portrait work with Barcelona creative community.',
                approach: 'Developed signature style combining natural light with minimal fill, emphasizing authentic expression over polish. Include environmental elements that speak to subject\'s practice.',
                tools: ['Canon EOS R5', '85mm f/1.2', 'Natural + Reflector'],
                outcome: 'Built referral-based portrait practice with 90% repeat and recommended clients.'
            }
        },
        {
            id: 'material-studies',
            title: 'Material Studies',
            category: 'Photography',
            tags: ['Product', 'Commercial', 'Still Life'],
            year: '2024',
            clientType: 'Client',
            client: 'Design Brands',
            seriesCount: 28,
            thumbnail: 'material-hero',
            
            summary: 'Product photography emphasizing materiality and craftsmanship for design-forward brands.',
            
            caseStudy: {
                context: 'Work with furniture, lighting, and home goods brands requiring elevated product imagery.',
                approach: 'Studio setups focusing on texture, form, and how light interacts with materials. Minimal styling lets product quality speak.',
                tools: ['Canon EOS R5', 'Tilt-Shift Lenses', 'Studio Strobes'],
                outcome: 'Images used in lookbooks, e-commerce, and design publications.'
            }
        },
        {
            id: 'street-gestures',
            title: 'Street Gestures',
            category: 'Photography',
            tags: ['Street', 'Candid', 'Documentary'],
            year: '2023-2024',
            clientType: 'Personal',
            seriesCount: 50,
            thumbnail: 'street-hero',
            
            summary: 'Ongoing street photography project capturing spontaneous moments and human gestures across Barcelona.',
            
            caseStudy: {
                context: 'Long-term personal documentation of everyday Barcelona life.',
                approach: 'Carry camera daily, focus on gesture, juxtaposition, and decisive moment. Prioritize human connection over pure formalism.',
                tools: ['Canon EOS R5', '35mm f/1.4', 'Natural Light'],
                outcome: 'Building body of work toward eventual exhibition and photobook.'
            }
        },
        {
            id: 'brand-campaigns',
            title: 'Brand Campaign Work',
            category: 'Photography',
            tags: ['Commercial', 'Campaign', 'Lifestyle'],
            year: '2023-2024',
            clientType: 'Client',
            client: 'Various Brands',
            seriesCount: 40,
            thumbnail: 'campaign-hero',
            
            summary: 'Lifestyle and product photography for brand campaigns across fashion, wellness, and lifestyle sectors.',
            
            caseStudy: {
                context: 'Commercial work creating visual assets for brand storytelling.',
                approach: 'Collaborative process with art directors and brand teams. Balance client vision with photographic perspective.',
                tools: ['Canon EOS R5', 'Lens Kit', 'Location + Studio'],
                outcome: 'Built portfolio demonstrating versatility across industries while maintaining consistent aesthetic.'
            }
        },
        {
            id: 'architectural-interiors',
            title: 'Architectural Interiors',
            category: 'Photography',
            tags: ['Architecture', 'Interior', 'Commercial'],
            year: '2024',
            clientType: 'Client',
            client: 'Architecture Studios',
            seriesCount: 20,
            thumbnail: 'interiors-hero',
            
            summary: 'Interior architectural photography for residential and commercial projects emphasizing light and spatial relationships.',
            
            caseStudy: {
                context: 'Work with local architecture studios documenting completed projects.',
                approach: 'Focus on how spaces are inhabited and how natural light moves through interiors. Avoid overly stylized real estate aesthetic.',
                tools: ['Canon EOS R5', 'Tilt-Shift 17mm', 'Available Light + Fill'],
                outcome: 'Images used in architectural publications, award submissions, and studio portfolios.'
            }
        },
        {
            id: 'event-documentation',
            title: 'Cultural Event Documentation',
            category: 'Photography',
            tags: ['Event', 'Documentary', 'Editorial'],
            year: '2023-2024',
            clientType: 'Client',
            client: 'Various',
            seriesCount: 60,
            thumbnail: 'events-hero',
            
            summary: 'Documentary photography covering design conferences, art openings, and cultural events.',
            
            caseStudy: {
                context: 'Event documentation for organizations needing editorial-quality coverage.',
                approach: 'Balance candid moments with composed environmental shots. Capture atmosphere beyond standard event photography.',
                tools: ['Canon EOS R5', '24-70mm f/2.8', 'Natural + Available Light'],
                outcome: 'Established reputation for thoughtful event coverage leading to consistent bookings.'
            }
        }
    ],

    // ========================================
    // VIBE CODING (INTERACTIVE EXPERIMENTS)
    // ========================================
    vibeCoding: [
        {
            id: 'microplastics-viz',
            title: 'Atmospheric Microplastics',
            category: 'Vibe Coding',
            tags: ['Three.js', 'Data Viz', 'Environmental'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'microplastics-thumb',
            liveLink: '#',
            
            summary: '3D particle system visualizing microplastic concentration in atmosphere using real environmental data.',
            
            caseStudy: {
                context: 'Interactive piece making invisible environmental crisis tangible through data visualization.',
                approach: 'Built particle system in Three.js where particle count, color, and movement speed represent microplastic measurements from scientific studies. Viewers can rotate view and explore different atmospheric layers.',
                tech: ['Three.js', 'JavaScript', 'WebGL', 'Scientific Data APIs'],
                outcome: 'Featured in creative coding showcase and sparked discussions about data-driven environmental storytelling.',
                learnings: 'Abstract data becomes visceral when given physical form—interactivity deepens understanding.'
            }
        },
        {
            id: 'kinetic-type-generator',
            title: 'Kinetic Typography Generator',
            category: 'Vibe Coding',
            tags: ['Animation', 'Typography', 'Generative'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'kinetic-type-thumb',
            liveLink: '#',
            
            summary: 'Interactive tool generating animated typography compositions across multiple animation modes.',
            
            caseStudy: {
                context: 'Exploration of programmatic motion design and generative typography systems.',
                approach: 'Built system offering wave, spiral, scatter, and typewriter animation modes. Users input text and select animation style—system handles timing, easing, and composition automatically.',
                tech: ['JavaScript', 'CSS Animations', 'Canvas API', 'Animation Libraries'],
                outcome: 'Used in personal portfolio and inspired client work exploring motion in branding.',
                learnings: 'Constraint-based creativity tools are most effective when they suggest rather than dictate.'
            }
        },
        {
            id: 'digital-postcard',
            title: 'Digital Postcard Mail',
            category: 'Vibe Coding',
            tags: ['Interactive', 'Nostalgia', 'Experimental'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'postcard-thumb',
            liveLink: 'https://postcard-app-zeta.vercel.app',
            
            summary: 'Nostalgic web experience reimagining postcards for digital age with drawing tools and shareable links.',
            
            caseStudy: {
                context: 'Fun project exploring how digital can capture analog ritual intimacy.',
                approach: 'Created interface where users select postcard design, draw/write message, and generate unique shareable link. Recipients experience reveal animation mimicking physical mail arrival.',
                tech: ['JavaScript', 'Canvas API', 'Node.js', 'Database'],
                outcome: 'Organically shared across design communities, featured in creative coding collections.',
                learnings: 'Digital experiences feel meaningful when they honor analog rituals they replace.'
            }
        },
        {
            id: 'poemas-anonimos',
            title: 'Poemas Anónimos',
            category: 'Vibe Coding',
            tags: ['Poetry', 'Interaction', 'Minimalism'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'poemas-thumb',
            liveLink: 'https://poemas-anonimos.vercel.app/',
            
            summary: 'Minimal poetry platform where anonymous verses appear and fade, emphasizing impermanence.',
            
            caseStudy: {
                context: 'Digital space for sharing ephemeral poetry, inspired by transient nature of street art.',
                approach: 'Designed stark interface where poems appear individually, linger, then fade. No archive or search—emphasis on present moment encounter. Typography and spacing honor poetic form.',
                tech: ['JavaScript', 'CSS Animations', 'Backend API'],
                outcome: 'Created contemplative online space contrasting with typical social media urgency.',
                learnings: 'Intentional constraints shape user behavior—limitations can enhance rather than diminish experience.'
            }
        },
        {
            id: 'brand-output-simulator',
            title: 'Brand Output Simulator',
            category: 'Vibe Coding',
            tags: ['Design Systems', 'B2B', 'Automation'],
            year: '2024',
            clientType: 'Client',
            client: 'Revizto',
            thumbnail: 'simulator-thumb',
            
            summary: 'Interactive tool generating on-brand social media assets with automated composition guardrails.',
            
            caseStudy: {
                context: 'B2B SaaS company needed scalable way to maintain brand consistency across distributed marketing team.',
                approach: 'Built web tool where users input content and select format—system automatically applies layout rules, color restrictions, and typographic hierarchy. Prevents common brand misuse while allowing content flexibility.',
                tech: ['JavaScript', 'Canvas API', 'Design Systems', 'Export Functionality'],
                outcome: 'Reduced design review bottlenecks and empowered non-designers to create brand-compliant assets.',
                learnings: 'Best design tools make correct choices automatic while keeping users feeling creative.'
            }
        },
        {
            id: 'portfolio-blob-system',
            title: 'Portfolio Letter Blob System',
            category: 'Vibe Coding',
            tags: ['Portfolio', 'Animation', 'Interaction'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'blob-thumb',
            
            summary: 'Custom portfolio interaction where letters transform into colored capsules on hover, creating playful typography experience.',
            
            caseStudy: {
                context: 'Building personal portfolio site that reflects creative coding practice.',
                approach: 'Developed system that splits text into individual letters, each triggering animated capsule on hover. Capsules use random rotation, gradients, and staggered timing for organic feel.',
                tech: ['Vanilla JavaScript', 'CSS Animations', 'DOM Manipulation'],
                outcome: 'Created memorable first impression that demonstrates technical skill while maintaining readability.',
                learnings: 'Micro-interactions should delight without distracting—restraint is essential.'
            }
        }
    ]
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get all projects of a specific category
 */
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

/**
 * Get specific project by ID
 */
function getProjectById(id) {
    const allProjects = [
        ...PORTFOLIO_DATA.graphicDesign,
        ...PORTFOLIO_DATA.photography,
        ...PORTFOLIO_DATA.vibeCoding
    ];
    return allProjects.find(project => project.id === id);
}

/**
 * Get projects for recruiters view (curated selection)
 */
function getRecruiterProjects() {
    return {
        graphicDesign: PORTFOLIO_DATA.graphicDesign.slice(0, 9),
        vibeCoding: PORTFOLIO_DATA.vibeCoding
    };
}

/**
 * Get projects for clients view (outcome-focused)
 */
function getClientProjects() {
    return {
        graphicDesign: PORTFOLIO_DATA.graphicDesign,
        photography: PORTFOLIO_DATA.photography
    };
}
