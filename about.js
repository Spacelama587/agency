      // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Split text elements for reveal effect
        const titleSplit = new SplitType(".about-title", {
            types: "words, chars",
        });

        const subtitleSplit = new SplitType(".about-subtitle", {
            types: "words, chars",
        });

        const textSplit = new SplitType(".about-text p", {
            types: "words, chars",
        });

        // Main scroll reveal timeline
        const revealTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1.2,
            },
        });

        // Title reveal with stagger
        revealTl.to(titleSplit.chars, {
            duration: 0.6,
            color: "#1a1a1a",
            stagger: 0.02,
            ease: "power2.out"
        }, 0);

        // Subtitle reveal
        revealTl.to(subtitleSplit.chars, {
            duration: 0.5,
            color: "#666",
            stagger: 0.015,
            ease: "power2.out"
        }, 0.3);

        // Text paragraphs reveal
        revealTl.to(textSplit.chars, {
            duration: 0.4,
            color: "#1a1a1a",
            stagger: 0.005,
            ease: "power2.out"
        }, 0.6);

        // Parallax effect for the image
        gsap.to(".parallax-image", {
            yPercent: -25,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-image-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Label fade-in
        gsap.from(".about-label", {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Image container entrance
        gsap.from(".about-image-container", {
            scale: 0.8,
            rotation: -8,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".about-image-container",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Decorative elements animation
        gsap.to(".deco-circle", {
            rotation: 360,
            duration: 20,
            ease: "none",
            repeat: -1
        });

        gsap.to(".deco-square", {
            rotation: 375,
            duration: 15,
            ease: "none",
            repeat: -1
        });

        // Statement text parallax
        gsap.to(".statement-text", {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Hover effects for highlights
        document.querySelectorAll('.highlight-red, .highlight-underline').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        });

      