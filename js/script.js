// =============================================================================
// Données des Produits
// =============================================================================
// Tableau d'objets contenant les informations sur chaque produit.
// C'est la "base de données" du site.
const products = [
    { id: 1, name: 'Accessoire poignet', price: 9000, image: 'images/accesoire poignet.jpeg', category: 'accessoires' },
    { id: 2, name: 'Anneaux de fiançailles', price: 12500, image: 'images/anneaux de fiançaille.jpeg', category: 'bagues' },
    { id: 3, name: 'Bracelet couleur argent', price: 9500, image: 'images/bracelet couleur argent.jpeg', category: 'bracelets' },
    { id: 4, name: 'Bracelet couleur or', price: 9800, image: 'images/bracelet couleur or.jpeg', category: 'bracelets' },
    { id: 5, name: 'Bracelet de promesse 1', price: 9500, image: 'images/bracelet de promesse1.jpeg', category: 'bracelets' },
    { id: 6, name: 'Bracelet de promesse 2', price: 9800, image: 'images/bracelet de promesse2.jpeg', category: 'bracelets' },
    { id: 7, name: 'Bracelet de promesse 3', price: 10000, image: 'images/bracelet de promesse3.jpeg', category: 'bracelets' },
    { id: 8, name: 'Bracelet de promesse', price: 9700, image: 'images/bracelet de promesse.jpeg', category: 'bracelets' },
    { id: 9, name: 'Bracelet et montre noirs', price: 18900, image: 'images/bracelet et montre noires.jpeg', category: 'accessoires' },
    { id: 10, name: 'Bracelet simple', price: 6500, image: 'images/bracelet.jpeg', category: 'bracelets' },
    { id: 11, name: 'Bracelet noir 1', price: 6800, image: 'images/bracelet noir1.jpeg', category: 'bracelets' },
    { id: 12, name: 'Bracelet noir 1 (2)', price: 6800, image: 'images/bracelet noir1 (2).jpeg', category: 'bracelets' },
    { id: 13, name: 'Bracelet noir', price: 6700, image: 'images/bracelet noir.jpeg', category: 'bracelets' },
    { id: 14, name: 'Bracelet personnalisés', price: 7000, image: 'images/bracelet personnalisés.jpeg', category: 'bracelets' },
    { id: 15, name: 'Casio couleur or', price: 15000, image: 'images/casio couleur or.jpeg', category: 'montres' },
    { id: 16, name: 'Montre Casio Or', price: 15000, image: 'images/montre casio or.jpeg', category: 'montres' },
    { id: 17, name: 'Montre Poedagar 1', price: 25900, image: 'images/montre poedagar1.jpeg', category: 'montres' },
    { id: 18, name: 'Montre Poedagar argent', price: 26900, image: 'images/montre poedagar argent.jpeg', category: 'montres' },
    { id: 19, name: 'Montre Rolex', price: 28900, image: 'images/montre rolex.jpeg', category: 'montres' },
    { id: 20, name: 'Pack chrétien', price: 14900, image: 'images/pack chretien.jpeg', category: 'coffrets' },
    { id: 21, name: 'Pack poignet argent', price: 15900, image: 'images/pack poignet argent.jpeg', category: 'coffrets' },
    { id: 22, name: 'Pack poignet or', price: 15900, image: 'images/pack poignet or.jpeg', category: 'coffrets' },
    { id: 23, name: 'Pack poignet Rolex or', price: 29900, image: 'images/pack poignet rolex or.jpeg', category: 'coffrets' },
    { id: 24, name: 'Poedagar', price: 25900, image: 'images/Poedagar.jpeg', category: 'montres' },
    { id: 25, name: 'Portefeuille personnalisé 1', price: 8500, image: 'images/portefeuille personnalisé1.jpeg', category: 'accessoires' },
    { id: 26, name: 'Portefeuille personnalisé 2', price: 8700, image: 'images/portefeuille personnalisé2.jpeg', category: 'accessoires' },
    { id: 27, name: 'Portefeuille personnalisé', price: 8800, image: 'images/portefeuille personnalisé.jpeg', category: 'accessoires' },
    { id: 28, name: 'Gourde personnalisée', price: 4500, image: 'images/gourde personnalisée.jpeg', category: 'accessoires' },
    { id: 29, name: 'Collier 1', price: 7500, image: 'images/collier1.jpeg', category: 'colliers' },
    { id: 30, name: 'Collier chrétien', price: 7500, image: 'images/colier chretien.jpeg', category: 'colliers' },
    { id: 31, name: 'Collier plume', price: 6500, image: 'images/colier plume.jpeg', category: 'colliers' },
    { id: 32, name: 'Collier personnalisés 1', price: 7200, image: 'images/colier personnaliés1.jpeg', category: 'colliers' },
    { id: 33, name: 'Collier personnalisés 2', price: 7000, image: 'images/colier personnaliés2.jpeg', category: 'colliers' },
    { id: 34, name: 'Collier personnalisés', price: 7100, image: 'images/colier personnaliés.jpeg', category: 'colliers' },
    { id: 35, name: 'Collier 2', price: 7200, image: 'images/collier1.jpeg', category: 'colliers' },
    { id: 36, name: 'Collier 3', price: 7000, image: 'images/collier.jpeg', category: 'colliers' },
    { id: 37, name: 'Rolex 1', price: 28900, image: 'images/rolex1.jpeg', category: 'montres' },
    { id: 38, name: 'Rolex couleur argent 1', price: 29900, image: 'images/rolex couleur argent1.jpeg', category: 'montres' },
    { id: 39, name: 'Rolex couleur argent 2', price: 29900, image: 'images/rolex couleur argent2.jpeg', category: 'montres' },
    { id: 40, name: 'Rolex couleur argent', price: 29900, image: 'images/rolex couleur argent.jpeg', category: 'montres' },
    { id: 41, name: 'Rolex couleur noire', price: 28900, image: 'images/rolex couleur noire.jpeg', category: 'montres' },
    { id: 42, name: 'Rolex or', price: 29900, image: 'images/rolex or.jpeg', category: 'montres' },
    { id: 43, name: 'Rolex poignet en cuir', price: 29900, image: 'images/rolex poignet en cuir.jpeg', category: 'montres' },
];

// =============================================================================
// Sélection des Éléments du DOM
// =============================================================================
// Récupération des éléments HTML qui seront manipulés par le script.
const productsGrid = document.querySelector('.products-grid');
const contactForm = document.getElementById('contact-form');

// =============================================================================
// Fonctions d'Affichage et d'Interaction
// =============================================================================

/**
 * Affiche les produits dans la grille de la collection.
 * @param {Array} productsToShow - Le tableau de produits à afficher. Par défaut, tous les produits.
 */
function displayProducts(productsToShow = products) {
    // Réinitialiser la grille des produits
    productsGrid.innerHTML = '';

    // Itérer sur les produits à afficher
    productsToShow.forEach((product, index) => {
        // Créer une carte de produit
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.style.animationDelay = `${index * 0.1}s`;

        // Formater le prix en FCFA avec des espaces comme séparateurs de milliers
        const formattedPrice = new Intl.NumberFormat('fr-FR').format(product.price);

        // Créer le message WhatsApp avec les détails du produit
        const whatsappMessage = `Bonjour, je souhaite commander : ${product.name} - ${formattedPrice} FCFA`;
        const whatsappUrl = `https://wa.me/237686846740?text=${encodeURIComponent(whatsappMessage)}`;

        // Définir le contenu de la carte de produit
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${formattedPrice} FCFA</p>
                <a href="${whatsappUrl}" target="_blank" class="btn order-btn">
                    <i class="fab fa-whatsapp"></i> Commander
                </a>
            </div>
        `;

        // Ajouter la carte de produit à la grille
        productsGrid.appendChild(productCard);
    });

    // Ajouter les écouteurs d'événements aux boutons d'ajout au panier
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

/**
 * Affiche une notification temporaire en haut à droite de l'écran.
 * @param {string} message - Le message à afficher.
 */
function showNotification(message) {
    // Créer une notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Ajouter la notification au corps de la page
    document.body.appendChild(notification);

    // Animation d'apparition
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Disparaître après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-100%)';

        // Supprimer la notification du DOM après l'animation
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Gère la soumission du formulaire de contact (si présent dans le HTML).
 */
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Ici, vous pourriez ajouter le code pour envoyer les données du formulaire à un serveur
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        // Réinitialiser le formulaire
        contactForm.reset();

        // Afficher un message de confirmation
        showNotification('Votre message a été envoyé avec succès !');
    });
}

/**
 * Anime les éléments avec la classe '.fade-in' lorsqu'ils deviennent visibles à l'écran.
 */
function animateOnScroll() {
    // Sélectionner les éléments à animer
    const elements = document.querySelectorAll('.fade-in');

    // Itérer sur les éléments
    elements.forEach(element => {
        // Récupérer la position de l'élément
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        // Animer l'élément si il est visible
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

/**
 * Filtre les produits affichés en fonction de la catégorie sélectionnée.
 * @param {string} category - La catégorie à filtrer ('all' pour tout afficher).
 */
function filterProducts(category) {
    // Afficher tous les produits si la catégorie est 'all'
    if (category === 'all') {
        displayProducts(products);
    } else {
        // Filtrer les produits par catégorie
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

/**
 * Initialise les écouteurs d'événements pour les boutons de filtre.
 */
function setupFilters() {
    // Sélectionner les boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Itérer sur les boutons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            // Filtrer les produits
            const category = button.dataset.category;
            filterProducts(category);
        });
    });
}

/**
 * Gère l'ouverture et la fermeture du menu de navigation pour les écrans de bureau.
 * Note : Ce menu est masqué sur mobile au profit de la barre de navigation inférieure.
 */
function setupMobileMenu() {
    // Sélectionner les éléments du menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // Bascule le menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded',
            menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Gérer le clic sur les liens de navigation
    navLinksItems.forEach(link => {
        link.addEventListener('click', function (e) {
            // Animation de clic
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);

            // Fermer le menu mobile
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';

            // Gérer le défilement fluide pour les ancres
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, { passive: true });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// =============================================================================
// Gestion de la navigation mobile
// =============================================================================
function setupMobileNav() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Animation de clic
                    this.classList.add('clicked');
                    setTimeout(() => this.classList.remove('clicked'), 300);

                    // Défilement fluide vers la section cible
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Mise à jour de l'URL sans recharger la page
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    } else {
                        location.hash = targetId;
                    }
                }
            }
        });
    });
}

// =============================================================================
// Initialisation de l'Application
// =============================================================================
// S'exécute lorsque le contenu de la page est entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {
    // Afficher tous les produits au chargement
    displayProducts();

    // Initialiser les filtres
    setupFilters();

    // Initialiser le menu mobile
    setupMobileMenu();

    // Initialiser la navigation mobile
    setupMobileNav();

    // Ajout des styles pour les animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .mobile-nav-link.clicked {
            animation: none;
        }
        
        @keyframes navLinkClick {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Animation au chargement initial
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
        });

        // Déclencher l'animation après un court délai
        setTimeout(() => {
            animateOnScroll();
        }, 300);
    }, 100);

    // Intersection Observer pour les animations de révélation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .zoom-in');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        // Only apply transform if it's not already handled by CSS class initial state
        // But here we rely on CSS classes for initial state, so we just observe
        observer.observe(el);
    });
});

// =============================================================================
// Écouteurs d'Événements Globaux
// =============================================================================

// Gère les animations et la mise à jour de la navigation lors du défilement.
window.addEventListener('scroll', () => {
    animateOnScroll();
    updateActiveNavLink();
});

/**
 * Met à jour l'icône active dans la barre de navigation mobile en fonction de la section visible.
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('main section');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Décalage pour une meilleure détection
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Ici, vous pourriez ajouter le code pour envoyer les données du formulaire à un serveur
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        // Réinitialiser le formulaire
        contactForm.reset();

        // Afficher un message de confirmation
        showNotification('Votre message a été envoyé avec succès !');
    });
}
