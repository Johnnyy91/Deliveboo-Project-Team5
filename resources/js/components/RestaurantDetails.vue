<template>
  <div>

     <div v-for="item in restaurant" :key="item.id">

            <h1>{{item.name}}</h1>
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
    axios.get('/api/restaurant/' + this.$route.params.id).then((data)=>{
       this.restaurant  = data.data;
    })
}
}
</script>

<style>

</style>
