import { readFile, writeFile } from 'fs/promises';

const packageJsonPath = './package.json'; // Chemin vers votre package.json

async function fixPackageJson() {
  try {
    const data = await readFile(packageJsonPath, 'utf8');
    let packageJson = JSON.parse(data);

    // Correction de la dépendance 'lowdash' en 'lodash'
    if (packageJson.dependencies && packageJson.dependencies.lowdash) {
      packageJson.dependencies.lodash = "^4.17.21"; // Version la plus récente de lodash au moment de l'écriture
      delete packageJson.dependencies.lowdash; // Supprimer l'entrée incorrecte
    }

    // Remplacer 'npm-run-all2' par 'npm-run-all' dans devDependencies
    if (packageJson.devDependencies && packageJson.devDependencies['npm-run-all2']) {
      packageJson.devDependencies['npm-run-all'] = "^4.1.5"; // Utiliser la dernière version de npm-run-all
      delete packageJson.devDependencies['npm-run-all2']; // Supprimer l'entrée incorrecte
    }

    // Écrire les modifications dans le fichier package.json
    await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log("Le fichier package.json a été mis à jour avec succès.");
  } catch (err) {
    console.error("Erreur lors de la manipulation du fichier package.json:", err);
  }
}

fixPackageJson();
