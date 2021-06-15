/*name='rock';
let skillLevel = name === 'chris' ? 5 : 10;

console.log(skillLevel);  //disert the ternary tomorrow */


var student={
    "10026150":{
        "name":"Y.R.Samarasingha",
        "fac":"FOC",
        "batch":"18.2",
        "subjects":["C#"]
    },
    "10026140":{
        "name":"M.S.D.Fernando",
        "fac":"FOC",
        "batch":"18.2"
    }

}

//keep a copy
var studentCopy=JSON.parse(JSON.stringify(student));

function addStudent(id,key,val) {
    if (id==="") {
        delete student.id.key;
    }else if (key==="subjects") {
        student[id][key]=student[id][key]||[];
        student[id][key].push(val);
        
    } else {
        student[id][key]=val;
    }

    return student;
}

//console.log(addStudent("10026150","subjects","Javacript"));

function lookUp(pram) {
    return student[pram];
}

console.log(lookUp("10026150"));