<template>
    <div>
        <form action="" method="post" enctype="multipart/form-data">

            <!-- TOKEN CSRF -->
            <!-- <input type="hidden" name="_token" v-bind:value="csrf"> -->

            <!-- EMAIL -->
            <label for="email">Email Client</label>
            <input v-model="email" type="email" id="email" name="email_client" >

            <!-- ADDRESS -->
            <label for="address">Address Client</label>
            <input v-model="address" type="text" id="address" name="address_client">


            <input type="button" @click="clicked()" value="Send">


        </form>
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

    methods: {
        clicked(){
            console.log(this.email)
            console.log(this.address)

        }
    },
}
</script>
<style lang="">

</style>
