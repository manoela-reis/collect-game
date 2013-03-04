#pragma strict

static var pause : boolean = false;
var fundo: GameObject;
var menu: GameObject;
var mute: GameObject;
var bool: boolean = true;



function Start()

{
fundo.active = false;
menu.active = false;
mute.active = false;


}


function OnMouseUp () 

{

       if (!pause) 
       
       {
       	
			menu.active = true;
       		mute.active = true;
       		fundo.active = true; 
             Time.timeScale = 0;
           pause = true;
           

       } else {
		mute.active = false;		
		menu.active = false;
		fundo.active = false;
		Time.timeScale = 1;
		pause = false;
  


       }
   }
 
   
