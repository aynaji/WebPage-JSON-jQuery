//local storage function
function myFunction() {
    // save values to local storage
    var fName = document.getElementById("fName").value;
    var email = document.getElementById("email").value;
    var product = document.getElementById("select").value;
    var quantity = document.getElementById("quantity").value;
    var price;
    switch (product) {
        case 'n': price = 10; break;
        case 'a': price = 20; break;
        case 'j': price = 30; break;
        case 'i': price = 40; break;
        case 'm': price = 50; break;
    }

    localStorage.setItem("FirstName", fName);
    localStorage.setItem("Email", email);
    localStorage.setItem("Product", product);
    localStorage.setItem("Price", price);
    localStorage.setItem("Quantity", quantity);
    location.href = "page/page2.html";
}
// Image change on click
function productimg() {
    var product;
    product = document.getElementById("select").value;
    console.log(product);
    switch (product) {
        case 'n': document.getElementById("insert").innerHTML = "<img src='img/$10.png' />"; break;
        case 'a': document.getElementById("insert").innerHTML = "<img src='img/$20.png' />"; break;
        case 'j': document.getElementById("insert").innerHTML = "<img src='img/$30.png' />"; break;
        case 'i': document.getElementById("insert").innerHTML = "<img src='img/$40.png' />"; break;
        case 'm': document.getElementById("insert").innerHTML = "<img src='img/$50.png' />"; break;
    }
}

function myReceipt() {
    document.getElementById("fName").innerHTML = localStorage.getItem("FirstName");
    document.getElementById("email").innerHTML = localStorage.getItem("Email");
    document.getElementById("product").innerHTML = localStorage.getItem("Product");
    document.getElementById("quantity").innerHTML = localStorage.getItem("Quantity");
    document.getElementById("price").innerHTML = "$" + localStorage.getItem("Price");
    document.getElementById("totalPrice").innerHTML = "$" + (localStorage.getItem("Price") * localStorage.getItem("Quantity"));

}