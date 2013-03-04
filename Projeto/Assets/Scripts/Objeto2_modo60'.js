#pragma strict

var objetos_Impulso: float;
var velocidadeHorizontal : float;
var PosicaoX : int;
var minX : int;
var maxX : int;
var quimica : GameObject;
var quimica2 : GameObject;
var errou : GameObject;
static var pontos: int = 0;
static var vidas: int = 5;
var vidas1: GameObject;
var VidaLista : GameObject;
var PontosParaVencer : int;
var velocidadeDescida : float;
var MyID : int;
var cor : Cor;
var posicaoParaPerder : float;
var rotacao : float;
var Tempo : float;
var PontosPorAcerto : int;
var ListaTextura : Texture2D[];


public function Awake () 
{
	objetos_Impulso = 35;
	PontosPorAcerto = 1;
	minX = -15;
	maxX = 15;
	var w : GameObject = GameObject.FindGameObjectWithTag("lampada");
//	cor = w.GetComponent(Cor);
	VidaLista = GameObject.FindGameObjectWithTag("ListaVidas");
	rotacao = Random.Range(-60, 60);
	velocidadeHorizontal = Random.Range(0, 10);
	PosicaoX = Random.Range(minX,maxX);
	
	if(PosicaoX == 0){
		velocidadeHorizontal = Random.Range(-3,3);
	}
	if(PosicaoX > 0){
		velocidadeHorizontal = -velocidadeHorizontal;
	}
	transform.position.x = PosicaoX;
	rigidbody.AddForce(Vector3(0, objetos_Impulso, 0), ForceMode.Impulse);
	renderer.material.mainTexture = ListaTextura[Random.Range(0, 5)];
	if(gameObject.tag.Equals("errado"))
	{
		MyID = 0;
	}
	if(gameObject.tag.Equals("certo"))
	{
		MyID = 1;
	}




}


function Update()
{
	transform.Rotate(Vector3(0,0,rotacao)*Time.deltaTime);
}

function FixedUpdate ()
{
	Tempo += Time.deltaTime;
	rigidbody.AddForce(Vector3(0, -velocidadeDescida, 0), ForceMode.Acceleration);
    transform.position.x += velocidadeHorizontal*Time.deltaTime;
	vidas1 = GameObject.FindGameObjectWithTag("vidas");
	if(transform.position.y <= -11){
		Destroy(gameObject);
	}
	
}
function OnMouseEnter ()
{
	if(!Pause.pause){	

	if (Input.GetMouseButton(0) && MyID == 0) 
		{
		Instantiate(errou, transform.position, Quaternion.identity);	
		TempoModo60seg.tempo-=10;	
		Destroy(gameObject);
		}
		
	if (Input.GetMouseButton(0) && MyID == 1)
		{
			Instantiate(quimica, transform.position, Quaternion.identity);				
			Objeto2_Fase60seg.pontos1 += PontosPorAcerto;		
			Destroy(gameObject);
			Combo.cronometroCombo = 0;
			
		}		
	}	
}

