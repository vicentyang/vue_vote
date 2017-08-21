<template>
    <ul class='list-inline'>
        <!-- {leaderboardCharacters} -->
        <li v-for="(hero, index) in heroList.data">
            <!-- <span>{{ming.ming_type}}</span> -->
            <div class='thumbnail fadeInUp animated'>
             <img class='thumb-md' :src="'./static/hero/' + hero.ename + '.jpg'" />
            <ul class='list-inline'>
                <li> <strong>{{hero.cname}}</strong> </li>
            </ul>

                    </div>
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
