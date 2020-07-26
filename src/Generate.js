const { StudentDataReader, TeacherDataReader} = require("./DataLayer"); // We can now refer to it as this uncommented out line instead of the two commented lines below
                // const DataLayer = require("./DataLayer");
                // const StudentDataReader = require("./StudentDataReader");
                // const TeacherDataReader = require("./TeacherDataReader");
const fs = require("fs");
const path = require("path");

const baseFilePath = path.join(__dirname, "../JSONData");

if (!fs.existsSync(baseFilePath)) {
    fs.mkdirSync(baseFilePath)
}

let _studentDataSet = new StudentDataReader(path.join(baseFilePath, "Students.json")); // let _studentDataSet = new DataLayer.StudentDataReader(path.join(baseFilePath, "Students.json"));
let _teacherDataSet = new TeacherDataReader(path.join(baseFilePath, "Teachers.json")); // let _teacherDataSet = new DataLayer.TeacherDataReader(path.join(baseFilePath, "Teachers.json"));
// Instead of the above two statements commented out above we can use the above not commented out statements
_teacherDataSet.generateRandomTeachers();
let teacherIds = _teacherDataSet.getArrayFromFile().map(teacher => teacher.id);
_studentDataSet.generateRandomStudents(teacherIds);
