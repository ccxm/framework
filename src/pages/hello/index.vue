<template>
  <div>
    <img alt="Vue logo" src="./../../assets/logo.png">
    <hello-world msg="This is HelloPage!!!" />
    <p v-if="$store.getters.userInfo">{{ JSON.stringify($store.getters.userInfo) }}</p>
    <el-button type="primary" round style="width: 90%;margin-top: 50px" @click="goBack">上一页</el-button>
  </div>
</template>

<script>
    import HelloWorld from '../../components/HelloWorld'
    export default {
        name: 'Index',
        components: { HelloWorld },
        methods: {
            goBack() {
                this.$router.back()
            }
        }
    }
</script>
