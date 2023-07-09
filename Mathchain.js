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
//div of equations

//making plus 
let box1=document.getElementById('box1')//plus
let box2=document.getElementById('box2')//plus
//
//making boxes react
let box1R= Math.floor(Math.random()*100)//plus
let box2R= Math.floor(Math.random()*100)//plus
//
//adding random values in boxes
box1.innerText=box1R//plus
box2.innerText=box2R//plus
//
//making box1+box2
let plus_result= box1R + box2R//plus

//making user input
let box3_input=document.getElementById('box3')//plus
//
//hiding the plus, multiply button
let plus_b=document.getElementById('plus_equal')//
plus_b.style.display='none'
//
//after adding user input displaying the plus button
box3_input.onkeyup=()=>{
    plus_b.style.display='block'
}
//
//main logic of plus
//multiplication
let multiplication=document.getElementById('multiply')
multiplication.style.display='none'
//
//values in boxes of multiplication
let box4=document.getElementById('box4')
let box5=document.getElementById('box5')
//
//making multiplied both the values
let box5r=Math.floor(Math.random()*10)
//
//adding values in boxes
box5.innerText=box5r
//
//
//mathchain
let mathchain=document.getElementById('Mathchain')
//
//multiply button
let multiply_eqaul=document.getElementById('multiply_equal')
multiply_eqaul.style.display='none'
//multiply input
let box6=document.getElementById('box6')
box6.onkeyup=()=>{
    multiply_eqaul.style.display='block'
}
//
//Subtraction Button
//subtraction
let Subtraction=document.getElementById('subtract')
Subtraction.style.display='none'
//
//values in boxes of subtraction
let box7=document.getElementById('box7')
let box8=document.getElementById('box8')
//
//making subtracted both the values
let box8r=Math.floor(Math.random()*100)
//
//adding values in boxes
box8.innerText=box8r
//
//subtract button
let subtract_eqaul=document.getElementById('subtract_equal2')
subtract_eqaul.style.display='none'
//multiply input
let box9=document.getElementById('box9')
box9.onkeyup=()=>{
    subtract_eqaul.style.display='block'
}


//
//plus div
let plus_div=document.getElementById('plus')
let input_replace=document.getElementById('input_replace')
input_replace.style.display='none'
plus_b.onclick=()=>{
    if(box3_input.value==plus_result){
        plus_b.style.display='none'
        multiplication.style.display='block'
        box4.innerText=box3.value
        box3_input.replaceWith(input_replace)
        input_replace.style.display='block'
        input_replace.innerText=box3_input.value
    }else{
        plus_div.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 6000);
    }
}
////
//note for subtraction
let note=document.getElementById('note')
note.style.display='none'
//multiply button
let input_replace1=document.getElementById('input_replace1')
input_replace1.style.display='none'
multiply_eqaul.onclick=()=>{
    if(box6.value==box4.innerText * box5.innerText){
        multiply_eqaul.style.display='none'
        box6.replaceWith(input_replace1)
        input_replace1.style.display='block'
        input_replace1.innerText=box6.value
        Subtraction.style.display='block'
        //
        box7.innerText=box6.value
        note.style.display='block'
    }else{
        alert('wrong')
        mathchain.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 6000);
    }
}

//
//subtract button
let input_replace2=document.getElementById('input_replace2')
input_replace2.style.display='none'
subtract_eqaul.onclick=()=>{
    if(box9.value==box7.innerText - box8.innerText){
        box9.replaceWith(input_replace2)
        input_replace2.style.display='block'
        input_replace2.innerText=box6.value
        subtract_eqaul.style.display='none'
        //
        mathchain.replaceWith(win)
        win.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 6000);
    }else{
        alert('wrong')
        mathchain.replaceWith(lose)
        lose.style.display='block'
        setTimeout(() => {
            location.reload()
        }, 6000);
    }
}











