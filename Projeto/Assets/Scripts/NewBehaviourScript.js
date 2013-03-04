#pragma strict
var Tempo : float;
var Bu : boolean;
function Start () {

	if (Tempo >= 1){
	animation.Play();
	Bu = true;
	}
	
	if (!Bu)
	Tempo += Time.deltaTime;

	if (Bu)
	Tempo -= Time.deltaTime;
	

}

function Update () {

}