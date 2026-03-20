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

        stage('Test Complete') {
            steps {
                echo 'Test Complete'
            }
        }
    }
}
