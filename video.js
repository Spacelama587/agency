    // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Get elements
        const droneContainer = document.getElementById("drone-container");
        const droneVideo = document.querySelector(".drone-video");
        const droneOverlay = document.querySelector(".drone-overlay");

        // Ensure video plays
        droneVideo.play().catch(error => {
            console.log("Video play failed:", error);
        });

        // Intro animations
        const introTl = gsap.timeline({
            delay: 0.5
        });
        
        introTl.to(".intro-title", {
            duration: 1.4,
            y: 0,
            opacity: 1,
            ease: "power3.out"
        })
        .to(".intro-subtitle", {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: "power3.out"
        }, "-=0.8")
        .to(".intro-description", {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out"
        }, "-=0.6");

        // Main drone video timeline
        const droneTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".drone-scroll-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.2,
                onEnter: () => droneVideo.play()
            }
        });

        // Animate container expansion
        droneTl.to(droneContainer, {
            width: "95vw",
            height: "95vh",
            borderRadius: "0px",
            ease: "power2.out",
            duration: 0.6
        })
        // Animate video scaling
        .to(droneVideo, {
            scale: 1.1,
            ease: "power2.out",
            duration: 0.6
        }, 0)
        // Reveal overlay
        .to(droneOverlay, {
            clipPath: "inset(0% 0 0 0)",
            ease: "power2.out",
            duration: 0.4
        }, 0.5)
        // Animate overlay content
        .to(".drone-overlay .main-content", {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 0.4
        }, 0.6)
        .to(".drone-overlay .flight-info, .drone-overlay .coordinates", {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.3
        }, 0.7);

        // Conclusion animations
        gsap.to(".conclusion-title", {
            scrollTrigger: {
                trigger: ".conclusion-section",
                start: "top 80%",
                end: "top 60%",
                scrub: 1
            },
            y: 0,
            opacity: 1,
            ease: "power2.out"
        });

        gsap.to(".conclusion-text", {
            scrollTrigger: {
                trigger: ".conclusion-section",
                start: "top 75%",
                end: "top 55%",
                scrub: 1
            },
            y: 0,
            opacity: 1,
            ease: "power2.out"
        });

        gsap.to(".conclusion-signature", {
            scrollTrigger: {
                trigger: ".conclusion-section",
                start: "top 70%",
                end: "top 50%",
                scrub: 1
            },
            y: 0,
            opacity: 1,
            ease: "power2.out"
        });

        // Handle video loading errors
        droneVideo.addEventListener('error', function() {
            console.log('Video failed to load, trying alternative source');
            // Fallback to a simpler video or placeholder
            this.style.background = 'linear-gradient(45deg, #333, #666)';
        });