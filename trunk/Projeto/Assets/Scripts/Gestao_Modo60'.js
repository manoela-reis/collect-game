
static var Cronometro : float;
static var slowMotion : boolean = false;

private var valor_Aleatorio : int;
private var contadorVidas : int = 0;
private var cronometroSlowMotion : float;
private var Criar : boolean;
private var Intervalo : float;
var identificacaoObjetos : int[];

var minIntervalo : float;
var maxIntervalo : float;
var objetos : GameObject[];
//var cor : Cor;
var maxDaVez : int;
var TempoDificuldade : float;
var maxDificuldade : float;
var SomaDificuldade : float;
var tempoLimiteSlowMotion : float;
var referenciaLancamento : Transform;
var hit : RaycastHit;
var distanciaDoFundo : float;
var rastro : GameObject;

function MudarPosicao ()
{
	var ray = camera.ScreenPointToRay(Input.mousePosition);
	
	if(Physics.Raycast(ray, hit))
	{
		rastro.transform.position = Vector3(hit.point.x, hit.point.y, hit.point.z - distanciaDoFundo);
	}	
}
	function Start ()
	{
		Criar = true;
		identificacaoObjetos = new int[7];
		for(var i = 0; i < identificacaoObjetos.Length; i++)
		{
			identificacaoObjetos[i] = i;
		}
	}

	function Update ()
	{
	
		if(Input.GetButton("Fire1"))
		{
			MudarPosicao();
		}
		
		// Slow Motion ------
		if(slowMotion)
		{
			Time.timeScale = 0.5;
			slowMotion = false;
		}
		else
		{
			cronometroSlowMotion += Time.deltaTime;
			if(cronometroSlowMotion >= tempoLimiteSlowMotion){
			Time.timeScale = 1;
			cronometroSlowMotion = 0;
		}
		
	}
	
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
	
	if(Criar)
	{
		Intervalo = Random.Range(minIntervalo, maxIntervalo);
		valor_Aleatorio = Random.Range (0,objetos.Length);
		Criar = false;	
	}
	
	if(Cronometro >= Intervalo)
	{
		var sorteioObjeto : int = Random.Range(0, 4);
		if(sorteioObjeto == 0)
		{
			Debug.Log("Não saiu");
			Instantiate(objetos[Random.Range(0,4)], referenciaLancamento.transform.position, Quaternion.identity);
			Cronometro = 0;
			Criar = true;
		}
		else
		{
			Instantiate(objetos[Random.Range(0,4)], referenciaLancamento.transform.position, Quaternion.identity);
			Cronometro = 0;
			Criar = true;
		}
	}
}

