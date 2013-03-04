#pragma strict
var lado : int;
var modos1 : Modos;
var modos2 : Modos;
var modos3 : Modos;
function Start () 
{
	
}
function OnMouseDown(){
	modos1.modo = modos1.modo + lado;
	modos2.modo = modos2.modo + lado;
	modos3.modo = modos3.modo + lado;
}