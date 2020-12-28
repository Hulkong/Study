// 타입추론(Type Inference)
// 타입스크립트에서는 타입표기가 없는 경우 코드를 읽고 분석하여
// 타입을 유추할 수 있음 

/* number != string
let a = 5;
a = 'abc'
*/

let a = 5;
a = 10;

let student = {
    name: 'hulkong',
    course: 'Getting started with Typescript',
    codingIQ: 80,
    code: function() {
        console.log('brain is wokring hard');
    }
}

// student.name = 10;

function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}