/*
const s = Symbol('key');
console.log(s);

const s2 = Symbol('Key')
console.log(s2);
*/

const key = Symbol('key');

const option = {
    url: 'http://some.address.com',
    [key]: 'klhl/lijskhfls',
};

for(const key in option) {
    console.log(key);
};

// Symbol для генерації унікальних значень

const THEMES = {
    LIGHT: Symbol('light'),
    DARK: Symbol('dark'),
};

const theme = THEMES.DARK;

switch(theme) {
    case THEMES.DARK:
        console.log('THEMES.DARK :>>', THEMES.DARK);
        break;
    case THEMES.LIGHT:
        console.log('THEMES.LIGHT :>>', THEMES.LIGHT);
        break;
    default:
        console.log('unexpected value');
};

// Symbol.iterator

// 1. for..of

// 2. деструктуризація колекції
// const [first, second] = [1, 2];
// +для об'єктів як вийняток

// 3 spread + rest оператор ...
// const arr=[1,2,3];
// const arrCopy = [...arr];

function sum() {
    console.log(arguments);
    const arrFromArguments = [...arguments];
    console.log(arrFromArguments);

    return arrFromArguments.reduce((accum, item) => accum + item)
};

console.log(sum(1, 2, 3, 4, 5));

// передача елементів масиву в функцію
const arr1 = [1,2,3,4,5,6,7];
console.log(sum(...arr1));

// злиття об'єктів разом

const user1 = {firstName: 'Ivo', lastName: 'Ivovych'};
const user2 = {isMale: true, age: 20};

let user3 = {...user1, ...user2};
console.log(user3);

const newName = 'Ivon';
// user3.firstName = newName;
// або
user3 = {...user3, firstName: newName};

console.log(user3);

// приклад заміни значення, що надійшло

const users = [
    {id: 1, name: 'Test1', age: 20},
    {id: 2, name: 'Test2', age: 21},
    {id: 3, name: 'Test3', age: 22},
    {id: 4, name: 'Test4', age: 23},
];

user = {id: 1, name: 'Test1', age: 80};

const foundIndex = users.findIndex(u => u.id === user.id);

console.log(foundIndex);

users[foundIndex] = {...users[foundIndex], ...user};
console.log(users);

// Отримання набору опцій з користувацьких та дефолтних

function sendData(data, options){
    const defaultOptions = {host: 'localhost', port: 5000};
    const resultOptions = {...defaultOptions, ...options};

    console.log(resultOptions);
    //
};

sendData({id: 2, name: 'Test2', age: 21}, {port: 5005})