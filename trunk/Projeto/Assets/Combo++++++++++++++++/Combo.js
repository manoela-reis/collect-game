#pragma strict
private var lastScore : int;
var listaTexturasCombo : Texture2D[];
var telaCombo : GUITexture;
var minHitsParaCombo : int;
static var cronometroCombo : float;
var maxTempoCombo : float;
private var currentHits : int;

function Start () 

{
	
	

}

function Update () 
{

	
	cronometroCombo += Time.deltaTime;

	if(Objeto2.pontos > lastScore && cronometroCombo <= maxTempoCombo)
	{
		currentHits++;
	}
	
	if(cronometroCombo > maxTempoCombo)
		{
		
		if(currentHits >= minHitsParaCombo)
		{
			telaCombo.texture = listaTexturasCombo[currentHits - minHitsParaCombo];
			telaCombo.animation.Play();
			currentHits = 0;
		}
		
		else
		{
			currentHits = 0;
		}	
	
	}
	lastScore = Objeto2.pontos;
}