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
var audios : AudioClip[];

public function Awake () 
{
	objetos_Impulso = 35;
	PontosPorAcerto = 1;
	minX = -15;
	maxX = 15;
	var w : GameObject = GameObject.FindGameObjectWithTag("lampada");
	cor = w.GetComponent(Cor);
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
	if(gameObject.tag.Equals("Verde")){
		MyID = 2;
	}
	if(gameObject.tag.Equals("Azul")){
		MyID = 1;
	}
	if(gameObject.tag.Equals("Amarelo")){
	MyID = 0;
	}
	if(gameObject.tag.Equals("Vermelho")){
	MyID = 3;
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
	
	if (MyID == cor.valor_Aleatorio2){
		if(transform.position.y <= posicaoParaPerder || Tempo >= 6)
		{
			VidaLista.GetComponent(vidas_1).contadorVidas++;
			Destroy(vidas1);
			Destroy(gameObject);
		}	
	}
	if (MyID != cor.valor_Aleatorio2){
		if(transform.position.y <= posicaoParaPerder || Tempo >= 6)
		{
			Destroy(gameObject);
		}	
	}	
}
function OnMouseEnter ()
{
	if(!Pause.pause){	

	if (Input.GetMouseButton(0) && MyID != cor.valor_Aleatorio2) 
		{
		Instantiate(errou, transform.position, Quaternion.identity);	
		VidaLista.GetComponent(vidas_1).contadorVidas++;
		Destroy(vidas1);
		Destroy(gameObject);
		}
	if (Input.GetMouseButton(0) && MyID.Equals(cor.valor_Aleatorio2))
		{
			Instantiate(quimica, transform.position, Quaternion.identity);				
			pontos += PontosPorAcerto;		
			Destroy(gameObject);
			Combo2.cronometroCombo = 0;
			//AudioSource.clip = audios[0]; AudioSource.Play();
			
		}		
	}	
}

