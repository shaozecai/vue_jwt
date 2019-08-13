<template>
  <div class="login">
    <cube-input v-model="value" ></cube-input>
    <cube-button @click="loginFun">登录</cube-button>
  </div>
</template>

<script>
export default {
  methods:{
    loginFun(){
      this.$store.dispatch('login',this.value).then(data=>{
        this.$router.push('/profile')
      }).catch(err=>{
        alert(err.data)
      })
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>