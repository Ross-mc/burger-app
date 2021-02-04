//adding event listeners for all eatBtns to dynamically send a put request to server
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
        if (response.ok === true){
            location.reload('/')
        } else {
            alert('Error connecting to Database')
        }
    })
};

eatBtns.forEach(btn => {
    btn.addEventListener("click", eatBtnClickHandler)
});

//handling post requests

const orderBtn = document.querySelector("#orderBtn");
const burgerInput = document.querySelector("#burgerName");


const orderBtnClickHandler = (event) => {
    event.preventDefault();
    const burgerName = burgerInput.value;
    console.log(burgerName);
}

orderBtn.addEventListener("click", orderBtnClickHandler)
