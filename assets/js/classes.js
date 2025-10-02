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
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isSubscribed = isSubscribed;
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    static isUser(obj) {
        return obj instanceof User;
    };
};

const user2 = new User(
    'jack',
    'wilsher',
    23,
    true,
    'test@mail.com',
    true
);

console.log(user2.getFullName());




