# 🧹 Configuration de la Section Services - Responsive

## 🎯 Objectif
Afficher les 4 services de manière équilibrée sur tous les appareils, sans jamais avoir 3 services sur une ligne et 1 seul sur la deuxième ligne.

---

## 📐 Dispositions Responsive

### 🖥️ Desktop Large (écrans > 768px)
```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│   🏠          │   🏢          │   📅          │   🪟          │
│  Nettoyage    │  Nettoyage    │  Nettoyage    │   Lavage      │
│ Résidentiel   │  Commercial   │ Occasionnel   │ des Vitres    │
│               │               │               │               │
│ • Maisons     │ • Bureaux     │ • Événements  │ • Vitres      │
│ • Apparts     │ • Commerces   │ • Déménage.   │   résiden.    │
│ • Condos      │ • Espaces     │ • Rénova.     │ • Vitres      │
│               │   pro.        │               │   commer.     │
└───────────────┴───────────────┴───────────────┴───────────────┘

→ 4 services alignés horizontalement
```

**Code CSS:**
```css
.services-grid {
    grid-template-columns: repeat(4, 1fr);
}
```

---

### 📱 Tablette (écrans 481px - 768px)
```
┌──────────────────────────┬──────────────────────────┐
│   🏠                     │   🏢                     │
│  Nettoyage Résidentiel   │  Nettoyage Commercial    │
│                          │                          │
│  • Maisons, apparts...   │  • Bureaux, commerces... │
└──────────────────────────┴──────────────────────────┘
┌──────────────────────────┬──────────────────────────┐
│   📅                     │   🪟                     │
│  Nettoyage Occasionnel   │  Lavage des Vitres       │
│                          │                          │
│  • Événements...         │  • Vitres résiden...     │
└──────────────────────────┴──────────────────────────┘

→ 2 services par ligne = 2 lignes complètes
```

**Code CSS:**
```css
@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### 📱 Mobile (écrans < 480px)
```
┌─────────────────────────────────────────┐
│   🏠                                    │
│   Nettoyage Résidentiel                 │
│                                         │
│   Maisons, appartements, condos.        │
│   Service régulier ou ponctuel pour     │
│   un espace de vie impeccable.          │
│                                         │
│   • Nettoyage hebdomadaire ou mensuel   │
│   • Grand ménage saisonnier             │
│   • Nettoyage écologique disponible     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│   🏢                                    │
│   Nettoyage Commercial                  │
│   ...                                   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│   📅                                    │
│   Nettoyage Occasionnel                 │
│   ...                                   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│   🪟                                    │
│   Lavage des Vitres                     │
│   ...                                   │
└─────────────────────────────────────────┘

→ 1 service par ligne = 4 lignes
```

**Code CSS:**
```css
@media (max-width: 480px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## ✅ Avantages de Cette Configuration

### 1. **Équilibre Visuel**
- ✅ Desktop: 4 colonnes égales
- ✅ Tablette: 2x2 grille parfaite
- ✅ Mobile: Vue verticale optimale
- ❌ Jamais de disposition 3+1 déséquilibrée

### 2. **Expérience Utilisateur**
- Services toujours bien proportionnés
- Espacement uniforme entre les cartes
- Lisibilité optimale sur tous les écrans
- Transition fluide entre les breakpoints

### 3. **Cohérence avec le Site**
- Même logique que la galerie photos
- Configuration uniforme sur toutes les sections
- Design harmonieux et professionnel

---

## 📋 Liste des 4 Services

1. **🏠 Nettoyage Résidentiel**
   - Maisons, appartements, condos
   - Service régulier ou ponctuel
   - Nettoyage écologique disponible

2. **🏢 Nettoyage Commercial**
   - Bureaux, commerces, espaces professionnels
   - Entretien quotidien ou hebdomadaire
   - Désinfection complète

3. **📅 Nettoyage Occasionnel**
   - Événements spéciaux
   - Nettoyage de fin de bail
   - Nettoyage après rénovations

4. **🪟 Lavage des Vitres**
   - Vitres résidentielles
   - Vitres commerciales
   - Équipement professionnel

---

## 🎨 Effets Visuels Appliqués

### Au survol (hover)
- Élévation de la carte: `translateY(-10px)`
- Ombre accentuée: `box-shadow: var(--shadow-lg)`
- Transition fluide (0.3s)

### Toujours actifs
- Icône circulaire avec dégradé bleu-vert
- Coins arrondis (`border-radius`)
- Ombres douces
- Fond blanc sur fond gris clair

---

## 🔧 Personnalisation Future

Si vous voulez ajouter plus de services:

### 6 services
- Desktop: 3 services par ligne (2 lignes complètes)
- Tablette: 2 services par ligne (3 lignes complètes)
- Mobile: 1 service par ligne (6 lignes)

**Modifier le CSS:**
```css
.services-grid {
    grid-template-columns: repeat(3, 1fr); /* au lieu de 4 */
}
```

### 8 services
- Desktop: 4 services par ligne (2 lignes complètes)
- Tablette: 2 services par ligne (4 lignes complètes)
- Mobile: 1 service par ligne (8 lignes)

**Garder le CSS actuel** (déjà configuré pour 4 colonnes)

---

## 📱 Tests Recommandés

Pour vérifier l'affichage:

1. **Desktop**: Ouvrez le site en plein écran
   - Vous devriez voir 4 services côte à côte

2. **Tablette**: Réduisez la largeur du navigateur à ~700px
   - Vous devriez voir 2x2 services

3. **Mobile**: Réduisez à ~400px ou testez sur téléphone
   - Vous devriez voir 1 service par ligne (4 lignes)

---

## 📋 Fichiers Modifiés

- ✅ `css/style.css` - Configuration de la grille responsive des services
- ✅ `README.md` - Documentation mise à jour
- ✅ `SERVICES-LAYOUT.md` - Guide visuel (ce fichier)

---

## 🎯 Cohérence du Site

Les sections suivantes utilisent la même logique responsive:

| Section           | Desktop  | Tablette | Mobile |
|-------------------|----------|----------|--------|
| **Services**      | 4 par ligne | 2x2    | 1 par ligne |
| **Galerie Photos**| 4 par ligne | 2x2    | 1 par ligne |
| **Témoignages**   | 3 par ligne | Auto   | 1 par ligne |
| **Pourquoi Nous** | 3 par ligne | Auto   | 1 par ligne |

**Note**: "Pourquoi Nous" a 6 items, donc 3x2 sur desktop (équilibré)

---

**Mis à jour**: 2024 | **Ménage Bo-Bien** 🧹✨
