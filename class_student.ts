// class_student.ts
// Assignment 2: Student and Course Management System

// Course class (วิชาเรียน)
class Course {
    private courseName: string;
    private grade: number;

    constructor(courseName: string, grade: number) {
        this.courseName = courseName;
        this.grade = grade;
    }

    // Getter methods
    getCourseName(): string {
        return this.courseName;
    }

    getGrade(): number {
        return this.grade;
    }

    // Display course information
    displayCourse(): string {
        return `${this.courseName}: ${this.grade.toFixed(1)}`;
    }
}

// Student class (นักศึกษา)
class Student {
    private studentID: string;
    private name: string;
    private courses: Course[];

    constructor(studentID: string, name: string, courses: Course[] = []) {
        this.studentID = studentID;
        this.name = name;
        this.courses = courses;
    }

    // Method to add new course
    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`✅ Added course "${course.getCourseName()}" grade ${course.getGrade()} for ${this.name}`);
    }

    // Method to calculate average grade
    getAverage(): number {
        if (this.courses.length === 0) return 0;
        
        const totalGrade = this.courses.reduce((sum, course) => sum + course.getGrade(), 0);
        return Math.round((totalGrade / this.courses.length) * 100) / 100;
    }

    // Getter methods
    getStudentID(): string {
        return this.studentID;
    }

    getName(): string {
        return this.name;
    }

    getCourses(): Course[] {
        return this.courses;
    }

    // Method to find highest and lowest grades
    getGradeStats(): { highest: number, lowest: number, highestCourse: string, lowestCourse: string } {
        if (this.courses.length === 0) {
            return { highest: 0, lowest: 0, highestCourse: "", lowestCourse: "" };
        }

        let highest: Course = this.courses[0]!;
        let lowest: Course = this.courses[0]!;

        this.courses.forEach(course => {
            if (course.getGrade() > highest.getGrade()) highest = course;
            if (course.getGrade() < lowest.getGrade()) lowest = course;
        });

        return {
            highest: highest.getGrade(),
            lowest: lowest.getGrade(),
            highestCourse: highest.getCourseName(),
            lowestCourse: lowest.getCourseName()
        };
    }

    // Display student information
    displayStudentInfo(): void {
        console.log(`🎓 ID: ${this.studentID} | Name: ${this.name}`);
        console.log("📚 Courses:");
        this.courses.forEach((course, index) => {
            console.log(`   ${index + 1}. ${course.displayCourse()}`);
        });
        
        const stats = this.getGradeStats();
        console.log(`📊 Average Grade: ${this.getAverage()}`);
        if (stats.highestCourse) {
            console.log(`🏆 Highest Grade: ${stats.highest} (${stats.highestCourse})`);
            console.log(`📉 Lowest Grade: ${stats.lowest} (${stats.lowestCourse})`);
        }
        console.log("─".repeat(60));
    }
}

// Main execution
console.log("========== Assignment 2: Student Management System ==========\n");

// Create 3 students with 4 courses each
const students: Student[] = [
    new Student("66010001", "Alice Johnson", [
        new Course("Computer Science 101", 4.0),
        new Course("Data Structures", 3.8),
        new Course("Algorithms", 3.9),
        new Course("Database Systems", 3.7)
    ]),
    
    new Student("66010002", "Bob Smith", [
        new Course("Mathematics 101", 3.5),
        new Course("Statistics", 3.9),
        new Course("Linear Algebra", 3.2),
        new Course("Calculus", 3.8)
    ]),
    
    new Student("66010003", "Carol Davis", [
        new Course("Physics 101", 4.0),
        new Course("Chemistry", 3.6),
        new Course("Biology", 3.9),
        new Course("Environmental Science", 3.1)
    ])
];

// Display all student information (initial data)
console.log("=== 📋 All Students Information (Initial) ===");
students.forEach(student => {
    student.displayStudentInfo();
});

console.log("\n=== 📝 Adding New Courses for Students ===");
// Add one new course for each student
students[0]!.addCourse(new Course("Web Development", 3.5));
students[1]!.addCourse(new Course("Machine Learning", 3.6));
students[2]!.addCourse(new Course("Organic Chemistry", 3.8));

console.log("\n=== 📊 All Students Information (After Adding Courses) ===");
// Display all student information after adding courses
students.forEach(student => {
    student.displayStudentInfo();
});

// Additional statistics
console.log("=== 🏅 Academic Summary ===");
let totalAverage = 0;
let bestStudent: Student = students[0]!;
let worstStudent: Student = students[0]!;

students.forEach(student => {
    const avg = student.getAverage();
    totalAverage += avg;
    
    if (avg > bestStudent.getAverage()) bestStudent = student;
    if (avg < worstStudent.getAverage()) worstStudent = student;
    
    console.log(`${student.getName()}: ${avg} GPA`);
});

console.log(`\n🎯 Overall Average GPA: ${(totalAverage / students.length).toFixed(2)}`);
console.log(`🥇 Top Student: ${bestStudent.getName()} (${bestStudent.getAverage()} GPA)`);
console.log(`📚 Student with Room for Improvement: ${worstStudent.getName()} (${worstStudent.getAverage()} GPA)`);