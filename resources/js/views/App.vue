<template>

    <main>
        <HeaderComponent />
        <HeroComponent />
        <MainComponent />
        <router-view> </router-view>
        <WorkWithUsComponent />
        <FooterComponent />

    </main>

</template>

<script>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import HeroComponent from '../components/HeroComponent.vue';
    import MainComponent from '../components/MainComponent.vue';
    import WorkWithUsComponent from '../components/WorkWithUsComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue';

    export default {

        name:'App',
        components: {
            HeaderComponent,
            HeroComponent,
            MainComponent,
            WorkWithUsComponent,
            FooterComponent,

        }

    }

</script>

<style>

</style>
