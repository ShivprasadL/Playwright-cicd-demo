pipeline {
    agent any

    tools {
        // Ensure you have a Node.js tool configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS-26' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // On Windows, drop '--with-deps' because it is only for Linux system packages
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Archive the HTML report so you can view it inside Jenkins
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
        cleanup {
            cleanWs()
        }
    }
}