#pragma strict
static var mudo: boolean;
var MuteOnOff : Material[];
function OnMouseUp ()

{
	if (mudo == false){
		gameObject.renderer.material = MuteOnOff[0];
		mudo = true;
		}
	else if (mudo == true){
	
		gameObject.renderer.material = MuteOnOff[1];
		mudo = false;
		}
}

function Update ()
{

}