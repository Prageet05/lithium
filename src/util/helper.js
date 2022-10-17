const today=new Date()

let date=today.getDate()
// console.log(date)

let month=today.getMonth()
// console.log(month)

const info={
    name:"Lithium",
    week:"W3",
    day:"D5",
    topic:"The topic being taught today is 'NodeJs Module system'"
}
function batchInfo(){
console.log(`${info.name}, ${info.week+info.day}, ${info.topic}`)
// batchInfo()
}


function together(){
console.log(date);
console.log(month+1);
return(batchInfo());
}
// together()

module.exports.problem2=together