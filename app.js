const DOMSelectors = {
    title: document.getElementById("header-title"),
    summary: document.querySelector(".summary"),
    newdiv: document.getElementById("newdiv"),
};

console.log(DOMSelectors.title)

DOMSelectors.title.innerText = ("Sleepy Time")

function appendTitle(extraword) {
    DOMSelectors.title.innerText = DOMSelectors.title.innerText + extraword;
}

appendTitle ("poopystinky");

console.log(DOMSelectors.newdiv.children[0].innerText);