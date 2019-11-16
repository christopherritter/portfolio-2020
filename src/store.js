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
            img: "/img/FYC.png",
            description:
              "Find Your Calling helps prospective students identify career paths that match their personal interests. The website provides detailed information about employment opportunities in each state, plus the ability to connect with local colleges and universities that offer relevant courses.",
            tasks: [
              {
                description:
                  "Redesigned elements of Find Your Calling to focus on educational institutions.",
                skills: ["UX", "UI", "Visual Design", "Prototyping"],
                tools: ["Adobe XD", "VS Code"],
                tech: ["Bootstrap", "Sass", "Handlebars"],
                deliverables: [
                  {
                    id: 0,
                    title: "The All-New Career Explorer",
                    img: "/img/FYC_Career-Explorer.png",
                    description:
                      "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
                  },
                  {
                    id: 1,
                    title: "The Improved Private Profile",
                    img: "/img/FYC_Private-Profile.png",
                    description:
                      "The private profile was redesigned to focus on the educational choices for each of the career paths. This was part of a larger effort to connect prospective students to eductional institutions."
                  },
                  {
                    id: 2,
                    title: "Additional School Filters",
                    img: "/img/FYC_Schools-Filter.png",
                    description:
                      "Additional filters were added to the school listing for each of the career paths. These were designed for both desktop and mobile devices to align with the eductional instutitions below the filters."
                  },
                  {
                    id: 3,
                    title: "Big Data School Headers",
                    img: "/img/FYC_School-Header.png",
                    description:
                      "Visualized data for the schools was moved from the body of the original page into an interactive header. The header was designed to be used on both desktop and mobile devices."
                  }
                ]
              },
              {
                description:
                  "Implemented Pattern Lab to deliver redesigned elements for Find Your Calling.",
                skills: ["UI", "Front-End", "Design Systems"],
                tools: ["Pattern Lab", "VS Code"],
                tech: ["NodeJS", "Bootstrap", "Sass", "Handlebars"],
                deliverables: [
                  {
                    id: 0,
                    title: "FYC Design System",
                    img: "/img/FYC_Pattern-Lab.png",
                    description:
                      "Pattern Lab was used to create a new design system for Find Your Calling which leveraged existing style sheets and templates. This enabled the design system to integrate seamlessly with the pre-existing technology stack."
                  }
                ]
              },
              {
                description:
                  "Created Google Analytics reports to measure the effectiveness of redesigned elements.",
                skills: ["UX", "Reporting", "Ideation"],
                tools: ["Google Analytics"],
                deliverables: [
                  {
                    id: 0,
                    title: "Google Analytics Reporting",
                    img: "/img/FYC_Google-Reports.png",
                    description:
                      "The inclusion of Google Analytics allowed for the creation of detailed reports which showed the conversion rates for our project targets. These reports helped rate the efficacy of the designs and guide future enhancements."
                  }
                ]
              }
            ],
            path: "fyc"
          },
          {
            id: 1,
            name: "Jenzabar ICS 9",
            img: "/img/JICS9.png",
            description:
              "The latest release of the Jenzabar Internet Campus Solution features a suite of online portlets which have been redesigned for use on mobile and deskotop browsers, plus an all-new theme to align with the company's new branding guidelines.",
            tasks: [
              {
                description:
                  "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
                skills: ["UX", "UI", "Prototyping", "Front-End"],
                tools: ["Adobe XD", "VS Code"],
                tech: ["ASCX", "Bootstrap", "Sass", "jQuery"]
              },
              {
                description: 
                  "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
                  skills: ["UX", "UI", "Prototyping", "Front-End", "Visual Design"],
                  tools: ["Adobe XD", "VS Code"],
                  tech: ["ASCX", "Bootstrap", "Sass", "jQuery"]
              },
              {
                description: 
                  "Created a design system for JICS9 portlets to standardize front-end components.",
                  skills: ["UX", "UI", "Prototyping", "Front-End", "Design Systems"],
                  tools: ["Adobe XD", "VS Code"],
                  tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
                  deliverables: [
                    {
                      id: 0,
                      title: "Jenzabar ICS Design System",
                      img: "/img/JICS-Design-System_Home.png",
                      description:
                        "A new design system was created for JICS9 to display the components in use by the CX portlets."
                    },
                    {
                      id: 1,
                      title: "Design System Components",
                      img: "/img/JICS-Design-System_Tables.png",
                      description:
                        "Code samples were provided alongside functional examples of the ASP.Net Web Controls."
                    }
                  ]
              }
            ],
            path: "jics9"
          },
          {
            id: 2,
            name: "Jenzabar CX 10",
            img: "/img/CX10.png",
            description:
              "Jenzabar CX 10 is an all-new version of the classic Jenzbar CX suite of campus tools that transforms the old user interface from an 80-character terminal screen to a modern, desktop experience for both PCs and Macs.",
            tasks: [
              {
                description:
                  "Designed the front-end for the new desktop version of Jenzabar CX 10.",
                skills: [
                  "UX",
                  "UI",
                  "Prototyping",
                  "Front-End",
                  "Research",
                  "Analysis",
                  "Reporting"
                ],
                tools: ["Adobe XD", "VS Code", "QT Creator"],
                tech: ["QT", "QSS"],
                deliverables: [
                  {
                    id: 0,
                    title: "CX 10 Home Screen",
                    img: "/img/CX10-Home.png",
                    description:
                      "The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory."
                  }
                ]
              },
              {
                description: "Validated new concepts with users and reported findings to delivery team."
              },
              {
                description: 
                  "Created the base theme for CX 10 plus various other themes available through the settings."
              }
            ],
            path: "cx10"
          },
          {
            id: 3,
            name: "Jenzabar JX",
            img: "/img/JX.png",
            description:
              "Jenzabar JX provides online browser access to the classic Jenzabar CX suite of tools for colleges and universities. The new platform was built in Java and uses Smart GWT components to display the user interface.",
            tasks: [
              {
                description:
                  "Provided design assistance to local, remote, and offshore development teams.",
                  skills: ["UX", "Visual Design"],
                  tools: ["Adobe PhotoShop", "Adobe Illustrator", "Adobe InDesign"]
              },
              {
                description:
                  "Prototyped SmartGWT components to demonstrate user interactions and responsive layouts.",
                skills: ["UI", "Prototyping", "Front-End"],
                tools: ["Visual Studio"],
                tech: ["SmartGWT"]
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
                skills: ["UX", "UI"],
                tools: ["Adobe Experience Manager"],
                tech: ["Bootstrap", "Sass", "Grunt"],
                deliverables: [
                  {
                    id: 0,
                    title: "Crown Industries Rebranding",
                    img: "/img/Crown-Website.png",
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
                skills: ["UX", "Brainstorming"]
              },
              {
                id: 1,
                description:
                  "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
                skills: ["UX", "UI", "Research", "Prototyping"],
                tech: ["Bootstrap"]
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
                skills: ["UI", "3D Modeling"],
                tools: ["SketchUp"]
              },
              {
                id: 4,
                description:
                  "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
                skills: [
                  "UI",
                  "Android",
                  "Style Guide",
                  "Iconography",
                  "Prototyping"
                ],
                tech: ["Vuforia"]
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
                skills: ["UX", "Brainstorming"]
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
                  "Brainstorming",
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
                skills: ["UX", "Social Media"]
              },
              {
                id: 1,
                description:
                  "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
                skills: ["UX", "Brainstorming"]
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

      for (let e = 0; e < state.employers.length; e++) {
        if (state.employers[e].projects) {
          for (let p = 0; p < state.employers[e].projects.length; p++) {
            let project = {
              id: p,
              description: state.employers[e].projects[p].description,
              name: state.employers[e].projects[p].name,
              employer: state.employers[e].name,
              tasks: state.employers[e].projects[p].tasks,
              skills: [],
              tools: [],
              tech: [],
              deliverables: [],
              path: state.employers[e].projects[p].path
            };

            if (state.employers[e].projects[p].img) {
              project.img = state.employers[e].projects[p].img;
            }

            if (state.employers[e].projects[p].tasks) {
              project.tasks = state.employers[e].projects[p].tasks;

              for (
                let t = 0;
                t < state.employers[e].projects[p].tasks.length;
                t++
              ) {
                if (state.employers[e].projects[p].tasks[t].skills) {
                  for (
                    let s = 0;
                    s < state.employers[e].projects[p].tasks[t].skills.length;
                    s++
                  ) {
                    let skill = {
                      label: state.employers[e].projects[p].tasks[t].skills[s]
                    };
                    let pos = project.skills.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].skills[s]
                    );
                    if (pos >= 0) {
                      project.skills[pos].count++;
                    } else {
                      skill.count = 1;
                      project.skills.push(skill);
                    }
                  }
                }

                if (state.employers[e].projects[p].tasks[t].tools) {
                  for (
                    let o = 0;
                    o < state.employers[e].projects[p].tasks[t].tools.length;
                    o++
                  ) {
                    let tool = {
                      label: state.employers[e].projects[p].tasks[t].tools[o]
                    };
                    let pos = project.tools.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].tools[o]
                    );
                    if (pos >= 0) {
                      project.tools[pos].count++;
                    } else {
                      tool.count = 1;
                      project.tools.push(tool);
                    }
                  }
                }

                if (state.employers[e].projects[p].tasks[t].tech) {
                  for (
                    let c = 0;
                    c < state.employers[e].projects[p].tasks[t].tech.length;
                    c++
                  ) {
                    let technology = {
                      label: state.employers[e].projects[p].tasks[t].tech[c]
                    };
                    let pos = project.tech.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].tech[c]
                    );
                    if (pos >= 0) {
                      project.tech[pos].count++;
                    } else {
                      technology.count = 1;
                      project.tech.push(technology);
                    }
                  }
                }

                if (state.employers[e].projects[p].tasks[t].deliverables) {
                  for (
                    let d = 0;
                    d <
                    state.employers[e].projects[p].tasks[t].deliverables.length;
                    d++
                  ) {
                    project.deliverables.push(
                      state.employers[e].projects[p].tasks[t].deliverables[d]
                    );
                  }
                }
              }
            }

            projects.push(project);
          }
        }
      }

      return projects;
    },
    tasks(state) {
      let tasks = [];

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
                  deliverables:
                    state.employers[e].projects[p].tasks[t].deliverables || [],
                  project: state.employers[e].projects[p].name,
                  employer: state.employers[e].name
                };

                tasks.push(task);
              }
            }
          }
        }
      }

      return tasks;
    },
    skills(state) {
      let skills = [];

      for (let e = 0; e < state.employers.length; e++) {
        if (state.employers[e].projects) {
          for (let p = 0; p < state.employers[e].projects.length; p++) {
            if (state.employers[e].projects[p].tasks) {
              for (
                let t = 0;
                t < state.employers[e].projects[p].tasks.length;
                t++
              ) {
                if (state.employers[e].projects[p].tasks[t].skills) {
                  for (
                    let s = 0;
                    s < state.employers[e].projects[p].tasks[t].skills.length;
                    s++
                  ) {
                    let skill = {
                      label: state.employers[e].projects[p].tasks[t].skills[s]
                    };
                    let pos = skills.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].skills[s]
                    );
                    if (pos >= 0) {
                      skills[pos].count++;
                    } else {
                      skill.count = 1;
                      skills.push(skill);
                    }
                  }
                }
              }
            }
          }
        }
      }

      return skills;
    },
    tools(state) {
      let tools = [];

      for (let e = 0; e < state.employers.length; e++) {
        if (state.employers[e].projects) {
          for (let p = 0; p < state.employers[e].projects.length; p++) {
            if (state.employers[e].projects[p].tasks) {
              for (
                let t = 0;
                t < state.employers[e].projects[p].tasks.length;
                t++
              ) {
                if (state.employers[e].projects[p].tasks[t].tools) {
                  for (
                    let s = 0;
                    s < state.employers[e].projects[p].tasks[t].tools.length;
                    s++
                  ) {
                    let tool = {
                      label: state.employers[e].projects[p].tasks[t].tools[s]
                    };
                    let pos = tools.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].tools[s]
                    );
                    if (pos >= 0) {
                      tools[pos].count++;
                    } else {
                      tool.count = 1;
                      tools.push(tool);
                    }
                  }
                }
              }
            }
          }
        }
      }

      return tools;
    },
    tech(state) {
      let technology = [];

      for (let e = 0; e < state.employers.length; e++) {
        if (state.employers[e].projects) {
          for (let p = 0; p < state.employers[e].projects.length; p++) {
            if (state.employers[e].projects[p].tasks) {
              for (
                let t = 0;
                t < state.employers[e].projects[p].tasks.length;
                t++
              ) {
                if (state.employers[e].projects[p].tasks[t].tech) {
                  for (
                    let s = 0;
                    s < state.employers[e].projects[p].tasks[t].tech.length;
                    s++
                  ) {
                    let tech = {
                      label: state.employers[e].projects[p].tasks[t].tech[s]
                    };
                    let pos = technology.findIndex(
                      i =>
                        i.label ===
                        state.employers[e].projects[p].tasks[t].tech[s]
                    );
                    if (pos >= 0) {
                      technology[pos].count++;
                    } else {
                      tech.count = 1;
                      technology.push(tech);
                    }
                  }
                }
              }
            }
          }
        }
      }

      return technology;
    }
  }
});
