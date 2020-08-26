// legge e stampa la lista di elementi
function getList() {
  $.ajax({
    url:'http://157.230.17.132:3021/todos',
    method:'GET',
    success:function (data) {
      var target =$('#list')
      for (var i = 0; i < data.length; i++) {
        var item = data[i].text;
        target.append('<li class="item">'+item+'</li>');
      }
    },
    error:function (err) {
      console.log(err);
    }
  });
}

function init() {
  getList();
}

$(document).ready(init);
