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
})

function add_card(card){
    console.log(card)
}