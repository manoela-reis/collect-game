/*using UnityEngine;
using System.Collections;
using System.IO;
using System.Text;

public class PainelDosTrofeus : MonoBehaviour {
	
	
	public GUITexture[] trofeus = new GUITexture[6];
	public Texture2D[] texturasTrofeu = new Texture2D[2];
	string[] premios;
	//public int record;
	string caminho = "Premios.txt";
	
	
	
	// Use this for initialization
	void Start () {
		
		if (!File.Exists(caminho)){
			
			File.WriteAllText(caminho, "0,0,0,0,0,0,");
			
		}
	
	}
	
	
	//atualizar
	public void Atualizar (int premio, int valor) {
		
		
		StringBuilder atualizacao = new StringBuilder ();
		premios = File.ReadAllText(caminho).Split(new char[] {','});
		
		premios[premio-1] = valor.ToString();
		
			for (int p = 0; p < premios.Length -1; p++){
			
			
			atualizacao.Append(premios[p] + ","); 
			
			}
		
		File.WriteAllText(caminho, atualizacao.ToString());
		
		
		
		Debug.Log(atualizacao);
		
	}
	
	
	//desenha os trofeus na cena dos trofeus
	public void desenharTrofeus () {
		
	
		
		int contador = 0;
		string[] textos = new string[6];
		
		premios = File.ReadAllText(caminho).Split(new char[] {','});
		
		textos[0] = "conseguir mais de \n100 pontos \n \n	         " + premios[0];
		textos[1] = "ficar 5min sem morrer\n\n \n	         " + premios[1];
		textos[2] = "conseguir mais de \n7 hits\n \n	         " + premios[2];
		
		Debug.Log (File.ReadAllText(caminho));
		
		//Aqui verifica um por um, se ele conseguiu ou nao o premio, para poder desenhar o trofeu.
		//Esse while funciona como for, sendo o "i" sua variavel móvel.
		
		int i = 0;
		while (i < textos.Length){
			
			if (!premios[i].Equals("0"))
				trofeus[i].texture = texturasTrofeu[1];
				else
				trofeus[i].texture = texturasTrofeu[0];
			
				if (i==contador){
				
				trofeus[contador].guiText.text = textos[contador];
				contador++;
				
				}
			
			i++;
		
		}

	}
	
	
	//aqui voce testa se conseguiu passar de algum record, seja la qual for
	public bool testeRecord (int premio, int pontos) {
		
		
		premios = File.ReadAllText(caminho).Split(new char[] {','});
		
		if (pontos > int.Parse(premios[premio - 1]))
			return true;
		else
			return false;
		
	}
	
	
	//retorna int do record pontos
	public int Record (int premio) {
		
		
			premios = File.ReadAllText(caminho).Split(new char[] {','});
			return int.Parse(premios[premio]);	
				
		}
	
	
}*/