let btn = document.querySelector("button");
let li = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value

    let del = document.createElement("button");
    del.innerText = "DELETE";

    del.classList.add("delete")
    item.appendChild(del)
    ul.appendChild(item)
    console.log(inp.value)
    inp.value=""
})

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName)
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement
        console.log(listItem)
        console.log("DELETE TO DO")
        listItem.remove()
    }
    else{
        console.log("DO NOT DELETE");
    }
})