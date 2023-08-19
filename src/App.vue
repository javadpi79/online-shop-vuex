<template>
  <c-header></c-header>
  <div class="nav-categories-overlay"></div>
  <main>
    <div class="main-container">
      <router-view />
    </div>
  </main>
  <c-footer></c-footer>
  <div class="btn btn-danger scrolltop">
    <i class="fa fa-angle-up"></i>
    <div class="bg-caver-scroll"></div>
  </div>
</template>
<script setup>
import CFooter from "@/components/CFooter.vue";
import CHeader from "@/components/CHeader.vue";
</script>
