# Brief — Accueil Ménage Bo-Bien

**Self-authored under explicit creative delegation.** Mahmoud a demandé d’utiliser Scroll-craft pour améliorer le site, m’a dit de choisir la direction créative et m’a autorisé à ajouter des illustrations. Les décisions ci-dessous sont donc des choix de conception, pas des citations de l’entreprise.

## Ce que l’entreprise offre

Ménage Bo-Bien est un service local de nettoyage résidentiel et commercial à Terrebonne et sur la Rive-Nord de Montréal. Le site indique que l’entreprise existe depuis 2004 et propose aussi le grand ménage, le nettoyage après travaux, l’entretien de fin de bail et le lavage des vitres.

## Public et conviction à installer

Le site s’adresse aux ménages, propriétaires, locataires et petites entreprises de la Rive-Nord qui veulent confier leur nettoyage à une équipe locale.

À la fin, le visiteur devrait comprendre que Ménage Bo-Bien peut prendre en charge son type d’espace, qu’il peut voir les services détaillés et qu’il peut demander une estimation gratuite par téléphone ou formulaire.

## Direction créative

- **Ambiance :** calme, soignée, chaleureuse, locale et fiable.
- **Univers visuel :** photographie authentique de cuisines, bureaux et vitres; palette crème, vert doux et bleu-vert profond; quelques motifs SVG faits pour la marque.
- **Structure :** chapitres distincts, avec une scène d’ouverture photographique et des sections qui changent de rythme.
- **Énergie :** accueil posé, exploration claire des services, montée visuelle par les photos, preuve de confiance, clôture simple vers une estimation.
- **Mouvement :** translation douce de photos, rail horizontal de services et d’avis piloté par le défilement, révélation de certaines photos, et sections fixes seulement quand leur contenu tient dans l’écran.
- **Assets :** réutiliser les photos déjà présentes dans `images/`; créer les ornements illustrés en SVG dans le HTML, sans générer de chiffres ni de texte dans une image.

## Parcours et courbe de ressenti

1. **Reconnaissance — accueil :** « Ils font le type de ménage que je cherche. » La scène photographique accueille avec un message court et le choix d’un espace.
2. **Orientation — services :** « Je peux trouver rapidement le bon service. » Quatre offres principales défilent dans un rail horizontal.
3. **Preuve — qualité :** « Je vois à quoi ressemble leur travail. » La galerie et la comparaison avant/après existantes occupent le point visuel fort.
4. **Confiance — pourquoi nous :** « Cette équipe a de l’expérience et des garanties. » Les raisons de choisir avancent dans un chapitre tenu à l’écran.
5. **Validation — avis :** « D’autres personnes de ma région les ont choisis. » Les témoignages existants avancent au rythme du défilement.
6. **Attachement — à propos :** « C’est une entreprise locale qui connaît la Rive-Nord. » L’histoire et les données déjà présentes accompagnent une vraie photo.
7. **Objections — FAQ :** « Je sais comment demander de l’information. » L’accordéon existant reste utilisable au clavier et au toucher.
8. **Engagement — estimation :** « Je peux obtenir une estimation gratuite maintenant. » Le formulaire, le téléphone et le courriel ferment la page.

### Courbe d’émotion

- Accueil : calme et clarté, avec une scène lumineuse et un choix immédiatement utile.
- Services : curiosité, par le mouvement latéral des cartes.
- Qualité : confiance et satisfaction, au moment où les photos du travail occupent le plus d’espace visuel.
- Preuve et avis : assurance, avec des raisons et des témoignages concrets déjà affichés sur le site.
- À propos et FAQ : proximité puis soulagement, grâce aux informations locales et aux réponses.
- Contact : simplicité, avec une action principale et des voies de contact directes.

### Pic mémorable

« J’ai trouvé le service qui correspond à mon espace et je peux voir le soin apporté au travail. » Le pic se trouve dans la galerie de qualité et sa photo avant/après existante.

### Phrase à raconter

« C’est le site d’entretien ménager où tu choisis ton espace et obtiens ensuite une estimation sans chercher longtemps. »

## Mouvement signature

Le sélecteur « Ma maison / Mon entreprise / Mes vitres » modifie la photographie de l’ouverture, son texte alternatif, l’état sélectionné et le type de service prérempli dans le formulaire d’estimation. Le choix reste facultatif et le formulaire demeure accessible sans lui.

## Score des dispositifs

| Beat | Dispositif | Raison |
|---|---|---|
| Reconnaissance | `flow` + `parallax` léger | Donner de la profondeur à la photo d’ouverture sans vidéo ni lecture forcée. |
| Orientation | `pan` | Le déplacement horizontal convient aux choix de services. |
| Preuve visuelle | `flow` + `reveal` | Les photos restent au centre; une révélation discrète souligne la différence entre les scènes. |
| Confiance | `pin` | Tenir les avantages ensemble pendant que le lecteur les parcourt. |
| Validation | `pan` | Laisser les avis se suivre sans carrousel automatique. |
| Attachement | `flow` + `reveal` | Revenir à une lecture calme, avec une vraie photo locale. |
| Objections | `pin` | Garder l’accordéon dans une scène stable; sur petit écran, repasser en flux libre. |
| Engagement | `flow` | Fermer sur le formulaire et les coordonnées, sans effet qui retarde l’action. |

Les séquences d’actes sont : `flow → pan → flow → pin → pan → flow → pin → flow`. Les familles utilisées comprennent `flow`, `pan`, `pin`, `parallax` et `reveal`; aucune séquence de même type ne se répète directement.

## Mise en œuvre et limites

La page reste du HTML sémantique. Le moteur Scroll-craft est copié intact depuis le skill dans les fichiers de production, puis la marque est thématisée à part. Les images existantes sont gardées. Les anciens textes, chiffres, avis, pages de services et intégration du formulaire sont préservés.

Les sections fixes de preuve et de FAQ sont ramenées à un flux naturel sur les téléphones courts. Les mouvements suivent le défilement et s’effacent selon la préférence de réduction des animations. Il faut vérifier visuellement la version publiée sur ordinateur et téléphone, le mode de réduction des animations, la sélection du service, la navigation au clavier, le formulaire et le consentement aux témoins avant de considérer le travail terminé.
