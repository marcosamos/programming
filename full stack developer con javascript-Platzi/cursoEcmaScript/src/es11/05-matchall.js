const regex = /\b(Apple)+\b/g;

const fruit = 'Appel, Bannana, Kiwi, Apple, Orange, etc';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}