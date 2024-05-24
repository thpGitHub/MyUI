const fs = require('fs-extra');
const path = require('path');

async function reorganize() {
  const componentsSrcDir = path.join(__dirname, '../dist/components/src/components');
  const componentsDestDir = path.join(__dirname, '../dist/components');

  try {
    // Ensure the destination directory exists
    await fs.ensureDir(componentsDestDir);

    // Copy each component directory to the dist/components directory
    if (await fs.pathExists(componentsSrcDir)) {
      const componentDirs = await fs.readdir(componentsSrcDir);
      for (const dir of componentDirs) {
        const srcDir = path.join(componentsSrcDir, dir);
        const destComponentDir = path.join(componentsDestDir, dir);
        await fs.copy(srcDir, destComponentDir);
      }
    }

    // Remove the unnecessary src directory if it exists
    const componentsSrcBaseDir = path.join(__dirname, '../dist/components/src');
    if (await fs.pathExists(componentsSrcBaseDir)) {
      await fs.remove(componentsSrcBaseDir);
    }

    console.log('Files reorganized successfully');
  } catch (err) {
    console.error('Error while reorganizing files:', err);
    process.exit(1);
  }
}

reorganize();


// const fs = require('fs-extra');
// const path = require('path');

// async function reorganize() {
//   const componentsDir = path.join(__dirname, '../dist/components/src/components');
//   const destDir = path.join(__dirname, '../dist/components');

//   // Ensure the destination directory exists
//   await fs.ensureDir(destDir);

//   // Copy each component directory to the dist/components directory
//   const componentDirs = await fs.readdir(componentsDir);
//   for (const dir of componentDirs) {
//     const srcDir = path.join(componentsDir, dir);
//     const destComponentDir = path.join(destDir, dir);
//     await fs.copy(srcDir, destComponentDir);
//   }

//   // Remove the unnecessary src directory
//   await fs.remove(path.join(__dirname, '../dist/components/src'));
// }

// reorganize().then(() => {
//   console.log('Files reorganized successfully');
// }).catch(err => {
//   console.error('Error while reorganizing files:', err);
//   process.exit(1);
// });


// const fs = require('fs-extra');
// const path = require('path');

// async function reorganize() {
//   const srcDir = path.join(__dirname, '../dist/components/src/components');
//   const destDir = path.join(__dirname, '../dist/components');

//   // Ensure the destination directory exists
//   await fs.ensureDir(destDir);

//   // Copy files from src/components to dist/components
//   await fs.copy(srcDir, destDir);

//   // Remove the unnecessary src directory
//   await fs.remove(path.join(__dirname, '../dist/components/src'));
// }

// reorganize().then(() => {
//   console.log('Files reorganized successfully');
// }).catch(err => {
//   console.error('Error while reorganizing files:', err);
//   process.exit(1);
// });
