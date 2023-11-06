const DOMSelectors = {
    card_holder: document.getElementById("card_holder"),
    card_form: document.getElementById("card_form"),
    name_input: document.getElementById("name_input"),
    age_input: document.getElementById("age_input"),
    city_input: document.getElementById("city_input"),
    btn: document.getElementById("btn"),
}

DOMSelectors.card_form.addEventListener("submit",(event) => {
    event.preventDefault()
    const new_card = {
        name: DOMSelectors.name_input.value,
        age: DOMSelectors.age_input.value,
        city: DOMSelectors.city_input.value
    }
    add_card(new_card)
    clear_fields()
})

function add_card(card){
    DOMSelectors.card_holder.insertAdjacentHTML("afterbegin", `<div class="card">
    <h1 class="card-title">${card.name}</h1>
    <h2 class="age">${card.age}</h2>
    <img src="${card.city}" alt=""> 
    <button class="remove">Remove</button>
</div>`)

    const button = document.querySelector(".remove")
    button.addEventListener("click", (event)=> {
         button.parentElement.remove()
    })
}

function clear_fields(){
   DOMSelectors.name_input.value = null;
    DOMSelectors.age_input.value = null;
    DOMSelectors.city_input.value = null;
}


