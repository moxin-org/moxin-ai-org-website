import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);
    const isDarkRef = useRef(false);

    // Brand colors
    const colors = [
        '#0071E3', // Blue
        '#5E5CE6', // Purple
        '#FF2D55', // Pink
        '#30B0C7', // Cyan
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Function to update theme state
        const updateThemeState = () => {
            isDarkRef.current = document.documentElement.classList.contains('dark');
        };

        // Initial check
        updateThemeState();

        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateThemeState();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Also listen for custom event from Header
        window.addEventListener('theme-change', updateThemeState);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 5 + 4; // Increased size: 4-9px
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                const isDark = isDarkRef.current;
                // Opacity: 0.1 for dark, 0.05 for light (even fainter)
                ctx.globalAlpha = isDark ? 0.05 : 0.04;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0; // Reset
            }
        }

        const init = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth * 0.05, 100); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = isDarkRef.current;
            // Increased line width: 0.5 -> 1.5
            ctx.lineWidth = 1.5;

            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // Connect particles
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        // Use gradient for lines
                        const gradient = ctx.createLinearGradient(particle.x, particle.y, particles[j].x, particles[j].y);
                        gradient.addColorStop(0, particle.color);
                        gradient.addColorStop(1, particles[j].color);
                        ctx.strokeStyle = gradient;

                        // Reduced line opacity: 0.15 for dark, 0.1 for light
                        ctx.globalAlpha = isDark ? 0.15 : 0.1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1.0; // Reset
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('theme-change', updateThemeState);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default BackgroundAnimation;
