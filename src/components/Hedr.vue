<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  components: {
    RouterLink,
  },
  methods: {
    toggleMenu() {
      const btn = document.getElementById("btn");
      const menu = document.getElementById("menu-2");

      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Toggle the aria-expanded attribute
      btn.setAttribute("aria-expanded", !isExpanded);

      // Toggle the visibility of the menu
      if (isExpanded) {
        menu.classList.add("hidden");
      } else {
        menu.classList.remove("hidden");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<template>
	<!-- <div class="grid place-items-center bg-slate-400 min-w-[300px]"></div> -->

	<header class="fixed w-full z-50">
		
		<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
			<div class="flex  pl-[50px] pr-[50px] flex-wrap justify-between items-center mx-auto max-w-screen-xl">
				<a to="/" class="flex items-center">
					<img
    src="@/img/logo.jpg"
    class="mr-3 h-6 sm:h-9"
    alt="Flowbite Logo"
/></a>
				<div class="flex items-center lg:order-2">
					<button
					id="btn"
  data-collapse-toggle="btn"
  type="button"
  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  aria-controls="menu-2"
  aria-expanded="false"
  @click="toggleMenu"

					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
						<svg
							class="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="menu-2"
				>
					<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Bosh sahifa
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Ittifoq"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Yoshlar Ittifoqi
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Tuzilma"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Tuzilma
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Litsey"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Litsey Haqida
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Faxrimiz"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Bizning Faxrimiz
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Boglan"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Bog'lanish
							</RouterLink>
						</li>
						<li>
							<RouterLink
							@click.native="scrollToTop"	to="/Rahbariat"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Raxbariat
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>
