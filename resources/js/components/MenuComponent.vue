<template>
    <div class="text py-5">
       <h1 class="text-center">Menu</h1>
        <div class="text-uppercase py-4" v-for="dish in dishes" :key="dish.id">
            <div class="dishes">
                <div class="card pb-5 d-flex flex-row text-center justify-content-between">
                    <div class="text-area text-left">
                        <h2>{{dish.name}}</h2>
                        <img :src="'/storage/' + dish.img" alt="">
                        <h5>Ingredienti:{{dish.ingredients}}</h5>
                        <h4 class="py-3">Prezzo:{{dish.price}}</h4>
                    </div>


                    <div class="button-area d-flex my-5 py-5">
                        <label for="food">Pezzi:</label>
                         <input type="number" id="food" name="food"
                         min="1" max="100">
                        <button class="btn btn-info mx-5">Aggiungi</button>
                        <button class="btn btn-danger mx-5">Rimuovi</button>



                    </div>

                </div>


            </div>

        </div>
    </div>
</template>
<script>
export default {
 name: 'MenuComponent',
data(){
    return {
        dishes:[],
    }
},
mounted() {
         axios.get('/api/menu').then(({data}) => {
            console.log('ciao');
            console.log(data);
                this.dishes = data.results;
            })



    },

}
</script>
<style scoped lang="scss">
    .text{
        height: 100vh;
    }

    img {
        height: 200px;
        width: 300px;
    }

    .card {
        width: calc(100%/ 2);
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
</style>
