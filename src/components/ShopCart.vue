<template>
  <nav id="offcanvasCart" class="offcanvas offcanvas-cart">
    <div class="offcanvas-bar">
      <!--offcanvas header-->
      <div class="offcanvas-header offcanvas-header_shadow">
        <!--login - shopping cart-->
        <div class="d-flex align-items-center justify-content-between mb-12">
          <!--login dropdown-->
          <div class="dropdown dropdown-account d-inline-block">
            <button
              class="btn btn-secondary dropdown-toggle btn-account"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="assets/images/man.png" alt="account" width="32" />
              <span>حساب کاربری</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/account-header/user.png"
                  alt="user"
                  width="25"
                />
                پروفایل</a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/account-header/shop.png"
                  alt="shop"
                  width="25"
                />
                تاریخچه خرید</a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/account-header/exit.png"
                  alt="exit"
                  width="25"
                />
                خروج</a
              >
            </div>
          </div>
          <!--login dropdown end-->

          <!--close shopping cart-->
          <button
            class="btn btn-close-cart"
            type="button"
            id="offcanvas-dismiss-cart"
          >
            <i class="mdi mdi-close"></i>بستن سبد خرید
          </button>
          <!--close shopping cart end-->
        </div>
        <!--login - shopping cart end-->
        <!--total price-->
        <div class="d-flex align-items-center">
          <div class="offcanvas-header_title ml-auto">مجموع خرید</div>
          <div class="offcanvas-header_price mr-auto">
            <div class="offcanvas-header_price-value text-success">
              <span id="cartOkPriceT">{{ shopCartTotalPrice }}</span>
              <span class="offcanvas-header_price-currency"> تومان </span>
            </div>
          </div>
        </div>
        <!--total price end-->
      </div>
      <!--offcanvas header end-->
      <!--offcanvas body-->
      <div class="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow">
            <div class="offcanvas-body">
              <div class="os-viewport">
                <!--product item-->
                <div
                  class="offcanvas-product-box cart-item"
                  v-for="item in shopCartItems"
                  :key="item.id"
                >
                  <!-- remove-product -->
                  <button
                    class="offcanvas-product-box_delete remove-from-cart"
                    @click="remove(item.id)"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                  <!--product img-->
                  <div class="offcanvas-product-box_image">
                    <img
                      src="assets/images/account-header/img-product/1.png"
                      alt="پنیرسفید 300 گرمی رامک"
                    />
                  </div>
                  <div class="offcanvas-product-box-content float-right">
                    <!--product title-->
                    <span class="offcanvas-product-box-title text-truncate">{{
                      item.productTitle
                    }}</span>
                    <div class="justify-content-between">
                      <div class="offcanvas-product-box-price">
                        <div class="offcanvas-product-box-price-value">
                          {{ item.price * item.count }}
                          <span class="offcanvas-product-box-price-currency"
                            >تومان</span
                          >
                        </div>
                      </div>

                      <div class="offcanvas-required-number-cart">
                        <div class="required-number before">
                          <form @submit="changeCount" class="quantity">
                            <input type="hidden" :value="item.id" name="id" />
                            <input
                              type="number"
                              min="1"
                              max="100"
                              step="1"
                              :value="item.count"
                            />
                            <div class="quantity-nav"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--offcanvas body end-->
      <!--offcanvas footer-->
      <div class="offcanvas-footer">
        <div class="offcanvas-cart-summery">
          <div class="d-flex align-items-stretch justify-content-around">
            <div class="text-center">
              <span class="d-block mb-2">مجموع اقلام</span>
              <div class="offcanvas-header-price">
                <div
                  class="offcanvas-header-price-value text-danger text-center"
                >
                  <span id="cartCount">{{ shopCartItemCount }}</span>
                  <span class="offcanvas-header-price-currency">مورد</span>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <hr class="divider-vertical divider-vertical-lg" />
            </div>
          </div>
        </div>
        <a
          class="btn btn-primary btn-lg btn-block rounded-0 order-link"
          href="#"
        >
          ثبت سفارش &nbsp;<span
            >(<span id="cartOkPriceT2"> {{ shopCartTotalPrice }} </span>
            <small> تومان </small>)</span
          >
        </a>
      </div>
      <!--offcanvas footer end-->
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const shopCartItems = computed(() => store.state.shopCart.items);
const shopCartItemCount = computed(() => store.getters.getItemCounts);
const shopCartTotalPrice = computed(() => store.getters.getTotalPrice);

function remove(id) {
  store.commit("removeItem", id);
}
function changeCount(event) {
  event.preventDefault();
  const id = event.target[0].value;
  const newCount = event.target[1].value;
  store.commit("changeCount", { id, newCount });
}
</script>

<style></style>
