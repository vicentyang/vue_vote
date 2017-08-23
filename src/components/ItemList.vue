<template>
    <div class="itemGroup">
        <!-- {leaderboardCharacters} -->
        <!-- <div>
            <span class="demo--label" v-for="(value, _index) in itemList" >
                <input type="radio" :id="_index" name="radio-1-set" class="regular-radio"  /><label :for="_index"></label>
                <span class="radio-fix">{{_index}}</span>
            </span>
        </div> -->
            <!-- <span>
                 <input :id="_index" class="regular-radio" name="Fruit" type="radio" value="" /><label :for="_index">法术</label>
            </span> -->
         <!-- <ul class="types-ms">
            <li v-for="(value, _index) in itemList" class="" data-type="0">
                <span class="ms-radio"><i class="i"></i></span>
                <label>全部</label>
            </li>
        </ul> -->
        <div v-for="(value, _index) in itemList">

            <h3>{{itemType[_index]}}</h3>

            <ul class='list-inline'>
                <li class="fadeInUp animated" v-for="(item, index) in value">
                    <div :title="item.des1.replace('<p>', '').replace('</p>', '').replace(/<br>/, '\n')" class='fadeInUp fix-posotion'>
                        <img class='border' :src="'./static/item/' + item.item_id + '.jpg'" />
                        <div class="flow-text">
                            <h6>${{item.total_price}}</h6>
                        </div>

                    </div>
                    <h5>{{item.item_name}}</h5>

                </li>
            </ul>
        </div>
        <!-- <div class="heroGroup" v-for="(value, _index) in itemList">
            <h3>{{_index}}</h3>
            <ul  class='list-inline'>
                <li v-for="(item, index) in value">
                    <div :class="' fadeInUp animated hero' + index">
                        <img class='border' :src="'./static/item/' + item.item_id + '.jpg'" />
                        <ul class='list-inline'>
                            <li> <strong>{{item.item_name}}</strong> </li>
                        </ul>

                    </div>
                </li>
            </div>
        </div> -->
    </div>
</template>

<script>
import itemList from '../../static/data/item.json'
export default {
    data() {
        return {
            itemList: {},
            itemType: ['', '物理攻击', '法术', '魔抗|生命|护甲', '移动速度', '打野', '', '辅助']
        }
    },
    mounted() {

        this.itemList = itemList
        let _itemList = {}

        itemList.data.sort((a, b) => {
            return a.total_price - b.total_price;
        });

        itemList.data.forEach((value, index) => {
            if (!_itemList[value.item_type]) {
                _itemList[value.item_type] = []
            }
            _itemList[value.item_type].push(value);
        }, this);
        // console.log('_itemListdata', _itemList);
        this.itemList = _itemList;

    }

}
</script>

<style scoped>
.border {
    border-radius: 50px;
    border: 2px solid rebeccapurple;
}
h3 {
    /* border-bottom: 3px dashed black ; */

    text-align: left;
    /* margin-left: 50px; */
}
h5 {
    text-align: center;
}

h6 {
    /* background-color: black; */
    position: absolute;
    bottom: 10px;
    color: wheat;
    /* text-align: center; */
    text-align: center;
    width: 100%;
    margin-bottom: 0;
}
.itemGroup {
    text-align: left;

    padding-left: 50px;
}


.fix-posotion {
    position: relative
}

.flow-text {
    border-radius: 0 0 50px 50px;
    position: absolute;
    /* text-align: bottom; */
    vertical-align: bottom;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(10, 10, 10, 0.3);
}


.demo--label{margin-left: 50px}
.demo--radio{display:none}
.demo--radioInput{background-color:#fff;border:1px solid rgba(0,0,0,0.15);border-radius:100%;display:inline-block;height:16px;margin-right:10px;margin-top:-1px;vertical-align:middle;width:16px;line-height:1}
.demo--radio:checked + .demo--radioInput:after{background-color:#57ad68;border-radius:100%;content:"";display:inline-block;height:12px;margin:2px;width:12px}


.regular-radio {
	display: none;
}

.regular-radio + label {
	-webkit-appearance: none;
	background-color: #fafafa;
	border: 1px solid #cacece;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
	padding: 9px;
	border-radius: 50px;
	display: inline-block;
	position: relative;
}

.regular-radio:checked + label:after {
	content: ' ';
	width: 12px;
	height: 12px;
	border-radius: 50px;
	position: absolute;
	top: 3px;
	background: #99a1a7;
	box-shadow: inset 0px 0px 10px rgba(0,0,0,0.3);
	text-shadow: 0px;
	left: 3px;
	font-size: 32px;
}

.regular-radio:checked + label {
	background-color: #e9ecee;
	color: #99a1a7;
	border: 1px solid #adb8c0;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1), inset 0px 0px 10px rgba(0,0,0,0.1);
}

.regular-radio + label:active, .regular-radio:checked + label:active {
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}

.ms-radio .i {
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    background-color: none;
    border-radius: 50px;
}

.ms-radio {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 7px;
    border: 1px solid #B3B3B3;
    border-radius: 50px;
    position: relative;
}

.types-ms li {
    float: left;
    padding-left: 15px;
    min-width: 90px;
    font-size: 14px;
    cursor: pointer;
}
.radio-fix {
    position: absolute;
}
/* li {
    display: list-item;
    text-align: -webkit-match-parent;
} */
</style>
