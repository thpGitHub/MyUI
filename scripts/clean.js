const fs = require('fs-extra');
const path = require('path');

async function clean() {
  const distDir = path.join(__dirname, '../dist');
  try {
    await fs.remove(distDir);
    console.log('Cleaned dist directory');
  } catch (err) {
    console.error('Error while cleaning dist directory:', err);
  }
}

clean();
