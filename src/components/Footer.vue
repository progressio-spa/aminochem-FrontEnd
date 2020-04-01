<template>
    <div class="footerMain">
        <footer class="footer">
            <div class="content">
                <div class="columns is-desktop is-vcentered">
                    <div class="column">
                        <div class="footer-item">
                            <router-link to="/">
                                <img
                                    @click="upPage()"
                                    src="@/assets/logo-aminochem.png"
                                    alt="Aminochem"
                                />
                            </router-link>
                        </div>
                    </div>

                    <div class="column">
                        <a class="item">
                            <router-link to="/about">{{ $t('Navbar.aboutUs') }}</router-link>
                        </a>
                    </div>
                    <div class="column">
                        <a class="item">
                            <router-link to="/products">{{ $t('Navbar.products') }}</router-link>
                        </a>
                    </div>
                    <div class="column">
                        <a class="item">
                            <router-link to="/distributionNetwork">{{ $t('Navbar.network') }}</router-link>
                        </a>
                    </div>
                    <div class="column">
                        <a class="item">
                            <router-link to="/technicalSection">{{ $t('Navbar.technical') }}</router-link>
                        </a>
                    </div>
                    <div class="column">
                        <div class="item">
                            <router-link to="/contact">{{ $t('Navbar.contact') }}</router-link>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-item">
                            <a>
                                <img @click="goToFiordoAustral" src="@/assets/logoFiordo.png" alt="Fiordo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column rrss is-2 is-offset-5">
                        <a href="http://facebook.com/">
                            <img src="@/assets/Social/facebook.png" alt="Facebook" />
                        </a>
                        <a href="http://instagram.com/">
                            <img src="@/assets/Social/instagram.png" alt="Instagram" />
                        </a>
                        <a href="http://linkedin.com/">
                            <img src="@/assets/Social/linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <section class="hero has-background-grey-light">
            <div class="hero-footer">
                <div class="last-content">
                    <div class="paragraph">
                        <p>Av. Blanca 1117, Maipú, Santiago - Bernardino 1990, Puerto Montt, Chile</p>
                    </div>
                    <div class="watermark">
                        <p>©copyright 2019</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        upPage() {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0
        },
        goToFiordoAustral() {
            window.open("http://fiordoaustral.com/");
        }
    },
}
</script>

<style scoped>
.footer {
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
}
.footer-item img {
    max-height: 5rem;
}
.content {
    width: 75%;
}
a {
    color: #585858;
}
a:hover {
    color: #fff;
}
.last-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.rrss {
    display: flex;
    max-width: 24vw;
    justify-content: space-around;
}

.rrss a img {
    max-height: 5vh;
}
</style>
