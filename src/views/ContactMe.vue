<template>
  <div class="w-full h-contactArea xl:h-screen bg-secondary-light p-32">
    <h1 class="text-white">This is an Contact me page</h1>
    <form class="text-white">
      <div>Subject</div>
      <input type="text" name="subject" class="text-black" ref="subject" />

      <div>Your Email</div>
      <input type="text" name="email" class="text-black" ref="email" />

      <div>Message</div>
      <textarea name="body" class="text-black" ref="message"></textarea>

      <br />
      <input
        type="button"
        value="Send"
        class="bg-white text-black px-4 py-1 rounded-md hover:cursor-pointer"
        @click="sendEmail()"
      />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      ps: "2B2CB25E3145E47685B037C5A021C3044CFA",
    };
  },
  methods: {
    sendEmail() {
      const mailParams = {
        form_name: this.$refs.subject.value,
        email_id: this.$refs.email.value,
        message: this.$refs.message.value,
      };
      console.log(mailParams);
      emailjs
        .send(
          "service_vxs7ird",
          "template_maieqjb",
          mailParams,
          "HAiSjn1ZBNhxS8PbZ"
        )
        .then((res) => {
          alert("200 OK" + res.status);
        });
    },
  },
  mounted() {
    console.log(this.Email);
  },
};
</script>
