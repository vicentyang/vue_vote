/*
 * @Author: vicent
 * @Date:   2017-08-09 16:54:43
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-24 09:25:00
 */

// 'use strict';
import heroList from '../../static/data/heroList.json'

// 解构传参
export function getTwoCharacters({commit}) {
  // debugger
  var _data = [];
  var randomHero = function() {
    var index = Math.floor(Math.random() * heroList.data.length)
    checkoutExitHero()
    _data.push(heroList.data[index])
  };

  var checkoutExitHero = function() {

  }
  for(var i = 0; i < 2;  i++) {
    randomHero()
  }

  // var a = 0
  // console.log('heroList', _data);

  commit('setCharacterList', _data)
  // $.ajax({ url: 'http://localhost:3000/api/characters' })
  //   .done(_data => {
  //     // this.actions.getTwoCharactersSuccess(data);
  //     // console.log(data);

  //       commit('setCharacterList', _data)
  //   })
  //   .fail(jqXhr => {
  //     // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
  //     console.log('getTwoCharacters failed');
  //   });
}

export function getCharacterDetail({commit}, characterId) {
  var _data = {}
  commit('setCharacterDetail', _data)
  // $.ajax({ url: 'http://localhost:3000/api/characters/' + characterId })
  //   .done(_data => {
  //     // this.actions.getTwoCharactersSuccess(data);
  //     // console.log(data);

  //       commit('setCharacterDetail', _data)
  //   })
  //   .fail(jqXhr => {
  //     // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
  //     console.log('data');
  //   });
}

export function getTopCharacterList ({commit}) {
    var data = {}

    var _data = [];
    var randomHero = function() {
      var index = Math.floor(Math.random() * heroList.data.length)
      // checkoutExitHero()
      _data.push(heroList.data[index])
    };

    for(var i = 0; i < 5;  i++) {
      randomHero()
    }
    commit('setTopCharacterList', _data)
    // $.ajax({ url: 'http://localhost:3000/api/characters/top' })
    // .done(_data => {
    //   // this.actions.getTwoCharactersSuccess(data);
    //   // console.log(data);

    //     commit('setTopCharacterList', _data)
    // })
    // .fail(jqXhr => {
    //   // this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
    //   console.log('data');
    // });
}

export function sendVote ({commit}, data) {
  console.log('投票成功');
  getTwoCharacters({commit})

    // $.ajax({
    //   type: 'PUT',
    //   url: 'http://localhost:3000/api/characters' ,
    //   data: { winner: data.winner, loser: data.loser }
    //   // data: `winner=${data.winnder}&loser=${data.loser}`
    // })
    //   .done(() => {
    //     console.log('投票成功');
    //     getTwoCharacters({commit})
    //     // this.actions.getTwoCharacters();
    //   })
    //   .fail((jqXhr) => {
    //     // this.actions.voteFail(jqXhr.responseJSON.message);
    //   });
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
