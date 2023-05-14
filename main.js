// Define the produce prices
const producePrices = {
    tomatoes: 3,
    cucumbers: 2,
    cabbages: 5,
    carrots: 1,
    broccoli: 4,
    cauliflower: 3
  };
  
  // Define the cart array to store the produce objects
  let cart = [];
  
  // Define the addProduce function
  function addProduce() {
    // Get the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const produce = document.getElementById("produce").value;
    const quantity = parseInt(document.getElementById("quantity").value);
  
    const produceObject = {
      ID: Math.random().toString(16).slice(5),
      name,
      email,
      phone,
      produce,
      quantity,
      price: producePrices[produce],
      total: producePrices[produce] * quantity
    };
    cart.push(produceObject);
  
    const cartList = document.getElementById("cart-list");
    const cartItem = document.createElement("li");
    cartItem.innerText = `${produceObject.quantity} ounces of ${produceObject.produce} - $${produceObject.total}`;
    cartList.appendChild(cartItem);
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("quantity").value = "";
  }
  
  function emptyCart() {
    cart = [];
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
  }
  
  document.addEventListener("pagebeforeshow", function(event) {
    if (event.target.id === "display") {
      const displayList = document.getElementById("display-list");
      displayList.innerHTML = "";
      for (const item of cart) {
        const displayItem = document.createElement("li");
        displayItem.innerText = `ID: ${item.ID} - ${item.quantity} ounces of ${item.produce} - $${item.total}`;
        displayList.appendChild(displayItem);
      }
    }
  });
  
  // Part of Version 2. 
  function fourthPageFunction() {
    
  }
  