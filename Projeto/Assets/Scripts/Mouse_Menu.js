#pragma strict
var x1 : float;
var y1 : float;

var x2 : float;
var y2 : float;

function OnMouseEnter ()

{
	transform.localScale.x = x1;
	transform.localScale.y = y1;
}

function OnMouseExit () 

{
	transform.localScale.x =x2;
	transform.localScale.y = y2;
}