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
Означает что «значение не было присвоено
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
>, <, >=, <= - больше, меньше, больше либо равно, меньше либо равно
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== строгое неравенство

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
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
