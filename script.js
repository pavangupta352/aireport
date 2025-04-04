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
    
    // Form validation
    initFormValidation();
    
    // Initialize AOS (Animate on Scroll) if available
    initAOS();
    
    // Update order summary when package selection changes
    updateOrderSummary();
    
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
    
    // Update checkout text and order summary based on selected package
    function updateCheckoutText() {
        const submitBtn = document.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        
        if (bundleBtn.checked) {
            submitBtn.textContent = 'Secure Full-Year Bundle ($777)';
            submitBtn.innerHTML = '<i class="fas fa-lock"></i> Secure Full-Year Bundle';
        } else {
            submitBtn.textContent = 'Secure One-Time Report ($97)';
            submitBtn.innerHTML = '<i class="fas fa-lock"></i> Secure One-Time Report';
        }
        
        // Update order summary
        updateOrderSummary();
    }
    
    oneTimeBtn.addEventListener('change', updateCheckoutText);
    bundleBtn.addEventListener('change', updateCheckoutText);
    
    // Initialize with default selection
    updateCheckoutText();
}

// Update order summary when package selection changes
function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    if (!orderSummary) return;
    
    const bundleBtn = document.getElementById('bundle');
    const oneTimeBtn = document.getElementById('oneTime');
    
    if (!bundleBtn || !oneTimeBtn) return;
    
    const summaryItem = orderSummary.querySelector('.summary-item');
    const totalPrice = orderSummary.querySelector('.total-price');
    
    if (bundleBtn.checked) {
        summaryItem.innerHTML = `
            <span class="item-name">Full-Year Bundle + 1:1 Reading</span>
            <span class="item-price">$777</span>
        `;
        totalPrice.textContent = '$777';
    } else {
        summaryItem.innerHTML = `
            <span class="item-name">One-Time Report</span>
            <span class="item-price">$97</span>
        `;
        totalPrice.textContent = '$97';
    }
}

// Form validation with enhanced user feedback
function initFormValidation() {
    const form = document.getElementById('birthDataForm');
    if (!form) return;
    
    // Add input validation styles
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        // Show validation state on blur
        input.addEventListener('blur', function() {
            if (this.checkValidity()) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else if (this.value) {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
        
        // Reset validation state when user starts typing
        input.addEventListener('input', function() {
            this.classList.remove('invalid');
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const dob = formData.get('dob');
        const time = formData.get('time');
        const place = formData.get('place');
        const reportMonth = formData.get('reportMonth');
        const packageType = formData.get('package');
        
        // Basic validation
        if (!name || !email || !dob || !time || !place || !reportMonth) {
            showFormError('Please fill out all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormError('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate API call (in a real implementation, this would submit to backend)
        setTimeout(() => {
            // Show success message
            showFormSuccess('Thank you for your purchase! Your report will be prepared and sent to your email within 24 hours.');
            
            // Reset form and button
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    });
    
    // Helper function to show form errors
    function showFormError(message) {
        // Remove any existing error messages
        const existingError = document.querySelector('.form-error');
        if (existingError) existingError.remove();
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('form-error');
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        // Insert at top of form
        form.insertBefore(errorDiv, form.firstChild);
        
        // Scroll to error
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Helper function to show success message
    function showFormSuccess(message) {
        // Create success overlay
        const successOverlay = document.createElement('div');
        successOverlay.classList.add('success-overlay');
        
        successOverlay.innerHTML = `
            <div class="success-modal">
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>Success!</h3>
                <p>${message}</p>
                <button class="btn btn-primary close-modal">Continue</button>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(successOverlay);
        
        // Add close handler
        const closeBtn = successOverlay.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            successOverlay.remove();
        });
    }
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

// Handle Package Selection
document.addEventListener('DOMContentLoaded', function() {
    // Initialize package cards
    const oneTimeCard = document.getElementById('oneTimeCard');
    const bundleCard = document.getElementById('bundleCard');
    const oneTimeRadio = document.getElementById('oneTime');
    const bundleRadio = document.getElementById('bundle');
    
    // Select the first package card by default
    oneTimeCard.classList.add('selected');
    oneTimeRadio.checked = true;
    
    // Update order summary based on initial selection
    updateOrderSummary('one-time');
    
    // Add click event listeners to package cards
    oneTimeCard.addEventListener('click', function() {
        // Remove selected class from all cards
        oneTimeCard.classList.add('selected');
        bundleCard.classList.remove('selected');
        
        // Check the associated radio input
        oneTimeRadio.checked = true;
        
        // Update order summary
        updateOrderSummary('one-time');
    });
    
    bundleCard.addEventListener('click', function() {
        // Remove selected class from all cards
        bundleCard.classList.add('selected');
        oneTimeCard.classList.remove('selected');
        
        // Check the associated radio input
        bundleRadio.checked = true;
        
        // Update order summary
        updateOrderSummary('bundle');
    });
    
    // Function to update order summary
    function updateOrderSummary(packageType) {
        const summaryElement = document.getElementById('orderSummary');
        let summaryHTML = '<h4>Order Summary</h4>';
        
        if (packageType === 'one-time') {
            summaryHTML += `
                <div class="summary-item">
                    <span class="item-name">One-Time Report</span>
                    <span class="item-price">$97</span>
                </div>
                <div class="summary-total">
                    <span>Total</span>
                    <span class="total-price">$97</span>
                </div>
            `;
        } else {
            summaryHTML += `
                <div class="summary-item">
                    <span class="item-name">Full-Year Bundle + 1:1 Reading</span>
                    <span class="item-price">$777</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Your Savings</span>
                    <span class="item-price savings-price">-$800+</span>
                </div>
                <div class="summary-total">
                    <span>Total</span>
                    <span class="total-price">$777</span>
                </div>
            `;
        }
        
        summaryElement.innerHTML = summaryHTML;
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