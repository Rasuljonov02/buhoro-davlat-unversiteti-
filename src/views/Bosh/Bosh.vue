<template>
  <div
  class="pl-[50px] pr-[50px]">
 <h1>bosh Component</h1>
  <div class="min-w-[240px] flex items-center flex-col">
    <div class="min-min-w-[400px] p-3">
      <h1 class="font-Arial p-2 min-w-[200px] lg:text-[20px] lg:w-full font-[500px]">Bizning yo'nalishlar</h1>
    <h2 class="font-Arial   p-2 min-w-[150px] lg:text-[40px] lg:w-full font-bold ">Ushbu yo'nalishlarda maqola berishingiz mumkin</h2>
    </div>
    <!-- slider  -->
    <div class="swiffy-slider mt-5 flex items-center md:w-[800px]  w-[150px] sm:min-w-[500px] lg:w-[1500px] slider-item-show4 slider-item-snapstart slider-nav-round slider-nav-dark slider-nav-sm slider-nav-autoplay slider-nav-autopause slider-indicators-dark slider-indicators-highlight slider-indicators-sm slider-nav-animation-zoomout slider-nav-animation-fast" data-slider-nav-autoplay-interval="2000">
    <ul class="slider-container" style="">
        <li class="slide-visible">
            <div id="slide1"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/1.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Fizilogiya va Tilshunoslik </p>
            </div>
        </li>
        <li class="slide-visible">
            <div id="slide2"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/2.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px]  text-[30px]">Axborot-komunikatsiya va texnologiya</p>
            </div>
        </li>
        <li class="slide-visible">
            <div id="slide3"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/3.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Pedogokika va psixologiya</p>
            </div>
        </li>
        <li class="slide-visible">
            <div id="slide4"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/4.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Geologiya</p>
            </div>
        </li>
        <li>
            <div id="slide5"><img class="sm:w-[150px] lg-w-[400px]" src="@/img/slider/5.jpg" alt="">
            <p  class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Turizm va Iqtisoq</p>
            </div>
        </li>
        <li>
            <div id="slide6"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/6.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Jismoniy tarbiya, sport mashhulotlari nazaryasi va metodika</p>
            </div>
        </li>
        
        <li>
            <div id="slide8"><img class="sm:w-[150px] lg-w-[400px]" src="@/img/slider/8.jpg" alt="">
            <p  class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Tarix va Falsafa</p></div>
        </li>
        <li>
            <div id="slide9"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/9.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Matematika va Fizika va Mexanika</p>
            </div>
        </li>
        <li>
            <div id="slide9"><img class="sm:w-[150px] ln-w-[400px]" src="@/img/slider/10.jpg" alt="">
            <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Tibbiyot</p>
            </div>
        </li> 
        <li>
            <div id="slide9"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/12.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Texnika fanlari</p>
            </div>
        </li> <li>
            <div id="slide9"><img class="sm:w-[150px] lg:w-[400px]" src="@/img/slider/13.jpg" alt="">
              <p class="text-inherit sm:w-[100px] lg:min-w-[300px] text-[30px]">Tabiatshunoslik</p>
            </div>
        </li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <ul class="slider-indicators">
        <li class=""></li>
        <li class="active"></li>
        <li class=""></li>
        <li class=""></li>
        <li></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
    </ul>
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