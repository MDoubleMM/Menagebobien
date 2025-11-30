# 🚀 Installation sur Hostinger - Guide Simplifié

## ✅ Structure Prête pour Hostinger

Tous vos fichiers sont maintenant **à la racine du projet** et prêts à être déployés directement sur Hostinger !

---

## 📦 Méthode 1 : Télécharger et Extraire le ZIP (Recommandé)

### Étape 1 : Télécharger le Projet en ZIP

1. Cliquez sur le bouton **"Download"** ou **"Télécharger"** pour obtenir le fichier ZIP
2. Enregistrez le fichier `menagebobien.zip` sur votre ordinateur

### Étape 2 : Upload sur Hostinger

1. **Connectez-vous à Hostinger**
   - Allez sur https://www.hostinger.com
   - Connectez-vous à votre compte

2. **Accédez au File Manager**
   - Dans le panneau de contrôle (hPanel)
   - Cliquez sur **"File Manager"** (Gestionnaire de fichiers)
   - Ou allez dans **"Fichiers"** → **"Gestionnaire de fichiers"**

3. **Naviguez vers public_html**
   - Dans le File Manager, cliquez sur le dossier **`public_html`**
   - C'est le dossier racine de votre site web

4. **Supprimez les fichiers existants** (si nécessaire)
   - Sélectionnez tous les fichiers existants dans `public_html`
   - Cliquez sur **"Delete"** ou **"Supprimer"**
   - ⚠️ Faites une sauvegarde avant si vous avez des fichiers importants

5. **Uploadez le fichier ZIP**
   - Cliquez sur **"Upload"** ou **"Télécharger"**
   - Sélectionnez votre fichier `menagebobien.zip`
   - Attendez que l'upload se termine (barre de progression)

6. **Extrayez le ZIP**
   - Faites un **clic droit** sur le fichier `menagebobien.zip`
   - Sélectionnez **"Extract"** ou **"Extraire"**
   - Les fichiers seront extraits directement dans `public_html`

7. **Supprimez le fichier ZIP**
   - Faites un clic droit sur `menagebobien.zip`
   - Cliquez sur **"Delete"** ou **"Supprimer"**
   - Cela libère de l'espace sur votre serveur

### Étape 3 : Vérification

1. **Vérifiez la structure** dans `public_html` :
   ```
   public_html/
   ├── index.html              ✅
   ├── style.css               ✅
   ├── robots.txt              ✅
   ├── sitemap.xml             ✅
   ├── favicon.ico             ✅
   ├── css/                    ✅
   ├── js/                     ✅
   ├── images/                 ✅
   ├── blog/                   ✅
   └── [Tous les fichiers HTML]✅
   ```

2. **Testez votre site**
   - Visitez : https://www.menagebobien.com/
   - Vérifiez que la page d'accueil s'affiche correctement
   - Testez quelques liens internes

---

## 📦 Méthode 2 : Upload via FTP (Alternative)

Si vous préférez utiliser FTP :

### 1. Téléchargez FileZilla
- Rendez-vous sur https://filezilla-project.org/
- Téléchargez et installez FileZilla

### 2. Obtenez vos Identifiants FTP
Dans Hostinger :
- Allez dans **"Fichiers"** → **"Gestionnaire de fichiers"**
- Cliquez sur **"Paramètres FTP"**
- Notez :
  - **Hôte** : ftp.votredomaine.com
  - **Nom d'utilisateur** : votre_username
  - **Mot de passe** : votre_password
  - **Port** : 21

### 3. Connectez-vous avec FileZilla
- Ouvrez FileZilla
- Entrez les informations FTP
- Cliquez sur **"Connexion rapide"**

### 4. Uploadez les Fichiers
- À gauche : Votre ordinateur (fichiers locaux)
- À droite : Le serveur Hostinger
- Naviguez vers `public_html/` à droite
- **Sélectionnez TOUS les fichiers** du projet à gauche
- **Glissez-déposez** vers `public_html/` à droite
- Attendez la fin du transfert

---

## ✅ Checklist Post-Installation

Après l'installation, vérifiez que :

### Tests de Base
- [ ] https://www.menagebobien.com/ affiche la page d'accueil
- [ ] Le titre affiche "Ménage Bo-Bien" sur 2 lignes
- [ ] Les images sont visibles
- [ ] Le CSS fonctionne (design correct)
- [ ] Le menu de navigation fonctionne

### Tests des Pages
- [ ] Page service : https://www.menagebobien.com/menage-residentiel.html
- [ ] Page ville : https://www.menagebobien.com/entretien-menager-laval.html
- [ ] Page blog : https://www.menagebobien.com/blog.html
- [ ] Article blog : https://www.menagebobien.com/blog/grand-menage-printemps-guide.html

### Tests SEO
- [ ] https://www.menagebobien.com/robots.txt accessible
- [ ] https://www.menagebobien.com/sitemap.xml accessible
- [ ] Favicon visible dans l'onglet du navigateur

### Tests Mobile
- [ ] Site responsive sur smartphone
- [ ] Navigation mobile fonctionne
- [ ] Bouton d'appel cliquable : 514-586-9097

---

## 🎯 Structure Finale sur Hostinger

Votre site aura exactement cette structure dans `public_html` :

```
public_html/                                ← Racine serveur Hostinger
│
├── index.html                              ← Page d'accueil
├── style.css                               ← CSS principal
├── robots.txt                              ← SEO
├── sitemap.xml                             ← Sitemap
├── favicon.ico                             ← Icône
│
├── css/
│   └── style.css                           ← Styles
│
├── js/
│   └── main.js                             ← JavaScript
│
├── images/                                 ← 5 images
│   ├── promo-avant-apres.jpg
│   ├── office-cleaning.jpg
│   ├── kitchen-cleaning.jpg
│   ├── bathroom-cleaning.jpg
│   └── window-cleaning.jpg
│
├── blog/                                   ← 6 articles
│   ├── grand-menage-printemps-guide.html
│   ├── produits-menage-ecologiques.html
│   ├── enlever-taches-difficiles.html
│   ├── routine-menage-efficace.html
│   ├── preparer-maison-hiver.html
│   └── hygiene-bureau-productivite.html
│
├── [11 pages de services]                  ← Services HTML
├── [18 pages de villes]                    ← Villes HTML
├── [3 pages spécialisées]                  ← Spécialisées HTML
└── [2 pages supplémentaires]               ← blog.html, temoignages.html
```

**Total : ~53 fichiers prêts pour production**

---

## 🔧 Dépannage

### Le site ne s'affiche pas ?
**Solution** : Vérifiez que `index.html` est bien dans `public_html/` et non dans un sous-dossier

### Les images ne s'affichent pas ?
**Solution** : Vérifiez que le dossier `images/` contient les 5 fichiers JPG

### Erreur 404 sur les pages ?
**Solution** : Vérifiez que tous les fichiers HTML sont à la racine de `public_html/`

### Le CSS ne fonctionne pas ?
**Solution** : 
1. Videz le cache du navigateur (Ctrl+Shift+R)
2. Vérifiez que `style.css` et `css/style.css` existent

### Permissions de fichiers
Si vous avez des problèmes d'accès :
- **Fichiers** : Permissions 644
- **Dossiers** : Permissions 755

Dans Hostinger File Manager :
- Clic droit sur fichier/dossier → **"Permissions"**
- Ajustez les permissions

---

## 📞 Support

### Support Hostinger
- Centre d'aide : https://support.hostinger.com/
- Chat en direct : Disponible 24/7
- Tutoriels : https://www.hostinger.fr/tutoriels/

### Support Site Web
- 📧 Email : menagebobien@hotmail.com
- 📱 Téléphone : 514-586-9097

---

## 🎉 C'est Tout !

Votre site est maintenant prêt à être déployé sur Hostinger. Suivez simplement ces étapes :

1. ✅ **Téléchargez le ZIP**
2. ✅ **Uploadez dans Hostinger File Manager**
3. ✅ **Extrayez dans public_html**
4. ✅ **Testez votre site**

**Votre site professionnel avec 42+ pages sera en ligne ! 🚀**

---

**Dernière mise à jour** : 22 octobre 2025
**Version** : 3.0 (Optimisé Hostinger)
**Statut** : ✅ Prêt pour déploiement direct
