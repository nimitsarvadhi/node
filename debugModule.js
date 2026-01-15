async function errorcheck() {
    let num = Math.floor(Math.random()* 10 + 1)
    if(num<4){
        throw Error
    }
    else{
        console.log("Printed successfully")
    }
}
errorcheck()