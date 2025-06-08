import thumbnail from "../assets/imgs/project-intro/todays-special.gif";
import { ProjectInfo } from "../types/interface";
export const soloPrpjectList: ProjectInfo = {
  thumbnail,
  title: "Today's special ( 메뉴 추천 서비스 )",
  period: "2025.04 ~ 2025.06 (5주)",
  member: "개인 프로젝트",
  role: "기획, 개발",
  links: {
    githubLink:
      "https://github.com/DxxxHxx/todays-special/blob/master/README.md",
    serviceLink: "https://todays-special.vercel.app/",
  },
  desc: "기분, 날씨, 상황에 맞는 메뉴를 AI에게 추천받고 지금 내 위치 근처에서 그 메뉴를 맛볼 수 있는 맛집까지 함께 찾아주는 메뉴 추천 서비스입니다.",
  mainFeatures: [
    { id: 1, feat: "프롬프트 기반 메뉴 추천 (OpenAI)" },
    { id: 2, feat: "내 위치 기반 주변 맛집 검색 (Naver API, Geolocation)" },
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
      desc: "RTL & Vitest를 활용 해 단위 테스트 실행",
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
          desc: "모달 컴포넌트 외부의 버튼, 링크 등에 키보드 포커스가 이동하여 접근성 이슈가 발생",
        },
        {
          id: 2,
          title: "💡 해결 방안",
          desc: "모달이 열렸을 때, 키보드 포커스가 모달 내부에서만 순환하도록 포커스 트랩(Focus Trap) 훅을 구현",
        },
        {
          id: 3,
          title: "📚 학습 경험",
          desc: "웹 접근성, tab-index, aria 속성에 대한 경험",
        },
        {
          id: 4,
          title: "📌 추가 개선 가능성",
          desc: "모달이 닫힐 때, 호출 버튼 등에 포커스 복원하기",
        },
      ],
    },
    {
      id: 2,
      review: [
        {
          id: 1,
          title: "🎯 도전 과제",
          desc: "textarea에서 입력 후 전송 시 마지막 글자가 중복되어 지워지지 않고 남아있는 이슈 발생",
        },
        {
          id: 2,
          title: "💡 해결 방안",
          desc: "onKeyDown 초기에 nativeEvent.isComposing을 체크해 조합 중일 때는 로직을 무시하고, 조합이 끝난 상태에서만 Enter를 처리하도록 분기",
        },
        {
          id: 3,
          title: "📚 학습 경험",
          desc: "브라우저 IME 이벤트와 SyntheticEvent의 nativeEvent.isComposing을 통해 조합형 입력 처리 흐름 이해",
        },
        {
          id: 4,
          title: "📌 추가 개선 가능성",
          desc: "-",
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      title: "모달 접근성을 위한 포커스트랩 컴포넌트 만들기",
      link: "https://ianlog.me/blog/modal-atoz/alert-dialog-focus-trap",
      desc: "",
    },
    {
      id: 2,
      title: "React: 한글 입력 후 마지막 글자가 중복되는 현상",
      link: "https://selonjulie.tistory.com/202",
      desc: "",
    },
    {
      id: 3,
      title:
        "[트러블 슈팅] Vercel로 배포했을 때 vite.config.ts에 정의한 Proxy로 요청을 안하는 문제",
      link: "https://velog.io/@clappingmin/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-Vercel%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%96%88%EC%9D%84-%EB%95%8C-Proxy%EB%A1%9C-%EC%9A%94%EC%B2%AD%EC%9D%84-%EC%95%88%ED%95%98%EB%8A%94-%EB%AC%B8%EC%A0%9C",
      desc: "",
    },
    {
      id: 4,
      title: "네이버 지도 API 예제",
      link: "https://navermaps.github.io/maps.js.ncp/docs/tutorial-digest.example.html",
      desc: "",
    },
  ],
};
