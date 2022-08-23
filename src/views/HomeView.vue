<template>
  <div class="flex flex-wrap items-start" ref="area">
    <!-- Waterfall 1 -->
    <div class="2xl:w-1/4 w-1/3">
      <WorksCard v-for="item in ProjectsArr1" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:content>
          <h2 class="text-2xl text-white font-bold ml-16 mt-8">
            {{ item.name }}
          </h2>
          <div v-for="img in item.imgContent" :key="img">
            <img :src="img" alt="" />
          </div>
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 2 -->
    <div class="2xl:w-1/4 w-1/3">
      <WorksCard v-for="item in ProjectsArr2" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:content>
          <h2 class="text-2xl text-white font-bold ml-16 mt-8">
            {{ item.name }}
          </h2>
          <div v-for="img in item.imgContent" :key="img">
            <img :src="img" alt="" />
          </div>
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 3 -->
    <div class="2xl:w-1/4 w-1/3">
      <WorksCard v-for="item in ProjectsArr3" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:content>
          <h2 class="text-2xl text-white font-bold ml-16 mt-8">
            {{ item.name }}
          </h2>
          <div v-for="img in item.imgContent" :key="img">
            <img :src="img" alt="" />
          </div>
        </template>
      </WorksCard>
    </div>
    <!-- Waterfall 4 -->
    <div class="2xl:w-1/4 w-1/3">
      <WorksCard v-for="item in ProjectsArr4" :key="item.name">
        <template v-slot:cover>
          <img :src="item.imgCover" :alt="item.name" />
        </template>
        <template v-slot:content>
          <h2 class="text-2xl text-white font-bold ml-16 mt-8">
            {{ item.name }}
          </h2>
          <div v-for="img in item.imgContent" :key="img">
            <img :src="img" alt="" />
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
      ProjectsArr1: [],
      ProjectsArr2: [],
      ProjectsArr3: [],
      ProjectsArr4: [],
    };
  },
  inject: ["allProjects"],
  methods: {
    spliceArr: function () {
      // 把 injects 進來的資料組成陣列，匯入 data 中的 allProjectsArr
      this.allProjects.design.forEach((e) => {
        this.allProjectsArr.push(e);
      });
      this.allProjects.web.forEach((e) => {
        this.allProjectsArr.push(e);
      });
    },
    sliceArr: function () {
      this.allProjectsArr.forEach((e, index) => {
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
    // contentRwd: function () {
    //   console.log(this.$refs.content.clientWidth);
    // },
  },
  mounted() {
    this.spliceArr();
    this.sliceArr();
    console.log(this.$refs.area);
    this.$refs.area.addEventListener("onresize", () => {
      console.log(this.$refs.area.offsetWidth);
    });
  },
};
</script>
