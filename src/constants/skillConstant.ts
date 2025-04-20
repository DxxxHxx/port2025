import { SkillListState } from "../types/interface";

export const skillList: SkillListState[] = [
  {
    id: 1,
    title: "React",
    descList: [
      { id: 1, desc: "디자인 패턴을 활용한 경험을 보유하고 있습니다." },
      {
        id: 2,
        desc: "타입 안정성을 위해 타입스크립트 기반으로 개발이 가능합니다.",
      },
      {
        id: 3,
        desc: "React Query,Zustand 등 서버상태, 클라이언트 상태를 구분해 개발합니다.",
      },
      {
        id: 4,
        desc: "Vitest & React Testing Library를 활용 해 간단한 단위 테스트, 통합 테스트 경험을 보유하고 있습니다.",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript",
    descList: [
      { id: 1, desc: "ES6+ 문법 활용이 가능합니다." },
      { id: 2, desc: "JS 동작 원리 및 비동기 처리 구조를 이해하고 있습니다." },
    ],
  },
  {
    id: 3,
    title: "HTML & CSS",
    descList: [
      { id: 1, desc: "웹 접근성을 고려한 시멘틱 태그를 활용하려 노력합니다." },
      {
        id: 2,
        desc: "Role 속성 활용 및 Lighthouse 등을 활용 한 접근성 테스트 경험을 보유하고 있습니다.",
      },
      { id: 3, desc: "반응형 디자인이 가능합니다." },
      {
        id: 4,
        desc: "Tailwind CSS, Styled Components, CSS Modules 등 다양한 스타일링 기법을 사용한 경험을 보유하고 있습니다.",
      },
    ],
  },
  {
    id: 4,
    title: "TypeScript",
    descList: [
      {
        id: 1,
        desc: "제네릭을 사용 해 재사용 가능한 타입 및 함수를 작성 한 경험을 보유하고 있습니다.",
      },
      { id: 2, desc: "Partial,Pick,Omit 등 유틸리티 타입을 적극 활용합니다." },
    ],
  },
  {
    id: 5,
    title: "etc",
    descList: [
      {
        id: 1,
        desc: "Github : Gitflow 및 PR 코드 리뷰 프로세스 경험을 보유하고 있습니다.",
      },
      {
        id: 2,
        desc: "Github Actions : 테스트 자동화 & 배포 자동화 경험을 보유하고 있습니다.",
      },
      {
        id: 3,
        desc: "MSW : 백엔드 개발과 병렬 진행하여 프로젝트 속도를 개선한 경험을 보유하고 있습니다.",
      },
      {
        id: 4,
        desc: "Jira : 칸반보드를 활용 해 업무 우선 순위 선정 및 백로그 관리, 주간 스프린트 참여 등 애자일 개발 경험을 보유하고 있습니다.",
      },
    ],
  },
];
