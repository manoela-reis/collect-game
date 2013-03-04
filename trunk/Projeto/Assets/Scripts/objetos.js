#pragma strict

var objetos_velocidade: float; 
static var posX : Vector3;
//var posY: float;


function Start () 
{


}


function Update ()

{
	
	posX = transform.position;
	
    var velocidade : float = Time.deltaTime * objetos_velocidade;
  //  transform.Rotate (0,1,0);
    transform.Translate (0, velocidade, 0 );


//	transform.position.y += 0.1;
	
	if (transform.position.y >= 9)
	{
		transform.position.y = -9;
		transform.position.x = Random.Range(-14,14);		
	}


}