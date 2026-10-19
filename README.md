# The Almond School - Website

A modern, responsive, minimalistic website for **The Almond School** built with React, Vite, Tailwind CSS, and TypeScript.

---

## ⚠️ Why did VS Code "Live Server" (Port 5500) show a blank page?

**Live Server** in VS Code is only designed for simple, plain static HTML files.

This project is built using modern **React + TypeScript + Vite**. Browsers cannot execute raw `.tsx` files directly without Vite compiling them.

---

## 💻 2 Ways to View This Website on Your Computer

### Option A: The Easiest Way (Instant, No Node.js or Terminal Needed)
We have already pre-compiled the website into the **`dist/`** folder!
1. In VS Code, expand the **`dist`** folder.
2. Right-click on **`dist/index.html`** and select **"Open with Live Server"**.
3. The full website will open in your browser immediately!

---

### Option B: Running the Live Development Server (Vite)
If you want to run the development server with live code editing:

1. Open **VS Code** with this folder.
2. Open the terminal (`Ctrl + ~`).
3. If Windows gives you a script security error (`PSSecurityException`), run this command once:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
4. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
5. Start the server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

- `src/`
  - `components/`
    - `Navbar.tsx` - Top navigation bar with school logo and page links
    - `Hero.tsx` - Welcoming hero section with Admissions 2026–27 badge
    - `PhotoGallery.tsx` - Campus photo gallery with lightbox modal
    - `HomeGalleryPreview.tsx` - Homepage photos showcase
    - `InstagramFeed.tsx` - Live Instagram feed with Meta Developer Tool
    - `AboutUsPage.tsx` - About us page with 7 pillars and philosophy
    - `CurriculumPage.tsx` - Academic programs and 10 learning experiences
    - `FAQPage.tsx` - Searchable frequently asked questions
    - `ContactUsPage.tsx` - Admissions desk contact & campus tour planner
    - `Footer.tsx` - Footer with contact information
    - `gallery/` - Uploaded campus photographs (`img1.webp` through `img11.jpeg`)
    - `logo.webp` - School logo
  - `data/` - School data, programs, FAQs, and gallery mappings
  - `types/` - TypeScript interface definitions
