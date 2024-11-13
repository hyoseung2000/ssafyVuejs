//customer 용 store file
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { selectAll, selectOne, update, remove, insert } from "@/api/customer";

export const useCustomerStore = defineStore("customer", () => {
  //1. state
  const customers = ref([]); //모든 고객 정보
  const customer = ref({}); //고객 한 사람 정보

  const getCustomer = computed(() => {
    return customer.value;
  });
  const getCustomers = computed(() => {
    return customers.value;
  });

  const allCustomers = () => {
    selectAll(
      ({ data }) => {
        customers.value = data;
      },
      (error) => {
        console.error("사용자 목록을 가져오는데 실패하였습니다.");
      }
    );
  };

  const oneCustomer = (num) => {
    selectOne(
      num,
      ({ data }) => {
        customer.value = data;
      },
      (error) => {
        console.error("사용자 정보를 가져오는데 실패하였습니다.");
      }
    );
  };

  const modifyCustomer = (newCustomer) => {
    update(
      newCustomer,
      (res) => {
        alert("주소 정보 수정!");
      },
      (error) => {
        console.error("회원 주소 정보를 수정하는데 실패하였습니다.");
      }
    );
  };

  const removeCustomer = (num) => {
    remove(
      num,
      (res) => {
        alert("사용자 정보 삭제");
      },
      (error) => {
        console.error("회원 정보를 삭제하는데 실패하였습니다.");
      }
    );
  };

  const addCustomer = (newCustomer) => {
    insert(
      newCustomer,
      (res) => {
        alert("사용자 생성");
      },
      (error) => {
        console.error("회원 정보를 생성하는데 실패하였습니다.");
      }
    );
  };

  return {
    customers,
    customer,
    getCustomer,
    getCustomers,
    allCustomers,
    oneCustomer,
    modifyCustomer,
    removeCustomer,
    addCustomer,
  };
});
