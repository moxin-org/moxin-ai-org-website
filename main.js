// Main JavaScript for Enterprise AI Solution Website
class AISolutionWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollReveal();
        this.setupPerformanceCounters();
        this.setupArchitectureInteractions();
        this.setupPerformanceChart();
        this.setupSmoothScrolling();
        this.setupParticleSystem();
        this.initAnimations();
    }

    // Scroll reveal animations
    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
    }

    // Animated performance counters
    setupPerformanceCounters() {
        const counters = document.querySelectorAll('.performance-counter');
        
        const animateCounter = (counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = current.toFixed(2);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toFixed(2);
                }
            };

            updateCounter();
        };

        // Trigger animations when counters come into view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Architecture diagram interactions
    setupArchitectureInteractions() {
        const nodes = document.querySelectorAll('.architecture-node');
        
        nodes.forEach(node => {
            node.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.currentTarget,
                    scale: 1.05,
                    rotateY: 5,
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });

            node.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.currentTarget,
                    scale: 1,
                    rotateY: 0,
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });

            node.addEventListener('click', (e) => {
                this.showArchitectureDetail(e.currentTarget);
            });
        });
    }

    // Show detailed information about architecture components
    showArchitectureDetail(node) {
        const title = node.querySelector('h3').textContent;
        const description = node.querySelector('p').textContent;
        
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-blue-500/30">
                <div class="flex justify-between items-start mb-6">
                    <h3 class="text-2xl font-bold text-white">${title}</h3>
                    <button class="close-modal text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>
                <p class="text-gray-300 mb-6">${description}</p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-600/20 p-4 rounded-lg">
                        <h4 class="text-blue-400 font-semibold mb-2">Key Features</h4>
                        <ul class="text-sm text-gray-300 space-y-1">
                            <li>• High Performance</li>
                            <li>• Enterprise Security</li>
                            <li>• Scalable Architecture</li>
                        </ul>
                    </div>
                    <div class="bg-purple-600/20 p-4 rounded-lg">
                        <h4 class="text-purple-400 font-semibold mb-2">Use Cases</h4>
                        <ul class="text-sm text-gray-300 space-y-1">
                            <li>• Enterprise Copilots</li>
                            <li>• Real-time Analytics</li>
                            <li>• AI-native Applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Animate modal appearance
        anime({
            targets: modal.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }

    // Performance chart setup
    setupPerformanceChart() {
        const chartElement = document.getElementById('performanceChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            textStyle: {
                color: '#94a3b8'
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#3b82f6',
                textStyle: {
                    color: '#ffffff'
                }
            },
            legend: {
                data: ['KTransformers', 'Standard Inference', 'Edge Optimization'],
                textStyle: {
                    color: '#94a3b8'
                },
                top: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['DeepSeek-R1', 'DeepSeek-V3', 'Qwen Series', 'Mixtral MoE'],
                axisLine: {
                    lineStyle: {
                        color: '#334155'
                    }
                },
                axisLabel: {
                    color: '#94a3b8'
                }
            },
            yAxis: {
                type: 'value',
                name: 'Tokens/sec',
                nameTextStyle: {
                    color: '#94a3b8'
                },
                axisLine: {
                    lineStyle: {
                        color: '#334155'
                    }
                },
                axisLabel: {
                    color: '#94a3b8'
                },
                splitLine: {
                    lineStyle: {
                        color: '#334155',
                        type: 'dashed'
                    }
                }
            },
            series: [
                {
                    name: 'KTransformers',
                    type: 'line',
                    data: [227.85, 40, 180, 95],
                    lineStyle: {
                        color: '#3b82f6',
                        width: 3
                    },
                    itemStyle: {
                        color: '#3b82f6'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(59, 130, 246, 0.3)'
                            }, {
                                offset: 1, color: 'rgba(59, 130, 246, 0.05)'
                            }]
                        }
                    },
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 8
                },
                {
                    name: 'Standard Inference',
                    type: 'line',
                    data: [45, 12, 65, 35],
                    lineStyle: {
                        color: '#64748b',
                        width: 2
                    },
                    itemStyle: {
                        color: '#64748b'
                    },
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 6
                },
                {
                    name: 'Edge Optimization',
                    type: 'line',
                    data: [120, 80, 95, 60],
                    lineStyle: {
                        color: '#14b8a6',
                        width: 2
                    },
                    itemStyle: {
                        color: '#14b8a6'
                    },
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 6
                }
            ],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        };

        chart.setOption(option);

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Particle system for visual effects
    setupParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        canvas.style.opacity = '0.3';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push(createParticle());
            }
        };

        const updateParticles = () => {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            animationId = requestAnimationFrame(animate);
        };

        const startParticleSystem = () => {
            resizeCanvas();
            initParticles();
            animate();
        };

        const stopParticleSystem = () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };

        // Start particle system
        startParticleSystem();

        // Handle window resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        // Pause particles when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopParticleSystem();
            } else {
                startParticleSystem();
            }
        });
    }

    // Initialize page animations
    initAnimations() {
        // Hero text animation
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: 'h1',
            translateY: [100, 0],
            opacity: [0, 1],
            delay: 300
        })
        .add({
            targets: '.hero-bg p',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: 200
        }, '-=800')
        .add({
            targets: '.hero-bg button',
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100)
        }, '-=600');

        // Navigation animation
        anime({
            targets: 'nav',
            translateY: [-100, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutCubic',
            delay: 100
        });

        // Floating particles animation
        anime({
            targets: '.floating-particle',
            translateY: [0, -20, 0],
            rotate: [0, 360],
            duration: 6000,
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(1000)
        });
    }
}

// Button interactions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main website functionality
    new AISolutionWebsite();

    // Button click handlers
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent.trim();
            
            // Animate button click
            anime({
                targets: e.target,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeOutCubic'
            });

            // Handle different button actions
            switch(buttonText) {
                case 'Get Demo':
                case 'Schedule Demo':
                    showDemoModal();
                    break;
                case 'Explore Solutions':
                    window.location.href = 'solutions.html';
                    break;
                case 'View Architecture':
                    document.getElementById('architecture').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                    break;
                case 'Download Whitepaper':
                    downloadWhitepaper();
                    break;
                default:
                    // Show coming soon for other buttons
                    showComingSoon(buttonText);
            }
        });
    });
});

// Modal for demo request
function showDemoModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-blue-500/30">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Request Demo</h3>
                <p class="text-gray-400">Get a personalized demonstration of our AI platform</p>
            </div>
            <form class="space-y-4">
                <input type="text" placeholder="Full Name" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                <input type="email" placeholder="Work Email" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                <input type="text" placeholder="Company" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                <select class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                    <option>Select Use Case</option>
                    <option>Enterprise Copilots</option>
                    <option>Edge AI Deployment</option>
                    <option>Multi-Agent Systems</option>
                    <option>Custom Solutions</option>
                </select>
                <div class="flex space-x-3 pt-4">
                    <button type="submit" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                        Request Demo
                    </button>
                    <button type="button" class="close-modal flex-1 border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Handle form submission
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const successModal = document.createElement('div');
        successModal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
        successModal.innerHTML = `
            <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-green-500/30 text-center">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Demo Requested!</h3>
                <p class="text-gray-400 mb-6">We'll contact you within 24 hours to schedule your personalized demo.</p>
                <button class="close-success bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                    Got it!
                </button>
            </div>
        `;

        document.body.removeChild(modal);
        document.body.appendChild(successModal);

        successModal.querySelector('.close-success').addEventListener('click', () => {
            document.body.removeChild(successModal);
        });
    });

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Animate modal appearance
    anime({
        targets: modal.querySelector('div'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

// Download whitepaper
function downloadWhitepaper() {
    // Create temporary download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'moxin-org-enterprise-ai-whitepaper.pdf';
    
    // Show notification instead of actual download
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg z-50';
    notification.textContent = 'Whitepaper download will be available soon!';
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);

    // Animate notification
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

// Show coming soon message
function showComingSoon(feature) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg z-50';
    notification.textContent = `${feature} - Coming Soon!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);

    // Animate notification
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

// Handle navigation active states
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-300');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-300');
            link.classList.add('text-white');
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);