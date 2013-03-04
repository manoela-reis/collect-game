#pragma strict

var Pontos : Transform;

function Awake () {

	transform.LookAt(Pontos);
	
}

function Update () {
	
	
	transform.Translate(Vector3(0,0,1)*Time.deltaTime);
	


}