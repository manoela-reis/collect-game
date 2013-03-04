/*#pragma strict

var vel : float;
var cronometro : float;

var pos_Personagem : Vector3;

var maca : GameObject[];
var itens : GameObject [];

static var coletou_Macas : boolean;
static var resto_Macas : int;
static var mortes : int;

var som_ColetouItem : boolean;
var som_Morte :boolean;

var som_ColetouItemGO : GameObject;
var som_MorteGO : GameObject;

var camera_1 : Transform;

var objetos: GameObject[];
var objetos2: GameObject[];
//var botao: GameObject[];
//var botao2: GameObject[];


function Start () 
{
	pos_Personagem = gameObject.transform.position;
	camera_1 = GameObject.FindWithTag("MainCamera").transform;
	
	// Define quantidade de itens na fase.
	itens += GameObject.FindGameObjectsWithTag("Fantasma");
	itens += GameObject.FindGameObjectsWithTag("Gelo");
	itens += GameObject.FindGameObjectsWithTag("Raio");
	
	// Define quantas maçãs há na fase.
	maca = GameObject.FindGameObjectsWithTag("Maca");
	
	resto_Macas = maca.Length;
	coletou_Macas = false;
	
//	botao = GameObject.FindGameObjectsWithTag("botao");
//	botao2 = GameObject.FindGameObjectsWithTag("botao2");

}

function Update () 
{

	// Personagem poder se mover
	if (cronometro <= 5)
	{
		cronometro += Time.deltaTime;
	}
	if (cronometro > 2)
	{
		if (transform.tag == "Player" || transform.tag == "PlayerFantasma")
			transform.Translate(Input.GetAxisRaw("Horizontal") * vel * Time.deltaTime, 0 ,Input.GetAxisRaw("Vertical") * vel * Time.deltaTime);

		else if (transform.tag == "Player_Inverso")
			transform.Translate(-Input.GetAxisRaw("Horizontal") * vel * Time.deltaTime, 0 ,-Input.GetAxisRaw("Vertical") * vel * Time.deltaTime);
	}
	
	// Poder avançar de fase.
	if (resto_Macas == 0)
	{
		coletou_Macas = true;
	}
	
	// Precaução para caso o trigger falhar.
	if (Distancia_Inimigo.distancia_Menor && !Trigger_ItensEspeciais.fantasma)
	{
		coletou_Macas = false;
		resto_Macas = maca.Length;
		mortes++;
		som_Morte = true;
		gameObject.transform.position = pos_Personagem;
		
		for (var i : int; i < maca.Length; i++)
		{
			maca[i].gameObject.active = true;
		}
		
		for (var j : int; j < itens.Length; j++)
		{
			itens[j].gameObject.active = true;
		}
		
		Distancia_Inimigo.distancia_Menor = false;
	}
	
	if (som_Morte)
	{
		Instantiate(som_MorteGO, camera_1.position, camera_1.rotation);
		som_Morte = false;
	}
	
	if (som_ColetouItem)
	{
		Instantiate(som_ColetouItemGO, camera_1.position, camera_1.rotation);
		som_ColetouItem = false;
	}
}

function OnTriggerEnter (other: Collider)
{
	if ((other.gameObject.tag == "Inimigo" || other.gameObject.tag == "Inimigo1") && !Trigger_ItensEspeciais.fantasma)
	{
		coletou_Macas = false;
		resto_Macas = maca.Length;
		gameObject.transform.position = pos_Personagem;
		mortes ++;
		
		som_Morte = true;
		
		for (var i : int; i < maca.Length; i++)
		{
			maca[i].gameObject.active = true;
		}
		
		for (var j : int; j < itens.Length; j++)
		{
			itens[j].gameObject.active = true;
		}
		
		for (var k : int; k < objetos.Length; k++)
		{
			objetos[k].gameObject.active = true;
		//	botao[k].gameObject.renderer.material.color = Color.yellow;
		}
		
		for (var L : int; L < objetos2.Length; L++)
		{
			objetos2[L].gameObject.active = true;
		//	botao2[L].renderer.material.color = Color.yellow;
		}
	}
	
	if (other.gameObject.tag == "Maca")
	{
		resto_Macas --;
		som_ColetouItem = true;
		other.gameObject.active = false;
	}
	
	if ((other.gameObject.tag == "Gelo") || (other.gameObject.tag == "Raio") || (other.gameObject.tag == "Fantasma"))
	{
		som_ColetouItem = true;
		other.gameObject.active = false;
	}

	if (other.gameObject.tag == "botao")
		{
			other.renderer.material.color = Color.green;
				
			for (var a : int; a < objetos.Length; a++)
			{
				objetos[a].gameObject.active = false;
			}				
			
		}

		if (other.gameObject.tag == "botao2")
		{
			other.renderer.material.color = Color.green;
				
			for (var b : int; b < objetos2.Length; b++)
			{
				objetos2[b].gameObject.active = false;
			}				
			
		}

}*/