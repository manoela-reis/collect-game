#pragma strict
var cronometro : float;
var velRotacao : float;

function Awake () {
	transform.rotation.x = Random.Range(0,361); 
	
	velRotacao = Random.Range(-180, 180);

}

function Update () {
	
	
	transform.Rotate(Vector3(0,0,velRotacao)*Time.deltaTime);
	
	cronometro = cronometro + Time.deltaTime;
	if(cronometro >= 1.5)
	{
	Destroy(gameObject);
	}
}