<template>
<div>
                        <!-- {leaderboardCharacters} -->
    <div :class="'thumbnail border border-' + index" v-for="(ming, index) in mingList">
        <h3>{{mingType[index]}}</h3>
        <ul class="list-inline  fadeInUp animated" v-for= "(value, _index) in ming">
            <ul class='list-inline'>
                <!-- <h3>{{_index}}</h3> -->
                <li :title="_value.ming_des.replace('<p>', '').replace('</p>', '')" class="list-inline" v-for="_value in value">

                    <img class='' :src="'./static/ming/' + _value.ming_id + '.png'" />
                    <ul class='list-inline'>
                        <li>{{_value.ming_name}}</li>
                    </ul>
                    <!-- <span>{{}}</span> -->
                </li>
            </ul>
        </ul>
        <!-- <span>{{ming.ming_type}}</span> -->
        <!-- <li><strong>111</strong></li> -->
        <!-- li 标签有问题么  -->
        <!-- <li>111</li> -->
    </div>
</div>
</template>

<script>
import mingList from '../../static/data/ming.json'
export default {
    data() {
        return {
            mingList: {},
            mingType: {
                'red': '红色饰品',
                'yellow': '蓝色饰品',
                'blue': ' 绿色饰品',
            }

        }
    },
    mounted() {
        let _ming = {}
        this.mingList = _ming
        mingList.data.forEach((value, index) => {
            if(!_ming[value.ming_type]) {
                _ming[value.ming_type] = {}
            }
            if(!_ming[value.ming_type][value.ming_grade]) {
                _ming[value.ming_type][value.ming_grade] = []
            }
            _ming[value.ming_type][value.ming_grade].push(value)
        }, this);
        console.log('mingList', mingList)
    }

}
</script>

<style scoped>
li {
    text-align: center
}
.border-red {
    border:2px #f8713f dotted
}
.border-yellow {
    border:2px #91e2eb dotted
}
.border-blue {
    border:2px #8be53f dotted
}
</style>
