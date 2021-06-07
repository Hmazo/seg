



var current_page = 1;
var records_per_page = 9;

var listProduct = products;


var chosenProducts = [];



function populateListProductChoices(slct1) {


		var s1 = document.getElementById(slct1);
		if(s1.checked){
			var result = restrictListProducts(listProduct, slct1);
			listProduct = result;
		}
		else{
			var result = addrestrictListProducts();

			listProduct = result;
		}

		console.log(listProduct);



		if(listProduct.length!=0){
			changePage(1);
		}

}




function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");

    var page_span = document.getElementById("page");

		var flex = document.getElementById("product-flex");
		flex.innerHTML = "";

    // Validate page
    if (page < 1) page = 1;
    if (page >= numPages()) page = numPages();


    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {

				if(i== listProduct.length){
					break;
				}
        loadproduct(listProduct[i]);

    }

    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}




// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(product){


	var ele = document.getElementById("panier-flex");
	chosenProducts.push(product.price);

	var prof = document.createElement("div");
	prof.className = "panier_prod";

	var proff = document.createElement("p");
	proff.className = "prod";
	proff.innerHTML = product.name;


	prof.appendChild(proff);
	console.log(prof);
	ele.appendChild(prof);

	var price = document.getElementById("prixe");
	price.innerHTML = getTotalPrice(chosenProducts);






	//sc.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}

function showButton(id){
	var x = document.getElementById(id);
  if (x.style.visibility = 'hidden') {
    x.visibility = 'visible';
  }
}

function loadproduct(product){
	var flex = document.getElementById("product-flex");

	var col = document.createElement("div");
	col.className = "col";

	var cardtitle = document.createElement("div");
	cardtitle.className = "card-title";
	cardtitle.innerHTML = product.name;

	var cardtext = document.createElement("p");
	cardtext.className = "card-text";
	var price = "Price is : "+product.price+"$";
	cardtext.innerHTML = price;

	var button = document.createElement("button");
	button.className = "btn";
	button.onclick = function(){

        selectedItems(product)
      };

	button.innerHTML = "Ajouter au panier";

	col.appendChild(cardtitle);
	col.appendChild(cardtext);
	col.appendChild(button);
	flex.appendChild(col);
}





function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}



function numPages()
{
		var npage = Math.ceil(listProduct.length / records_per_page);

    return npage;
}

window.onload = function() {


    changePage(1);
};

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {

			totalPrice += chosenProducts[i];

	}
	return totalPrice;
}
