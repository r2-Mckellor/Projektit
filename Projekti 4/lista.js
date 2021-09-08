function enterKeyPressed(event) {
      if (event.keyCode === 13) {
         alert("hello");
    }
}

function addTask()
var li = document.addTask("li");
var inputValue = document.getElementById("task").value;
var t = document.createTextNode(inputValue);
li.appenChild(t);

if (inputValue == '') {
  alert("you didnt tell what you wanted to do");
} else {
  document.getElementById("list").appenChild(li);
}
document.getElementById("task").value = "";

var span = document.addTask("SPAN")
