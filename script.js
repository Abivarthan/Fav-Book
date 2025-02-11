var Overlay=document.querySelector(".overlay")
var Popup=document.querySelector(".popup")
var showbtn=document.querySelector(".addbtn")
showbtn.addEventListener("click",function() {
    Overlay.style.display="block"
    Popup.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    Overlay.style.display="none"
    Popup.style.display="none"    
})
var Container=document.getElementById("container")
var AddBook=document.getElementById("add-book")
var BookName=document.getElementById("Book-Name")
var Author=document.getElementById("Author")
var Description=document.getElementById("description")
var BookDetail=document.getElementById("book-detail")
AddBook.addEventListener("click",function(event){
    event.preventDefault()
    var Div=document.createElement("div")
    Div.setAttribute("id","book-detail")
    Div.innerHTML=`<h2>${BookName.value}</h2>
    <h4>${Author.value}</h4>
    <p>${Description.value}</p>
    <button id="delbtn" onclick="deletebook(event)">Delete</button>`
    Container.append(Div)
    Overlay.style.display="none"
    Popup.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}