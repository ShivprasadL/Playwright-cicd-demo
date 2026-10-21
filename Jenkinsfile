pipeline {
    agent any

    tools {
        // Ensure you have a Node.js tool configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS-26' 
    }
    triggers {
        githubPush() // Listens for GitHub push events
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
            // Publish Playwright HTML Report first so Jenkins can copy the files
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                stripArchive: true
            ])
        }
        success {
            // Optional: Do extra things on success
        }
        failure {
            // Optional: Do extra things on failure
        }
    }
}