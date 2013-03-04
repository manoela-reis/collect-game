#pragma strict
var placaTexto : GameObject;

function Start () {

	

}
function OnMouseEnter () {

	placaTexto.renderer.enabled = true;
	

}

function OnMouseExit () {

	
	placaTexto.renderer.enabled = false;

}