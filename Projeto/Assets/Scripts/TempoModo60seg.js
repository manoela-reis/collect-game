#pragma strict
static var tempo : float;
var min : int;
var fim: boolean = false;
var perdeu1: int;

function Start () {

	
	tempo = 61;	
	


}

function Update () {
	
	
	tempo -= Time.deltaTime;
	if(tempo <= 0)
	{
		fim = true;
	}
	
	gameObject.GetComponent(TextMesh).text ="" + min + ":"+Mathf.FloorToInt(tempo);
	
	if (fim == true)
		Application.LoadLevel(perdeu1);
	
	

}