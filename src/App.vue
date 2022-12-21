<template>
  <main class="xl:flex">
    <NavBar />
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
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
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
            skills: ["UI/UX Design", "Adobe XD"],
            infoUrl: {
              Website: "https://www.chingjear.com.tw/",
            },
            imgCover: require("./assets/Portfolio/JearLifeWeb/cover.png"),
            imgContent: [
              require("./assets/Portfolio/JearLifeWeb/cover.png"),
              require("./assets/Portfolio/JearLifeWeb/02.png"),
            ],
          },
          {
            name: "Studio 6.am",
            type: "frontEnd",
            skills: [
              "UI/UX Design",
              "Figma",
              "HTML/CSS/JavaScript",
              "Tailwind",
              "Vue",
              "Vue-cli",
              "EmailJS",
              "Git",
            ],
            infoUrl: {
              Website: "https://studio6am.netlify.app/",
              Github_Repo: "https://github.com/Ginz9013/studio6am",
            },
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
            skills: ["HTML/CSS", "Bootstrap5", "Gulp", "Git"],
            infoUrl: {
              Website: "https://studio6am.netlify.app/",
              Github_Repo: "https://github.com/Ginz9013/studio6am",
            },
            imgCover: require("./assets/Portfolio/Doyoga/cover.png"),
            imgContent: [require("./assets/Portfolio/Doyoga/02.png")],
          },
          {
            name: "Woworoom",
            type: "frontEnd",
            skills: [
              "HTML/CSS/JavaScript",
              "RESTfull API",
              "C3.js",
              "Tailwind",
              "gulp",
              "Git",
            ],
            infoUrl: {
              Website:
                "https://ginz9013.github.io/hexschool-jslivelecture-task9-1/",
              Backstage:
                "https://ginz9013.github.io/hexschool-jslivelecture-task9-1/backstage-items",
              Github_Repo:
                "https://github.com/Ginz9013/hexschool-jslivelecture-task9-1",
            },
            imgCover: require("./assets/Portfolio/Woworoom/cover.jpg"),
            imgContent: [require("./assets/Portfolio/Woworoom/01.jpg")],
          },
          {
            name: "Let's Travel!",
            type: "frontEnd",
            skills: [
              "HTML/CSS/JavaScript",
              "RESTfull API",
              "C3.js",
              "Tailwind",
              "gulp",
              "Git",
            ],
            infoUrl: {
              Website:
                "https://ginz9013.github.io/hexschool-jslivelecture-task5/",
              Github_Repo:
                "https://github.com/Ginz9013/hexschool-jslivelecture-task5",
            },
            imgCover: require("./assets/Portfolio/Let's_Travel/cover.jpg"),
            imgContent: [require("./assets/Portfolio/Let's_Travel/01.jpg")],
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
