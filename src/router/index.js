import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import emoji from '../components/Emoji'
import Home from '../components/Home';
import Character from '../components/Character';


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
      path: '/character/:id',
      name: 'character',
      component: Character
    }
  ]

