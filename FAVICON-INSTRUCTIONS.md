# 🎨 INSTRUCTIONS POUR AJOUTER LE FAVICON

## Fichiers nécessaires

Vous devez créer les fichiers suivants (images du logo Ménage Bo-Bien):

1. **favicon.ico** - 16x16 ou 32x32 pixels (format .ico)
2. **favicon-32x32.png** - 32x32 pixels (format PNG)
3. **apple-touch-icon.png** - 180x180 pixels (pour iOS)

## Code à ajouter dans TOUTES les pages HTML

Dans la section `<head>` de chaque page, après les meta tags, ajouter:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

## Emplacement des fichiers

Placer les fichiers favicon à la **racine du projet**:
```
/
├── favicon.ico
├── favicon-32x32.png
├── apple-touch-icon.png
├── index.html
├── entretien-menager-rive-nord.html
└── ...
```

## Création des fichiers

### Option 1: Générateur en ligne (recommandé)
Utilisez https://realfavicongenerator.net/
1. Uploadez votre logo
2. Configurez les paramètres
3. Téléchargez le pack complet
4. Copiez les fichiers à la racine

### Option 2: Création manuelle
1. Créez une image du logo (carré, fond transparent si possible)
2. Redimensionnez aux formats requis
3. Exportez en .ico et .png

## Note importante

⚠️ Les balises favicon n'ont PAS été ajoutées automatiquement car les fichiers images n'existent pas encore.

Le propriétaire doit:
1. Créer les images favicon
2. Les placer à la racine du projet
3. Ajouter les 3 lignes de code dans le <head> de chaque page

Ou bien je peux ajouter les balises maintenant (même si les images n'existent pas encore), et le propriétaire créera les images plus tard.
