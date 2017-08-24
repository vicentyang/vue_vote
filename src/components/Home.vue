<template>
    <div class='container'>
        <h3 class='text-center'>Click on the portrait. Select your favorite.</h3>
        <div class='row'>
            <div v-for="(character, index) in characterList" :class="index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'">
                <div class='fix-heroitem fadeInUp animated'>
                       <!-- <img @click = "vote(character)" :src="'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg'" /> -->

                     <img class='fixHW border' @click = "vote(character)" :src="'./static/hero/' + character.ename + '.jpg'" />

                    <div class='caption text-center'>
                        <ul class='list-inline'>
                            <li>
                                <strong>定位:</strong> {{heroType[character.hero_type]}}</li>
                            <li>
                                <strong>厉害一点的名字:</strong> {{character.title}}</li>
                        </ul>
                        <h4 class="text-center">
                            <!-- <router-link to="/emoji">
                                <strong>{{character.name}}</strong>

                            </router-link> -->
                            <!-- <router-link :to="'/character/' + character.characterId">
                                <strong>{{character.name}}</strong>

                            </router-link> -->
                            <router-link :to="{name: 'character', params:{id: character.characterId}, query: {ename:character.ename }}">
                                <strong>{{character.cname}}</strong>

                            </router-link>
                        </h4>
                    </div>
                </div>
                <!-- <span>aaa</span> -->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import {first, without, findWhere} from 'underscore';
import { mapGetters, mapActions } from 'vuex';
import heroList from '../../static/data/heroList.json'

export default {

    // name:'Home',
    props: [

    ],

    data: function () {
        return {
             heroType: {}
            // characterList: this.$store.getters.characterList
        }
    },

    computed: {
        ...mapGetters([
            'characterList',
        ])
    },

    methods: {
        ...mapActions([
            'getTwoCharacters',
            'sendVote'
        ]),
        showHome() {
            console.log('Home.vue>>>24', 'showHome');
        },
        showDetail() {
            console.log('showDetail');
        },
        vote(character) {

            console.log('vote', character);
            var winner = character.characterId;
            var loser = first(without(this.characterList, findWhere(this.characterList, { characterId: winner }))).characterId;
            // HomeActions.vote(winner, loser);
            this.sendVote({winner, loser})

        }
    },
    beforeDestroy() {
        document.body.background = ''
        // document

    },
    mounted: function () {

        this.getTwoCharacters()

        console.log('characterList', this.characterList);
        this.heroType = heroList.typeName

         var img = './static/heroImg/83.jpg'
            document.body.background = img
            document.body.style.backgroundSize = "100%"

    }
}
</script>

<style scoped>
.fixHW {
    width: 150px;
    height: 150px;
}
.text-center, a{
    color: white
}
/* a {
    color: wheat
} */
.border {
    border-radius: 150px;
}
.fix-heroitem {
    background-color: rgba(12, 12, 12, 0.44)
}
.fix-heroitem:hover {
    cursor: pointer;
    color:blue
}
</style>

