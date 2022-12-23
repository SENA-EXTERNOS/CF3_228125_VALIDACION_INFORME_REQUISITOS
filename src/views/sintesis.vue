<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    
    p.mb-5 De acuerdo con las temáticas abordadas en este componente formativo, se observa que se ha realizado un recorrido sobre los temas principales a tratar, de validación de los resultados, de informes, de los requerimientos según las reglas de negocio y solicitud de clientes. Además, las temáticas de la validación: requerimientos, criterios, verificación y validez y la diferencia entre ambas, las técnicas, tipos, el modelado y los principios generales a utilizar.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
