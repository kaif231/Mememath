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
//getting media elements of lose
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
//
//making Quiz 
//
//Taking scoreboards
let right=document.getElementById('right')
let wrong=document.getElementById('wrong')
//
//Questions
let question2=document.getElementById('q2')
let question3=document.getElementById('q3')
let question4=document.getElementById('q4')
let question5=document.getElementById('q5')
question2.style.display='none'
question3.style.display='none'
question4.style.display='none'
question5.style.display='none'
//
//Question one

    //quetion1 div
let question1=document.getElementById('q1')
//
//taking question1 options o1, o2 &o3
let o1=document.getElementById('o1')
let o2=document.getElementById('o2')
let o3=document.getElementById('o3')
//
//options(o1, o2, o3)
o1.onclick=()=>{
    question1.replaceWith(win)
    win.style.display='block'
    //score
    right.innerText = ++right.innerText;
    //
    let a1=new Audio('win.mp3')
    a1.play()
    setTimeout(() => {
        win.replaceWith(question2)
        question2.style.display='block'
    }, 5000);
}
o2.onclick=()=>{
    question1.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question2)
        question2.style.display='block'
    }, 5000);
}
o3.onclick=()=>{
    question1.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question2)
        question2.style.display='block'
    }, 5000);
}
//Question two
//
//taking question1 options o4, o5 &o6
let o4=document.getElementById('o4')
let o5=document.getElementById('o5')
let o6=document.getElementById('o6')
//
//options(o4, o5, o6)
o4.onclick=()=>{
    question2.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question3)
        question3.style.display='block'
    }, 5000);
}
o5.onclick=()=>{
    question2.replaceWith(win)
    win.style.display='block'
    //score
    right.innerText = ++right.innerText;
    //
    let a1=new Audio('win.mp3')
    a1.play()
    setTimeout(() => {
        win.replaceWith(question3)
        question3.style.display='block'
    }, 5000);
}
o6.onclick=()=>{
    question2.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question3)
        question3.style.display='block'
    }, 5000);
}
//
//Question three
//
//taking question1 options o7, o8 &o9
let o7=document.getElementById('o7')
let o8=document.getElementById('o8')
let o9=document.getElementById('o9')
//
//options(o1, o2, o3)
o7.onclick=()=>{
    question3.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question4)
        question4.style.display='block'
    }, 5000);
}
o8.onclick=()=>{
    question3.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question4)
        question4.style.display='block'
    }, 5000);
}
o9.onclick=()=>{
    question3.replaceWith(win)
    win.style.display='block'
    //score
    right.innerText = ++right.innerText;
    //
    let a1=new Audio('win.mp3')
    a1.play()
    setTimeout(() => {
        win.replaceWith(question4)
        question4.style.display='block'
    }, 5000);
}
//
//Question four
//
//taking question1 options o10, o11 &o12
let o10=document.getElementById('o10')
let o11=document.getElementById('o11')
let o12=document.getElementById('o12')
//
//options(o1, o2, o3)
o10.onclick=()=>{
    question4.replaceWith(win)
    win.style.display='block'
    //score
    right.innerText = ++right.innerText;
    //
    let a1=new Audio('win.mp3')
    a1.play()
    setTimeout(() => {
        win.replaceWith(question5)
        question5.style.display='block'
    }, 5000);
}
o11.onclick=()=>{
    question4.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question5)
        question5.style.display='block'
    }, 5000);
}
o12.onclick=()=>{
    question4.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
    setTimeout(() => {
        lose.replaceWith(question5)
        question5.style.display='block'
    }, 5000);
}
//
//
//Question five
//
//taking question1 options o13, o14 &o15
let o13=document.getElementById('o13')
let o14=document.getElementById('o14')
let o15=document.getElementById('o15')
//
//options(o1, o2, o3)
o13.onclick=()=>{
    question5.replaceWith(win)
    win.style.display='block'
    //score
    right.innerText = ++right.innerText;
    //
    let a1=new Audio('win.mp3')
    a1.play()
}
o14.onclick=()=>{
    question5.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
}
o15.onclick=()=>{
    question5.replaceWith(lose)
    lose.style.display='block'
    //score
    wrong.innerText = ++wrong.innerText;
    //
    let a1=new Audio('lose.mp3')
    a1.play()
}
//