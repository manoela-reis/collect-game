#pragma strict
var diferencaX : float;
function Start () {

}

function Update () {

	

}
function OnMouseEnter(){

	transform.position.x += diferencaX;

}
function OnMouseExit () {
	
	transform.position.x -= diferencaX;

}
