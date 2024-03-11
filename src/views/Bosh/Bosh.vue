<template>
  <div
  class="pl-[50px] pr-[50px]">
 <h1>bosh Component</h1>
  <div class="min-w-[400px] flex items-center flex-col">
    <div class="min-w-[400px] ">
      <h1 class="font-Arial text-[28px] lg:text-[18px] font-[500]">Bizning yo'nalishlar</h1>
    <h2 class="font-Arial lg:text-[25px] text-[40px] font-bold ">Ushbu yo'nalishlarda maqola berishingiz mumkin</h2>
    </div>
    <!-- slider  -->
    <div  class="swiffy-slider mt-5 grid place-items-center min-w-[300px]  slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
      <div class="swiffy-slider slider-item-show4 slider-item-snapstart slider-nav-round slider-nav-dark slider-nav-sm slider-nav-autoplay slider-nav-autopause slider-indicators-dark slider-indicators-highlight slider-indicators-sm slider-nav-animation-zoomout slider-nav-animation-fast" data-slider-nav-autoplay-interval="2000">    <ul class="slider-container ">
        <li>
            <div id="slide1"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide2"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide3"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide4"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide5"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide6"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide7"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide8"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
        <li>
            <div id="slide9"><img class="w-[150px]" src="@/img/call.png" alt=""> </div>
        </li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <ul class="slider-indicators">
        <li class=""></li>
        <li class=""></li>
        <li></li>
        <li class=""></li>
        <li></li>
        <li class=""></li>
        <li></li>
        <li class="active"></li>
        <li class=""></li>
    </ul>
</div>
</div>
  </div>
</div>
 
</template>


<script>

export default {
  mounted() {
    
  },
};

</script>

<style>

</style>