import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import emoji from '../components/Emoji'
import Home from '../components/Home';
import Character from '../components/Character';
import ItemList from '../components/ItemList';
import HeroList from '../components/HeroList';
import MingList from '../components/MingList';
import SummonerList from '../components/SummonerList';

import test from '../components/test';


Vue.use(Router)

export default [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: emoji
    },
    {
      path: '/item',
      name: 'item',
      component: ItemList
    },
    {
      path: '/ming',
      name: 'ming',
      component: MingList
    },
    {
      path: '/hero',
      name: 'hero',
      component: HeroList
    },
    {
      path: '/summoner',
      name: 'summoner',
      component: SummonerList
    },
    {
      path: '/character/:id',
      name: 'character',
      component: Character
    },
    {
      path: '/test/:id',
      name: 'test',
      component: test
    }
  ]

