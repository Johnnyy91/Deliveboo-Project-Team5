<template>

  <div class="py-5">
     <div class="py-5 card" v-for="item in restaurant" :key="item.id">
            <h1>{{item.name}}</h1>
            <img :src="'/storage/' + item.img" alt="">
            <h1>Indirizzo:</h1>
            <h2>{{item.address}}</h2>
            <div class="card-time d-flex justify-content-between text-center">
                <div>
                    <h3>Orario Pranzo:</h3>
                    <h4>{{item.lunch_time_slot_open}}</h4>
                    <h4>{{item.lunch_time_slot_close}}</h4>
                </div>
                <div>
                    <h3>Orario Cena:</h3>
                    <h4>{{item.dinner_time_slot_open}}</h4>
                    <h4>{{item.dinner_time_slot_close}}</h4>

                </div>


            </div>

            <router-link :to="'/menu/' + item.slug" class="btn btn-danger">Menu</router-link>
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


    img {
       width: 100%;
    }

    .card {
        width: 500px;
        background-color: #f6f6f6;
        margin: 20px 20px;
    }
</style>
