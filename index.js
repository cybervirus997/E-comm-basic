
function addProduct(e)
{
    e.preventDefault();

    let form = document.getElementById("form");
    let name = form.pname.value;
    let price = form.price.value;
    let image = form.image.value;

    var product = {
        name: name,
        price: price,
        image:image

    }
    

            let arr;

            arr = localStorage.getItem("product");

    if (arr == null)
    {
            arr = [];
    } else
    {
        arr = JSON.parse(localStorage.getItem("product"));
    }
        arr.push(product);
        localStorage.setItem("product", JSON.stringify(arr));


}


function product()
{
    window.location.href = "\product.html";
}