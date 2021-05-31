
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "yaourt",
		LactoseFree: false,
		sansNoix: true,
		organique: false,
		price: 1.99
	},
	{
		name: "bread",
		LactoseFree: true,
		sansNoix: true,
		organique: true,
		price: 2.35
	},
	{
		name: "salmon",
		LactoseFree: true,
		sansNoix: true,
		organique: false,
		price: 4.80
	},
	{
		name: "granola aux amandes",
		LactoseFree: true,
		sansNoix: false,
		organique: false,
		price: 6.35
	},
	{
		name: "Lait",
		LactoseFree: false,
		sansNoix: true,
		organique: true,
		price: 4.69
	},
	{
		name: "Fromage",
		LactoseFree: false,
		sansNoix: true,
		organique: false,
		price: 4.00
	},
	{
		name: "Carrotte",
		LactoseFree: true,
		sansNoix: true,
		organique: true,
		price: 3.00
	},
	{
		name: "Chocolat noir",
		LactoseFree: true,
		sansNoix: false,
		organique: false,
		price: 5.50
	},
	{
		name: "Chocolot au lait",
		LactoseFree: false,
		sansNoix: true,
		organique: false,
		price: 10.00
	},
	{
		name: "Beurre",
		LactoseFree: false,
		sansNoix: true,
		organique: true,
		price: 10.00
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, org) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") &&(prods[i].LactoseFree == true)){
			if((org == "org") &&(prods[i].organique == true)){
			product_names.push(prods[i]);
			}
			else if((org == "norg")) {
				product_names.push(prods[i]);
			}
		}
		else if ((restriction == "SansNoix") && (prods[i].sansNoix == true)){
			if((org == "org") &&(prods[i].organique == true)){
			product_names.push(prods[i]);
			}
			else if((org == "norg")) {
				product_names.push(prods[i]);
			}
		}
		else if (restriction == "None"){
			if((org == "org") &&(prods[i].organique == true)){
			product_names.push(prods[i]);
			}
			else if((org == "norg")) {
				product_names.push(prods[i]);
			}
		}
	}

	var sorted = product_names.sort((a, b) => a.price - b.price);
	return sorted;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
