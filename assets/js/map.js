// const user = {};

// const object = {user:[messeges]};
// так не можна робити в звичайному об'єкті, ключем може бути тільки тип string або symbol

const map1 = new Map();
console.log(map1);

console.log(map1.size);

// задати значення
// map.set(key, value);
// якщо двічі задати значення одному ключу, воно перезапишеться
// сетити можна через крапку

map1.set('firstName', 'Test').set('lastName', 'Testovych');

// мапа може бути викоритсана щоб задати в якості ключа об'єкт
// коли треба співставити об'єкту масив даних

map1.set({id:1, name: 'Ivo'}, ['hello)', 'I am fine']);

//отримання знчення по ключу
// метод get

console.log(map1.get('firstName'));

const user = {id:1, name: 'Ivo'};
map1.set(user, ['hello)', 'I am fine']);
console.log(map1.get(user));

// чи є інформація з певним ключем

console.log(map1.has('age'));

// видалити ключ властивості

map1.delete(user);
console.log(map1);

// очистити мапу

// map1.clear();
// console.log(map1);

// ітератори

const m1 = new Map();
    m1.set('test', '123456')
      .set('test2', '7891345')
      .set('test3', '2037542');

m1.forEach((value, key) => console.log(key, value));

console.log(m1.keys());

const mapKeys = [...m1.keys()];
console.log(mapKeys);

console.log([...m1.values()]);

console.log([...m1.entries()]);

// сттворити мапу з об'єкта

const obj = {
    Test: '2390457230957',
    Test1: '24856l2p467',
};

console.log(Object.entries(obj));

const m2 = new Map(Object.entries(obj));
console.log(m2);

//Приклад застосування
//Перекладач, словник міститься в мапі

const vocabulary = new Map();
vocabulary.set('dog', 'собака')
          .set('cat', 'кіт')
          .set('run', 'бігати');

function translateEngToUa(engPhrase) {
    // отримати масиа англомовних слів [dog, run, white, cat]
    const engWords = engPhrase.split(' ');

    // по словнику отримати для кожного слова пееклад, якщо він є, з мапи [собака, бігає, white, кіт]
    const uaWords = engWords.map(w => vocabulary.has(w) ? vocabulary.get(w) : w);
    console.log(uaWords);

    // з масива отримати рядок - переклад фрази
    const uaPhrase = uaWords.join(' ');

    return uaPhrase
}

const engPhrase = 'dog run white cat';
const ukrPhrase = translateEngToUa(engPhrase);
console.log(ukrPhrase);


