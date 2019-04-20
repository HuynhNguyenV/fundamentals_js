// PROMISE                   
/* Every Promise() structure has 2 parts */
//First Part           
/* Create the Promise() and define the conditions of what is considered successful and not successful.*/

let promise1 = new Promise((resolve, reject) =>{
    let dataReceivedSuccessfully = false;

    /* This is an arbitrary variable and is NOT part of the Promise */
    if(dataReceivedSuccessfully){
        //This condition is considered successful, hence invoke resolve()
        resolve('Data Available');
    }
    if(!dataReceivedSuccessfully){
        //This condition is considered NOT successful, hence invoke reject()
        reject('Data Corrupted!');
    }
})
//Second Part
/* Define what to do when the successful condition(i.e. resolve()) is 
met, and what to do when the not successful 
condition(i.e. reject()) is met. */
promise1.then((message) =>{
    console.log(message);
    /* define the resolve() function, in other words, what to do when the promise is successful. */
}).catch((message) => {
    console.log(message);
    /* define the reject() function, in other words, what to do when the promise is NOT successful.*/
})



