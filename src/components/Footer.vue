<template>
    <div class="footerMain">
        <footer class="footer">
            <div class="content">
                <div class="columns is-desktop is-vcentered">
                    <div class="column">
                        <div class="footer-item">
                            <router-link to="/">
                                <img src="@/assets/logo-aminochem.png" alt="Aminochem" />
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
                            <a href="http://fiordoaustral.com/">
                                <img src="@/assets/logoFiordo.png" alt="Fiordo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section class="hero has-background-grey-light">
            <div class="hero-footer">
                <div class="last-content">
                    <div class="paragraph">
                        <p>Edificio BHBC Av. Bello Horizonte 869 / Of 304 - Rancagua</p>
                    </div>
                    <div class="watermark">
                        <p>©copyright 2019</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

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
</style>
