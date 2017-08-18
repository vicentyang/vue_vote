<template>
    <ul class='list-inline'>
        <!-- {leaderboardCharacters} -->
        <li v-for="(hero, index) in heroList.data">
             <img class='thumb-md' :src="'./static/hero/' + hero.ename + '.jpg'" />
            <!-- <span>{{ming.ming_type}}</span> -->
            <li>
                <strong>111</strong>
            </li>
            <!-- li 标签有问题么  -->
            <!-- <li>111</li> -->
        </li>
    </ul>
</template>

<script>
import heroList from '../../static/data/heroList.json'
export default {
    data() {
        return {
            heroList: {}
        }
    },
    mounted() {
        this.heroList = heroList
        console.log('heroList', heroList)
    }

}
</script>

<style>

</style>
