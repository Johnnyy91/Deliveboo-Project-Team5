<template>

    <main>
        <HeaderComponent />
        <router-view class="space-from-header px-4"> </router-view>
        <FooterComponent />

    </main>

</template>

<script>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import HeroComponent from '../components/HeroComponent.vue';

    import RestaurantDetails from '../components/RestaurantDetails.vue';
    import WorkWithUsComponent from '../components/WorkWithUsComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue';

    export default {

        name:'App',
        components: {
            HeaderComponent,
            HeroComponent,

            RestaurantDetails,
            WorkWithUsComponent,
            FooterComponent

        }

    }

</script>

<style scoped lang="scss">
    .space-from-header {
        margin-top: 8rem;
    }


</style>
