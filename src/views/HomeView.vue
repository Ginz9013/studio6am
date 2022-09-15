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
        <!-- Image 圖片區 -->
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
                class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6"
                >{{ info }}
              </a>
            </div>
          </div>
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
        <!-- Image 圖片區 -->
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
                class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6"
                >{{ info }}
              </a>
            </div>
          </div>
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
        <!-- Image 圖片區 -->
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
                class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6"
                >{{ info }}
              </a>
            </div>
          </div>
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
        <!-- Image 圖片區 -->
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
                class="bg-primary text-white font-bold rounded-full px-4 py-2 hover:cursor-pointer hover:bg-secondary-light ml-6"
                >{{ info }}
              </a>
            </div>
          </div>
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
      } else if (window.innerWidth >= 1280) {
        this.sliceArr(3);
      } else if (window.innerWidth >= 678) {
        this.sliceArr(2);
      } else {
        this.sliceArr(1);
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
