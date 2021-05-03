<script>
export default {
  data: () => ({
    location: 'Earth'
  }),
  methods: {
    updateLocation(newLocation) {
      this.location = newLocation
    }
  }
}
</script>

<template>
  <div class="map">
    <h2>Location: {{ location }}</h2>
    <MapLayout :update-location="updateLocation" />
  </div>
</template>


<style>
.map {
  border: 5px solid green;
}
</style>
