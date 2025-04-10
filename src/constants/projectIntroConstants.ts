import thumbnail from "../assets/imgs/project-intro/this-money-thumbnail.png";
export const projectIntroList = {
  thumbnail,
  title: "이게머니 (this money)",
  period: "2024.11.03 ~ 진행 중 (6개월)",
  member: "디자이너 2명, 프론트엔드 1명, 백엔드 1명",
  role: "프론트엔드",
  links: {
    serviceLink: "https://thisismoney.site/",
    githubLink: "https://github.com/one-dream-us/front-end",
  },
  desc: "이게머니는 2030 초보 투자자들이 경제 신문을 쉽게 읽어볼 수 있도록, 최신 경제 뉴스로 경제 용어를 학습하는 서비스입니다. 주요 기능은 다음과 같습니다:",
  mainFeatures: [
    { id: 1, feat: "최신 경제 뉴스 제공 및 경제 용어 학습" },
    { id: 2, feat: "사용자가 아카이빙 한 용어를 기반으로 퀴즈 제공" },
  ],
  techReason: [
    {
      id: 1,
      tech: "React",
      reason:
        "동적인 UI를 효율적으로 렌더링하고, 상태 변화에 따른 UI 업데이트를 쉽게 관리 하기 위해 사용했습니다.",
    },
    {
      id: 2,
      tech: "React Query",
      reason:
        "클라이언트 상태와 서버 상태를 명확히 구분하고 캐싱,백그라운드 동기화 등의 기능을 통해 API 요청을 최적화하고 UX 개선을 위해 사용했습니다.",
    },
    {
      id: 3,
      tech: "TypeScript",
      reason: "타입 안정성을 높여 런타임 오류를 줄이기 위해 사용했습니다",
    },
    {
      id: 4,
      tech: "Zustand",
      reason:
        "불필요한 리렌더링을 최소화하고 복잡한 Redux 설정 없이 가벼운 전역 상태 관리를 위해 사용했습니다.",
    },
  ],
  contribute: [
    {
      id: 1,
      title: "테스트 코드 도입",
      desc: "RTL & Jest를 활용 해 단위 테스트 실행",
      result: { number: "40%", text: "QA 비용 감소" },
    },
    {
      id: 2,
      title: "사용자 경험 최적화",
      desc: "React-Query의 Optimistic update 통해 느린 네트워크 환경에서도 즉시 UI 업데이트",
      result: { number: "99%", text: "UI 업데이트 시간 단축" },
    },
  ],
  reviews: [
    {
      id: 1,
      review: [
        {
          id: 1,
          title: "🎯 도전 과제",
          desc: "프로젝트 규모 확장과 잦은 기능 수정으로 인해 QA 리포트가 급증",
        },
        {
          id: 2,
          title: "💡 해결 방안",
          desc: "테스트 코드(RTL & Jest)를 도입해 주요 기능을 자동 검증, CI 환경에서 테스트 통과 여부를 병합 기준으로 설정",
        },
        {
          id: 3,
          title: "📚 학습 경험",
          desc: "테스트 코드의 필요성, 작성법 학습, 도입 이전에 비해 QA비용 감소 경험",
        },
        {
          id: 4,
          title: "📌 추가 개선 가능성",
          desc: "통합 테스트 및 E2E 테스트 도입 경험 쌓기, 테스트 시나리오 설계 역량 강화",
        },
      ],
    },
    {
      id: 2,
      review: [
        {
          id: 1,
          title: "🎯 도전 과제",
          desc: "Form 내부에 반복되는 UI와 로직이 많았지만 구조 상 재사용성이 낮았던 상황",
        },
        {
          id: 2,
          title: "💡 해결 방안",
          desc: "로직과 뷰를 분리하는 Container & Presentational 패턴과 custom hook을 적용해 중복을 줄이고 재사용성을 높임",
        },
        {
          id: 3,
          title: "📚 학습 경험",
          desc: "뷰와 로직의 분리를 통한 재사용성 향상, 복잡한 Form에 바로 적용해봄으로써 디자인 패턴에 대한 이해도 향상",
        },
        {
          id: 4,
          title: "📌 추가 개선 가능성",
          desc: "상태 변화로 인한 불필요한 리렌더링을 줄이기 위한 성능 최적화",
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      title:
        "[우아콘 2023] 프론트엔드 상태관리 실전 편 with React Query & Zustand",
      link: "https://velog.io/@hyeon9782/%EC%9A%B0%EC%95%84%EC%BD%98-2023-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EC%8B%A4%EC%A0%84-%ED%8E%B8-with-React-Query-Zustand",
      desc: "",
    },
    {
      id: 2,
      title: "검색 기능 키보드 이동 이벤트",
      link: "https://www.youtube.com/watch?v=o1XcuaCcsDA&t=281s",
      desc: "",
    },
    {
      id: 3,
      title: "테스트 코드를 왜 그리고 어떻게 작성해야 할까?",
      link: "https://tech.inflab.com/20230404-test-code/?ref=codenary#%EC%B2%AB%EB%B2%88%EC%A7%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%8A%94-dry-%EB%B3%B4%EB%8B%A4%EB%8A%94-damp-%ED%95%98%EA%B2%8C-%EC%9E%91%EC%84%B1%ED%95%98%EB%9D%BC",
      desc: "",
    },
    {
      id: 4,
      title: "Vite+React+typescript+yarn jest적용하기",
      link: "https://velog.io/@leewoonhee/ViteReacttypescriptyarn-jest%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0",
      desc: "",
    },
    {
      id: 5,
      title: "디자인 패턴 소개",
      link: "https://patterns-dev-kr.github.io/design-patterns/container-presentational-pattern/",
      desc: "",
    },
  ],
};
