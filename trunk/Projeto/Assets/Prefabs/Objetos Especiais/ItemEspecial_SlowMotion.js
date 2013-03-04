#pragma strict

private var rotacao : float;
private var Tempo : float;
private var objetos_Impulso: float;
private var velocidadeHorizontal : float;

public var minX : int;
public var maxX : int;
public var velocidadeDescida : float;
public var posicaoParaPerder : float;






public function Awake () 
{
	

	objetos_Impulso = 35;

	minX = -15;
	maxX = 15;
	

	rotacao = Random.Range(-60, 60);
	

	velocidadeHorizontal = Random.Range(0, 10);
	var PosicaoX : int = Random.Range(minX,maxX);
	
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
	

	
	if(transform.position.y <= -11)
	{
		
		
		Destroy(gameObject);
		
	
	}
	
	
}

function OnMouseEnter ()

{

	
	if(!Pause.pause){	
	
	if (Input.GetMouseButton(0)) 
		{

		
		Destroy(gameObject);
		Gestao.slowMotion = true;
		
			
		
		}
		
	
	}
	
}

