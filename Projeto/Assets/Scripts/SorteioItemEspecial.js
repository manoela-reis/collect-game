#pragma strict
private var sorteioIntervalo : boolean = false;
private var cronometro : float;
private var intervalo : float;

var itemEspecial : GameObject[];
var minIntervaloItemEspecial : float;
var maxIntervaloItemEspecial : float;


function Start () 
{
	intervalo = Random.Range(minIntervaloItemEspecial, maxIntervaloItemEspecial);
}

function Update () 
{
	cronometro+=Time.deltaTime;	
	// usei true por causa da legibilidade
	if(sorteioIntervalo == true){
	intervalo = Random.Range(minIntervaloItemEspecial, maxIntervaloItemEspecial);
	sorteioIntervalo = false;
	}
	if(cronometro >= intervalo){	
	sorteioIntervalo = true;
	cronometro = 0;
	Instantiate(itemEspecial[Random.Range(0, itemEspecial.Length)], (Vector3(0,-9,-2)), Quaternion.identity);	
	}
}