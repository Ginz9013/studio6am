<template>
  <div
    class="w-full h-contactArea xl:h-screen bg-secondary-light pt-16 md:pt-28 xl:pt-48"
  >
    <div class="flex flex-col items-center">
      <h1 class="text-white text-3xl mb-6">Contact Me</h1>
      <form class="text-white w-5/6 md:w-2/3 xl:w-1/2">
        <!-- Name -->
        <div class="flex items-end justify-between">
          <label for="name" class="text-xl mb-1">Name</label>
          <p class="text-sm text-red-500 pb-1" v-if="!validateStatus.name">
            *Required
          </p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          class="text-black w-full text-lg mb-4 py-1 px-2 focus:outline-gray-200 rounded-sm"
          v-model="formData.name"
        />
        <div class="flex items-end justify-between">
          <label for="subject" class="text-xl mb-1">Subject</label>
          <p class="text-sm text-red-500 pb-1" v-if="!validateStatus.subject">
            *Required
          </p>
        </div>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="your subject"
          class="text-black w-full text-lg mb-4 py-1 px-2 focus:outline-gray-200 rounded-sm"
          v-model="formData.subject"
        />

        <div class="flex items-end justify-between">
          <label for="email" class="text-xl mb-1">Your Email</label>
          <p class="text-sm text-red-500 pb-1" v-if="!validateStatus.email">
            *Required
          </p>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@gmail.com"
          class="text-black w-full text-lg mb-4 py-1 px-2 focus:outline-gray-200 rounded-sm"
          v-model="formData.email"
        />

        <div class="flex items-end justify-between">
          <label for="message" class="text-xl mb-1">Message</label>
          <p class="text-sm text-red-500 pb-1" v-if="!validateStatus.message">
            *Required
          </p>
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="your message"
          class="text-black w-full h-48 text-lg mb-4 py-1 px-2 focus:outline-gray-200 rounded-sm"
          v-model="formData.message"
        ></textarea>

        <br />
        <input
          type="button"
          value="Check"
          class="bg-white text-black text-lg px-6 py-1 rounded-sm hover:cursor-pointer hover:bg-gray-200 duration-200"
          @click="submit()"
        />
      </form>
    </div>
  </div>
  <!-- Check Modal -->
  <div
    class="w-screen h-screen fixed left-0 top-0 flex flex-col justify-center items-center drop-shadow-sm z-20"
    v-if="checkModal"
  >
    <!-- 內容 -->
    <div
      class="flex flex-col items-center text-white bg-secondary-light p-8 z-10 rounded-sm"
    >
      <h3 class="text-2xl">Mail has been sent.</h3>
      <br />
      <input
        type="button"
        value="Close"
        class="bg-white text-black text-sm px-4 py-1 rounded-sm hover:cursor-pointer hover:bg-gray-200 duration-200"
        @click="checkToggle()"
      />
    </div>
    <!-- 黑色背景 -->
    <div
      class="w-screen h-screen bg-black opacity-80 absolute"
      ref="darkBackground"
    ></div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactMe",
  data() {
    return {
      checkModal: false,
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validateStatus: {
        name: true,
        email: true,
        subject: true,
        message: true,
      },
      // ps: "2B2CB25E3145E47685B037C5A021C3044CFA",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_vxs7ird",
          "template_maieqjb",
          this.formData,
          "HAiSjn1ZBNhxS8PbZ"
        )
        .then(() => {
          // 彈跳視窗，顯示已寄信
          this.checkToggle();
          // 重置表單內容
          this.resetFormData();
        });
    },
    validate() {
      // 驗證姓名
      if (!this.formData.name) {
        this.validateStatus.name = false;
      } else {
        this.validateStatus.name = true;
      }
      // 信箱驗證
      if (!this.formData.email) {
        this.validateStatus.email = false;
      } else {
        this.validateStatus.email = true;
      }
      // 驗證標題
      if (!this.formData.subject) {
        this.validateStatus.subject = false;
      } else {
        this.validateStatus.subject = true;
      }
      // 訊息驗證
      if (!this.formData.message) {
        this.validateStatus.message = false;
      } else {
        this.validateStatus.message = true;
      }
      // 確認全部都有填寫， return 總狀態出去
      if (
        this.validateStatus.name &
        this.validateStatus.email &
        this.validateStatus.subject &
        this.validateStatus.message
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkToggle() {
      this.checkModal = !this.checkModal;
    },
    resetFormData() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.subject = "";
      this.formData.message = "";
    },
    submit() {
      if (this.validate()) {
        this.sendEmail();
      }
    },
  },
};
</script>
