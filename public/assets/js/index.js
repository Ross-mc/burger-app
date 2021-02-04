const eatBtns = document.querySelectorAll(".eatBtn");

const eatBtnClickHandler = event => {
    const btn = event.target;
    const id = btn.getAttribute("data-id");
    fetch(`/api/burger/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log(response)
    })
}


eatBtns.forEach(btn => {
    btn.addEventListener("click", eatBtnClickHandler)
})
