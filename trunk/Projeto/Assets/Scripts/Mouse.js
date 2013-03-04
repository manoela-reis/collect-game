#pragma strict
function awake(){
	
	DontDestroyOnLoad(gameObject);

}
function Start() 
{
	
	Screen.showCursor = false;

}
function Update ()

{
	transform.position.x = Input.mousePosition.x / Screen.width;		
	transform.position.y = Input.mousePosition.y / Screen.height;				
}