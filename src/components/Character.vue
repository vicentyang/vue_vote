<template>
    <div class='container'>
        <div class='profile-img'>
            <a ref='magnificPopup' class='magnific-popup' :href="'https://image.eveonline.com/Character/' + this.state.characterId + '_1024.jpg'">
                <img :src="'https://image.eveonline.com/Character/' + this.state.characterId + '_256.jpg'" />
            </a>
        </div>
        <div class='profile-info clearfix'>
            <h2>
                <strong>{{this.state.name}}</strong>
            </h2>
            <h4 class='lead'>Race:
                <strong>{{this.state.race}}</strong>
            </h4>
            <h4 class='lead'>Bloodline:
                <strong>{{this.state.bloodline}}</strong>
            </h4>
            <h4 class='lead'>Gender:
                <strong>{{this.state.gender}}</strong>
            </h4>
            <button class='btn btn-transparent' </button>
        </div>
        <div class='profile-stats clearfix'>
            <ul>
                <li>
                    <span class='stats-number'>{{this.state.winLossRatio}}</span>Winning Percentage</li>
                <li>
                    <span class='stats-number'>{{this.state.wins}}</span> Wins</li>
                <li>
                    <span class='stats-number'>{{this.state.losses}}</span> Losses</li>
            </ul>
        </div>
    </div>
</template>

<<script>
export default {
  data() {
      return {

      }
  },
    methods: {

    }
//   methou
}
</script>

