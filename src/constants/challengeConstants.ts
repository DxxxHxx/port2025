import { ChallengeCard } from "../types/interface";

export const troubleshootingList: ChallengeCard[] = [
  {
    id: 1,
    title: "URL 파라미터로 필터링,페이지 상태 유지하기",
    description:
      "페이지네이션, 필터링 조건 등 리스트 상태를 query string으로 유지하는 과정에서 발생한 문제를 해결한 과정입니다.",
    date: "2025.04.06",

    link: "https://planet-parrotfish-56e.notion.site/URL-1d1b9afbb1e4806aabbde5a41761eee2?pvs=73",
  },
  {
    id: 2,
    title: "모바일 드래그 불가 이슈 해결",
    description:
      "모바일 환경으로 로컬호스트 접속, 디버깅을 통해 특정 컴포넌트의 드래그 이벤트가 동작하지 않는 문제를 해결한 과정입니다.",
    date: "2025.02.27",

    link: "https://planet-parrotfish-56e.notion.site/1d1b9afbb1e4801c926fcca94b5fd32f?pvs=73",
  },
  {
    id: 3,
    title: "디자인 패턴 도입을 통한 재사용성 문제 해결",
    description:
      "반복되는 UI와 로직을 Container & Presentational 패턴을 활용해 재사용성을 높였습니다.",
    date: "2024.02.22",

    link: "https://planet-parrotfish-56e.notion.site/1d1b9afbb1e4807ea010c805d853e11f?pvs=73",
  },
  {
    id: 4,
    title: "SPA에서 쿼리 파라미터 기반 페이지네이션 히스토리 관리",
    description:
      "브라우저의 뒤로가기 버튼을 눌렀을 때 페이지 -1이 아닌 이전 라우트로 이동하는 이슈를 해결했습니다.",
    date: "2025.06.07",
    link: "https://planet-parrotfish-56e.notion.site/SPA-1b7b9afbb1e481ca8a54e3322ae01a66?pvs=73",
  },
];

export const improvementList: ChallengeCard[] = [
  {
    id: 1,
    title: "검색기능 키보드 이벤트 추가",
    description:
      "검색 자동완성 기능에 키보드로 리스트를 이동하거나 선택할 수 있도록 하여 UX를 개선했습니다.",
    date: "2025.02.22",
    link: "https://planet-parrotfish-56e.notion.site/1b7b9afbb1e4814fb1c2f9b1f4fc805d?pvs=74",
  },
  {
    id: 2,
    title: "Optimistic Updates 적용",
    description:
      "서버 성능 저하로 응답이 지연됐던 상황에서 UI를 즉시 업데이트 되도록 하여 UX를 개선했습니다.",
    date: "2025.01.31",
    link: "https://planet-parrotfish-56e.notion.site/Optimistic-update-1b7b9afbb1e4809b9473da962dbdc56e?pvs=74",
  },
  {
    id: 3,
    title: "React Query 기반 무한스크롤 구현",
    description:
      "React Query의 useInfiniteQuery를 활용해 네트워크 요청과 상태 관리를 최적화한 무한스크롤을 구현했습니다.",
    date: "2024.12.06",
    link: "https://planet-parrotfish-56e.notion.site/useInfinityQuery-1b9b9afbb1e480198f7fed200763b8fd?pvs=74",
  },
  {
    id: 4,
    title: "모달 컴포넌트 포커스 트랩을 통해 접근성 개선",
    description:
      "포커스 트랩을 통해 모달 외부로 포커스가 이동하지 않도록 제한 해 웹 접근성을 개선했습니다.",
    date: "2025.06.07",

    link: "https://planet-parrotfish-56e.notion.site/20bb9afbb1e4804c8c50daf41e83ddfd?pvs=73",
  },
];
