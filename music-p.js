let sound=document.getElementById("sound");
let icon=document.getElementById("icon");
//creating function that will change pause to play and vice-versa
icon.onclick=function()
{
    if(sound.paused)
    {
        //if paused then play and change the image
        sound.play();
        icon.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
    }
    else
    {
        //if play then pause and change the image
       sound.pause();
       icon.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
    }
}