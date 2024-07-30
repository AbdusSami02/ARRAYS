//Task1
document.write("<h1>Task 1 </h1>")
var arr =[]
document.write("Student name ")
//task 2
document.write("<h1>Task 2 </h1>")
var fruits =["Mango","Apple","Grapes"]
document.write( "String Arrey =" ,fruits)
//task 
document.write("<h1>Task 3 </h1>")
var number = [1,2,3,4 ]
document.write("Number arrey =" , number)
//task 4
// document.write("<h1>Task 4 </h1>")
// var bolean = [True,False,True]
// document.write("Bolean arrey =", bolean);
//task 5
document.write("<h1>Task 5 </h1>")
var arrey = ["Sami", 17, ]
document.write(arrey)
//task 6
document.write("<h1>Task 6 </h1>")
var qualifications = [
    "SSC",
    "HSC",
    "BSC",
    "BS",
    "BCOM",
    "MS",
    "M. Phill.",
    "PhD",
  ];
  document.write(`<h3>${qualifications} </h3>`)
  //task 7
  document.write("<h1>Task  7</h1>")
  var student = ["Ahmed", "Sami" ,"Sohaib"]
  var score = [250, 180, 200]
  for (let i = 0; i < student.length || i < score;   i++) {
    document.write(`<h3>Score of ${student[i]} is ${score[i]}. Percentage ${(score[i] / 300) * 100} </h3>`)
    }