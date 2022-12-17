<template>

    <main>
        <HeaderComponent />
        <router-view class="space-from-header px-4"> </router-view>


    </main>

</template>

<script>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import HeroComponent from '../components/HeroComponent.vue';

    import RestaurantDetails from '../components/RestaurantDetails.vue';
    import WorkWithUsComponent from '../components/WorkWithUsComponent.vue'


    export default {

        name:'App',
        components: {
            HeaderComponent,
            HeroComponent,

            RestaurantDetails,
            WorkWithUsComponent,


        }

    }

</script>

<style scoped lang="scss">
    .space-from-header {
        margin-top: 8rem;
    }


</style>
