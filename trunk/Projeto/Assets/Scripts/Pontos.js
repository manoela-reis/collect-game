#pragma strict
var pontos4 : int;
var ganhouFase2 : String;
var ganhouFase1 : String;

function Start () 
{	
	Objeto2.pontos = 0;
	Objeto2_Fase60seg.pontos1 = 0;	
}

function Update ()
{
	if (gameObject.layer == 9){
		GetComponent(TextMesh).text = "" + Objeto2.pontos;
	}
	if (gameObject.layer == 10){
		GetComponent(TextMesh).text = "" + Objeto2.pontos + "/" + vidas_1.LimPtParaVencer;
		if(Objeto2.pontos>=50){
				Application.LoadLevel(ganhouFase1);
		}
	}
	if (gameObject.layer == 13){
		GetComponent(TextMesh).text = "" + Objeto2_Fase60seg.pontos1 + "/" + pontos4;
		
	
	if (Objeto2_Fase60seg.pontos1 >= pontos4)
			Application.LoadLevel(10);
	}
}