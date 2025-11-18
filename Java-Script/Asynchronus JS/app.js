//Asynchronus Java Script

//=============================CALL BACK HELL=========================================

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() =>{
                console.log("Step 4");
            },1000)

        }, 1000);

    }, 1000);

}, 1000);


//=====================================To avoid CALL BACK HELL "WE USE PROMISES"==========

const p = new Promise((resolve,reject)=>{      //<---------- CREATING A PROMISE
    const success = false;
    const error = "Something went Wrong";
    if (success) resolve(20);
    else reject(error);
})

p.then((value) => {                           //<----------- CONSUMING A PROMISE
    console.log("Success",value);
})
.catch((err) => {
    console.log("Failed:", err);
});


//========================================USE OF Pomise In CREATING A Functio============
function wait(ms){
    return new Promise((resolve) =>{
                setTimeout(()=>{
                    resolve("Hello");
                },ms)
    });
}

wait(2000).then((ans)=>{console.log(ans+" This Statment Returned after 2000ms")})