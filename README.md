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
## Коллкция элементов
```js
const headings = document.querySelector('h2')

selector.classList.add('red') // Выдаст ошибку так как const headings не имеет одного значения h2, а имеет что-то типо массив
//для того чтобы добавить на каждый заголовок класс red используем перебор циклом for of

for (let item of headings){
	item.classList.add('red')
}
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
## Методы в объектах
```js
const person = {
userName = 'Марк',
age = 30,
isMarried = false,
	sayHi: function(){
	console.log ('Привет!')
	}
}

person.sayHI() //Выведет Привет!

//--------Добавление метода
person.sayGoodBye = function(name){
	console.log (`${name}, Пока!`)
}

person.sayGoodBye('Юрий')
```
## Обход объкта циклом for in
```js
const person = {
userName = 'Марк',
age = 30,
isMarried = false,
	sayHi: function(){
	console.log ('Привет!')
	}
}

for (let key in person){
	console.log(key)
	console.log(key, ':', person[key])
}
```

#THIS
```js
const person = {
userName = 'Марк',
age = 30,
isMarried = false,
	sayHi: function(name){
	console.log (`${name}, Привет! Меня зовут ${this.userName}`)
	}
}
person.sayHI('Юрий')
```

# Классы 
**Класс** - как чертеж для всех будующих объектов person которые будут передваться на его основе
```js
class Person {
	constructor(userName, age, isMarried){
	this.userName = userName
	this.age = age
	this.isMarried = isMarried
	}
	sayHi(name){
	consoel.log(`Привет${name}! Меня зовут ${this.userName}`)
	}
}
const person1 = new Person('Марк',20,false)
const person2 = new Person('Павел',22,true)
person1.sayHi("Юрий")
person2.sayHi("Юрий")
```
# ClassList
* .add - Добавить
* .remove - удалить
* .toggle - добавить класс, если его нет, иначе удалить.
* .contains - проверка наличия класса, возвращает true/false

# Работа с атрибутами
* **getAttribute(attrName)** — возвращает значение указанного атрибута
* **setAttribute(name, value)** — добавляет указанные атрибут и его значение к элементу
* **hasAttribute(attrName)** — возвращает true при наличии у элемента указанного атрибута
* **removeAttribute(attrName)** — удаляет указанный атрибут
* 
* **toggleAttribute(name, force)** — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
* **hasAttributes()** — возвращает true, если у элемента имеются какие-либо атрибуты
* **getAttributesNames()** — возвращает названия атрибутов элемента
```HTML
<div class="dom-example none">
	<div class="example-block">
		<img id="logo" src="./img/js.png" alt="Логотип" /><br />
		<input id="button" type="submit" value="Кнопка" />
	</div>
</div>
```

```js
const img = document.querySelector('#logo');
img.getAttribute('src'); // получаем значение src

img.setAttribute('src', './img/php.png'); // Изменить значение Src 
img.setAttribute('width', '200'); // Задать ему размер

const button = document.querySelector('#button')

button.getAttribute('value', 'какой-то текст')
//Быстрее будет так
button.value = 'какой-то текст'
```

# Прослушка события 
```HTML
<div class="dom-example none">
	<div class="example-block">
		<img id="logo" src="./img/js.png" alt="Логотип" /><br />
		<input id="button" type="submit" value="Кнопка" />
	</div>
</div>
```

```js
const button = document.querySelector('#button')
const img = document.querySelector('#logo');
button.value = 'Удалить'

button.addEventListiner('click',function(){
	console.log('click')
	igm.remove()
})
//Также может быть
button.onclick = function(){
	console.log('click')
	igm.remove()
}
```
## Прослушка событий ввод текста 
* Объект options, который определяет характеристики объекта, прослушивающего событие. Доступны следующие варианты:

* **capture: Boolean** указывает, что события этого типа будут отправлены зарегистрированному обработчику listener перед отправкой на EventTarget, расположенный ниже в дереве DOM.
* **once: Boolean** указывает, что обработчик должен быть вызван не более одного раза после добавления. Если true, обработчик автоматически удаляется при вызове.
* **passive: Boolean** указывает, что обработчик никогда не вызовет preventDefault(). Если всё же вызов будет произведён, браузер должен игнорировать его и генерировать консольное предупреждение. Пример Улучшение производительности прокрутки с помощью passive true
* **Non-standard mozSystemGroup: Boolean** указывает, что обработчик должен быть добавлен в системную группу. Доступно только в коде, запущенном в XBL или в расширении Chrome.
```js
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener(
	'input',
	function () {
		console.log(inputText.value);
		textBlock.innerText = inputText.value;
	},
	{ once: true } // означает что событие будет вызванно только один раз
);

inputText.addEventListener('input', inputHandler, { once: true });

function inputHandler() {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
}

```
# Объекст EVENT
