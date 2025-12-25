# SONOTIC - Site Web Corporatif

Site web moderne pour SONOTIC, entreprise marocaine spécialisée dans les tuyaux industriels (PVC, HDPE, acier, béton).

## 🚀 Technologies

- **React 18** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Navigation SPA

## 📁 Structure du Projet

```
sonotic/
├── public/
│   └── assets/          # Images et assets statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   └── SectionTitle.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/           # Données JSON
│   │   └── products.json
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Déplacer les assets :**
   ```bash
   # Copier le dossier assets vers public/
   cp -r assets public/assets
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Build pour production :**
   ```bash
   npm run build
   ```

## 📄 Pages

- **Accueil** (`/`) - Hero, introduction, aperçu produits, chiffres clés
- **Produits** (`/products`) - Grille de produits avec filtres
- **À Propos** (`/about`) - Histoire, mission, vision
- **Projets** (`/projects`) - Cas d'usage et galerie
- **Contact** (`/contact`) - Formulaire et informations

## 🎨 Design

- **Couleurs :** Bleu industriel (#1e3a5f), Gris foncé (#0f1f2e)
- **Typographie :** Sans-serif propre et moderne
- **Responsive :** Mobile, tablette, desktop
- **Animations :** Effets hover subtils, transitions fluides

## ✨ Fonctionnalités

- ✅ Design responsive
- ✅ Navigation SPA avec React Router
- ✅ Filtrage de produits par type
- ✅ Formulaire de contact
- ✅ SEO optimisé (meta tags)
- ✅ Accessibilité (ARIA labels, navigation clavier)
- ✅ Performance (lazy loading images)

## 🔧 Configuration

### Personnalisation des couleurs

Modifier `tailwind.config.js` :

```js
colors: {
  'industrial-blue': '#1e3a5f',
  'industrial-dark': '#0f1f2e',
  // ...
}
```

### Ajout de produits

Modifier `src/data/products.json` avec vos produits.

### Remplacement du logo

Remplacer les références au logo dans `src/components/Navbar.jsx`.

## 📝 Notes

- Les images doivent être placées dans `public/assets/`
- Les données produits sont dans `src/data/products.json`
- Le formulaire de contact nécessite un backend pour fonctionner
- La carte Google Maps nécessite une clé API

## 🌐 Déploiement

Le projet peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur supportant les sites statiques

```bash
npm run build
# Le dossier dist/ contient les fichiers à déployer
```

## 📞 Support

Pour toute question, contactez : contact@sonotic.ma

---

© 2024 SONOTIC. Tous droits réservés.

# sonotic
