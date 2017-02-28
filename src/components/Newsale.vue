<template>
  <div class="hello">
    <div class="laura">
        <h3 class="laura_p">Laura P</h3><span><img src="../assets/7Px/7Px@2x.png"></span>
    </div>
    <h1>HAS PURCHASED</h1>
    <h3 class="wooden">Black block heel boots with</h3>
    <h3 class="wooden">wooden sole</h3>
    <span class="cost">50 &euro;</span>
    <h3><b>Earnings: 35,55&euro;</b></h3>
    
    <div class="div_clock">
      <img src="../assets/clockIcon/clockIcon.png"><span class="clock">You have <b>24 hours</b> to approve this sale</span>
    </div>
    
    <div class="btn_div">
      <button class="btn_accept">Accept</button>
      <button class="btn_decline">Decline</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'newsale',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>