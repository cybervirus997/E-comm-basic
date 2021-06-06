


let x = JSON.parse(localStorage.getItem("product"));

let allPro = document.getElementById("productSec");

for (let i = 0; i < x.length; i++)
{
    let div1 = document.createElement("div");

    let disname = document.createElement("p");
    disname.innerHTML =`Product:${x[i].name}`;

    let disprice = document.createElement("p");
    disprice.innerHTML =`Price:${x[i].price}`;

    let disimg = document.createElement("img");
    disimg.src = x[i].image;
    
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Add to cart";

    div1.append(disimg,disname, disprice,btn1);
    allPro.appendChild(div1);


    btn1.addEventListener("click",test);

    function test()
    {
        let arr1;
        arr1 = localStorage.getItem("cart");
        if (arr1 == null) {
            arr1 = [];
        }
        else
        {
            arr1 = JSON.parse(localStorage.getItem("cart"));
        }
        arr1.push(x[i]);
        localStorage.setItem("cart", JSON.stringify(arr1));
    }

}

function cart()
{
    window.location.href = "\cart.html";
}