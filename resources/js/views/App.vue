<template>
    <div id="root">
        <HeaderComponent />
         <main>
            <router-view class="space-from-header px-4"> </router-view>
         </main>
         <FooterComponent />
    </div>
</template>

<script>


    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';



    export default {

    name:'App',
    components: {
       HeaderComponent,
     FooterComponent
}

    }

</script>

<style scoped lang="scss">
    .space-from-header {
        margin-top: 8rem;
    }


</style>
