<template>
  <div class="hello">
    
    <h3 class="laura">Laura P></h3>
    <h1>HAS PURCHASED</h1>
    <h3>Black block heel boots with</h3>
    <h3>wooden sole</h3>
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
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-weight: bolder
    }
    
    h3 {
        font-weight: bold;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    
    .cost {
        font-size: 60pt;
        color: aquamarine;
    }
    
    .clock {
        margin-left: 10px;
    }
    
    .div_clock {
        margin-top: 50px;
    }
    
    .btn_div {
        margin-top: 20px;
    }
    
    .btn_accept {
        border: 0px;
        width: 176px;
        height: 50px;
        font-size: 20px;
        color: white;
        background: url('../assets/btnOverlayCopy3/btnOverlayCopy3.png');
    }
    
    .btn_decline {
        border: 0px;
        width: 176px;
        height: 50px;
        font-size: 20px;
        color: white;
        background: url('../assets/btnOverlayCopy2/btnOverlayCopy2.png');
    }
</style>