<template>
  <div class="min-w-[390px] bg-[#26282c] pb-10 pt-10  text-white mt-10 pl-[50px] pr-[50px]">
   <div class="flex items-center justify-between flex-wrap">
    <div class="flex flex-col gap-2 ">
      <h2 class="font-Arial text-[40px] font-extrabold">Karakul Lyceum</h2>
      <h3 class="font-Arial text-[28px] font-[500]">Buxoro davlat universiteti qoshidagi</h3>
      <p class="font-Arial text-[25px] font-[300]">Qorako`l akademik litseyi</p>
     <!-- 1 -->
      <div class="mt-[60px]">
        <!-- Image element -->
        <div class="flex flex-col gap-5 ">
          <p  class="flex items-center gap-4">
            <img class="w-[35px]"  src="@/img/local.png" alt="">
            Buxoro viloyati, Qorako`l tumani
          </p>
          <p class="flex items-center  gap-4">
        <img class="w-[35px]" src="@/img/call.png" alt="Call Image">
        +(998) 90-000-00-00
          </p>
          <p class="flex items-center  gap-4">
            <img  class="w-[35px]"  src="@/img/email.png" alt="">example.mail.ru
          </p>
        </div>
      </div>
      <!-- 2 -->
     
    </div>
     <div>
        <div >
	
				
				<div
					class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="mobile-menu-2"
				>
        <h1 class="text-[40px] font-Arial font-[300]">Havolalar</h1>
					<ul class="flex gap-6 flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
                <RouterLink
                  to="/"
                >
                  Bosh sahifa
                </RouterLink>
              </li>
						<li>
							<RouterLink
								to="/Ittifoq"
							>
								Yoshlar Ittifoqi
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/Tuzilma"
							>
								Tuzilma
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/Litsey"
							>
								Litsey Haqida
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/Faxrimiz"
							>
								Bizning Faxrimiz
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/Boglan"
							>
								Bog'lanish
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/Rahbariat"
							>
								Raxbariat
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
      </div>
   </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
	data() {
		return {};
	},
	components: {
		RouterLink,
	},
};
</script>

<style>

</style>
