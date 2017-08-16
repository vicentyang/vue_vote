<template>
    <div class='container'>
        <div class='profile-img'>
            <a ref='magnificPopup' class='magnific-popup' :href="'https://image.eveonline.com/Character/' + characterDetail.characterId + '_1024.jpg'">
                <img :src="'https://image.eveonline.com/Character/' + characterDetail.characterId + '_256.jpg'" />
            </a>
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
        <div class='profile-stats clearfix'>
            <ul>
                <li>
                    <span class='stats-number'>{{characterDetail.winLossRatio}}</span>Winning Percentage</li>
                <li>
                    <span class='stats-number'>{{characterDetail.wins}}</span> Wins</li>
                <li>
                    <span class='stats-number'>{{characterDetail.losses}}</span> Losses</li>
            </ul>
        </div>
    </div>
</template>

<<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
      return {
        // characterDetail:
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
        ])
    },
    updated() {
        console.log('updated');
    },
    mounted: function() {
        this.getCharacterDetail(this.$route.params.id)
        console.log('data', this.$route.params.id);
        document.body.background = './static/heroImg/' +  Math.floor(Math.random() * 200) + '.jpg'
    },
    beforeDestroy() {
        document.body.background = ''
    }
//   methou
}
</script>

