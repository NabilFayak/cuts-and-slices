async function retrieveOrders() {
  try {
    const query = new Parse.Query("Orders");
    const orders = await query.find();
    const container = document.getElementById("orderContainer");
    container.innerHTML = "";

    orders.forEach((order) => {
      const customerName = order.get("CustomerName");
      const customerAddress = order.get("CustomerAddress");
      const orderCost = order.get("OrderCost");
      let orderStatus = order.get("OrderStatus");

      const orderDetails = document.createElement("tr");
      orderDetails.innerHTML = `
        <td>${customerName}</td>
        <td>${customerAddress}</td>
        <td>$${orderCost}</td>`;

      const statusCell = document.createElement("td");
      const statusButton = document.createElement("button");
      statusButton.innerText = orderStatus;
      statusButton.addEventListener("click", async () => {
        if (orderStatus === "In Progress") {
          order.set("OrderStatus", "Completed");
          await order.save();
          orderStatus = "Completed";
          statusButton.innerText = orderStatus;
        }
      });
      statusCell.appendChild(statusButton);
      orderDetails.appendChild(statusCell);

      container.appendChild(orderDetails);
    });
  } catch (error) {
    alert(`Failed to retrieve the objects, with error code: ${error.message}`);
  }
}
