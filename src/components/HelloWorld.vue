<template>
  <section>
    <h1>Tic-Tac-toe</h1>
    <button @click="restart()">Restart</button>

    <div id="game-board">
      <div class="box" id="0" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(0), selectedComputer: checkSelectedComputer(0)}"></div>
      <div class="box" id="1" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(1), selectedComputer: checkSelectedComputer(1)}"></div>
      <div class="box" id="2" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(2), selectedComputer: checkSelectedComputer(2)}"></div>
      <div class="box" id="3" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(3), selectedComputer: checkSelectedComputer(3)}"></div>
      <div class="box" id="4" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(4), selectedComputer: checkSelectedComputer(4)}"></div>
      <div class="box" id="5" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(5), selectedComputer: checkSelectedComputer(5)}"></div>
      <div class="box" id="6" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(6), selectedComputer: checkSelectedComputer(6)}"></div>
      <div class="box" id="7" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(7), selectedComputer: checkSelectedComputer(7)}"></div>
      <div class="box" id="8" @click="selectBlock($event)"
           :class="{selectedUser: checkSelectedUser(8), selectedComputer: checkSelectedComputer(8)}"></div>
    </div>
  </section>

</template>

<script>

const WINNING_COMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


export default {

  name: 'HelloWorld',
  props: {},

  data() {
    return {
      selectedBlocksUser: [],
      selectedBlocksComputer: [],
      userUsingCombination: WINNING_COMBINATION,
      computerUsingCombination: WINNING_COMBINATION,
    }
  },

  methods: {
    restart() {
      this.selectedBlocksUser = [];
      this.selectedBlocksComputer = [];
      this.userUsingCombination = WINNING_COMBINATION;
      this.computerUsingCombination = WINNING_COMBINATION;
    },

    selectBlock(event) {
      if (this.selectedBlocksUser.includes(Number(event.target.id))) {
        return
      }
      this.selectedBlocksUser.push(Number(event.target.id));
      this.selectingBlockComputer(Number(event.target.id));
    },

    checkSelectedUser(id) {
      return this.selectedBlocksUser.includes(id);
    },

    checkSelectedComputer(id) {
      return this.selectedBlocksComputer.includes(id);
    },

    selectingBlockComputer(idButton) {
      this.computerUsingCombination = this.computerUsingCombination.filter(winnerMethod => !winnerMethod.includes(idButton));
      this.userUsingCombination = WINNING_COMBINATION.filter(winnerMethod => winnerMethod.includes(idButton));

      let selectedMethod;
      if (this.selectedBlocksUser.length >= 2) {
        let countSelectBlockUser;
        selectedMethod = this.userUsingCombination.find(method => {
          countSelectBlockUser = this.selectedBlocksUser.filter(idBlock => method.includes(idBlock));
          if (countSelectBlockUser.length === 2) {
            return !this.selectedBlocksComputer.some(el => method.includes(el));
          } else {
            return false;
          }
        })
      }
      console.log(this.selectedBlocksUser)
      console.log(this.selectedBlocksComputer)
      console.log(this.userUsingCombination)
      console.log(selectedMethod)

      let selectCombinate = selectedMethod ? selectedMethod : this.computerUsingCombination[0];
      try {
        selectCombinate.some(id => {
          if (!this.selectedBlocksComputer.includes(id) && !this.selectedBlocksUser.includes(id)) {
            this.selectedBlocksComputer.push(id);
            return true
          }
        })
      } catch {
        console.log('win')
      }

    }

  }
}
</script>


<style scoped>
section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

#game-board {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 100px;
  height: 100px;
  border: 1px coral solid;
}

.selectedUser {
  background: red;
}

.selectedComputer {
  background: blue;
}
</style>
