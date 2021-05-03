<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    borderSide: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="badge" :class="`is-${type} has-border-${borderSide}`">{{ text }}</div>
</template>

<style>
.badge {
  padding: 0.5rem 0.75rem;
  background-color: #ccc;
  border-radius: 3px;
  color: #222;
}
.badge.has-border-left {
  border-left: 8px solid #999;
}
.badge.has-border-right {
  border-right: 8px solid #999;
}
.badge.has-border-top {
  border-top: 8px solid #999;
}
.badge.has-border-bottom {
  border-bottom: 8px solid #999;
}
.badge.is-info {
  border-color: rgb(11, 73, 155);
  background-color: rgb(174, 204, 243);
}
.badge.is-success {
  border-color: rgb(35, 155, 11);
  background-color: rgb(174, 243, 174);
}
.badge.is-warning {
  border-color: rgb(155, 145, 11);
  background-color: rgb(242, 243, 174);
}
.badge.is-danger {
  border-color: rgb(155, 11, 11);
  background-color: rgb(245, 166, 166);
}
</style>
