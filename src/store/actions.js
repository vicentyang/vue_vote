/*
 * @Author: vicent
 * @Date:   2017-08-09 16:54:43
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-16 16:27:17
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
      console.log('getTwoCharacters failed');
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

export function getTopCharacterList ({commit}) {
    $.ajax({ url: 'http://localhost:3000/api/characters/top' })
    .done(_data => {
      // this.actions.getTwoCharactersSuccess(data);
      // console.log(data);

        commit('setTopCharacterList', _data)
    })
    .fail(jqXhr => {
      // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
      console.log('data');
    });
}

export function sendVote ({commit}, data) {
    // $.ajax({ url: 'http://localhost:3000/api/characters', type: 'PUT', data: {winner: data.winner, loser: data.loser}})
    // .done(_data => {
    //   // this.actions.getTwoCharactersSuccess(data);
    //   // console.log(data);

    //   getTwoCharacters()
    // })
    // .fail(jqXhr => {
    //   // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
    //   console.log('sendVote fail');
    // });

    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/api/characters' ,
      data: { winner: data.winner, loser: data.loser }
      // data: `winner=${data.winnder}&loser=${data.loser}`
    })
      .done(() => {
        console.log('投票成功');
        getTwoCharacters({commit})
        // this.actions.getTwoCharacters();
      })
      .fail((jqXhr) => {
        // this.actions.voteFail(jqXhr.responseJSON.message);
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
