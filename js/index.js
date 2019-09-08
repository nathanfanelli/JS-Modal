// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
window.onload = setTimeout(function() {
  modal.style.display = "block";
}, 2000);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Same code written in jQuery
var modal = $('#myModal');
var btn = $('#myBtn');
var span = $('.close')[0];

$(window).load(function() {
    setTimeout(function(){
        $('.modal')
    })
})