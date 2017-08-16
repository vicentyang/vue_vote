/*
* @Author: vicent
* @Date:   2017-08-10 14:25:18
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-16 10:08:37
*/

'use strict';

const mutations = {
    setCharacterList (state, value) {
        state.characterList = value
    },

    setCharacterDetail (state, value) {
        state.characterDetail = value
    },

    setTopCharacterList (state, value) {
        state.topCharacterList = value
    }
}

export default mutations
