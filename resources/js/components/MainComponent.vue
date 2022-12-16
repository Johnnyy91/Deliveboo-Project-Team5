<template>
    <main>
        <WorkWithUsComponentVue/>
        <RestaurantDetailsVue />
        <section class="container">
            <div class="fl-typologies d-flex mb-5 justify-content-between">
                <div v-for="item in typologies" :key="item.id">
                    <button @click="showtipology($event)" :value="item.id" type="button" class="btn btn-lg fl-button text-capitalize"> {{item.name}}</button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import WorkWithUsComponentVue from './WorkWithUsComponent.vue';
import RestaurantDetailsVue from './RestaurantDetails.vue';

    export default {
    name: 'MainComponent',
    components: {WorkWithUsComponentVue, RestaurantDetailsVue},
    data(){
    return {
        restaurants: undefined,
        typologies : undefined
    }
    },

    methods: {
        showRestaurant(url) {
            axios.get(url).then(({data})=>{
                this.restaurants = data.results;
                this.typologies = data.typologies;
                console.log(data.results);


            })
        },

        showtype(url){
            axios.get(url).then(({data})=>{
                console.log(url);
                console.log(data)
            }
            )
        },


        showtipology(e){
            let id = e.target.value;
            this.$router.push({path:'/restaurant/' + id })
            this.showtype('api/restaurant/' + id);
            console.log(id);
        },

    },


    mounted() {
        this.showRestaurant('api/restaurant')
            // axios.get('api/restaurant').then(({data})=>{
            //     this.restaurants = data.results;
            //     this.typologies = data.typologies;
            //     console.log(data.results);


            // })


    }
    }

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    height: 25vh;
    margin-top: 30vh;

    h1 {
        color: $fl-primary;
        font-family: 'Kanit', sans-serif;
        font-weight: 400;
    }

    .fl-button {
        background-color: $fl-primary;
        color: $fl-blank;
    }

    .fl-typologies {
        width: 100%;
    }
}





</style>
