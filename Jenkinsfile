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
                echo 'Deploying to web server...'
                // Example using the sshPublisher plugin (ensure SSH connection is configured in Jenkins)
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'MyWebServer', 
                    transfers: [sshTransfer(
                        sourceFiles: 'dist/**/*', // Make sure the build files are under dist/ directory
                        remoteDirectory: '/var/www/html', // Adjust to your server's web folder
                        cleanRemote: false
                    )],
                    verbose: true
                )])

                // Alternatively, you could use SCP instead of sshPublisher
                // sh 'scp -r dist/* user@your-server:/var/www/html'
            }
        }
    }
}
