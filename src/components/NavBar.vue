<template>
    <nav class ="navbar navbar-default navbar-static-top">
        <div class ="navbar-header">
          <button type="button" class ="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span class ="sr-only">Toggle navigation</span>
            <span class ="icon-bar"></span>
            <span class ="icon-bar"></span>
            <span class ="icon-bar"></span>
          </button>
          <a v-link="'/'" class ="navbar-brand">
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
            <span class ="badge badge-up badge-danger">110</span>
          </a>
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
            <li><a v-link="'/'">Home</a></li>
            <li><a v-link="'/stats'">Stats</a></li>
            <li class ="dropdown">
              <a href="#" class ="dropdown-toggle" data-toggle="dropdown">Top 100 <span class ="caret"></span></a>
              <ul class ="dropdown-menu">
                <li><a v-link="'/top'">Top Overall</a></li>
                <li class ="dropdown-submenu">
                  <a v-link="'/top/caldari'">Caldari</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/top/caldari/achura'">Achura</a></li>
                    <li><a v-link="'/top/caldari/civire'">Civire</a></li>
                    <li><a v-link="'/top/caldari/deteis'">Deteis</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/top/gallente'">Gallente</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/top/gallente/gallente'">Gallente</a></li>
                    <li><a v-link="'/top/gallente/intaki'">Intaki</a></li>
                    <li><a v-link="'/top/gallente/jin-mei'">Jin-Mei</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/top/minmatar'">Minmatar</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/top/minmatar/brutor'">Brutor</a></li>
                    <li><a v-link="'/top/minmatar/sebiestor'">Sebiestor</a></li>
                    <li><a v-link="'/top/minmatar/vherokior'">Vherokior</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/top/amarr'">Amarr</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/top/amarr/amarr'">Amarr</a></li>
                    <li><a v-link="'/top/amarr/ni-kunni'">Ni-Kunni</a></li>
                    <li><a v-link="'/top/amarr/khanid'">Khanid</a></li>
                  </ul>
                </li>
                <li class ="divider"></li>
                <li><a v-link="'/shame'">Hall of Shame</a></li>
              </ul>
            </li>
            <li class ="dropdown">
              <a href="#" class ="dropdown-toggle" data-toggle="dropdown">Female <span class ="caret"></span></a>
              <ul class ="dropdown-menu">
                <li><a v-link="'/female'">All</a></li>
                <li class ="dropdown-submenu">
                  <a v-link="'/female/caldari'">Caldari</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/female/caldari/achura'">Achura</a></li>
                    <li><a v-link="'/female/caldari/civire/'">Civire</a></li>
                    <li><a v-link="'/female/caldari/deteis'">Deteis</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/female/gallente'">Gallente</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/female/gallente/gallente'">Gallente</a></li>
                    <li><a v-link="'/female/gallente/intaki'">Intaki</a></li>
                    <li><a v-link="'/female/gallente/jin-mei'">Jin-Mei</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/female/minmatar'">Minmatar</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/female/minmatar/brutor'">Brutor</a></li>
                    <li><a v-link="'/female/minmatar/sebiestor'">Sebiestor</a></li>
                    <li><a v-link="'/female/minmatar/vherokior'">Vherokior</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/female/amarr'">Amarr</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/female/amarr/amarr'">Amarr</a></li>
                    <li><a v-link="'/female/amarr/ni-kunni'">Ni-Kunni</a></li>
                    <li><a v-link="'/female/amarr/khanid'">Khanid</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class ="dropdown">
              <a href="#" class ="dropdown-toggle" data-toggle="dropdown">Male <span class ="caret"></span></a>
              <ul class ="dropdown-menu">
                <li><a v-link="'/male'">All</a></li>
                <li class ="dropdown-submenu">
                  <a v-link="'/male/caldari'">Caldari</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/male/caldari/achura'">Achura</a></li>
                    <li><a v-link="'/male/caldari/civire'">Civire</a></li>
                    <li><a v-link="'/male/caldari/deteis'">Deteis</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/male/gallente'">Gallente</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/male/gallente/gallente'">Gallente</a></li>
                    <li><a v-link="'/male/gallente/intaki'">Intaki</a></li>
                    <li><a v-link="'/male/gallente/jin-mei'">Jin-Mei</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/male/minmatar'">Minmatar</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/male/minmatar/brutor'">Brutor</a></li>
                    <li><a v-link="'/male/minmatar/sebiestor'">Sebiestor</a></li>
                    <li><a v-link="'/male/minmatar/vherokior'">Vherokior</a></li>
                  </ul>
                </li>
                <li class ="dropdown-submenu">
                  <a v-link="'/male/amarr'">Amarr</a>
                  <ul class ="dropdown-menu">
                    <li><a v-link="'/male/amarr/amarr'">Amarr</a></li>
                    <li><a v-link="'/male/amarr/ni-kunni'">Ni-Kunni</a></li>
                    <li><a v-link="'/male/amarr/khanid'">Khanid</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a v-link="'/add'">Add</a></li>
          </ul>
        </div>
      </nav>
</template>
<script>
export default {
    // name: "Emoji", // name 不一定需要
    data () {
        return {

        }
    }

}
</script>
<style>

</style>


