<template>
<div>
    123
</div>
</template>

<script>
import bus from '../common/bus';
import axios from '../../request/http.js'
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            config: {
                bavalue: '', //显示的值、跳转的地址
                pioneervalue: '', //显示的值、跳转的地址
                membervalue: '', //显示的值、跳转的地址
                imagePath: require('../../assets/img/logo.jpg') //中间logo的地址
            },
            todydata: {},
            AngellBox: '',
            debutanteBox: '',
            memberBox: ''
        }
    },
    components: {
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    mounted() {
    },
    activated() {},
    deactivated() {
        window.removeEventListener('resize', this.renderChart);
        bus.$off('collapse', this.handleBus);
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-card {
    margin-top: 8px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
    cursor: pointer;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    justify-content: center;
}

.user-info-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    justify-content: center;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
