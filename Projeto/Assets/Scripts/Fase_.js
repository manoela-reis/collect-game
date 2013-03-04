var Intervalo : float;
static var Cronometro : float;
var Criar : boolean;
var minIntervalo : float;
var maxIntervalo : float;
var objetos : GameObject[];
var valor_Aleatorio : int;
var contadorVidas : int = 0;
//var cor : Cor;
var maxDaVez : int;
var TempoDificuldade : float;
var maxDificuldade : float;
var SomaDificuldade : float;

function Start () {
	
	Criar = true;
	
}

function Update () {

	

	if(TempoDificuldade >= 10 && maxIntervalo >=  maxDificuldade)
	{	
		if(minIntervalo <= 0)
		{
			maxIntervalo -= SomaDificuldade;
			TempoDificuldade = 0;
		}
		
		else
		
		{
			minIntervalo -= SomaDificuldade;
		}
	}
	
	Cronometro = Cronometro + Time.deltaTime;
	
	TempoDificuldade += Time.deltaTime;
	
	if(Criar){
		
		Intervalo = Random.Range(minIntervalo, maxIntervalo);
		
		valor_Aleatorio = Random.Range (0,objetos.Length);
		
		Criar = false;
		
	}
	
	if(Cronometro >= Intervalo){
		var a : int;
		barraCor = true;
	
			
/*			if(valor_Aleatorio <= 20)
			{
			Instantiate(objetos[Random.Range(6, 9)], Vector3(0,-9,-2), Quaternion.identity);
			Cronometro = 0;
			Criar = true;
			
			}else{
			a = Random.Range(9, 18);
			Instantiate(objetos[a], Vector3(0,-9,-2), Quaternion.identity);
			
			Cronometro = 0;
			Criar = true;
			
			}
		}
		
	*/	
	/*		if(valor_Aleatorio <= 20)
			{
			Instantiate(objetos[Random.Range(3, 6)], Vector3(0,-9,-2), Quaternion.identity);
			Cronometro = 0;
			Criar = true;
			
			}
			
			else
			
			{
			a = Random.Range(6, 15);
			Instantiate(objetos[a], Vector3(0,-9,-2), Quaternion.identity);
			Cronometro = 0;
			Criar = true;
			
			}
			*/
		

			if(valor_Aleatorio <= 21)
			{
				Instantiate(objetos[Random.Range(0, 20)], Vector3(0,-9,-2), Quaternion.identity);
				Cronometro = 0;
				Criar = true;
			}
/*			else
			
			{
			a = Random.Range(3, 12);
			Instantiate(objetos[a], Vector3(0,-9,-2), Quaternion.identity);

			Cronometro = 0;
			Criar = true;
			
			}
		/*
		
/*			if(valor_Aleatorio <= 20)
			{
			Instantiate(objetos[Random.Range(9, 12)], Vector3(0,-9,-2), Quaternion.identity);
			Cronometro = 0;
			Criar = true;
			}
			
			else
			
			{
				a = Random.Range(12, 21);
				Instantiate(objetos[a], Vector3(0,-9,-2), Quaternion.identity);
				
				Cronometro = 0;
				Criar = true;
				
			}
	*/	
}
	
}


