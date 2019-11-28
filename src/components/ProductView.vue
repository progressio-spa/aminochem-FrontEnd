<template>
    <div class="productView">
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-half">
                            <div class="content">
                                <div class="title"></div>
                                <p align="left">
                                    {{ $t('Products.amendments.description1') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description2') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description3') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description4') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description5') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description6') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description7') }}
                                </p>
                                <p align="left">
                                    {{ $t('Products.amendments.description8') }}
                                </p>
                            </div>
                        </div>
                        <div class="column is-half">
                            <figure class="image is-5by4">
                                <img src="https://bulma.io/images/placeholders/600x480.png" />
                            </figure>
                        </div>
                    </div>
                    <br />
                    <br />
                    <nav class="level is-desktop">
                        <div class="level-item">
                            <button class="button is-medium">
                                <span class="icon">
                                    <i class="fas fa-tag"></i>
                                </span>
                                <span>
                                    {{ $t('Products.buttons.label') }}
                                </span>
                            </button>
                        </div>
                        <div class="level-item">
                            <button class="button is-medium">
                                <span class="icon">
                                    <i class="fas fa-file-alt"></i>
                                </span>
                                <span>
                                    {{ $t('Products.buttons.datasheet') }}
                                </span>
                            </button>
                        </div>
                        <div class="level-item">
                            <button class="button is-medium">
                                <span class="icon">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span>
                                    {{ $t('Products.buttons.safetysheet') }}
                                </span>
                            </button>
                        </div>
                        <div class="level-item">
                            <button class="button is-medium">
                                <span class="icon">
                                    <i class="fas fa-info-circle"></i>
                                </span>
                                <span>
                                    {{ $t('Products.buttons.brochure') }}
                                </span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <br /><br />
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
}
</script>

<style scoped>
.hero.has-background {
    position: relative;
    overflow: hidden;
}
.hero-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}

#main-title {
    display: flex;
    font-size: 3rem;
}

.card-header {
    background-color: gray;
}

.hero.is-white .title,
p {
    color: #575757;
}

.content > .title {
    display: flex;
    size: 2.5rem;
}

.button {
    background-color: #ff715b;
    color: white;
    padding: 0 3vw 0 3vw;
}

@media (max-width: 767px) {
    .button {
        width: 90vw;
    }
    #main-title {
        font-size: 2rem;
    }
}
</style>
