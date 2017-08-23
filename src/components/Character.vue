<template>


        <div class='container'>
            <div class='profile-img' text-align = 'center'>
                <!-- <a ref='magnificPopup' class='magnific-popup' :href="'https://image.eveonline.com/Character/' + characterDetail.characterId + '_1024.jpg'"> -->
                <!-- <img :src="'https://image.eveonline.com/Character/' + characterDetail.characterId + '_256.jpg'" /> -->
                <img class="fixImg" :src="'./static/hero/' + ename + '.jpg'" />
                </a>
                <!-- {{ename}} -->
            </div>
            <div class='profile-info clearfix'>
                <h2>
                    <strong>{{characterDetail.name}}</strong>
                </h2>
                <h4 class='lead'>Race:
                    <strong>{{characterDetail.race}}</strong>
                </h4>
                <h4 class='lead'>Bloodline:
                    <strong>{{characterDetail.bloodline}}</strong>
                </h4>
                <h4 class='lead'>Gender:
                    <strong>{{characterDetail.gender}}</strong>
                </h4>
                <button class='btn btn-transparent' </button>
            </div>
            <div class='fix-stats profile-stats clearfix'>
                <ul>
                    <li>
                        <span class='stats-number'>{{(characterDetail.wins / (characterDetail.wins + characterDetail.losses)).toFixed(2)}}</span>Winning Percentage</li>
                    <li>
                        <span class='stats-number'>{{characterDetail.wins}}</span> Wins</li>
                    <li>
                        <span class='stats-number'>{{characterDetail.losses}}</span> Losses</li>
                </ul>
            </div>
        </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import heroList from '../../static/data/heroList.json'

export default {
  data() {
      return {
        ename: 1,
        heroList
      }
  },
  computed: {
      ...mapGetters([
          'characterDetail'
      ])
  },
    methods: {
        ...mapActions([
            'getCharacterDetail'
        ]),

        freshData() {

            this.getCharacterDetail(this.$route.params.id)
            this.ename = this.$route.query.ename
            // console.log('$route', this.$route);
            // document.getElementById('character-bg').style.backgroundImage = "url('./static/heroImg/' +  Math.floor(Math.random() * 200) + '.jpg')"
            // console.dir(document.getElementById('character-bg'))
            var img = './static/heroImg/' +  this.ename + '-bigskin-1.jpg'
            document.body.background = img
            document.body.style.backgroundSize = "100%"
        },
    },
    updated() {
        console.log('updated');
    },
    mounted: function() {
        this.freshData()
        this.heroList = heroList
    },
    beforeDestroy() {
        document.body.background = ''
        // document

    },
    beforeRouteUpdate(to, from, next) {
        next()
        this.freshData()
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
    }
//   methou
}
</script>

<style scoped>
/*#character-bg {
    background-image: url('')
}*/
.fixImg {
    /* width: 100%;
    height: 100%; */
        border-radius: 100px;

    /* border: 1px border-style red; */
}
.container {
    color:black;
}
.fix-stats {
    background-color: rgba(12, 12, 12, 0.44)
}
</style>
