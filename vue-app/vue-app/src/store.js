import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"",
    name:"",
    count    : 2,
    count1   : 3,
    photoData: []
  },
  mutations: {
    change(state,obj){
      // console.log(111111)

      state.color = obj.bgColor;
      state.name = obj.name;
    },
    add(state,num){
        state.count += num;
    },
    reduce(state){
        state.count--;
    },
    setPhotoData(state,data){
        state.photoData = data;
    }
  },
  getters :{
      count2(state){
          return state.count+100;
      }
  },
  actions :{

      addAction({commit}){
          commit('add',10);
      },
      reduceAction({commit}){
          commit('reduce');
      },
      setPhotoData({commit},data){
          commit('setPhotoData',data);
      }
  }

})
