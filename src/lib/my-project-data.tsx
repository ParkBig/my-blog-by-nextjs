import { ProjectContent } from "@/type/interface";

const data: ProjectContent[] = [
  {
    id: "1",
    title: "My-blog",
    subTitle: "Personal project / 2023.04 ~",
    image: ["/assets/my-project/blog1.png"],
    content: "Next Js를 이용하여 만든 개인 블로그입니다. \n프로젝트 포트폴리오 및 포스팅을 싣고있습니다. \n현재 진행중입니다.",
    subContent: "Next Js를 이용한 개인 블로그",
    gitHub: "https://github.com/ParkBig/pjw-blog.git",
    url: "https://pjw-blog.vercel.app",
    stack: "TypeScript, Next Js",
    deployment: "vercel",
  },
  {
    id: "2",
    title: "Chess-Game",
    subTitle: "Personal project / 2023.02 ~ 3weeks",
    image: ["/assets/my-project/chess1.png", "/assets/my-project/chess2.png", "/assets/my-project/chess3.png", "/assets/my-project/chess4.png"],
    content: "지인과 체스를 즐길 수 있는 체스 게임입니다. \n방이름을 입력하여 생성하거나, 이미 만들어진 방에 입장이 가능합니다. \n알람기능을 적용하여 상대방이 입장하거나, 게임 시작, 체스말이 잡힐때, 게임이 끝날때 등 알람을 띄우고 자동으로 사라집니다. \n게임중 누구의 차례인지 시각적으로 확인할 수 있습니다. \n게임이 종료되면 재매치 혹은 방을 나갈수 있습니다.",
    subContent: "socket.io를 이용한 체스게임, 체스 알고리즘, 채팅 기능, 알림 기능",
    gitHub: "https://github.com/ParkBig/chess-game.git",
    url: "https://chess-instant.site (offline)",
    stack: "TypeScript, React, Express, Socket.io, Styled-Components",
    deployment: "AWS (S3, Route53, ELB)",
  },
  {
    id: "3",
    title: "Num-Comparator",
    subTitle: "Personal project / 2023.01 ~ 2weeks",
    image: ["/assets/my-project/num1.png", "/assets/my-project/num2.png"],
    content: "비교를 원하는 데이터를 입력하여 그래프를 통해 시각적으로 결과를 확인할 수 있는 프로그램입니다. \n그룹을 이뤄 전체 값을 확인할 수 있고, CSV로 추출이 가능합니다. \nPWA를 사용하여 웹앱으로 사용이 가능합니다.",
    subContent: "수를 입력하고 분석, 그래프를 통한 시각적 확인, 그룹별로 비교, CSV추출 가능, PWA적용",
    gitHub: "https://github.com/ParkBig/num-comparator.git",
    url: "https://num-comparator.vercel.app",
    stack: "TypeScript, React, React-Hook_Form, Victory Styled-Components",
    deployment: "Vercel"
  },
  {
    id: "4",
    title: "Moa",
    subTitle: "Team project / 2022.11 ~ 7weeks",
    image: ["/assets/my-project/moa1.png", "/assets/my-project/moa2.png", "/assets/my-project/moa3.png"],
    content: "개인의 일정 관리 및 지인과 실시간으로 채팅을 치며 계획을 작성할 수 있는 일정관리 서비스입니다. \n실제로 광고를 하며 배포하여 유저 피드백까지 받아 정정한 팀 프로젝트입니다. \n팀 리더를 맡아 FE, BE의 원할한 의사소통을 주재 하였으며, 팀의 전체적인 일정관리 및 기술 적용을 주도하였습니다.",
    subContent: "생동적인 모션을 통해 일정확인 가능, 일정에 지도를 통해 장소 저장가능, 그룹일정시 실시간으로 채팅치며 생성가능",
    gitHub: "https://github.com/99-Moa/99-MOA-F.git",
    url: "https://moa99.site (offline)",
    stack: "React, Redux, React-Query, Framer-Motion, React-Hook-Form, Styled-Components, Axios",
    deployment: "AWS (S3, Route53)"
  },
  {
    id: "5",
    title: "InstarGram-Clone",
    subTitle: "Team project / 2022.10 ~ 1weeks",
    image: ["/assets/my-project/instar1.png", "/assets/my-project/instar2.png", "/assets/my-project/instar3.png", "/assets/my-project/instar4.png"],
    content: "Instargram 클론코딩입니다. \nFE리더로서 뼈대, 주요기능, 일정 등을 리드했습니다.",
    subContent: "Instargram의 대부분의 기능 클론코딩",
    gitHub: "https://github.com/ParkBig/week7-clone-coding-instargram.git",
    url: "https://week7-clone-coding-instargram-ef2l.vercel.app (offline)",
    stack: "React, Redux, React-Query, React-Hook-Form, Styled-Components, Axios",
    deployment: "Vercel"
  },
  {
    id: "6",
    title: "Gallagher",
    subTitle: "Personal project / 2022.09 ~ 1weeks",
    image: ["/assets/my-project/gall1.png", "/assets/my-project/gall2.png"],
    content: "갤러거 게임입니다. \nCanvas, 생성자 함수, this등을 공부하며 숙련하기 위해 만든 미니게임입니다.",
    subContent: "키보드 조작을 통해 갤러거 게임 가능, 적군이 바닥에 닿으면 게임 종료",
    gitHub: "https://github.com/ParkBig/gallagher-game.git",
    url: "",
    stack: "Javascript",
    deployment: ""
  },
  // {
  //   title: "Calendar",
  //   subTitle: "개인프로젝트 / 2022.07 ~ 1주",
  //   image: [],
  //   content: "개발자로서 공부를 시작하고 처음 Javascript를 다루며 만들어본 달력입니다. 윤년까지 계산되었습니다.",
  //   subContent: "달력!",
  //   github: "https://github.com/ParkBig/calendar.git",
  //   url: "",
  //   stack: "Javascript",
  //   deployment: ""
  // }
];

export const getAllProjects = () => {
  return data
};

export const getProject = (title: string) => {
  return data.find(project => project.title === title);
};

