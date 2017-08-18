
var input = document.getElementById('myInput');

input.addEventListener('keyup', function() {
  // alert('i don port');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('myUL');
  var li = document.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0]; 1
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
})



// ====Progress Bar====

function move() {
  var elem = document.getElementById("myBar");
  var val = document.querySelector('.value')
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      val.innerHTML = width + '%'
    }
  }

}

// ======= Animate Icon ==========
var icon = document.querySelector('.icon');
icon.addEventListener('click', animate)

function animate(e) {
  console.log($(this));
  this.classList.toggle("change");

}
move();
