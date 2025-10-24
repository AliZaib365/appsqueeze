        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('navbar');
            const menuToggle = document.getElementById('menuToggle');
            const sidebar = document.getElementById('sidebar');
            const closeSidebar = document.getElementById('closeSidebar');
            const overlay = document.getElementById('overlay');
            const animatedElements = document.querySelectorAll('[data-animate-stagger], [data-animate]');
            const dashboardSection = document.getElementById('dashboard');


            // --- 1. Navbar Scroll Shrink/Fixed Logic ---
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check


            // --- 2. Mobile Menu (Sidebar) Logic ---
            const toggleSidebar = () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('open');
                document.body.classList.toggle('no-scroll'); // Optional: prevent body scroll
            };

            menuToggle.addEventListener('click', toggleSidebar);
            closeSidebar.addEventListener('click', toggleSidebar);
            overlay.addEventListener('click', toggleSidebar);
            
            // --- 3. Intersection Observer (Fade-In Animations) ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        
                        // Handle Hero Staggered/Floating Elements
                        if (element.hasAttribute('data-animate-stagger')) {
                            element.classList.add('in-view');
                        } else if (element.hasAttribute('data-animate')) {
                            element.classList.add('in-view');
                        }

                        // Handle Dashboard Columns (Section Stagger)
                        if (element === dashboardSection) {
                            const cols = element.querySelectorAll('.dashboard-col');
                            cols.forEach((col) => {
                                const group = col.getAttribute('data-animate-group');
                                if (group) {
                                    col.classList.add(`in-view-${group}`);
                                }
                            });
                            // No longer need to observe the section once the columns are animated
                            observer.unobserve(element);
                        }

                        // For Hero/Floating elements, stop observing after they've appeared
                        if (element.classList.contains('hero-title') || element.classList.contains('floating-element')) {
                             observer.unobserve(element);
                        }
                    }
                });
            }, observerOptions);

            // Observe Hero/Floating elements
            animatedElements.forEach(el => observer.observe(el));
            
            // Observe Dashboard section
            if (dashboardSection) {
                observer.observe(dashboardSection);
            }
        });
