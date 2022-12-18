// initalize the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count


let countEl = document.getElementById("count-el") // pass in argument to work with
let saveEl = document.getElementById("save-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}
function reset() {
    alert("count reset")
    saveEl.textContent = "Previous entries: "
}
