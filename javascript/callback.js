'use strict';

// Javascript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration

// Synchronous callback
function printImmediatly(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}


console.log(1);  // 동기
setTimeout(() => console.log(2), 1000); // 비동기
console.log(3);  // 동기
printImmediatly(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'hulkong' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'hulkong') {
                onSuccess({ name: 'hulkong', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hellow ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        )
    }
)