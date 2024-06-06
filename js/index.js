var siteName= document.getElementById("siteName");
var siteUrl= document.getElementById("siteUrl");
var popup= document.getElementById("popup");

var bookList=[];

if (localStorage.getItem("Bcontainer")!== null){

    bookList= JSON.parse(localStorage.getItem("Bcontainer"));
    displayBooks();
}






function addBook(){

  if(validation(siteName)== true && validation(siteUrl)== true )
    {
      book={
        name:siteName.value,
        url:siteUrl.value,
      }
      bookList.push(book);
    
      localStorage.setItem("Bcontainer" , JSON.stringify(bookList));
      displayBooks();
      clearForm()
      console.log(bookList)
    }
    else(
      popup.classList.remove("d-none")
    )
}





function clearForm(){

siteName.value=null;
siteUrl.value=null;
siteName.classList.remove("is-valid");
siteUrl.classList.remove("is-valid")

}

function displayBooks(){

    var bookInfo="";

    for (var i = 0; i< bookList.length; i++) {
        
        bookInfo+=`
         <tr>
            <td>${i}</td>
            <td>${bookList[i].name}</td>
            <td><a href="${bookList[i].url}" target="_blank" class="btn visit-btn " role="button" > <i class="fa-regular fa-eye"></i> Visit</a>
            </td>
            <td>
            <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger p-2"> <i class="fa-solid fa-trash"></i> Delete</button></td>



           </tr>
        `
        console.log(bookInfo)

    }
    document.getElementById("displayData").innerHTML=bookInfo;
}

function deleteProduct(id){
bookList.splice(id , 1);
localStorage.setItem("Bcontainer" , JSON.stringify(bookList));
displayBooks();
console.log(bookList);
}


function validation(element){
var text = element.value;
regex={
  siteName:/^[A-Za-z]{3,}$/,
  siteUrl:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
};
if (regex[element.id].test(text) == true){

  element.classList.add("is-valid")
  element.classList.remove("is-invalid")
  return true;

} 
else{
  element.classList.add("is-invalid")
  element.classList.remove("is-valid")
  return false;
}
}
function closeBtn(){
  popup.classList.add("d-none")

}