<template>

    <div class="text py-5 d-flex justify-content-between">

        <div>
            <router-link :to="'/restaurant'" class="btn btn-danger mx-3">Ritorna alla Homepage</router-link>
            <h1 class="text-center">MENU</h1>
            <div class="text-uppercase py-4" v-for="dish in dishes" :key="dish.id">
                <div class="dishes">
                    <div class="card pb-5 d-flex flex-row text-center justify-content-between">
                        <div class="text-area text-left">
                            <h2>{{ dish.name }}</h2>
                            <img :src="'/storage/' + dish.img" alt="">
                            <h5>Ingredienti:{{ dish.ingredients }}</h5>
                            <h4 class="py-3">Prezzo:{{ dish.price }}</h4>
                        </div>


                        <div class="button-area d-flex my-5 py-5">
                            <label for="food">Pezzi:</label>
                            <input type="number" id="food" name="food" min="1" max="100">

                            <!-- ADD DISCH -->
                            <button @click="addDish(dish)" class="btn btn-info mx-5">
                                Aggiungi
                            </button>
                            <!-- /ADD DISCH -->

                            <button class="btn btn-danger mx-5">
                                Rimuovi
                            </button>



                        </div>

                    </div>


                </div>
            </div>

        </div>


        <div class="text-center pt-5">

            <h1 class="pb-2">IL TUO CARRELLO</h1>

            <div class="card-container d-flex justify-content-center align-items-center">
                <div v-if="cart.length == 0">
                    <h1>VUOTO</h1>
                </div>
                <div v-else>
                    <div v-for="dish, i in cart" :key="i">{{ dish }}</div>
                </div>


            </div>

        </div>

    </div>


</template>
<script>
export default {
    name: 'MenuComponent',
    data() {
        return {
            dishes: [],
            cart: []
        }
    },
    mounted() {
        axios.get('/api/menu/' + this.$route.params.slug).then(({ data }) => {
            console.log('ciao');
            console.log(data);
            this.dishes = data.results;
        })
    },
    methods: {
        addDish(dish) {

            this.cart.push(dish.name);
            console.log(this.cart);

        }
    },
}
</script>
<style scoped lang="scss">
.text {
    height: 100vh;
}

img {
    height: 200px;
    width: 300px;
}

.card {
    width: 500;
    background-color: #f6f6f6;
    margin: 20px 20px;
}

button {
    height: 50px;
    width: 100px;
}

input {
    height: 50px;
    width: 100px;
}

.card-container {
    height: 400px;
    background-color: #f6f6f6;
    border: 3px solid rgb(29, 102, 0);
    margin: 20px 20px;
}
</style>
