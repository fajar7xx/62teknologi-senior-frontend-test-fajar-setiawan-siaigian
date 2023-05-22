<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useBusinessStore } from '@/store/business';
import axios from 'axios'

import Footer from '@/components/Footer.vue'
import Copyright from '@/components/Copyright.vue'

const businessStore = useBusinessStore()
const { businesses, region, total } = storeToRefs(businessStore)


onMounted(() => {
  businessStore.SearchBusinesses()
})


</script>

<template>
  <header class="py-4 bg-white shadow-sm">
    <div class="container flex justify-between items-center">
      <a href="/">
        <!-- <img src="../assets/images/logo.svg" alt="Logo" class="w-32"> -->
        <h1>Business</h1>
      </a>

      <div class="flex relative w-full max-w-xl">
        <input type="text" name="search" id="search"
          class="hidden py-3 pr-3 w-full rounded-l-md border border-r-0 border-primary md:flex focus:outline-none"
          placeholder="search">
        <button
          class="hidden justify-center items-center px-8 text-white rounded-r-md border transition bg-primary border-primary hover:bg-transparent hover:text-primary md:flex">Search</button>
      </div>

      <div class="flex items-center space-x-4">
        <a href="#" class="relative text-center text-gray-700 transition hover:text-primary">
          <div class="leading-3">For Business</div>
        </a>
        <a href="#" class="relative text-center text-gray-700 transition hover:text-primary">
          <div class="leading-3">Write a Review</div>
        </a>

        <a href="#" class="px-8 py-3 font-medium rounded-md border text-primary border-primary">Login</a>
        <a href="#"
          class="px-8 py-3 font-medium text-white rounded-md border bg-primary border-primary hover:bg-transparent">Sign
          Up</a>
      </div>
    </div>
  </header>
  <!-- ./header -->

  <!-- navbar -->
  <nav class="bg-gray-800">
    <div class="container flex">
      <div class="flex flex-grow justify-between items-center py-5">
        <div class="flex items-center space-x-6 capitalize">
          <a href="../index.html" class="text-gray-200 transition hover:text-white">Home</a>
          <a href="pages/shop.html" class="text-gray-200 transition hover:text-white">Restaurant</a>
          <a href="#" class="text-gray-200 transition hover:text-white">Home Service</a>
          <a href="#" class="text-gray-200 transition hover:text-white">Auto Service</a>
        </div>
      </div>
    </div>
  </nav>
  <!-- ./navbar -->

  <!-- breadcrumb -->
  <div class="container flex gap-3 items-center py-4">
    <a href="../index.html" class="text-base text-primary">
        <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
        <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="font-medium text-gray-600">Product</p>
</div>
<!-- ./breadcrumb -->

<!-- product-detail -->
<div class="container grid grid-cols-2 gap-6">
    <div>
        <img src="../assets/images/products/product1.jpg" alt="product" class="w-full">
        <div class="grid grid-cols-5 gap-4 mt-4">
            <img src="../assets/images/products/product2.jpg" alt="product2"
                class="w-full border cursor-pointer border-primary">
            <img src="../assets/images/products/product3.jpg" alt="product2" class="w-full border cursor-pointer">
            <img src="../assets/images/products/product4.jpg" alt="product2" class="w-full border cursor-pointer">
            <img src="../assets/images/products/product5.jpg" alt="product2" class="w-full border cursor-pointer">
            <img src="../assets/images/products/product6.jpg" alt="product2" class="w-full border cursor-pointer">
        </div>
    </div>

    <div>
        <h2 class="mb-2 text-3xl font-medium uppercase">Italian L Shape Sofa</h2>
        <div class="flex items-center mb-4">
            <div class="flex gap-1 text-sm text-yellow-400">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="ml-3 text-xs text-gray-500">(150 Reviews)</div>
        </div>
        <div class="space-y-2">
            <p class="space-x-2 font-semibold text-gray-800">
                <span>Availability: </span>
                <span class="text-green-600">In Stock</span>
            </p>
            <p class="space-x-2">
                <span class="font-semibold text-gray-800">Brand: </span>
                <span class="text-gray-600">Apex</span>
            </p>
            <p class="space-x-2">
                <span class="font-semibold text-gray-800">Category: </span>
                <span class="text-gray-600">Sofa</span>
            </p>
            <p class="space-x-2">
                <span class="font-semibold text-gray-800">SKU: </span>
                <span class="text-gray-600">BE45VGRT</span>
            </p>
        </div>
        <div class="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
            <p class="text-xl font-semibold text-primary">$45.00</p>
            <p class="text-base text-gray-400 line-through">$55.00</p>
        </div>

        <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
            reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
            consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>

        <div class="pt-4">
            <h3 class="mb-1 text-sm text-gray-800 uppercase">Size</h3>
            <div class="flex gap-2 items-center">
                <div class="size-selector">
                    <input type="radio" name="size" id="size-xs" class="hidden">
                    <label for="size-xs"
                        class="flex justify-center items-center w-6 h-6 text-xs text-gray-600 rounded-sm border border-gray-200 shadow-sm cursor-pointer">XS</label>
                </div>
                <div class="size-selector">
                    <input type="radio" name="size" id="size-sm" class="hidden">
                    <label for="size-sm"
                        class="flex justify-center items-center w-6 h-6 text-xs text-gray-600 rounded-sm border border-gray-200 shadow-sm cursor-pointer">S</label>
                </div>
                <div class="size-selector">
                    <input type="radio" name="size" id="size-m" class="hidden">
                    <label for="size-m"
                        class="flex justify-center items-center w-6 h-6 text-xs text-gray-600 rounded-sm border border-gray-200 shadow-sm cursor-pointer">M</label>
                </div>
                <div class="size-selector">
                    <input type="radio" name="size" id="size-l" class="hidden">
                    <label for="size-l"
                        class="flex justify-center items-center w-6 h-6 text-xs text-gray-600 rounded-sm border border-gray-200 shadow-sm cursor-pointer">L</label>
                </div>
                <div class="size-selector">
                    <input type="radio" name="size" id="size-xl" class="hidden">
                    <label for="size-xl"
                        class="flex justify-center items-center w-6 h-6 text-xs text-gray-600 rounded-sm border border-gray-200 shadow-sm cursor-pointer">XL</label>
                </div>
            </div>
        </div>

        <div class="pt-4">
            <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Color</h3>
            <div class="flex gap-2 items-center">
                <div class="color-selector">
                    <input type="radio" name="color" id="red" class="hidden">
                    <label for="red"
                        class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                        style="background-color: #fc3d57;"></label>
                </div>
                <div class="color-selector">
                    <input type="radio" name="color" id="black" class="hidden">
                    <label for="black"
                        class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                        style="background-color: #000;"></label>
                </div>
                <div class="color-selector">
                    <input type="radio" name="color" id="white" class="hidden">
                    <label for="white"
                        class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                        style="background-color: #fff;"></label>
                </div>

            </div>
        </div>

        <div class="mt-4">
            <h3 class="mb-1 text-sm text-gray-800 uppercase">Quantity</h3>
            <div class="flex w-max text-gray-600 border border-gray-300 divide-x divide-gray-300">
                <div class="flex justify-center items-center w-8 h-8 text-xl cursor-pointer select-none">-</div>
                <div class="flex justify-center items-center w-8 h-8 text-base">4</div>
                <div class="flex justify-center items-center w-8 h-8 text-xl cursor-pointer select-none">+</div>
            </div>
        </div>

        <div class="flex gap-3 pt-5 pb-5 mt-6 border-b border-gray-200">
            <a href="#"
                class="flex gap-2 items-center px-8 py-2 font-medium text-white uppercase rounded border transition bg-primary border-primary hover:bg-transparent hover:text-primary">
                <i class="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a href="#"
                class="flex gap-2 items-center px-8 py-2 font-medium text-gray-600 uppercase rounded border border-gray-300 transition hover:text-primary">
                <i class="fa-solid fa-heart"></i> Wishlist
            </a>
        </div>

        <div class="flex gap-3 mt-4">
            <a href="#"
                class="flex justify-center items-center w-8 h-8 text-gray-400 rounded-full border border-gray-300 hover:text-gray-500">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#"
                class="flex justify-center items-center w-8 h-8 text-gray-400 rounded-full border border-gray-300 hover:text-gray-500">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#"
                class="flex justify-center items-center w-8 h-8 text-gray-400 rounded-full border border-gray-300 hover:text-gray-500">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
    </div>
</div>
<!-- ./product-detail -->

<!-- description -->
<div class="container pb-16">
    <h3 class="pb-3 font-medium text-gray-800 border-b border-gray-200 font-roboto">Product details</h3>
    <div class="pt-6 w-3/5">
        <div class="text-gray-600">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                sapiente dolor quisquam, ex ab.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                illum dolor totam, ducimus excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                numquam labore amet.</p>
        </div>

        <table class="mt-6 w-full text-sm text-left text-gray-600 border-collapse table-auto">
            <tr>
                <th class="px-4 py-2 w-40 font-medium border border-gray-300">Color</th>
                <th class="px-4 py-2 border border-gray-300">Blank, Brown, Red</th>
            </tr>
            <tr>
                <th class="px-4 py-2 w-40 font-medium border border-gray-300">Material</th>
                <th class="px-4 py-2 border border-gray-300">Latex</th>
            </tr>
            <tr>
                <th class="px-4 py-2 w-40 font-medium border border-gray-300">Weight</th>
                <th class="px-4 py-2 border border-gray-300">55kg</th>
            </tr>
        </table>
    </div>
</div>
<!-- ./description -->

<!-- related product -->
<div class="container pb-16">
    <h2 class="mb-6 text-2xl font-medium text-gray-800 uppercase">Related products</h2>
    <div class="grid grid-cols-4 gap-6">
        <div class="overflow-hidden bg-white rounded shadow group">
            <div class="relative">
                <img src="../assets/images/products/product1.jpg" alt="product 1" class="w-full">
                <div class="flex absolute inset-0 gap-2 justify-center items-center bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="view product">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="add to wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div class="px-4 pt-4 pb-3">
                <a href="#">
                    <h4 class="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">Guyer
                        Chair</h4>
                </a>
                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl font-semibold text-primary">$45.00</p>
                    <p class="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-400">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="ml-3 text-xs text-gray-500">(150)</div>
                </div>
            </div>
            <a href="#"
                class="block py-1 w-full text-center text-white rounded-b border transition bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                to cart</a>
        </div>
        <div class="overflow-hidden bg-white rounded shadow group">
            <div class="relative">
                <img src="../assets/images/products/product4.jpg" alt="product 1" class="w-full">
                <div class="flex absolute inset-0 gap-2 justify-center items-center bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="view product">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="add to wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div class="px-4 pt-4 pb-3">
                <a href="#">
                    <h4 class="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">Bed
                        King Size</h4>
                </a>
                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl font-semibold text-primary">$45.00</p>
                    <p class="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-400">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="ml-3 text-xs text-gray-500">(150)</div>
                </div>
            </div>
            <a href="#"
                class="block py-1 w-full text-center text-white rounded-b border transition bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                to cart</a>
        </div>
        <div class="overflow-hidden bg-white rounded shadow group">
            <div class="relative">
                <img src="../assets/images/products/product2.jpg" alt="product 1" class="w-full">
                <div class="flex absolute inset-0 gap-2 justify-center items-center bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="view product">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="add to wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div class="px-4 pt-4 pb-3">
                <a href="#">
                    <h4 class="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                        Couple Sofa</h4>
                </a>
                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl font-semibold text-primary">$45.00</p>
                    <p class="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-400">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="ml-3 text-xs text-gray-500">(150)</div>
                </div>
            </div>
            <a href="#"
                class="block py-1 w-full text-center text-white rounded-b border transition bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                to cart</a>
        </div>
        <div class="overflow-hidden bg-white rounded shadow group">
            <div class="relative">
                <img src="../assets/images/products/product3.jpg" alt="product 1" class="w-full">
                <div class="flex absolute inset-0 gap-2 justify-center items-center bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="view product">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#"
                        class="flex justify-center items-center w-9 h-8 text-lg text-white rounded-full transition bg-primary hover:bg-gray-800"
                        title="add to wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div class="px-4 pt-4 pb-3">
                <a href="#">
                    <h4 class="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                        Mattrass X</h4>
                </a>
                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl font-semibold text-primary">$45.00</p>
                    <p class="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-400">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="ml-3 text-xs text-gray-500">(150)</div>
                </div>
            </div>
            <a href="#"
                class="block py-1 w-full text-center text-white rounded-b border transition bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                to cart</a>
        </div>
    </div>
</div>
<!-- ./related product -->

  <!-- footer -->
  <Footer />
  <!-- ./footer -->

  <!-- copyright -->
  <Copyright />
  <!-- ./copyright -->
</template>
