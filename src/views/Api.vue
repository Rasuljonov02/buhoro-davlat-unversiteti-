<template>
    <div>
      <h1>Api Component</h1>
      <p>This is the Api component.</p>
      <div class="example" v-if="!userData">
        <a-spin />
      </div>
      <div v-if="userData">
        <h2>User Data</h2>
        <p class=""> {{ userData.login }}</p>
        <p>{{ userData.name }}</p>
      </div>
    </div>
  </template>
  
  
  <script>
  // Axios kutubxonasini import qilamiz
  import axios from 'axios';
  import  {Spin}  from 'ant-design-vue';

  export default {
    data() {
      return {
        userData: null // Bo'shlaymiz, keyinroq API dan ma'lumotlarni saqlab qo'yish uchun
      };
    },
    mounted() {
      // Axios orqali API ga so'rov yuborish
      axios.get("https://api.github.com/users/Rasuljonov02")
        .then(response => {
          // Ma'lumotlarni saqlash
          this.userData = response.data;
          console.log(this.userData);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  };
  </script>
  
  <style>
  .example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
  </style>
  