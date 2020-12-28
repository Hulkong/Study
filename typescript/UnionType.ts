// Union Type: 제한된 타입들을 동시에 지정하고 싶을 때
// let somevalue: number | string

let price: number | string = 5;
price = 'free';
price = false;

// Type Alias: 같은 코드를 반복하는 것보다는 코드를 타입으로 지정하고 재활용!
type StrOrNum = number | string;
let itemPrice: number;

const setItemPrice = (price: StrOrNum): void => {
    if (typeof price === 'string') {
        itemPrice = 0;
    } else {
        itemPrice = price;
    }
}

setItemPrice(50);