for(let i = 0; i < 25; i++)
    {
        document.getElementsByClassName('circle')[i].onmouseover = function() {mouseOver('circle', i)};
    }

function mouseOver(circle, indexNum) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementsByClassName(circle)[indexNum].style.backgroundColor = "#" + randomColor;
}