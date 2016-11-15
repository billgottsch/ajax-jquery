$(function(){

  $.ajax({
    url : "assets/fruits.json"
    }).done(function(res) {
      for(fruit in res) {
        console.log();
        var newFruit = $("<li></li>");
        newFruit.text(fruit + ': ' + res[fruit].color);
        $('#fruitlist').append(newFruit);
      }
    });
})

$(function(){

  $(document).ready(function() {
    $('#golfers').DataTable();
  });
})
