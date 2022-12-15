<template>

    <div class="custom-shape-divider-top-1671125188">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>


</template>

<script>

    export default {
    name:'HeroComponent',
    }

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

* {
    margin-top: 4vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.custom-shape-divider-top-1671125188 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -1;

    svg {
        position: relative;
        display: block;
        width: calc(228% + 1.3px);
        height: 500px;
    }

    .shape-fill {
        fill: #00CCBC;
    }

}


</style>
