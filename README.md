Here is the fully updated and enhanced `README.md` file for your repository. It incorporates all the exact configurations, tools (`NodeJS-26`), polling triggers (`pollSCM`), and the crucial **Jenkins CSP troubleshooting fix** for rendering HTML reports that we worked through together.

---

# Playwright + TypeScript CI/CD Sample Project

This repository serves as a sample framework for implementing and practicing CI/CD pipelines using **GitHub Actions** and **Jenkins**, running automated UI tests with **Playwright** and **TypeScript**.

---

## 📂 Project Directory Structure

```text
playwright-cicd-demo/
├── .github/
│   └── workflows/
│       └── playwright.yml   # GitHub Actions workflow configuration
├── tests/
│   └── example.spec.ts      # Sample Playwright test file
├── Jenkinsfile              # Jenkins pipeline configuration script
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── playwright.config.ts     # Playwright test runner configuration

```

---

## 🚀 Getting Started Locally

### Prerequisites

* **Node.js** (v18, v20, or v26 as configured in your environment)
* **npm** (comes packaged with Node.js)
* **Git**

### Installation & Execution Steps

1. **Clone the repository:**
```bash
git clone https://github.com/ShivprasadL/Playwright-cicd-demo.git
cd Playwright-cicd-demo

```


2. **Install project dependencies:**
```bash
npm install

```


3. **Install Playwright Browsers:** *(Note: Omit `--with-deps` if running on a Windows environment)*
```bash
npx playwright install

```


4. **Run the tests locally:**
```bash
npx playwright test

```


5. **View the test report:**
```bash
npx playwright show-report

```



---

## ⚙️ CI/CD Pipeline Configurations

### 1. GitHub Actions (`.github/workflows/playwright.yml`)

* **Trigger:** Automatically runs on pushes and pull requests targeting the main branch.
* **Steps Executed:** Checks out code, sets up Node.js, installs dependencies & browsers, runs test suite, and uploads test reports as artifacts.

### 2. Jenkins Pipeline (`Jenkinsfile`)

Your final, optimized `Jenkinsfile` used for local Jenkins execution:

```groovy
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-26' 
    }
    
    triggers {
        pollSCM('H/5 * * * *') // Automatically polls GitHub every 5 minutes for updates
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
            // Publishes the Playwright HTML report to the Jenkins UI dashboard
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}

```

---

## 🛠️ Setting Up and Configuring Jenkins

### Step 1: Create the Pipeline Job

1. Go to your Jenkins Dashboard and click **New Item**.
2. Enter a name (e.g., `Playwright-cicd-demo`) and select **Pipeline**, then click **OK**.
3. Under the **Pipeline** section:
* **Definition:** `Pipeline script from SCM`
* **SCM:** `Git`
* **Repository URL:** `[https://github.com/ShivprasadL/Playwright-cicd-demo](https://github.com/ShivprasadL/Playwright-cicd-demo)`
* **Branch Specifier:** `*/main`
* **Script Path:** `Jenkinsfile`


4. Click **Save**.

### Step 2: Essential Plugins

Make sure you have the **HTML Publisher plugin** installed via **Manage Jenkins $\rightarrow$ Plugins** so Jenkins can render and host your Playwright HTML test results.

### 🔧 Troubleshooting: Fixing Blank HTML Reports in Jenkins

By default, Jenkins implements a strict **Content Security Policy (CSP)** that blocks CSS and JavaScript inside HTML reports, causing published reports to look completely blank.

**How to fix it instantly:**

1. Navigate to your Jenkins Dashboard $\rightarrow$ **Manage Jenkins** $\rightarrow$ **Script Console**.
2. Paste and run the following Groovy script:
```groovy
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")

```


3. Refresh your job build's **Playwright HTML Report** page, and all styles, logs, and interactive layouts will load correctly!