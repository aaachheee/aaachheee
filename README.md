# Функции 
## структура:
```js
function назавние (параметры){
    //Тело функции
}
```

Пример:
```js
function rty(a,b){
    return a+b
}
rty(5+5)
```
______
# Стрелочные функции

## структура:
```js
(параметры)=>{
    //Тело функции
}
```

Пример:
```js
const qwe = (a,b)=>{
    return a+b
}
qwe(14,15)
```
______

# Колбэки

**callback** - функция, которая будет переданна и вызвана внутри другой функции

Пример:
```js
function test(callback){
    callback()
}
test(()=>{
    console.log('hello')
})
```
_____
# Методы обращения к объектам


**.getElementByID()** - обращние оп Id

Пример:
```js
let myText = document.getElementById('text');

myText.innerText = 'NEW text'

console.log(myText);
```

**querySelector()** - по селктру

Пример:
```js
let myTextSelector = document.querySelector('p.text');

myTextSelector.innerText = 'New text for selector';

console.log(myTextSelector);
```


____
____
____
____
____
____
# Full JAvaScript
___
# Переменные 
**let** - может менять занчение во время работы программы(в прошлых версия js-es5 использовался var)
Пример:
```js
let name = 'Иван'

console.log(name)//Вывод 'Иван'

name = 'Егор'
console.log(name)//Вывод 'Егор'
```


**const** - не может менять значение
Пример:
```js
const year = 2002
console.lgo(year)//Вывод 2002'

year = 2222
console.lgo(year)//Вывод ошибка!!!
```
### При объявление консанты значение в нее должно быть записанно сарзу 
_____________________
```js 
const lastname; // Уже на этом этапе в кносоле будет ошибка
lastname = 'Denisov';
```
_____
##Типы данных
```js
let name ='Ivan'// Строка(текст) (одно слово, фраза, предложения,абзац,предложение)
let name =30//Число
let name =false//boolean, логическое значение
```
## Динамическая типизация
```js
let varible  = 'value'//сейчас vrible типа string
varible  = 50//теперь переменная имеет тип число

```

## Значение NULL
**null** - «ничего», «пусто» или «значение неизвестно».

```js
//let age = null;
let age = 32
age = null // Сбросить данные переменной
```

## Значение undefiend
* Означает что «значение не было присвоено
Если переменная объявлена, но ей не присвоено никакого значения,
то её значением будет undefined

```js
let newVariable; // undefined

let someName = 'James';
someName = undefined; // !Так не делают
someName = null; // Делают так
```

## Оператор typeof
```js
const someName = 'Bob';
console.log(typeof someName); Выведет тип переменной в данном случае string
```

##BigInt
**BigInt** - разрешает вместить большее число нежли обычный int
 Проверит можно при помощи:
 ```js
 console.log(Number.MAX_SAFE_INITGER)//Выведет 90071992547498797987979879789, если использовать больше этого числа то выдасть ошибку
 ```
 При операциях можно использовать только с BigInt (console.log(213n+123n))
 ____
 
 # Логические операторы
 ## Операторы сравнения
* ">, <, >=, <=" - больше, меньше, больше либо равно, меньше либо равно
* == - нестрогое сравнение
* === - строгое сравнение
* != - нестрогое неравенство
* !== строгое неравенство

## Условия
```js
if (условие) {
    // Код который будет выполнен если условие верно
} else {
	// Код который будет выполнен если условие НЕ верно
}
```
Пример: 
```js
const time = 12;

if (time < 12) {
	console.log('Доброе утро');
} else {
	console.log('Добрый день');
}
```

## Логические операторы
* && - логическое И
* || - логическое ИЛИ
* !true - логическое НЕ

## Тернарный оператор 
(условие) ? (условие верно)  : (условние не верно)
Пример: 
```js

if (10 < 12) {
	console.log('Верно');
} else {
	console.log('Не верно');
}

//Тернарная операция будет выглядеть так
10<12 ? conosle.log('Условие верно') : console.log('Условие НЕ верно')

//--------------------------------------------------

Пример
let greeting;
let time = 10;

if (time < 12) {
	greeting = 'Доброе утро'
} else {
	greeting ='Добрый день';
}

//Тернарный способ
let time = 10
let greeting = time < 12 ? 'Доброе утро' : 'Добрый день'
```
# Конкатенация строк и шаблонные строки
## Конкатенация
```js
let greeting = 'Привет Марк!'
let howAreYou ='Как твои дела?'
const userName = 'Марк';
console.log('Привет,' + userName + 'Как твои дела?')
```
## Шаблонные строки и интерполяция
```js
const userName = 'Марк';
console.log(`Привет,${userName}! Как твои дела?`)
```
# Функции 
## структура:
```js
function назавние (параметры){
    //Тело функции
}
```

Пример:
```js
function rty(a,b){
    return a+b
}
rty(5+5)
```

## function declaration
```js
function rty(a,b){
    return a+b
}
rty(5+5)
```
## function expression
```js
let rty = function (a,b){
    return a+b
}
rty(5+5)
```
* Отличаются тем что function declaration можно использовать до объявления самой функции
* Пример:
```js
sayHi()

function sayHi(){
cosnole.log('Привет')
}
```
## Аргументы функций 
```js
function sayHi(name) {
	console.log(`Привет, ${name}! Как твои дела?`);
}

sayHi('Igor')
```

## RETURN
После return в функции она сразу завершает свою работу
```js
function summ(a, b) {
	const result = a + b;
	return result;//Возвращает переменную result
}
summ(10, 15)//ничего не выведет в консоль, но результат здесь будет
const res = summ(10, 15);
console.log(res);
```

## Функция как агрумент
```js
function summ(a, b) {
	return a + b
}
consoel.log(summ(10,15))//Вывод 25

```
**Функции могут передваться внутрь функции в качетве аргумента
```js
function summ(a, b) {
	return a + b
}
let result = summ(summ(15,30)+summ(12,13))
console.log(result)// 60
```
## Самовызывающая функция LIFE (сейчас практически не используется)
Пример:
```js
(function(){
console.log('Привет дорогой пользователь')
})(); //!!!!Обязательно писать точку с запятой!!!!//Выведет Привет дорогой пользователь без вызова функции

(function(){
	console.log(a+b)
})(10,15);
```
# Стрелочные функции

## структура:
```js
(параметры)=>{
    //Тело функции
}
```

Пример:
```js
const qwe = (a,b)=>{
    return a+b
}
qwe(14,15)
```
## Если выполняется одна операция и сразу возвращается то можно записать так :
```js
const summ = (a,b) => a + b
const result = summ(10,30)
console.log(result)
```
# Массивы
**Массив** - коллекция каких-либо данных
```js
const array = ['Audi','BMW','Mercedes','Mazda']
```
## Методы массивов
* arr.push(items) - Добавить элемент в конец массива
* arr.pop() - Удалить элемент массива
* arr.shift() - Удалить элемент из начала массива
* arr.unshift(...items) - Добавить элемент в начало массива
* arr.splice([С какого индекса начать],[Сколько удалить, либо заменить])

```js
const array = ['Audi','BMW','Mercedes','Mazda']
array.slice[2,2]//Вывод 'Audi' 'BMW'
```
## Обход массива циклом for
```js
const array = ['Audi','BMW','Mercedes','Mazda']

for(let item of array){
	console.log(item)
}
```

## Обход массива циклом forEach()
```js
const array = ['Audi','BMW','Mercedes','Mazda']
array.forEach(function(brand, index){
console.log(`${brand} => ${index}`)
})

//---------------------------
function printBrand (brand, index){
console.log(`${brand} => ${index}`)
}
array.forEach(printBrand)//Обязательно не вызвать функцию в методе

//-------------------
array.forEach((brand,index)=> console.lgo(`&{brand} => &{index}`))
```

# Объекты
```js
const Perosn = {
	age = 30,
	name = 'Mark'
	isMarried = false,
	profession = developer
}
console.log(person.name)//Обращение к свойству объекта
console.log(['age'])
let propertyname = 'porfession'
console.log(person[propertename])
```
