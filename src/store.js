import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employers: [
      {
        id: 0,
        title: "User Experience Designer",
        name: "Jenzabar, Inc.",
        startDate: 2015,
        endDate: "Now",
        projects: [
          {
            id: 0,
            name: "Find Your Calling",
            description:
              "Online quiz which identifies the users career paths and connects them with relevant educational instutions.",
            tasks: [
              {
                description:
                  "Implemented Pattern Lab to deliver the new front end for Find Your Calling."
              }
            ],
            path: "fyc"
          },
          {
            id: 1,
            name: "Jenzabar ICS 9",
            description:
              "Online web portal which provides access to CX customer data through the Internet.",
            tasks: [
              {
                description:
                  "Refactored ASP.Net ASCX templates for the online portal to utilize Bootstrap/Sass for responsive layouts.",
                skills: [
                  "UI",
                  "Bootstrap",
                  "Sass",
                  "ASCX",
                  "Prototyping",
                  "XD"
                ],
                deliverables: [
                  {
                    id: 0,
                    title: "Jenzabar ICS Design System",
                    img: "img/JICS-Design-System_Home.png",
                    description:
                      "A new design system was created for Jenzabar ICS portlets completely from scratch using the application to display ASP.Net content."
                  },
                  {
                    id: 1,
                    title: "Design System Components",
                    img: "img/JICS-Design-System_Tables.png",
                    description:
                      "Code samples were provided alongside functional examples of the Components which are constructed from ASP.Net Web Controls, and include the necessary Bootstrap to assist the developers."
                  }
                ]
              }
            ],
            path: "jics9"
          },
          {
            id: 2,
            name: "Jenzabar CX 10",
            description:
              "Jenzabar JX is a desktop version of CX that completely transforms the user experience.",
            tasks: [
              {
                description:
                  "Redesigned the front-end for the desktop version of Jenzabar CX using QT Creator.",
                skills: [
                  "UX",
                  "UI",
                  "Prototyping",
                  "XD",
                  "Research",
                  "Analysis",
                  "Reporting",
                  "QT",
                  "QSS"
                ],
                deliverables: [
                  {
                    id: 0,
                    title: "CX 10 Home Screen",
                    img: "img/CX10-Home.png",
                    description:
                      "The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory."
                  }
                ]
              }
            ],
            path: "cx10"
          },
          {
            id: 3,
            name: "Jenzabar JX",
            description:
              "Jenzabar JX offers a suite of tools for colleges and universities built in Java and Smart GWT.",
            tasks: [
              {
                description:
                  "Provided design assistance to local, remote, and offshore development teams."
              },
              {
                description:
                  "Delivered wireframes and various UI elements (fonts, icons, colors) within an Agile environment."
              },
              {
                description:
                  "Developed Java prototypes using SmartGWT to demonstrate interactions and responsive layouts.",
                skills: ["UX", "UI", "SmartGWT", "Prototyping"]
              }
            ],
            path: "jx"
          }
        ]
      },
      {
        id: 1,
        title: "Interface Design Consultant",
        name: "Crown Equipment",
        startDate: 2015,
        endDate: 2015,
        location: "New Bremen, Ohio",
        projects: [
          {
            id: 0,
            name: "Crown.com",
            description: "Primary website for Crown, Inc.",
            tasks: [
              {
                description:
                  "Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
                skills: ["UX", "UI", "AEM", "Bootstrap", "Sass", "Grunt"],
                deliverables: [
                  {
                    id: 0,
                    title: "Crown Industries Rebranding",
                    img: "img/Crown-Website.png",
                    description:
                      "Adobe Experience Manager was used to rollout the new brand for Crown Industries. Bootstrap was used to display numerous components in a responsive layout, along with Sass to manage the CSS, which was compiled as part of the build process using Grunt."
                  }
                ]
              }
            ],
            path: "crown"
          }
        ]
      },
      {
        id: 2,
        title: "User Experience Designer",
        name: "Trimble Navigation",
        startDate: 2014,
        endDate: 2015,
        location: "Huber Heights, Ohio",
        projects: [
          {
            id: 0,
            name: "NextGen",
            description: "The next generation of machine control.",
            tasks: [
              {
                id: 0,
                description:
                  "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
                skills: ["UX", "Ideation"]
              },
              {
                id: 1,
                description:
                  "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
                skills: ["UX", "UI", "Bootstrap", "Research", "Prototyping"]
              },
              {
                id: 2,
                description:
                  "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
                skills: ["UX", "Research", "Analysis", "Reporting"]
              },
              {
                id: 3,
                description:
                  "Modeled an excavator and work site using Trimble SketchUp.",
                skills: ["UI", "3D Modeling", "SketchUp"]
              },
              {
                id: 4,
                description:
                  "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
                skills: [
                  "UI",
                  "Android",
                  "Vuforia",
                  "Agile",
                  "Style Guide",
                  "Iconography",
                  "Prototyping"
                ]
              }
            ],
            path: "nextgen"
          }
        ]
      },
      {
        id: 3,
        title: "Idea Designer",
        name: "LexisNexis",
        startDate: 2010,
        endDate: 2013,
        location: "Miamisburg, Ohio",
        projects: [
          {
            id: 0,
            name: "Lexis Advance",
            description: "The next generation of legal documentation",
            tasks: [
              {
                id: 0,
                description:
                  "Created annotated wireframes to support the development of Lexis Advance.",
                skills: ["UX"]
              },
              {
                id: 1,
                description:
                  "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
                skills: ["UX", "Testing", "Research", "Reporting"]
              },
              {
                id: 2,
                description:
                  "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
                skills: ["UX", "Ideation"]
              },
              {
                id: 3,
                description:
                  "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
                skills: [
                  "UX",
                  "Research",
                  "Analysis",
                  "Reporting",
                  "Prototyping"
                ]
              },
              {
                id: 4,
                description:
                  "Design Lead for several innovative products including Lexis Answers.",
                skills: [
                  "UX",
                  "Research",
                  "Analysis",
                  "Ideation",
                  "Reporting",
                  "Prototyping"
                ]
              }
            ],
            path: "lexisadvance"
          }
        ]
      },
      {
        id: 4,
        title: "Experience Planner",
        name: "Bridge Worldwide",
        startDate: 2009,
        endDate: 2010,
        location: "Cincinnati, Ohio",
        projects: [
          {
            id: 0,
            name: "Pearle Vision",
            description: "Main website for Pearl Vision, inc.",
            tasks: [
              {
                id: 0,
                description:
                  "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
                skills: ["UX", "Social Media", "Mobile Design", "Web Design"]
              },
              {
                id: 1,
                description:
                  "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
                skills: ["UX", "Ideation"]
              },
              {
                id: 2,
                description:
                  "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
                skills: ["UX"]
              },
              {
                id: 3,
                description:
                  "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
                skills: ["UX"]
              },
              {
                id: 4,
                description:
                  "Conducted usability testing with potential customers and reported insights back to the team.",
                skills: ["UX", "Research", "Analysis", "Reporting"]
              },
              {
                id: 5,
                description:
                  "Presented initial concepts, customer feedback, and other deliverables to the clients.",
                skills: ["UX"]
              }
            ],
            path: "pearlevision"
          }
        ]
      }
    ]
  },
  getters: {
    projects(state) {
      let projects = [];

      if (state.employers) {
        for (let e = 0; e < state.employers.length; e++) {
          if (state.employers[e].projects) {
            for (let p = 0; p < state.employers[e].projects.length; p++) {
              let project = {
                id: p,
                description: state.employers[e].projects[p].description,
                name: state.employers[e].projects[p].name,
                path: state.employers[e].projects[p].path
              };

              projects.push(project);
            }
          }
        }
      }

      return projects;
    },
    tasks(state) {
      let tasks = [];

      if (state.employers) {
        for (let e = 0; e < state.employers.length; e++) {
          if (state.employers[e].projects) {
            for (let p = 0; p < state.employers[e].projects.length; p++) {
              if (state.employers[e].projects[p].tasks) {
                for (
                  let t = 0;
                  t < state.employers[e].projects[p].tasks.length;
                  t++
                ) {
                  let task = {
                    id: t,
                    description:
                      state.employers[e].projects[p].tasks[t].description,
                    project: state.employers[e].projects[p].name,
                    employer: state.employers[e].name
                  };

                  tasks.push(task);
                }
              }
            }
          }
        }
      }

      return tasks;
    }
  }
});
