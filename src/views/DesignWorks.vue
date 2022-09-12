<template>
  <div class="flex-col">
    <nav
      class="xl:w-contentBar h-16 xl:h-32 bg-secondary flex items-end py-5 pl-4 xl:fixed z-10"
    >
      <div class="flex text-xl text-white">
        <button
          type="button"
          @click="setView()"
          class="mx-3 sm:mx-6 hover:cursor-pointer hover:text-gray-400 duration-300"
        >
          All
        </button>
        <button
          type="button"
          @click="setButtonType('brand')"
          class="mx-3 sm:mx-6 hover:cursor-pointer hover:text-gray-400 duration-300"
        >
          Brand
        </button>
        <button
          type="button"
          @click="setButtonType('package')"
          class="mx-3 sm:mx-6 hover:cursor-pointer hover:text-gray-400 duration-300"
        >
          Package
        </button>
        <button
          type="button"
          @click="setButtonType('others')"
          class="mx-3 sm:mx-6 hover:cursor-pointer active:font-bold hover:text-gray-400 duration-300"
        >
          Others
        </button>
      </div>
    </nav>
    <div class="flex flex-wrap items-start xl:mt-32">
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
      projectsArr1: [],
      projectsArr2: [],
      projectsArr3: [],
      projectsArr4: [],
    };
  },
  inject: ["designProjects"],
  methods: {
    // 畫面重置
    setView() {
      this.setArr();
      this.setCol();
    },
    // ----- designProjectsArr 頁面資料庫 ------
    // 預設 - 把 inject 進來的資料附值上去
    setArr() {
      this.designProjectsArr = this.designProjects;
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
      this.designProjectsArr.forEach((e, index) => {
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
      } else if (window.innerWidth >= 1280) {
        this.sliceArr(3);
      } else if (window.innerWidth >= 678) {
        this.sliceArr(2);
      } else {
        this.sliceArr(1);
      }
    },
    // ----- 按鈕功能 -----
    setButtonType(type) {
      // 重新把 inject 進來的資料附值上去
      this.setArr();
      // 建立一個暫存陣列
      let typeArr = [];
      // 跑回圈，篩選符合 Type 的物件，並附值到暫存陣列上
      this.designProjectsArr.forEach((e) => {
        if (type == e.type) {
          typeArr.push(e);
        }
      });
      // 把暫存陣列附值到要顯示的資料陣列 designProjectsArr 上
      this.designProjectsArr = typeArr;
      // 重新清空 Col 陣列跟設置 Col 陣列
      this.resetCol();
      this.setCol();
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
