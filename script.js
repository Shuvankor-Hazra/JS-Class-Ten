// querySellector
// Example 1
const tag1 = document.querySelector("h1");
console.log(tag1);

// Example 2
const class1 = document.querySelector(".class1");
console.log(class1);

// Example 3
const id1 = document.querySelector("#id1");
console.log(id1);

// querySelectorAll
// Example 1
const tag1 = document.querySelectorAll("h1");
console.log(tag1);

// Example 2
const class1 = document.querySelectorAll(".class1");
console.log(class1);

// Example 3
const id1 = document.querySelectorAll("#id1");
console.log(id1);

//
const tag2 = document.getElementsByTagName("h1");
console.log(tag2);

const class2 = document.getElementsByClassName("class1");
console.log(class2);

//childnodes
const id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.childNodes);

//children
const id1 = document.getElementById("list-id");
console.log(id1);
console.log(id1.children);

// createElement
const newList = document.createElement("li");
newList.innerHTML = "List 5";
console.log(newList.innerHTML);

// appendchild
// Example 1
const newList = document.createElement("li");
newList.innerText = "List 5";
const listid = document.getElementById("list-id");
listid.appendChild(newList);

// Example 2
const id1 = document.getElementById("div-text");
const newHeading = document.createElement("h2");
newHeading.innerText = "This is Heading Two";
id1.appendChild(newHeading);

// removeChild
const id1 = document.getElementById("list-id");
const list1 = id1.children[1];
id1.removeChild(list1);

// replaceChild
const id1 = document.getElementById("list-id");
const list3 = id1.children[2];
const newList = document.createElement("li");
newList.innerText = "New List";
id1.replaceChild(newList, list3);

// title
console.log(document.title);
document.title = "New JavaScript Title";

// body
console.log(document.body);
document.body.innerHTML = "<h1>This is only JavaScript Heading!</h1>";

// innerHTML/innerText
const id1 = document.getElementById("id1");
id1.innerHTML = "<p>This is a paragraph</p>";
