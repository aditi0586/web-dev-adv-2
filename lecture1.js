// console.log(document)
// const para = document.querySelector('p')
// para.innerText = "this is updated end"

// const para=document.getElememtByClassName("para")
// para[0].innerText="This is updated paragraph text"
// para[1].style.color="red"
// console.log(para)

// const para=document.querySelectorAll(".para")
// para[0].innerText="This is updated paragraph text"
// para[1].style.color="red"
// console.log(para);

// let arr= [1,2,3,4,5]
// const newarr= arr.forEach((ele)=>console.log(ele))

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading<h1>"
// console.log(container)

// const btn=document.querySelector("button");
// btn.classList.add("btn")


// function print(){
//     console.log("Button clicked");
// }
// btn.addEventListener('click',print)
// btn.removeEventListener('click',print)


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);




// const click=document.querySelector(".click")
// const stop=document.querySelector(".stop")

// function message(){
//     console.log("Button Clicked")
    
// }

// click.addEventListener('click',message)
// stop.addEventListener('click',()=>{
//     console.log("stop button clicked!!")
//     click.removeEventListener('click',message)
// })



// const click=document.querySelector(".click")

// function message(event){
//     console.log(event.key)
//     console.log("Button Clicked")
// }

// click.addEventListener('keyup',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")
// const btn=document.querySelector(".button")

// div.addEventListener('click',()=>{ console.log("clicked the div")},false)
// div.addEventListener('click',()=>{ console.log("clicked the outer div")},false)
// div.addEventListener('click',()=>{ console.log("clicked the button")},false)

// js execution context


// console.log(a);
// console.log(b);

// var a = 678;
// let b = 567;

// console.log(a);
// console.log(b);

// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }

// print()


// function greet(){
//     var message="hello"
//     console.log(message)
// }

// greet()
// console.log(message)

debugger;

function first(){
    second()
}

function second(){
    third()
}

function third(){
    console.trace()
}

first()