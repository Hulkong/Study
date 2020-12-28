// async & await
// clear style of using promise :)

const { reject } = require('async');

// 동기를 보장하지 못하는 코드
function fetchUser() {
    // do network request in 10 secs....
    return 'hulkong'
}

const user = fetchUser();
console.log(user);

// 위의 코드를 promise로 변환
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('hulkong');
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 1. async
async function fetchUser() {
    // do network request in 10 secs....
    return 'hulkong';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    // throw 'error';
    return '🍎'
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// 콜백지옥
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    });
}

// 개선코드
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// 에러처리
async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    } catch (error) {
        console.log(error);
    }
}

// 병렬처리(안 이쁜 코드)
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
