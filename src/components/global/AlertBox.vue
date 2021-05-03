<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (propValue) => {
        const validTypes = ['info', 'success', 'warning', 'danger']
        return validTypes.indexOf(propValue) > -1
      }
    }
  }
}
</script>
