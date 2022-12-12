<template>
    <div>
    <h1>Deliveboo</h1>
   <HeaderComponent />
   <router-view> </router-view>

    </div>

</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    name:'App',
    components: HeaderComponent,

}
</script>

<style>

</style>
