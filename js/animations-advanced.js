// Cursor personalizado
class CustomCursor {
    constructor() {
        this.dot = document.createElement('div');
        this.dotOutline = document.createElement('div');
        this.dot.className = 'cursor-dot';
        this.dotOutline.className = 'cursor-dot-outline';
        document.body.appendChild(this.dot);
        document.body.appendChild(this.dotOutline);
        
        this.cursorVisible = true;
        this.cursorEnlarged = false;
        
        this.init();
    }
    
    init() {
        // Mostrar cursor al cargar
        document.addEventListener('DOMContentLoaded', () => {
            this.dot.style.opacity = 1;
            this.dotOutline.style.opacity = 1;
        });
        
        // Eventos del cursor
        document.addEventListener('mousemove', e => this.cursorMove(e));
        document.addEventListener('mouseenter', () => this.cursorVisible(true));
        document.addEventListener('mouseleave', () => this.cursorVisible(false));
        
        // Efecto hover en elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .benefit-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseover', () => this.cursorEnlarge());
            el.addEventListener('mouseout', () => this.cursorShrink());
        });
    }
    
    cursorMove(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        this.dot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        this.dotOutline.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    }
    
    cursorVisible(visible) {
        if (visible) {
            this.dot.style.opacity = 1;
            this.dotOutline.style.opacity = 1;
        } else {
            this.dot.style.opacity = 0;
            this.dotOutline.style.opacity = 0;
        }
    }
    
    cursorEnlarge() {
        this.cursorEnlarged = true;
        this.dot.style.transform = `translate(-50%, -50%) scale(2.5)`;
        this.dotOutline.style.transform = `translate(-50%, -50%) scale(2)`;
    }
    
    cursorShrink() {
        this.cursorEnlarged = false;
        this.dot.style.transform = 'translate(-50%, -50%) scale(1)';
        this.dotOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
}

// Efecto de partículas
class ParticlesEffect {
    constructor() {
        this.container = document.querySelector('.hero');
        this.particlesContainer = document.createElement('div');
        this.particlesContainer.className = 'particles-container';
        this.container.appendChild(this.particlesContainer);
        
        this.particles = [];
        this.numberOfParticles = 50;
        this.init();
    }
    
    init() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 0.6 },
            { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity
        });
        
        this.particlesContainer.appendChild(particle);
    }
}

// Efecto de texto revelado
class TextReveal {
    constructor() {
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añadir un pequeño retraso para que la animación sea más suave
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                } else {
                    // Remover la clase cuando el elemento no está visible
                    entry.target.classList.remove('visible');
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '0px'
        });
        
        // Solo aplicar el efecto a elementos que no están en la navegación
        document.querySelectorAll('.reveal-text:not(.nav-links a):not(.language-selector button)').forEach(el => {
            observer.observe(el);
        });
    }
}

// Inicializar todas las animaciones
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
    new ParticlesEffect();
    new TextReveal();
    
    // Añadir clases de animación a elementos existentes
    document.querySelectorAll('h1, h2, .hero p').forEach(el => {
        el.classList.add('reveal-text');
    });
    
    document.querySelectorAll('.service-card, .benefit-item, .form-group').forEach(el => {
        el.classList.add('scroll-animate');
    });
}); 