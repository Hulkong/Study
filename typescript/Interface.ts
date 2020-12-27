
let student = {
    studentID: 10,
    studentName : 'hulkong',
    age: 21,
    gender: 'male',
    subject: 'Typescript',
    courseCompleted: false
}

interface Student {
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
    // addComment(comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudentDetail(studentID:number): Student 
{
    return {
        studentID: 12345,
        studentName: 'hulkong',
        gender: 'male',
        subject: 'Typescript',
        courseCompleted:  true
    };
}

function saveStudentDetail(student: Student): void {
    student.studentID = 1234;
}

saveStudentDetail(student);