// СПАДКУВАННЯ

// базовий класс

class User{
    constructor(name, surname, age, isMale, email) {
        this._firstName = name;
        this._lastName = surname;
        this._age = age;
        this._isMale = isMale;
        this._email = email;
        this._isBanned = false;
    };

    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    };
};

const user = new User ('Test', 'Testovych', 20, true, 'test@mail.com');

// якщо зробити юзера, але + права
// permission = {bann: true, readPrivate: false}
// Модератор спадкує користувача!
// Дочірній клас

class Moderator extends User{
    constructor(name, surname, age, isMale, email, permissions) {
        super(name, surname, age, isMale, email); // виклик конструктора базового класу
        this._permissions = permissions;
    };

    //getFullName також успадкується

    sendMessage(user, message) {
        console.log(`Moderator ${this._firstName} send "${message}" to user ${user._firstName}`);
    }
};

const moderator = new Moderator('Mod', 'Modovych', 30, false, 'mod@mail.com', {
    bann: false, 
    readPrivate: false, 
    sendMessage: true
});

console.log(moderator.getFullName());

moderator.sendMessage(user, 'Hello');

// Реалізувати клас Admin розширення модератора

class Admin extends Moderator{
    constructor(name, surname, age, isMale, email, permissions, category) {
        super(name, surname, age, isMale, email, permissions);

        this._category = category;
    };

    makeBann(user) {
        user._isBanned = true;
    };

    makeUnbann(user) {
        user._isBanned = false;
    };
};

const admin = new Admin(
    'Adm', 
    'First', 
    40, 
    true, 
    'admin@mail.com', 
        {bann: false, 
        readPrivate: false, 
        sendMessage: true},
    1,
);

admin.makeBann(user);

admin.makeUnbann(user);

console.log(user);