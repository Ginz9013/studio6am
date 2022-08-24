<template>
  <div>
    <button @click="showToggle">
      <slot name="cover"></slot>
    </button>
    <!-- modal -->
    <div
      class="w-screen h-screen fixed left-0 top-0 flex flex-col justify-center items-center drop-shadow-sm"
      v-if="show"
      @click="closeModal"
    >
      <!-- Modal 內容 -->
      <!-- Tittle -->
      <div class="w-3/4 flex justify-between items-center z-10 mb-2">
        <h2 class="text-3xl text-white">
          <slot name="contentTittle"></slot>
        </h2>
        <button type="button" class="p-4 relative" @click="showToggle">
          <div class="w-6 h-0.5 absolute right-0 rotate-45 bg-gray-300"></div>
          <div class="w-6 h-0.5 absolute right-0 rotate-m45 bg-gray-300"></div>
        </button>
      </div>
      <!-- 內容 -->
      <div
        class="w-3/4 h-5/6 bg-white z-10 flex flex-col flex-nowrap overflow-auto"
      >
        <slot name="content"></slot>
      </div>
      <!-- 黑色背景 -->
      <div
        class="w-screen h-screen bg-black opacity-80 absolute"
        ref="darkBackground"
      ></div>
    </div>
    <!-- modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
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
