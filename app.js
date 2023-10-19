const DOMSelectors = {
    form: document.querySelector("#form"),
    //grab the text input
    //grab all the h2s
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};

console.log(DOMSelectors.firstName);
console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.firstName.value);
});
