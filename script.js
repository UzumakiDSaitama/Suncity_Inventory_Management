document.getElementById("itemForm")?.addEventListener("submit", function(e){
e.preventDefault()

let item = {
 id: Date.now(),
 name: document.getElementById("name").value,
 category: document.getElementById("category").value,
 qty: Number(document.getElementById("qty").value),
 supplier: document.getElementById("supplier").value
}

let items = JSON.parse(localStorage.getItem("inventory")) || []
items.push(item)
localStorage.setItem("inventory", JSON.stringify(items))
alert("Record Saved Successfully")
this.reset()
})

function loadItems(){
let items = JSON.parse(localStorage.getItem("inventory")) || []
let table = document.getElementById("tableBody")
table.innerHTML = ""

items.forEach((item,index)=>{

let statusText = "In Stock"
let rowClass = ""

if(item.qty < 20){
 statusText = "Low Stock"
 rowClass = "low-stock"
}

table.innerHTML += `<tr class="${rowClass}">
<td>${item.name}</td>
<td>${item.category}</td>
<td>${item.qty}</td>
<td>${item.supplier}</td>
<td>${statusText}</td>
<td><button onclick="deleteItem(${index})">Delete</button></td>
</tr>`
})
}

function deleteItem(index){
let items = JSON.parse(localStorage.getItem("inventory"))
items.splice(index,1)
localStorage.setItem("inventory", JSON.stringify(items))
loadItems()
}
