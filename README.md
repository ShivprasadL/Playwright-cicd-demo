Here is the fully updated and corrected `README.md` file content. It now includes instructions on your GitHub Actions setup, the reporting badge, and all the correct configurations.

---

```markdown
# Playwright + TypeScript CI/CD Sample Project

This repository serves as a sample framework for practicing and implementing CI/CD pipelines using **GitHub Actions** and **Jenkins**, running automated UI tests with **Playwright** and **TypeScript**.

[![Playwright Tests](https://github.com/ShivprasadL/Playwright-cicd-demo/actions/workflows/playwright.yml/badge.svg)](https://github.com/ShivprasadL/Playwright-cicd-demo/actions/workflows/playwright.yml)

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

* **Node.js** (LTS version recommended)
* **npm** (comes with Node.js)

### Installation Steps

1. **Clone the repository:**
```bash
git clone [https://github.com/ShivprasadL/Playwright-cicd-demo.git](https://github.com/ShivprasadL/Playwright-cicd-demo.git)
cd Playwright-cicd-demo

```


2. **Install project dependencies:**
```bash
npm ci

```


3. **Install Playwright Browsers (with system dependencies):**
```bash
npx playwright install --with-deps

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

* **Trigger:** Automatically runs on every `push` or `pull_request` to the `main` or `master` branches.
* **Steps Executed:**
1. Checks out the code.
2. Sets up Node.js (using `lts/*`).
3. Installs dependencies (`npm ci`).
4. Installs Playwright browsers and system dependencies (`npx playwright install --with-deps`).
5. Executes the test suite (`npx playwright test`).
6. **HTML Test Reporting:** Automatically packages and uploads the Playwright HTML report as a downloadable artifact (retained for 30 days) even if tests fail (`if: ${{ !cancelled() }}`).



### 2. Jenkins Pipeline (`Jenkinsfile`)

* **Trigger:** Manual or SCM-polled builds via Jenkins.
* **Pipeline Stages:**
1. **Checkout:** Pulls source code from your Git repository.
2. **Install Dependencies:** Runs `npm ci`.
3. **Install Playwright Browsers:** Installs necessary browser binaries (`npx playwright install --with-deps`).
4. **Run Tests:** Executes `npx playwright test`.
5. **Post-Build Actions:** Archives the Playwright HTML report and cleans up the workspace.



---

## 🛠️ Setting Up Jenkins Job

To run this pipeline in Jenkins:

1. Create a **New Item** in your Jenkins dashboard.
2. Select **Pipeline** and give it a name (e.g., `playwright-demo`).
3. Under the **Pipeline** section:
* Set **Definition** to **Pipeline script from SCM**.
* Set **SCM** to **Git**.
* Enter your Repository URL: `https://github.com/ShivprasadL/Playwright-cicd-demo`.
* Add **Credentials** (if your repository is private; leave as `- none -` if public).
* Ensure the **Branches to build** matches your default branch (`*/main` or `*/master`).
* Set the **Script Path** to `Jenkinsfile`.


4. Click **Save** and select **Build Now**.

```

```