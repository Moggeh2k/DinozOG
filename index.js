// JavaScript source code
let myArray = []

const Submit = (event) => {
    event.preventDefault()
    const category = document.getElementById('category').value;
    const problem = document.getElementById('problem').value;
    const coder = document.getElementById('coder').value;
    const data = { category, problem, coder }
    myArray.push(data)
    const liste = document.createElement('li')
    liste.className = coder
    liste.appendChild(document.createTextNode(JSON.stringify(data)))
    document.getElementById('liste').appendChild(liste)
    localStorage.setItem("mylist", JSON.stringify(myArray))
}


document.addEventListener("DOMContentLoaded", () => {
    const myData = localStorage.getItem("mylist") || "[]"
    myArray = JSON.parse(myData)
    myArray.forEach((data) => {
        const listElement = document.createElement("li")
        listElement.appendChild(document.createTextNode(JSON.stringify(data)))

        document.getElementById("liste").appendChild(listElement)
    })

    console.log("Document Ready")
});