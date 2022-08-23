<template>
  <div>
    <button @click="showToggle">
      <slot name="cover"></slot>
    </button>
    <div
      class="w-screen h-screen fixed left-0 top-0 flex justify-center items-center drop-shadow-sm"
      v-if="show"
      @click="closeModal"
    >
      <div
        class="w-3/4 h-5/6 bg-secondary z-10 flex flex-col flex-nowrap overflow-auto"
        ref="modalContent"
      >
        <slot name="content"></slot>
      </div>
      <div class="w-screen h-screen bg-black opacity-80 absolute"></div>
    </div>
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
      if (e.target !== this.$refs.modalContent) {
        this.show = !this.show;
      }
    },
  },
};
</script>
