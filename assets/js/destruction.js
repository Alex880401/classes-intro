// Деструтуруюче присвоєння

/*
function f(user) {
    //const firstName = user.firstName;
    //const lastName = user.lastName;
    // замість цього пишемо

    // деструтуроване присвоєння
    const {firstName, lastName, age} = user;

    console.log('name:>>', firstName);
    console.log('surname:>>', lastName);
    console.log('age:>>', age);
};
*/

function f({firstName, lastName, age}) {
    console.log('name:>>', firstName);
    console.log('surname:>>', lastName);
    console.log('age:>>', age);
};

const user = {
    firstName:'Test',
    lastName:'Testtovych',
    age: 25,
};

f(user);

/*
const book = {
    author: 'Astred Lindren',
    title: 'Karlson',
};

const {author, title} = book;
*/

const book = {
    author: {
        firstName: 'Test',
        lastName: 'Testovich',
    },

    price: 12,
};

const {
    author: {firstName, lastName}, 
    price: bookPrice,
} = book;

console.log(lastName);

// застосування для масивів

const arr = [1, 2, 3, 4];

//const arr0 = arr[0];
//const arr1 = arr[1];

const[arr0, arr1, , arr3] = arr;

console.log(arr1);

//витягти arr3 (4)
// якщо arr2 не потрібна для коду
// непотрібне можна пропустити, відгородити комами

console.log(arr3);

const user1 = {
    name: 'Test',
    age: 23,
    emails: ['test1@test.com', 'test2@test.com'],
    isMale: true, 
};

// Task: name, age, email1, email2, isMale
// перейменувати name -> userName, age -> userAge

const {
    name: userName,
    age: userAge,
    emails: [email1, email2],
    isMale,
} = user1;

console.log(userName, userAge, email1, email2, isMale);

const attr = {id:'btn', style:'color:blue', title:'click me'};

//style, {id, title}

const {style, ...restAttr} = attr;
console.log(style);
console.log(restAttr);

// витягти з user1 ім'я, все інше запакувати в об'єкт

const {name: userName1, ...restInfo} = user1;
console.log(userName1);
console.log(restInfo);