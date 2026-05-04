# contracts

Cross-service shared definitions that eliminate manual synchronization between LIAM services.

----

<details>
<summary><strong>Installation</strong></summary>

The package is distributed directly from git and is not published to npm. To install in a consuming project:

```bash
npm install git+https://github.com/LambdiusLab/contracts.git#v1.0.0
```
> A version tag after `#` is required. Without it, npm will resolve to the latest commit on the default branch.

</details>

----

<details>
<summary><strong>Releasing a new version</strong></summary>


1. Update `version` field in `package.json`.
2. Commit changes:
```bash
git add .
git commit -m "feat: add new message templates"
```
3. Create tag and push:
```bash
git tag v1.1.0
git push origin main --tags
```

</details>

----
