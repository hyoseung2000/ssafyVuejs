<script setup>
import CustomerTop from "./components/CustomerTop.vue";
import CustomerList from "./components/CustomerList.vue";
</script>

<template>
  <div class="wrapper">
    <div>
      <CustomerTop>
        <!-- 부모 컴포넌트에서 자식 컴포넌트로 화면을 전달할때 사용하는 디렉티브 -->
        <template v-slot:title>
          <div>
            <h1>Vue Customer Management</h1>
          </div>
        </template>
        <template v-slot:other>
          <div>
            <h3>this message gogo</h3>
          </div>
        </template>
      </CustomerTop>
    </div>

    <main>
      <CustomerList>
        <div>
          <h4>CustomerList</h4>
        </div>
      </CustomerList>
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
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
}
</style>
