//1. Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність, отримати середнє відвідування, отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), а також отримати всю інформацію про студента.
/*function Student(firstName, lastName, birthYear, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.course = course;
  this.grades = []; 
  this.attendance = []; 

  this.addGrade = function(grade) {
    this.grades.push(grade);
  };

  this.addAttendance = function(attended) {
    this.attendance.push(attended);
  };

  
  this.getAverageGrade = function() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return this.grades.length > 0 ? total / this.grades.length : 0;
  };

  
  this.getAverageAttendance = function() {
    const total = this.attendance.reduce((sum, attended) => sum + attended, 0);
    return this.attendance.length > 0 ? total / this.attendance.length : 0;
  };

  
  this.getAttendedClasses = function() {
    return this.attendance.filter(attended => attended === 1).length;
  };

  
  this.changeCourse = function(newCourse) {
    this.course = newCourse;
    this.grades = []; 
    this.attendance = []; 
  };

  
  this.getStudentInfo = function() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthYear: this.birthYear,
      course: this.course,
      grades: this.grades,
      attendance: this.attendance,
      averageGrade: this.getAverageGrade(),
      averageAttendance: this.getAverageAttendance(),
      attendedClasses: this.getAttendedClasses(),
    };
  };
}


const student = new Student('John', 'Doe', 2000, 1);


student.addGrade(5);
student.addGrade(4);
student.addGrade(3);
student.addAttendance(1); 
student.addAttendance(0); 

console.log(student.getStudentInfo());


student.changeCourse(2);


student.addGrade(4);
student.addGrade(5);
student.addAttendance(1); 


console.log(student.getStudentInfo());
*/


//2. Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
/*function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.courses = []; 
  
  
  this.addCourse = function(course) {
    
    if (!this.courses.some(c => c.course === course)) {
      
      this.courses.push({ course: course, grades: [], attendance: [] });
    }
  };

 
  this.removeCourse = function(course) {
    const index = this.courses.findIndex(c => c.course === course);
    if (index !== -1) {
      this.courses.splice(index, 1); 
    }
  };

 
  this.addGrade = function(course, grade) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      courseData.grades.push(grade);
    }
  };

 
  this.addAttendance = function(course, attended) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      courseData.attendance.push(attended);
    }
  };

  
  this.getAverageGrade = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData && courseData.grades.length > 0) {
      const total = courseData.grades.reduce((sum, grade) => sum + grade, 0);
      return total / courseData.grades.length;
    }
    return 0;
  };

  
  this.getAverageAttendance = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData && courseData.attendance.length > 0) {
      const total = courseData.attendance.reduce((sum, attended) => sum + attended, 0);
      return total / courseData.attendance.length;
    }
    return 0;
  };

  
  this.getAttendedClasses = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      return courseData.attendance.filter(attended => attended === 1).length;
    }
    return 0;
  };

  
  this.getStudentInfo = function() {
    const studentInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthYear: this.birthYear,
      courses: this.courses.map(courseData => ({
        course: courseData.course,
        grades: courseData.grades,
        attendance: courseData.attendance,
        averageGrade: this.getAverageGrade(courseData.course),
        averageAttendance: this.getAverageAttendance(courseData.course),
        attendedClasses: this.getAttendedClasses(courseData.course),
      }))
    };
    return studentInfo;
  };

  
  this.getCourseData = function(course) {
    return this.courses.find(courseData => courseData.course === course);
  };
}


const student = new Student('John', 'Doe', 2000);


student.addCourse(1);
student.addCourse(2);


student.addGrade(1, 5);
student.addGrade(1, 4);
student.addAttendance(1, 1);
student.addAttendance(1, 0);


student.addGrade(2, 3);
student.addGrade(2, 2);
student.addAttendance(2, 1);
student.addAttendance(2, 1);


console.log(student.getStudentInfo());

student.removeCourse(2);

console.log(student.getStudentInfo());
*/

//3. Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів, а також одержання рейтингу студентів за відвідуваністю і успішністю.

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.courses = []; 
  
  this.addCourse = function(course) {
    if (!this.courses.some(c => c.course === course)) {
      this.courses.push({ course: course, grades: [], attendance: [] });
    }
  };

  this.removeCourse = function(course) {
    const index = this.courses.findIndex(c => c.course === course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  };

  this.addGrade = function(course, grade) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      courseData.grades.push(grade);
    }
  };

  this.addAttendance = function(course, attended) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      courseData.attendance.push(attended);
    }
  };

  this.getAverageGrade = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData && courseData.grades.length > 0) {
      const total = courseData.grades.reduce((sum, grade) => sum + grade, 0);
      return total / courseData.grades.length;
    }
    return 0;
  };

  this.getAverageAttendance = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData && courseData.attendance.length > 0) {
      const total = courseData.attendance.reduce((sum, attended) => sum + attended, 0);
      return total / courseData.attendance.length;
    }
    return 0;
  };

  this.getAttendedClasses = function(course) {
    const courseData = this.getCourseData(course);
    if (courseData) {
      return courseData.attendance.filter(attended => attended === 1).length;
    }
    return 0;
  };

  this.getStudentInfo = function() {
    const studentInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthYear: this.birthYear,
      courses: this.courses.map(courseData => ({
        course: courseData.course,
        grades: courseData.grades,
        attendance: courseData.attendance,
        averageGrade: this.getAverageGrade(courseData.course),
        averageAttendance: this.getAverageAttendance(courseData.course),
        attendedClasses: this.getAttendedClasses(courseData.course),
      }))
    };
    return studentInfo;
  };

  this.getCourseData = function(course) {
    return this.courses.find(courseData => courseData.course === course);
  };
}



function Group() {
  this.students = []; 

  
  this.addStudent = function(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  };

  
  this.removeStudent = function(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  };

  
  this.getSuccessRanking = function(course) {
    return this.students
      .map(student => {
        const avgGrade = student.getAverageGrade(course);
        return { student: student.firstName + " " + student.lastName, averageGrade: avgGrade };
      })
      .sort((a, b) => b.averageGrade - a.averageGrade);
  };

  
  this.getAttendanceRanking = function(course) {
    return this.students
      .map(student => {
        const avgAttendance = student.getAverageAttendance(course);
        return { student: student.firstName + " " + student.lastName, averageAttendance: avgAttendance };
      })
      .sort((a, b) => b.averageAttendance - a.averageAttendance);
  };

  
  this.getGroupInfo = function() {
    return this.students.map(student => student.getStudentInfo());
  };
}



const student1 = new Student('John', 'Doe', 2000);
const student2 = new Student('Jane', 'Smith', 2001);
const student3 = new Student('Alice', 'Johnson', 2002);


student1.addCourse(1);
student2.addCourse(1);
student3.addCourse(1);


student1.addGrade(1, 5);
student1.addGrade(1, 4);
student1.addAttendance(1, 1);
student1.addAttendance(1, 1);

student2.addGrade(1, 3);
student2.addGrade(1, 2);
student2.addAttendance(1, 1);
student2.addAttendance(1, 0);

student3.addGrade(1, 4);
student3.addGrade(1, 3);
student3.addAttendance(1, 1);
student3.addAttendance(1, 1);


const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);


console.log(group.getGroupInfo());


console.log('Рейтинг за успішністю:', group.getSuccessRanking(1));


console.log('Рейтинг за відвідуваністю:', group.getAttendanceRanking(1));


group.removeStudent(student2);


console.log(group.getGroupInfo());


