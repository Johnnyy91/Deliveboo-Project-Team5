<template>

    <section>
        <div class="custom-shape-divider-top-1671124742">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="container">
            <nav class="w-100">
                <div class="w-50 d-flex align-items-center">
                    <img src="./images/DeliveBoo-Logo.png" alt="logo" class="fl-logo d-flex">
                    <h2 class="title pt-3">DELIVEBOO</h2>
                </div>

            </nav>
        </div>
    </section>

</template>

<script>

    export default {
    name:'HeaderComponent',
    }

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.fl-logo {
    height: 50px;
    width: 50px;
    z-index: 999;
    animation: wiggle 2s linear infinite;

    @keyframes wiggle {
        0%, 7% {
            transform: rotateZ(0);
        }
        15% {
            transform: rotateZ(-15deg);
        }
        20% {
            transform: rotateZ(10deg);
        }
        25% {
            transform: rotateZ(-10deg);
        }
        30% {
            transform: rotateZ(6deg);
        }
        35% {
            transform: rotateZ(-4deg);
        }
        40%, 100% {
            transform: rotateZ(0);
        }

    }
}

section {
    background-color: $fl-secondary;
    position: relative;
    z-index: 999;

    & div {
        position: relative;
        z-index: 999;
    }
}

.custom-shape-divider-top-1671124742 {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(148% + 1.3px);
        height: 217px;
        transform: rotateY(180deg);
    }

    .shape-fill {
        fill: #D0EB99;
    }
}

.title {
    color: $fl-primary;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
}

</style>
