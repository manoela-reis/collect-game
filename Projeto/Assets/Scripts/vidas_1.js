#pragma strict

var numVidas : int;
var prefab : Transform;
var contadorVidas : int = 0;
var ganhou : int;
var perdeu : int;
static var LimPtParaVencer : int;
public var distanciaIntervalo : float;
public var distanciaParaDireita : float;
public var altura : float;

function Awake() 

{
	
	LimPtParaVencer = 50;
	
	for (var i : int = 0;i < numVidas; i++) 
	{
    	var ObjetoDaVez : Transform = Instantiate(prefab, Vector3(i *distanciaIntervalo + distanciaParaDireita, altura, -1),Quaternion.identity);
		ObjetoDaVez.GetComponent(ID_Vida).id = i;
		
	}

}

function Update()
{
	
	if(contadorVidas >= numVidas ){
		Application.LoadLevel(perdeu);
	}
	
	if (gameObject.layer == 10){
	
		if (Objeto2.pontos >= LimPtParaVencer)
		Application.LoadLevel(ganhou);
		}
}