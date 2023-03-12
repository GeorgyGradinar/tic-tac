<template>
  <section class="game">
    <h1>Tic-Tac-toe</h1>

    <v-btn @click="restart()" class="button-restart">Restart</v-btn>

    <div class="inform">
      <span>Computer - <span class="selected-computer">{{ MARCKERS.COMPUTER }}</span></span>

      <span>You - <span class="selected-user">{{ MARCKERS.USER }}</span></span>

    </div>
    <div id="game-board">
      <div class="box"
           v-for="(quad, index) in 9" :key="quad.id"
           @click="selectBlock(index)"
           v-text="checkSelected(index)"
           :class="{
           'selected-user': checkSelected(index) === MARCKERS.USER,
           'selected-computer': checkSelected(index)=== MARCKERS.COMPUTER}">
      </div>
    </div>

    <h1 v-if="winner" class="winner"
        :class="{
        'winner-user': winner === WINNERS.USER,
        'winner-computer': winner === WINNERS.COMPUTER,
        'winner-draw': winner === WINNERS.NOBODY }"
    >Winner: {{ winner }}</h1>
  </section>

</template>

<script>

import {ELEMENTS, MARCKERS, WINNERS, WINNING_COMBINATION} from "@/constants";

export default {

  name: 'TicTacToe',
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
      MARCKERS,
      WINNERS
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
        return false;
      }
      this.selectedBlocksUser.push(event);
      this.handelSelection(event);
    },

    checkSelected(id) {
      if (this.selectedBlocksUser.includes(id)) {
        return MARCKERS.USER;
      }
      return this.selectedBlocksComputer.includes(id) ? MARCKERS.COMPUTER : MARCKERS.UNSELECTED;
    },

    handelSelection(buttonId) {
      this.computerUsingCombination = this.computerUsingCombination.filter(winnerMethod => !winnerMethod.includes(buttonId));
      this.userUsingCombination = WINNING_COMBINATION.filter(winnerMethod => winnerMethod.includes(buttonId));

      let selectedMethodForUser;
      let selectedMethodForComputer;

      if (this.selectedBlocksUser.length >= ELEMENTS.SECOND) {
        selectedMethodForUser = this.findUserMethod();
        selectedMethodForComputer = this.findComputerMethod();
      }

      if (!this.winner) {
        let selectCombinate = selectedMethodForComputer || selectedMethodForUser || this.computerUsingCombination[ELEMENTS.FIRST];
        this.isActiveBoard = false;
        setTimeout(() => {
          this.selectBlockComputer(selectCombinate);
          this.checkWinner(selectedMethodForComputer, WINNERS.COMPUTER);
          this.isActiveBoard = true;
        }, 500);

      }
    },

    findUserMethod() {
      let selectedMethodForUser = WINNING_COMBINATION.filter(method => {
        let countSelectBlockUser = this.selectedBlocksUser.filter(idBlock => method.includes(idBlock));
        if (countSelectBlockUser.length === ELEMENTS.THIRD) {
          this.checkWinner(method, WINNERS.USER);
          return method;
        }
        return countSelectBlockUser.length === ELEMENTS.SECOND ? !this.selectedBlocksComputer.some(el => method.includes(el)) : false;
      })

      if (!this.winner) {
        return selectedMethodForUser = selectedMethodForUser[ELEMENTS.FIRST];
      }
      return selectedMethodForUser;

    },

    findComputerMethod() {
      return this.computerUsingCombination.find(method => {
        let countSelectBlockComputer = this.selectedBlocksComputer.filter(idBlock => method.includes(idBlock));
        if (countSelectBlockComputer.length === ELEMENTS.SECOND) {
          return method;
        }
        return false;
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
        this.winner = WINNERS.NOBODY;
      }
      this.isActiveBoard = true;
    },

    checkWinner(chooseMethod, nameWinner) {
      if (!chooseMethod) {
        return false;
      }
      let selectedUser = nameWinner === WINNERS.COMPUTER ? this.selectedBlocksComputer : this.selectedBlocksUser;
      let countSelectBlock = selectedUser.filter(idBlock => chooseMethod.includes(idBlock));
      if (countSelectBlock.length === ELEMENTS.THIRD) {
        this.winner = nameWinner;
      }
    }

  }
}
</script>

<style scoped>
@import "@/assets/variables.css";

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

#game-board {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s linear;
}

.box {
  width: 150px;
  height: 150px;
  border: 2px var(--main-color) solid;
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
  background-color: var(--main-color);
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

.selected-user {
  color: var(--orange);
  pointer-events: none;
}

.selected-computer {
  color: var(--main-color);
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
  color: var(--orange);
  box-shadow: 0 0 0 0 var(--orange);
}

.winner-computer {
  color: var(--main-color);
  box-shadow: 0 0 0 0 var(--main-color);
}

.winner-draw {
  color: var(--green);
  box-shadow: 0 0 0 0 var(--green);
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
  .game {
    margin-bottom: 20px;
  }

  section {
    padding: 10px;
  }

  #game-board {
    width: 300px;
  }

  .box {
    width: 100px;
    height: 100px;
    font-size: 60px;
  }

  .inform {
    gap: 10px;
    font-size: 25px;
  }
}


</style>
