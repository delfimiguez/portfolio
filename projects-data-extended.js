/**
 * ============================================
 * PORTFOLIO PROJECTS DATABASE - DELFINA MIGUEZ
 * ============================================
 * Complete project data with all real case studies
 */

const PORTFOLIO_DATA = {
    // ========================================
    // GRAPHIC DESIGN PROJECTS (10 total)
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
                context: 'Health startup introducing HPP coconut water in pouch format.',
                role: 'Lead Brand Designer & Creative Director',
                problem: 'Crowded category, generic aesthetics, lack of education around processing.',
                process: 'Research, positioning, identity system, packaging design.',
                tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
                outcome: 'Launch-ready brand, packaging system, guidelines.',
                learnings: 'Simplicity builds trust. Packaging is part of strategy.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'P1NK approached me to create their complete brand identity from the ground up. As a startup entering the competitive wellness beverage space, they needed more than a pretty logo—they needed a strategic visual system that could communicate quality, transparency, and performance. The project encompassed brand strategy, visual identity, packaging design, and creative direction for launch materials.',
                    images: ['hero', 'logo-system', 'color-palette']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'The wellness beverage category is notoriously crowded and visually homogenous. Most brands default to either aggressive sports energy or overly precious health food aesthetics. P1NK needed to carve out distinct territory—premium but accessible, performance-oriented but natural. The bigger challenge was education: consumers don\'t understand HPP processing or why it matters.',
                    images: ['competitive-landscape', 'category-analysis']
                },
                process: {
                    title: 'Process',
                    content: 'I started with a comprehensive brand positioning workshop with the founders to clarify values, audience, and differentiation. From there, I mapped the competitive landscape visually to identify white space. For the visual system, I developed a modular approach: bold typography, restrained color palette anchored by the natural pink, and a graphic language that balances organic shapes with precise geometry.',
                    images: ['naming-exploration', 'visual-directions', 'packaging-iterations']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'P1NK launched with a complete, production-ready brand system that positions them as a premium player in the wellness beverage category. The packaging successfully communicates both transparency and performance, standing out on shelf against established competitors.',
                    images: ['final-packaging', 'retail-mockup']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'This project reinforced several principles about building consumer brands from zero. Simplicity is not minimalism—it\'s clarity of message. Packaging is strategic. Every surface is real estate for communication, education, or differentiation. Systems outperform individual assets.',
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
            
            summary: 'Modular editorial system for peptide guides, labels, social media and newsletters.',
            
            caseStudy: {
                context: 'Biotech wellness brand focused on education and transparency.',
                role: 'Visual & Editorial Designer',
                problem: 'Communicating complex science clearly and credibly.',
                process: 'Information architecture, editorial layouts, label system, templates.',
                tools: ['Figma', 'Adobe InDesign', 'Adobe Illustrator'],
                outcome: 'Scalable educational design system.',
                learnings: 'Hierarchy over decoration. Education requires product thinking.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Limitless Peptides is pioneering accessible peptide education in the wellness space. When they approached me, they had strong scientific content but no systematic way to present it. The challenge was creating an editorial design system flexible enough to handle everything from product packaging to multi-page guides.',
                    images: ['hero', 'system-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'The peptide space exists in an awkward middle ground between pharmaceuticals and wellness supplements. Design too clinical and you alienate wellness consumers. Design too casual and you lose credibility. The brand needed consistency across vastly different formats: tiny product labels with regulatory text, long-form PDF guides, Instagram carousel posts, and weekly newsletters.',
                    images: ['content-complexity', 'format-requirements']
                },
                process: {
                    title: 'Process',
                    content: 'I began by auditing all existing content to understand information density patterns. Working with their scientific team, I developed editorial standards for presenting technical information. For the visual system, I created a modular grid approach with typography as the workhorse. I developed a color-coding system for different information types that aids navigation without feeling juvenile.',
                    images: ['information-architecture', 'grid-system']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The design system successfully unified all brand communications while improving content comprehension. Product labels now clearly communicate key information without sacrificing aesthetics or regulatory compliance. The team reports that the system accelerated content production.',
                    images: ['labels-final', 'guide-layouts']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Education is a product, not just content. Good educational design requires the same thinking as good UX. Hierarchy matters exponentially more than aesthetics in dense information environments. Systematic thinking compounds value over time.',
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
            
            summary: 'Pitch deck proposing in-flight wellness program using Sunset Lenses.',
            
            caseStudy: {
                context: 'Brand partnership proposal combining science, service design and marketing.',
                role: 'Lead Designer & Creative Strategist',
                problem: 'Convincing airline executives of feasibility and value.',
                process: 'Narrative structure, experience mapping, service design visualization.',
                tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
                outcome: 'High-fidelity strategic pitch deck.',
                learnings: 'Service design equals product credibility.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Ra Optics came to me with an ambitious idea: partner with an airline to provide circadian wellness support through their eyewear. This was fundamentally a strategic design challenge. The deck needed to work as business proposal, service blueprint, and brand story simultaneously.',
                    images: ['hero', 'deck-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Airline partnerships are notoriously difficult—long sales cycles, risk-averse decision makers. The proposal needed to address executive concerns (cost, logistics, ROI) while inspiring them about brand differentiation. We needed to visualize an experience that didn\'t yet exist.',
                    images: ['executive-concerns', 'experience-mapping']
                },
                process: {
                    title: 'Process',
                    content: 'Started with intensive research into airline partnership precedents. Developed a story structure moving from universal problem to science to solution to business case. Created detailed service design visualizations showing passenger touchpoints at every stage. Designed mockups of all physical materials to make the program tangible.',
                    images: ['research-synthesis', 'service-touchpoints']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The final deck successfully articulated a complex, multi-dimensional partnership opportunity clearly. The service design visualizations particularly resonated—executives could see exactly how the program would work operationally. The deck became a template for similar conversations.',
                    images: ['final-deck-pages', 'service-mockups']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Strategy and design are inseparable at the highest level. Service design visualization is incredibly powerful for selling concepts that don\'t yet exist. Partnership decks are selling possibility, not certainty.',
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
            
            summary: 'Multi-channel design system for SaaS product marketing.',
            
            caseStudy: {
                context: 'Developer-focused GitOps company.',
                role: 'Product Marketing Designer',
                problem: 'Explaining complex infrastructure visually.',
                process: 'Brand system application, educational content, illustrations.',
                tools: ['Figma', 'Adobe Illustrator'],
                outcome: 'Unified marketing system.',
                learnings: 'Clarity beats decoration for developers.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Akuity is an enterprise DevOps platform company. When they brought me in as product marketing designer, they had strong product and engineering but inconsistent visual communication. The challenge was making complex infrastructure concepts comprehensible while respecting the technical sophistication of their audience.',
                    images: ['hero', 'marketing-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Developer-focused companies face a unique design challenge: the audience values substance over style and can detect bullshit instantly. I needed to find middle ground: technically accurate but visually accessible. The content spanned detailed product documentation to social media snippets.',
                    images: ['technical-complexity']
                },
                process: {
                    title: 'Process',
                    content: 'Started by immersing myself in the product—sitting with engineering teams, understanding workflows. Built a visual language for representing infrastructure concepts that engineers would respect. Developed illustration guidelines that prioritize accuracy and clarity over decoration.',
                    images: ['product-immersion', 'visual-language']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The unified marketing system successfully positioned Akuity as technically credible while remaining accessible. Internal feedback from both sales and engineering teams confirmed the system struck the right balance—compelling without being salesy.',
                    images: ['product-sheets', 'documentation']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Marketing to developers taught me that audience empathy is everything. Technical illustration requires deep subject matter understanding—you can\'t fake it. Developer-focused design isn\'t about stripping decoration—it\'s about prioritizing clarity.',
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
            
            summary: 'End-to-end visual identity for investment data company.',
            
            caseStudy: {
                context: 'Fintech company transforming unstructured data.',
                role: 'Brand Designer',
                problem: 'Differentiating in conservative fintech space while maintaining credibility.',
                process: 'Modular system, color strategy, typography, guidelines.',
                tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
                outcome: 'Scalable enterprise brand system.',
                learnings: 'Systems outperform decorative branding.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Accelex transforms unstructured investment data into structured intelligence. They needed to appear credible and established while feeling modern and innovative. This was about building a flexible, professional system that could scale with the company.',
                    images: ['hero', 'brand-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Fintech branding walks a tightrope. Too conservative and you blend into sameness. Too bold and you lose enterprise credibility. The brand would live across wildly different mediums—product UI, pitch decks, documentation, conference booths.',
                    images: ['competitive-landscape']
                },
                process: {
                    title: 'Process',
                    content: 'Started with stakeholder interviews to understand how they talked about the company. Analyzed competitor positioning to identify differentiation opportunities. Created a modular approach: primary brand elements that remain consistent plus flexible secondary elements that adapt to context.',
                    images: ['stakeholder-research', 'modular-system']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The brand identity successfully positioned Accelex as a credible enterprise player with modern sensibilities. Internal teams reported confidence in applying the brand without constant designer oversight.',
                    images: ['final-identity', 'applications-grid']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Enterprise brand design is fundamentally about systems thinking. Flexibility is a feature, not a bug. Good brand systems empower teams—the measure of success is whether non-designers can apply the brand successfully.',
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
            tags: ['Finance', 'Brand Identity', 'Investment'],
            year: '2022',
            clientType: 'Client',
            client: 'Wilshire',
            thumbnail: 'wilshire-thumb',
            
            summary: 'Brand system built around clarity from complexity.',
            
            caseStudy: {
                context: 'Investment firm needing unified communication system.',
                role: 'Brand Designer',
                problem: 'Creating memorable identity that still felt appropriate for fiduciary responsibilities.',
                process: 'Concept development, modular layout system, typography, photography.',
                tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
                outcome: 'Complete brand guidelines and templates.',
                learnings: 'Visual clarity is strategic in finance.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Wilshire came to me needing a complete brand refresh. They required a visual identity that conveyed competence, trustworthiness, and sophistication without feeling stuffy or dated. The project involved creating comprehensive brand guidelines and practical templates for all client-facing communications.',
                    images: ['hero', 'brand-identity']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Financial services branding operates under unique constraints. Investment firms need to project stability, wisdom, and fiduciary responsibility. The brand needed to work across diverse applications: detailed investment reports, brief client updates, website content, printed materials, presentations.',
                    images: ['industry-constraints']
                },
                process: {
                    title: 'Process',
                    content: 'Started by interviewing partners and clients to understand how Wilshire actually differentiated. The insight: "clarity from complexity"—their value was helping clients make confident decisions amid market noise. Translated this into visual principles: clear hierarchy, intentional white space, thoughtful typography.',
                    images: ['brand-strategy', 'layout-system']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The brand identity successfully repositioned Wilshire as sophisticated but approachable. Internal teams reported the templates streamlined content production. Partners appreciated that the brand helped in new business conversations.',
                    images: ['final-materials', 'quarterly-reports']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Brand design isn\'t always about standing out—sometimes it\'s about building trust. Information design is brand design in professional services. Subtlety can differentiate in a category full of aggressive branding.',
                    images: []
                }
            }
        },
        {
            id: 'crackerjack',
            slug: 'crackerjack',
            title: 'Crackerjack',
            subtitle: 'Creative direction for photography and social media visual system',
            category: 'Graphic Design',
            tags: ['Creative Direction', 'Photography', 'Social Media'],
            year: '2024',
            clientType: 'Client',
            client: 'Crackerjack',
            thumbnail: 'crackerjack-thumb',
            
            summary: 'Creative direction for photography and social media visual system.',
            
            caseStudy: {
                context: 'Brand requiring consistent visual presence across digital platforms.',
                role: 'Creative Director',
                problem: 'Establishing consistent photography guidelines and digital asset library.',
                process: 'Defined photography guidelines, composition rules, and reusable digital assets.',
                tools: ['Photography Direction', 'Adobe Photoshop'],
                outcome: 'Consistent brand presence across platforms.',
                learnings: 'Photography systems enable non-photographers to create on-brand content.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Crackerjack needed a consistent visual system for their social media presence. The challenge was creating photography guidelines that felt natural but on-brand, allowing different team members to create content that maintained visual consistency.',
                    images: ['hero', 'photography-system']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Social media content is created by multiple people with varying photography skills. The system needed to be simple enough for anyone to follow while sophisticated enough to look professional.',
                    images: ['content-variety']
                },
                process: {
                    title: 'Process',
                    content: 'Developed photography guidelines covering composition, lighting, styling, and color treatment. Created reusable templates for common social media formats. Built a library of branded graphic elements that could be overlaid on photos.',
                    images: ['guidelines', 'templates']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The team can now create consistent, on-brand content without photographer involvement. Social media feed has cohesive visual identity that strengthens brand recognition.',
                    images: ['social-feed', 'applications']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Good creative direction is about enabling others. The best guidelines are simple rules that produce consistent results across skill levels.',
                    images: []
                }
            }
        },
        {
            id: 'unplugged-podcast',
            slug: 'unplugged-podcast',
            title: 'Unplugged Podcast – Chronosphere',
            subtitle: 'End-to-end branding for tech podcast series',
            category: 'Graphic Design',
            tags: ['Podcast', 'Branding', 'Video', 'Motion Graphics'],
            year: '2024',
            clientType: 'Client',
            client: 'Chronosphere',
            thumbnail: 'unplugged-thumb',
            
            summary: 'Complete visual identity for tech podcast including logo, episode covers, video layouts, and motion graphics.',
            
            caseStudy: {
                context: 'Tech company launching podcast series requiring complete visual identity.',
                role: 'Brand Designer',
                problem: 'Creating cohesive visual system across audio, video, and social platforms.',
                process: 'Visual identity, logo system, episode covers, video layouts, motion graphics, social templates.',
                tools: ['Adobe Illustrator', 'After Effects', 'Figma'],
                outcome: 'Complete podcast brand system.',
                learnings: 'Podcast branding requires flexibility across audio, video, and social contexts.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Chronosphere launched a podcast series and needed complete visual identity. The challenge was creating a system that worked across audio platforms, video episodes, and social media promotion while maintaining brand connection to Chronosphere.',
                    images: ['hero', 'logo-system']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Podcasts exist across multiple formats: audio players (square covers), video episodes (widescreen), social promotion (various aspect ratios). The identity needed to work at tiny sizes and large formats, static and animated.',
                    images: ['format-requirements']
                },
                process: {
                    title: 'Process',
                    content: 'Developed logo system that works at all sizes. Created template system for episode covers that maintains consistency while allowing per-episode customization. Designed video layout system for recording. Built motion graphics package for episode intros/outros.',
                    images: ['logo-exploration', 'templates', 'video-system']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The podcast launched with professional, cohesive visual identity. The template system allows team to create new episodes efficiently. Motion graphics give professional polish to video versions.',
                    images: ['episode-covers', 'video-stills', 'social-posts']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Podcast brands need extreme flexibility. The same identity must work at 1400px and 140px. Motion adds production value but templates ensure anyone can execute.',
                    images: []
                }
            }
        },
        {
            id: 'film-festival',
            slug: 'film-festival',
            title: 'Film Festival Branding',
            subtitle: 'Complete visual identity for independent film festival',
            category: 'Graphic Design',
            tags: ['Event Branding', 'Film', 'Print'],
            year: '2023',
            clientType: 'Client',
            client: 'Independent Film Festival',
            thumbnail: 'festival-thumb',
            
            summary: 'Complete visual identity system for film festival including logo, posters, signage, and digital assets.',
            
            caseStudy: {
                context: 'Annual film festival requiring complete visual identity refresh.',
                role: 'Brand Designer',
                problem: 'Creating memorable identity that works across print, digital, and environmental applications.',
                process: 'Logo design, posters, signage, digital assets, print applications, social media.',
                tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
                outcome: 'Complete festival identity system.',
                learnings: 'Event branding requires impact at scale and detail at small formats.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'An independent film festival needed a complete visual identity that would work across all touchpoints: posters, programs, signage, digital platforms, and merchandise. The identity needed to feel cinematic and cultural while remaining functional.',
                    images: ['hero', 'identity-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Film festival branding must work at massive scale (building banners) and tiny formats (program booklets). The identity needs impact for promotion but clarity for wayfinding. It must feel special but not overshadow the films.',
                    images: ['scale-requirements']
                },
                process: {
                    title: 'Process',
                    content: 'Developed logo system with primary mark and simplified versions for small applications. Created poster templates that allow customization per screening while maintaining visual consistency. Designed comprehensive signage system for venue wayfinding.',
                    images: ['logo-system', 'poster-templates', 'signage']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'The festival identity successfully created memorable visual presence. Posters became collector items. Signage system improved attendee experience. The modular system worked across all applications.',
                    images: ['posters', 'signage-installed', 'program']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Event branding is service design—helping people navigate experiences. The best event identities balance impact with utility. Modular systems enable volunteers to execute consistently.',
                    images: []
                }
            }
        },
        {
            id: 'your-mates-brewery',
            slug: 'your-mates-brewery',
            title: 'Your Mates Brewery',
            subtitle: 'Creative direction for photography and social media campaigns',
            category: 'Graphic Design',
            tags: ['Creative Direction', 'Photography', 'Social Media', 'Brewery'],
            year: '2024',
            clientType: 'Client',
            client: 'Your Mates Brewery',
            thumbnail: 'mates-thumb',
            
            summary: 'Creative direction for photography and social media assets, establishing consistent visual system for digital campaigns.',
            
            caseStudy: {
                context: 'Brewery brand requiring consistent visual presence across social platforms.',
                role: 'Creative Director',
                problem: 'Creating photography system that balances craft authenticity with social media appeal.',
                process: 'Photography direction, composition guidelines, social media templates, ongoing campaign execution.',
                tools: ['Photography Direction', 'Adobe Photoshop', 'Lightroom'],
                outcome: 'Scalable visual system for digital campaigns.',
                learnings: 'Authentic photography outperforms staged content for craft brands.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Your Mates Brewery needed creative direction for their social media presence. The challenge was capturing the authenticity of craft brewing while creating content that performed well on social platforms. This required building a photography system that internal teams could execute consistently.',
                    images: ['hero', 'photography-samples']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Craft brewery brands need to feel authentic—overly polished content reads as corporate. But amateur photography doesn\'t build brand value. The system needed to produce professional results that felt natural, not staged.',
                    images: ['authenticity-balance']
                },
                process: {
                    title: 'Process',
                    content: 'Developed photography approach emphasizing natural light, candid moments, and product in context. Created shot lists for common scenarios. Built templates for social posts that work with user-generated content and professional photography.',
                    images: ['photography-guidelines', 'shot-lists', 'templates']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Social media engagement increased significantly. The photography system allows staff to create content that looks professional but authentic. The brand visual identity is now consistent and recognizable.',
                    images: ['social-feed', 'campaign-examples']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'For craft brands, authenticity is the strategy. Professional photography can feel natural when guided by clear principles. Simple rules produce consistent results across creators.',
                    images: []
                }
            }
        }
    ],

    // ========================================
    // PHOTOGRAPHY PROJECTS (12 series)
    // ========================================
    photography: [
        {
            id: 'justcoffee',
            slug: 'justcoffee',
            title: 'JustCoffee',
            subtitle: 'Commercial photography for specialty coffee roaster',
            category: 'Photography',
            tags: ['Commercial', 'Food & Beverage', 'Product'],
            year: '2024',
            clientType: 'Client',
            client: 'JustCoffee',
            seriesCount: 20,
            thumbnail: 'justcoffee-hero',
            
            summary: 'Product and lifestyle photography for specialty coffee brand, capturing the craft and ritual of coffee preparation.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'JustCoffee is a specialty coffee roaster focused on quality and transparency. The photography needed to communicate craftsmanship while remaining approachable. Shot product details, brewing processes, and lifestyle moments that connect with coffee enthusiasts.',
                    images: ['hero', 'product-1', 'lifestyle-1', 'detail-1']
                },
                approach: {
                    title: 'Approach',
                    content: 'Emphasized natural light and authentic moments. Focused on textures—coffee grounds, steam, ceramic surfaces. Captured the ritual and process, not just final product. Color palette stayed warm and inviting.',
                    images: ['process-1', 'process-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Shot on Canon EOS R5 with 50mm f/1.2 and 100mm Macro. Natural window light supplemented with reflectors. Shallow depth of field to isolate subjects. Minimal post-processing to maintain natural colors.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography used across packaging, website, social media, and retail displays. Images successfully communicate quality and craft while remaining accessible.',
                    images: ['final-applications']
                }
            }
        },
        {
            id: 'ym-bar-kitchen',
            slug: 'ym-bar-kitchen',
            title: 'YM Bar & Kitchen',
            subtitle: 'Restaurant interior and food photography',
            category: 'Photography',
            tags: ['Restaurant', 'Food', 'Interior'],
            year: '2024',
            clientType: 'Client',
            client: 'YM Bar & Kitchen',
            seriesCount: 30,
            thumbnail: 'ym-hero',
            
            summary: 'Interior and food photography for modern bar and kitchen, capturing atmosphere and culinary offerings.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'YM Bar & Kitchen needed photography that captured both their sophisticated interior design and their food. The challenge was shooting in challenging lighting conditions while maintaining natural atmosphere.',
                    images: ['hero', 'interior-1', 'food-1', 'ambience-1']
                },
                approach: {
                    title: 'Approach',
                    content: 'Shot during service to capture authentic energy. Balanced ambient restaurant lighting with subtle fill. Composed food shots to emphasize plating artistry. Captured candid moments of service and preparation.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5 with 24-70mm f/2.8 and 50mm f/1.2. High ISO capabilities essential for low-light shooting. Continuous lighting to maintain natural restaurant ambience.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography successfully communicates upscale but welcoming atmosphere. Used across website, social media, and press materials.',
                    images: ['final-web', 'final-social']
                }
            }
        },
        {
            id: 'ginger-beer',
            slug: 'ginger-beer',
            title: 'Ginger Beer',
            subtitle: 'Product and lifestyle photography for craft beverage brand',
            category: 'Photography',
            tags: ['Product', 'Beverage', 'Commercial'],
            year: '2024',
            clientType: 'Client',
            client: 'Ginger Beer Co.',
            seriesCount: 15,
            thumbnail: 'ginger-hero',
            
            summary: 'Product photography emphasizing craft beverage quality and natural ingredients.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Craft ginger beer brand needed product photography that communicated natural ingredients and quality. Focused on texture, color, and lifestyle context.',
                    images: ['hero', 'product-1', 'ingredients', 'lifestyle']
                },
                approach: {
                    title: 'Approach',
                    content: 'Natural light photography emphasizing golden hour warmth. Shot products in lifestyle contexts—beach, outdoor dining, summer gatherings. Close-ups on bubbles and color.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm and 100mm Macro. Natural light only. Fast shutter to freeze carbonation bubbles.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography used in packaging design, social media, and retail point-of-sale materials.',
                    images: ['final-packaging', 'final-pos']
                }
            }
        },
        {
            id: 'your-mates-photo',
            slug: 'your-mates-photo',
            title: 'Your Mates Brewery',
            subtitle: 'Brewery photography series',
            category: 'Photography',
            tags: ['Brewery', 'Commercial', 'Lifestyle'],
            year: '2024',
            clientType: 'Client',
            client: 'Your Mates Brewery',
            seriesCount: 25,
            thumbnail: 'mates-photo-hero',
            
            summary: 'Photography series capturing craft brewing process and social atmosphere.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Brewery photography emphasizing craft process and community. Documented brewing, serving, and social moments that define the brand.',
                    images: ['hero', 'brewing-1', 'social-1', 'product-1']
                },
                approach: {
                    title: 'Approach',
                    content: 'Authentic, documentary style. Captured real moments during brewing and service. Natural light and ambient bar lighting. Focus on hands, process, interaction.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm f/2.8. High ISO for low-light brewery environments. Fast shutter for action moments.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography establishes authentic craft brand voice. Used extensively in social media, building strong community engagement.',
                    images: ['social-applications']
                }
            }
        },
        {
            id: 'golden-menu',
            slug: 'golden-menu',
            title: 'Golden Menu',
            subtitle: 'Food photography for restaurant menu design',
            category: 'Photography',
            tags: ['Food', 'Restaurant', 'Menu'],
            year: '2024',
            clientType: 'Client',
            client: 'Golden Restaurant',
            seriesCount: 18,
            thumbnail: 'golden-hero',
            
            summary: 'Food photography optimized for menu use, emphasizing appetizing presentation and accurate color.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Menu photography requiring accurate representation while remaining appetizing. Each dish photographed consistently for cohesive menu design.',
                    images: ['hero', 'dish-1', 'dish-2', 'dish-3']
                },
                approach: {
                    title: 'Approach',
                    content: 'Consistent overhead angle for all dishes. Natural styling—dishes as served. Soft natural light for accurate color. Neutral backgrounds to not compete with food.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 50mm f/1.2. Overhead rig for consistent angles. Diffused natural light. Color-corrected for print reproduction.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Complete menu photography system. Images work in print menus, digital displays, and promotional materials.',
                    images: ['menu-final', 'digital-menu']
                }
            }
        },
        {
            id: 'crackerjack-photo',
            slug: 'crackerjack-photo',
            title: 'Crackerjack',
            subtitle: 'Brand photography series',
            category: 'Photography',
            tags: ['Brand', 'Lifestyle', 'Product'],
            year: '2024',
            clientType: 'Client',
            client: 'Crackerjack',
            seriesCount: 22,
            thumbnail: 'crackerjack-photo-hero',
            
            summary: 'Lifestyle and product photography establishing consistent brand visual language.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Brand photography series establishing visual consistency across touchpoints. Balanced product focus with lifestyle context.',
                    images: ['hero', 'lifestyle-1', 'product-1', 'detail-1']
                },
                approach: {
                    title: 'Approach',
                    content: 'Natural light, authentic moments, consistent color palette. Product in real-world contexts. Emphasis on textures and details.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm and 50mm. Natural light only. Consistent color grading across series.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography system enables consistent brand presence across social media and marketing materials.',
                    images: ['social-grid']
                }
            }
        },
        {
            id: 'grand-hotel',
            slug: 'grand-hotel',
            title: 'The Grand Hotel',
            subtitle: 'Hospitality photography',
            category: 'Photography',
            tags: ['Hospitality', 'Interior', 'Architecture'],
            year: '2024',
            clientType: 'Client',
            client: 'The Grand Hotel',
            seriesCount: 35,
            thumbnail: 'grand-hero',
            
            summary: 'Hotel interior and exterior photography for luxury hospitality brand.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Luxury hotel photography capturing architecture, interiors, and guest experience. Emphasis on natural light and authentic atmosphere.',
                    images: ['hero', 'exterior', 'room', 'common-space']
                },
                approach: {
                    title: 'Approach',
                    content: 'Shot during optimal natural light times. Captured spaces empty and in use. Emphasis on architectural details and luxurious materials.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 16-35mm for architecture, 50mm for details. Tripod for interior consistency. HDR technique for challenging lighting.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography used across website, booking platforms, and marketing materials. Successfully communicates luxury positioning.',
                    images: ['website', 'booking-platforms']
                }
            }
        },
        {
            id: 'robertsons-pub',
            slug: 'robertsons-pub',
            title: 'Robertsons Pub',
            subtitle: 'Pub interior and lifestyle photography',
            category: 'Photography',
            tags: ['Pub', 'Interior', 'Lifestyle'],
            year: '2024',
            clientType: 'Client',
            client: 'Robertsons Pub',
            seriesCount: 20,
            thumbnail: 'robertsons-hero',
            
            summary: 'Pub photography capturing character, atmosphere, and community.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Traditional pub photography emphasizing warmth, character, and social atmosphere. Documented space and community.',
                    images: ['hero', 'interior', 'bar', 'patrons']
                },
                approach: {
                    title: 'Approach',
                    content: 'Ambient pub lighting maintained for authenticity. Candid moments during service. Details of historic features and character.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm. High ISO for low-light pub environment. Minimal lighting intervention to preserve atmosphere.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography successfully communicates welcoming, historic character. Used in website and local promotion.',
                    images: ['website', 'social']
                }
            }
        },
        {
            id: 'diggies-cafe',
            slug: 'diggies-cafe',
            title: 'Diggies Cafe',
            subtitle: 'Cafe photography series',
            category: 'Photography',
            tags: ['Cafe', 'Food', 'Interior'],
            year: '2024',
            clientType: 'Client',
            client: 'Diggies Cafe',
            seriesCount: 18,
            thumbnail: 'diggies-hero',
            
            summary: 'Cafe photography capturing food, space, and morning atmosphere.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Neighborhood cafe photography emphasizing fresh food, morning light, and community vibe.',
                    images: ['hero', 'food', 'interior', 'coffee']
                },
                approach: {
                    title: 'Approach',
                    content: 'Natural morning light emphasized. Fresh, simple food styling. Candid moments of cafe culture.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 50mm and 100mm macro. Natural light only. Fresh, minimal styling.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography establishes fresh, welcoming brand identity. Strong social media engagement.',
                    images: ['social-feed']
                }
            }
        },
        {
            id: 'manly-stoke',
            slug: 'manly-stoke',
            title: 'Manly Stoke Hostel',
            subtitle: 'Hostel photography for backpacker accommodation',
            category: 'Photography',
            tags: ['Hostel', 'Travel', 'Youth'],
            year: '2024',
            clientType: 'Client',
            client: 'Manly Stoke Hostel',
            seriesCount: 25,
            thumbnail: 'manly-hero',
            
            summary: 'Hostel photography emphasizing social atmosphere and coastal location.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Backpacker hostel photography capturing social energy and beach proximity. Emphasis on community and adventure.',
                    images: ['hero', 'common-areas', 'beach', 'social']
                },
                approach: {
                    title: 'Approach',
                    content: 'Authentic documentary style. Captured real guests and staff. Coastal light and colors emphasized. Energy and movement.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm. Natural light. Fast shutter for action. Vibrant color processing.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography successfully attracts target backpacker demographic. High booking conversion from visual content.',
                    images: ['booking-site']
                }
            }
        },
        {
            id: 'pacific-hostel',
            slug: 'pacific-hostel',
            title: 'The Pacific Hostel',
            subtitle: 'Hostel interior and lifestyle photography',
            category: 'Photography',
            tags: ['Hostel', 'Interior', 'Travel'],
            year: '2024',
            clientType: 'Client',
            client: 'The Pacific Hostel',
            seriesCount: 20,
            thumbnail: 'pacific-hero',
            
            summary: 'Hostel photography balancing clean facilities with social atmosphere.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Hostel photography emphasizing modern facilities while maintaining authentic backpacker culture.',
                    images: ['hero', 'rooms', 'common', 'guests']
                },
                approach: {
                    title: 'Approach',
                    content: 'Clean, bright interior photography. Candid social moments. Balance of facility and atmosphere shots.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 16-35mm for interiors. Natural light with fill. Clean, modern processing.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Photography positions hostel as clean, modern, social. Used across booking platforms and social media.',
                    images: ['booking-platforms', 'social']
                }
            }
        },
        {
            id: 'casa-caravan',
            slug: 'casa-caravan',
            title: 'Casa Caravan – Argentina',
            subtitle: 'Travel photography series from Argentina',
            category: 'Photography',
            tags: ['Travel', 'Documentary', 'Argentina'],
            year: '2023',
            clientType: 'Personal',
            client: null,
            seriesCount: 30,
            thumbnail: 'caravan-hero',
            
            summary: 'Documentary travel photography series capturing caravan life in Argentina.',
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Personal travel photography project documenting caravan travelers in Argentina. Emphasis on landscape, lifestyle, and travel culture.',
                    images: ['hero', 'landscape', 'caravan', 'people']
                },
                approach: {
                    title: 'Approach',
                    content: 'Documentary style. Natural light. Emphasis on golden hour. Captured both grand landscape and intimate moments.',
                    images: ['approach-1', 'approach-2']
                },
                technical: {
                    title: 'Technical',
                    content: 'Canon EOS R5, 24-70mm and 70-200mm. Natural light only. Minimal post-processing to preserve authenticity.',
                    images: []
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Series exhibited in local gallery. Featured in travel publication. Captures authentic nomadic lifestyle.',
                    images: ['exhibition', 'publication']
                }
            }
        }
    ],

    // ========================================
    // VIBE CODING / PLAYGROUND (3 projects)
    // ========================================
    vibeCoding: [
        {
            id: 'kinetic-typography',
            slug: 'kinetic-typography',
            title: 'Kinetic Typography Lab',
            subtitle: 'Experimental typographic system exploring motion and rhythm',
            category: 'Vibe Coding',
            tags: ['Typography', 'Motion', 'Generative', 'WebGL'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'kinetic-thumb',
            liveLink: '#',
            
            summary: 'Experimental typographic system exploring motion, rhythm, and generative layouts through kinetic typography.',
            
            caseStudy: {
                context: 'Personal exploration of programmatic typography and motion design.',
                role: 'Creative Developer',
                problem: 'How to create meaningful motion in typography that enhances rather than distracts from readability.',
                process: 'Built system exploring wave patterns, rhythm, easing functions, and user interaction. Developed multiple animation modes responding to input.',
                tech: ['JavaScript', 'WebGL', 'GSAP', 'Canvas API'],
                outcome: 'Interactive typography system with multiple motion patterns and real-time controls.',
                learnings: 'Motion must have purpose. Best kinetic typography enhances message, doesn\'t replace it.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Kinetic Typography Lab explores how motion can enhance typographic communication. The project experiments with various animation approaches—wave patterns, rhythm-based systems, physics simulations—to understand when motion adds value versus when it distracts.',
                    images: ['hero', 'modes-overview']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Most kinetic typography feels gratuitous—motion for motion\'s sake. The challenge was developing principles for meaningful motion: when does animation enhance communication versus when does it hinder readability?',
                    images: ['research']
                },
                process: {
                    title: 'Process',
                    content: 'Built multiple animation systems to test different approaches. Experimented with easing functions, rhythm patterns, physics-based motion. Created controls for real-time manipulation to understand which parameters matter most.',
                    images: ['development-1', 'development-2']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Working system demonstrating various kinetic typography approaches. Principles developed inform motion design work in other projects.',
                    images: ['final-demo']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Motion must have intent. The most successful kinetic typography uses motion to emphasize meaning—fast words move fast, heavy words move slowly. Subtle motion is more effective than dramatic animation.',
                    images: []
                }
            }
        },
        {
            id: 'ocean-plastics',
            slug: 'ocean-plastics',
            title: 'Ocean Plastics Awareness Website',
            subtitle: 'Interactive data visualization for environmental awareness',
            category: 'Vibe Coding',
            tags: ['Data Viz', 'Environmental', 'Interactive', 'WebGL'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'ocean-thumb',
            liveLink: '#',
            
            summary: 'Interactive website visualizing the impact of plastic pollution in oceans, combining data, storytelling, and web-based interaction design.',
            
            caseStudy: {
                context: 'Personal project addressing ocean plastic crisis through data visualization.',
                role: 'Designer & Developer',
                problem: 'How to make invisible environmental crisis visible and emotionally resonant through data.',
                process: 'Collected data from scientific sources. Designed scrollytelling narrative. Built interactive visualizations showing scale of problem.',
                tech: ['JavaScript', 'D3.js', 'Three.js', 'Scrollama'],
                outcome: 'Interactive website making abstract environmental data tangible and shareable.',
                learnings: 'Data visualization is storytelling. Interactivity increases engagement but must have purpose.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Ocean Plastics Awareness Website translates scientific data about plastic pollution into visceral, interactive experience. Uses scrollytelling and data visualization to make abstract statistics tangible and emotionally resonant.',
                    images: ['hero', 'visualizations']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Environmental data is often abstract and overwhelming. Numbers like "8 million tons" don\'t resonate emotionally. The challenge was making data feel real without being preachy or depressing.',
                    images: ['data-challenge']
                },
                process: {
                    title: 'Process',
                    content: 'Collected data from scientific publications. Designed narrative structure moving from personal (single bottle) to global (ocean gyres). Built interactive visualizations using Three.js for 3D and D3.js for charts. Implemented scroll-driven animation for storytelling.',
                    images: ['data-collection', 'visualization-dev']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Working website demonstrating effective environmental data communication. Shared on social media, generating awareness conversations.',
                    images: ['final-site']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Data visualization is emotional design. Numbers need context to matter. Scrollytelling is powerful but requires careful pacing. Interactive elements must serve narrative, not distract from it.',
                    images: []
                }
            }
        },
        {
            id: 'anonymous-poems',
            slug: 'anonymous-poems',
            title: 'Anonymous Poems Wall',
            subtitle: 'Interactive digital installation for participatory poetry',
            category: 'Vibe Coding',
            tags: ['Installation', 'Interactive', 'Community', 'Poetry'],
            year: '2024',
            clientType: 'Personal',
            thumbnail: 'poems-thumb',
            liveLink: '#',
            
            summary: 'An interactive digital installation allowing users to submit and explore anonymous poems, designed as a participatory and emotionally driven experience.',
            
            caseStudy: {
                context: 'Personal project exploring digital spaces for anonymous creative expression.',
                role: 'Designer & Developer',
                problem: 'How to create safe, beautiful space for anonymous creative sharing.',
                process: 'Built web-based installation where users can submit poems anonymously and explore others\' contributions. Focus on simplicity and emotional safety.',
                tech: ['JavaScript', 'Firebase', 'CSS Animations'],
                outcome: 'Working installation facilitating anonymous poetry sharing.',
                learnings: 'Digital intimacy requires careful design. Anonymity enables vulnerability.'
            },
            
            sections: {
                summary: {
                    title: 'About',
                    content: 'Anonymous Poems Wall is a digital installation exploring how technology can facilitate vulnerable creative expression. Users can submit poems anonymously and explore others\' contributions in a contemplative, non-judgmental space.',
                    images: ['hero', 'interface']
                },
                challenge: {
                    title: 'Challenge',
                    content: 'Creating digital space that feels safe and intimate is difficult. The interface needed to encourage participation while respecting privacy. Balance between accessibility and contemplation.',
                    images: ['design-challenge']
                },
                process: {
                    title: 'Process',
                    content: 'Designed minimal interface focused on reading experience. Built backend for anonymous submission and moderation. Created gentle animations that encourage contemplation without distraction. Tested with small community before wider release.',
                    images: ['interface-dev', 'testing']
                },
                outcome: {
                    title: 'Outcome',
                    content: 'Working installation with growing collection of anonymous poems. Users report feeling safe sharing vulnerable creative work.',
                    images: ['final-installation']
                },
                learnings: {
                    title: 'Learnings',
                    content: 'Digital intimacy is possible with careful design. Anonymity can enable rather than inhibit meaningful connection. Simplicity in interface design allows content to resonate emotionally.',
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
