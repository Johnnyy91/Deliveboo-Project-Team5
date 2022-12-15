<template>

    <div class="restaurant">
        <div class="typologies">

            <div v-for="item in typologies" :key="item.id">
                <button @click="showtipology($event)" :value="item.id" class="text-capitalize"> {{item.name}}</button>
            </div>



        </div>

        <div>
            <h1>Ristoranti:</h1>
            <div v-for="item in restaurants" :key="item.id">
                {{item.name}}
            </div>
        </div>


    </div>

</template>

<script>

    export default {
    name: 'MainComponent',
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
            this.$router.push({path:'/' + id })
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

.typologies {
    display: flex;
}

</style>
