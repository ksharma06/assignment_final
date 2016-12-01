
let books = [
{author: 'Thomas Pynchon', title: 'Bleeding Edge'},
{author: 'Haruki Murakami', title: '1Q84'},
{author: 'John D MacDonald', title: 'Nightmare in Pink'},
{author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'}

]

let user = [
  {name: 'Kanchan', email: 'kanchan@gmail.com', librarycard: 1, issuedbooks:0},
  {name: 'Raman', email: 'raman@gmail.com', librarycard: 2, issuedbooks:0},
  {name: 'Neha', email: 'neha@gmail.com', librarycard: 3, issuedbooks:0},
  {name: 'Nancy', email: 'nancy@gmail.com', librarycard: 4, issuedbooks:0}
  ]

function authSearch(){
	let aName = document.getElementById('authorSearch').value
	let name = books.filter((x) => x.author === aName)
	if(name.length>0)
	{
		document.getElementById('result').innerHtml = 'yes there are books by' +aName
		for(var i=0; i<name.length;i++)
		{
			let listItem = document.createElement('li')
			let textnode = document.createTextNode(name[i].author)
			listItem.appendChild(textnode)
			document.getElementByid('result').appendChild('listItem')
		}
	}
	
	else{
		document.getElementById('result').innerHtml = 'Sorry no books by'  +aName
	}
}

function addBook(){
books.push({author:document.getElementById('author').value, title:document.getElementById("addbook").value});
document.getElementById("author").value="";
document.getElementById("addbook").value="";
}

function showAllBooks(){
	// let listItem = document.createElement('li')
	// let textnode = document.createTextNode('a book')
	// listItem.appendChild(textnode)
	// document.getElementById('allTheBooks').appendChild(listItem)

	
    for (let i = 0; i < books.length; i++) {
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`${books[i].title} by ${books[i].author} in ${books[i].genre}`)
    listItem.appendChild(textnode)
     document.getElementById('allTheBooks').appendChild(listItem)
 }

}

function addUser(){
user.push({author:document.getElementById('addnewuser').value, title:document.getElementById("added").value});
document.getElementById("addnewuser").value="";
document.getElementById("added").value="";
}