import React, { useState, useEffect } from 'react';

function CartComponent() {
  const [cartData, setCartData] = useState(null);

   useEffect(() => {
    const storedCartData = localStorage.getItem('cart_storage_key_name');

    if (storedCartData) {
      const parsedCartData = JSON.parse(storedCartData);
      setCartData(parsedCartData);
    }
  }, []);

   const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartData((prevCartData) => {
      const updatedCartItems = prevCartData.cart_items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      return {
        ...prevCartData,
        cart_items: updatedCartItems,
      };
    });
  };

  return (
    <div>
      <div>
      {cartData ? (
        <div>
          <h2>User Name: {cartData.user_name}</h2>
          {cartData.cart_items.map((item) => (
            <div key={item.id}>
              <p>Product Name: {item.product_name}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>
                Increment Quantity
              </button>
              <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>
                Decrement Quantity
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading cart data...</p>
      )}
    </div>
    </div>
  );
}

export default CartComponent;
