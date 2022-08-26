<template>
  <main class="xl:flex">
    <nav
      class="xl:w-sideBar xl:h-screen bg-black flex flex-col items-center xl:items-start justify-center px-4 md:px-12 2xl:px-14 pt-8 pb-4 xl:fixed"
    >
      <router-link to="/">
        <img
          src="./assets/Logo_whtie_nobg@2x.png"
          class="mb-8 h-16 xl:w-full"
          alt="6.am Studio"
        />
      </router-link>
      <ul
        class="text-lg text-white flex xl:inline w-full justify-between items-center"
      >
        <li class="mx-2 msm:w-1/4">
          <router-link to="/DesignWorks" class="hover:font-bold">
            Design Works
          </router-link>
        </li>
        <li class="mx-2 msm:w-1/4">
          <router-link to="/WebWorks" class="hover:font-bold"
            >Web Works
          </router-link>
        </li>
        <li class="mx-2 msm:w-1/4">
          <router-link to="/about" class="hover:font-bold">About</router-link>
        </li>
        <li class="mx-2 msm:w-1/4">
          <router-link to="/ContactMe" class="hover:font-bold"
            >Contact Me
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view class="xl:ml-content" />
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
            name: "Brand - Jear Life",
            type: "brand",
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
            type: "others",
            imgCover: require("./assets/ScionCatalog/cover.png"),
            imgContent: [
              require("./assets/ScionCatalog/cover.png"),
              require("./assets/ScionCatalog/02.png"),
              require("./assets/ScionCatalog/03.png"),
              require("./assets/ScionCatalog/04.png"),
            ],
          },
          {
            name: "Brand - Studio 6.am",
            type: "brand",
            imgCover: require("./assets/Studio-6am/cover.png"),
            imgContent: [require("./assets/Studio-6am/cover.png")],
          },
          {
            name: "Brand - HowTrue 好初手作烘焙",
            type: "brand",
            imgCover: require("./assets/HowTrue/cover.png"),
            imgContent: [require("./assets/HowTrue/cover.png")],
          },
          {
            name: "Brand - SportsNet",
            type: "brand",
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
          {
            name: "Concenpt - Yamato Soul",
            type: "others",
            imgCover: require("./assets/ConceptWorks/yamato.png"),
            imgContent: [require("./assets/ConceptWorks/yamato.png")],
          },
          {
            name: "Concenpt - Polymerization",
            type: "others",
            imgCover: require("./assets/ConceptWorks/polymerization.png"),
            imgContent: [require("./assets/ConceptWorks/polymerization.png")],
          },
        ],
        web: [
          {
            name: "Web UI - Jear Life",
            type: "webUI",
            imgCover: require("./assets/JearLifeWeb/cover.png"),
            imgContent: [
              require("./assets/JearLifeWeb/cover.png"),
              require("./assets/JearLifeWeb/02.png"),
            ],
          },
          {
            name: "Studio 6.am",
            type: "frontEnd",
            imgCover: require("./assets/Studio-6am/cover.png"),
            imgContent: [
              require("./assets/Studio-6am/cover.png"),
              require("./assets/Studio-6am/02.png"),
              require("./assets/Studio-6am/03.png"),
              require("./assets/Studio-6am/04.png"),
              require("./assets/Studio-6am/05.png"),
            ],
          },
          {
            name: "Doyoga",
            type: "frontEnd",
            imgCover: require("./assets/Doyoga/cover.png"),
            imgContent: [require("./assets/Doyoga/02.png")],
          },
        ],
      },
    };
  },
  provide() {
    return {
      allProjects: this.projects,
      designProjects: this.projects.design,
      webProjects: this.projects.web,
    };
  },
};
</script>
