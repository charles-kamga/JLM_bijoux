// Données des produits avec les images disponibles
// Prix en FCFA (entre 3 000 et 30 000 FCFA)
const products = [
    { id: 1, name: 'Accesoire poignet', price: 9000, image: 'images/accesoire poignet.jpeg', category: 'accessoires' },
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
    { id: 21, name: 'Pack poignet argent', price: 15900, image: 'images/pack pogent argent.jpeg', category: 'coffrets' },
    { id: 22, name: 'Pack poignet or', price: 15900, image: 'images/pack poignet or.jpeg', category: 'coffrets' },
    { id: 23, name: 'Pack poignet Rolex or', price: 29900, image: 'images/pack poignet rolex or.jpeg', category: 'coffrets' },
    { id: 24, name: 'Poedagar', price: 25900, image: 'images/Poedagar.jpeg', category: 'montres' },
    { id: 25, name: 'Portefeuille personnalisé 1', price: 8500, image: 'images/portefeuille personnalisé1.jpeg', category: 'accessoires' },
    { id: 26, name: 'Portefeuille personnalisé 2', price: 8700, image: 'images/portefeuille personnalisé2.jpeg', category: 'accessoires' },
    { id: 27, name: 'Portefeuille personnalisé', price: 8800, image: 'images/portefeuille personnalisé.jpeg', category: 'accessoires' },
    { id: 28, name: 'Gourde personnalisée', price: 4500, image: 'images/gourde personnalisée.jpeg', category: 'accessoires' },
    { id: 29, name: 'Collier 1', price: 7500, image: 'images/colier1.jpeg', category: 'colliers' },
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



// Éléments du DOM
const productsGrid = document.querySelector('.products-grid');
const contactForm = document.getElementById('contact-form');

// Afficher les produits
function displayProducts(productsToShow = products) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        // Formater le prix en FCFA avec des espaces comme séparateurs de milliers
        const formattedPrice = new Intl.NumberFormat('fr-FR').format(product.price);
        
        // Créer le message WhatsApp avec les détails du produit
        const whatsappMessage = `Bonjour, je souhaite commander : ${product.name} - ${formattedPrice} FCFA`;
        const whatsappUrl = `https://wa.me/237686846740?text=${encodeURIComponent(whatsappMessage)}`;
        
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
        
        productsGrid.appendChild(productCard);
    });
    
    // Ajouter les écouteurs d'événements aux boutons d'ajout au panier
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
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

// Gérer l'envoi du formulaire de contact
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
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

// Animation au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Filtrer les produits par catégorie
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Gérer les clics sur les boutons de filtre
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
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

// Gestion du menu mobile
function setupMobileMenu() {
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

    // Fermer le menu quand on clique sur un lien
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le menu mobile
    setupMobileMenu();
    
    // Afficher les produits
    displayProducts();
    
    // Configurer les filtres
    setupFilters();
    
    // Ajouter un style pour les notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            opacity: 0;
            transform: translateY(-100%);
            transition: all 0.3s ease;
            pointer-events: none;
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
});

// Écouter l'événement de défilement
window.addEventListener('scroll', animateOnScroll);

// Gérer le défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuster pour la hauteur de la navigation
                behavior: 'smooth'
            });
        }
    });
});
