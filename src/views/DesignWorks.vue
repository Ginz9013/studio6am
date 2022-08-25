<template>
  <div class="flex-col">
    <div class="w-full h-16 xl:h-32 bg-secondary flex items-end py-5 pl-4">
      <div class="flex text-xl text-white">
        <button type="button" class="mx-6 hover:text-gray-400">Graphic</button>
        <button type="button" class="mx-6 hover:text-gray-400">Logo</button>
        <button type="button" class="mx-6 hover:text-gray-400">Brand</button>
        <button type="button" class="mx-6 hover:text-gray-400">Web UI</button>
        <button type="button" class="mx-6 hover:text-gray-400">Others</button>
      </div>
    </div>
    <div class="flex flex-wrap items-start">
      <!-- Waterfall 1 -->
      <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
        <WorksCard v-for="item in ProjectsArr1" :key="item.name">
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
        <WorksCard v-for="item in ProjectsArr2" :key="item.name">
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
        <WorksCard v-for="item in ProjectsArr3" :key="item.name">
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
        <WorksCard v-for="item in ProjectsArr4" :key="item.name">
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
  </div>
</template>

<script>
// @ is an alias to /src
import WorksCard from "@/components/WorksCard.vue";

export default {
  name: "DesignWorks",
  components: {
    WorksCard,
  },
  data() {
    return {
      designProjectsArr: [],
      ProjectsArr1: [],
      ProjectsArr2: [],
      ProjectsArr3: [],
      ProjectsArr4: [],
      colStatus: 4,
    };
  },
  inject: ["designProjects"],
  methods: {
    // 預設 - 把 inject 進來的資料附值上去
    setArr() {
      this.designProjectsArr = this.designProjects;
    },
    // 重置瀑布流的 Col 資料
    resetCol() {
      this.ProjectsArr1 = [];
      this.ProjectsArr2 = [];
      this.ProjectsArr3 = [];
      this.ProjectsArr4 = [];
    },
    // 重新分配 4 列資料
    sliceArr4() {
      this.resetCol();
      this.designProjectsArr.forEach((e, index) => {
        switch (index % 4) {
          case 0:
            this.ProjectsArr1.push(e);
            break;
          case 1:
            this.ProjectsArr2.push(e);
            break;
          case 2:
            this.ProjectsArr3.push(e);
            break;
          case 3:
            this.ProjectsArr4.push(e);
            break;
        }
      });
    },
    // 重新分配 3 列資料
    sliceArr3() {
      this.resetCol();
      this.designProjectsArr.forEach((e, index) => {
        switch (index % 3) {
          case 0:
            this.ProjectsArr1.push(e);
            break;
          case 1:
            this.ProjectsArr2.push(e);
            break;
          case 2:
            this.ProjectsArr3.push(e);
            break;
        }
      });
    },
    // 重新分配 2 列資料
    sliceArr2() {
      this.resetCol();
      this.designProjectsArr.forEach((e, index) => {
        switch (index % 2) {
          case 0:
            this.ProjectsArr1.push(e);
            break;
          case 1:
            this.ProjectsArr2.push(e);
            break;
        }
      });
    },
    // 重新分配 1 列資料
    sliceArr1() {
      this.resetCol();
      this.ProjectsArr1 = this.designProjectsArr;
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
    this.setArr();
    this.setCol();
    // 動態監聽視窗寬度
    window.addEventListener("resize", () => {
      this.setCol();
    });
  },
};
</script>
