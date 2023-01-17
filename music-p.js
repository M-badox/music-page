let sound=document.getElementById("sound");
let icon=document.getElementById("icon");

icon.onclick=function()
{
    if(sound.paused)
    {
        sound.play();
        icon.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
    }
    else
    {
       sound.pause();
       icon.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
    }
}