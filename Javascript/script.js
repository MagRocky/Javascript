//selecting popup box,popup overlay,buttton
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")

var addpopupbutton=document.getElementById("add-popup-button")


// Event listener for the add popup button
addpopupbutton.addEventListener("click", function () {
    // Clear input fields
    booktitleinput.value = "";
    bookdescriptioninput.value = "";

    // Show the popup overlay and popup box
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});


//select cancel button
var cancelbutton=document.getElementById("cancel-popup")


cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select "continer","add-book","book-title-input","book-author-input","book- description-input"

var continer=document.querySelector(".continer")

var addbook=document.getElementById("add-note")
var booktitleinput=document.getElementById("note-title-input")
var bookdescriptioninput=document.getElementById("note- description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","note-continer")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletenote(event)">Delete</button>`
    continer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


})
function deletenote(event)
{
    event.target.parentElement.remove()
}