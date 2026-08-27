const card = document.querySelector(".card");
const link = document.getElementById("link");

card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
});

card.addEventListener("keydown", (event) => {
    if(
        event.target === card &&
        (event.key === "Enter" || event.key === " ") 
    ) {
        event.preventDefault();
        card.classList.toggle("is-flipped");
    }
});

link.addEventListener("click", (event) => {
    event.stopPropagation();
});

