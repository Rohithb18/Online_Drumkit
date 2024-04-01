var len=document.querySelectorAll("button").length;
var sounds_paths={'q': "audio0.mp3",
                  'w': "audio1.mp3",
                  'e': "audio2.mp3",
                  'r': "audio3.mp3",
                  't': "audio4.mp3",
                  'y': "audio5.mp3",
                  'u': "audio6.mp3",};
for(var i=0;i<len;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        event_handler(sounds_paths[this.innerHTML]);
    });
}
addEventListener("keydown",function(event)
{
    event_handler(sounds_paths[event.key]);
    press(event.key);
});
function event_handler(re_path)
{
    var audio=new Audio(re_path);
    audio.play();
}
function press(key)
{
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function()
    {
        active.classList.remove("pressed");
    },200);
}