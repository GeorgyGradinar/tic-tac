<template>
  <TicTacToe/>
</template>

<script>
import TicTacToe from './components/tic-tac-toe.vue'

export default {
  name: 'App',
  components: {
    TicTacToe
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;

}

</style>
