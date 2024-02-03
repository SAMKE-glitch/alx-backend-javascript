const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsPerField = await readDatabase(req.query.database);
      res.status(200).send('This is the list of our students\n');
      Object.keys(studentsPerField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((field) => {
        const studentsList = studentsPerField[field].join(', ');
        res.write(`Number of students in ${field}: ${studentsPerField[field].length}. List: ${studentsList}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send(`Internal Server Error: ${error.message}\n`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE\n');
      return;
    }

    try {
      const studentsPerField = await readDatabase(req.query.database);
      const studentsList = studentsPerField[major].join(', ');
      res.status(200).send(`List: ${studentsList}\n`);
    } catch (error) {
      res.status(500).send(`Internal Server Error: ${error.message}\n`);
    }
  }
}

module.exports = StudentsController;