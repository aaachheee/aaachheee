# React

## Оглавления
0. [Определение](#Определение)
1. [Компонента](#Компонента)
2. [JSX](#JSX)
3. [Работа_с_компонентами](#Работа_с_компонентами)
4. [conditial_rendering](#conditial_rendering)
5. [Changing the State of a Child Componen](#Changing the State of a Child Componen)
...
- [create-react-app](#create-react-app)
## Проект
- 01 - Знакомство с create-react-app
- 2 -


___
<a name="Определение"></a>
## Определение
> React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательского интерфейса. 
___
<a name="Компонента"></a>
## Компонента
- Компоненты можно использовать _**многократно**_
- Компоненты формируют четкую _**иерархичекскую**_ структуру
- Компноненты можно управлять извне с помощью _**свойств**_
- Компоненты могут иметь свое собственное _**состояние**_
- Каждый компонент отвечает за отдельную логическую часть интерфейса 

**функциональные**
```jsx
fucntion HelloWorld(){
	return <h1> Hello world </h1>
}
```
или
```jsx
const HelloWorld = () =>{
	return <h1> Hello world </h1>
}
```
или через **классовый** клиент (обязателен метод **Render**)
```jsx
class HelloWorld extends Component{
	render(){
		return <h1> Hello world </h1>	
	}
}
```

## JSX
<a name="JSX"></a>
- JSX (javascript syntax extension) - синтаксис который позволяет объединить html css javascript для формирования компонентов в react

### Пользовательские и встроенные компоненты: 
- **Пользовательские** компоненты - буква **Заглавная** (MyCom,InfoGraf)
- **Встроенные компоненты** - буква **Порописная** (div,h1,p)
пример: 
- НЕ ВАЛИДНЫЙ JSX(так делать не надо!) - несколько корневых элемнетов
```jsx
retrun(
	<h1>JSX в React</h1>
	<p>JSX не HTML!!!</p>
)
```
- ВАЛИДНЫЙ КОД - один корневой элмент
```jsx
retrun(
	<div>
		<h1>JSX в React</h1>
		<p>JSX не HTML!!!</p>
	</div>
)
```

___
___
___
___
___
<a name="create-react-app"></a>
## create-react-app
create-react-app - утилита, включает в себя необходимое средство для процесса разработки, запуска react приложений, создания подкашн версии

- [create-react-app](https://create-react-app.dev)
- [create-react-app](https://npmjs.com/package/create-react-app)

```cmd
npx create-react-app
```
### Информация 
- public: 
- public/index.html - файл куда мантируется приложение 
- public/manifest.json - прописанны пути для иконок на различные устройства
- public/robots.txt - инструкция для ботов которые сканируют веб-сайт

-src: 
- src/index.js - импортирует ReactDom: в public/index.html
- src/app.js - модуль который возвращает JSX код (не HTML) используя команду export default App
- src/app.css - стили модуля 
- src/index.css - стили сайта
- src/app.test.js - модуль тестирования нашего сайта используя <React.StrictMode>

.gitignore - файлы которые будут игнорироваться и не загружатсья в git

### Команды
- npm start - Запуск сервера разработки
- npm run build - Объединяет приложнения в статические файлы для продакшна
- npm test - запускает тестовый бегун. (мы их сами создаем)
- npm run eject -НЕ РЕКОМЕНДУЕТСЯ, отвязывает React от create-react-app (пути обратно нет)
<a name=""></a>
### Работа_с_компонентами
<a name="работа с компонентами"></a>
1. Копируем шаблон template\
   инсталирум проек npm i (npm install)\
   запускаем в режиме разработки npm start
2. Создаем свой компаненет (**ОБЯЗАТЕЛЬНО С ЗАГЛАВНОЙ БУКВЫ**) в src/App.js
```js
function MyComponent(){
  return (
  <div>
    <h1>Hello from MEComponent</h1>
    <button>Like!</button>
  </div>
  )
}

```
И добавляем компанент на сайт

```js
function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
    </div>
  );
}
```

Итоговый вариант
```js
import './App.css';

function MyComponent(){
  return (
  <div>
    <h1>Hello from MEComponent</h1>
    <button>Like!</button>
  </div>
  )
}


function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default App;
```
3. вынесем данный компонент в отдельный файл js(**ОДИН КОМПОНЕНТ ОДИН ФАЙЛ**)\
		1. Создадим папку src/components\
		2. Создадим файл src/components/MyComponent.js\
		3. Перенесем туда код\
		
		```js
		function MyComponent(){
		    return (
		    <div>
		      <h1>Hello from MEComponent</h1>
		      <button>Like!</button>
		    </div>
		    )
		}

		export default MyComponent
		```
		
		5. импортируем данный компонент в App.js\
		```js
			import './App.css';
			import MyComponent from'./components/MyComponent'



			function App() {
			  return (
			    <div className="App">
			      <MyComponent />
			    </div>
			  );
			}

			export default App;

		```
## Компоненты со возможностью принимать свойства
1. Копируем шаблон, все как в начале прошлого пункта
2. Создадим компонент src/components/PetInfo.js
```js
function PetInfo(){
	return <h1>My dog is 3 year</h1> // Скобочки не надо так как возврощаем 1 элемент
}
export default PetInfo
```
4. Добавляем атрибут в JSX 
```js
<PetInfo animal="dog" years = "2" color="black"/>
```

5. Используя props берем заданное значение, в комопненеты PetInfo.js
```js
function PetInfo(props){
    
	return <h1 > 
        
        <font color={props.color}>My {props.animal} is {props.years} year </font> </h1> // Скобочки не надо так как возврощаем 1 элемент
}
export default PetInfo
```
6. Деструризация - возможность забирать свойства из объекта props
```js
function PetInfo(props){
    const{animal,age,color} = props
    
	return <h1 > 
        
        <font color={props.color}>My {props.animal} is {props.years} year </font> </h1> // Скобочки не надо так как возврощаем 1 элемент
}
export default PetInfo
```




## Условный рендеринг (Возврат разных значений используя свойства)
<a name = "conditial_rendering"><a/>
1. Копируем шаблон template
2. Также как в прошлом пункте 
3. Также
4. Создаем компонент в папке /4/src/components/PetInfo.js

```js
function PetInfo(props){
    const {animal,age,hasPet} = props 
    const text = hasPet ? `My ${animal} is ${age} years` : `I dont have any pets`

    return(
        <h1>{text}</h1>
    )
}
export default PetInfo;	
```
5. Редактируем App.js
```js
<PetInfo animal="dog" age={5} hasPet = {true}/>
      <PetInfo animal="cat" age={2} hasPet = {false}/>
      <PetInfo animal="dog" age={5} hasPet/> // true
      <PetInfo animal="cat" age={4} />	//false
```
6. Добавили тернарный оператор в jsx 
```js
function PetInfo(props){
    const {animal,age,hasPet} = props 
    const text = hasPet ? `My ${animal} is ${age} years` : `I dont have any pets`

    return hasPet ?(
        <h1>My{animal} is {age} years</h1>
) : (
    <h4>I do not have any pets</h4>
)
}
export default PetInfo;	
```
<a name=""><a/>	
## Компонент состояния
Создаем рабочую область(первые три прошлых пункта)
4.создадим компонент \05\components\RandomNuber.js
```js
function RandomNumber(){
    return(
        <div>
            <h1>78</h1>
            <button>Generate random number</button>
        </div>
    )
}

export default RandomNumber;	
```
5. Импорт функции в файл src/App.js
6. Изменили свойсва в файле src/App.js
```css
.App{
  text-align: center;
}

h1{
  font-size: 3.5 rem;
  color: blue;
  margin-top: 5vw;
}
button{
  padding: 10px;
  width: 10vw;
  border: none;
  border-radius: 40px;
  margin-top: 5vw;
  background-color: bisque;
  transition: 1s;
}
button:hover{
  background-color: aquamarine;
}	
```
7. Добавим состояние (хук) в Random.Number
	- импорируем метод useState
	- создаем синтаксис дитсруктуризации по шаблону:
```js
const[перменнная, функция_возврата_позволяющая_менять_переменную] = use state(значение по умолчанию)
```
	-создание функции генерации случайного числа
```js
function generateRandomNumber(){
    return Math.floor(Math.Random*100)
}
```
	- добавим функцию в состояние
```js
const cahngeRandomNum = () =>{
        setRandomNum(generateRandomNumber())
    }
```
	- Добавим свойство onClick для кнопки
```js
<button onClick={cahngeRandomNum}>Generate random number</button>	
```
<a name="Changing the State of a Child Component"></a>
## Изменение состояния дочернего компонента 
1. шаблон template
2. npm i
3.
4. App.css
```css
h1{
  font-size: 5em;
  color:darkorchid;
  font-family: sans-serif;
}

button{
  padding: 15px 25px;
  background-color: darkslateblue;
  color:white;
  border-radius: 10px;
  font-size: 2.5em;
  transition: .3s;
}

button:hover{
  cursor: pointer;
  background-color: rgb(124, 117, 172);
 
}

```
5. Создадим компоненты src/components/Button и src/components/Counter, которые будут выводить количество кликов\
	
src/components/Counter.js - text:
```js	
function Countter(){
    return(
    <h1>Total click: 0</h1>
    )
}
export default Countter	
```
src/components/Button.js - кнопка:
```js
function Button(){
    return <button>Click me!</button>
}

export default Button
```
6. Импортировали Counter и Buttomn в src/App.js
```js
import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'

function App() {
  return (
    <div className="App">
      
      <Countter />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;

```
1. Добавляем состояние в src/App.js
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'


function App() {
  const[count,setCount]=useState(0)
  
  return (
    <div className="App">
      
      <Countter count = {count}/>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;

```
2. Передадим занчения в сам компонент: src\components\Countter.js
        
```js
function Countter({count}){
    return(
    <h1>Total click: {count}</h1>
    )
}
export default Countter
```
        
3. Добавим доступ к двум свойствам для Button внтури файла /src/App.js
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'


function App() {
  const[count,setCount]=useState(0)
  
  return (
    <div className="App">
      
      <Countter count = {count}/>
      <Button count = {count} 
      OnClick = {setCount}/>
      <Button count = {count} 
      OnClick = {setCount}/>
      <Button count = {count} 
      OnClick = {setCount}/>
      <Button count = {count} 
      OnClick = {setCount}/>
      
    </div>
  );
}

export default App;
    
```
4. Выполним деструктурицзацию для этих свойств внутри компонента src/components/Button.js
```js
function Button({count, OnClick }){
    return <button OnClick={()=>{
        OnClick(count+1)
        }}>Click me!</button>
}

export default Button        
```
Сделаем вызов действий без передачи значение в компонент Button

5. Кнопкам не обязательно знать знать текущее значение count у нашего элемента Counter.js поэтому изменим Button.js
```js
function Button({   onClick }){
    return <button onClick={onClick}>Click me!</button>
}

export default Button      
```
6. Изнмени App.js, добавив функцию increment которая является логикой изменения count, которая будет вызвана при нажатии кнопки 
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'


function App() {
  const[count , setCount]=useState(0)
  
  const Increment= () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      
      <Countter count = {count}/>
      <Button onClick = {Increment} />
      <Button onClick = {Increment} />
      <Button onClick = {Increment} />
      <Button onClick = {Increment} />
      <Button onClick = {Increment} />
      
    </div>
  );
}

export default App;
     
```
        
<a name ="methodMap"></a>
## метод map
Используем предудущий пример

1. Сздадим и добавим доступ к свойству текст для Button.js
```js
function Button({  text, onClick }){
    return <button onClick={onClick}>{text}</button>
}

export default Button 	
	
```
2. Создадим массив texts с именами кнопок в App.js
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'
const texts = ["click me", "click","click me please","CLICK","neCLick"]

function App() {
  const[count , setCount]=useState(0)
  
  const Increment= () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      
      <Countter count = {count}/>
      {
        texts.map((i)=>{
          return (
            <Button text = {i} onClick={Increment}/>
          )
        })
      }
      
      
    </div>
  );
}

export default App;
```
3. Передадим имена в кнопки  в App.js
```js
<Button text = {texts[0]} onClick={Increment}/>	
```
	
4. переберм массив и создадим кнопки в элементе в App.js
	
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'
const texts = ["click me", "click","click me please","CLICK","neCLick"]

function App() {
  const [count , setCount]=useState(0)
  
  const Increment= () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      
      <Countter count = {count}/>
      {
        texts.map((i)=>{
          return (
            <Button text = {i} onClick={Increment}/>
          )
        })
      }
      <Button text = {texts[0]} onClick={Increment}/>
      
      
    </div>
  );
}

export default App;	
```


5. Исрпавим консольную ошибку:\
Warning: Each child in a list should have a unique "key" prop. \
для этого добавим свойство key в prop
	
- (рекомендуется) если все значения в массиве уникальны то можно использовать их

```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'
const texts = ["click me", "click","click me please","CLICK","neCLick"]

function App() {
  const [count , setCount]=useState(0)
  
  const Increment= () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      
      <Countter count = {count}/>
      {
        texts.map((i)=>{
          return (
            <Button 
            key ={i} // КЛЮЧ i как как каждый элемент переходит через i
            text = {i} 
            onClick={Increment}/>
          )
        })
      }
      <Button text = {texts[0]} onClick={Increment}/>
      
      
    </div>
  );
}

export default App;	
```
- если есть повторы то можно добавить Index в сам map и использовать его
```js
import {useState} from 'react'

import './App.css';
import Button from './components/Button'
import Countter from './components/Countter'
const texts = ["click me", "click","click me please","CLICK","neCLick"]

function App() {
  const [count , setCount]=useState(0)
  
  const Increment= () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      
      <Countter count = {count}/>
      {
        texts.map((i,index)=>{
          
          return (
            <Button 
            key ={index}
            text = {i} 
            onClick={Increment}/>
          )
        })
      }
      <Button text = {texts[0]} onClick={Increment}/>
      
      
    </div>
  );
}

export default App;	
```

## Итерация по массиву объектов
0. Сегенрируем массив объектов используя сервис https://www.mockaroo.com/
	|Filed Name|Type|Options|
	|:---|:---|:----:|
	|id|Row Number|0|
	|firstName|First Name|0|
	|LastName| Last Name|0|
	|emal|Email ADdress|0|
	|avatar|Avatar|150x150|
format: JSON

1-3. Выполним все действия по созданию и запуска шаблона
4. Создади папку data и поместим в нее наш массив объектов (\07\src\data\persons.js)
```js
const presons = [{
    "id": 1,
    "firstName": "Lorena",
    "lastName": "Itzig",
    "email": "litzig0@sbwire.com",
    "avatar": "error: wrong number of arguments (given 3, expected 0)"
  }, 
	//..........................
	{
    "id": 100,
    "firstName": "Hulda",
    "lastName": "Clementi",
    "email": "hclementi1@barnesandnoble.com",
    "avatar": "error: wrong number of arguments (given 3, expected 0)"
  }]
```

5. Имортируем persons В app.js и выполним итеррацию по массиву объекту в файле src/App.js
	
```js
import './App.css';
import persons from './data/persons.js'

function App() {
  return (
    <div className="App">
    {
      persons.map((person)=>{
        return  ( 
          <> // КАК ДИВ НО НЕ ДИВ, прост группировать объекты
          <h1>{person.id}</h1>
          <h3>{person.firstName}</h3>
          <h3>{person.lastName}</h3>
          <p>{person.email}</p>
          <br />
          </>
          
          )
      })
    
    }
    
      
    </div>
  );
}

export default App;
	
```
	
6. Создадим компонент \07\src\components\Person.js и имортируем его в App.js
```js
const Person = ({ id, firstName, lastName, email }) =>{
    return(
        <><h1>id = {id}</h1>
        <h3>firstName = {firstName}</h3>
        <h3>lastName = {lastName}</h3>
        <p>email = {email}</p>
        <br /></>
    )
}
export default Person
```
7. Передача параметров в компонент  Person
1- способ  src/App.js
```js
function App() {
  return (
    <div className="App">
    
    {
      persons.map((person)=>{
        return(
          <Person 
            id = {person.id}
            firstName = {person.firstName}
            lastName = {person.lastName}
            email = {person.email}
          />
        )
      })    
    }
    </div>
  );
}

export default App;

```

2- Способ 
```js
function App() {
  return (
    <div className="App">
    {
      persons.map((person)=>{
        const {id,firstName,lastName,email} = person
        return(
          <Person 
            id = {id}
            firstName = {firstName}
            lastName = {lastName}
            email = {email}
          />
        )
      })
    }
    </div>
  );
}
```

3- способ
```js
function App() {
  return (
    <div className="App">
    {
      persons.map(({id,firstName,lastName,email})=>{
        return(
          <Person 
            id = {id}
            firstName = {firstName}
            lastName = {lastName}
            email = {email}
          />
        )
      })
    }
    </div>
  );
}
```

7. Облегчим код при используя spread operator
```js
function App() {
  return (
    <div className="App">
    {
      persons.map((person)=>{
        return(
          <Person 
            key = {person.id}
            {...person}
          />
        )
      })
    }
    </div>
  );
}
```
8. Изменим Person.js
```js
const Person = (props) =>{
    const {id, firstName, lastName, email} = props
    return(
        <><h1>id = {id}</h1>
        <h3>firstName = <h2>{firstName}</h2></h3>
        <h3>lastName = {lastName}</h3>
        <p>email = {email}</p>
        <br /></>
    )
}
export default Person
```
        _________________________
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
___
___
___
___
___

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
