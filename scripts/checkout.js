function placeOrder() {
  const Order = Parse.Object.extend("Orders");
  const newOrder = new Order();

  // Set the data for the order
  newOrder.set("CustomerName", document.getElementById('cardHolderName').value);
  newOrder.set("CustomerAddress", document.getElementById('address').value);
  newOrder.set("OrderCost", parseFloat(sessionStorage.getItem('OrderCost')));
  newOrder.set("OrderStatus", "In Progress")

  // Save the order to the database
  newOrder.save().then(
    (result) => {
      console.log('Order placed!', result);
    },
    (error) => {
      console.error('Error while placing order: ', error);
    }
  );
}
