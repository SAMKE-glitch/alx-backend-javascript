const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const result = [];
    data.split('\n').forEach((line) => {
      result.push(line.split(','));
    });
    result.shift();
    const studentsPerField = {};
    result.forEach((line) => {
      const [firstname, , , field] = line;
      if (!studentsPerField[field]) {
        studentsPerField[field] = [];
      }
      studentsPerField[field].push(firstname);
    });
    return studentsPerField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };