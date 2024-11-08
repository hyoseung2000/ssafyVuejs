<script setup>
import EastView from "./components/EastView.vue";
import WestView from "./components/WestView.vue";
import SouthView from "./components/SouthView.vue";
import { ref } from "vue";

const code = ref("be good...");
const user = {
  num: 123,
  name: "james lee",
  address: "london",
};

function parentMoney(params) {
  alert(params);
}

function parentWater(params) {
  alert(params);
}
</script>

<template>
  <div>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />
    </header>

    <main>
      <EastView pointx="100" pointy="300" />
      <WestView :codeMsg="code" />
      <SouthView
        :user="user"
        @giveWater="parentWater"
        @giveMoney="parentMoney"
      />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
