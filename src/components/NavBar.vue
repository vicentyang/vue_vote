<template>
    <nav class ="navbar navbar-default navbar-static-top fix-nav">
        <div class ="navbar-header">
          <button type="button" class ="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span class ="sr-only">Toggle navigation</span>
            <span class ="icon-bar"></span>
            <span class ="icon-bar"></span>
            <span class ="icon-bar"></span>
          </button>
          <router-link to='/' class ="navbar-brand">
            <span class ="triangles animated ">
              <div class ="tri invert"></div>
              <div class ="tri invert"></div>
              <div class ="tri"></div>
              <div class ="tri invert"></div>
              <div class ="tri invert"></div>
              <div class ="tri"></div>
              <div class ="tri invert"></div>
              <div class ="tri"></div>
              <div class ="tri invert"></div>
            </span>
            药
            <span class ="badge badge-up badge-danger">{{onLineUsers}}</span>
          </router-link>
        </div>
        <div id="navbar" class ="navbar-collapse collapse">
          <form ref="searchForm" class ="navbar-form navbar-left animated" onSubmit={this.handleSubmit.bind(this)}>
            <div class ="input-group">
              <input type="text" placeholder="不用试了, 还没完成" class ="form-control"/>
              <span class ="input-group-btn">
                <button class ="btn btn-default"><span class ="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </form>
          <ul class ="nav navbar-nav">
            <li><router-link to='/'>水晶</router-link></li>
            <li><router-link to='/summoner'>技能</router-link></li>
            <li><router-link to='/item'>装备</router-link></li>
            <li><router-link to='/ming'>铭文</router-link></li>
            <li class ="dropdown">
              <router-link to="" class ="dropdown-toggle" data-toggle="dropdown">英雄 <span class ="caret"></span></router-link>
              <ul class ="dropdown-menu">
                <li><router-link to="/hero">ALL</router-link></li>
                <li v-for="(value, index) in heroType"><router-link :to="'/hero/' + index">{{value}}</router-link></li>
              </ul>

              <!-- <router-link to='/hero'>英雄</router-link> -->
            </li>
            <!-- <li><router-link to='/stats'>Stats</router-link></li> -->
            <!-- <li class ="dropdown">
              <router-link to="#" class ="dropdown-toggle" data-toggle="dropdown">Top 100 <span class ="caret"></span></router-link>
              <ul class ="dropdown-menu">
                <li><router-link to='/top'>Top Overall</router-link></li>
                <li class ="dropdown-submenu">
                  <router-link to='/top/caldari'>Caldari</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/caldari/chura'>Achura</router-link></li>
                    <li><router-link to='/top/caldari/civire'>Civire</router-link></li>
                    <li><router-link to='/top/caldari/deteis'>Deteis</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/top/gallente'>Gallente</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/gallente/gallente'>Gallente</router-link></li>
                    <li><router-link to='/top/gallente/intaki'>Intaki</router-link></li>
                    <li><router-link to='/top/gallente/jin-mei'>Jin-Mei</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/top/minmatar'>Minmatar</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/minmatar/brutor'>Brutor</router-link></li>
                    <li><router-link to='/top/minmatar/sebiestor'>Sebiestor</router-link></li>
                    <li><router-link to='/top/minmatar/vherokior'>Vherokior</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/top/marr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/marr/marr'>Amarr</router-link></li>
                    <li><router-link to='/top/marr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/top/marr/khanid'>Khanid</router-link></li>
                  </ul>
                </li>
                <li class ="divider"></li>
                <li><router-link to='/shame'>Hall of Shame</router-link></li>
              </ul>
            </li>
            <li class ="dropdown">
              <router-link to="#" class ="dropdown-toggle" data-toggle="dropdown">Female <span class ="caret"></span></router-link>
              <ul class ="dropdown-menu">
                <li><router-link to='/female'>All</router-link></li>
                <li class ="dropdown-submenu">
                  <router-link to='/female/caldari'>Caldari</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/female/caldari/chura'>Achura</router-link></li>
                    <li><router-link to='/female/caldari/civire/'>Civire</router-link></li>
                    <li><router-link to='/female/caldari/deteis'>Deteis</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/female/gallente'>Gallente</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/female/gallente/gallente'>Gallente</router-link></li>
                    <li><router-link to='/female/gallente/intaki'>Intaki</router-link></li>
                    <li><router-link to='/female/gallente/jin-mei'>Jin-Mei</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/female/minmatar'>Minmatar</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/female/minmatar/brutor'>Brutor</router-link></li>
                    <li><router-link to='/female/minmatar/sebiestor'>Sebiestor</router-link></li>
                    <li><router-link to='/female/minmatar/vherokior'>Vherokior</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/female/marr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/female/marr/marr'>Amarr</router-link></li>
                    <li><router-link to='/female/marr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/female/marr/khanid'>Khanid</router-link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class ="dropdown">
              <router-link to="#" class ="dropdown-toggle" data-toggle="dropdown">Male <span class ="caret"></span></router-link>
              <ul class ="dropdown-menu">
                <li><router-link to='/male'>All</router-link></li>
                <li class ="dropdown-submenu">
                  <router-link to='/male/caldari'>Caldari</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/male/caldari/chura'>Achura</router-link></li>
                    <li><router-link to='/male/caldari/civire'>Civire</router-link></li>
                    <li><router-link to='/male/caldari/deteis'>Deteis</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/male/gallente'>Gallente</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/male/gallente/gallente'>Gallente</router-link></li>
                    <li><router-link to='/male/gallente/intaki'>Intaki</router-link></li>
                    <li><router-link to='/male/gallente/jin-mei'>Jin-Mei</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/male/minmatar'>Minmatar</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/male/minmatar/brutor'>Brutor</router-link></li>
                    <li><router-link to='/male/minmatar/sebiestor'>Sebiestor</router-link></li>
                    <li><router-link to='/male/minmatar/vherokior'>Vherokior</router-link></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <router-link to='/male/marr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/male/marr/marr'>Amarr</router-link></li>
                    <li><router-link to='/male/marr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/male/marr/khanid'>Khanid</router-link></li>
                  </ul>
                </li>
              </ul>
            </li> -->

            <!-- <li><router-link to='/add'>Add</router-link></li> -->
            <li><router-link to='/emoji'>Eggs</router-link></li>
          </ul>
        </div>
      </nav>
</template>
<script>
import * as io from 'socket.io-client'
import heroList from '../../static/data/heroList.json'
// var io = require('socket.io');


export default {
    // name: "Emoji", // name 不一定需要
    data () {
        return {
            onLineUsers: 0,
            heroType : {},
        }
    },
    mounted() {
      var socket = io.connect('ws://localhost:3000');
      socket.on('onlineUsers', (data) => {
          // NavbarActions.updateOnlineUsers(data);
          this.onLineUsers = data.onlineUsers
      });
      console.log('nav mount');

      this.heroType = heroList.typeName
    }

}
</script>
<style scoped>
  /* .fix-nav {
    background-color: #2c3e50
  } */
</style>


