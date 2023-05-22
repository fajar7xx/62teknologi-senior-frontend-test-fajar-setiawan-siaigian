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

  <!-- shop wrapper -->
  <div class="container grid grid-cols-2 gap-6 items-start pt-4 pb-16 md:grid-cols-4">
    <!-- sidebar -->
    <!-- drawer init and toggle -->
    <div class="text-center md:hidden">
      <button
        class="block px-5 py-2.5 mr-2 mb-2 text-sm font-medium text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 md:hidden"
        type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
        aria-controls="drawer-example">
        <ion-icon name="grid-outline"></ion-icon>
      </button>
    </div>

    <!-- drawer component -->
    <div id="drawer-example"
      class="overflow-y-auto fixed top-0 left-0 z-40 p-4 w-80 h-screen bg-white transition-transform -translate-x-full dark:bg-gray-800"
      tabindex="-1" aria-labelledby="drawer-label">
      <h5 id="drawer-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg
          class="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"></path>
        </svg>Info</h5>
      <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example"
        class="inline-flex absolute top-2.5 right-2.5 items-center p-1.5 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Categories</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" name="cat-1" id="cat-1" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-1" class="ml-3 text-gray-600 cusror-pointer">Bedroom</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-2" id="cat-2" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-2" class="ml-3 text-gray-600 cusror-pointer">Sofa</label>
              <div class="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-3" id="cat-3" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-3" class="ml-3 text-gray-600 cusror-pointer">Office</label>
              <div class="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-4" id="cat-4" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-4" class="ml-3 text-gray-600 cusror-pointer">Outdoor</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Brands</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" name="brand-1" id="brand-1"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-1" class="ml-3 text-gray-600 cusror-pointer">Cooking Color</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-2" id="brand-2"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-2" class="ml-3 text-gray-600 cusror-pointer">Magniflex</label>
              <div class="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-3" id="brand-3"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-3" class="ml-3 text-gray-600 cusror-pointer">Ashley</label>
              <div class="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-4" id="brand-4"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-4" class="ml-3 text-gray-600 cusror-pointer">M&D</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-5" id="brand-5"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-5" class="ml-3 text-gray-600 cusror-pointer">Olympic</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Price</h3>
          <div class="flex items-center mt-4">
            <input type="text" name="min" id="min"
              class="px-3 py-1 w-full text-gray-600 rounded border-gray-300 shadow-sm focus:border-primary focus:ring-0"
              placeholder="min">
            <span class="mx-3 text-gray-500">-</span>
            <input type="text" name="max" id="max"
              class="px-3 py-1 w-full text-gray-600 rounded border-gray-300 shadow-sm focus:border-primary focus:ring-0"
              placeholder="max">
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">size</h3>
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
              <label for="red" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #fc3d57;"></label>
            </div>
            <div class="color-selector">
              <input type="radio" name="color" id="black" class="hidden">
              <label for="black" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #000;"></label>
            </div>
            <div class="color-selector">
              <input type="radio" name="color" id="white" class="hidden">
              <label for="white" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #fff;"></label>
            </div>

          </div>
        </div>

      </div>
      <div class="grid grid-cols-2 gap-4">
        <a href="#"
          class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
          more</a>
        <a href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get
          access <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg></a>
      </div>
    </div>

    <!-- ./sidebar -->
    <div class="hidden col-span-1 px-4 pb-6 bg-white rounded shadow overflow-hiddenb md:block">
      <div class="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Categories</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" name="cat-1" id="cat-1" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-1" class="ml-3 text-gray-600 cusror-pointer">Bedroom</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-2" id="cat-2" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-2" class="ml-3 text-gray-600 cusror-pointer">Sofa</label>
              <div class="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-3" id="cat-3" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-3" class="ml-3 text-gray-600 cusror-pointer">Office</label>
              <div class="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="cat-4" id="cat-4" class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="cat-4" class="ml-3 text-gray-600 cusror-pointer">Outdoor</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Brands</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" name="brand-1" id="brand-1"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-1" class="ml-3 text-gray-600 cusror-pointer">Cooking Color</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-2" id="brand-2"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-2" class="ml-3 text-gray-600 cusror-pointer">Magniflex</label>
              <div class="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-3" id="brand-3"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-3" class="ml-3 text-gray-600 cusror-pointer">Ashley</label>
              <div class="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-4" id="brand-4"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-4" class="ml-3 text-gray-600 cusror-pointer">M&D</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" name="brand-5" id="brand-5"
                class="rounded-sm cursor-pointer text-primary focus:ring-0">
              <label for="brand-5" class="ml-3 text-gray-600 cusror-pointer">Olympic</label>
              <div class="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">Price</h3>
          <div class="flex items-center mt-4">
            <input type="text" name="min" id="min"
              class="px-3 py-1 w-full text-gray-600 rounded border-gray-300 shadow-sm focus:border-primary focus:ring-0"
              placeholder="min">
            <span class="mx-3 text-gray-500">-</span>
            <input type="text" name="max" id="max"
              class="px-3 py-1 w-full text-gray-600 rounded border-gray-300 shadow-sm focus:border-primary focus:ring-0"
              placeholder="max">
          </div>
        </div>

        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium text-gray-800 uppercase">size</h3>
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
              <label for="red" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #fc3d57;"></label>
            </div>
            <div class="color-selector">
              <input type="radio" name="color" id="black" class="hidden">
              <label for="black" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #000;"></label>
            </div>
            <div class="color-selector">
              <input type="radio" name="color" id="white" class="hidden">
              <label for="white" class="block w-6 h-6 rounded-sm border border-gray-200 shadow-sm cursor-pointer"
                style="background-color: #fff;"></label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- products -->
    <div class="col-span-3">
      <div class="flex items-center mb-4">
        <select name="sort" id="sort"
          class="px-4 py-3 w-44 text-sm text-gray-600 rounded border-gray-300 shadow-sm focus:ring-primary focus:border-primary">
          <option value="">Default sorting</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
          <option value="latest">Latest product</option>
        </select>
      </div>

      <div class="">


        <!-- component -->
        <div class="flex flex-col h-full">
          <div v-for="business in businesses"
            class="flex relative flex-col p-3 mb-4 space-y-3 max-w-xs bg-white rounded border border-white shadow md:flex-row md:space-x-5 md:space-y-0 md:max-w-full">
            <div class="grid place-items-center w-full bg-white md:w-1/5">
              <img :src="business.image_url" alt="tailwind logo" class="rounded" />
            </div>
            <div class="flex flex-col p-3 space-y-2 w-full bg-white md:w-4/5">
              <div class="flex gap-3 justify-end item-center">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p class="ml-1 text-sm font-bold text-gray-600">
                    {{ business.rating }}
                    <span class="font-normal text-gray-500">({{ business.review_count }} reviews)</span>
                  </p>
                </div>

                <div class="hidden px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded md:block"
                  v-for="category in business.categories">
                  {{ category.title }}</div>
              </div>
              <h3 class="text-xl font-black text-gray-800 md:text-3xl hover:underline">{{ business.name }}</h3>
              <p class="text-base text-gray-500 md:text-lg">{{ business.location.address1 }}, {{ business.location.city }},
                {{ business.location.city }}, {{ business.location.country }}</p>
              <p class="text-xl font-black text-gray-800">
                {{ business.price }}
              </p>
              <div class="flex gap-3 items-center">
                <div class="p-2 text-sm text-gray-400 rounded border" v-for="transaction in business.transactions">
                  {{ transaction }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ./products -->
  </div>
  <!-- ./shop wrapper -->

  <!-- footer -->
  <Footer />
  <!-- ./footer -->

  <!-- copyright -->
  <Copyright />
  <!-- ./copyright -->
</template>
