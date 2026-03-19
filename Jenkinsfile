pipeline {
    agent any
    
    tools {
        nodejs 'nodejs' // Ensure this name matches your Jenkins Global Tool Configuration
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
                // sh 'scp -r dist/* user@your-server:/var/www/portfolio'
            }
        }
    }
}
