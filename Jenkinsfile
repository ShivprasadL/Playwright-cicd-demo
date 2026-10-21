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
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // If running on Linux agent without pre-installed dependencies, use npx playwright install --with-deps
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
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