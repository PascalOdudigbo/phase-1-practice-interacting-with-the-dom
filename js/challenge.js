const allValues = [];

document.addEventListener("DOMContentLoaded", ()=>{
    const counter = document.getElementById("counter");
    let incrementPerSec = setInterval(incrementCounterPerSecond, 1000);
    const btnMinus = document.getElementById("minus");
    const btnPlus = document.getElementById("plus");
    const btnLike = document.getElementById("heart");
    const btnPause = document.getElementById("pause");
    const form = document.getElementById("comment-form");
    const comment = document.getElementById("comment-input");
    //const btnSubmit = document.getElementById("submit");
    const commentParent = document.getElementById("list");
    
    btnMinus.addEventListener("click", ()=> {
        let value = parseInt(counter.textContent, 10);
        counter.textContent = value -= 1;
    });
    btnPlus.addEventListener("click",()=> {
        let value = parseInt(counter.textContent, 10);
        counter.textContent = value += 1;
    });
    btnLike.addEventListener("click" ,(event)=> {
        //console.log(ul_Likes);
        let likeCount = 0;
        let value = parseInt(counter.textContent, 10);
        if (allValues.length !== 0){
            allValues.forEach((val)=>{
                //console.log("got here");
                if (val === value){
                    let liPrev = document.getElementById(value);
                    //console.log(liPrev);
                    let liValuesArray = liPrev.textContent.split("");
                    //console.log(`values array: ${liValuesArray[17]}`);
                    likeCount = parseInt(liValuesArray[17], 10);
                    likeCount += 1;
                    liPrev.innerText = `${value} has been liked ${likeCount} times`;
                }
                else{
                    initializeAndAppendNewLike(value, likeCount);
                    
                }
    
               
            });
        }
        else {
            
            initializeAndAppendNewLike(value, likeCount);
        }
         
    });
    btnPause.addEventListener("click", () =>{
        if(btnLike.disabled === btnMinus.disabled === btnPlus.disabled === false){
            btnLike.disabled = true;
            btnMinus.disabled = true;
            btnPlus.disabled = true;
            clearInterval(incrementPerSec)
        }
        else{
            btnLike.disabled = false;
            btnMinus.disabled = false;
            btnPlus.disabled = false;
            incrementPerSec = setInterval(incrementCounterPerSecond, 1000);
        }
    });
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const p = document.createElement("p");
        p.innerText = comment.value;
        commentParent.appendChild(p);
    })
})

const incrementCounterPerSecond = ()=> {
    const counter = document.getElementById("counter");
   let value = parseInt(counter.textContent, 10);
    counter.textContent = value += 1;
}
const initializeAndAppendNewLike = (value, likeCount) =>{
            let li = document.createElement("li");
            li.setAttribute("id", value);
            const likes = document.querySelector("ul");
            likeCount += 1;
            let comment = `${value} has been liked ${likeCount} times`;
            console.log(comment);
            li.innerText = comment;
            likes.appendChild(li);
            allValues.push(value);
            // console.log(allValues)
}