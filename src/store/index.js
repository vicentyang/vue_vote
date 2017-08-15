/*
* @Author: vicent
* @Date:   2017-08-09 17:13:35
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-10 14:46:22
*/

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './states'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
