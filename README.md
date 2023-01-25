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
#Типы данных
```js
let name ='Ivan'// Строка(текст) (одно слово, фраза, предложения,абзац,предложение)
let name =30//Числа
let name =false//boolean, логическое значение
```
# Динамическая типизация
```js
let varible  = 'value'//сейчас vrible типа string
varible  = 50//теперь переменная имеет тип число

```
