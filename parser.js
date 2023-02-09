
const puppeter = require('puppeteer');
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я']
let i = 0;


// async function f(number){
    
//     const browser = await puppeter.launch({headless: false})
//     const page  = await browser.newPage()
//     await page.goto(`https://www.permgaspi.ru/db/journalist/index.php?char=${arr_RU[number]}`) 
    
//     let arr = await page.evaluate(()=>{

//         let text = document.querySelector('#nameslist').innerText
//         return text

//     })
//     console.log(arr)
//     i++
//     await browser.close()
//     if(arr != null){

//     }
// }
// for (let index = 0; index < arr_RU.length; index++) {
//     f(index)
// }

//--------------------------------------WORK
setInterval(async() => {
    const browser = await puppeter.launch({headless: false})
    const page  = await browser.newPage()
    await page.goto(`https://www.permgaspi.ru/politads/persons/${arr_RU[i]}`)
    
    let arr = await page.evaluate(()=>{

        let text = document.querySelector('.person-list').innerText
        return text

    })
    console.log(`ФИИ = ${arr_RU[i]}`)
    console.log(arr)
    console.log(`=========================================================================!!!!!!!!!!!!!!${arr_RU[i]}!!!!!!!!!!!!`)
    i++
    await browser.close()
    if(i == arr_RU.length){
        let dflskgjklfds = document.querySelector('#text')

    }
}, 4500);
//--------------------------------------WORK


//------------------------------------Каждая карточка
// const N = 170;
// const arrayOfNumber = Array.from(Array(N), (_, k) => k + 1);

// let id = 0;
// setInterval(async() => {
//     const browser = await puppeter.launch({headless: false})
//     const page  = await browser.newPage()
//     await page.goto(`https://www.permgaspi.ru/db/journalist/index.php?id=${arrayOfNumber[i]}`) 
//     id ++
//     let arr = await page.evaluate(()=>{

//         let text = document.querySelector('#content > div.article > h1').innerText
//         return text
        
//     })
//     if(arr != null && arr != undefined){
//         console.log(`ФИО - все работает id =${id}`)
//     }
    
    
//     let data = await page.evaluate(()=>{

//         let maininfo = document.querySelector('#content > div.article > p.dates').innerText
//         return maininfo

//     })
//     if(data != null && data != undefined){
//         console.log(`ДАТА - все работает id =${id}`)
//     }

//     let info = await page.evaluate(()=>{

//         let maininfo = document.querySelector('#content > div.article > p:nth-child(4)').innerText
//         return maininfo

//     })
//     if(info != null && info != undefined){
//         console.log(`ИНФО - все работает id =${id}`)
//     }

    
//     let work = await page.evaluate(()=>{

//         let maininfo = document.querySelector('#content > div.article > p:nth-child(6)').innerText
//         return maininfo

//     })
//     if(work != null && work != undefined){
//         console.log(`РАБОТА - все работает id =${id}`)
//     }
//     console.log('=======================================================================')
    
//     i++
//     await browser.close()
//     if(i == arrayOfNumber.length){
//         console.log('!!!STOP!!!')
//         let dflskgjklfds = document.querySelector('#text')
        

//     }
// }, 1500);
//------------------------------------------------Каждая карточка