
        const canvas = document.getElementById('ambient-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        const maxParticles = 60;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(189, 0, 255, 0.2)';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < maxParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            // Draw connecting web lines
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', resizeCanvas);
        window.onload = function() {
            resizeCanvas();
            animateParticles();
            bootSystemLoader();
        };

        /* Dynamic Custom Terminal Logs Loading Screen Simulation */
        const terminalLogs = [
            "Initializing Quantum Node Core...",
            "Loading Neural NLP Embeddings Matrix...",
            "Encrypting communications protocol layer TLS 1.3...",
            "Establishing connection to India Network grid...",
            "Rendering visual frame grids & bento UI structures...",
            "System configuration stabilized. Matrix Operational."
        ];

        function bootSystemLoader() {
            const feed = document.getElementById('loader-terminal-feed');
            const bar = document.getElementById('loader-bar');
            const percent = document.getElementById('loader-percent');
            let logIndex = 0;
            let currentPercent = 0;

            function addLog() {
                if (logIndex < terminalLogs.length) {
                    const row = document.createElement('p');
                    row.textContent = `> ${terminalLogs[logIndex]}`;
                    feed.appendChild(row);
                    logIndex++;
                }
            }

            const logTimer = setInterval(addLog, 400);

            const progressTimer = setInterval(() => {
                currentPercent += Math.floor(Math.random() * 15) + 5;
                if (currentPercent >= 100) {
                    currentPercent = 100;
                    clearInterval(progressTimer);
                    clearInterval(logTimer);
                    
                    // Final wrap loader shut
                    setTimeout(() => {
                        const loader = document.getElementById('loader-screen');
                        loader.style.opacity = '0';
                        document.body.classList.remove('preload-active');
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 700);
                        triggerNotification("System operational. Welcome to AdityaProCoders Matrix.");
                    }, 500);
                }
                bar.style.width = `${currentPercent}%`;
                percent.textContent = `${currentPercent}%`;
            }, 250);
        }

        /* Responsive custom cursor follow matrix */
        const cursorRing = document.getElementById('custom-cursor');
        const cursorDot = document.getElementById('custom-cursor-dot');
        
        document.addEventListener('mousemove', (e) => {
            cursorRing.style.opacity = '1';
            cursorDot.style.opacity = '1';
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mouseleave', () => {
            cursorRing.style.opacity = '0';
            cursorDot.style.opacity = '0';
        });

        /* Header Navigation & Mobile Menu Overlay Toggle */
        const mobileToggle = document.getElementById('menu-toggle');
        const mobileMenuOverlay = document.getElementById('mobile-menu');
        const mobileClose = document.getElementById('mobile-close');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        mobileToggle.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('hidden');
            mobileMenuOverlay.classList.add('flex');
        });

        const closeMenu = () => {
            mobileMenuOverlay.classList.add('hidden');
            mobileMenuOverlay.classList.remove('flex');
        };

        mobileClose.addEventListener('click', closeMenu);
        mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

        /* Dynamic Stats Counter Animation on Scroll */
        const counters = [
            { id: 'count-projects', target: 38, suffix: '+' },
            { id: 'count-uptime', target: 99.99, suffix: '%' },
            { id: 'count-threats', target: 2450, suffix: ' Hashed' }
        ];

        let countersAnimated = false;
        function checkCountersScroll() {
            if (countersAnimated) return;
            const element = document.getElementById('count-projects');
            if (!element) return;
            const pos = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (pos < screenHeight - 50) {
                countersAnimated = true;
                counters.forEach(counter => {
                    let current = 0;
                    const step = counter.target / 100;
                    const el = document.getElementById(counter.id);
                    const updateCounter = setInterval(() => {
                        current += step;
                        if (current >= counter.target) {
                            el.textContent = counter.target.toString() + counter.suffix;
                            clearInterval(updateCounter);
                        } else {
                            el.textContent = (counter.target % 1 === 0 ? Math.floor(current) : current.toFixed(2)) + counter.suffix;
                        }
                    }, 15);
                });
            }
        }
        window.addEventListener('scroll', checkCountersScroll);

        /* Interactive AI Orb Morphing Speech triggers */
        const mainAiOrb = document.getElementById('hero-ai-orb-trigger');
        const orbStatus = document.getElementById('orb-status-text');
        const speechPrompts = [
            "COGNITIVE STATIONS FUNCTIONAL",
            "DEEP SYSTEM TELEMETRY ACTIVE",
            "SECURITY BOUNDARIES OPERATIONAL",
            "READY FOR MASS PROTOCOL UPGRADE"
        ];
        
        mainAiOrb.addEventListener('click', () => {
            const randomMsg = speechPrompts[Math.floor(Math.random() * speechPrompts.length)];
            orbStatus.textContent = `SYSTEM: ${randomMsg}`;
            triggerNotification(`Cognitive core state: ${randomMsg}`);
        });

        /* Dynamic AI Dashboard Live preview and graph update loops */
        const consoleStream = document.getElementById('console-stream-feed');
        const throttleInput = document.getElementById('slider-throttle');
        const barrierInput = document.getElementById('slider-barrier');
        const swarmInput = document.getElementById('slider-swarm');
        
        const throttleVal = document.getElementById('slider-val-throttle');
        const barrierVal = document.getElementById('slider-val-barrier');
        const swarmVal = document.getElementById('slider-val-swarm');

        const telemetryLogsTemplate = [
            "Establishing packet pipelines",
            "Intercepting signal node arrays",
            "Parsing client authentication vector",
            "Scanning cyber system threats",
            "Updating responsive layout breakpoints",
            "Tuning SQL matrix queries"
        ];

        function startDashboardTelemetry() {
            setInterval(() => {
                const log = telemetryLogsTemplate[Math.floor(Math.random() * telemetryLogsTemplate.length)];
                const row = document.createElement('p');
                row.className = 'text-neon-cyan';
                row.textContent = `[${new Date().toLocaleTimeString()}] >> ${log}... OK`;
                consoleStream.appendChild(row);
                if (consoleStream.children.length > 25) {
                    consoleStream.removeChild(consoleStream.firstChild);
                }
                consoleStream.scrollTop = consoleStream.scrollHeight;
            }, 1200);
        }
        startDashboardTelemetry();

        document.getElementById('clear-stream-btn').addEventListener('click', () => {
            consoleStream.innerHTML = '<p class="text-neutral-500">// Log logs successfully flushed.</p>';
            triggerNotification("System telemetry logs flushed successfully.");
        });

        // Event Listeners for parameter scaling
        throttleInput.addEventListener('input', (e) => {
            throttleVal.textContent = `${e.target.value}%`;
            document.getElementById('panel-bandwidth').textContent = `${(e.target.value * 0.035).toFixed(2)} Gbps`;
            updateGraphSVG();
        });
        barrierInput.addEventListener('input', (e) => {
            barrierVal.textContent = `${e.target.value} GHz`;
            document.getElementById('panel-latency').textContent = `${Math.max(2, 20 - e.target.value)} ms`;
            updateGraphSVG();
        });
        swarmInput.addEventListener('input', (e) => {
            swarmVal.textContent = `${e.target.value} Nodes`;
            updateGraphSVG();
        });

        /* SVG Live graph path renderer */
        function updateGraphSVG() {
            const svgPath = document.getElementById('graph-line');
            const throttle = parseInt(throttleInput.value);
            const barrier = parseFloat(barrierInput.value);
            const swarm = parseInt(swarmInput.value);

            let dPath = "M 0 180";
            const step = 400 / 10;
            for (let i = 0; i <= 10; i++) {
                const x = i * step;
                // Generate simulated load frequency wave
                const waveHeight = Math.sin(i * (barrier * 0.5)) * (throttle * 0.7) + (swarm * 0.2);
                const y = Math.max(10, Math.min(170, 180 - waveHeight));
                dPath += ` L ${x} ${y}`;
            }
            dPath += " L 400 180 Z";
            svgPath.setAttribute('d', dPath);
        }
        updateGraphSVG();

        /* Interactive Quote Calculator Engine */
        const calcProject = document.getElementById('calc-project-type');
        const calcPages = document.getElementById('calc-pages');
        const calcPagesVal = document.getElementById('calc-pages-value');
        
        const optAI = document.getElementById('calc-opt-ai');
        const optAuth = document.getElementById('calc-opt-auth');
        const optSEO = document.getElementById('calc-opt-seo');

        const costDisplay = document.getElementById('calc-cost-display');
        const timeDisplay = document.getElementById('calc-time-display');
        const stackDisplay = document.getElementById('calc-stack-display');

        const baseCosts = { web: 700, saas: 1800, mobile: 1400, cyber: 1500 };
        const coreStacks = {
            web: "NextJS 14, Tailwind, Framer Motion, Vercel Serverless",
            saas: "Node REST, React, Redis Core, AWS deployment",
            mobile: "React Native Framework, Redux Toolkit, SQLite Cache",
            cyber: "Penetration matrices, OWASP testing logs, WireShark analysis"
        };

        function recalculateQuote() {
            const type = calcProject.value;
            const pages = parseInt(calcPages.value);
            
            calcPagesVal.textContent = `${pages} Pages / Modules`;

            let cost = baseCosts[type] + (pages * 80);
            let days = 7 + (pages * 2);

            if (optAI.checked) { cost += 450; days += 3; }
            if (optAuth.checked) { cost += 350; days += 2; }
            if (optSEO.checked) { cost += 200; }

            costDisplay.textContent = `$${cost}`;
            timeDisplay.textContent = `${days} - ${Math.ceil(days * 1.4)} System Days`;
            stackDisplay.textContent = coreStacks[type];
        }

        [calcProject, calcPages, optAI, optAuth, optSEO].forEach(el => {
            el.addEventListener('input', recalculateQuote);
            el.addEventListener('change', recalculateQuote);
        });
        recalculateQuote();

        /* Projects Portfolio bento grid categorization filter system */
        const filterBtns = document.querySelectorAll('.project-filter-btn');
        const projectCards = document.querySelectorAll('.project-grid .project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Toggle active button style
                filterBtns.forEach(b => {
                    b.className = "project-filter-btn px-6 py-2 rounded-full font-cyber text-xs uppercase tracking-wider font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all";
                });
                btn.className = "project-filter-btn px-6 py-2 rounded-full font-cyber text-xs uppercase tracking-wider font-semibold bg-neon-blue text-black border border-neon-blue transition-all";

                const target = btn.getAttribute('data-filter');
                projectCards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    if (target === 'all' || cat === target) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        /* Dynamic Projects Detail Modal Database & Triggers */
        const projectsDatabase = {
            aether: {
                title: "AetherAI Enterprise Portal Core",
                category: "Web Platforms",
                description: "A highly robust micro-services dashboard developed for visual analytical automation. Integrates with premium security layers to withstand standard vulnerability audits.",
                impact: "Optimized operational feedback latency down to 14ms baseline.",
                stack: ["Next.js", "Tailwind CSS", "Express server", "PostgreSQL", "Hashed Cryptography"]
            },
            cloudsync: {
                title: "CloudSync DevOps System Pipeline",
                category: "Cloud Operations",
                description: "An automated git integration tool offering instant deploy logs, secure container building, and telemetry status monitoring.",
                impact: "Accelerated engineering deploy iterations by 40%.",
                stack: ["Docker", "Kubernetes", "AWS API Gateway", "Redis"]
            },
            cybershield: {
                title: "CyberShield Vulnerability Audit Matrix",
                category: "Security Audits",
                description: "High-grade sanitization scripts built to intercept injection payloads, cross-site execution blocks, and perform deep server auditing.",
                impact: "Achieved 100% OWASP level standard compliance for critical banking interface.",
                stack: ["Python Secure Shell", "OWASP protocols", "WireShark Packet Analyzers"]
            },
            "nlp-engine": {
                title: "Quantum NLP Semantic Engine",
                category: "AI Systems",
                description: "Integrated cloud agent trained to retrieve documents instantly using advanced vector search indexes.",
                impact: "Provides dynamic, rule-based chatbot query replies in under 120ms.",
                stack: ["Python LangChain", "OpenAI API", "Pinecone DB", "Node Server"]
            },
            neuroux: {
                title: "NeuroUX Adaptive Framework Shell",
                category: "UI Shell Core",
                description: "Smooth modular template engineered specifically for layout adaptability across mobile, tablet, and 4K desktop frameworks.",
                impact: "Increases screen orientation visual engagement by 25%.",
                stack: ["Vanilla JS Performance core", "CSS Grid Bento Layouts", "SVG Vector Nodes"]
            }
        };

        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content-area');
        const modalTriggers = document.querySelectorAll('.project-modal-trigger');
        const modalClose = document.getElementById('project-modal-close');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const projectID = trigger.getAttribute('data-project');
                const pData = projectsDatabase[projectID];
                if (!pData) return;

                modalContent.innerHTML = `
                    <div class="flex flex-wrap items-center gap-2 mb-2">
                        <span class="px-3 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded-full font-mono text-[9px] uppercase tracking-wider">${pData.category}</span>
                    </div>
                    <h3 class="font-cyber font-bold text-2xl md:text-3xl text-white uppercase">${pData.title}</h3>
                    <p class="text-neutral-300 text-sm leading-relaxed">${pData.description}</p>
                    
                    <div class="bg-[#030611] p-4 rounded-xl border border-white/5 font-mono text-xs">
                        <span class="text-neon-cyan block mb-1">SYSTEM LEVEL PERFORMANCE</span>
                        <p class="text-white">${pData.impact}</p>
                    </div>

                    <div>
                        <span class="block font-cyber font-bold text-xs uppercase tracking-wider text-neutral-400 mb-2">Technology Framework Suite</span>
                        <div class="flex flex-wrap gap-2">
                            ${pData.stack.map(tech => `<span class="px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-neutral-300 hover:border-neon-cyan transition-all">${tech}</span>`).join('')}
                        </div>
                    </div>

                    <a href="#contact" class="inline-block w-full bg-gradient-to-r from-neon-blue to-neon-cyan py-3 rounded-xl text-center font-cyber font-bold text-xs uppercase text-black hover:scale-105 transition-all mt-4" onclick="document.getElementById('project-modal').classList.add('hidden')">
                        Request System Architecture Deployment
                    </a>
                `;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            });
        });

        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                mobileMenuOverlay.classList.add('hidden');
                mobileMenuOverlay.classList.remove('flex');
            }
        });

        /* Tech Search Filter matrix */
        const techSearch = document.getElementById('tech-search');
        const techItems = document.querySelectorAll('.tech-item');

        techSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            techItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.opacity = '1';
                    item.style.borderColor = 'rgba(0, 240, 255, 0.4)';
                } else {
                    item.style.opacity = '0.25';
                    item.style.borderColor = 'rgba(255,255,255,0.05)';
                }
            });
        });

        /* Interactive Cyber Contact Form Broadcast Handling */
        const contactForm = document.getElementById('cyber-contact-form');
        const formSuccess = document.getElementById('form-success-overlay');
        const formReset = document.getElementById('form-reset-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check validation parameters
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const msg = document.getElementById('contact-message').value;

            if (!name || !email || !msg) {
                triggerNotification("System Error: Communication inputs incomplete.");
                return;
            }

            // Simulated transition broadcast
            triggerNotification("Transmitting cryptographic packet...");
            setTimeout(() => {
                formSuccess.classList.remove('hidden');
                formSuccess.classList.add('flex');
                triggerNotification("Broadcast pipeline secured. Response on route.");
            }, 1000);
        });

        formReset.addEventListener('click', () => {
            contactForm.reset();
            formSuccess.classList.add('hidden');
            formSuccess.classList.remove('flex');
        });

        /* Newsletter Subscription Matrix submission handling */
        const newsletterForm = document.getElementById('newsletter-form');
        const newsSuccess = document.getElementById('newsletter-success');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('news-email').value;
            if (email) {
                newsSuccess.classList.remove('hidden');
                triggerNotification(`Subscribed successfully: ${email}`);
                newsletterForm.reset();
            }
        });

        /* Functional Rule-Based Conversational AI Chatbot Assistant widget */
        const chatBox = document.getElementById('ai-chat-box');
        const chatTrigger = document.getElementById('chat-trigger-btn');
        const chatClose = document.getElementById('chat-close-btn');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send-btn');
        const chatMessages = document.getElementById('chat-messages');

        // Preset Chatbot Answers Database
        const botAnswers = {
            services: "AdityaProCoders architects premium Web and Mobile Android Systems, custom DevOps Pipelines, Cloud deployments, advanced Cybersecurity Penetration checks, and Chatbot workflows.",
            founder: "Founder Aditya Kumar Singh is a lead full stack developer specializing in responsive cyber structures, cryptographic security standards, and AI integration systems.",
            estimate: "For quick calculations, scale parameters within our visual estimation tool. General premium web structures start around $1000.",
            hello: "Identity connection verified. I am the cognitive unit here. How can I transform your digital operations today?",
            default: "Query parsed. For accurate quotes or detailed portfolio checks, connect directly with our founder, Aditya Kumar Singh, at adityaprocoder@gmail.com."
        };

        chatTrigger.addEventListener('click', () => {
            chatBox.classList.toggle('hidden');
            chatBox.classList.toggle('flex');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });

        chatClose.addEventListener('click', () => {
            chatBox.classList.add('hidden');
            chatBox.classList.remove('flex');
        });

        function insertPrompt(key) {
            chatInput.value = key;
            sendMessage();
        }

        function appendMessage(text, isUser = false) {
            const row = document.createElement('div');
            if (isUser) {
                row.className = "self-end max-w-[80%] bg-[#bd00ff]/20 text-white border border-neon-purple/30 rounded-2xl p-3";
                row.textContent = text;
            } else {
                row.className = "self-start max-w-[80%] bg-[#080c1d] text-neutral-300 border border-white/5 rounded-2xl p-3";
                row.innerHTML = text;
            }
            chatMessages.appendChild(row);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function sendMessage() {
            const query = chatInput.value.trim().toLowerCase();
            if (!query) return;

            appendMessage(chatInput.value, true);
            chatInput.value = "";

            // Custom dynamic responding timer
            setTimeout(() => {
                let answer = botAnswers.default;
                if (query.includes('service') || query.includes('services')) answer = botAnswers.services;
                else if (query.includes('founder') || query.includes('aditya')) answer = botAnswers.founder;
                else if (query.includes('estimate') || query.includes('cost') || query.includes('price')) answer = botAnswers.estimate;
                else if (query.includes('hello') || query.includes('hi') || query.includes('hey')) answer = botAnswers.hello;

                appendMessage(answer, false);
            }, 600);
        }

        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        /* Floating Alert Connection Notification Matrix */
        function triggerNotification(text) {
            const toast = document.getElementById('toast-notif');
            const toastText = document.getElementById('toast-text');
            toastText.textContent = text;
            
            toast.style.transform = 'translateX(0%)';
            setTimeout(() => {
                toast.style.transform = 'translateX(120%)';
            }, 4000);
        }

        /* Light & Dark Cyber Satellite Mode Toggle Override */
        const themeBtn = document.getElementById('theme-btn');
        const themeIcon = document.getElementById('theme-icon');
        let currentMode = "cyber-dark";

        themeBtn.addEventListener('click', () => {
            if (currentMode === "cyber-dark") {
                currentMode = "cyber-light";
                document.body.style.backgroundColor = "#fafafa";
                document.body.style.color = "#0f172a";
                themeIcon.className = "fas fa-lightbulb text-amber-500 text-sm";
                triggerNotification("Ambient grid scaled down. Cyber-light mode deployed.");
            } else {
                currentMode = "cyber-dark";
                document.body.style.backgroundColor = "#050816";
                document.body.style.color = "#f3f4f6";
                themeIcon.className = "fas fa-satellite-dish text-neon-blue text-sm";
                triggerNotification("Full reactor active. Dark futuristic theme deployed.");
            }
        });
    
