

let x = JSON.parse(localStorage.getItem("cart"));

var sum = 0;
let main = document.getElementById("banner");
for (let i = 0; i < x.length; i++)
{
  
    let div1 = document.createElement("div");

    sum = sum + Number(x[i].price);
    let next;
    let tot;
    if (i == 0) {
         next = document.createElement("h1");
        next.innerHTML = `${x[i].name} : ${x[i].price}`;

            div1.append(next);
    }
    else if (i == x.length - 1)
    {
        next = document.createElement("h1");
         tot = document.createElement("h1");
        next.innerHTML = `${x[i].name} : + ${x[i].price}`;
        tot.innerHTML = `total amount :  ${sum}`;

            div1.append(next,tot);
     }
    else
    {
         next = document.createElement("h1");
        next.innerHTML = `${x[i].name} : + ${x[i].price}`;
            div1.append(next);
    }


    main.append(div1);    

}

let somu = document.getElementById("final");
let div234 = document.createElement("h1");
sum = sum - (sum * 0.3);
function promo()
{
    div234.innerHTML = `Total : ${sum}`;
    somu.append(div234);
}

function pay()
{
    window.location.href = "\sucess.html";
}