<template>
    <div class="BlogCardView">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/cerezas.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('TechnicalSection.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div
                        class="title is-3"
                    >Consideraciones para mejorar la eficiencia hídrica del suelo</div>

                    <div class="image">
                        <img alt="Grass" src="@/assets/Products/hoja.jpg" />
                    </div>
                    <br />
                    <div
                        class="subtitle is-3"
                    >Consideraciones para mejorar la eficiencia hídrica del suelo</div>
                    <div class="content">
                        <p>El suelo es uno de los recursos fundamentales para la agricultura dada la multiplicidad de funciones que cumple, entre las cuales se destacan el ser sostén de las plantas, contener e intercambiar con el cultivo los nutrientes que éste necesita y ser el reservorio de agua desde el cual las plantas obtienen sus requerimientos hídricos. En efecto, el suelo cumple el rol de contenedor del agua y por lo tanto la condición general del mismo va a repercutir tanto en la capacidad de retener y distribuir homogéneamente el elemento, como en la habilidad que logren las mismas plantas de absorber desde el suelo el agua que necesiten; esto implica que un suelo que retenga humedad sin problemas, pero que a la vez limite la expresión de las raíces en cuanto a crecimiento, exploración y funcionalidad no podrá ser considerado como un buen suelo para hacer agricultura.</p>

                        <p>Una de las prácticas más efectivas y sustentables para mejorar el suelo es la aplicación periódica de materia orgánica, pues sus positivos efectos han sido demostrados consistentemente en el tiempo. Desde el punto de vista de las propiedades hidráulicas del suelo, la materia orgánica impacta directamente en la porosidad, en la retención de humedad y en la capacidad de aireación, siendo este último factor clave para lograr un buen crecimiento de raíces. La materia orgánica en el suelo actúa como un pegamento o cementante, que permite unir y mantener la unión de las diferentes partículas minerales que componen el suelo como la arcilla, arena y el limo; estas uniones conforman agregados de partículas y los espacios que se forman entre estos no son otra cosa que los poros del suelo, a través de los cuales fluyen el agua y el aire. Estos poros constituyen una red de canales de distinto tamaño y capacidades, gracias los cuales es posible lograr la circulación del agua y aire, y también permiten la retención de agua en el tiempo, asegurando un reservorio que puede estar disponible para las plantas; igualmente este volumen de poros facilitan la exploración y crecimiento de las raíces, mantienen al suelo esponjoso y favorecen el intercambio gaseoso.</p>

                        <p>Los poros en el suelo no son todos iguales y se pueden clasificar de acuerdo a su tamaño en macroporos y microporos; los macroporos (tamaño > 10 µ), están directamente relacionados con la capacidad de drenaje que tenga el suelo, ya que por su tamaño el agua se mueve por efecto de la fuerza de gravedad. Los macroporos también son fundamentales en la aireación del suelo y para generar los espacios por donde pueden crecer las raíces. Los microporos (0-10 µ), por su parte están relacionados con la capacidad del suelo de retener agua contra la fuerza de gravedad, fenómeno que se produce por la acción de la fuerza de capilaridad; a la microporosidad que permite dejar disponible agua para las plantas se le denomina Poros de Agua Útil (PAU), mientras que aquellos desde los cuales la planta ya no puede extraer agua se les denomina Poros Agua Inútil (PAI).</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar,
    },
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

.hero.is-white .title,
.subtitle {
    color: #3d3d3d;
}
p {
    text-align: left;
    color: #585858;
}
</style>