// =============================================================================
// Données des Produits
// =============================================================================
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
// Initialisation
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupFilters();
    setupScrollAnimations();
    setupMobileNav();
});

// =============================================================================
// Affichage des Produits
// =============================================================================
const productsGrid = document.getElementById('products-grid');

function displayProducts(productsToShow = products) {
    productsGrid.innerHTML = '';

    productsToShow.forEach((product, index) => {
        const productCard = document.createElement('div');

        // Alternance des animations : gauche pour pair, droite pour impair
        const animationClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
        productCard.className = `product-card ${animationClass}`;

        // Staggered animation for products
        productCard.style.transitionDelay = `${(index % 3) * 0.1}s`;

        const formattedPrice = new Intl.NumberFormat('fr-FR').format(product.price);
        const whatsappMessage = `Bonjour, je souhaite commander : ${product.name} - ${formattedPrice} FCFA`;
        const whatsappUrl = `https://wa.me/237686846740?text=${encodeURIComponent(whatsappMessage)}`;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formattedPrice} FCFA</p>
                <a href="${whatsappUrl}" target="_blank" class="btn-order">
                    <i class="fab fa-whatsapp"></i> Commander
                </a>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    // Re-observe new elements
    observeElements();
}

// =============================================================================
// Filtrage
// =============================================================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            const category = button.dataset.category;
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    });
}

// =============================================================================
// Animations au Scroll
// =============================================================================
let observer;

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observeElements();

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '80px';
        }
    });
}

function observeElements() {
    if (!observer) return;

    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .reveal-left, .reveal-right, .zoom-in');
    elementsToAnimate.forEach(el => {
        // Only observe if not already visible
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// =============================================================================
// Navigation Mobile
// =============================================================================
function setupMobileNav() {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
}
