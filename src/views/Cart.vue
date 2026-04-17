<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cart.totalItems === 0" class="empty">
      <p>Your cart is empty.</p>
      <router-link to="/" class="btn-shop">Browse Products</router-link>
    </div>
    <div v-else>
      <div v-for="(item, index) in cart.items" :key="index" class="cart-item">
        <div>
          <h3>{{ item.name }}</h3>
          <p class="category">{{ item.category }}</p>
        </div>
        <div class="item-right">
          <span class="price">&pound;{{ item.price }}</span>
          <button @click="cart.removeFromCart(index)" class="btn-remove">Remove</button>
        </div>
      </div>
      <div class="cart-footer">
        <p class="total">Total: &pound;{{ cart.totalPrice }}</p>
        <div class="footer-actions">
          <button @click="cart.clearCart()" class="btn-clear">Clear Cart</button>
          <router-link to="/checkout" class="btn-checkout">Checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart"

export default {
  computed: {
    cart() {
      return useCartStore()
    },
  },
}
</script>

<style>
h1 {
  margin-bottom: 20px;
  color: #0f172a;
}
.empty {
  text-align: center;
  padding: 40px;
  color: #6b7280;
}
.btn-shop {
  display: inline-block;
  margin-top: 15px;
  background-color: #3b2fc6;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.cart-item h3 {
  color: #0f172a;
  font-size: 16px;
}
.category {
  color: #6b7280;
  font-size: 13px;
}
.item-right {
  display: flex;
  align-items: center;
  gap: 15px;
}
.price {
  font-weight: 700;
  color: #3b2fc6;
}
.btn-remove {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
.btn-remove:hover {
  background-color: #dc2626;
}
.cart-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
}
.footer-actions {
  display: flex;
  gap: 10px;
}
.btn-clear {
  background-color: #64748b;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}
.btn-checkout {
  background-color: #3b2fc6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.btn-clear:hover {
  background-color: #475569;
}
.btn-checkout:hover {
  background-color: #2d23a0;
}
</style>
