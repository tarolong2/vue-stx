import axios from "axios";
const state = {
  // gnb 메뉴데이터
  gnbData : [],
  noticeData : [
    {url: 'a.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'},
    {url: 'b.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'},
    {url: 'c.html', title:'2021년도 협력업체 모집공고'},
    {url: 'd.html', title:'STX건설 상호 사용 관련 안내'}
  ],
  newsData : [
    {url: 'k.html', title:'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'},
    {url: 'i.html', title:'STX건설, 2018년 성장 청신호'}
  ]
};
const actions = {

  fetchGnb({commit}) {
    axios.get('/data/gnb.json')
    .then(response => {
      console.log("axios", response)
      commit('GNB', response.data)
    })
    .catch(err => console.log(err))
  },

  fetchNews() {
    axios.get('/data/news.json')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  },

  fetchNotice() {
    axios.get('/data/notice.json')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

};
const mutations = {
  GNB(state, payload){
    console.log(payload)
    state.gnbData = payload;
  }
};
const getters = {
  getGnbData(state){
    return state.gnbData;
  },
  getNewsData(state){
    return state.newsData
  },
  getNoticeData(state){
    return state.noticeData
  }
};

export { state, actions, mutations, getters}