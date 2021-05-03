<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    badges: [
      { type: 'info', text: 'Info - Left', borderSide: 'left' },
      { type: 'info', text: 'Info - Right', borderSide: 'right' },
      { type: 'info', text: 'Info - Top', borderSide: 'top' },
      { type: 'info', text: 'Info - Bottom', borderSide: 'bottom' },
      { type: 'success', text: 'Success - Left', borderSide: 'left' },
      { type: 'success', text: 'Success - Right', borderSide: 'right' },
      { type: 'success', text: 'Success - Top', borderSide: 'top' },
      { type: 'success', text: 'Success - Bottom', borderSide: 'bottom' },
      { type: 'warning', text: 'Warning - Left', borderSide: 'left' },
      { type: 'warning', text: 'Warning - Right', borderSide: 'right' },
      { type: 'warning', text: 'Warning - Top', borderSide: 'top' },
      { type: 'warning', text: 'Warning - Bottom', borderSide: 'bottom' },
      { type: 'danger', text: 'Danger - Left', borderSide: 'left' },
      { type: 'danger', text: 'Danger - Right', borderSide: 'right' },
      { type: 'danger', text: 'Danger - Top', borderSide: 'top' },
      { type: 'danger', text: 'Danger - Bottom', borderSide: 'bottom' }
    ]
  })
}
</script>


<template>
  <div class="hello">
    <p>
      Today is
      <BaseDateLabel iso-date="2020-06-13" />
    </p>

    <h2>Here are my badges:</h2>
    <ul class="badge-list">
      <li v-for="badge in badges" :key="badge.text" class="badge-list-item">
        <BaseBadge :type="badge.type" :text="badge.text" :border-side="badge.borderSide" />
      </li>
    </ul>
    <h2>Here is my Map:</h2>
    <Map />
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #338b64;
}
.badge-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.badge-list-item {
  margin-bottom: 1rem;
}
</style>
