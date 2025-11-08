# 🍔 FastFood React App

Une application de commande rapide (style fast-food) construite avec **React**, **TailwindCSS**, **DaisyUI**, **React Router**, **React Toastify**, **Lucide React**, et **Framer Motion**.
Template Inspiration : [website-design-burger](https://dribbble.com/shots/26580296-Fast-Food-Website-Design-Burger-Chain-UI-UX-Concept)
---

## 🚀 Objectif du projet

Créer une application de commande interactive où l’utilisateur peut :

- Parcourir le menu 🍟  
- Ajouter/supprimer des plats du panier 🛒  
- Voir le total en temps réel 💰  
- Passer une “commande” (simulée) ✅  
- Profiter d’une expérience fluide avec des animations et notifications

---

## 🧰 Stack technique

- ⚛️ **React** → composants + hooks  
- 🌀 **TailwindCSS + DaisyUI** → design moderne et rapide  
- 🚦 **React Router** → navigation entre pages  
- 🔔 **React Toastify** → notifications (ajout, suppression, commande)  
- 💨 **Framer Motion** → animations fluides  
- 🧰 **Lucide React** → icônes  
- 💾 **LocalStorage** *(optionnel)* → persistance du panier  

---

## 📁 Structure du projet

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── MenuCard.jsx
│ ├── CartItem.jsx
│
├── pages/
│ ├── Home.jsx → Page d’accueil (menu)
│ ├── Cart.jsx → Page du panier
│ ├── Checkout.jsx → Page de confirmation
│
├── context/
│ └── CartContext.jsx → (optionnel) gestion globale du panier
│
├── data/
│ └── menu.js → liste des plats (JSON simulé)
│
├── App.jsx
└── main.jsx



---

## 🧩 Étapes de réalisation

### 🥇 Étape 1 : Base et routing
- Mettre en place `react-router-dom` avec :
  - `/` → page **Home**
  - `/cart` → page **Panier**
  - `/checkout` → page **Validation**
- Créer une `Navbar` avec :
  - Liens de navigation
  - Indicateur du nombre d’articles dans le panier  

---

### 🍟 Étape 2 : Le menu
- Créer un fichier `data/menu.js` :
  ```js
  export const menu = [
    { id: 1, name: "Cheese Burger", price: 3500, image: "/img/burger.jpg" },
    { id: 2, name: "Tacos Poulet", price: 2500, image: "/img/tacos.jpg" },
    { id: 3, name: "Frites Deluxe", price: 1500, image: "/img/fries.jpg" },
  ];

- Afficher chaque plat avec un composant <MenuCard />
  - Nom, prix, image
  - Bouton “Ajouter au panier”
  - Animation d’apparition (Framer Motion)
  - Toastify à chaque ajout


### 🛒 Étape 3 : Le panier (Cart)

- Afficher les produits ajoutés :
  - Nom + quantité + prix unitaire
  - Boutons ➕ ➖ ❌
  - Calculer le total général
  - Bouton “Commander”
  - Animation du panier (slide-in ou fade)
  - Toastify pour chaque action (ajout, suppression, confirmation)


### 💳 Étape 4 : Validation (Checkout)
- Afficher un message de confirmation :
  - ✅ "Votre commande a été passée avec succès ! 🍔"
- Vider le panier après validation
- Ajouter une animation d’apparition (Framer Motion)


### 🌙 Étape 5 : Bonus / améliorations possibles
- Thème clair/sombre avec data-theme (DaisyUI)
- Sauvegarde du panier dans localStorage
- Filtrage des plats (catégories : burgers, boissons, desserts, etc.)
- Animation du panier quand on ajoute un produit
- Page d’erreur personnalisée 404


### 🏁 Objectif final

À la fin du projet, tu sauras :

✅ Structurer un projet React complet
✅ Gérer un état global (panier)
✅ Naviguer entre plusieurs pages
✅ Gérer les effets, animations et notifications
✅ Créer une expérience utilisateur fluide et réactive

### 💡 Auteur
Projet réalisé par Joyboy42-8, dans le cadre de sa montée en compétences React ⚛️
