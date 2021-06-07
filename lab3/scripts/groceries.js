
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		noixfree:true,
		type: "legume",
		vegetarian: true,
		glutenFree: true,
		LactoseFree: true,

		organic:true,
		price: 1.99}

		,

		{name : " Raclette",
		vegetarian: true,
		LactoseFree:false,
		glutenFree: true,
		noixfree:false ,

		type: "laitier",


		organic:false,

		price: 4.29

		},


		{
			name: "Bannane",
			type:"fruit",
			vegetarian: true,
			glutenFree: true,
			noixfree:true,

			LactoseFree: true,
			organic:false,
			price: 0.99}
			,



				{name: "Yaourt aux noix",
				vegetarian: true,
				type:"laitier",

				LactoseFree:false,
				organic:false,

				glutenFree: true,
				noixfree:false ,
				price: 3.40,

			}
				,	{
						name: "Lait de noix",
						type:"laitier",

						noixfree:false,
						vegetarian: true,

						glutenFree: true,
						LactoseFree: true,
						organic:false,
						price: 5.99}
										,	{
												name: "Pomme de compagne",
												type:"fruit",
												vegetarian: true,


												glutenFree: true,
												noixfree:true,

												LactoseFree: true,
												organic:true,
												price: 1.99}
												,	{
														name: "Huile de coco",
														type:"Huile",
														vegetarian: true,
														glutenFree: true,
														LactoseFree: true,
														noixfree:true,


														organic:false,
														price: 3.99}

																,	{
																		name: "Pomme Verte",
																		type:"fruit",
																		vegetarian: true,
																		glutenFree: true,
																		noixfree:true,

																		LactoseFree: true,
																		organic:false,
																		price: 1.19}
																		,

	{
		name: "Pain de compagne",
		type:"Pain",
		vegetarian: true,
		glutenFree: false,
		noixfree:true,


		organic:true,
		LactoseFree:true,
		price: 2.35},

		{name: "Yaourt nature sans sucre",
		vegetarian: true,
		type:"laitier",

		LactoseFree:false,
		organic:false,

		glutenFree: true,
		noixfree:true ,
		price: 3.40

	},

	{
		name: "Saumon",
		type:"Poisson",
		vegetarian: false,
		LactoseFree:true,
		noixfree:true,


		glutenFree: true,
		organic:true,
		price: 10.00,},

	{name: "Granola aux amandes",
	type:"Céréales",

	vegetarian: true,
	LactoseFree:true,
	glutenFree: false,
	organic:false,


	noixfree:false,
	price: 8.00,},

	{name : "Camembert ",
	vegetarian: true,
	LactoseFree:false,
	glutenFree: true,


	noixfree:true ,
	type: "laitier",

	organic:false,

	price: 4.50

	},
	{
		name: "Baguette parisienne",
		type:"Pain",
		vegetarian: true,
		glutenFree: false,


		organic:false,
		noixfree:true,
		LactoseFree:true,
		price: 1.35},

	{name: "Yaourt",
	vegetarian: true,
	type: "laitier",
	LactoseFree:false,
	organic:false,
	glutenFree: true,


	noixfree:true ,
	price: 4.00,

},

	{name : "Biscuits sans Gluten",
	type:"Biscuit",
	vegetarian: true,
	LactoseFree:true,
	organic:false,


	glutenFree: true,
	noixfree:true ,
	price: 3.00

},
{name : "Cheddar ",
vegetarian: true,
LactoseFree:false,


glutenFree: true,
noixfree:false ,
type: "laitier",

organic:false,

price: 3.50

},
{
	name: "Toasts Diet",
	type:"Pain",

	vegetarian: true,
	noixfree:true,

	glutenFree: false,
	organic:true,

	LactoseFree:true,
	price: 2.35},
{name : "Huile de noix",
type:"Huile",

organic:true,
vegetarian: true,
LactoseFree:true,
glutenFree: true,

noixfree:false ,
price: 5.00,

},
{name : "Beurre",
vegetarian: true,
organic:true,
LactoseFree:false,
type: "laitier",
glutenFree: true,


noixfree:true ,
price: 4.50,

},
{name : "Patisserie noisette",
type:"Patisserie ",
organic:false,


organic:true,
vegetarian: true,
LactoseFree:true,
glutenFree: true,
noixfree:false ,
price: 1.00

},
{name : "Fromage 0%  ",
vegetarian: true,
LactoseFree:false,
glutenFree: true,
noixfree:false ,
bigype: "laitier",
type:"Fromage",


organic:false,

price: 3.50

},
{
	name : "Jus de citron",
	type:"jus",


	oarganic:true,
	vegetarian: true,
	LactoseFree:true,
	glutenFree: true,
	noixfree:true ,
	price: 2.00

},

{
	name: "Toasts completes",
	type:"Pain",

	vegetarian: true,
	glutenFree: false,
	noixfree:true,
	organic:false,
	LactoseFree:true,
	price: 2.35},


	{name : "Frommage  ",
	vegetarian: true,
	LactoseFree:false,
	glutenFree: true,
	noixfree:false ,
	type: "laitier",


	organic:false,

	price: 3.50

	},



{name : "Gouda  ",
vegetarian: true,
LactoseFree:false,
glutenFree: true,
noixfree:false ,

type:"laitier",


organic:false,

price: 3.50

},

{name : "St-Julien aux noix ",
vegetarian: true,
LactoseFree:false,


glutenFree: true,
noixfree:false ,
type: "laitier",

organic:false,

price: 3.50

},


		{
				name: "Lait UHT",
				type:"laitier",
				vegetarian: true,
				noixfree:true,

				glutenFree: true,


				LactoseFree: false,
				organic:false,
				price: 3.89}
				,


						{
								name: "Tomates",
								type:"fruit",

								vegetarian: true,
								noixfree:true,

								glutenFree: true,


								LactoseFree: true,
								organic:false,
								price: 2.30}
								,
								{
										name: "Jus a base de noix",
										type:"jus",
										vegetarian: true,
										glutenFree: true,

										noixfree:false,
										LactoseFree: true,
										organic:false,
										price: 4.79}


];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose") &&(prods[i].LactoseFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "noix") && (prods[i].noixfree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "vegetarian")&& (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "gluten") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "jus") && (prods[i].type == "jus")){
		  product_names.push(prods[i]);
		}
		else if ((restriction == "legume") && (prods[i].type == "legume")){
		  product_names.push(prods[i]);
		}
		else if ((restriction == "fruit") && (prods[i].type == "fruit")){
		  product_names.push(prods[i]);
		}
		else if ((restriction == "laitier") && (prods[i].type == "laitier")){
		  product_names.push(prods[i]);
		}
		else if ((restriction == "orga") && (prods[i].organic == true)){
		  product_names.push(prods[i]);
		}


	}

	var sorted = product_names.sort((a, b) => a.price - b.price);
	return sorted;
}

function checkedCaseRes() {
			var li = ["vegetarian","noix","gluten","lactose","jus","legume","orga","laitier","fruit"];
			var obje = [];
			for(var i =0;i<li.length;i++){
				var s = document.getElementById(li[i]);

				if(s.checked){
					obje.push(li[i]);
				}
			}
			return obje;
}

function addrestrictListProducts() {

	let checked = checkedCaseRes();
	let product_names = [];


	if(checked.length==0){
		return products;
	}


	product_names = products;
	for(let j=0; j<checked.length; j+=1){


				product_names = restrictListProducts(product_names, checked[j]);


	}

	var sorted = product_names.sort((a, b) => a.price - b.price);
	return sorted;
}



// Calculate the total price of items, with received parameter being a list of products
