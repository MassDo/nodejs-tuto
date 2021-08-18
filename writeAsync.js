const {readFile, writeFile} = require('fs')

console.log("premier mess");
writeFile("./content/coco.txt", 'coco', (err, result)=>{
    if (err){
        console.log(err)
    }else{
        console.log("deuxieme mess");
    }
})
console.log("troisieme mess");