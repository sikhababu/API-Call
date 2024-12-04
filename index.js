fetch("https://jsonplaceholder.typicode.com/users").then ((res)=> {

return res.json()

}).then((response) =>{

    console.log(response)
})

.catch ((err) => {

    console.log("error occured",err);
})