<template>
  <div class="item">
    <a
      href="#"
      class="d-block hover-img-link"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      <img
        src="/assets/images/slider-product/slider-product-image-1.png"
        class="img-fluid"
        alt=""
      />
    </a>
    <h2 class="post-title">
      <a href="#" data-toggle="modal" data-target="#exampleModal">
        {{ product.title }}
      </a>
    </h2>
    <div class="price">
      <ins
        ><span>{{ product.price }}<span>تومان</span></span></ins
      >
    </div>
    <div class="product-box-action">
      <button class="btn btn-gradient-primary add-to-cart" @click="addToCart">
        <i class="mdi mdi-plus-circle"></i>
        افزودن به سبد
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps(["product"]);
const { product } = toRefs(props, "product");

function addToCart() {
  store.commit("addToShopCart", product.value);
}
</script>

<style></style>
