var id = 1

function add100()
{
    var text = document.getElementById("id2").textContent
    var pos1 = 0
    var pos2 = 0
    var len = text.length
    for(var i = 0; i < text.length;i++)
    {
        if(text[i]>='0' && text[i]<='9')
            {
                pos1 = i;
                i = text.length + 1;
            }
    }
    for(var i = pos1+1; i < text.length;i++)
        if(text[i] == '$')
            {
                pos2 = i;
                i = text.length + 1;
            }

    var number = text.substring(pos1,pos2);
    var new_text = text.substring(0, pos1) + "<br/>" + (parseInt(number) + 100) + '$'
    var x = document.getElementById("id2").children[0]
    x.innerHTML = new_text
    
}

function nextPhoto()
{
    var len = document.querySelectorAll(".pic").length;
    current_img = document.getElementById(`pic${id}`)
    current_img.style.display = "none"
    id++;
    if(id > len)
        id = 1;
    current_img = document.getElementById(`pic${id}`)
    current_img.style.display="block";
    
}

function prevPhoto()
{
    var len = document.querySelectorAll(".pic").length;
    current_img = document.getElementById(`pic${id}`)
    current_img.style.display = "none"
    id--;
    if(id < 1)
        id = len;
    current_img = document.getElementById(`pic${id}`)
    current_img.style.display="block";
  
}


function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left =`${event.offsetX - radius}px`;
  circle.style.top = `${event.offsetY - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);

}

function toggleMenu(){

    var menu = document.getElementsByClassName("menu--off")[0];
    menu.classList.toggle("menu--on")

}