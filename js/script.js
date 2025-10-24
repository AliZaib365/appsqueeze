        document.addEventListener('DOMContentLoaded', () => {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            const menuToggle = document.querySelector('.menu-toggle');
            const closeBtn = document.querySelector('.close-btn');
            const body = document.body;
            const navbar = document.getElementById('navbar');

            // --- 1. Mobile Sidebar Logic ---

            const openMenu = () => {
                sidebar.classList.add('open');
                overlay.classList.add('open');
                body.style.overflow = 'hidden'; // Prevent scrolling background
            };

            const closeMenu = () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('open');
                body.style.overflow = ''; // Restore scrolling
            };

            menuToggle.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            overlay.addEventListener('click', closeMenu);

            document.querySelectorAll('.sidebar-links a').forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            // --- 2. Navbar Shrink/Sticky Scroll Animation ---

            const scrollHandler = () => {
                // Check if user has scrolled more than 50 pixels
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };

            window.addEventListener('scroll', scrollHandler);

            // Trigger the handler once on load in case the page loads scrolled down
            scrollHandler();


            // --- 3. Intersection Observer for Content Fade-In/Slide-Up ---
            
            // Elements with simple fade-in/staggered slide-up
            const targetsStaggered = document.querySelectorAll('[data-animate-stagger]');
            // Floating elements with complex float animation
            const targetsFloating = document.querySelectorAll('.floating-element[data-animate]');

            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        // Check if it's a staggered hero element or demo section heading
                        if (target.hasAttribute('data-animate-stagger')) {
                            // Apply 'in-view' class to trigger the CSS transition
                            target.classList.add('in-view'); 
                        }
                        
                        // Check if it's a floating element
                        if (target.classList.contains('floating-element')) {
                            // Apply 'in-view' class to trigger opacity and start @keyframes animation
                            target.classList.add('in-view'); 
                        }
                        
                        // Stop observing once the element is visible
                        observer.unobserve(target);
                    }
                });
            };

            // Set up the observer
            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of element visible
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            // Observe the staggered elements
            targetsStaggered.forEach(target => {
                // Use a short timeout to ensure the DOM is fully painted before observing the first element
                setTimeout(() => {
                    observer.observe(target);
                }, 100); 
            });

            // Observe the floating elements
            targetsFloating.forEach(target => {
                observer.observe(target);
            });
        });