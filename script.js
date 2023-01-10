const first = document.querySelector("#first")
const second = document.getElementById("second")
const third = document.getElementById("third")

first.addEventListener("click", () => console.log(1), true)
second.addEventListener("click", () => {
    console.log(2)
})
third.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log(3)
})
