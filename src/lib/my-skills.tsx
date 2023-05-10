
const getMySkills = () => {
  const data = [
    {
      category: "Frontend",
      data: [
        {
          skillImage: "/assets/skills/frontend/htmlJsCss2.png"
        },
        {
          skillImage: "/assets/skills/frontend/typeScript2.png"
        },
        {
          skillImage: "/assets/skills/frontend/react.png"
        },
        {
          skillImage: "/assets/skills/frontend/nextJs.png"
        },
      ]
    },
    {
      category: "Deploy",
      data: [
        {
          skillImage: "/assets/skills/deploy/aws1.png"
        },
        {
          skillImage: "/assets/skills/deploy/vercel1.png"
        },
        {
          skillImage: "/assets/skills/deploy/netlify1.png"
        },
        {
          skillImage: "/assets/skills/deploy/heroku1.png"
        },
      ]
    },
    {
      category: "Database",
      data: [
        {
          skillImage: "/assets/skills/database/mongo.webp"
        },
        {
          skillImage: "/assets/skills/database/postgresql.png"
        },
      ]
    },
    {
      category: "Ver Control",
      data: [
        {
          skillImage: "/assets/skills/vercontrol/git.png"
        },
        {
          skillImage: "/assets/skills/vercontrol/github.png"
        },
      ]
    },
  ];

  return data;
}

export default getMySkills;
