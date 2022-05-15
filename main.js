var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        object = img;
        object.scaleToWidth(1000);
        object.scaleToHeight(800);
        object.set({
            top:0, left:0
        });
        canvas.add(object);
    })
	
}

function playSound(){
	x.play();
}
