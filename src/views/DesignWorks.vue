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
      <!-- Waterfall -->
      <div
        v-for="(projectsArr, index) in projectsArrs"
        :key="index"
        class="w-1/2 md:w-1/3 2xl:w-1/4"
      >
        <WorksCard v-for="item in projectsArr" :item="item" :key="item.name" />
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
      projectsArrs: [[], [], [], []],
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
      this.projectsArrs = [[], [], [], []];
    },
    // 分配資料到不同數量的 Col 中
    sliceArr(i) {
      this.designProjectsArr.forEach((e, index) => {
        switch (index % i) {
          case 0:
            this.projectsArrs[0].push(e);
            break;
          case 1:
            this.projectsArrs[1].push(e);
            break;
          case 2:
            this.projectsArrs[2].push(e);
            break;
          case 3:
            this.projectsArrs[3].push(e);
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
