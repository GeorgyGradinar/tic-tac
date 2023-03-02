<template>
  <section>
    <h1>Tic-Tac-toe</h1>

    <div class="wrapper-block--choose-game">
      <label class="container">
        <input type="radio" checked="checked" name="radio" value="one" v-model="chooseKindGame">
        Player vs Computer
      </label>
      <label class="container">
        <input type="radio" name="radio" value="two" v-model="chooseKindGame">
        Player vs Player
      </label>
    </div>

    <v-btn @click="restart()">Restart</v-btn>

    <div id="game-board">
      <div class="box"
           v-for="(quad, index) in 9" :key="quad.id"
           @click="selectBlock(index)"
           :class="{
           selectedUser: checkSelectedUser(index),
           selectedComputer: checkSelectedComputer(index)}">
      </div>
    </div>

    <h1 v-if="winner">Winner: {{ winner }}</h1>
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
      isActiveBoard: true,
      winner: '',
      selectedBlocksUser: [],
      selectedBlocksComputer: [],
      userUsingCombination: WINNING_COMBINATION,
      computerUsingCombination: WINNING_COMBINATION,
      chooseKindGame: '',
    }
  },

  methods: {
    restart() {
      this.winner = '';
      this.selectedBlocksUser = [];
      this.selectedBlocksComputer = [];
      this.userUsingCombination = WINNING_COMBINATION;
      this.computerUsingCombination = WINNING_COMBINATION;
    },

    selectBlock(event) {
      if (this.selectedBlocksUser.includes(event)
          || this.selectedBlocksComputer.includes(event)
          || this.winner
          || !this.isActiveBoard) {
        return false
      }
      this.selectedBlocksUser.push(event);
      this.handelSelection(event);
    },

    checkSelectedUser(id) {
      return this.selectedBlocksUser.includes(id);
    },

    checkSelectedComputer(id) {
      return this.selectedBlocksComputer.includes(id);
    },

    handelSelection(idButton) {
      this.computerUsingCombination = this.computerUsingCombination.filter(winnerMethod => !winnerMethod.includes(idButton));
      this.userUsingCombination = WINNING_COMBINATION.filter(winnerMethod => winnerMethod.includes(idButton));

      let selectedMethodForUser = undefined;
      let selectedMethodForComputer = undefined;

      if (this.selectedBlocksUser.length >= 2) {
        selectedMethodForUser = this.findMethodUser();
        selectedMethodForComputer = this.findMethodComputer();
      }

      if (!this.winner) {
        let selectCombinate = selectedMethodForComputer || selectedMethodForUser || this.computerUsingCombination[0];
        this.isActiveBoard = false;
        setTimeout(()=>{
          this.selectBlockComputer(selectCombinate);
          this.checkWinner(selectedMethodForComputer, 'computer');
          this.isActiveBoard = true;
        }, 500)

      }
    },

    findMethodUser() {
      let selectedMethodForUser = WINNING_COMBINATION.filter(method => {
        let countSelectBlockUser = this.selectedBlocksUser.filter(idBlock => method.includes(idBlock));

        if (countSelectBlockUser.length === 3) {
          this.checkWinner(method, 'Player');
          return method;
        } else if (countSelectBlockUser.length === 2) {
          return !this.selectedBlocksComputer.some(el => method.includes(el));
        } else {
          return false;
        }
      })

      if (!this.winner) {
        return selectedMethodForUser = selectedMethodForUser[0];
      } else {
        return selectedMethodForUser;
      }
    },

    findMethodComputer() {
      return this.computerUsingCombination.find(method => {
        let countSelectBlockComputer = this.selectedBlocksComputer.filter(idBlock => method.includes(idBlock));
        if (countSelectBlockComputer.length === 2) {
          return method;
        } else {
          return false;
        }
      })
    },

    selectBlockComputer(selectCombinate) {
      this.isActiveBoard = false;
      try {
          selectCombinate.some(id => {
            if (!this.selectedBlocksComputer.includes(id) && !this.selectedBlocksUser.includes(id)) {
              this.selectedBlocksComputer.push(id);
              return true;
            }
          })
      } catch {
        this.winner = 'DRAW';
      }
        this.isActiveBoard = true;
    },

    checkWinner(chooseMethod, nameWinner) {
      if (!chooseMethod) {
        return false;
      }
      let selectedUser = nameWinner === 'computer' ? this.selectedBlocksComputer : this.selectedBlocksUser;
      let countSelectBlock = selectedUser.filter(idBlock => chooseMethod.includes(idBlock));
      if (countSelectBlock.length === 3) {
        this.winner = nameWinner;
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

.wrapper-block--choose-game {
  display: flex;
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
