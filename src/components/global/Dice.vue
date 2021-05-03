<script lang="ts">
export default {
  props: {
    colors: {
      type: Array,
      default: () => ([])
    },
    currentValue: {
      type: Number,
      default: () => {
        return Math.floor(Math.random() * 6 + 1)
      }
    },
    material: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
