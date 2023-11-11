// When the user clicks the button, open the modal
function btnFunc() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalText").innerHTML = document.getElementById("myBtn").innerHTML;
}

// When the user clicks on <span> (x), close the modal
function spanFunc() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the input box, refresh total
window.onclick = function(event) {
    if (event.target != document.getElementById("quantity")) {
      var itemNum = document.getElementById("quantity").value;
      var price = Number(document.getElementById("price").innerHTML.slice(1));
      var totalPrice = "$" + itemNum * price
      document.getElementById("itemTotal").innerHTML = totalPrice;
    }
  }

// When user clicks add to cart, closes modal, refreshes cart total and items to cart list
function cartBtnFunc() {
    //closes modal
    document.getElementById("myModal").style.display = "none";


    var itemTotal = document.getElementById('itemTotal').innerHTML;
    var itemName = document.getElementById('modalText').innerHTML;
    var cartTotal = Number(document.getElementById("cartTotal").innerHTML.slice(1));
    var newTotal = cartTotal + Number(itemTotal.slice(1));

    //refreshes cart total
    document.getElementById("cartTotal").innerHTML = '$' + newTotal;

    //adds items to cart list
    document.getElementById("cartItems").innerHTML += '<ul class="elementor-price-list"><li><a class="elementor-price-list-item"> <div class="elementor-price-list-text"><div class="elementor-price-list-header"><span class="elementor-price-list-title">' + itemName + '</span><span class="elementor-price-list-separator"></span><span class="elementor-price-list-price">' + itemTotal + '</span></div></div></a></li></ul>';
    document.getElementById("shoppingCart").scrollIntoView({behavior: 'smooth'});
}