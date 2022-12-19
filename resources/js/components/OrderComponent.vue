<template>
    <div class="pt-5 text-center buyClass">
    <div class="flex flex-row-reverse w-100">
    <button class="btn btn-danger mb-5" @click="closeMod">CHIUDI</button>
    </div>
        <form ref="order" class="d-flex justify-content-center flex-column" @submit.prevent="clicked()">

            <!-- TOKEN CSRF -->
            <!-- <input type="hidden" name="_token" v-bind:value="csrf"> -->

            <div>
                <label for="email">Email Client</label>
                <input v-model="email" type="email" id="email" name="email_client" >

            </div>




            <div>
                <label for="address">Address Client</label>
                <input v-model="address" type="text" id="address" name="address_client">

            </div>



            <input type="submit"  value="Send">


        </form>
            <div>
                <h2 class="pt-5">IL TUO RIEPILOGO</h2>
                <div v-for="dish in cart" :key="dish.id">
                <span class="dish">Prezzo Totale: {{(dish.count * dish.price) }} Euro</span>

            </div>


            </div>

    </div>
</template>
<script>
export default {
    name: 'OrderComponent',
    data(){
          return {
            //csrf token
            //  csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

            address:undefined,
            email:undefined
       }
    },
    mounted() {
        console.log(this.cart)
    },
    props: {
        cart: Array,
    },

    methods: {
        clicked(){
            console.log(this.email)
            console.log(this.address)


        },
        closeMod() {
            this.$parent.$data.validation = false;
        }
    },
}
</script>
<style>

.buyClass{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;
    z-index: 999;


}

</style>
