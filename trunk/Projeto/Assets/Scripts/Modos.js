#pragma strict
var modo: int;
var modos : Texture2D[];
var level : int;
var principal : boolean;

function Start ()
{
	
}
function Update () {
	if(modo >= modos.Length)
	{
		modo = 0;
	}
	if(modo <= -1){
		modo = 2;
	}
	renderer.material.mainTexture = modos[modo];
}
function OnMouseDown () 
{	
	if(principal){
		if(modo == 0)
		{
			level = 4 ;
		}
		if(modo == 1)
		{
			level = 3 ;
		}
		if(modo == 2)
		{
			level = 5 ;
		}
	Application.LoadLevel(level);
	}
}	