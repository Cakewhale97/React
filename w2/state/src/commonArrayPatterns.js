//Common patterns for updating arrays in state 

const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4},
    { id: 2, product: "Monitor", price: 200},
    { id: 3, product: "Keyboard", price: 20},
  
];

// Adding to an array 

[...shoppingCart, { id: 4, product: "Mouse", price: 10}];

// Removing from an array

shoppingCart.filter((item) => item.id !== 2);

// Updating all elements in an array

shoppingCart.map((item) => {
  return {
    ...item, 
    product: item.product.toLowerCase(),
  };
});

// Modyfing a single element in an array

shoppingCart.map((item) => {
    if (item.id !== 2) return item;
    return {
        ...item,
        price: item.price * 2,
    };
    });
