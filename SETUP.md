# Guide de Configuration - SONOTIC

## 🚀 Démarrage Rapide

### 1. Installation des dépendances

```bash
npm install
```

### 2. Configuration des Assets

**Important :** Les images doivent être dans le dossier `public/assets/` pour être accessibles.

Si vous avez déjà un dossier `assets/` à la racine, copiez-le vers `public/` :

**Sur Windows (Git Bash) :**
```bash
cp -r assets public/assets
```

**Sur Windows (PowerShell) :**
```powershell
Copy-Item -Path assets -Destination public\assets -Recurse
```

**Sur Mac/Linux :**
```bash
cp -r assets public/assets
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 4. Build pour production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📁 Structure des Assets

Assurez-vous que vos images sont organisées ainsi :

```
public/
└── assets/
    ├── tuyau-flexible-hydraulique.jpg
    ├── vidaxl-tuyau-plat-20-m-3-pvc-7994386.jpg
    ├── castolin-tuyaux-jumeles-oxygeneacetylene-image-532655.webp
    ├── p193781.png
    ├── Untitled-design-2024-06-05T033554.873.png
    └── ... (autres images)
```

## 🔧 Personnalisation

### Changer le logo

1. Placez votre logo dans `public/assets/logo.png`
2. Modifiez `src/components/Navbar.jsx` :

```jsx
<Link to="/" className="flex items-center space-x-2">
  <img src="/assets/logo.png" alt="SONOTIC Logo" className="h-10" />
  <div className="text-2xl font-bold text-industrial-blue">
    SONOTIC
  </div>
</Link>
```

### Modifier les couleurs

Éditez `tailwind.config.js` :

```js
colors: {
  'industrial-blue': '#VOTRE_COULEUR',
  'industrial-dark': '#VOTRE_COULEUR',
}
```

### Ajouter des produits

Modifiez `src/data/products.json` avec vos produits réels.

### Configurer le formulaire de contact

Le formulaire nécessite un backend. Options :

1. **Netlify Forms** - Ajoutez `netlify` à la balise `<form>`
2. **Formspree** - Utilisez leur service
3. **Backend personnalisé** - Créez une API pour traiter les soumissions

### Ajouter Google Maps

1. Obtenez une clé API Google Maps
2. Modifiez `src/pages/Contact.jsx` pour intégrer la carte

## ✅ Checklist avant le déploiement

- [ ] Toutes les images sont dans `public/assets/`
- [ ] Le logo est configuré
- [ ] Les informations de contact sont à jour
- [ ] Les produits dans `products.json` sont corrects
- [ ] Le formulaire de contact est configuré
- [ ] Les meta tags SEO sont personnalisés
- [ ] Test responsive sur mobile/tablette/desktop

## 🌐 Déploiement

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connectez votre repo GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Installez `gh-pages`: `npm install --save-dev gh-pages`
2. Ajoutez dans `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Exécutez: `npm run deploy`

## 📞 Support

Pour toute question, consultez le README.md principal.




