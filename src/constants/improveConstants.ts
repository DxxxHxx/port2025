import optimisticUpdateThumbnail from "../assets/imgs/improve/optimistic-update/optimistic-thumbnaill.gif";
import autoSearchtTumbnail from "../assets/imgs/improve/auto-search/search-fin.gif";
import searchProblem from "../assets/imgs/improve/auto-search/problem.gif";
import beforeDebounce from "../assets/imgs/improve/auto-search/before-debounce.gif";
import afterDebounce from "../assets/imgs/improve/auto-search/after-debounce.gif";
export const improveList = [
  {
    id: 1,
    title: "검색 기능 키보드 이벤트 추가",
    url: autoSearchtTumbnail,
    pos: "",
  },
  {
    id: 2,
    title: "Optimistic update",
    url: optimisticUpdateThumbnail,
    pos: "",
  },
];

export const improveDetailList = [
  {
    id: 1,
    title: "검색 기능 키보드 이벤트 추가",
    src: {
      searchProblem,
      afterDebounce,
      beforeDebounce,
      autoSearchtTumbnail,
    },
  },
];
