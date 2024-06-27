for(var i=0;i<document.querySelectorAll(".piano-keys").length;i++)
    {
        document.querySelectorAll(".piano-keys")[i].addEventListener("click", function ()
        {
            makesound(this.id)
            animate(this.id);
        });
    }

function makesound(value)
 {
    const x = "sounds\\key"+value+".mp3";
    var audio = new Audio(x);
    audio.play();
 
 }

 function animate(val)
 {
    var active = document.getElementById(val);
    active.classList.add("pressed");
    setTimeout(function()
{
    active.classList.remove("pressed");
}, 100);
 }