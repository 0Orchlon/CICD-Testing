# How to Intentionally Fail the CI/CD Pipeline

To test if your GitHub Actions or Jenkins pipelines are working correctly, you should occasionally simulate a failure. Here are three ways to do it:

---

## Method 1: The Build Failure (Syntax Error)
The most common way is to introduce a code error that prevents the project from compiling.

1. Open `src/App.tsx`.
2. Add a random string of characters outside of any function or component, for example:
   ```typescript
   export default App;
   this_will_break_the_build; // Syntax Error
   ```
3. **Result**: The `npm run build` step in GitHub Actions/Jenkins will fail with a `TS2304: Cannot find name 'this_will_break_the_build'` error.

---

## Method 2: The Test Failure (Recommended)
This is the "cleanest" way to fail. The code is valid, but the logic is wrong.

1. Create a file `src/fail.test.ts` with this content:
   ```typescript
   import { expect, test } from 'vitest'

   test('intentional failure', () => {
     expect(1 + 1).toBe(3)
   })
   ```
2. Update your `package.json` to include `"test": "vitest run"`.
3. Add `npm test` to your `.github/workflows/deploy.yml` before the build step.
4. **Result**: The pipeline will stop at the `Install & Test` step.

---

## Method 3: The Permission/Config Failure
1. Go to your GitHub repository **Settings > Actions > General**.
2. Change **Workflow permissions** to "Read repository contents and package permissions" (removing "Write").
3. **Result**: The `peaceiris/actions-gh-pages` step will fail with a `403 Permission Denied` (as you saw earlier).

---

### 🔍 Why do this?
A green pipeline is great, but a pipeline that **successfully turns red** when there's an error is what actually protects your production environment.
