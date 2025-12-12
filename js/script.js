
      document.addEventListener('DOMContentLoaded', () => {
      const navbar = document.getElementById('navbar');
      const menuToggle = document.getElementById('menuToggle');
      const sidebar = document.getElementById('sidebar');
      const closeSidebar = document.getElementById('closeSidebar');
      const overlay = document.getElementById('overlay');
      const animatedElements = document.querySelectorAll('[data-animate-stagger], [data-animate]');
      const dashboardSection = document.getElementById('dashboard');

      // Navbar scroll effect
      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize on load

      // Sidebar toggle functionality
      const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
      };

      menuToggle.addEventListener('click', toggleSidebar);
      closeSidebar.addEventListener('click', toggleSidebar);
      overlay.addEventListener('click', toggleSidebar);
      
      // Intersection Observer for animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.hasAttribute('data-animate-stagger')) {
              element.classList.add('in-view');
            } else if (element.hasAttribute('data-animate')) {
              element.classList.add('in-view');
            }

            if (element === dashboardSection) {
              const cols = element.querySelectorAll('.dashboard-col');
              cols.forEach((col) => {
                const group = col.getAttribute('data-animate-group');
                if (group) {
                  col.classList.add(`in-view-${group}`);
                }
              });
              observer.unobserve(element);
            }

            if (element.classList.contains('hero-title') || element.classList.contains('floating-element')) {
              observer.unobserve(element);
            }
          }
        });
      }, observerOptions);

      animatedElements.forEach(el => observer.observe(el));
      
      if (dashboardSection) {
        observer.observe(dashboardSection);
      }

      // Performance optimization: Reduce animations if user prefers reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition', 'none');
      }
      
      // Enhanced scroll animations for all sections
      const animatedSections = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });
      
      animatedSections.forEach(section => {
        sectionObserver.observe(section);
      });
      
      // Animate stats bars when they come into view
      const statsBars = document.querySelectorAll('.stats-bar');
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.5 });
      
      statsBars.forEach(bar => {
        statsObserver.observe(bar);
      });
      
      // Animate footer when it comes into view
      const footer = document.querySelector('.site-footer');
      const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });
      
      if (footer) {
        footerObserver.observe(footer);
      }
    });
 document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars on scroll
            const progressBars = document.querySelectorAll('.progress-fill');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 300);
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // Add click effects to cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.closest('.action-btn')) {
                        this.style.transform = 'translateY(-10px) scale(1.02)';
                        setTimeout(() => {
                            this.style.transform = 'translateY(-10px)';
                        }, 150);
                    }
                });
            });
            
            // Add hover effect to stat cards
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
        // Service definitions (used only to provide targets/values when a button is clicked).
    // Buttons themselves are static in HTML (per request).
    const services = {
      web: {
        title: 'Web Development',
        desc: 'It involves both front-end and back-end development, plus testing and optimization so sites work great on every device.',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Web Development Interface Preview',
        featuresHTML: `
          <div class="feature"><i class="fas fa-code"></i><h4>Custom Development</h4><p>Tailored solutions for your needs</p></div>
          <div class="feature"><i class="fas fa-mobile-alt"></i><h4>Responsive</h4><p>Looks great on any screen</p></div>
          <div class="feature"><i class="fas fa-rocket"></i><h4>Performance</h4><p>Fast and optimized</p></div>
          <div class="feature"><i class="fas fa-shield-alt"></i><h4>Security</h4><p>Protected and maintained</p></div>
        `
      },
      domain: {
        title: 'Domain & Hosting',
        desc: 'Register domains and deploy fast, backed-up hosting with managed DNS and CDN so your site stays reliable.',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        alt: 'Domain Manager Preview',
        featuresHTML: `
          <div class="feature"><i class="fas fa-globe"></i><h4>Domain Registration</h4><p>Find and register your perfect domain</p></div>
          <div class="feature"><i class="fas fa-server"></i><h4>Fast Hosting</h4><p>Reliable hosting with 99.9% uptime</p></div>
          <div class="feature"><i class="fas fa-sync"></i><h4>Backups</h4><p>Automatic daily backups included</p></div>
          <div class="feature"><i class="fas fa-tachometer-alt"></i><h4>CDN</h4><p>Global content delivery</p></div>
        `
      },
      security: {
        title: 'Security & SSL Certificates',
        desc: 'Protect visitors with HTTPS, secure headers and regular vulnerability scans.',
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Security Dashboard Preview',
        featuresHTML: `
          <div class="feature"><i class="fas fa-lock"></i><h4>SSL Certificates</h4><p>Encrypt data with trusted certs</p></div>
          <div class="feature"><i class="fas fa-shield-alt"></i><h4>Firewall</h4><p>Advanced firewall protection</p></div>
          <div class="feature"><i class="fas fa-search"></i><h4>Scans</h4><p>Regular vulnerability assessments</p></div>
          <div class="feature"><i class="fas fa-bug"></i><h4>Malware Removal</h4><p>Quick threat response</p></div>
        `
      },
      wp: {
        title: 'WordPress Services',
        desc: 'Theme and plugin development, migrations, secure updates and performance tuning for WordPress sites.',
        img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
        alt: 'WordPress Dashboard Preview',
        featuresHTML: `
          <div class="feature"><i class="fab fa-wordpress"></i><h4>WP Development</h4><p>Custom themes & plugins</p></div>
          <div class="feature"><i class="fas fa-paint-brush"></i><h4>Design</h4><p>Beautiful conversion-focused designs</p></div>
          <div class="feature"><i class="fas fa-sync"></i><h4>Updates</h4><p>Regular secure updates</p></div>
          <div class="feature"><i class="fas fa-tachometer-alt"></i><h4>Optimization</h4><p>Speed & performance tuning</p></div>
        `
      },
      system: {
        title: 'System Management',
        desc: 'Monitoring, automated backups, maintenance and automation to keep servers healthy.',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        alt: 'System Monitoring Preview',
        featuresHTML: `
          <div class="feature"><i class="fas fa-desktop"></i><h4>Monitoring</h4><p>24/7 performance tracking</p></div>
          <div class="feature"><i class="fas fa-hdd"></i><h4>Backups</h4><p>Automated backup solutions</p></div>
          <div class="feature"><i class="fas fa-tools"></i><h4>Maintenance</h4><p>Regular upkeep</p></div>
          <div class="feature"><i class="fas fa-robot"></i><h4>Automation</h4><p>Automate routine tasks</p></div>
        `
      },
      seo: {
        title: 'SEO',
        desc: 'Technical SEO, content structure and analytics to improve rankings and organic traffic.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        alt: 'SEO Analytics Preview',
        featuresHTML: `
          <div class="feature"><i class="fas fa-search"></i><h4>Keyword Research</h4><p>Find the right keywords</p></div>
          <div class="feature"><i class="fas fa-chart-line"></i><h4>Analytics</h4><p>Track performance</p></div>
          <div class="feature"><i class="fas fa-pencil-alt"></i><h4>Content</h4><p>Optimize for search</p></div>
          <div class="feature"><i class="fas fa-link"></i><h4>Link Building</h4><p>Quality backlinks</p></div>
        `
      }
    };

    // Select static elements by id
    const panelTitle = document.getElementById('panel-title');
    const panelDesc  = document.getElementById('panel-desc');
    const previewImg  = document.getElementById('preview-image');
    const featuresEl  = document.getElementById('features');
    const ctaBtn      = document.getElementById('cta-btn');
    const ctaTextSpan = document.getElementById('cta-text');
    const screenshotWrap = document.querySelector('.screenshot-wrap');

    // Helper to update UI using .innerText / .innerHTML / .src
    function setService(serviceKey) {
      const s = services[serviceKey];
      if (!s) return;

      // Add loading state to image
      previewImg.classList.add('loading');
      
      // Fade out current content
      panelTitle.style.opacity = 0;
      panelDesc.style.opacity = 0;
      featuresEl.style.opacity = 0;
      ctaBtn.style.opacity = 0;
      screenshotWrap.style.opacity = 0.7;

      setTimeout(() => {
        // update title and description using innerText / innerHTML as appropriate
        // use innerText for plain text (avoids injecting HTML), innerHTML when we want markup
        document.getElementById('panel-title').innerText = s.title;
        document.getElementById('panel-desc').innerText  = s.desc;

        // update preview image by changing the src attribute directly
        previewImg.src = s.img;
        previewImg.alt = s.alt;

        // update features using innerHTML (we inject prepared markup for features)
        featuresEl.innerHTML = s.featuresHTML;

        // update CTA text and icon using innerHTML on the button (the button itself exists in HTML)
        // this demonstrates editing an HTML button's contents with innerHTML
        ctaBtn.innerHTML = `<i class="fas fa-arrow-right"></i><span id="cta-text"> Get ${s.title} Now</span>`;

        // Fade in new content
        panelTitle.style.opacity = 1;
        panelDesc.style.opacity = 1;
        featuresEl.style.opacity = 1;
        ctaBtn.style.opacity = 1;
        screenshotWrap.style.opacity = 1;
      }, 300);
    }

    // Remove loading class when image is loaded
    previewImg.addEventListener('load', function() {
      this.classList.remove('loading');
    });

    // wire up static HTML buttons by id
    function clearActiveButtons() {
      const btns = document.querySelectorAll('.tab-btn');
      btns.forEach(b => b.classList.remove('active'));
    }

    // map buttons to service keys
    document.getElementById('btn-web').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-web').classList.add('active'); setService('web');
    });
    document.getElementById('btn-domain').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-domain').classList.add('active'); setService('domain');
    });
    document.getElementById('btn-security').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-security').classList.add('active'); setService('security');
    });
    document.getElementById('btn-wp').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-wp').classList.add('active'); setService('wp');
    });
    document.getElementById('btn-system').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-system').classList.add('active'); setService('system');
    });
    document.getElementById('btn-seo').addEventListener('click', () => {
      clearActiveButtons(); document.getElementById('btn-seo').classList.add('active'); setService('seo');
    });

    // CTA click handler (shows which service is selected using current title element text)
    ctaBtn.addEventListener('click', () => {
      // Add click animation
      ctaBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        ctaBtn.style.transform = '';
      }, 150);
      
      // read the current title using innerText
      const selected = panelTitle.innerText || 'Service';
      alert(`Thanks — you've requested: ${selected}`);
    });

    // Initialize default (web)
    setService('web');

    // keyboard accessibility: allow Enter/Space on tabs to activate them
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); btn.click();
        }
      });
    });
       (function () {
            const counts = [
                { id: 'n1', value: 200, suffix: '+' },
                { id: 'n2', value: 14,  suffix: '+' },
                { id: 'n3', value: 10,  suffix: '+' },
                { id: 'n4', value: 9,   suffix: '+' }
            ];

            function animate(id, to, duration = 900, suffix = '') {
                const el = document.getElementById(id);
                if (!el) return;
                const start = 0;
                const startTime = performance.now();
                function step(time) {
                    const progress = Math.min((time - startTime) / duration, 1);
                    const easedProgress = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(easedProgress * (to - start) + start);
                    el.innerText = current + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.innerText = to + suffix;
                    }
                }
                requestAnimationFrame(step);
            }

            const section = document.querySelector('.stats-section');
            if ('IntersectionObserver' in window) {
                const obs = new IntersectionObserver((entries, self) => {
                    entries.forEach(e => {
                        if (e.isIntersecting) {
                            counts.forEach(c => animate(c.id, c.value, 1200, c.suffix));
                            self.disconnect();
                        }
                    });
                }, { threshold: 0.2 });
                obs.observe(section);
            } else {
                counts.forEach(c => animate(c.id, c.value, 1200, c.suffix));
            }

            // CTA button interaction
            const startBtn = document.getElementById('start-btn');
            startBtn.addEventListener('click', () => {
                startBtn.innerText = 'Thank you — we will reach out!';
                startBtn.disabled = true;
                setTimeout(() => {
                    startBtn.innerHTML = 'Start Your Project';
                    startBtn.disabled = false;
                }, 1800);
            });
        })();
        // DOM interactions using innerText/innerHTML as requested
    (function(){
      const startBtn = document.getElementById('start');
      const leftParagraph = document.getElementById('left-paragraph');
      const bigHeading = document.getElementById('card-large-heading');

      startBtn.addEventListener('click', () => {
        startBtn.innerText = 'Thanks — we will contact you!';
        leftParagraph.innerHTML = 'Thanks for your interest. <strong>We will reach out shortly</strong> to discuss your project.';
        bigHeading.innerText = 'Quality & Detail — Noted';
        setTimeout(() => {
          startBtn.innerHTML = 'Start Your Project';
          leftParagraph.innerHTML = 'We pride ourselves on being the go-to partner for businesses seeking top-notch development solutions. We deliver reliable, scalable and maintainable products with a focus on quality and collaboration.';
          bigHeading.innerText = 'Quality and Attention to Detail';
        }, 1800);
      });

      // reveal animation on scroll
      const panel = document.querySelector('.panel');
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(8px)';
      panel.style.transition = 'opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1)';
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, o) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              panel.style.opacity = '1';
              panel.style.transform = 'none';
              o.disconnect();
            }
          });
        }, { threshold: 0.12 });
        obs.observe(panel);
      } else {
        panel.style.opacity = '1';
        panel.style.transform = 'none';
      }
    })();
     const reviews = [
      {
        company: 'Volkswagen',
        quote: `"The agency is passionate about helping clients navigate the complex processes of regulatory compliance and achieve their business goals. They have an experienced team of consultants who work closely with clients to understand their unique needs and provide customised solutions tailored to their specific requirements."`,
        author: 'Andrew Jameson',
        role: 'Product Owner at Volkswagen',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60'
      },
      {
        company: 'Acme Corp',
        quote: `"We saw a real lift in efficiency and product quality after partnering with the team. Their communication is top notch and delivery is always on time. They helped us re-architect core systems with zero downtime."`,
        author: 'Maya Rodriguez',
        role: 'Head of Engineering, Acme',
        avatar: 'https://images.unsplash.com/photo-1545996124-1b9b4e2f28d0?auto=format&fit=crop&w=200&q=60'
      },
      {
        company: 'BlueOcean',
        quote: `"The consultants understood our business quickly and provided practical, well-documented solutions. Their attention to detail and commitment to quality made the difference."`,
        author: 'Liam Carter',
        role: 'Product Lead, BlueOcean',
        avatar: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=200&q=60'
      },
      {
        company: 'TechNova',
        quote: `"Their team delivered beyond our expectations. The project was completed ahead of schedule and the quality was exceptional. We'll definitely work with them again."`,
        author: 'Sarah Johnson',
        role: 'CTO, TechNova',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=60'
      }
    ];

    // DOM references
    const companyTitle = document.getElementById('company-title');
    const companyQuote = document.getElementById('company-quote');
    const authorName = document.getElementById('author-name');
    const authorRole = document.getElementById('author-role');
    const authorAvatar = document.getElementById('author-avatar');
    const currentReview = document.getElementById('current-review');
    const totalReviews = document.getElementById('total-reviews');

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    const layerL1 = document.querySelector('.review-card-layer.review-l1');
    const layerL2 = document.querySelector('.review-card-layer.review-l2');
    const layerL3 = document.querySelector('.review-card-layer.review-l3');
    const activeCard = document.getElementById('active-card');

    let activeIndex = 0;
    let isAnimating = false;

    totalReviews.textContent = reviews.length;

    function showReview(idx, direction = 1) {
      if (isAnimating) return;
      isAnimating = true;
      const r = reviews[idx];
      if (!r) { isAnimating = false; return; }

      currentReview.textContent = idx + 1;

      if (layerL3) layerL3.style.transform = `translateX(${ -48 + -6 * direction }px) translateY(16px) scale(0.94) rotate(-1deg)`;
      if (layerL2) layerL2.style.transform = `translateX(${ -24 + -3 * direction }px) translateY(8px) scale(0.97) rotate(-0.5deg)`;
      if (layerL1) layerL1.style.transform = `translateX(${ 24 + 3 * direction }px) translateY(-8px) scale(0.97) rotate(0.5deg)`;

      activeCard.style.transition = 'transform 300ms cubic-bezier(.2,.9,.2,1), opacity 300ms';
      activeCard.style.transform = `translateX(${40 * direction}px) scale(0.98)`;
      activeCard.style.opacity = '0';

      setTimeout(() => {
        companyTitle.textContent = r.company;
        companyQuote.textContent = r.quote;
        authorName.textContent = r.author;
        authorRole.textContent = r.role;

        authorAvatar.src = r.avatar;
        authorAvatar.alt = r.author;

        activeCard.style.transform = `translateX(${ -10 * direction }px) scale(1)`;
        activeCard.style.opacity = '1';

        setTimeout(() => {
          if (layerL3) layerL3.style.transform = `translateX(-48px) translateY(16px) scale(0.94) rotate(-1deg)`;
          if (layerL2) layerL2.style.transform = `translateX(-24px) translateY(8px) scale(0.97) rotate(-0.5deg)`;
          if (layerL1) layerL1.style.transform = `translateX(24px) translateY(-8px) scale(0.97) rotate(0.5deg)`;

          activeCard.style.transform = 'translateX(0) scale(1)';
          isAnimating = false;
        }, 320);
      }, 300);
    }

    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + reviews.length) % reviews.length;
      showReview(activeIndex, -1);
    });

    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % reviews.length;
      showReview(activeIndex, 1);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });

    document.getElementById('start-project').addEventListener('click', function () {
      const btn = this;
      const originalText = btn.textContent;
      const originalSubtitle = document.getElementById('left-sub').textContent;

      btn.textContent = 'Thanks — we will reach out!';
      btn.disabled = true;

      document.getElementById('left-sub').innerHTML = 'Thanks for your interest. <strong>We will contact you shortly</strong>.';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        document.getElementById('left-sub').textContent = originalSubtitle;
      }, 2000);
    });

    let autoAdvanceInterval;
    function startAutoAdvance() {
      autoAdvanceInterval = setInterval(() => {
        activeIndex = (activeIndex + 1) % reviews.length;
        showReview(activeIndex, 1);
      }, 5000);
    }
    function stopAutoAdvance() { clearInterval(autoAdvanceInterval); }

    activeCard.addEventListener('mouseenter', stopAutoAdvance);
    activeCard.addEventListener('mouseleave', startAutoAdvance);
    activeCard.addEventListener('focusin', stopAutoAdvance);
    activeCard.addEventListener('focusout', startAutoAdvance);

    const leftFade = document.getElementById('left-col');
    const rightFade = document.getElementById('right-col');

    function reveal() {
      leftFade.classList.add('review-show');
      rightFade.classList.add('review-show');
    }

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            reveal();
            showReview(activeIndex, 1);
            startAutoAdvance();
            o.disconnect();
          }
        });
      }, { threshold: 0.12 });
      obs.observe(document.querySelector('.review-review-section'));
    } else {
      reveal();
      showReview(activeIndex, 1);
      startAutoAdvance();
    }

     (function(){
      // set current year
      document.getElementById('year').innerText = new Date().getFullYear();

      const form = document.getElementById('newsletter-form');
      const emailInput = document.getElementById('email-input');
      const msg = document.getElementById('subscription-msg');
      const btn = document.getElementById('subscribe-btn');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
          msg.innerText = 'Please enter a valid email address.';
          return;
        }

        // simulate subscribe action and show success using innerHTML
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i> Sending...';
        msg.innerText = '';

        // pretend to send, then show thank-you message
        setTimeout(() => {
          btn.innerText = 'Subscribed';
          msg.innerHTML = 'Thanks for subscribing! Expect our next update in your inbox.';
          emailInput.value = '';
          setTimeout(() => {
            btn.disabled = false;
            btn.innerText = 'Subscribe';
            msg.innerText = '';
          }, 2200);
        }, 900);
      });

      // keyboard accessibility: focus styles already provided by browser, ensure skip links possible
      // (no-op here — left intentionally minimal)
    })();
