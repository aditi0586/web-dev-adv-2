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

// debugger;

// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }

// first()

// function infinite(){
//     Infinity()
// }

// infinite()

// console.log(a)
// let a = 10

// console.log("first line")
// setTimeout(()=>{console.log("line after 2 sec")},2000)
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")



// setTimeout(() => {
//     alert("after 3 sec")
// },3*1000);

// const timerId=setInterval(() => {
//     console.log(" after 3 sec")
// },1000);
// console.log(timerId)
// clearInterval()
// setTimeout(() => {
//     clearInterval(timerId)
// },10*1000);

// let count=0;
// const timerid=setInterval(() => {
//     count++;
//     console.log("1 second passed",count);
//     if(count===10){
//         clearInterval(timerid);
//         console.log("interval cleared");
//     }
// }, 1000);

// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)


// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1
// },1000)

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     const li=document.createElement('li')
//     li.innerText=name.value
// list.appendChild(li)
// name.value=""
// })


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     if(name.value==="")return;
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")


//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })


//     list.appendChild(li)
//     li.appendChild(dlt)

    
//     name.value=""
// })

// function greet(){
//     console.log("Hello World")
// }

// function print(sample, num){
//     sample()
//     console.log("total students are", num)
// }
// greet()
// print(greet, 45)


// function greet(xyz){
//     setTimeout(()=>{
//     console.log("Hello World")
// },2000)
// xyz(45)
// }

// function print(num){
//     console.log("total students are", num)
// }
// greet(print)



// console.log("starting homework....");
// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("starting dinner...");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("getting ready to go out....");

//         setTimeout(() => {
//             console.log("going to the playground!");
//         }, 1000);             
//     }, 1500);
// }, 2000);




// function finishhomework(callback){
//     console.log("starting homework....");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }



// function finishHomework(callback){
//     console.log("starting homework....");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }
// function eatDinner(callback){
//     console.log("starting dinner....");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }

// function goToPlayground(){
//     console.log("going to the playground....");
// }
// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground()
//     }); 
// });





const p=new Promise((res, rej)=>{
    let done=true
    setTimeout(()=>{
        if(done){
            res("work is done!!")
        }else{
            rej("work is not done")
        }
    }, 5000);
})
// console.log(p)
p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally blocked")
})