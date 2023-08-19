<template>
  <div class="d-block">
    <!-- slider-products -->
    <div class="col-12 float-right mt-4">
      <div class="slider-products">
        <header class="card-header">
          <span class="title-one">پرتخفیف ترین ها</span>
          <a class="card-title">مشاهده همه</a>
        </header>
        <div class="swiper-container-product">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in products" :key="item.id">
              <product-cart :product="item"></product-cart>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="col-lg-6 col-md-6 col-xs-12 order-1 float-right">
                  <div class="thum-img">
                    <div class="swiper-container-more">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="item">
                            <a
                              href="#"
                              class="d-block hover-img-link"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <img
                                src="assets/images/slider-product/product-more/product-more-image-1.png"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="product-box-discount">
                                <strong
                                  >%45
                                  <small>تخفیف</small>
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="item">
                            <a
                              href="#"
                              class="d-block hover-img-link"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <img
                                src="assets/images/slider-product/product-more/product-more-image-2.png"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="product-box-discount">
                                <strong
                                  >%45
                                  <small>تخفیف</small>
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="item">
                            <a
                              href="#"
                              class="d-block hover-img-link"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <img
                                src="assets/images/slider-product/product-more/product-more-image-3.png"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="product-box-discount">
                                <strong
                                  >%45
                                  <small>تخفیف</small>
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="item">
                            <a
                              href="#"
                              class="d-block hover-img-link"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <img
                                src="assets/images/slider-product/product-more/product-more-image-4.png"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="product-box-discount">
                                <strong
                                  >%45
                                  <small>تخفیف</small>
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="item">
                            <a
                              href="#"
                              class="d-block hover-img-link"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <img
                                src="assets/images/slider-product/product-more/product-more-image-5.png"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="product-box-discount">
                                <strong
                                  >%45
                                  <small>تخفیف</small>
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- Add Pagination -->
                      <div class="swiper-pagination"></div>
                      <!-- Add Navigation -->
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 order-2 float-right">
                  <div class="product-box-modal-title">
                    <h2 class="post-title">
                      <a href="#"> چای سیاه لوز هندوستان ساده 450 گرمی بلوط </a>
                    </h2>
                  </div>
                  <div class="small-gutters align-items-stretch mb-4">
                    <div class="col-lg-5 pr-0 pl-0 float-right">
                      <div class="product-rate">
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                      </div>
                      <div class="product-box-modal_price">
                        <div class="price">
                          <del
                            ><span>30000<span>تومان</span></span></del
                          >
                          <ins
                            ><span>17000<span>تومان</span></span></ins
                          >
                        </div>
                      </div>
                      <div class="product-box_action">
                        <button
                          class="btn btn-gradient-primary add-to-cart"
                          type="submit"
                        >
                          افزودن به سبد
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-7 pr-0 pl-0 float-right">
                      <div class="bg-gray-100 rounded">
                        <ul class="list-doted mb-0">
                          <li>چای سیاه لوز هندوستان ساده 450 گرمی بلوط</li>
                        </ul>
                      </div>
                      <div class="product-box_action">
                        <a href="#" class="btn btn-outline-dark btn-block"
                          >مشاهده جزئیات</a
                        >
                      </div>
                    </div>
                    <div class="small-gutters">
                      <div class="col-lg-12 mb-8 pr-0 pl-0 float-right mt-3">
                        <div class="justify-content-between">
                          <a href="#" class="text-primary"
                            ><i class="fa fa-comment-o"></i>ثبت نظر</a
                          >
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
    </div>
  </div>
</template>

<script setup>
import ProductCart from "@/components/ProductCart.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.state.product.products);
</script>
