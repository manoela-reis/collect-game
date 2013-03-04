#pragma strict
//var lista: Color[];
var s : Color[];
static var valor_Aleatorio2 : int;
var contador : float;

//var random: Random.Range(1,4);oe


function Start () 
{
	valor_Aleatorio2 = Random.Range(0,4);
	light.color = s[valor_Aleatorio2];
	
}

function Update () 
{
	contador = contador + Time.deltaTime;
	if (contador >=10)
	{
		valor_Aleatorio2 = Random.Range(0,4);
		light.color = s[valor_Aleatorio2];
		contador = 0;
	}
}