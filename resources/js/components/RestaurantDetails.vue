<template>

    <div class="py-5">
        <div class="py-5 card" v-for="restaurant in restaurants" :key="restaurant.id">
            <h1>{{ restaurant.name }}</h1>
            <img :src="'/storage/' + restaurant.img" alt="">
            <h1>Indirizzo:</h1>
            <h2>{{ restaurant.address }}</h2>
            <div class="card-time d-flex justify-content-between text-center">
                <div>
                    <h3>Orario Pranzo:</h3>
                    <h4>{{ restaurant.lunch_time_slot_open }}</h4>
                    <h4>{{ restaurant.lunch_time_slot_close }}</h4>
                </div>
                <div>
                    <h3>Orario Cena:</h3>
                    <h4>{{ restaurant.dinner_time_slot_open }}</h4>
                    <h4>{{ restaurant.dinner_time_slot_close }}</h4>
                </div>
            </div>
            <div><span v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</span></div>

            <router-link :to="'/menu/' + restaurant.slug" class="btn btn-danger mt-5">Visualizza Menù</router-link>
        </div>



    </div>

</template>

<script>

export default {
    name: 'RestaurantDetails',
    data() {
        return {
            restaurants: [],
        }
    },
    mounted() {
        axios.get('/api/restaurant/' + this.$route.params.slug).then((data) => {
            // console.log(data.data[0].img)
            this.restaurants = data.data;
            console.log(data)
        })
    },

    methods: {
        showMenu(slug) {
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
