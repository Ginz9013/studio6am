<template>
  <div class="flex flex-wrap items-start">
    <!-- Waterfall -->
    <div
      v-for="(projectArr, index) in projectArrs"
      :key="index"
      class="w-1/2 md:w-1/3 2xl:w-1/4"
    >
      <WorksCard v-for="item in projectArr" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

import WorksCard from "@/components/WorksCard.vue";

import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";
import { ref } from "@vue/reactivity";

export default {
  name: "TestPage",
  components: {
    WorksCard,
  },
  setup() {
    const allProjects = ref([]);
    const projectArrs = ref([[], [], [], []]);

    // 接 Firebase 資料
    const fetchData = async () => {
      try {
        const projectsRef = collection(db, "projects");

        const data = await getDocs(projectsRef);

        data.docs.forEach((doc) => {
          allProjects.value.push({ ...doc.data(), id: doc.id });
        });

        setCol();
      } catch (error) {
        console.log("錯誤", error);
      }
    };

    fetchData();

    // ---資料處理---

    // 重置分配資料
    const resetColData = () => {
      projectArrs.value = [[], [], [], []];
    };

    // 分配資料到不同數量的 Col 中
    const sliceArr = (i) => {
      allProjects.value.forEach((e, index) => {
        switch (index % i) {
          case 0:
            projectArrs.value[0].push(e);
            break;
          case 1:
            projectArrs.value[1].push(e);
            break;
          case 2:
            projectArrs.value[2].push(e);
            break;
          case 3:
            projectArrs.value[3].push(e);
            break;
        }
      });
    };

    // 根據視窗寬度設置 Col 數量
    const setCol = () => {
      resetColData();
      if (window.innerWidth >= 1536) {
        sliceArr(4);
      } else if (window.innerWidth >= 768) {
        sliceArr(3);
      } else {
        sliceArr(2);
      }
    };

    onMounted(() => {
      // 動態監聽視窗寬度
      window.addEventListener("resize", () => {
        setCol();
      });
    });

    return {
      WorksCard,
      allProjects,
      projectArrs,
    };
  },
};
</script>
