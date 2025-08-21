# Andi's shop - Site E-commerce

Bienvenue sur le site de la boutique de bijoux ! Ce site a été créé pour présenter une collection exclusive de bijoux et permettre aux clients de les acheter en ligne.

## Fonctionnalités

- **Page d'accueil** : Présentation de la boutique avec une bannière attrayante
- **Collection** : Affichage des produits disponibles avec des filtres
- **Panier** : Gestion des articles ajoutés au panier
- **Formulaire de contact** : Pour permettre aux clients de poser des questions
- **Design responsive** : Adapté à tous les appareils (ordinateurs, tablettes, mobiles)
- **Animations** : Effets visuels pour une meilleure expérience utilisateur

## Structure du projet

```
Andi's shop/
├── index.html          # Page d'accueil
├── css/
│   └── style.css      # Feuille de style principale
├── js/
│   └── script.js      # Script JavaScript pour l'interactivité
└── images/            # Dossier pour les images des produits
```

## Comment l'utiliser

1. Clonez ce dépôt ou téléchargez les fichiers
2. Ouvrez le fichier `index.html` dans votre navigateur pour voir le site
3. Pour ajouter des produits, modifiez le tableau `products` dans `js/script.js`
4. Pour personnaliser les styles, modifiez le fichier `css/style.css`

## Personnalisation

### Ajouter des produits

Pour ajouter de nouveaux produits, modifiez le tableau `products` dans `js/script.js` en suivant ce format :

```javascript
{
    id: 9,
    name: 'Nom du produit',
    price: 99.99,
    image: 'images/nom-image.jpg',
    category: 'categorie'
}
```

### Changer les images

1. Ajoutez vos images dans le dossier `images/`
2. Mettez à jour les références aux images dans le tableau `products`

### Modifier les couleurs

Les couleurs principales sont définies dans le fichier `css/style.css` avec des variables CSS :

```css
:root {
    --primary-color: #d4af37; /* Couleur or */
    --secondary-color: #333;  /* Couleur de texte principale */
    --light-color: #f4f4f4;   /* Couleur de fond claire */
    --dark-color: #222;      /* Couleur de fond sombre */
}
```

## Déploiement

Pour mettre le site en ligne, vous pouvez utiliser des services comme :
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## Licence

Ce projet est sous licence MIT. N'hésitez pas à le personnaliser selon vos besoins.
