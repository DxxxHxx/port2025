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
    { id: 1, title: "", desc: "", result: "" },
    { id: 2, title: "", desc: "", result: "" },
  ],
  review: [
    { id: 1, title: "🎯 도전 과제", desc: "" },
    { id: 2, title: "💡 해결 방안", desc: "" },
    { id: 3, title: "📚 학습 경험", desc: "" },
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
      title: "SEO 톺아보기 – 정말 SSR이 SEO에 좋을까?",
      link: "https://tech.hancom.com/2024-07-26-ssr-seo/",
      desc: "",
    },
    {
      id: 3,
      title: "테스트 코드를 왜 그리고 어떻게 작성해야 할까?",
      link: "https://tech.inflab.com/20230404-test-code/?ref=codenary#%EC%B2%AB%EB%B2%88%EC%A7%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%8A%94-dry-%EB%B3%B4%EB%8B%A4%EB%8A%94-damp-%ED%95%98%EA%B2%8C-%EC%9E%91%EC%84%B1%ED%95%98%EB%9D%BC",
      desc: "",
    },
    { id: 4, title: "", link: "", desc: "" },
  ],
};
