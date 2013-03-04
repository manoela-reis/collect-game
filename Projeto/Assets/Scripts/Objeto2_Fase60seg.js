#pragma strict
static var pontos1: int = 0;
static var vidas: int = 5;
var objetos_Impulso: float;
var velocidadeHorizontal : float;
var PosicaoX : int;
var minX : int;
var maxX : int;
var quimica : GameObject;
var quimica2 : GameObject;
var errou : GameObject;
var vidas1: GameObject;
var VidaLista : GameObject;
var PontosParaVencer : int;
var velocidadeDescida : float;
var MyID : int;
var posicaoParaPerder : float;
var rotacao : float;
var LogicaOnce : boolean = false;
var Tempo : float;
var PontosPorAcerto : int;

public function Awake () 
{
	objetos_Impulso = 35;
	PontosPorAcerto = 1;
	minX = -15;
	maxX = 15;
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
	if(gameObject.tag.Equals("errado"))
	{
		MyID = 0;
	}
	if(gameObject.tag.Equals("certo"))
	{
		MyID = 1;
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
			Destroy(gameObject);
			Objeto2_Fase60seg.pontos1 += PontosPorAcerto;		
		}	
	}	
	LogicaOnce = false;
}

