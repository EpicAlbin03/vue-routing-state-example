<template>
  <h1>Checkout</h1>
  <div class="cart-footer">
    <p class="total">Total: &pound;{{ cart.totalPrice }}</p>
    <div class="footer-actions">
      <button @click="$router.back()" class="btn-clear">Go Back</button>
      <button class="btn-checkout">Pay</button>
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
