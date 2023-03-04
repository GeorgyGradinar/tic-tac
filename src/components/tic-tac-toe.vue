<template>
  <section class="game">
    <h1>Tic-Tac-toe</h1>

    <v-btn @click="restart()" class="button-restart">Restart</v-btn>

    <div class="inform">
      <span>Computer - <span class="selectedComputer">o</span></span>

      <span>You - <span class="selectedUser">x</span></span>

    </div>
    <div id="game-board">
      <div class="box"
           v-for="(quad, index) in 9" :key="quad.id"
           @click="selectBlock(index)"
           v-text="checkSelected(index)"
           :class="{
           selectedUser: checkSelected(index) === 'x',
           selectedComputer: checkSelected(index)=== 'o'}">
      </div>
    </div>

    <h1 v-if="winner" class="winner"
        :class="{
        'winner-user': winner === 'You',
        'winner-computer': winner === 'Computer',
        'winner-draw': winner === 'DRAW' }"
    >Winner: {{ winner }}</h1>
  </section>

  <section class="answer">
    <answers></answers>
  </section>


</template>

<script>

import answers from "@/components/answers";

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
const FIRST_ELEMENT = 0;
const SECOND_ELEMENT = 2;

export default {

  name: 'HelloWorld',
  components: {answers},
  props: {},

  data() {
    return {
      isActiveBoard: true,
      winner: '',
      winnerCombination: [],
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

    checkSelected(id) {
      if (this.selectedBlocksUser.includes(id)) {
        return 'x'
      } else if (this.selectedBlocksComputer.includes(id)) {
        return 'o'
      } else {
        return ''
      }
    },

    handelSelection(idButton) {
      this.computerUsingCombination = this.computerUsingCombination.filter(winnerMethod => !winnerMethod.includes(idButton));
      this.userUsingCombination = WINNING_COMBINATION.filter(winnerMethod => winnerMethod.includes(idButton));

      let selectedMethodForUser = undefined;
      let selectedMethodForComputer = undefined;

      if (this.selectedBlocksUser.length >= SECOND_ELEMENT) {
        selectedMethodForUser = this.findMethodUser();
        selectedMethodForComputer = this.findMethodComputer();
      }

      if (!this.winner) {
        let selectCombinate = selectedMethodForComputer || selectedMethodForUser || this.computerUsingCombination[FIRST_ELEMENT];
        this.isActiveBoard = false;
        setTimeout(() => {
          this.selectBlockComputer(selectCombinate);
          this.checkWinner(selectedMethodForComputer, 'Computer');
          this.isActiveBoard = true;
        }, 500)

      }
    },

    findMethodUser() {
      let selectedMethodForUser = WINNING_COMBINATION.filter(method => {
        let countSelectBlockUser = this.selectedBlocksUser.filter(idBlock => method.includes(idBlock));
        const third_element = 3;
        if (countSelectBlockUser.length === third_element) {
          this.checkWinner(method, 'You');
          return method;
        } else if (countSelectBlockUser.length === SECOND_ELEMENT) {
          return !this.selectedBlocksComputer.some(el => method.includes(el));
        } else {
          return false;
        }
      })

      if (!this.winner) {
        return selectedMethodForUser = selectedMethodForUser[FIRST_ELEMENT];
      } else {
        return selectedMethodForUser;
      }
    },

    findMethodComputer() {
      return this.computerUsingCombination.find(method => {
        let countSelectBlockComputer = this.selectedBlocksComputer.filter(idBlock => method.includes(idBlock));
        if (countSelectBlockComputer.length === SECOND_ELEMENT) {
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
      let selectedUser = nameWinner === 'Computer' ? this.selectedBlocksComputer : this.selectedBlocksUser;
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
  padding: 50px;
}

.game {
  background: white;
}

.answer {
  background: linear-gradient(0deg, rgba(160, 134, 182, 1) 0%, rgba(108, 33, 170, 1) 100%);
}

#game-board {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s linear;
}

.box {
  width: 150px;
  height: 150px;
  border: 2px #7B2CBF solid;
  font-weight: 700;
  font-size: 80px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
}

.box:hover {
  background-color: #f4e8ff;
}

.button-restart {
  background-color: #7B2CBF;
  font-weight: 700;
  color: white;
}

.button-restart:hover {
  background-color: #db3a34;
}

.inform {
  display: flex;
  gap: 50px;
  font-weight: 700;
  font-size: 30px;
  transition: all 0.3s linear;
}

.selectedUser {
  color: #FF7900;
  pointer-events: none;
}

.selectedComputer {
  color: #3C096C;
  pointer-events: none;
}

.winner {
  border-radius: 10px;
  margin-top: 20px;
  padding: 0 10px 0 10px;
  transform: scale(1);
  animation: pulse 2s infinite;
}

.winner-user {
  color: #FF7900;
  box-shadow: 0 0 0 0 rgb(255, 121, 0);
}

.winner-computer {
  color: #3C096C;
  box-shadow: 0 0 0 0 rgb(60, 9, 108);
}

.winner-draw {
  color: #2dc653;
  box-shadow: 0 0 0 0 rgb(45, 198, 83);
}


@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

@media screen and (max-width: 500px) {
  .game{
    margin-bottom: 20px;
  }

  section{
    padding: 10px;
  }

  #game-board{
    width: 300px;
  }

  .box{
    width: 100px;
    height: 100px;
    font-size: 60px;
  }

  .inform{
    gap: 10px;
    font-size: 25px;
  }
}


</style>
