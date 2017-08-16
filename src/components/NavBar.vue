<template>
    <nav class ="navbar navbar-default navbar-static-top">
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
            NEF
            <span class ="badge badge-up badge-danger">{{onLineUsers}}</span>
          </router-link>
        </div>
        <div id="navbar" class ="navbar-collapse collapse">
          <form ref="searchForm" class ="navbar-form navbar-left animated" onSubmit={this.handleSubmit.bind(this)}>
            <div class ="input-group">
              <input type="text" class ="form-control"/>
              <span class ="input-group-btn">
                <button class ="btn btn-default"><span class ="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </form>
          <ul class ="nav navbar-nav">
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/stats'>Stats</router-link></li>
            <li class ="dropdown">
              <router-link to="#" class ="dropdown-toggle" data-toggle="dropdown">Top 100 <span class ="caret"></span></router-link>
              <ul class ="dropdown-menu">
                <li><router-link to='/top'>Top Overall</router-link></li>
                <li class ="dropdown-submenu">
                  <router-link to='/top/caldari'>Caldari</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/caldari/router-linkchura'>Achura</router-link></li>
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
                  <router-link to='/top/router-linkmarr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/top/router-linkmarr/router-linkmarr'>Amarr</router-link></li>
                    <li><router-link to='/top/router-linkmarr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/top/router-linkmarr/khanid'>Khanid</router-link></li>
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
                    <li><router-link to='/female/caldari/router-linkchura'>Achura</router-link></li>
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
                  <router-link to='/female/router-linkmarr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/female/router-linkmarr/router-linkmarr'>Amarr</router-link></li>
                    <li><router-link to='/female/router-linkmarr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/female/router-linkmarr/khanid'>Khanid</router-link></li>
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
                    <li><router-link to='/male/caldari/router-linkchura'>Achura</router-link></li>
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
                  <router-link to='/male/router-linkmarr'>Amarr</router-link>
                  <ul class ="dropdown-menu">
                    <li><router-link to='/male/router-linkmarr/router-linkmarr'>Amarr</router-link></li>
                    <li><router-link to='/male/router-linkmarr/ni-kunni'>Ni-Kunni</router-link></li>
                    <li><router-link to='/male/router-linkmarr/khanid'>Khanid</router-link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><router-link to='/router-linkdd'>Add</router-link></li>
            <li><router-link to='/emoji'>Eggs</router-link></li>
          </ul>
        </div>
      </nav>
</template>
<script>
import * as io from 'socket.io-client'
// var io = require('socket.io');


export default {
    // name: "Emoji", // name 不一定需要
    data () {
        return {
            onLineUsers: 0,
        }
    },
    mounted() {
      var socket = io.connect('ws://localhost:3000');
      socket.on('onlineUsers', (data) => {
          // NavbarActions.updateOnlineUsers(data);
          this.onLineUsers = data.onlineUsers
      });
      console.log('nav mount');
    }

}
</script>
<style>

</style>


