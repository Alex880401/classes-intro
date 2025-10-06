const user = {
    firstName: 'Test',
    lastName: 'Testovych',
};

for(const key in user) {
    console.log(`user[${key}] = ${user[key]}`);
};

console.log(user);

const arr = [1,2,3,4,5];

for(const index in arr) {
    console.log(`arr[${index}] = ${arr[index]}`);
};

console.log(arr);

// for..in перелічує тільки перелічувані властивості
// і власні і успадковані

function User1(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
};

User1.prototype.getFullName = function() {
    return `${this.firstName} ${this.firstName}`;
};


const user1 = new User1(
    'jack',
    'wilsher',
    23,
    true,
    'test@mail.com',
    true
);

/*
for (const key in user1) {
    console.log('key:>>', key);
};
*/

//1
for (const key in user1) {
    if(user1.hasOwnProperty(key)) {
        console.log('key own :>>', key);
    };
};

//2 (Object.keys()) - масив власних перелічуваних властивостей
//console.log('Object.keys :>>', Object.keys(user1));

Object.keys(user1).forEach(uKey => console.log(`user[${uKey}] = ${user1[uKey]}`));

// (Object.values()) - масив значень
console.log(Object.values(user1));

// (Object.entries()) - масив масивів (пар) ключ-значення
console.log(Object.entries(user1));

// почитати прапори та дескриптори властивостей