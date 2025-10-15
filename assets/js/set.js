// Множина set - зберігає тільки унікальні значення

const s1 = new Set();
console.log(s1);

const s2 = new Set([1,1,3,4,1,32,2,234,6,24,6]);
console.log(s2);

// розмір
console.log(s2.size);

// додавання значення
s1.add(1).add(2).add(1);

// перевірка вмісту по значенню
console.log(s1.has(5));

// видалення
s1.delete(1);
console.log(s1);

// очищення
s1.clear();
console.log(s1);

// методи перебору
// forEach

s2.forEach((s, sAgain, set) => console.log('s :>>', s, sAgain));

// for..of
for (const item of s2) {
    console.log(item);
};

// Ex : отримати масив унікальних значень

const arr = [1,1,3,4,1,32,2,234,6,24,6];

// const s3 = new Set(arr);

// const arr2 = [...s3];

const arr2 = [...new Set(arr)];

// Отримати масив унікальних імен

const user1 = [
    'Test',
    'Grut',
    'John Doe',
    'Grut',
    'John Doe',
    'Grut',
    'John Doe',
];

const user2 = [
    'Test',
    'Jane Doe',
    'Test',
    'Jane Doe',
    'Test',
    'Jane Doe',
    'Grut',
];

const names = [...new Set([...user1, ...user2])];
console.log(names);

// Отримати масив марок телефонів

const phones = [
    {name: 'Test0', brand: 'IPhone'},
    {name: 'Test1', brand: 'Samsung'},
    {name: 'Test2', brand: 'IPhone'},
    {name: 'Test3', brand: 'Xiaomi'},
    {name: 'Test4', brand: 'Samsung'},
    {name: 'Test5', brand: 'Xiaomi'},
    {name: 'Test6', brand: 'IPhone'},
];

const brands = phones.map(p => p.brand);
const brandSet = new Set(brands);
const unaqBrands = [...brandSet];
//console.log(unaqBrands);

// отримати об'єкти виду
// {
//     IPhone: ['Test0', 'Test2', 'Test6'],
//     Samsung: [...],
//     Xiaomi: [...],
// }

// const phonesWithUsers = {
//     [brands[0]]: [],
//     [brands[1]]: [],
//     [brands[2]]: [],
//     [brands[3]]: [],
//     [brands[4]]: [],
//     [brands[5]]: [],
// };

const phoneWithUsers = {};

brands.forEach(b => (phoneWithUsers[b] = phones.filter(p => p.brand === b).map(p => p.name)));

console.log(phoneWithUsers);

// отримати всі об'єкти де brand: 'IPhone'

// const usersWithIPhone = phones.filter(p => p.brand === 'IPhone');

// const userNamesWithIphone = usersWithIPhone.map(p => p.name);






