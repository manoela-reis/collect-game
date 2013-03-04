#pragma strict
var numberString : String =  "12345";

var numberInt : int = 0;

function Start () {


	numberInt = int.Parse(numberString);
	
	Debug.Log(numberInt);
	

}

function Update () {

}