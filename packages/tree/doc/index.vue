<template>
  <div class="item">
    <div class="title">1</div>
    <Basic />
  </div>
  <div class="item">
    <div class="title">2</div>
    <Basic2 />
  </div>
  <div class="item">
    <div class="title">3</div>
    <Basic3 />
  </div>
  <div class="item">
    <div class="title">4</div>
    <Basic4 />
  </div>
  <div class="item">
    <div class="title">5</div>
    <Basic5 />
  </div>
  <div class="item">
    <div class="title">6</div>
    <Basic6 />
  </div>
  <div class="item">
    <div class="title">7</div>
    <Basic7 />
  </div>
  <div class="item">
    <div class="title">8</div>
    <Basic8 />
  </div>
  <div class="item">
    <div class="title">9</div>
    <Basic9 />
  </div>
  <div class="item">
    <div class="title">10</div>
    <Basic10 />
  </div>
</template>

<script>
import Basic from './basic.vue'
import Basic2 from './basic2.vue'
import Basic3 from './basic3.vue'
import Basic4 from './basic4.vue'
import Basic5 from './basic5.vue'
import Basic6 from './basic6.vue'
import Basic7 from './basic7.vue'
import Basic8 from './basic8.vue'
import Basic9 from './basic9.vue'
import Basic10 from './basic10.vue'
export default {
  components: {
    Basic,
    Basic2,
    Basic3,
    Basic4,
    Basic5,
    Basic6,
    Basic7,
    Basic8,
    Basic9,
    Basic10,
  },
}
</script>

<style>
.item {
    border: 2px solid #eee;
    padding: 10px;
    margin-bottom: 15px;
}
</style>
