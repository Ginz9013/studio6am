<template>
  <main class="xl:flex">
    <nav
      class="w-sideBar h-screen bg-black flex flex-col items-start justify-center px-14 fixed"
    >
      <router-link to="/">
        <img
          src="./assets/Logo_whtie_nobg@2x.png"
          class="mb-8"
          alt="6.am Studio"
        />
      </router-link>
      <ul class="text-lg text-white">
        <li>
          <router-link to="/" class="hover:font-bold">Design Works</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:font-bold"
            >Web Works
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view class="ml-content" />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: inline !important;
}

::-webkit-scrollbar {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      projects: {
        design: [
          {
            name: "LOGO - Jear Life",
            imgCover: require("./assets/JearLifeLogo/07.png"),
            imgContent: [
              require("./assets/JearLifeLogo/01.png"),
              require("./assets/JearLifeLogo/02.png"),
              require("./assets/JearLifeLogo/03.png"),
              require("./assets/JearLifeLogo/04.png"),
              require("./assets/JearLifeLogo/05.png"),
              require("./assets/JearLifeLogo/06.png"),
              require("./assets/JearLifeLogo/07.png"),
            ],
          },
          {
            name: "Catalog - Scion",
            imgCover: require("./assets/ScionCatalog/cover.png"),
            imgContent: [
              require("./assets/ScionCatalog/cover.png"),
              require("./assets/ScionCatalog/02.png"),
              require("./assets/ScionCatalog/03.png"),
              require("./assets/ScionCatalog/04.png"),
            ],
          },
          {
            name: "Web UI - Jear Life",
            imgCover: require("./assets/JearLifeWeb/cover.png"),
            imgContent: [
              require("./assets/JearLifeWeb/cover.png"),
              require("./assets/JearLifeWeb/02.png"),
            ],
          },
          {
            name: "CI - HowTrue 好初手作烘焙",
            imgCover: require("./assets/HowTrue/cover.png"),
            imgContent: [require("./assets/HowTrue/cover.png")],
          },
          {
            name: "LOGO - SportsNet",
            imgCover: require("./assets/SportsNet/cover.png"),
            imgContent: [
              require("./assets/SportsNet/cover.png"),
              require("./assets/SportsNet/02.png"),
              require("./assets/SportsNet/03.png"),
              require("./assets/SportsNet/04.png"),
              require("./assets/SportsNet/05.png"),
              require("./assets/SportsNet/06.png"),
              require("./assets/SportsNet/07.png"),
              require("./assets/SportsNet/08.png"),
            ],
          },
        ],
        web: [
          {
            name: "Studio 6.am",
            imgCover: require("./assets/Studio-6am/cover.png"),
            imgContent: [require("./assets/Studio-6am/cover.png")],
          },
        ],
      },
    };
  },
  provide() {
    return {
      allProjects: this.projects,
    };
  },
};
</script>
