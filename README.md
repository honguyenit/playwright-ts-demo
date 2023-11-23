# playwright-ts-demo-
- Init playwright 
    $ npm init playwright@latest
- Run test
    + General command: 
        $ npx playwright test tests/example.spec.ts
    + On specific project: 
        $ npx playwright test tests/example.spec.ts --project=firefox 
    + Run on UI mode
        $ npx playwright test tests/example.spec.ts  --ui