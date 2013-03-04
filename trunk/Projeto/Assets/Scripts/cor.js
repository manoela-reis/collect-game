#pragma strict
var s : Color[];
var valor_Aleatorio2 : int;
var contador : float;

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