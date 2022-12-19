<template>
  <div>
    <!-- Cover Button -->
    <button @click="showToggle" class="bg-black">
      <div class="hover:opacity-50 duration-300">
        <!-- 小縮圖 -->
        <img :src="item.imgCover" :alt="item.name" />
      </div>
    </button>
    <!-- modal -->
    <transition>
      <div
        class="w-screen h-screen fixed left-0 top-0 flex flex-col justify-center items-center drop-shadow-sm z-20"
        v-if="show"
        @click="closeModal"
      >
        <!-- Modal 內容 -->
        <!-- Tittle -->
        <div class="w-3/4 flex justify-between items-center z-10 mb-2">
          <h2 class="text-3xl text-white">
            <!-- 內容標題 -->
            <p>{{ item.name }}</p>
          </h2>
          <!-- Colse Button -->
          <button
            type="button"
            class="p-3 relative hover:rotate-90 hover:duration-700"
            @click="showToggle"
          >
            <div
              class="w-6 h-1 rounded absolute right-0 rotate-45 bg-gray-300"
            ></div>
            <div
              class="w-6 h-1 rounded absolute right-0 rotate-m45 bg-gray-300"
            ></div>
          </button>
        </div>
        <!-- 內容 -->
        <div
          class="w-3/4 h-5/6 bg-white z-10 flex flex-col flex-nowrap overflow-auto"
        >
          <!-- image -->
          <!-- 內容圖片 -->
          <img v-for="img in item.imgContent" :key="img" :src="img" alt="" />

          <!-- info 額外資料區 -->
          <div v-if="item.skills !== undefined">
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
          </div>
        </div>
        <!-- 黑色背景 -->
        <div
          class="w-screen h-screen bg-black opacity-80 absolute"
          ref="darkBackground"
        ></div>
      </div>
    </transition>
    <!-- modal -->
  </div>
</template>
<style>
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-enter-to {
  opacity: 1;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: ["item"],
  methods: {
    showToggle: function () {
      this.show = !this.show;
    },
    closeModal: function (e) {
      if (e.target === this.$refs.darkBackground) {
        this.show = !this.show;
      }
    },
  },
};
</script>
