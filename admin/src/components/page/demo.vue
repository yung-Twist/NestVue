<template>
<div class="manageList">
    <div class="container">
        <div class="handle-box">
            <!-- <el-button type="primary" icon="el-icon-plus" @click="addVisible = true">新增</el-button> -->
            <!-- <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                <el-option key="1" label="广东省" value="广东省"></el-option>
                <el-option key="2" label="湖南省" value="湖南省"></el-option>
            </el-select> -->
            <el-input v-model="select_phone" placeholder="用户名搜索" class="handle-input" clearable></el-input>
            <el-button type="success" icon="search" @click="searchphone">搜索</el-button>
            <el-input v-model="select_company" placeholder="公司名称搜索" class="handle-input" clearable></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="store_username" label="用户名" ></el-table-column>
            <el-table-column label="状态" width="80">
                <template slot-scope="scope">
                    {{scope.row.store_status == 1?"开启":"关闭"}}
                </template>
            </el-table-column>
            <el-table-column prop="store_create_time" label="创建时间" ></el-table-column>
            <el-table-column prop="store_remarks" label="备注"></el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="limit" :total="total"></el-pagination>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="修改" :visible.sync="editVisible" width="30%">
            <el-form ref="ruleForm" :model="ruleForm" label-width="auto" :rules="rules">
                <el-form-item label="用户名" prop="store_company_name">
                    <el-input v-model="ruleForm.store_username" disabled=""></el-input>
                </el-form-item>
                <el-form-item label="状态" prop="store_status">
                    <el-select v-model="ruleForm.store_status" placeholder="请选择状态">
                    <el-option :label="item.name" :value="item.value" v-for="(item,index2) in statusList" :key="index2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="store_remarks">
                    <el-input v-model="ruleForm.store_remarks"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitform('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</div>
</template>

<script>
import axios from '../../../request/http'
export default {
    data() {
        return {
            page:1,
            limit:10,
            total:100,
            store_phone:'',
            store_company_name:'',
            store_phone:'',
            select_company:'',
            select_phone:'',
            tableData: [],
            statusList:[
                {
                    name:"开启",
                    value:1
                },
                {
                    name:"关闭",
                    value:2
                }
            ],
            editVisible:false,
            ruleForm:{
                store_id:'',
            },
            rules:{
                store_company_name: [
                    { required: true, message: '请输入公司名称', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        getdata(){
            let params = {
                page:this.page,
                limit:this.limit,
                store_phone:this.store_phone,
                store_company_name:this.store_company_name
            }
            axios.post('/admin/store/index.html',params).then(res=>{
                // console.log(res.data)
                this.tableData = res.data.data
                this.total = res.data.total
            })
        },
        // 分页
        handleCurrentChange(val){
            this.page = val
            this.getdata()
        },
        submitadd(){
            console.log(this.form)
        },
        // 手机号搜索
        searchphone(){
            this.store_phone = this.select_phone
            this.getdata()
        },
        // 公司名称搜索
        search(){
            // console.log(this.select_company)
            this.store_company_name = this.select_company
            this.getdata()
        },
        // 编辑修改
        handleEdit(row){
            // console.log(row)
            this.ruleForm.store_id = row.store_id
            this.editVisible = true
        },
        // 表格提交
        submitform(formName){
            let that = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // console.log(that.ruleForm)
                    axios.post('/admin/store/edit.html',that.ruleForm).then(res=>{
                        this.editVisible = false
                        console.log(res)
                        // this.$message({
                        //     message: res.msg,
                        //     type: 'success'
                        // });
                        this.getdata()
                    })
                    
                } else {
                    return false;
                }
            });
        },
    },
    mounted() {
        this.getdata()
    }
}
</script>

<style lang="less" scoped>
.manageList {
    .handle-box {
        margin-bottom: 20px;
        .handle-input {
            width: 300px;
            display: inline-block;
            margin: 0 10px;
        }
    }
}
</style>
