function User1(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
};

// в прототипі - для екземплярів
User1.prototype.getFullName = function() {
    return this.firstName + ' ' + this.firstName;
};

// статичний метод - для функції конструктора
User1.isUser = function(obj) {
    return obj instanceof User;;
};

const user1 = new User1(
    'jack',
    'wilsher',
    23,
    true,
    'test@mail.com',
    true
);

// класовий підхід

class User{
    constructor(name, surname, age, isMale, email, isSubscribed) {
        this._firstName = name;
        this._lastName = surname;
        this._age = age;
        this._isMale = isMale;
        this._email = email;
        this._isSubscribed = isSubscribed;
    };

// user2.age = 20    
    set age(value) {
        if(typeof value !== 'number') {
            throw new TypeError('age must be number value')
        };

        if(value < 0 || value > 150) {
            throw new RangeError ('age must be between 0 and 150');
        };

        this._age = value;
    };

// const age = user2.age
    get age() {
        return this._age;
    };

    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    };

// статичний метод - працює для класа а не для його екземпляра
    static isUser(obj) {
        return obj instanceof User;
    };
};

try {
    const user2 = new User(
        'jack',
        'wilsher',
        23,
        true,
        'test@mail.com',
        true
    );

    console.log(user2.getFullName());
    console.log(user2.age);

    user2.age = 23;
} catch(error) {
    console.log(error);
};

// реалізувати клас для телефонів

class Phones {
    constructor (brand, model, color, price, year) {
        this._brand = brand;
        this._model = model;
        this._color = color;
        this._price = price;
        this._year = year;
    };

    calcPhoneAge() {
        return new Date().getFullYear() - this._year;
    };
};

const iPhone = new Phones('Apple', 'iphone', 'white', 100, 2023);

console.log(iPhone.calcPhoneAge());

// Три кити (принципи) ООП:

// інкапсуляція - приховання логіки (особливостей реалізації)
// вся логіка лишається в методах "під капотом", користувачу доступний інтерфейс і результати його роботи

class User13{
    constructor(fullName1) {
        [this._firstName1, this._lastName1] = fullName1.split(' ');
    };

    set fullName(v) {
        [this._firstName1, this._lastName1] = v.split(' ');
    };

    get fullName() {
        return this._firstName1 + ' ' + this._lastName1;
    }
};

const user44 = new User13('Test Testovych');

user44.fullName = 'Ivo Bobul';



