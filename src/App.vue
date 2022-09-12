<template>
  <main class="xl:flex">
    <nav
      class="xl:w-sideBar xl:h-screen bg-black flex flex-col items-center xl:items-start justify-center px-4 sm:px-24 md:px-48 lg:px-60 xl:px-12 2xl:px-14 pt-8 pb-4 xl:fixed"
    >
      <router-link to="/">
        <img
          src="./assets/Logo_whtie_nobg@2x.png"
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
.router-link-active {
  font-weight: bold;
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
            imgCover: require("./assets/Portfolio/JearLifeLogo/cover.png"),
            imgContent: [
              require("./assets/Portfolio/JearLifeLogo/01.png"),
              require("./assets/Portfolio/JearLifeLogo/02.png"),
              require("./assets/Portfolio/JearLifeLogo/03.png"),
              require("./assets/Portfolio/JearLifeLogo/04.png"),
              require("./assets/Portfolio/JearLifeLogo/05.png"),
              require("./assets/Portfolio/JearLifeLogo/06.png"),
              require("./assets/Portfolio/JearLifeLogo/07.png"),
            ],
          },
          {
            name: "Catalog - SCION",
            type: "others",
            imgCover: require("./assets/Portfolio/ScionCatalog/cover.png"),
            imgContent: [
              require("./assets/Portfolio/ScionCatalog/cover.png"),
              require("./assets/Portfolio/ScionCatalog/02.png"),
              require("./assets/Portfolio/ScionCatalog/03.png"),
              require("./assets/Portfolio/ScionCatalog/04.png"),
            ],
          },
          {
            name: "Brand - Studio 6.am",
            type: "brand",
            imgCover: require("./assets/Portfolio/Studio-6am/cover.png"),
            imgContent: [require("./assets/Portfolio/Studio-6am/cover.png")],
          },
          {
            name: "Brand - HowTrue 好初手作烘焙",
            type: "brand",
            imgCover: require("./assets/Portfolio/HowTrue/cover.png"),
            imgContent: [
              require("./assets/Portfolio/HowTrue/01.png"),
              require("./assets/Portfolio/HowTrue/02.jpg"),
              require("./assets/Portfolio/HowTrue/03.jpg"),
              require("./assets/Portfolio/HowTrue/04.jpg"),
              require("./assets/Portfolio/HowTrue/05.jpg"),
              require("./assets/Portfolio/HowTrue/06.jpg"),
              require("./assets/Portfolio/HowTrue/07.jpg"),
              require("./assets/Portfolio/HowTrue/08.jpg"),
              require("./assets/Portfolio/HowTrue/09.jpg"),
            ],
          },
          {
            name: "Brand - SportsNet",
            type: "brand",
            imgCover: require("./assets/Portfolio/SportsNet/cover.png"),
            imgContent: [
              require("./assets/Portfolio/SportsNet/01.png"),
              require("./assets/Portfolio/SportsNet/02.png"),
              require("./assets/Portfolio/SportsNet/03.png"),
              require("./assets/Portfolio/SportsNet/04.png"),
              require("./assets/Portfolio/SportsNet/05.png"),
              require("./assets/Portfolio/SportsNet/06.png"),
              require("./assets/Portfolio/SportsNet/07.png"),
              require("./assets/Portfolio/SportsNet/08.png"),
            ],
          },
          {
            name: "Bedding Display",
            type: "others",
            imgCover: require("./assets/Portfolio/Bedding_Display/cover.jpg"),
            imgContent: [
              require("./assets/Portfolio/Bedding_Display/cover.jpg"),
              require("./assets/Portfolio/Bedding_Display/01.jpg"),
              require("./assets/Portfolio/Bedding_Display/02.jpg"),
              require("./assets/Portfolio/Bedding_Display/03.jpg"),
              require("./assets/Portfolio/Bedding_Display/04.jpg"),
              require("./assets/Portfolio/Bedding_Display/05.jpg"),
            ],
          },
          {
            name: "Business Card - Chen",
            type: "brand",
            imgCover: require("./assets/Portfolio/BusinessCard_Raccoon/cover.jpg"),
            imgContent: [
              require("./assets/Portfolio/BusinessCard_Raccoon/01.png"),
              require("./assets/Portfolio/BusinessCard_Raccoon/02.jpg"),
            ],
          },
          {
            name: "Concenpt - Yamato Soul",
            type: "others",
            imgCover: require("./assets/Portfolio/YamatoSoul/cover.jpg"),
            imgContent: [
              require("./assets/Portfolio/YamatoSoul/YamatoSoul.jpg"),
            ],
          },
          {
            name: "Concenpt - Polymerization",
            type: "others",
            imgCover: require("./assets/Portfolio/polymerization/cover.jpg"),
            imgContent: [require("./assets/Portfolio/polymerization/01.jpg")],
          },
          {
            name: "Concenpt - Exist",
            type: "others",
            imgCover: require("./assets/Portfolio/Exist/cover.png"),
            imgContent: [require("./assets/Portfolio/Exist/01.jpg")],
          },
          {
            name: "Photography",
            type: "others",
            imgCover: require("./assets/Portfolio/Photography/01.jpg"),
            imgContent: [
              require("./assets/Portfolio/Photography/01.jpg"),
              require("./assets/Portfolio/Photography/02.jpg"),
              require("./assets/Portfolio/Photography/03.jpg"),
              require("./assets/Portfolio/Photography/04.jpg"),
            ],
          },
        ],
        web: [
          {
            name: "Web UI - Jear Life",
            type: "webUI",
            imgCover: require("./assets/Portfolio/JearLifeWeb/cover.png"),
            imgContent: [
              require("./assets/Portfolio/JearLifeWeb/cover.png"),
              require("./assets/Portfolio/JearLifeWeb/02.png"),
            ],
          },
          {
            name: "Studio 6.am",
            type: "frontEnd",
            imgCover: require("./assets/Portfolio/Studio-6am/cover.png"),
            imgContent: [
              require("./assets/Portfolio/Studio-6am/cover.png"),
              require("./assets/Portfolio/Studio-6am/02.png"),
              require("./assets/Portfolio/Studio-6am/03.png"),
              require("./assets/Portfolio/Studio-6am/04.png"),
              require("./assets/Portfolio/Studio-6am/05.png"),
            ],
          },
          {
            name: "Doyoga",
            type: "frontEnd",
            imgCover: require("./assets/Portfolio/Doyoga/cover.png"),
            imgContent: [require("./assets/Portfolio/Doyoga/02.png")],
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
