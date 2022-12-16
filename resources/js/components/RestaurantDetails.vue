<template>

  <div class="py-5">
     <div class="py-5" v-for="item in restaurant" :key="item.id">
            <img :src="'/storage/' + item.img" alt="">
            <h1>{{item.name}}</h1>
            <h1>Indirizzo:</h1>
            <h2>{{item.address}}</h2>
            <h1>Orario Pranzo:</h1>
            <h2>{{item.lunch_time_slot_open}}</h2>
            <h2>{{item.lunch_time_slot_close}}</h2>
            <h1>Orario Cena:</h1>
            <h2>{{item.dinner_time_slot_open}}</h2>
            <h2>{{item.dinner_time_slot_close}}</h2>
            <router-link :to="'/menu/' + item.slug">Menu</router-link>
        </div>



  </div>

</template>

<script>

        export default {
        name: 'RestaurantDetails',
        data() {
            return {
                restaurant: [],
            }
        },
        mounted(){
            axios.get('/api/restaurant/' + this.$route.params.id).then((data) => {
            console.log(data.data[0].img)
            this.restaurant  = data.data;
            })
        },

        methods: {
            showMenu(slug){
                this.$router.push('/' + slug)
            }
        }
        }


</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';


</style>
