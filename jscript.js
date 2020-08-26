// aggiungi elementi
function addItemsListner() {
  $('#add').click(function () {
    var item = $('#itemAdd').val();
    $('#itemAdd').val('');

    $.ajax({
      url:'http://157.230.17.132:3021/todos',
      method:'POST',
      data:{
        text:item
      },
      success:function (data) {
        getList();
      },
      error:function (error) {
        console.log(error);
      }
    })

  });
}


// legge e stampa la lista di elementi
function getList() {
  $.ajax({
    url:'http://157.230.17.132:3021/todos',
    method:'GET',
    success:function (data) {
      var target =$('#list')
      target.text('')
      for (var i = 0; i < data.length; i++) {
        var item = data[i].text;
        target.append('<li data-id='+data[i].id+' class="item">'+item+'</li>');
      }
    },
    error:function (err) {
      console.log(err);
    }
  });
}

function init() {
  getList();
  addItemsListner();
}

$(document).ready(init);
