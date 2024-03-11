<template>
  <div class="bg-[#26282c] pb-10 pt-10 pl-[250px] pr-[250px] text-white mt-10 lg:pl-[50px] lg:pr-[50px] sm:pl-[10px] sm:pr-[5px]"
>
    <div class="flex items-center justify-between flex-wrap">
      <div class="flex flex-col gap-2 ">
        <h2 class="font-Arial text-[40px] font-extrabold">Karakul Lyceum</h2>
        <h3 class="font-Arial text-[28px] font-[500]">Buxoro davlat universiteti qoshidagi</h3>
        <p class="font-Arial text-[25px] font-[300]">Qorako`l akademik litseyi</p>
        <!-- 1 -->
        <div class="mt-[60px]">
          <!-- Image element -->
          <div class="flex flex-col gap-5">
            <p class="flex items-center gap-4">
              <img class="w-[35px]" src="@/img/local.png" alt="">
              Buxoro viloyati, Qorako`l tumani
            </p>
            <p class="flex items-center gap-4">
              <img class="w-[35px]" src="@/img/call.png" alt="Call Image">
              +(998) 90-000-00-00
            </p>
            <p class="flex items-center gap-4">
              <img class="w-[35px]" src="@/img/email.png" alt="">example.mail.ru
            </p>
          </div>
        </div>
        <!-- 2 -->
        <div>
          <div>
            <h1 class="text-[40px] font-Arial font-[300]">Havolalar</h1>
            <ul class="flex gap-6 flex-col mt-4 font-medium lg:flex-row lg:space-x-8">
              <li>
                <RouterLink to="/">Bosh sahifa</RouterLink>
              </li>
              <li>
                <RouterLink to="/Ittifoq">Yoshlar Ittifoqi</RouterLink>
              </li>
              <li>
                <RouterLink to="/Tuzilma">Tuzilma</RouterLink>
              </li>
              <li>
                <RouterLink to="/Litsey">Litsey Haqida</RouterLink>
              </li>
              <li>
                <RouterLink to="/Faxrimiz">Bizning Faxrimiz</RouterLink>
              </li>
              <li>
                <RouterLink to="/Boglan">Bog'lanish</RouterLink>
              </li>
              <li>
                <RouterLink to="/Rahbariat">Raxbariat</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 class="font-Arial text-[35px] font-extrabold">Partners</h1>
          <img src="@/img/university.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<style>

</style>
