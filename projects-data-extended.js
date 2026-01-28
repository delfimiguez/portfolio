/**
 * ============================================
 * PORTFOLIO PROJECTS DATABASE - DELFINA MIGUEZ
 * ============================================
 * Complete project data with real case studies
 */

const PORTFOLIO_DATA = {
    // ========================================
    // GRAPHIC DESIGN PROJECTS
    // ========================================
    graphicDesign: [
        {
            id: 'p1nk-brand',
            slug: 'p1nk-brand',
            title: 'P1NK – Organic Coconut Water',
            subtitle: 'Brand identity, packaging system and creative direction for a next-generation wellness beverage',
            category: 'Graphic Design',
            tags: ['Branding', 'Packaging', 'Wellness', 'Startup'],
            year: '2026',
            clientType: 'Client',
            client: 'P1NK',
            thumbnail: 'p1nk-thumb',
            
            summary: 'Premium organic coconut water brand built around radical transparency and performance. Full brand creation from zero to launch.',
            
            caseStudy: {
                context: 'P1NK is a health startup introducing HPP (High Pressure Processing) coconut water in innovative pouch format. The brand needed to stand out in a crowded wellness beverage market dominated by generic aesthetics and unclear processing claims.',
                role: 'Lead Brand Designer & Creative Director',
                problem: 'The coconut water category was saturated with generic aesthetics and lacked proper education around processing methods. Consumers didn\'t understand the quality differences between brands. P1NK needed to establish credibility while appearing premium and modern.',
                process: 'Conducted extensive category research and competitive analysis. Developed brand positioning around radical transparency and performance. Created comprehensive identity system including logo, typography, color system, and graphic language. Designed complete packaging system for multiple SKUs. Built brand guidelines and application templates for future growth.',
                tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
                outcome: 'Delivered launch-ready brand identity with complete packaging system and comprehensive brand guidelines. The visual system successfully differentiates P1NK in retail environments while communicating quality and transparency.',
                learnings: 'Simplicity builds trust in wellness categories. Packaging is not decoration—it\'s strategic communication. Educational design can be beautiful without sacrificing clarity. The most effective brands say less but mean more.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'P1NK approached me to create their complete brand identity from the ground up. As a startup entering the competitive wellness beverage space, they needed more than a pretty logo—they needed a strategic visual system that could communicate quality, transparency, and performance. The project encompassed brand strategy, visual identity, packaging design, and creative direction for launch materials. Working directly with the founders, I helped translate their vision of "radical transparency" into a cohesive brand experience that feels premium without being precious, healthy without being preachy.',
                    images: ['hero', 'logo-system', 'color-palette']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'The wellness beverage category is notoriously crowded and visually homogenous. Most brands default to either aggressive sports energy or overly precious health food aesthetics. P1NK needed to carve out distinct territory—premium but accessible, performance-oriented but natural. The bigger challenge was education: consumers don\'t understand HPP processing or why it matters. The packaging needed to communicate complex information (organic, HPP, no additives, electrolytes) without feeling cluttered or preachy. Additionally, the pouch format was unconventional for the category, requiring careful consideration of shelf presence and first impression.',
                    images: ['competitive-landscape', 'category-analysis']
                },
                process: {
                    title: 'Process',
                    content: 'I started with a comprehensive brand positioning workshop with the founders to clarify values, audience, and differentiation. From there, I mapped the competitive landscape visually to identify white space. The naming and verbal identity came first—"P1NK" with the numeral signals both the product (naturally pink coconut water) and a modern, coded aesthetic that appeals to their target demo. For the visual system, I developed a modular approach: bold typography, restrained color palette anchored by the natural pink, and a graphic language that balances organic shapes with precise geometry. The packaging design went through multiple structural explorations before landing on a pouch format that maximizes shelf impact while remaining functional. I created detailed application guidelines showing how the system extends to social media, e-commerce, retail displays, and future product launches.',
                    images: ['naming-exploration', 'visual-directions', 'packaging-iterations', 'system-guidelines']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'P1NK launched with a complete, production-ready brand system that positions them as a premium player in the wellness beverage category. The packaging successfully communicates both transparency and performance, standing out on shelf against established competitors. The modular visual system proved flexible enough to support diverse content types—from educational Instagram carousels to retail point-of-sale materials—without losing consistency. Founders reported that the brand identity gave them confidence in retailer conversations and helped attract initial investor interest.',
                    images: ['final-packaging', 'retail-mockup', 'social-applications']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'This project reinforced several principles about building consumer brands from zero. First: simplicity is not minimalism—it\'s clarity of message. The strongest brand elements were the most restrained. Second: packaging is strategic. Every surface is real estate for communication, education, or differentiation. Third: systems outperform individual assets. By building a flexible visual framework rather than fixed templates, the brand gained longevity and adaptability. Finally: startup branding requires pragmatism. Every decision needed to balance aspiration with production realities, shelf presence with budget constraints. The most successful elements were those that looked premium while remaining cost-effective to produce.',
                    images: []
                }
            }
        },
        {
            id: 'limitless-peptides',
            slug: 'limitless-peptides',
            title: 'Limitless Peptides',
            subtitle: 'Editorial design system for peptide education and product communication',
            category: 'Graphic Design',
            tags: ['Editorial', 'Biotech', 'Education', 'System Design'],
            year: '2025',
            clientType: 'Client',
            client: 'Limitless Peptides',
            thumbnail: 'limitless-thumb',
            
            summary: 'Modular editorial system for peptide guides, labels, social media and newsletters. Translating complex biotech science into accessible educational design.',
            
            caseStudy: {
                context: 'Limitless Peptides is a biotech wellness brand focused on education and transparency around peptide therapy. They needed a scalable design system for communicating complex scientific information across multiple formats—product labels, educational guides, newsletters, and social media.',
                role: 'Visual & Editorial Designer',
                problem: 'Peptide therapy is scientifically complex and poorly understood by consumers. Most educational materials are either overly clinical (academic papers) or oversimplified (social media infographics). Limitless needed to communicate credibly without alienating their audience. Additionally, the brand required consistency across wildly different formats: dense product labels, long-form guides, bite-sized social posts, and email newsletters.',
                process: 'Developed information architecture principles for translating scientific content. Created modular editorial layouts that prioritize hierarchy and scannability. Designed a comprehensive labeling system that meets regulatory requirements while remaining readable. Built templates for guides, social media, and newsletters that maintain visual consistency while adapting to different content densities.',
                tools: ['Figma', 'Adobe InDesign', 'Adobe Illustrator'],
                outcome: 'Delivered a scalable educational design system that makes complex peptide information accessible without sacrificing scientific accuracy. The system successfully balances credibility with approachability, working across all brand touchpoints.',
                learnings: 'Hierarchy matters more than decoration in educational design. Good information design is invisible—readers should understand content, not admire layout. Education requires product thinking, not just graphic design. Templates should guide, not constrain.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Limitless Peptides is pioneering accessible peptide education in the wellness space. Unlike traditional supplement brands, they position themselves as educators first, sellers second. When they approached me, they had strong scientific content but no systematic way to present it. The challenge was creating an editorial design system flexible enough to handle everything from product packaging to multi-page guides, while maintaining a consistent voice that balances authority with accessibility. This wasn\'t about making things "pretty"—it was about making complex science comprehensible.',
                    images: ['hero', 'system-overview', 'applications-grid']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'The peptide space exists in an awkward middle ground between pharmaceuticals and wellness supplements. Design too clinical and you alienate wellness consumers. Design too casual and you lose credibility with serious biohackers and medical professionals. The content itself posed challenges: peptide guides require explaining molecular mechanisms, dosing protocols, contraindications, and sourcing—all without oversimplifying or making medical claims. Additionally, the brand needed consistency across vastly different formats: tiny product labels with regulatory text, long-form PDF guides, Instagram carousel posts, and weekly newsletters. Each format has different constraints but needs to feel unmistakably "Limitless."',
                    images: ['content-complexity', 'format-requirements']
                },
                process: {
                    title: 'Process',
                    content: 'I began by auditing all existing content to understand information density patterns and recurring content structures. Working with their scientific team, I developed editorial standards for how to present technical information—what goes in body copy, what becomes a callout, when to use diagrams versus text. For the visual system, I created a modular grid approach: core layout principles that adapt across formats rather than fixed templates. Typography became the workhorse—carefully chosen font pairings that remain legible at tiny label sizes and extended text blocks. I developed a color-coding system for different information types (dosing, warnings, benefits, mechanisms) that aids navigation without feeling juvenile. The label system required dozens of iterations to satisfy both brand aesthetics and regulatory requirements. Finally, I created comprehensive guidelines with real examples, showing internal teams how to apply the system to new content types.',
                    images: ['information-architecture', 'grid-system', 'typography-hierarchy', 'label-iterations']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The design system successfully unified all brand communications while improving content comprehension. Product labels now clearly communicate key information without sacrificing aesthetics or regulatory compliance. Educational guides feel authoritative and approachable, with improved readability metrics in user testing. Social media content maintains consistency while adapting to platform-specific formats. The team reports that the system accelerated content production—they can create new materials without starting from scratch each time. Most importantly, customer feedback indicates increased understanding of peptide protocols, the original goal.',
                    images: ['labels-final', 'guide-layouts', 'social-templates', 'newsletter-system']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'This project fundamentally changed how I think about editorial design. The revelation: education is a product, not just content. Good educational design requires the same thinking as good UX—understanding user goals, removing friction, anticipating questions. I learned that hierarchy matters exponentially more than aesthetics in dense information environments. Beautiful typography means nothing if readers can\'t find the information they need. The most successful elements were the least "designed"—clear headings, logical information flow, breathing room. I also learned that systematic thinking compounds value over time. The initial system took weeks to develop, but now saves the team hours every week. Finally: constraints breed clarity. The tight regulatory requirements for labels forced precision that improved all other formats.',
                    images: []
                }
            }
        },
        {
            id: 'ra-optics-fiji',
            slug: 'ra-optics-fiji',
            title: 'Ra Optics × Fiji Airways',
            subtitle: 'Strategic pitch deck for circadian wellness experience',
            category: 'Graphic Design',
            tags: ['Pitch Deck', 'Partnership', 'Service Design', 'Strategy'],
            year: '2025',
            clientType: 'Client',
            client: 'Ra Optics',
            thumbnail: 'ra-thumb',
            
            summary: 'Strategic pitch deck proposing in-flight wellness program using Sunset Lenses. Combining science, service design and marketing.',
            
            caseStudy: {
                context: 'Ra Optics, a wellness eyewear brand specializing in blue light management, wanted to pitch a partnership with Fiji Airways. The concept: provide passengers with their Sunset Lenses to support circadian rhythm during long-haul flights, positioning both brands as wellness innovators.',
                role: 'Lead Designer & Creative Strategist',
                problem: 'This wasn\'t a standard pitch deck—it needed to convince airline executives that a wellness eyewear program was feasible, valuable, and differentiating. The challenge was translating scientific research (circadian biology), service design (passenger experience), and business strategy (partnership ROI) into a single compelling narrative.',
                process: 'Worked closely with Ra Optics team to develop the strategic narrative. Mapped the complete passenger experience to identify optimal intervention points. Visualized the service design components (when passengers receive glasses, how crew introduces the program, what passenger communications look like). Created clear diagrams explaining circadian science without requiring PhD comprehension. Designed mockups of physical touchpoints (amenity kits, in-flight cards, app integration). Built the deck to tell a story, not just list features—taking executives on a journey from problem to solution to partnership value.',
                tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
                outcome: 'Delivered a high-fidelity strategic pitch deck that successfully communicated the partnership opportunity. The deck balanced scientific credibility with business pragmatism, helping Ra Optics present a professional, well-considered proposal to airline executives.',
                learnings: 'Service design visualization equals product credibility. The physical mockups (amenity kits, in-flight materials) made an abstract partnership concept feel tangible and real. Strategic decks are fundamentally different from sales decks—they\'re about possibility, not features.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Ra Optics came to me with an ambitious idea: partner with an airline to provide circadian wellness support through their eyewear. Not just a product placement—a genuine service experience that would differentiate both brands. This was fundamentally a strategic design challenge. I wasn\'t just making a deck look good; I was helping translate a complex, multi-stakeholder concept into something executives could understand, evaluate, and potentially approve. The deck needed to work as business proposal, service blueprint, and brand story simultaneously.',
                    images: ['hero', 'deck-overview', 'key-slides']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Airline partnerships are notoriously difficult—long sales cycles, risk-averse decision makers, countless stakeholders. The proposal needed to address executive concerns (cost, logistics, ROI) while inspiring them about brand differentiation and passenger experience innovation. Scientific credibility was crucial but couldn\'t feel academic. The circadian biology needed to be compelling without requiring a science degree to understand. Additionally, we needed to visualize an experience that didn\'t yet exist—showing airline executives exactly how this would work operationally, from gate to landing. The design challenge: make something completely new feel inevitable and obvious.',
                    images: ['executive-concerns', 'experience-mapping']
                },
                process: {
                    title: 'Process',
                    content: 'Started with intensive research into airline partnership precedents and wellness program case studies. Worked with Ra Optics to refine the strategic narrative—why this, why now, why Fiji Airways specifically. Developed a story structure that moved from universal problem (jet lag, circadian disruption) to science (how light affects biology) to solution (Sunset Lenses) to implementation (the partnership program) to business case (passenger satisfaction, brand differentiation, PR value). Created detailed service design visualizations showing passenger touchpoints at every stage of the journey. Designed mockups of all physical materials—amenity kits, in-flight collateral, app screens—to make the program tangible. Used data visualization to present research findings clearly. Built a visual system that felt premium and scientific simultaneously—credible but not clinical.',
                    images: ['research-synthesis', 'narrative-structure', 'service-touchpoints', 'visual-mockups']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The final deck successfully articulated a complex, multi-dimensional partnership opportunity in a clear, compelling way. While airline partnerships are long-term initiatives, the deck positioned Ra Optics as serious, strategic thinkers rather than just another vendor seeking product placement. The service design visualizations particularly resonated—executives could see exactly how the program would work operationally. The deck became a template for similar partnership conversations with other airlines.',
                    images: ['final-deck-pages', 'service-mockups', 'data-visualization']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'This project taught me that strategy and design are inseparable at the highest level. You can\'t design a compelling pitch without understanding the underlying business model. The most effective slides weren\'t the most beautifully designed—they were the ones that made complex ideas simple. Service design visualization is incredibly powerful for selling concepts that don\'t yet exist. Mockups of amenity kits and in-flight cards made an abstract partnership feel real and feasible. I also learned that executive audiences need different communication strategies than consumer audiences—less emotion, more logic, but still storytelling. Finally: partnership decks are selling possibility, not certainty. The goal isn\'t to have all the answers but to show you\'ve thought through the right questions.',
                    images: []
                }
            }
        },
        {
            id: 'akuity',
            slug: 'akuity',
            title: 'Akuity',
            subtitle: 'Product marketing and brand system for enterprise DevOps platform',
            category: 'Graphic Design',
            tags: ['DevOps', 'B2B SaaS', 'Marketing', 'Technical'],
            year: '2025',
            clientType: 'Client',
            client: 'Akuity',
            thumbnail: 'akuity-thumb',
            
            summary: 'Multi-channel design system for SaaS product marketing. Translating complex DevOps infrastructure into clear visual communication.',
            
            caseStudy: {
                context: 'Akuity is a developer-focused GitOps company building enterprise DevOps platforms. They needed cohesive product marketing design across multiple channels while maintaining their developer-first brand positioning.',
                role: 'Product Marketing Designer',
                problem: 'DevOps infrastructure is inherently complex and visually abstract. Most competitors default to generic tech company aesthetics or overly literal cloud/server illustrations. Akuity needed to explain complex infrastructure concepts visually without alienating their technical audience or oversimplifying the technology.',
                process: 'Developed brand system applications for product marketing contexts. Created educational content strategies for explaining GitOps concepts. Built illustration systems that balance technical accuracy with visual clarity. Designed templates for documentation, product sheets, social media, and conference materials. Worked closely with engineering teams to ensure technical precision in all visual communications.',
                tools: ['Figma', 'Adobe Illustrator', 'Technical Diagramming Tools'],
                outcome: 'Unified marketing system that successfully communicates complex infrastructure clearly. The visual language works across technical documentation, product marketing, and sales enablement materials.',
                learnings: 'Clarity beats decoration for developer audiences. Technical audiences value precision over personality. Good developer marketing feels informative, not salesy. The best illustrations aren\'t the most beautiful—they\'re the most accurate.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Akuity is an enterprise DevOps platform company serving technical teams at scale. When they brought me in as product marketing designer, they had strong product and engineering but inconsistent visual communication across marketing touchpoints. The challenge wasn\'t making things pretty—it was making complex infrastructure concepts comprehensible while respecting the technical sophistication of their audience. This required understanding GitOps workflows, Kubernetes architectures, and CI/CD pipelines well enough to represent them accurately and clearly.',
                    images: ['hero', 'marketing-overview', 'applications']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Developer-focused companies face a unique design challenge: the audience values substance over style and can detect bullshit instantly. Generic tech company aesthetics (floating gradients, abstract cloud shapes) read as dishonest to engineers who work with these systems daily. But purely technical diagrams aren\'t effective marketing—they\'re intimidating and hard to scan. I needed to find middle ground: technically accurate but visually accessible. Additionally, the content spanned wildly different contexts—detailed product documentation, high-level executive summaries, social media snippets, conference booth materials. Each required different information density while maintaining brand consistency.',
                    images: ['technical-complexity', 'audience-requirements']
                },
                process: {
                    title: 'Process',
                    content: 'Started by immersing myself in the product—sitting with engineering teams, understanding workflows, learning terminology. Built a visual language for representing infrastructure concepts that engineers would respect: clean geometric shapes representing real system components, clear data flow arrows, consistent iconography tied to actual technologies (Kubernetes, Argo CD, GitOps patterns). Developed illustration guidelines that prioritize accuracy and clarity over decoration. Created modular content templates for different marketing contexts—each adapting the core visual system to specific needs. Worked closely with product marketing to understand messaging priorities and translate features into benefits visually. Built comprehensive design system documentation specifically for technical content creators.',
                    images: ['product-immersion', 'visual-language-development', 'template-system', 'documentation']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The unified marketing system successfully positioned Akuity as technically credible while remaining accessible. Product marketing materials now clearly communicate value propositions without overwhelming readers. Documentation maintains visual consistency while prioritizing information hierarchy. Social media content balances brand visibility with technical substance. Internal feedback from both sales and engineering teams confirmed the system struck the right balance—compelling without being salesy, clear without oversimplifying.',
                    images: ['product-sheets', 'documentation-pages', 'social-content', 'conference-materials']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Marketing to developers taught me that audience empathy is everything. What works for consumer brands actively repels technical audiences. The most successful marketing materials were those that felt informative first, promotional second. I learned that technical illustration requires deep subject matter understanding—you can\'t fake it. Engineers immediately recognize when diagrams misrepresent system architectures. The best approach: slow down, ask questions, ensure accuracy before worrying about aesthetics. I also learned that developer-focused design isn\'t about stripping decoration—it\'s about prioritizing clarity. Good information architecture matters more than beautiful gradients.',
                    images: []
                }
            }
        },
        {
            id: 'accelex',
            slug: 'accelex',
            title: 'Accelex',
            subtitle: 'Complete brand identity system for fintech platform',
            category: 'Graphic Design',
            tags: ['Fintech', 'Brand Identity', 'Enterprise', 'Data'],
            year: '2023',
            clientType: 'Client',
            client: 'Accelex',
            thumbnail: 'accelex-thumb',
            
            summary: 'End-to-end visual identity for investment data company. Modular system built for scalability.',
            
            caseStudy: {
                context: 'Accelex is a fintech company transforming unstructured investment data into actionable intelligence. They needed a complete brand identity that communicated both technical sophistication and enterprise credibility.',
                role: 'Brand Designer',
                problem: 'The fintech space is visually conservative—most brands default to navy blue, generic sans-serif typography, and stock imagery. Accelex needed to differentiate while maintaining the credibility required for enterprise sales. Additionally, the brand needed to work across vastly different contexts: technical documentation, investor materials, product interfaces, sales presentations.',
                process: 'Developed modular brand system prioritizing flexibility and scalability. Created color strategy that differentiates from fintech norms while remaining professional. Established typography system balancing readability with personality. Built comprehensive guidelines covering all brand applications. Designed templates for key marketing and sales materials.',
                tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
                outcome: 'Scalable enterprise brand system that successfully differentiates Accelex in the fintech space. The modular approach allows internal teams to create on-brand materials without designer involvement.',
                learnings: 'Systems outperform decorative branding. Flexibility beats perfection—brands need room to adapt. The strongest identities are built on principles, not fixed templates.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Accelex transforms unstructured investment data into structured intelligence for financial institutions. When they came to me, they had a functional product but no cohesive brand identity. They needed to appear credible and established (competing with incumbent players) while feeling modern and innovative (emphasizing their technology advantage). This wasn\'t about creating a flashy startup brand—it was about building a flexible, professional system that could scale with the company as they grew from startup to enterprise player.',
                    images: ['hero', 'brand-overview', 'applications']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Fintech branding walks a tightrope. Too conservative and you blend into the sea of navy-blue-suited sameness. Too bold and you lose enterprise credibility. Additionally, the company\'s audience spans dramatically different user types: technical teams (data engineers, analysts), business users (portfolio managers, researchers), and executive buyers (CIOs, CTOs). The brand needed to communicate sophistication without alienating any segment. The technical challenge: the brand would live across wildly different mediums—product UI, pitch decks, documentation, marketing websites, conference booths. Each context has different constraints but needs to feel unmistakably Accelex.',
                    images: ['competitive-landscape', 'audience-spectrum']
                },
                process: {
                    title: 'Process',
                    content: 'Started with stakeholder interviews across teams to understand how they talked about the company and product. Analyzed competitor positioning and visual strategies to identify differentiation opportunities. Developed core brand principles that would guide all design decisions: clarity from complexity, precision, adaptability. For the visual system, I created a modular approach: primary brand elements that remain consistent plus flexible secondary elements that adapt to context. The color strategy deliberately avoided fintech blue, instead using a sophisticated palette that feels technical but not cold. Typography combined geometric precision with subtle warmth. Built an illustration system for representing data concepts that works at any scale. Created comprehensive brand guidelines with real-world examples, not just abstract rules.',
                    images: ['stakeholder-research', 'visual-exploration', 'modular-system', 'guidelines']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The brand identity successfully positioned Accelex as a credible enterprise player with modern sensibilities. The modular system proved robust across all applications—from tiny favicon to large conference banners. Internal teams reported confidence in applying the brand without constant designer oversight. Sales teams specifically mentioned that the polished brand identity helped in enterprise conversations, making the company feel more established than their startup size suggested. The system continued to work effectively as the company scaled, requiring only minor adjustments rather than complete overhauls.',
                    images: ['final-identity', 'applications-grid', 'sales-materials', 'product-integration']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'This project reinforced that enterprise brand design is fundamentally about systems thinking. You\'re not designing for one perfect use case—you\'re designing principles that guide thousands of future decisions. The revelation: flexibility is a feature, not a bug. The most successful brand elements were those with clear rules but room for adaptation. I learned that enterprise audiences value consistency over creativity. The brand doesn\'t need to be exciting—it needs to be reliable, professional, and appropriate. Finally: good brand systems empower teams. The measure of success isn\'t beautiful examples in the guidelines—it\'s whether non-designers can apply the brand successfully in real-world contexts.',
                    images: []
                }
            }
        },
        {
            id: 'wilshire',
            slug: 'wilshire',
            title: 'Wilshire',
            subtitle: 'Brand identity for financial services company',
            category: 'Graphic Design',
            tags: ['Finance', 'Brand Identity', 'Investment', 'Professional Services'],
            year: '2022',
            clientType: 'Client',
            client: 'Wilshire',
            thumbnail: 'wilshire-thumb',
            
            summary: 'Brand system built around clarity from complexity. Complete visual identity for investment firm.',
            
            caseStudy: {
                context: 'Wilshire is an investment firm requiring a unified communication system that conveys sophistication and trustworthiness. They needed visual consistency across all client-facing materials while maintaining flexibility for different content types.',
                role: 'Brand Designer',
                problem: 'Financial services branding traditionally defaults to conservative, forgettable aesthetics. Wilshire wanted to differentiate without sacrificing the gravitas required for high-net-worth client relationships. The challenge was creating memorable visual identity that still felt appropriate for fiduciary responsibilities.',
                process: 'Developed brand concept centered on "clarity from complexity"—reflecting how the firm guides clients through complex financial decisions. Created modular layout system that prioritizes information hierarchy. Established sophisticated typography and photography guidelines. Built comprehensive brand guidelines and application templates for common business needs.',
                tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
                outcome: 'Complete brand guidelines and templates that successfully balance differentiation with appropriateness. The visual system works across all client communications while maintaining professional credibility.',
                learnings: 'Visual clarity is strategic in finance. Clients need to trust both competence and character—brand design contributes to both. Good systems enable teams while constraining bad decisions.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Wilshire came to me needing a complete brand refresh. As an investment firm serving high-net-worth individuals and institutions, they required a visual identity that conveyed competence, trustworthiness, and sophistication without feeling stuffy or dated. The previous brand felt generic—indistinguishable from dozens of other financial advisors. They wanted something memorable but appropriate, distinctive but not risky. The project involved creating comprehensive brand guidelines and practical templates for all client-facing communications.',
                    images: ['hero', 'brand-identity', 'applications']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Financial services branding operates under unique constraints. Unlike consumer brands that can be playful or provocative, investment firms need to project stability, wisdom, and fiduciary responsibility. The audience—affluent individuals and family offices—expects sophistication but not ostentation. Additionally, the brand needed to work across diverse applications: detailed investment reports, brief client updates, website content, printed materials, presentations. Each required different information density while maintaining unmistakable brand recognition. The challenge: create a system flexible enough for all these contexts but consistent enough to build recognition.',
                    images: ['industry-constraints', 'audience-expectations']
                },
                process: {
                    title: 'Process',
                    content: 'Started by interviewing partners and clients to understand how Wilshire actually differentiated from competitors. The insight: "clarity from complexity"—their value wasn\'t generating alpha, it was helping clients make confident decisions amid market noise. This became the brand concept. Translated this conceptually into visual principles: clear hierarchy, intentional white space, thoughtful typography, purposeful photography. Developed a color strategy that avoided typical financial blue, instead using sophisticated earth tones that feel grounded and trustworthy. Created modular layout system where content breathes regardless of density. Established photography guidelines favoring authentic moments over stock imagery clichés. Built comprehensive brand book with real examples showing how to apply principles to common scenarios: quarterly reports, market commentary, client presentations, website updates.',
                    images: ['brand-strategy', 'visual-principles', 'layout-system', 'guidelines']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The brand identity successfully repositioned Wilshire as sophisticated but approachable, competent but not cold. Client feedback indicated the new materials felt more professional and trustworthy. Internal teams reported the templates streamlined content production—they could create on-brand materials without starting from scratch each time. The modular system proved particularly valuable for quarterly reports, which vary dramatically in length and complexity but now maintain consistent brand presence. Partners specifically appreciated that the brand helped in new business conversations—it signals seriousness without feeling corporate.',
                    images: ['final-materials', 'quarterly-reports', 'client-presentations', 'website']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Working in financial services taught me that brand design isn\'t always about standing out—sometimes it\'s about building trust. The most effective elements weren\'t the boldest—they were the most appropriate. I learned that information design is brand design in professional services. How clearly you present complex information directly impacts client confidence. Good typography, hierarchy, and white space aren\'t aesthetic choices—they\'re strategic tools. I also learned that brand guidelines for professional audiences need to be prescriptive enough to maintain consistency but flexible enough to handle edge cases. The best feedback: "We can actually use this." Finally: subtlety can differentiate. In a category full of aggressive branding, restraint stands out.',
                    images: []
                }
            }
        }
    ],

    // ========================================
    // PHOTOGRAPHY PROJECTS
    // ========================================
    photography: [],

    // ========================================
    // VIBE CODING
    // ========================================
    vibeCoding: []
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
        graphicDesign: PORTFOLIO_DATA.graphicDesign,
        vibeCoding: PORTFOLIO_DATA.vibeCoding
    };
}

function getClientProjects() {
    return {
        graphicDesign: PORTFOLIO_DATA.graphicDesign,
        photography: PORTFOLIO_DATA.photography
    };
}
