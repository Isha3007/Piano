for(var i=0;i<document.querySelectorAll(".piano-keys").length;i++)
    {
        document.querySelectorAll(".piano-keys")[i].addEventListener("click", function ()
        {
            makesound(this.id)
        });
    }

function makesound(value)
 {
    const x = "sounds\\key"+value+".mp3";
    var audio = new Audio(x);
    audio.play();
 
 }