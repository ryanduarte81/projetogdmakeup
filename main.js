/* ===== MENU MOBILE ===== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
         const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ===== CHANGE BACKGROUND HEADER ===== */
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, {delay: 500});
sr.reveal(`.home__elec`, {delay: 600});
sr.reveal(`.home__img`, {delay: 700});
sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'});
sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'});
sr.reveal(`.about__group, .offer__data`, {origin: 'left'});
sr.reveal(`.about__data, .offer__img`, {origin: 'right'});
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom'});
sr.reveal(`.features__card`, {interval: 300});
sr.reveal(`.features__card-2`, {delay: 400});
sr.reveal(`.features__card-3`, {delay: 500});
sr.reveal(`.features__card-4`, {delay: 600});
sr.reveal(`.features__card-5`, {delay: 700});
sr.reveal(`.features__card-6`, {delay: 800});
sr.reveal(`.features__card-7`, {delay: 900});
sr.reveal(`.features__card-8`, {delay: 1000});
sr.reveal(`.logos__content, .footer__content`, {interval: 100});

/* ===== SCROLL UP ===== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* ===== GALLERY FILTER ===== */
const galleryFilters = document.querySelectorAll('.gallery__filter');
const galleryCards = document.querySelectorAll('.gallery__card');

galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        galleryFilters.forEach(f => f.classList.remove('active'));
        // Add active class to clicked filter
        filter.classList.add('active');
        
        const filterValue = filter.getAttribute('data-filter');
        
        galleryCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.classList.add('fade-in-up');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in-up');
            }
        });
    });
});

/* ===== FORM VALIDATION ===== */
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.addInputValidation();
        }
    }

    addInputValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearError(field);

        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'E-mail inválido';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Telefone inválido';
            }
        } else if (field.type === 'date' && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            if (selectedDate < today) {
                isValid = false;
                errorMessage = 'A data não pode ser no passado';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    clearError(field) {
        field.style.borderColor = '';
        const errorDiv = field.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            if (this.form.id === 'booking-form') {
                // Coletar dados do formulário
                const name = this.form.querySelector('[name="name"]').value;
                const email = this.form.querySelector('[name="email"]').value;
                const phone = this.form.querySelector('[name="phone"]').value;
                const service = this.form.querySelector('[name="service"]').value;
                const date = this.form.querySelector('[name="date"]').value;
                const time = this.form.querySelector('[name="time"]').value;
                const message = this.form.querySelector('[name="message"]').value;
                
                // Montar mensagem para WhatsApp
                let text = `Olá! Gostaria de agendar um serviço.%0A`;
                text += `Nome: ${name}%0A`;
                text += `E-mail: ${email}%0A`;
                text += `Telefone: ${phone}%0A`;
                text += `Serviço: ${service}%0A`;
                text += `Data: ${date}%0A`;
                text += `Hora: ${time}%0A`;
                if (message) text += `Mensagem: ${message}%0A`;
                text += `Enviado pelo site.`;
                
                // Número com DDI Brasil (55) e DDD Ceará (88)
                const whatsappNumber = '5588992629256';
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
                
                // Abrir WhatsApp em nova aba
                window.open(whatsappUrl, '_blank');
                // Resetar o formulário após abrir o WhatsApp
                setTimeout(() => { this.form.reset(); }, 500);
            } else {
                this.showSuccessMessage();
                this.form.reset();
            }
        }
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 500;
        `;
        
        if (this.form.id === 'booking-form') {
            successDiv.innerHTML = `
                <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                Agendamento realizado com sucesso! Entraremos em contacto em breve.
            `;
        } else {
            successDiv.innerHTML = `
                <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                Mensagem enviada com sucesso! Responderemos em breve.
            `;
        }

        this.form.appendChild(successDiv);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Initialize form validators
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator('booking-form');
    new FormValidator('contact-form');
});

/* ===== SMOOTH SCROLLING ===== */
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

/* ===== ANIMATIONS ON SCROLL ===== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.services__card, .gallery__card, .about__box');
    animateElements.forEach(el => observer.observe(el));
});

/* ===== LOADING ANIMATION ===== */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

/* ===== COUNTER ANIMATION ===== */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.getAttribute('data-target'));
            animateCounter(target, finalValue);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('[data-target]').forEach(counter => {
    counterObserver.observe(counter);
});

/* ===== TESTIMONIALS SLIDER ===== */
class TestimonialSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial__card');
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides > 0) {
            this.init();
        }
    }

    init() {
        this.showSlide(0);
        this.autoSlide();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        this.currentSlide = index;
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    autoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// Initialize testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
});

/* ===== MOBILE MENU IMPROVEMENTS ===== */
// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu.classList.contains('show-menu') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    }
});

/* ===== PERFORMANCE OPTIMIZATIONS ===== */
// Debounce function for scroll events
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

// Optimize scroll events
const optimizedScrollActive = debounce(scrollActive, 10);
const optimizedScrollHeader = debounce(scrollHeader, 10);

window.addEventListener('scroll', optimizedScrollActive);
window.addEventListener('scroll', optimizedScrollHeader);

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
// Add focus styles for keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--first-color)';
            element.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
});

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

/* ===== UTILITY FUNCTIONS ===== */
// Format phone number
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    input.value = value;
}

// Format date input
function formatDateInput(input) {
    const today = new Date().toISOString().split('T')[0];
    input.setAttribute('min', today);
}

// Initialize utility functions
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', () => formatPhoneNumber(input));
    });

    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        formatDateInput(input);
    });
}); 