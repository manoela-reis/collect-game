#pragma strict
var jogar: boolean;
var creditos: boolean;
var modos: boolean;
var avancar: boolean;
var voltar: boolean;
var sair : boolean;
var cameraObj : Transform;
var posX : float;
var posY : float;
var posZ : float;
var cronometro : float;

var comecarCronometro : boolean;

function Start () 
{
	cameraObj = GameObject.FindWithTag("MainCamera").transform;
}

function Update () 

{
if (comecarCronometro)
	{
		cronometro += Time.deltaTime;
		
		if (cronometro >= 6 && cronometro < 12)
		{
			cameraObj.position.x = 24.77936;
			cameraObj.position.y = 0.04951286;
			cameraObj.position.z = -7.630421;
		}
	
		if ( cronometro > 12)
		{
			cameraObj.position.x = 0.02717781;
			cameraObj.position.y = 0.04951286;
			cameraObj.position.z = -7.630421;
			
			cronometro = 0;
			comecarCronometro = false;
		}
	}
}

function OnMouseUp()

{
	if (jogar)
	{
		//Application.LoadLevel("Fase_01");
		cameraObj.position.x = posX;
		cameraObj.position.y = posY;
		cameraObj.position.z = posZ;	
	}
	else if (sair)
	{
	    cameraObj.position.x = posX;
		cameraObj.position.y = posY;
		cameraObj.position.z = posZ;
	}
	
	else if (creditos)
	{
	    cameraObj.position.x = posX;
		cameraObj.position.y = posY;
		cameraObj.position.z = posZ;
		
		comecarCronometro = true;
	}
	
	else if (voltar)
	{
		cameraObj.position.x = posX;
		cameraObj.position.y = posY;
		cameraObj.position.z = posZ;
	}

	else if (avancar)
	{
		cameraObj.position.x = posX;
		cameraObj.position.y = posY;
		cameraObj.position.z = posZ;
	}
			
		else if (modos)
	{
		Application.LoadLevel("Modos_certo");
	}





}