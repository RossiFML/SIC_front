import * as VueGoogleMaps from 'vue2-google-maps'

export default ({ Vue }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB-KBnKJ5gIxoKKkFYiDDm3vTp31N1XQ40',
      libraries: 'places,drawing,visualization',
      v: '3.26'
    }
  })
  Vue.component('google-map', VueGoogleMaps.Map)
}
