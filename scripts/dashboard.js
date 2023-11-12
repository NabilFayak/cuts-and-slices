async function retrieveOrders() {
  //Create your Parse Query, and define the class it will be searched
  const query = new Parse.Query("Orders");

  try {
    //Query the soccerPlayers object using the objectId you've copied
    const order = await query.get("h4Wl7A0wM8");
    //access each object property using the get method
    const orderNumber = order.get("OrderNumber")
    const customerName = order.get("CustomerName");
    const customerAddress = order.get("CustomerAddress");
    const orderCost = order.get("OrderCost");
    const orderStatus = order.get("OrderStatus");

    const container = document.getElementById("orderContainer");
    const orderDetails = document.createElement("tr");
    orderDetails.innerHTML = `
      <td>${orderNumber}</td>
      <td>${customerName}</td>
      <td>${customerAddress}</td>
      <td>$${orderCost}</td>
      <td>${orderStatus}</td>`;
    container.appendChild(orderDetails);
  }
  catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }  
}