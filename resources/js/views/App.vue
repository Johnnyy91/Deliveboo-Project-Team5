<template>
    <div>
    <h1>Deliveboo</h1>
   <HeaderComponent />
   <OrderComponent />
   <router-view> </router-view>

    </div>

</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import OrderComponent from '../components/OrderComponent.vue';

export default {
    name: "App",
    components: { HeaderComponent, OrderComponent }
}
</script>

<style>

</style>
