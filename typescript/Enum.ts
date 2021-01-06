// Enum이란, 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단

enum GenderType {
    Male,
    Female,
    genderNeutral
}

enum GenderType1 {
    Male = 'male',
    Female = 'female',
    genderNeutral = 'genderNeutral'
}

let student = {
    studentID: 10,
    studentName: 'hulkong',
    age: 21,
    gender: 'male',
    subject: 'Typescript',
    courseCompleted: false
}

interface Student {
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: GenderType;
    // gender: 'male' | 'female' | 'genderNeutral';
    subject: string;
    courseCompleted: boolean;
    // addComment(comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudentDetail(studentID: number): Student {
    return {
        studentID: 12345,
        studentName: 'hulkong',
        gender: GenderType.Male,
        // gender: 'male',
        subject: 'Typescript',
        courseCompleted: true
    };
}