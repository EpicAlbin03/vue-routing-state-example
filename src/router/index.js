import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import ProductDetail from "../views/ProductDetail.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetail },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
