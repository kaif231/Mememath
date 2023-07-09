//
//Getting media elements of win
let h1=document.getElementById('h1')
let h2=document.getElementById('h2')
let h3=document.getElementById('h3')
let h4=document.getElementById('h4')
let h5=document.getElementById('h5')
let h6=document.getElementById('h6')
let h7=document.getElementById('h7')
let h8=document.getElementById('h8')
let h9=document.getElementById('h9')
let h10=document.getElementById('h10')
let h11=document.getElementById('h11')
let h12=document.getElementById('h12')
//
//getting media elements of of lose
let s1=document.getElementById('s1')
let s2=document.getElementById('s2')
let s3=document.getElementById('s3')
let s4=document.getElementById('s4')
let s5=document.getElementById('s5')
let s6=document.getElementById('s6')
let s7=document.getElementById('s7')
let s8=document.getElementById('s8')
let s9=document.getElementById('s9')
let s10=document.getElementById('s10')
let s11=document.getElementById('s11')
let s12=document.getElementById('s12')
let s13=document.getElementById('s13')
//
//Storing win lose elements in array
let H=[
    h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12
]
let S=[
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s11, s12, s13
]
//
//making win lose array create random choices
let win=H[Math.floor(Math.random()*H.length)]
let lose=S[Math.floor(Math.random()*S.length)]
//
//hiding win and lose array before event happens
H.forEach(element => {
    element.style.display='none'   
});
S.forEach(element => {
    element.style.display='none'    
});
//
//hiding array random choices before event
win.style.display='none'
lose.style.display='none'
//


//addition
//making main and making actable with event of array element
let main2=document.getElementById('Main2')
//

//
//Taking random number in boxes
let num1 = document.getElementById('p1')
let num2 = document.getElementById('p2')
//
//Making random number in Num1, num2
let num1r = Math.floor(Math.random() * 100)
let num2r = Math.floor(Math.random() * 100)
//
//making random value render
num1.innerText = num1r
num2.innerText = num2r
//
//putting the num1 &num2 in num3
let num3 = num1r + num2r


//Making user answer input
let equal = document.getElementById('equal')
let plus = document.getElementById('plus')
//hidind pluse button
plus.style.display='none'
//
//making equal display plus buton on key up
equal.onkeyup=()=>{
    plus.style.display='block'
}
//
//making user give answers.
plus.onclick = () => {
    //making other elements go down
    if (equal.value == num3) {
        let aa = new Audio('win.mp3')
        aa.play()
        //
        main2.replaceWith(win)
        win.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    } else {
        let bb = new Audio('lose.mp3')
        bb.play()
        //
        main2.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    }
}













//
//
//Subtraction
//making main and making actable with event of array element
let main3=document.getElementById('Main3')
//

//
//Taking random number in boxes
let num4 = document.getElementById('p3')
let num5 = document.getElementById('p4')
//
//Making random number in Num1, num2
let num4r = Math.floor(Math.random() * 100)
let num5r = Math.floor(Math.random() * 100)
//
//making random value render
num4.innerText = num4r
num5.innerText = num5r
//
//putting the num1 &num2 in num3
let num6 = num4r - num5r


//Making user answer input
let equal1 = document.getElementById('equal1')
let minus = document.getElementById('minus')
//hidind pluse button
minus.style.display='none'
//
//making equal display plus buton on key up
equal1.onkeyup=()=>{
    minus.style.display='block'
    main3.style.cssText='height: 300px;'
}
//
//making user give answers.
minus.onclick = () => {
    //making other elements go down
    if (equal1.value == num6) {
        let aa = new Audio('win.mp3')
        aa.play()
        //
        main3.replaceWith(win)
        win.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    } else {
        let bb = new Audio('lose.mp3')
        bb.play()
        //
        main3.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    }
}













//
//
//multiplication
//making main and making actable with event of array element
let main4=document.getElementById('Main4')
//

//
//Taking random number in boxes
let num7 = document.getElementById('p5')
let num8 = document.getElementById('p6')
//
//Making random number in Num1, num2
let num7r = Math.floor(Math.random() * 30)
let num8r = Math.floor(Math.random() * 30)
//
//making random value render
num7.innerText = num7r
num8.innerText = num8r
//
//putting the num1 &num2 in num3
let num9 = num7r * num8r


//Making user answer input
let equal2 = document.getElementById('equal2')
let multiply = document.getElementById('multiply')
//hidind pluse button
multiply.style.display='none'
//
//making equal display plus buton on key up
equal2.onkeyup=()=>{
    multiply.style.display='block'
}
//
//making user give answers.
multiply.onclick = () => {
    //making other elements go down
    if (equal2.value == num9) {
        let aa = new Audio('win.mp3')
        aa.play()
        //
        main4.replaceWith(win)
        win.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    } else {
        let bb = new Audio('lose.mp3')
        bb.play()
        //
        main4.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 5000);
    }
}
console.log('cdcd')


























//
//Redirecting to MathQuiz Page
let mathquiz=document.getElementById('MathQuiz')
mathquiz.onclick=()=>{
    window.location.href='Mathquiz.html'
}
//
//making Quiz 
//
//Taking scoreboards
let right=document.getElementById('right')
let wrong=document.getElementById('wrong')
//
//Redirecting to mathchain Page
let mathchain=document.getElementById('Mathchain')
mathchain.onclick=()=>{
    window.location.href='Mathchain.html'
}
//
//Redirecting to mathbook Page
let mathbook=document.getElementById('Mathbooks')
mathbook.onclick=()=>{
    window.location.href='Mathbook.html'
}
//
//Redircting to meme page
let memepage=document.getElementById('Memepage')
memepage.onclick=()=>{
    window.location.href='Memepage.html'
}