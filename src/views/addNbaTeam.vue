<template>
    <div id="addTeam">
        <el-form :model="form" ref="form" label-width="80px">
            <el-form-item label="队伍名">
                <el-input v-model="teamname"></el-input>
            </el-form-item>
            <el-form-item label="东西部分区">
                <el-input type="text" v-model="part"></el-input>
            </el-form-item>
            <el-form-item label="所在洲">
                <el-input type="text" v-model="continent"></el-input>
            </el-form-item>
            <el-form-item label="主球馆名称">
                <el-input type="text" v-model="basketballGymName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {nbaTeam_Add} from '../api/api.js'
// import { ElForm } from 'element-plus';
// import { ElAutocomplete } from 'element-plus';


export default{
    // components: {
    //     ElAutocomplete
    // },    
    data() {
        return {
            //用户信息
            teamInfo: { teamname: "", part: "" },
           
        };
    },
    
    methods: {
        
        submitForm() {
            //axios请求
            let params = {
                teamname: this.teamInfo.teamname,
                part: this.teamInfo.part,
            };
            //  alert(`Form submitted with name: ${this.form.name} and email: ${this.form.email}`);
           
            nbaTeam_Add(params).then((res) => {
                if (res.code == 200) {
                    this.$toolTips("success", "短信已发送");
                } else {
                    //this.$toolTips("error", res.message);
                }
            });
        
        }
    }
    
}
</script>

<style>
/* #addTeam{
    width: 100%;
    height: 100%;
} */
/* .addForm{
    width: 100%;
    height: 100%;
} */
</style>