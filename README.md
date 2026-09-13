# 🧱 Dev Stack Builder

A modern, fast, and responsive React web application that helps developers explore leading web technologies and curate their personalized development stack. Users can browse categorized technologies, view ratings and badges, add items to their personal stack with duplicate prevention, and manage their stack seamlessly with real-time notifications.

---

## 🌐 Live Website

- **Live Demo:** [https://b14-a05-dev-stack-tau.vercel.app/](https://b14-a05-dev-stack-tau.vercel.app/)

## 📂 GitHub Repository

- **GitHub Repo:** [https://github.com/mahmudulhasanmaruf78/B14-A05-DevStack](https://github.com/mahmudulhasanmaruf78/B14-A05-DevStack)

---

## 📖 Project Description

**Dev Stack Builder** is an interactive web platform designed for developers, engineering teams, and students seeking to assemble the ideal toolset for modern software projects. 

The website loads technology information dynamically from a structured JSON dataset and renders it in an intuitive, multi-column card layout. Developers can inspect technology categories, difficulty levels, and ratings, add individual technologies to their stack, and monitor selection counts through a sticky sidebar. 

The UI features a unified brand gradient theme (Orange → Pink → Violet), smooth animations, accessible component layouts, and responsive design across desktop, tablet, and mobile displays.

---

## 🛠️ Technologies Used

- **React 19** — Component-based user interface architecture
- **JavaScript (ES6+)** — Modern application logic and asynchronous operations
- **Vite** — High-performance frontend build tool and development server
- **Tailwind CSS v4** — Utility-first styling framework
- **DaisyUI v5** — Accessible and lightweight component kit
- **React-Toastify** — Interactive toast notifications for user actions
- **JSON** — Structured technology data source
- **HTML5 & Modern CSS** — Semantic markup, custom properties, and responsive layouts
- **Git & GitHub** — Version control and collaboration

---

## ✨ Key Features

### 1. 🧰 Interactive Stack Builder with Duplicate Prevention
Users can explore technologies and click **"Add to Stack"** to add any item to their custom stack. The button automatically switches to a disabled `"✓ Added to Stack"` state. If a duplicate attempt is made, a warning notification is displayed.

### 2. 📱 Fully Responsive Layout & Mobile Hamburger Menu
The site adapts smoothly across all screen sizes:
- **Desktop:** Sticky navbar with brand logo, center navigation links, action buttons, and side-by-side technology grid with a sticky sidebar.
- **Mobile/Tablet:** Smart mobile navbar with hamburger dropdown menu, centered brand logo, responsive single-to-two-column card grid, and stack manager.

### 3. 🔔 Real-time Notifications & Flexible Stack Management
Powered by `react-toastify`, users receive instant, clear feedback whenever an item is added, removed, or when the entire stack is cleared via the `"Remove All"` action. State updates instantly revert individual card buttons to an active state.

---

# 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript files. It makes writing React components intuitive and visual while combining the full power of JavaScript expressions inside curly braces `{}`.

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component down to a child component. The child cannot modify its props directly.
- **State:** Internal, mutable data managed within a component that can change over time based on user interactions or asynchronous operations. When state updates, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook lets functional components declare and update local state variables. In this project, `useState` is used in `App.jsx` to:
1. Store the loaded technologies array (`technologies`).
2. Track the user's selected stack (`stack`).
3. Manage the asynchronous loading indicator (`loading`).
4. Handle fetch errors (`error`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` handles side effects in functional components (such as data fetching, subscriptions, or DOM modifications) after the component renders. In this project, `useEffect` with an empty dependency array `[]` was used to fetch `/technologies.json` once when the application initially mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React relies on unique `key` props to track which items in a dynamically rendered list have changed, been added, or been removed. This allows React's reconciliation algorithm (virtual DOM) to efficiently update only the modified DOM elements rather than re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the practice of displaying different UI elements or components based on specific conditions or state.  
In this project, conditional rendering is used in `StackSidebar.jsx`:
```jsx
{stack.length === 0 ? (
  <div className="empty-state">Your stack is empty</div>
) : (
  <div className="item-list">{/* Selected Technologies */}</div>
)}
```
When `stack.length === 0`, the empty dashed card is rendered; otherwise, the list of selected technologies and the "Remove All" button are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed downwards through **props** (e.g., `<StackSidebar stack={stack} />`).
- **Child to Parent:** The parent passes a callback function as a prop to the child (e.g., `onRemove={handleRemoveFromStack}`). When an event triggers in the child (such as clicking the `✕` button), the child invokes that callback function, sending parameters back up to update the parent's state.
