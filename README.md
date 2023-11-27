# playwright-ts-demo-
- Clone projct and run test
    -   Clone git repo
    -   Init playwright (optinal): $ npm init playwright@latest
    -   Install node module playwright/test: $ npm install @playwright/test
    -   Download browsers driver: $ npx playwright install 
    - Run test
        + General command: 
            $ npx playwright test tests/example.spec.ts
        + On specific project: 
            $ npx playwright test tests/example.spec.ts --project=chrome 
        + Run on UI mode (select the test case to run, and when saving the spec file -> the browser will start running automatically)
            $ npx playwright test --ui

- Launch a demo app
 + Clone the repo: $ git clone https://github.com/bondar-artem/pw-practice-app 
 + cd to the repo directory: $ cd /Users/ho.nguyen/Documents/Trainings/Playwright/git-repo/pw-practice-app
 + $ npm install –force
 + $ npm start
 + $ Get the url like http://localhost:4200/