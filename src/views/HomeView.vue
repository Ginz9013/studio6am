<template>
  <div class="flex flex-wrap items-start">
    <!-- Waterfall 1 -->
    <div class="w-1/2 md:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr1" :item="item" :key="item.name" />
    </div>
    <!-- Waterfall 2 -->
    <div class="w-1/2 md:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr2" :item="item" :key="item.name" />
    </div>
    <!-- Waterfall 3 -->
    <div class="w-1/2 md:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr3" :item="item" :key="item.name" />
    </div>
    <!-- Waterfall 4 -->
    <div class="w-1/2 md:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr4" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorksCard from "@/components/WorksCard.vue";

export default {
  name: "HomeView",
  components: {
    WorksCard,
  },
  data() {
    return {
      allProjectsArr: [],
      projectsArr1: [],
      projectsArr2: [],
      projectsArr3: [],
      projectsArr4: [],
    };
  },
  inject: ["allProjects"],
  methods: {
    setView() {
      this.spliceArr();
      this.setCol();
    },
    // ----- allProjectsArr 頁面資料庫 ------
    // 重組陣列 - 把所有分類的項目全部整合到一個陣列中
    spliceArr() {
      // 把 injects 進來的資料組成陣列，匯入 data 中的 allProjectsArr
      this.allProjects.design.forEach((e) => {
        this.allProjectsArr.push(e);
      });
      this.allProjects.web.forEach((e) => {
        this.allProjectsArr.push(e);
      });
    },
    // ----- Col 顯示資料 ------
    // 重置瀑布流的 Col 資料
    resetCol() {
      this.projectsArr1 = [];
      this.projectsArr2 = [];
      this.projectsArr3 = [];
      this.projectsArr4 = [];
    },
    // 分配資料到不同數量的 Col 中
    sliceArr(i) {
      this.allProjectsArr.forEach((e, index) => {
        switch (index % i) {
          case 0:
            this.projectsArr1.push(e);
            break;
          case 1:
            this.projectsArr2.push(e);
            break;
          case 2:
            this.projectsArr3.push(e);
            break;
          case 3:
            this.projectsArr4.push(e);
            break;
        }
      });
    },
    // 根據視窗寬度設置 Col 數量
    setCol() {
      this.resetCol();
      if (window.innerWidth >= 1536) {
        this.sliceArr(4);
      } else if (window.innerWidth >= 768) {
        this.sliceArr(3);
      } else {
        this.sliceArr(2);
      }
    },
  },
  mounted() {
    this.setView();
    // 動態監聽視窗寬度
    window.addEventListener("resize", () => {
      this.setCol();
    });
  },
};
</script>
