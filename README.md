# CICD-Testing: Portfolio & Automation Demo (Монгол хэл дээр)

This project is a professional company website designed to showcase modern frontend development and robust CI/CD (Continuous Integration and Continuous Deployment) workflows using **GitHub Actions** and **Jenkins**.

## 🌐 Live Demo & Features
- **Mongolian Localization**: All technical explanations and UI elements are in Mongolian.
- **CI/CD Guide**: Detailed, visual explanations of automation pipelines directly on the site.
- **Light/Dark Mode**: Integrated theme toggle for optimal viewing in any environment.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## 🏗️ CI/CD Overview
This repository serves as a testing ground for automated workflows.

### 1. GitHub Actions (Automated Deployment)
Configured to build and deploy to GitHub Pages automatically on every push to `main`.
- **Workflow**: `.github/workflows/deploy.yml`
- **Key Requirement**: Ensure your repository settings allow **Read and Write permissions** for GitHub Actions.

### 2. Jenkins (Automation Server)
A dedicated `Jenkinsfile` is provided for self-hosted CI/CD automation.
- **Stages**: Checkout -> Install -> Build -> Deploy.
- **Tooling**: Requires Node.js 20+ configured in Jenkins Global Tool Configuration.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧪 Testing Failures
Interested in seeing how the pipeline catches errors? 
Check out [FAILING_DEMO.md](./FAILING_DEMO.md) for step-by-step instructions on how to intentionally break the build for testing purposes.

---

## 📝 License
MIT
