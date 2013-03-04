#pragma strict

function Start () {

}

function Update ()

 {
 	if(Objeto2.pontos < 10){
 	
	GetComponent(TextMesh).text = "0"+Objeto2.pontos;
	}else{
	GetComponent(TextMesh).text = ""+Objeto2.pontos;
	}
}