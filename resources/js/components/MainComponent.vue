<template>



    <div class="restaurant">
        <div class="typologies">
            <div v-for="item in typologies" :key="item.id">
            <button > {{item.name}}</button>
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
    ShowRestaurant(url) {
        axios.get(url).then(({data})=>{
            this.restaurants = data.results;
            this.typologies = data.typologies;
            console.log(data.results);


        })
    },

},
mounted() {
     this.ShowRestaurant('api/home');

}
}
</script>

<style leng="scss" scoped>

.typologies {
    display: flex;
}
</style>
