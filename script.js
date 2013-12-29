
//webstorage (localStorage => persistant et sessionStorage => momentanée

//si le localstorage n'est pas supporté  (action déclenchée par body="onload"
function supporteStorage () {

	if(typeof(Storage)=="undefined"){
	var message = "Votre navigateur ne prend pas en charge le HTML5";
	document.getElementById("storageOuiNon").innerHTML = message;
	//document.getElementById("storageOuiNon").style();
	}
	else
	{
	var message = "Votre navigateur est compatible HTML5";
	document.getElementById("storageOuiNon").innerHTML = message;
	//document.getElementById("storageOuiNon").style();
	afficheListe();
	}
}

//Ajouter un item (déclecnché sur btn "ajouter")
function setItem(){
	//récupération des valeurs des champs
	var produit= document.getElementById("produit").value;
	var quantite = parseInt(document.getElementById("quantites").value);
	
//stockage des items avec d'abord une vérif que l'espace de stockage ne soit pas plein
	try {
		//si la valeur n'est pas un nombre (c'est a dire "string" ou "chaine vide" ou que la valeur est égale à zéro
		if(quantite==0 || isNaN(quantite)){
			alert("La quantité ne peut être vide ou égale à 0");
		}
		else {
			//si le champ produit n'est pas null, alors on va pouvoir enfin enregistrer
			if(produit==''){
			alert('Le champ produit ne peut être vide');
			}
			else{
			//getItem retourne la valeur associée à la clef ici la ""quantité associée à carottes""
			localStorage.setItem(produit,quantite); //seule cette ligne est non facultative
			}	
		}
	} 
	catch (exception) {
		if(exception==QUOTA_EXCEEDED_ERR){
			alert('Vous avez dépassé la limite de stockage !!!\n veuillez effacer des léménts pour libérer de la place');
		}
	}
//Affectation dune zone vide aux éléments de formulaire après enrigstrement des valeurs
	document.getElementById("produit").value='';
	document.getElementById("quantites").value='';
	afficheListe();
}

function getItem(elem) {
	var key = localStorage.key(elem); 
	//alert(key);
	var element= localStorage.getItem(key);
	//alert(element);
	document.getElementById("quantites").value = element;
	document.getElementById("produit").value= key;
	afficheListe();
	
}

function deleteItem(elem){

	if(confirm('Effacer ce produit de la liste')){
		//je récupè la clef grace à l'index "elem"
		var key = localStorage.key(elem);

		//je supprime la paire clef/valeur en question
		localStorage.removeItem(key);
		afficheListe();
	}
}

//Supprime toutes les paires "clefs/valeurs"
function supprimerTout (){
	if(confirm("Effacer la liste entière")){
		localStorage.clear();
	afficheListe();
	}
}

//Affiche la liste des léments stockés
function afficheListe(){

	var key =''; //stockera les clefs des indexes "ex clef: carotte  index:0
	//paires correspond au premier li de la liste <ul id="paires">
	//var paires='';
	
	if(localStorage.length==0){ //localStorage.length renvoie le nombre de paires(clefs/valeurs) stockés dans le tableau
		var paires = "<li data-role='list-divider'>Aucun élément stocké</li>\n"
	}
	else{
		var paires = "<li data-role='list-divider'>Cliquer pour supprimer</li>\n";
		for (var i =0; i < localStorage.length; i++){
			//< à localStorage car le tableau stocke à partir de 0
			//localStorage.key(index) => Renvoie la clef (ex:carotte) associée à l'index (ex:0) 
			//index0 = carottes ; index1= célerie
			key = localStorage.key(i);
			//alert(key);
			paires += "<li><a href='#' onclick='deleteItem("+ i + ")'>"+ key + "-----------" +localStorage.getItem(key)  +"</a></li>\n";
			//On récupère la valeur par la clef et la clef par l'index*/
		}
	}
	document.getElementById("listePaires").innerHTML = paires;
		$("#listePaires").listview('refresh');//rafraichir avec cette ligne  de commande pour que la liste prennen le format JQM
}


	
	

	
	