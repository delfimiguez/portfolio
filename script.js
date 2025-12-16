/**
 * ============================================
 * PORTFOLIO INTERACTIVE TEXT WITH LETTER BLOBS
 * ============================================
 * Sistema de animación de tipografía donde las letras se reemplazan
 * temporalmente por blobs con gradientes al hacer hover
 */

// ============================================
// CONFIGURACIÓN
// ============================================

const CONFIG = {
    // Selectores
    selectors: {
        splitText: '.split-text',
        capsules: '[data-capsule-id]'
    },

    // Animación
    animation: {
        letterFadeDelay: 0,      // Sin delay para respuesta inmediata
        capsuleFadeDelay: 30,    // Pequeño delay para las cápsulas

        // cantidad de cápsulas por letra
        capsulesPerLetter: {
            min: 1,              // mínimo
            max: 1               // máximo (ahora mismo será siempre 1, pero ya queda listo)
        },

        rotation: {
            min: -120,           // Rotación mínima en grados
            max: 75             // Rotación máxima en grados
        },
        offset: {
            min: -15,            // Desplazamiento mínimo
            max: 15              // Desplazamiento máximo
        },

        // nuevas config para control global
        maxActiveCapsules: 6,    // máximo de cápsulas al mismo tiempo en pantalla
        spawnCooldown: 100,      // ms mínimos entre apariciones (para evitar spam)
        lifeTime: 1000           // ms antes de remover la cápsula (sincronizá con la animación en CSS)
    }
};

// ============================================
// SISTEMA DE DIVISIÓN DE TEXTO EN LETRAS
// ============================================

class TextSplitter {
    /**
     * Divide el texto en letras individuales envueltas en spans
     * @param {HTMLElement} element - Elemento a dividir
     */
    static split(element) {
        // Guardar el texto original
        const originalText = element.textContent;

        // Verificar si es un link especial
        const isLink = element.classList.contains('split-text-link');
        const linkUrl = element.getAttribute('data-link-url');
        const linkTarget = element.getAttribute('target');

        // Limpiar el elemento
        element.innerHTML = '';

        // Dividir en palabras primero
        const words = originalText.split(' ');

        words.forEach((word, wordIndex) => {
            // Crear contenedor para la palabra (evita que se corte a mitad)
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.whiteSpace = 'nowrap';

            // Dividir la palabra en caracteres
            const chars = word.split('');

            chars.forEach(char => {
                let span;

                if (isLink && linkUrl) {
                    // Crear un link individual para cada letra
                    span = document.createElement('a');
                    span.href = linkUrl;
                    if (linkTarget) span.target = linkTarget;
                    span.classList.add('char', 'char-link');
                } else {
                    span = document.createElement('span');
                    span.classList.add('char');
                }

                span.textContent = char;
                wordSpan.appendChild(span);
            });

            element.appendChild(wordSpan);

            // Añadir espacio entre palabras (excepto después de la última palabra)
            if (wordIndex < words.length - 1) {
                const space = document.createElement('span');
                space.classList.add('char', 'space');
                space.innerHTML = '&nbsp;';
                element.appendChild(space);
            }
        });

        return element;
    }

    /**
     * Divide todos los elementos marcados con la clase
     */
    static splitAll() {
        const elements = document.querySelectorAll(CONFIG.selectors.splitText);
        elements.forEach(element => this.split(element));

        // También dividir los links especiales
        const linkElements = document.querySelectorAll('.split-text-link');
        linkElements.forEach(element => this.split(element));
    }
}

// ============================================
// SISTEMA DE GESTIÓN DE CÁPSULAS
// ============================================

class CapsuleManager {
    constructor() {
        this.capsules = [];          // cápsulas actualmente activas en pantalla
        this.capsuleTemplates = [];  // templates originales
        this.capsuleCount = 0;
        this.init();
    }

    /**
     * Inicializa las cápsulas plantilla
     */
    init() {
        const capsuleElements = document.querySelectorAll(CONFIG.selectors.capsules);
        capsuleElements.forEach(capsule => {
            this.capsuleTemplates.push(capsule);
            // Ocultar las plantillas originales
            capsule.style.display = 'none';
        });
    }

    /**
     * Genera un número aleatorio entre min y max
     */
    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Genera entero aleatorio entre min y max
     */
    randomInt(min, max) {
        return Math.floor(this.random(min, max + 1));
    }

    /**
     * Crea una nueva cápsula clonando una plantilla
     */
    createCapsuleElement() {
        // Seleccionar una plantilla aleatoria
        const template = this.capsuleTemplates[Math.floor(Math.random() * this.capsuleTemplates.length)];

        // Clonar la plantilla
        const capsule = template.cloneNode(true);
        capsule.style.display = 'block';
        capsule.setAttribute('data-capsule-instance', this.capsuleCount++);

        // Añadir al DOM
        document.body.appendChild(capsule);

        return capsule;
    }

    /**
     * Muestra una o varias cápsulas en la posición de una letra
     * @param {HTMLElement} letter - Elemento letra
     */
    showCapsules(letter) {
        // Si ya hay demasiadas cápsulas activas, no crear más
        if (this.capsules.length >= CONFIG.animation.maxActiveCapsules) return;

        // Cuántas cápsulas queremos para esta letra
        const numCapsules = this.randomInt(
            CONFIG.animation.capsulesPerLetter.min,
            CONFIG.animation.capsulesPerLetter.max
        );

        for (let i = 0; i < numCapsules; i++) {
            // Respetar límite global
            if (this.capsules.length >= CONFIG.animation.maxActiveCapsules) break;

            const capsule = this.createCapsuleElement();

            // Obtener posición de la letra
            const rect = letter.getBoundingClientRect();
            const centerX = rect.left + (rect.width / 2);
            const centerY = rect.top + (rect.height / 2);

            // Calcular posición aleatoria alrededor de la letra
            const offsetX = this.random(CONFIG.animation.offset.min, CONFIG.animation.offset.max);
            const offsetY = this.random(CONFIG.animation.offset.min, CONFIG.animation.offset.max);

            // Calcular rotación aleatoria
            const rotation = this.random(CONFIG.animation.rotation.min, CONFIG.animation.rotation.max);

            // Obtener dimensiones de la cápsula para centrarla
            const capsuleStyles = getComputedStyle(capsule);
            const capsuleWidth = parseInt(capsuleStyles.width) || 30;
            const capsuleHeight = parseInt(capsuleStyles.height) || 20;

            // Posicionar la cápsula
            const x = centerX + offsetX - (capsuleWidth / 2);
            const y = centerY + offsetY - (capsuleHeight / 2);

            capsule.style.left = `${x}px`;
            capsule.style.top = `${y}px`;

            // Pasar el ángulo a una CSS variable para usarla en la animación
            capsule.style.setProperty('--capsule-rotation', `${rotation}deg`);

            // Mostrar la cápsula (la animación se maneja en CSS con .is-active)
            setTimeout(() => {
                capsule.classList.add('is-active');
            }, CONFIG.animation.capsuleFadeDelay);

            // Auto-eliminar después de la animación completa
            const lifeTime = CONFIG.animation.lifeTime;
            setTimeout(() => {
                capsule.remove();
                const index = this.capsules.indexOf(capsule);
                if (index > -1) {
                    this.capsules.splice(index, 1);
                }
            }, lifeTime);

            // Guardar referencia
            this.capsules.push(capsule);
        }
    }

    /**
     * Limpia todas las cápsulas (opcional, para reset)
     */
    clearAll() {
        this.capsules.forEach(capsule => {
            capsule.remove();
        });
        this.capsules = [];
    }
}

// ============================================
// SISTEMA DE INTERACCIÓN CON LETRAS
// ============================================

class LetterInteraction {
    constructor(capsuleManager) {
        this.capsuleManager = capsuleManager;
        this.lastSpawnTime = 0;
        this.spawnCooldown = CONFIG.animation.spawnCooldown;
        this.init();
    }

    /**
     * Inicializa los event listeners en todas las letras
     */
    init() {
        const letters = document.querySelectorAll('.char:not(.space)');

        letters.forEach(letter => {
            // Mouse enter - crear figura detrás y ocultar letra
            letter.addEventListener('mouseenter', () => {
                this.onLetterEnter(letter);
            });
        });
    }

    /**
     * Handler para cuando el mouse entra en una letra
     * @param {HTMLElement} letter - Elemento letra
     */
    onLetterEnter(letter) {
        const now = Date.now();

        // Cooldown global para que no se spawneen muchas al mover rápido el mouse
        if (now - this.lastSpawnTime < this.spawnCooldown) {
            return;
        }
        this.lastSpawnTime = now;

        // Ocultar letra (fade solo, sin movimiento vertical si en CSS tenés transform: none)
        letter.classList.add('is-hovered');

        // Crear cápsula(s) detrás del texto
        this.capsuleManager.showCapsules(letter);

        // Restaurar letra después de lifeTime (similar al tiempo que la cápsula vive)
        setTimeout(() => {
            letter.classList.remove('is-hovered');
        }, CONFIG.animation.lifeTime);
    }
}

// ============================================
// INICIALIZACIÓN GLOBAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dividir texto en letras individuales
    TextSplitter.splitAll();

    // 2. Inicializar sistema de cápsulas para letras
    const capsuleManager = new CapsuleManager();
    new LetterInteraction(capsuleManager);
});
