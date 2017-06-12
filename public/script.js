var cart = {
  inCart: []
};

var clearCart = function () {
  cart = {
    inCart: []
  }
  updateCart();
}

var updateCart = function () {
  $(".cart-list").empty()
  var source = $('#render-cart').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);
  $('.cart-list').append(newHTML);
  calcTotal()
}


var calcTotal = function () {
  var total = 0;
  if (cart.inCart != 0){
  for (var i = 0; i < cart.inCart.length; i++) {
    var number = parseInt(cart.inCart[i].Price);
    total = total + number;
  }}
  $(".total").html(total)
}


var addItem = function (item) {
  cart.inCart.push(item)
}



$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass("show")
});

$('.add-to-cart').on('click', function () {
  var name = $(this).closest(".card").attr('data-name');
  var price = $(this).closest(".card").attr("data-price");
  var item = {
    Item: name,
    Price: price
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

updateCart();