<template>
<div>
    <div class="heroGroup" v-for="(value, index) in heroList">
        <h3>{{heroType[index]}}</h3>
        <ul  class='list-inline'>
            <li v-for="(hero, _index) in value">
                <router-link :to="{name: 'character', params:{id: 93206983}, query: {ename:hero.ename }}">

                <!-- <span>{{ming.ming_type}}</span> -->
                <div :class="'fix-hreoitem fadeInUp animated hero' + index">
                    <img class='thumb-md' :src="'./static/hero/' + hero.ename + '.jpg'" />
                    <ul class='list-inline'>
                        <li> <strong>{{hero.cname}}</strong> </li>
                    </ul>

                </div>
                </router-link>
                <!-- li 标签有问题么  -->
                <!-- <li>111</li> -->
            </li>
        </ul>
    </div>
</div>
        <!-- {leaderboardCharacters} -->
</template>

<script>
import heroList from '../../static/data/heroList.json'
export default {
    data() {
        return {
            heroList: {},
            heroType: {}
        }
    },
    methods: {
        freshData(params = {}) {
            let _heroList = {}

        // this.heroList = heroList
            heroList.data.forEach((value, index) => {
                if (!_heroList[value.hero_type]) {
                    _heroList[value.hero_type] = [];
                }
                _heroList[value.hero_type].push(value)
            });
            // console.log('heroList', _heroList)
            this.heroList = params.heroType? {[params.heroType]: _heroList[params.heroType]} : _heroList
            this.heroType = heroList.typeName
            console.log('this.heroList', this.heroList);
        }
    },
    beforeRouteUpdate(to, from, next) {
    // this.freshData()
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        this.freshData(to.params)
        next()
    },
    mounted() {
        console.log('data');
        this.freshData(this.$route.params)
    }

}
</script>

<style scoped>
.heroGroup {
    text-align: left;

    padding-left: 50px;
}
li {
    text-align: center
}
h3 {
    /* border-bottom: 3px dashed black ; */

    text-align: left;
    /* margin-left: 50px; */
}
.fix-hreoitem {
    margin-bottom: 7px;
}
.fix-hreoitem:hover {
    /* margin-bottom: 7px; */
    color:#00bcd4;
    cursor: pointer;
}
.hero1 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #ff5722;
}
.hero2 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #00bcd4;
}
.hero3 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #9c27b0;
}
.hero4 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #8bc34a;
}
.hero5 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #ffeb3b;
}
.hero6 {
    border-radius: 5px 0 5px 0;
    border: 2px dotted #e91e63;
}
</style>
