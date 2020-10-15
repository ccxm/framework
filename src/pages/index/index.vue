<template>
  <div>
    <img alt="Vue logo" src="./../../assets/logo.png">
    <hello-world msg="This is IndexPage!!!" />
    <p v-if="$store.getters.userInfo">{{ JSON.stringify($store.getters.userInfo) }}</p>
    <el-button type="primary" round style="width: 90%;margin-top: 50px" @click="nextPage">下一页</el-button>
  </div>
</template>

<script>
    import HelloWorld from '../../components/HelloWorld'
    import { pLogin } from '@api/user/params'
    import * as auth from '@/utils/auth'

    export default {
        name: 'Index',
        components: { HelloWorld },
        mounted() {
            const params = pLogin()
            params.email = '1532917281@qq.com'
            params.password = '123456'
            this.$api.user.login(params).then(({ userId, token, userInfo }) => {
                auth.saveToken(token)
                this.$store.dispatch('saveUserInfo', userInfo)
            })
        },
        methods: {
            nextPage() {
                this.$router.push('/hello')
            }
        }
    }
</script>

