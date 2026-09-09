# NoTriche

NoTriche est un projet composé d’une extension Chrome et d’une API Node.js qui permet de détecter certains comportements suspects pendant un devoir en ligne, puis de les enregistrer dans Supabase.

## Fonctionnalités

- Enregistrement d’un participant (nom, prénom) depuis la popup de l’extension.
- Détection d’actions côté navigateur :
  - `Ctrl + C`
  - `Ctrl + V`
  - `Ctrl + R`
  - clic droit
  - changement de visibilité de page
- Envoi des événements détectés vers une API locale (`http://localhost:8080`).
- Persistance des utilisateurs et comportements dans Supabase.

## Stack technique

- **Extension Chrome** (Manifest V2)
- **Node.js** + **Express**
- **CORS**
- **@supabase/supabase-js**

## Structure du projet

- `/manifest.json` : configuration de l’extension
- `/popup.html` : interface popup (formulaire)
- `/merde.js` : logique popup (envoi du formulaire + activation)
- `/script.js` : écoute des événements clavier/navigation sur la page
- `/index.js` : API Express et enregistrement dans Supabase

## Prérequis

- Node.js (v18+ recommandé)
- npm
- Un projet Supabase avec les tables utilisées par l’API (`users`, `suspects`)

## Installation

```bash
npm install
```

## Lancer l’API

```bash
node index.js
```

L’API démarre sur le port `8080`.

## Charger l’extension dans Chrome

1. Ouvrir `chrome://extensions`
2. Activer **Mode développeur**
3. Cliquer sur **Charger l’extension non empaquetée**
4. Sélectionner le dossier du projet

## Utilisation

1. Démarrer l’API (`node index.js`)
2. Ouvrir l’extension depuis la barre d’outils Chrome
3. Renseigner nom et prénom, puis valider
4. Réaliser les actions surveillées sur la page active
5. Vérifier les enregistrements dans Supabase

## Endpoints utilisés

- `GET /?nom=<nom>&prenom=<prenom>` : création utilisateur
- `GET /triche?name=<nom>` : événement `Ctrl + V`
- `GET /triche1?name=<nom>` : événement `Ctrl + C`
- `GET /triche2?name=<nom>` : événement `Ctrl + R`
- `GET /triche3?name=<nom>` : changement de visibilité
- `GET /triche4?name=<nom>` : clic droit

## Bonnes pratiques

- Ne jamais versionner de clé Supabase en clair.
- Restreindre les permissions de l’extension au strict nécessaire.
- Utiliser ce projet dans un cadre pédagogique et conforme aux règles locales.
