<template>
    <div class="pt-5 text-center buyClass">
    <div class="flex flex-row-reverse w-100">
    <button class="btn btn-danger mb-5" @click="closeMod">CHIUDI</button>
    </div>
        <form ref="order" class="d-flex justify-content-center flex-column" @submit.prevent="clicked()">

            <!-- TOKEN CSRF -->
            <!-- <input type="hidden" name="_token" v-bind:value="csrf"> -->

            <div>
                <label for="name">Destinatario</label>
                <input v-model="name" type="name" id="name" name="name" >

            </div>

            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" name="email_client" >

            </div>




            <div>
                <label for="address">Indirizzo</label>
                <input v-model="address" type="text" id="address" name="address_client">

            </div>


            <div class="mb-5">
                <input type="submit" class="mx-5 btn-success mt-5" value="PROCEDI ALL'ORDINE">


            </div>


        </form>
            <div>
                <h2 class="py-2">IL TUO RIEPILOGO</h2>
                <div v-for="dish in cart" :key="dish.id">
                <span class="dish">{{ dish.name }}</span>
                        <span class="count">q.{{ dish.count }} =</span>
                        <span class="price">Prezzo: {{ formater(dish.count * dish.price) }}</span>



                </div>
                        <hr>
                    <div class="py-1">Prezzo Totale da Pagare:  {{ totalPrice() }}</div>
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
        },
        formater(number) {
            return new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(number)
        },
        totalPrice() {
            let sum = 0;
            this.cart.forEach(dish => {
                sum += dish.price * dish.count;
            });
            return this.formater(sum);
        },
    },
}
</script>
<style>

.buyClass{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 70%;
    background-color: #fff;
    border-radius: 10px;
    z-index: 999;


}


</style>
