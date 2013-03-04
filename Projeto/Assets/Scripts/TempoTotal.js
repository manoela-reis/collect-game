#pragma strict
var tempo : float;
var min : int;



function Start () {

	
	
	


}

function Update () {
	
	
	tempo += Time.deltaTime;
	if(tempo >= 60)
	{
		tempo = 0;
		min++;
	}
	
	gameObject.GetComponent(TextMesh).text ="" + min + ":"+Mathf.FloorToInt(tempo);
	
	

}