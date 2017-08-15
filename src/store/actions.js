/*
 * @Author: vicent
 * @Date:   2017-08-09 16:54:43
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-14 22:12:50
 */

// 'use strict';

// 解构传参
export function getTwoCharacters({commit}) {
  var data;

  $.ajax({ url: 'http://localhost:3000/api/characters' })
    .done(_data => {
      // this.actions.getTwoCharactersSuccess(data);
      // console.log(data);

        commit('setCharacterList', _data)
    })
    .fail(jqXhr => {
      // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
      console.log('data');
    });
}

export function getCharacterDetail({commit}, characterId) {


  $.ajax({ url: 'http://localhost:3000/api/characters/' + characterId })
    .done(_data => {
      // this.actions.getTwoCharactersSuccess(data);
      // console.log(data);

        commit('setCharacterDetail', _data)
    })
    .fail(jqXhr => {
      // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
      console.log('data');
    });
}


// export function getTwoCharacters(context) {
//   var data;
//   $.ajax({ url: 'http://localhost:3000/api/characters' })
//     .done(_data => {
//       // this.actions.getTwoCharactersSuccess(data);
//       // console.log(data);
//         context.commit('提交一个mutation')
//     })
//     .fail(jqXhr => {
//       // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
//       console.log('data');
//     });
// }
