//store: 중앙 저장소
import { ref, computed } from "vue";
import { defineStore } from "pinia";

//defineStore(): pinia store 정의
//첫번째 파라미터: store name(id), 중복 불가
//두번째 파라미터: store options, store setup function
const useTestStore = defineStore("test", () => {
  //1. state(data)
  const count = ref(10);

  //2. getters(computed)
  const getCount = computed(() => count.value);
  const getDoubleCount = computed(() => count.value * 2);

  //3. actions(function)
  function upCount() {
    count.value++;
  }

  return { count, getCount, getDoubleCount, upCount };
});

export default useTestStore;
