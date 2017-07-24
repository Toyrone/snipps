
var input = document.getElementById('myInput');

input.addEventListener('keyup', function() {
  // alert('i don port');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('myUL');
  var li = document.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
})
