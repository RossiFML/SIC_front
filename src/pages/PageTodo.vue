<template>
  <div class="container" :style="`height:${altura}px;`"  v-if="mapReload">
    <GmapMap
      :center="{lat, lng}"
      :zoom="zoom"
      map-type-id="roadmap"
      style="width: 100%; height: 100%;" v-if="mapReload"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="selected(m)"
      />
      <!-- <GmapMarker

        @click="center=m.position"
        :key="index"
        v-for="(m, index) in atores"
        :position="location(m.endereco)"
        :clickable="true"
        :icon="image(m.categoria.pin)"
        style="background: red;"
      /> -->
    </GmapMap>
  </div>
  <!-- <q-page class="q-pa-md">
    <h1></h1>
<body>
  <div id="map">
  </div>
</body>
  </q-page> -->
</template>

<script>
export default {
  components: {},
  data () {
    return {
      listagem: false,
      left: false,
      lat: -11.852112,
      lng: -55.504995,
      zoom: 13,
      mapReload: true,
      visualizar: false,
      ator: null,
      marker: null,
      markers: [{
        position: {
          lat: -11.853793517689533,
          lng: -55.534664397800015,
        }
      }, {
        position: {
          lat: -11.852255,
          lng: -55.527558,
        }
      }, {
        position: {
          lat: -11.8520893,
          lng: -55.513419,
        }
      }, {
        position: {
          lat: -11.8564678,
          lng: -55.5052597,
        }
      }, {
        position: {
          lat: -11.8572335,
          lng: -55.5092467,
        }
      }, {
        position: {
          lat: -11.8514375,
          lng: -55.509354,
        }
      }
      ]
    }
  },
  methods: {
    abrirListagem () {
      this.listagem = true
    },
    image (img) {
      var imagem = {
        url: img,
        size: new window.google.maps.Size(100, 100),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(0, 10),
        scaledSize: new window.google.maps.Size(50, 50)
      }
      return imagem
    },
    selected (e) {
      console.log(e)
    },
    location (endereco) {
      if (!endereco) return {}
      var end = { lat: parseFloat(endereco.latitude), lng: parseFloat(endereco.longitude) }
      return end
    }
  },
  computed: {
    altura () {
      return this.$q.screen.height
    }
  },
  watch: {
    // recarregarMapa () {
    //   this.mapReload = false
    //   setTimeout(() => {
    //     this.mapReload = true
    //   }, 0)
    // }
  }
}
</script>

