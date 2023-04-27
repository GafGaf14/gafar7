let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#464553"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})
document.querySelector('.open').addEventListener('click', () =>{
    document.querySelector('.burger').classList.toggle('active')
})