<template>
    <div>
        <form action="{{ route('admin.order.store') }}" method="post" enctype="multipart/form-data">

            <!-- TOKEN CSRF -->
            <input type="hidden" name="_token" v-bind:value="csrf">

            <!-- EMAIL -->
            <label for="email">Email Client</label>
            <input type="email" id="email" name="email_client" >

            <!-- ADDRESS -->
            <label for="address">Address Client</label>
            <input type="text" id="address" name="address_client">


            <input type="submit" value="Send">


        </form>
    </div>
</template>
<script>
export default {
    name: 'OrderComponent',
    data(){
          return {
            //csrf token
             csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
       }
    }

}
</script>
<style lang="">

</style>
