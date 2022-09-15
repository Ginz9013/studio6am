<template>
  <div class="flex-col">
    <nav
      class="xl:w-contentBar h-16 xl:h-32 bg-secondary flex items-end py-5 pl-4 xl:fixed z-10"
    >
      <div class="flex text-xl text-white">
        <button
          type="button"
          @click="setView()"
          class="mx-3 sm:mx-6 hover:text-gray-400 duration-300"
        >
          All
        </button>
        <button
          type="button"
          @click="setButtonType('frontEnd')"
          class="mx-3 sm:mx-6 hover:text-gray-400 duration-300"
        >
          Front End
        </button>
        <button
          type="button"
          @click="setButtonType('webUI')"
          class="mx-3 sm:mx-6 hover:text-gray-400 duration-300"
        >
          Web UI
        </button>
      </div>
    </nav>
    <div class="flex flex-wrap items-start xl:mt-32">
      <!-- Waterfall 1 -->
      <div class="w-1/2 md:w-1/3 2xl:w-1/4">
        <WorksCard v-for="item in projectsArr1" :key="item.name">
          <!-- 小縮圖 -->
          <template v-slot:cover>
            <img :src="item.imgCover" :alt="item.name" />
          </template>
          <!-- 內容標題 -->
          <template v-slot:contentTittle>
            <p>{{ item.name }}</p>
          </template>
          <!-- 內容圖片 -->
          <template v-slot:content>
            <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
          </template>
          <!-- info 額外資料區 -->
          <template v-slot:info v-if="item.skills !== undefined">
            <div class="p-12">
              <!-- Skill List -->
              <h3 class="text-3xl font-bold mb-2">Skills</h3>
              <ul>
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                  class="font-medium mb-1"
                >
                  - {{ skill }}
                </li>
              </ul>
              <!-- Repo & Website -->
              <div class="flex justify-end">
                <a
                  v-for="(url, info) in item.infoUrl"
                  :key="info"
                  :href="url"
                  target="_black"
                  class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6 duration-200"
                  >{{ info }}
                </a>
              </div>
            </div>
          </template>
        </WorksCard>
      </div>
      <!-- Waterfall 2 -->
      <div class="w-1/2 md:w-1/3 2xl:w-1/4">
        <WorksCard v-for="item in projectsArr2" :key="item.name">
          <!-- 小縮圖 -->
          <template v-slot:cover>
            <img :src="item.imgCover" :alt="item.name" />
          </template>
          <!-- 內容標題 -->
          <template v-slot:contentTittle>
            <p>{{ item.name }}</p>
          </template>
          <!-- 內容圖片 -->
          <template v-slot:content>
            <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
          </template>
          <!-- info 額外資料區 -->
          <template v-slot:info v-if="item.skills !== undefined">
            <div class="p-12">
              <!-- Skill List -->
              <h3 class="text-3xl font-bold mb-2">Skills</h3>
              <ul>
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                  class="font-medium mb-1"
                >
                  - {{ skill }}
                </li>
              </ul>
              <!-- Repo & Website -->
              <div class="flex justify-end">
                <a
                  v-for="(url, info) in item.infoUrl"
                  :key="info"
                  :href="url"
                  target="_black"
                  class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6 duration-200"
                  >{{ info }}
                </a>
              </div>
            </div>
          </template>
        </WorksCard>
      </div>
      <!-- Waterfall 3 -->
      <div class="w-1/2 md:w-1/3 2xl:w-1/4">
        <WorksCard v-for="item in projectsArr3" :key="item.name">
          <!-- 小縮圖 -->
          <template v-slot:cover>
            <img :src="item.imgCover" :alt="item.name" />
          </template>
          <!-- 內容標題 -->
          <template v-slot:contentTittle>
            <p>{{ item.name }}</p>
          </template>
          <!-- 內容圖片 -->
          <template v-slot:content>
            <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
          </template>
          <!-- info 額外資料區 -->
          <template v-slot:info v-if="item.skills !== undefined">
            <div class="p-12">
              <!-- Skill List -->
              <h3 class="text-3xl font-bold mb-2">Skills</h3>
              <ul>
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                  class="font-medium mb-1"
                >
                  - {{ skill }}
                </li>
              </ul>
              <!-- Repo & Website -->
              <div class="flex justify-end">
                <a
                  v-for="(url, info) in item.infoUrl"
                  :key="info"
                  :href="url"
                  target="_black"
                  class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6 duration-200"
                  >{{ info }}
                </a>
              </div>
            </div>
          </template>
        </WorksCard>
      </div>
      <!-- Waterfall 4 -->
      <div class="w-1/2 md:w-1/3 2xl:w-1/4">
        <WorksCard v-for="item in projectsArr4" :key="item.name">
          <!-- 小縮圖 -->
          <template v-slot:cover>
            <img :src="item.imgCover" :alt="item.name" />
          </template>
          <!-- 內容標題 -->
          <template v-slot:contentTittle>
            <p>{{ item.name }}</p>
          </template>
          <!-- 內容圖片 -->
          <template v-slot:content>
            <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />
          </template>
          <!-- info 額外資料區 -->
          <template v-slot:info v-if="item.skills !== undefined">
            <div class="p-12">
              <!-- Skill List -->
              <h3 class="text-3xl font-bold mb-2">Skills</h3>
              <ul>
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                  class="font-medium mb-1"
                >
                  - {{ skill }}
                </li>
              </ul>
              <!-- Repo & Website -->
              <div class="flex justify-end">
                <a
                  v-for="(url, info) in item.infoUrl"
                  :key="info"
                  :href="url"
                  target="_black"
                  class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6 duration-200"
                  >{{ info }}
                </a>
              </div>
            </div>
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
  name: "WebWorks",
  components: {
    WorksCard,
  },
  data() {
    return {
      webProjectsArr: [],
      projectsArr1: [],
      projectsArr2: [],
      projectsArr3: [],
      projectsArr4: [],
    };
  },
  inject: ["webProjects"],
  methods: {
    // 畫面重置
    setView() {
      this.setArr();
      this.setCol();
    },
    // ----- webProjectsArr 頁面資料庫 ------
    // 預設 - 把 inject 進來的資料附值上去
    setArr() {
      this.webProjectsArr = this.webProjects;
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
      this.webProjectsArr.forEach((e, index) => {
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
    // ----- 按鈕功能 -----
    setButtonType(type) {
      // 重新把 inject 進來的資料附值上去
      this.setArr();
      // 建立一個暫存陣列
      let typeArr = [];
      // 跑回圈，篩選符合 Type 的物件，並附值到暫存陣列上
      this.webProjectsArr.forEach((e) => {
        if (type == e.type) {
          typeArr.push(e);
        }
      });
      // 把暫存陣列附值到要顯示的資料陣列 webProjectsArr 上
      this.webProjectsArr = typeArr;
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
