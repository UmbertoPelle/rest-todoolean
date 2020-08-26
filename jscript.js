// listener aggiunta items
function addItemsListener() {
  $('#itemAdd').keydown(function () {

    if (event.which == 13){
      addItems();
    }

  });

  $('#add').click(function () {
    addItems();
  });
}

// aggiunta elementi
function addItems() {
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
  });
}

// elimina elementi
function deleteItems() {
  $(document).on('click','.fa-trash-alt',function () {
    var clicked = $(this);
    var id = clicked.data('id');

    $.ajax({
      url:'http://157.230.17.132:3021/todos/'+id,
      method:'DELETE',
      success:function (data) {
        getList();
      },
      error:function (err) {
        console.log(err);
      }
    });

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
        target.append('<li class="item">'+item+'<i data-id='+ data[i].id + ' class="fas fa-trash-alt"></i>'+'</li>');
      }
    },
    error:function (err) {
      console.log(err);
    }
  });
}

function init() {
  getList();
  addItemsListener();
  deleteItems();
}

$(document).ready(init);
