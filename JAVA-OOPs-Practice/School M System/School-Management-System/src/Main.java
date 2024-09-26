public class Main {
    public static void main(String[] args) {
        System.out.println("School Management System!");
        /*
            Goal - To manage students, teachers, and courses in a school setting.
            Features & Concepts :
                •	Class & Objects - Create classes like Student, Teacher, Course, and Grade.
                •	Encapsulation - Use private fields for student details like marks, and provide methods to modify or access them.
                •	Inheritance - Create different types of courses (MathCourse, ScienceCourse) inheriting from a base Course class.
                •	Polymorphism - Overload methods like enrollStudent() to allow enrolling multiple students at once or one by one.
                •	Abstraction - Abstract class Course with abstract methods like calculateGrade().

            Tasks and Steps :

            1. Class Design Overview
               You need to create the following classes -
                    •	Student
                    •	Teacher
                    •	Course (Abstract Class)
                    •	MathCourse (extends Course)
                    •	ScienceCourse (extends Course)

            2. Step-by-Step Breakdown
               Class - Student
                    •	Concepts - Encapsulation, Classes & Objects
                    •	Attributes -
                        •	String name
                        •	int studentId
                        •	List<Course> enrolledCourses (to store the courses a student is enrolled in)
                        •	Map<Course, Grade> (to track the grade per course)
                    •	Methods -
                        •	Constructor: Initialize name, studentId, and create empty lists for courses.
                        •	Getters & Setters: For name, studentId, and enrolledCourses.
                        •	Method: enrollInCourse(Course course): Adds the course to enrolledCourses.
                        •	Method: getGrade(Course course): Returns the grade for a specific course.
               Class - Teacher
                    •	Concepts: Encapsulation, Classes & Objects
                    •	Attributes -
                        •	String name
                        •	int teacherId
                        •	List<Course> coursesTaught
                    •	Methods -
                        •	Constructor: Initialize name, teacherId, and empty lists for courses.
                        •	Getters & Setters: For name, teacherId, and coursesTaught.
                        •	Method: assignCourse(Course course): Adds the course to coursesTaught.

                Abstract Class - Course
                    •	Concepts: Encapsulation, Abstraction
                    •	Attributes -
                        •	String courseName
                        •	Teacher teacher
                        •	List<Student> enrolledStudents
                    •	Methods -
                        •	Constructor: Initialize courseName, teacher, and empty list for enrolledStudents.
                        •	Getters & Setters: For courseName, teacher, and enrolledStudents.
                        •	Method: enrollStudent(Student student): Adds the student to enrolledStudents.
                        •	Abstract Method: calculateGrade(Student student): Abstract method for grade calculation, to be implemented in subclasses.

                Subclass - MathCourse (extends Course)
                    •	Concepts: Inheritance, Polymorphism
                    •	Attributes - Inherits from Course
                    •	Methods -
                        •	Override: calculateGrade(Student student): Define grade calculation logic specific to Math.

                Subclass - ScienceCourse (extends Course)
                    •	Concepts: Inheritance, Polymorphism
                    •	Attributes - Inherits from Course
                    •	Methods -
                        •	Override: calculateGrade(Student student): Define grade calculation logic specific to Science.

                Class - Grade
                    •	Concepts: Encapsulation
                    •	Attributes -
                        •	double marks
                        •	String gradeLetter
                    •	Methods -
                        •	Constructor: Initialize marks, gradeLetter.
                        •	Getters & Setters: For marks, gradeLetter.

            3. Features & Methods
                    Polymorphism with enrollStudent()
                        •	In the Course class, overload the enrollStudent() method -
                            •	enrollStudent(Student student): Enrolls a single student.
                            •	enrollStudent(List students): Enrolls multiple students at once by looping through the list.

            4. Practical Steps Summary
                    •	Classes - Create 5 main classes (Student, Teacher, Course, MathCourse, ScienceCourse).
                    •	Attributes - Define fields in each class using private access modifiers.
                    •	Encapsulation - Provide public getters and setters to modify/access private fields.
                    •	Inheritance - Use Course as the base class, extend it for MathCourse and ScienceCourse.
                    •	Polymorphism - Overload methods in Course for enrolling one or multiple students.
                    •	Abstraction - Use an abstract method calculateGrade() in Course and implement it in subclasses.

        */
    }
}