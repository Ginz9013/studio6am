<template>
  <nav
    class="xl:w-sideBar xl:h-screen bg-black flex flex-col items-center xl:items-start justify-center px-4 sm:px-24 md:px-48 lg:px-60 xl:px-12 2xl:px-14 pt-8 pb-4 xl:fixed"
  >
    <router-link to="/">
      <img
        src="../assets/Logo_whtie_nobg@2x.png"
        class="mb-8 h-16 xl:w-full hover:opacity-50 duration-700"
        alt="6.am Studio"
      />
    </router-link>
    <ul
      class="text-lg text-white flex xl:inline w-full justify-between items-center"
    >
      <li class="xl:mb-2 mx-2 msm:w-1/4">
        <router-link to="/DesignWorks" class="hover:font-bold duration-300">
          Design Works
        </router-link>
      </li>
      <li class="xl:mb-2 mx-2 msm:w-1/4">
        <router-link to="/WebWorks" class="hover:font-bold duration-300"
          >Web Works
        </router-link>
      </li>
      <li class="xl:mb-2 mx-2 msm:w-1/4">
        <router-link to="/ContactMe" class="hover:font-bold duration-300"
          >Contact Me
        </router-link>
      </li>
      <li class="xl:mb-2 mx-2 msm:w-1/4">
        <router-link to="/TestPage" class="hover:font-bold duration-300"
          >Test
        </router-link>
      </li>
    </ul>
  </nav>
</template>
