# CICD-Testing: Portfolio & Automation Demo

This project serves as a modern portfolio site and a testing ground for Continuous Integration and Continuous Deployment (CI/CD) workflows using **GitHub Actions** and **Jenkins**.

## 🚀 The Portfolio Site
Built with:
- **Vite** (Next-generation frontend tooling)
- **React** (Component-based UI)
- **TypeScript** (Type-safe development)
- **Vanilla CSS** (Modern, responsive design)

---

## 🏗️ CI/CD Overview
CI/CD is the practice of automating the integration of code changes and their subsequent deployment to production or staging environments.

### 1. GitHub Actions Setup
GitHub Actions is a built-in CI/CD tool that allows you to automate your workflow directly in your GitHub repository.

#### Configuration:
Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install & Build
        run: |
          npm install
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 2. Jenkins Setup
Jenkins is an open-source automation server that can be hosted on your own infrastructure.

#### Requirements:
- Jenkins server installed.
- Node.js and Git plugins installed.

#### Jenkinsfile Configuration:
Create a `Jenkinsfile` in the root directory:

```groovy
pipeline {
    agent any
    
    tools {
        nodejs 'node-20' // Ensure this name matches your Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Example deployment step
                echo 'Deploying to web server...'
                sh 'scp -r dist/* user@your-server:/var/www/portfolio'
            }
        }
    }
}
```

#### How to trigger:
1. Create a "Pipeline" job in Jenkins.
2. Under "Pipeline", select "Pipeline script from SCM".
3. Provide your Repository URL and branch.
4. Jenkins will automatically pick up the `Jenkinsfile`.

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

## 📝 License
MIT
