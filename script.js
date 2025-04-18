document.addEventListener('DOMContentLoaded', function() {
    // Cosmic elements
    createCosmicBackground();
    
    // Scroll effects
    initScrollEffects();
    
    // Populate the Month selector with next 12 months
    populateMonthSelector();
    
    // Initialize the testimonial slider
    initTestimonialSlider();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Initialize pricing toggle
    initPricingToggle();
    
    // Initialize AOS (Animate on Scroll) if available
    initAOS();
    
    // Add additional animations and effects
    addExtraAnimations();
});

// Create cosmic background with stars, constellations and space dust
function createCosmicBackground() {
    // Create stars for the entire page
    createStars();
    
    // Create constellation effect
    createConstellation();
    
    // Create space dust
    createSpaceDust();
    
    // Add parallax effect to cosmic elements
    initParallaxEffect();
}

// Create starry background effect throughout the entire page
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    // Add more stars for a dense cosmic experience
    const starCount = window.innerWidth < 768 ? 200 : 400;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position across the entire page
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Random size with more variation
        const size = Math.random() * 3 + 0.5;
        
        // Random opacity for depth effect
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Random delay for twinkling
        const delay = Math.random() * 4;
        
        // Random duration for twinkling
        const duration = Math.random() * 3 + 2;
        
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        // Some stars twinkle more dramatically
        if (Math.random() > 0.7) {
            star.classList.add('twinkle-strong');
        }
        
        starsContainer.appendChild(star);
    }
    
    // Add occasional shooting stars
    addShootingStars(starsContainer);
}

// Add shooting stars with random timings
function addShootingStars(container) {
    if (!container) return;
    
    // Create 5 shooting stars with random timings
    for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 50;
        
        // Random delay between appearances - longer delays for a more special effect
        const delay = Math.random() * 30 + 10;
        
        // Random scale - bigger shooting stars
        const scale = Math.random() * 0.5 + 1;
        
        // Slower animation duration for a more elegant effect
        const duration = Math.random() * 3 + 6; // Between 6-9 seconds
        
        // Random angle with smaller variation
        const angle = Math.random() * 10 + 210; // Between 210-220 degrees
        
        shootingStar.style.left = `${xPos}%`;
        shootingStar.style.top = `${yPos}%`;
        shootingStar.style.animationDelay = `${delay}s`;
        shootingStar.style.animationDuration = `${duration}s`;
        shootingStar.style.transform = `rotate(${angle}deg) scale(${scale})`;
        
        container.appendChild(shootingStar);
    }
}

// Create constellation effect with connecting lines
function createConstellation() {
    const constellation = document.getElementById('constellation');
    if (!constellation) return;
    
    // Create stars for constellation (fewer, but brighter)
    const points = [];
    const pointCount = window.innerWidth < 768 ? 15 : 30;
    
    // Create constellation points
    for (let i = 0; i < pointCount; i++) {
        const point = document.createElement('div');
        point.classList.add('star', 'constellation-point');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        point.style.left = `${xPos}%`;
        point.style.top = `${yPos}%`;
        point.style.width = '2px';
        point.style.height = '2px';
        point.style.opacity = '0.8';
        
        constellation.appendChild(point);
        
        points.push({
            x: xPos,
            y: yPos,
            element: point
        });
    }
    
    // Connect nearby points with lines
    for (let i = 0; i < points.length; i++) {
        const pointA = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
            const pointB = points[j];
            
            // Calculate distance between points
            const dx = pointB.x - pointA.x;
            const dy = pointB.y - pointA.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only connect relatively close points
            if (distance < 20) {
                const line = document.createElement('div');
                line.classList.add('line');
                
                // Calculate line length and angle
                const length = distance;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                
                // Position and rotate line
                line.style.width = `${length}%`;
                line.style.left = `${pointA.x}%`;
                line.style.top = `${pointA.y}%`;
                line.style.transform = `rotate(${angle}deg)`;
                
                constellation.appendChild(line);
            }
        }
    }
}

// Create floating space dust particles
function createSpaceDust() {
    const container = document.body;
    const dustCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < dustCount; i++) {
        const dust = document.createElement('div');
        dust.classList.add('space-dust');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Random size (smaller than stars)
        const size = Math.random() * 1.5 + 0.5;
        
        // Random opacity
        const opacity = Math.random() * 0.3 + 0.1;
        
        dust.style.left = `${xPos}%`;
        dust.style.top = `${yPos}%`;
        dust.style.width = `${size}px`;
        dust.style.height = `${size}px`;
        dust.style.opacity = opacity;
        
        container.appendChild(dust);
    }
}

// Initialize parallax effect for cosmic elements
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / maxScroll;
        
        // Parallax for cosmic glows
        document.querySelectorAll('.cosmic-glow').forEach((glow, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const speed = index % 3 === 0 ? 0.3 : 0.2;
            const yOffset = scrollPercentage * 100 * speed * direction;
            glow.style.transform = `translateY(${yOffset}px)`;
        });
        
        // Rotate constellation slightly
        const constellation = document.getElementById('constellation');
        if (constellation) {
            const rotation = scrollPercentage * 5;
            constellation.style.transform = `rotate(${rotation}deg)`;
        }
        
        // Header transparency based on scroll
        const header = document.querySelector('header');
        if (header) {
            if (scrollPosition > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Scroll effects and smooth navigation
function initScrollEffects() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-fade').forEach(section => {
        observer.observe(section);
    });
}

// Populate the Month selector dropdown with the next 12 months
function populateMonthSelector() {
    const monthSelector = document.getElementById('reportMonth');
    if (!monthSelector) return;
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    
    // Clear any existing options (except the placeholder)
    while (monthSelector.options.length > 1) {
        monthSelector.remove(1);
    }
    
    // Add next 12 months as options
    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonth + i) % 12;
        const yearToUse = currentYear + Math.floor((currentMonth + i) / 12);
        
        const option = document.createElement('option');
        option.value = `${monthIndex}-${yearToUse}`;
        option.textContent = `${months[monthIndex]} ${yearToUse}`;
        
        monthSelector.appendChild(option);
    }
}

// Testimonial slider functionality with enhanced transitions
function initTestimonialSlider() {
    // Sample testimonials data
    const testimonials = [
        {
            text: "I don't do anything without reading this report first.",
            author: "Alexa B., Life Coach",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            text: "It's like having a psychic, strategist, and soul coach... in one document.",
            author: "James T., Entrepreneur",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "These reports have given me more clarity than 2 years of therapy.",
            author: "Sarah M., Artist",
            avatar: "https://randomuser.me/api/portraits/women/42.jpg"
        }
    ];
    
    const sliderContainer = document.querySelector('.testimonial-slider');
    if (!sliderContainer) return;
    
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    
    let currentIndex = 0;
    
    // Only create testimonial elements if they don't exist yet
    if (sliderContainer.children.length <= 1) {
        // Create testimonial elements
        testimonials.forEach((testimonial, index) => {
            if (index > 0) { // First one is already in HTML
                const testimonialElement = document.createElement('div');
                testimonialElement.classList.add('testimonial');
                testimonialElement.style.display = 'none';
                
                testimonialElement.innerHTML = `
                    <div class="testimonial-avatar">
                        <img src="${testimonial.avatar}" alt="Customer Avatar">
                    </div>
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <p class="testimonial-author">— ${testimonial.author}</p>
                `;
                
                sliderContainer.appendChild(testimonialElement);
            }
        });
    }
    
    const testimonialElements = document.querySelectorAll('.testimonial');
    
    // Update active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Show current testimonial with enhanced transitions
    function showTestimonial(index) {
        testimonialElements.forEach((el, i) => {
            if (i === index) {
                el.style.display = 'block';
                el.classList.add('fade-in');
                // Add subtle slide animation based on direction
                el.style.animation = 'fadeIn 0.8s ease, slideUp 0.8s ease';
            } else {
                el.style.display = 'none';
                el.classList.remove('fade-in');
            }
        });
        
        updateDots();
    }
    
    // Next testimonial
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialElements.length;
        showTestimonial(currentIndex);
    }
    
    // Previous testimonial
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialElements.length) % testimonialElements.length;
        showTestimonial(currentIndex);
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // Add click events to prev/next buttons
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    
    // Auto rotate testimonials every 6 seconds
    setInterval(nextTestimonial, 6000);
    
    // Show initial testimonial
    showTestimonial(currentIndex);
}

// Scroll animations with enhanced triggers and effects
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.hero-content, .feature-card, .benefits-list li, .pricing-card, .tech-column, .section-header, .avatar-features li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index for grouped elements
                if (entry.target.parentElement) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    const delay = index * 100; // 100ms staggered delay
                    
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                        
                        // Add additional classes for specific elements
                        if (entry.target.classList.contains('pricing-card')) {
                            entry.target.classList.add('slide-up');
                        }
                        
                        if (entry.target.classList.contains('feature-card')) {
                            entry.target.classList.add('hover-lift');
                        }
                    }, delay);
                } else {
                    entry.target.classList.add('fade-in');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add pulse animation to CTAs
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        if (!button.classList.contains('pulse-animation')) {
            button.classList.add('pulse-animation');
        }
    });
}

// Pricing toggle functionality with enhanced order summary updates
function initPricingToggle() {
    const oneTimeBtn = document.getElementById('oneTime');
    const bundleBtn = document.getElementById('bundle');
    
    if (!oneTimeBtn || !bundleBtn) return;
    
    // Initialize with default selection
    // updateOrderSummary();
}

// Initialize AOS (Animate on Scroll) if available
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    } else {
        // Add data-aos classes manually if AOS is not available
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('fade-in');
        });
    }
}

// Add extra animations and effects
function addExtraAnimations() {
    // Add parallax effect to hero
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollPos * 0.05}px)`;
        }
        
        // Make stars more visible when scrolling down
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            const opacity = 0.3 + (scrollPos * 0.001);
            star.style.opacity = Math.min(opacity, 1);
        });
    });
    
    // Add typewriter effect to section titles
    document.querySelectorAll('.section-header h2').forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        // We'll only do this effect when the element comes into view
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                let i = 0;
                const interval = setInterval(() => {
                    if (i < text.length) {
                        title.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50);
                
                observer.unobserve(title);
            }
        });
        
        observer.observe(title);
    });
    
    // Add magical sparkle effect to CTAs on hover
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', createSparkle);
    });
    
    function createSparkle(e) {
        const btn = e.target;
        
        // Create 10 sparkles
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random position around the button
            const xPos = Math.random() * 100;
            const yPos = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 6 + 2;
            
            // Random animation duration
            const duration = Math.random() * 1 + 0.5;
            
            // Random delay
            const delay = Math.random() * 0.5;
            
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.left = `${xPos}%`;
            sparkle.style.top = `${yPos}%`;
            sparkle.style.animationDuration = `${duration}s`;
            sparkle.style.animationDelay = `${delay}s`;
            
            btn.appendChild(sparkle);
            
            // Remove the sparkle after animation completes
            setTimeout(() => {
                sparkle.remove();
            }, (duration + delay) * 1000);
        }
    }
    
    // Cosmic glow pulsate effect
    document.querySelectorAll('.cosmic-glow').forEach((glow, index) => {
        glow.style.animationDelay = `${index * 2}s`;
    });
    
    // Adjust star visibility on scroll
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPos / scrollHeight;
        
        // Make stars more visible in certain sections
        const stars = document.querySelectorAll('.star');
        const intensityMap = [0.4, 0.7, 0.5, 0.8, 0.6]; // Intensity at different scroll positions
        
        stars.forEach(star => {
            // Get intensity based on scroll position
            const sectionIndex = Math.floor(scrollPercentage * intensityMap.length);
            const intensity = intensityMap[Math.min(sectionIndex, intensityMap.length - 1)];
            
            // Apply variable opacity
            const baseOpacity = parseFloat(star.dataset.baseOpacity || 0.3);
            const newOpacity = baseOpacity * intensity;
            
            star.style.opacity = newOpacity;
        });
    });
    
    // Create new shooting stars periodically
    setInterval(() => {
        const starsContainer = document.getElementById('starsContainer');
        if (starsContainer) {
            // Remove old shooting stars
            const oldShootingStars = starsContainer.querySelectorAll('.shooting-star');
            if (oldShootingStars.length > 8) {
                // Remove excess shooting stars
                for (let i = 0; i < oldShootingStars.length - 5; i++) {
                    oldShootingStars[i].remove();
                }
            }
            
            // Add a new shooting star less frequently
            if (Math.random() > 0.6) { // Only 40% chance to add a new one
                addShootingStars(starsContainer);
            }
        }
    }, 12000); // Check less frequently
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Fix for mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const body = document.body;
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            body.classList.toggle('mobile-menu-active');
            
            // Prevent scrolling when menu is open
            if (body.classList.contains('mobile-menu-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = document.querySelectorAll('.mobile-menu-overlay a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                body.classList.remove('mobile-menu-active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            // Only if menu is active
            if (!body.classList.contains('mobile-menu-active')) return;
            
            // Check if click is outside menu and not on hamburger
            if (!event.target.closest('.mobile-menu-overlay') && 
                !event.target.closest('.hamburger-menu')) {
                body.classList.remove('mobile-menu-active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Fix potential layout issues on mobile
function fixMobileLayout() {
    const windowWidth = window.innerWidth;
    
    // Apply fixes for specific screen widths
    if (windowWidth <= 768) {
        // Ensure cosmic cards have proper height
        const cosmicCards = document.querySelectorAll('.cosmic-card');
        cosmicCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        // Fix any potentially overflowing elements
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = '100%';
            container.style.overflow = 'hidden';
        });
    }
}

// Run on page load and resize
window.addEventListener('load', fixMobileLayout);
window.addEventListener('resize', fixMobileLayout);

// Handle Package Selection
document.addEventListener('DOMContentLoaded', function() {
    // Initialize package cards
    const oneTimeCard = document.getElementById('oneTimeCard');
    const bundleCard = document.getElementById('bundleCard');
    const oneTimeRadio = document.getElementById('oneTime');
    const bundleRadio = document.getElementById('bundle');
    
    if (oneTimeCard && bundleCard) {
        // Select the first package card by default
        oneTimeCard.classList.add('selected');
        if (oneTimeRadio) oneTimeRadio.checked = true;
        
        // Update order summary based on initial selection
        // updateOrderSummary();
        
        // Add click event listeners to package cards
        oneTimeCard.addEventListener('click', function() {
            // Remove selected class from all cards
            oneTimeCard.classList.add('selected');
            bundleCard.classList.remove('selected');
            
            // Check the associated radio input
            if (oneTimeRadio) oneTimeRadio.checked = true;
            
            // Update order summary
            // updateOrderSummary();
        });
        
        bundleCard.addEventListener('click', function() {
            // Remove selected class from all cards
            bundleCard.classList.add('selected');
            oneTimeCard.classList.remove('selected');
            
            // Check the associated radio input
            if (bundleRadio) bundleRadio.checked = true;
            
            // Update order summary
            // updateOrderSummary();
        });
    }
    
    // Populate months dropdown
    const monthSelect = document.getElementById('reportMonth');
    if (monthSelect) {
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        
        for (let i = 0; i < 12; i++) {
            const monthIndex = (currentMonth + i) % 12;
            const option = document.createElement('option');
            option.value = monthIndex;
            option.textContent = months[monthIndex] + ' ' + (i === 0 ? '(Current Month)' : '');
            monthSelect.appendChild(option);
        }
    }
});

// Star animation
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    const starCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size (0.5px to 2.5px)
        const size = 0.5 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create constellation effect
function createConstellation() {
    const constellationEl = document.getElementById('constellation');
    if (!constellationEl) return;
    
    const points = [];
    const lineCount = window.innerWidth < 768 ? 5 : 10;
    
    // Create points
    for (let i = 0; i < lineCount + 1; i++) {
        points.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.7,
        });
    }
    
    // Create lines between points
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        
        const x1 = points[i].x;
        const y1 = points[i].y;
        const x2 = points[i + 1].x;
        const y2 = points[i + 1].y;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        constellationEl.appendChild(line);
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    createStars();
    createConstellation();
    
    // Animate elements on scroll
    const elementsToAnimate = document.querySelectorAll('.feature-card, .cosmic-card, .pricing-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Handle header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Optimize for mobile devices
function optimizeForMobile() {
    // Check if this is a mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce star count for better performance
        createLighterStars();
        
        // Simplify constellation or remove it
        const constellationEl = document.getElementById('constellation');
        if (constellationEl) {
            constellationEl.innerHTML = '';
            createSimpleConstellation();
        }
        
        // Reduce animation effects
        document.querySelectorAll('.cosmic-glow').forEach(glow => {
            glow.style.animation = 'none';
        });
    }
}

// Create a lighter version of stars for mobile
function createLighterStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    // Create fewer stars
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size (0.5px to 2px)
        const size = 0.5 + Math.random() * 1.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Simpler animation
        star.style.animationDuration = '3s';
        
        starsContainer.appendChild(star);
    }
}

// Create a simpler constellation for mobile
function createSimpleConstellation() {
    const constellationEl = document.getElementById('constellation');
    if (!constellationEl) return;
    
    const lineCount = 3;
    const points = [];
    
    // Create fewer points
    for (let i = 0; i < lineCount + 1; i++) {
        points.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.5,
        });
    }
    
    // Create lines
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        
        const x1 = points[i].x;
        const y1 = points[i].y;
        const x2 = points[i + 1].x;
        const y2 = points[i + 1].y;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        constellationEl.appendChild(line);
    }
}

// Run on load and on resize
window.addEventListener('load', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Fix header and hero layout issues on mobile
function fixHeaderAndHeroOnMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Fix header layout
        const header = document.querySelector('header');
        if (header) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
            header.style.zIndex = '1000';
        }
        
        // Ensure container is properly aligned
        const headerContainer = document.querySelector('header .container');
        if (headerContainer) {
            headerContainer.style.display = 'flex';
            headerContainer.style.flexDirection = 'row';
            headerContainer.style.justifyContent = 'space-between';
            headerContainer.style.alignItems = 'center';
        }
        
        // Fix hero section spacing
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.paddingTop = '90px';
            hero.style.overflow = 'hidden';
        }
        
        // Adjust hero content and image
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.width = '100%';
            heroContent.style.textAlign = 'center';
            heroContent.style.padding = '0 15px';
            heroContent.style.marginBottom = '30px';
        }
        
        if (heroImage) {
            heroImage.style.width = '100%';
            heroImage.style.maxWidth = '280px';
            heroImage.style.margin = '0 auto';
        }
        
        // Ensure badges are properly positioned
        const floatingBadges = document.querySelectorAll('.floating-badge');
        floatingBadges.forEach(badge => {
            badge.style.position = 'absolute';
            
            if (badge.classList.contains('top')) {
                badge.style.top = '-10px';
                badge.style.right = '-10px';
            } else if (badge.classList.contains('bottom')) {
                badge.style.bottom = '-10px';
                badge.style.left = '-10px';
            }
        });
        
        // Fix emoji line layout
        const emojiLine = document.querySelector('.emoji-line');
        if (emojiLine) {
            emojiLine.style.display = 'flex';
            emojiLine.style.justifyContent = 'center';
            emojiLine.style.gap = '10px';
        }
        
        // Fix hero badges layout
        const heroBadges = document.querySelector('.hero-badges');
        if (heroBadges) {
            heroBadges.style.display = 'flex';
            heroBadges.style.flexDirection = 'column';
            heroBadges.style.alignItems = 'center';
            heroBadges.style.gap = '10px';
            
            // Fix individual badge items
            const badges = heroBadges.querySelectorAll('p');
            badges.forEach(badge => {
                badge.style.display = 'flex';
                badge.style.alignItems = 'center';
                badge.style.justifyContent = 'center';
                badge.style.textAlign = 'center';
                badge.style.gap = '8px';
                badge.style.width = '100%';
            });
        }
        
        // Fix CTA button
        const heroCta = document.querySelector('.hero-cta');
        if (heroCta) {
            const button = heroCta.querySelector('.btn');
            if (button) {
                button.style.width = '100%';
                button.style.maxWidth = '280px';
            }
        }
    }
}

// Run layout fixes on page load and resize
window.addEventListener('load', function() {
    fixHeaderAndHeroOnMobile();
    fixMobileLayout();
    optimizeForMobile();
});

window.addEventListener('resize', function() {
    fixHeaderAndHeroOnMobile();
    fixMobileLayout();
    optimizeForMobile();
});

// Setup card click handlers for package selection
function setupCardClickHandlers() {
    // One-Time card click
    const oneTimeCard = document.getElementById('oneTimeCard');
    if (oneTimeCard) {
        oneTimeCard.addEventListener('click', function() {
            const oneTimeRadio = document.getElementById('oneTime');
            if (oneTimeRadio) {
                oneTimeRadio.checked = true;
                
                // Update card styles
                this.classList.add('selected');
                const bundleCard = document.getElementById('bundleCard');
                if (bundleCard) bundleCard.classList.remove('selected');
            }
        });
    }
    
    // Bundle card click
    const bundleCard = document.getElementById('bundleCard');
    if (bundleCard) {
        bundleCard.addEventListener('click', function() {
            const bundleRadio = document.getElementById('bundle');
            if (bundleRadio) {
                bundleRadio.checked = true;
                
                // Update card styles
                this.classList.add('selected');
                const oneTimeCard = document.getElementById('oneTimeCard');
                if (oneTimeCard) oneTimeCard.classList.remove('selected');
            }
        });
    }
}

// Remove any direct calls to updateOrderSummary()
function initPackageSelector() {
    const packageCards = document.querySelectorAll('.package-option-card');
    const oneTimeCard = document.getElementById('oneTimeCard');
    const bundleCard = document.getElementById('bundleCard');
    
    if (packageCards.length && oneTimeCard && bundleCard) {
        // Mark one-time as selected by default
        oneTimeCard.classList.add('selected');
        
        // No need for this anymore since the summary isn't on the page
        // updateOrderSummary();
        
        // Add click event listeners to package cards
        oneTimeCard.addEventListener('click', function() {
            // Clear existing selections
            packageCards.forEach(card => card.classList.remove('selected'));
            
            // Mark this card as selected
            this.classList.add('selected');
            
            // Set radio button
            const radioBtn = this.querySelector('input[type="radio"]');
            if (radioBtn) radioBtn.checked = true;
            
            // No need for this anymore
            // updateOrderSummary();
        });
        
        bundleCard.addEventListener('click', function() {
            // Clear existing selections
            packageCards.forEach(card => card.classList.remove('selected'));
            
            // Mark this card as selected
            this.classList.add('selected');
            
            // Set radio button
            const radioBtn = this.querySelector('input[type="radio"]');
            if (radioBtn) radioBtn.checked = true;
            
            // No need for this anymore
            // updateOrderSummary();
        });
    }
} 