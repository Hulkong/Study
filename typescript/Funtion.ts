// 함수의 타입 명시
// 함수의 반환 (Return) 타입
// 함수의 매개변수 (Parameter)

/**
function 함수이름 (매개변수1, 매개변수2): 함수의 반환타입 {}
 */

function sendGreeting(message: string, userName: string): void {
    console.log(`${message}, ${userName}`);
}

sendGreeting('Heelo', 'Mark');

sendGreeting('Heelo');

// 선택적 매개변수(Optional Parameter)
// 선택적 매개변수들은 필수 매개변수 뒤에 위치!!

function sendGreeting1(message: string, userName?: string): void {
    console.log(`${message}, ${userName}`);
}

sendGreeting1('Heelo');

function sendGreeting2(message = 'hello', userName = 'there'): void {
    console.log(`${message}, ${userName}`);
}

sendGreeting2();
sendGreeting2('Good morning');
sendGreeting2('Good morning', 'Hulkong');