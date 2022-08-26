<template>
  <div class="w-full h-contactArea xl:h-screen bg-secondary-light p-32">
    <h1 class="text-white">This is an Contact me page</h1>
    <form
      method="GET"
      action="mailto:alan829221@gmail.com"
      enctype="text/plain"
      class="text-white"
    >
      <div>Subject</div>
      <input type="text" name="subject" class="text-black" />

      <div>Message</div>
      <textarea name="body" class="text-black"></textarea>

      <br />
      <input
        type="submit"
        value="Send"
        class="bg-white text-black px-4 py-1 rounded-md hover:cursor-pointer"
      />
    </form>
  </div>
</template>
