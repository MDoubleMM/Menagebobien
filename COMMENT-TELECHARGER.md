# 📥 Comment Télécharger et Installer sur Hostinger

## 🎯 Votre Dossier à Télécharger

Le dossier **`public/`** contient TOUT ce dont vous avez besoin.

---

## 📦 Étape 1: Télécharger le Dossier Public

### Depuis cette Interface GenSpark:

1. Allez dans l'onglet **"Files"** (Fichiers) en haut
2. Cherchez le dossier **`public/`**
3. Cliquez sur le bouton **"Download"** (Télécharger) à côté de `public/`
4. Le dossier se téléchargera en format ZIP sur votre ordinateur
5. **Extrayez le ZIP** pour obtenir le contenu du dossier `public/`

---

## 🚀 Étape 2: Se Connecter à Hostinger

1. Allez sur: **https://hpanel.hostinger.com**
2. Connectez-vous avec vos identifiants
3. Sélectionnez votre site **menagebobien.com**
4. Cliquez sur **"File Manager"** (Gestionnaire de fichiers)

---

## 📤 Étape 3: Uploader les Fichiers

### Dans le File Manager de Hostinger:

1. **Ouvrez le dossier `public_html`**
   - C'est le dossier racine de votre site web

2. **SUPPRIMEZ tous les fichiers par défaut**
   - Sélectionnez tout (Ctrl+A ou Cmd+A)
   - Cliquez sur "Delete" (Supprimer)
   - Le dossier `public_html` doit être VIDE

3. **Uploadez TOUT le contenu du dossier public/**
   - Cliquez sur le bouton **"Upload Files"**
   - Sélectionnez **TOUS** les fichiers et dossiers du dossier `public/`:
     * ✅ index.html
     * ✅ robots.txt
     * ✅ sitemap.xml
     * ✅ Toutes les pages HTML (28 pages)
     * ✅ Le dossier `css/` complet
     * ✅ Le dossier `js/` complet
     * ✅ Le dossier `images/` (vide pour l'instant)
   
4. **Attendez la fin de l'upload**
   - Cela peut prendre 2-5 minutes selon votre connexion

---

## 🖼️ Étape 4: Ajouter Vos Images

1. Dans `public_html/images/`, uploadez vos photos
2. Liste complète dans le fichier: `public/images/.gitkeep`

**Images prioritaires:**
- `og-image.jpg` (image de partage social, 1200x630px)
- Images de la galerie (4 images minimum)
- Images des villes (optionnel mais recommandé)

---

## ✅ Étape 5: Vérifier que Tout Fonctionne

1. Ouvrez votre navigateur
2. Visitez: **https://www.menagebobien.com**
3. Vérifiez:
   - ✅ La page d'accueil s'affiche
   - ✅ Le design (CSS) fonctionne
   - ✅ Le menu fonctionne
   - ✅ Les liens vers les autres pages fonctionnent

---

## 📊 Structure Finale dans Hostinger

```
public_html/
├── index.html                          ← Page d'accueil
├── robots.txt
├── sitemap.xml
├── entretien-menager-rive-nord.html
├── menage-residentiel.html
├── menage-commercial.html
├── ... (25 autres pages HTML)
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── images/
    ├── og-image.jpg
    ├── kitchen-cleaning.jpg
    ├── bathroom-cleaning.jpg
    └── ... (vos autres images)
```

---

## 🆘 En Cas de Problème

### Le site ne s'affiche pas
➡️ **Solution:** Vérifiez que tous les fichiers sont dans `public_html/` et pas dans un sous-dossier

### Le CSS ne fonctionne pas (site sans design)
➡️ **Solution:** Vérifiez que le dossier `css/` existe dans `public_html/css/`

### Les images ne s'affichent pas
➡️ **Solution:** Ajoutez vos images dans `public_html/images/`

### Erreur "File not found" ou 404
➡️ **Solution:** Vérifiez que le nom du fichier est exactement le même (majuscules/minuscules)

---

## 📞 Support

**Si vous avez des questions:**
- Email: menagebobien@hotmail.com
- Téléphone: 514-586-9097

---

## 🎉 C'est Tout!

Une fois uploadé, votre site sera accessible sur:
**https://www.menagebobien.com**

Le dossier `public/` contient TOUT ce qu'il faut.
Uploadez simplement son contenu dans `public_html/` sur Hostinger.

**Bonne chance! 🚀**
