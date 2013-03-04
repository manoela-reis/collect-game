#pragma strict
var tempo : float;
var gestao : Gestao;

function Start () {

}

function Update ()
{
	if(gestao.TempoDificuldade >= 10)
	{
		tempo = 11;
	}
	tempo -= Time.deltaTime;
	if(tempo <= 4){	
		gameObject.GetComponent(TextMesh).text = ""+Mathf.FloorToInt(tempo);
	}else
	{
		gameObject.GetComponent(TextMesh).text = "";
	}
}