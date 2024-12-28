const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wooden-leaf-village.jpg") {
    myImage.setAttribute("src", "images/wooden-leaf-village2.jpeg");
  } else {
    myImage.setAttribute("src", "images/wooden-leaf-village.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("来者何名?");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `欢迎来到木叶村, ${myName}`;
      }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `欢迎来到木叶村, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
  };
  
  