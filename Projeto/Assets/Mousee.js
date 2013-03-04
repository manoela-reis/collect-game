#pragma strict

var entrada: Texture2D;
var saida: Texture2D;


function Start()

{
		renderer.material.mainTexture = saida;

}

function OnMouseEnter() 

{
	renderer.material.mainTexture = entrada;

}

function OnMouseExit () 
{
	renderer.material.mainTexture = saida;
}