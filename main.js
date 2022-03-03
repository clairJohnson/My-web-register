studentarray=[];
function submit(){
var name1=document.getElementById("nameofstudent1").value;
var name2=document.getElementById("nameofstudent2").value;
var name3=document.getElementById("nameofstudent3").value;
var name4=document.getElementById("nameofstudent4").value;

studentarray.push(name1);
studentarray.push(name2);
studentarray.push(name3);
studentarray.push(name4);

console.log(studentarray);

document.getElementById("displayname").innerHTML=studentarray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
studentarray.sort();
console.log(studentarray);
document.getElementById("displayname").innerHTML=studentarray;
}