<template>
  <div class="flex flex-wrap items-start">
    <!-- Waterfall 1 -->
    <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr1" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:contentTittle>
          <p>{{ item.name }}</p>
        </template>
        <template v-slot:content>
          <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 2 -->
    <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr2" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:contentTittle>
          <p>{{ item.name }}</p>
        </template>
        <template v-slot:content>
          <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 3 -->
    <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr3" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:contentTittle>
          <p>{{ item.name }}</p>
        </template>
        <template v-slot:content>
          <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 4 -->
    <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <WorksCard v-for="item in projectsArr4" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:contentTittle>
          <p>{{ item.name }}</p>
        </template>
        <template v-slot:content>
          <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
        </template>
      </WorksCard>
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
      colStatus: 4,
    };
  },
  inject: ["allProjects"],
  methods: {
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
    // 重置瀑布流的 Col 資料
    resetCol() {
      this.projectsArr1 = [];
      this.projectsArr2 = [];
      this.projectsArr3 = [];
      this.projectsArr4 = [];
    },
    // 重新分配 4 列資料
    sliceArr4() {
      this.resetCol();
      this.allProjectsArr.forEach((e, index) => {
        switch (index % 4) {
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
    // 重新分配 3 列資料
    sliceArr3() {
      this.resetCol();
      this.allProjectsArr.forEach((e, index) => {
        switch (index % 3) {
          case 0:
            this.projectsArr1.push(e);
            break;
          case 1:
            this.projectsArr2.push(e);
            break;
          case 2:
            this.projectsArr3.push(e);
            break;
        }
      });
    },
    // 重新分配 2 列資料
    sliceArr2() {
      this.resetCol();
      this.allProjectsArr.forEach((e, index) => {
        switch (index % 2) {
          case 0:
            this.projectsArr1.push(e);
            break;
          case 1:
            this.projectsArr2.push(e);
            break;
        }
      });
    },
    // 重新分配 1 列資料
    sliceArr1() {
      this.resetCol();
      this.projectsArr1 = this.allProjectsArr;
    },
    setCol() {
      if (window.innerWidth >= 1536) {
        this.sliceArr4();
      } else if (window.innerWidth >= 1280) {
        this.sliceArr3();
      } else if (window.innerWidth >= 678) {
        this.sliceArr2();
      } else {
        this.sliceArr1();
      }
    },
  },
  mounted() {
    this.spliceArr();
    this.setCol();
    // 動態監聽視窗寬度
    window.addEventListener("resize", () => {
      this.setCol();
    });
  },
};
</script>
