<script>
import { computed, reactive, toRefs } from '@vue/reactivity'

export default {
  setup() {
    const state = reactive({
      dayMinLimit: 1440,
      newTaskLabel: '',
      newTaskType: '',
      newTaskEstimate: 0,
      taskList: [],
      needTaskList: computed(() => {
        return state.taskList.filter(item => item.type === 'Need')
      }),
      needTaskTotalEstimate: computed(() => {
        return state.needTaskList.reduce((acc, cv) => {
          return acc + Number(cv.estimate)
        }, 0)
      }),
      wantTaskList: computed(() => {
        return state.taskList.filter(item => item.type === 'Want')
      }),
      wantTaskTotalEstimate: computed(() => {
        return state.wantTaskList.reduce((acc, cv) => {
          return acc + Number(cv.estimate)
        }, 0)
      }),
      totalEstimatedTime: computed(() => {
        return state.taskList.reduce((acc, cv) => {
          return acc + Number(cv.estimate)
        }, 0)
      }),
      remainingTime: computed(() => {
        return state.dayMinLimit - state.totalEstimatedTime
      })
    })
    const addNewTask = () => {
      state.taskList.push({
        label: state.newTaskLabel,
        type: state.newTaskType,
        estimate: state.newTaskEstimate
      })
    }
    return {
      ...toRefs(state),
      addNewTask
    }
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>Remaining Time: {{ remainingTime }} min</h2>
  <h3>Total Estimate: {{ totalEstimatedTime }}</h3>
  <form @submit.prevent class="new-task-form">
    <label for="task-label">Task Label</label>
    <input type="text" id="task-label" v-model="newTaskLabel" />

    <label for="task-type">Task Type:</label>
    <input list="task-type-list" type="text" id="task-type" v-model="newTaskType" />
    <datalist id="task-type-list">
      <option value="Need"></option>
      <option value="Want"></option>
    </datalist>

    <label for="task-estimate">Estimate:</label>
    <input type="number" v-model="newTaskEstimate" />

    <button @click="addNewTask">Add</button>
  </form>

  <h2>Task List</h2>

  <div class="task-list-wrapper">
    <section>
      <h3>Need ({{ needTaskTotalEstimate }})</h3>
      <ul>
        <li
          v-for="item in needTaskList"
          :key="item.label"
        >{{ item.label }} ({{ item.type }}) — {{ item.estimate }} min</li>
      </ul>
    </section>
    <section>
      <h3>Want ({{ wantTaskTotalEstimate }})</h3>
      <ul>
        <li
          v-for="item in wantTaskList"
          :key="item.label"
        >{{ item.label }} ({{ item.type }}) — {{ item.estimate }} min</li>
      </ul>
    </section>
  </div>
</template>

<style>
.new-task-form {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.task-list-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
