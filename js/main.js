// ================================
// Language Management
// ================================
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Setup language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        this.setLanguage(this.currentLang);
        localStorage.setItem('language', this.currentLang);
    }

    setLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all elements with data-fr and data-en attributes
        const elements = document.querySelectorAll('[data-fr][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else if (element.tagName === 'OPTION') {
                    element.textContent = text;
                } else {
                    element.innerHTML = text; // Changed from textContent to innerHTML to support HTML links
                }
            }
        });

        // Update language toggle button text
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'fr' ? 'EN' : 'FR';
            }
        }

        // Update form select options
        this.updateSelectOptions();
    }

    updateSelectOptions() {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            const options = serviceSelect.querySelectorAll('option');
            options.forEach(option => {
                const text = option.getAttribute(`data-${this.currentLang}`);
                if (text) {
                    option.textContent = text;
                }
            });
        }
    }

    getMessage(key) {
        const messages = {
            fr: {
                formSuccess: 'Merci ! Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.',
                formError: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.',
                formIncomplete: 'Veuillez remplir tous les champs obligatoires.',
                sending: 'Envoi en cours...'
            },
            en: {
                formSuccess: 'Thank you! Your request has been sent successfully. We will contact you soon.',
                formError: 'An error occurred. Please try again or call us directly.',
                formIncomplete: 'Please fill in all required fields.',
                sending: 'Sending...'
            }
        };
        return messages[this.currentLang][key];
    }
}

// ================================
// Mobile Navigation
// ================================
class MobileNav {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.init();
    }

    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// ================================
// Smooth Scrolling
// ================================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ================================
// Header Scroll Effect
// ================================
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !this.header.classList.contains('scroll-down')) {
                // Scroll down
                this.header.classList.remove('scroll-up');
                this.header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && this.header.classList.contains('scroll-down')) {
                // Scroll up
                this.header.classList.remove('scroll-down');
                this.header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ================================
// Contact Form Handler
// ================================
class ContactForm {
    constructor(languageManager) {
        this.form = document.getElementById('contactForm');
        this.messageDiv = document.getElementById('formMessage');
        this.languageManager = languageManager;
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = this.languageManager.getMessage('sending');

        try {
            // Submit to Formspree
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                this.showMessage(this.languageManager.getMessage('formSuccess'), 'success');
                
                // Reset form
                this.form.reset();
            } else {
                // Show error message
                this.showMessage(this.languageManager.getMessage('formError'), 'error');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage(this.languageManager.getMessage('formError'), 'error');
        } finally {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    showMessage(message, type) {
        if (this.messageDiv) {
            this.messageDiv.textContent = message;
            this.messageDiv.className = `form-message ${type}`;
            
            // Scroll to message
            this.messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                this.messageDiv.className = 'form-message';
            }, 5000);
        }
    }
}

// ================================
// Intersection Observer for Animations
// ================================
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe service cards, feature cards, etc.
        const animateElements = document.querySelectorAll('.service-card, .feature-card, .contact-card');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// ================================
// Active Navigation Link
// ================================
class ActiveNav {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateActiveLink());
        this.updateActiveLink();
    }

    updateActiveLink() {
        const scrollPosition = window.pageYOffset + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ================================
// Phone Number Formatting
// ================================
class PhoneFormatter {
    constructor() {
        this.init();
    }

    init() {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    if (value.length <= 3) {
                        value = value;
                    } else if (value.length <= 6) {
                        value = value.slice(0, 3) + '-' + value.slice(3);
                    } else {
                        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                    }
                }
                e.target.value = value;
            });
        }
    }
}

// ================================
// FAQ Accordion
// ================================
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => this.toggleItem(item));
            }
        });
    }

    toggleItem(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ================================
// Modal Manager
// ================================
class ModalManager {
    constructor(languageManager) {
        this.modal = document.getElementById('quoteModal');
        this.languageManager = languageManager;
        this.init();
    }

    init() {
        if (!this.modal) return;

        // Get modal elements
        this.closeBtn = this.modal.querySelector('.modal-close');
        this.form = this.modal.querySelector('#modalQuoteForm');
        
        // Bind event listeners
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        // Close on outside click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });

        // Handle form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Setup all modal triggers
        this.setupTriggers();
    }

    setupTriggers() {
        // Find all buttons that should open the modal
        const triggers = document.querySelectorAll('a[href^="mailto:menagebobien@hotmail.com"]');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = this.languageManager.getMessage('sending');

        try {
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert(this.languageManager.getMessage('formSuccess'));
                this.form.reset();
                this.close();
            } else {
                alert(this.languageManager.getMessage('formError'));
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert(this.languageManager.getMessage('formError'));
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
}

// ================================
// Initialize Application
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    const languageManager = new LanguageManager();
    const mobileNav = new MobileNav();
    const smoothScroll = new SmoothScroll();
    const headerScroll = new HeaderScroll();
    const contactForm = new ContactForm(languageManager);
    const animationObserver = new AnimationObserver();
    const activeNav = new ActiveNav();
    const phoneFormatter = new PhoneFormatter();
    const faqAccordion = new FAQAccordion();
    const modalManager = new ModalManager(languageManager);

    // Add fade-in animation to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('loaded');
    }

    // Log initialization
    console.log('Ménage Bo-Bien website initialized');
    console.log('Current language:', languageManager.currentLang);
});

// ================================
// Utility Functions
// ================================

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        MobileNav,
        SmoothScroll,
        ContactForm
    };
}