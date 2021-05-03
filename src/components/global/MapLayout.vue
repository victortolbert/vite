<template>
  <div class="map-layout">
    <h3>Map Layout</h3>
    <MapMarker :update-location="updateLocation" />
  </div>
</template>

<script>
export default {
  props: {
    updateLocation: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    location: ''
  })
}
</script>


<style>
.map-layout {
  border: 5px solid rgb(1, 194, 1);
}
</style>
