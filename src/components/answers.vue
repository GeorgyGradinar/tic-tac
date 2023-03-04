<template>

  <v-expansion-panels variant="popout">
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h3 class="title">Сайты других игровых компаний.
          Приведите пример 5 новостных публикаций, которые очень понравились вам по подаче информации.</h3>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="answer analise" v-for="answer in feedback" :key="answer.id">
          <ul>
            <li><a :href="answer.link" target="_blank">Link</a></li>
            <li><span>{{ answer.decideTask }}</span></li>
            <li><span>{{ answer.feedbackDesign }}</span></li>
          </ul>
        </div>

      </v-expansion-panel-text>

    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels variant="popout">
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h3 class="title">Самая главная статья каждого месяца — патч-ноут, «обновление».</h3>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="answer">
          <span>{{ mainArticle }}</span>
        </div>
        <div class="answer-minus">
          <h4>Минусы: </h4>
          <p>переход на другие новости работает при клике вне стрелки, так же эти стрелки разъезжаются при наведении
            рядом возле стрелки</p>
        </div>
        <div class="answer-minus">
          <h4>Что бы изменил:</h4>
          <ul class="change">
            <li><span>На подтемах изменил бы или убрал стрелку, чтобы развернуть новость</span></li>
            <li><span>Шрифт выбивается из основного стиля</span></li>
            <li><span>Добавил бы анимацию на плавное открытие этого блока</span></li>
            <li><span>Внутри темы есть картинки, при наведение на которые появляется скролл нижний, я бы изменил на возможность прокрутки колесиком и стрелки по бокам</span>
            </li>
            <li><span>Убрал бы просмотр картинок, так как размер картинки практически не изменяется</span></li>
          </ul>
        </div>

      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels variant="popout">
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h3 class="title">Анализ страницы «Об игре»</h3>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="wrapper-about-game">
          <ul>
            <li><span>Убрать консоль логи и консоль варнинги</span></li>
            <li>
              <span>При переходе на страницу "Системные требования" отсутствует ссылка возврата на страницу "Об игре"</span>
            </li>
            <li><span>В блоке "Смена погоды в бою" видео запускается при наведении на этот блок, я бы запускал его по
              умолчанию при запуске, это бы добавило странице больше интерактивности</span>
            </li>
            <li><span>Так же набор картинок со скроллом добавил бы автоскролл, чтобы картинки сами переключались</span>
            </li>
          </ul>

          <h4>В мобильной версии:</h4>
          <ul>
            <li><span>navigation bar не скрывается при нажатии вне блока</span></li>
          </ul>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "answers",


  data() {
    return {
      feedback: [
        {
          link: 'https://www.rockstargames.com/gta-online?info=6937',
          decideTask: 'Рассказывает фанатам про новый виток игры с новыми фичами и бонусами за выполнение миссий',
          feedbackDesign: 'оформление сделано в стиле игры и есть ощущение, что ты не покидаешь вселенную, а внутри нее читаешь новости'
        },
        {
          link: 'https://www.gameloft.com/blog/players/a8-gv-crossover-event',
          decideTask: 'Мы узнаем об интеграции двух игр и проведении соревновательного мероприятия',
          feedbackDesign: 'Тект сразу погружает тебя во вселенную гонок и атмосферу соревнований'
        },
        {
          link: 'https://wargaming.com/en/news/wows-blitz-released/',
          decideTask: 'информирует нас о старте игры на мобильных платформах',
          feedbackDesign: 'это не несет в себе изменения внутри игры, поэтому простой дизайн отлично подходит для этой новости, достаточно простой и информативный текст'
        },
        {
          link: 'https://worldofwarships.eu/en/news/history/armada-alliance/',
          decideTask: 'из этой новости узнаем, что эта ветка игры создана на базе исторических событий',
          feedbackDesign: 'Мне понравилось то, как стилизовали заголовками в стиле морских кораблей, так же детально погрузили в историю и передали дух сражения.' +
              ' Так же детально описаны модернизации лодок'
        },
        {
          link: 'https://wowslegends.com/blogs/entry/1202-brawl-winter-mayhem/',
          decideTask: 'Мы узнаем об открытии зимнего сезона',
          feedbackDesign: 'Достаточно хорошо изложена информация о возможностях и о наградах за победы в данной ветке'
        },

      ],
      mainArticle: 'Мне понравилось в новом новостном пост, проработанная цветокорректировка картинок, все в едином стиле, так ' +
          'как в старой новости были картинки, которые выбивались из основного стиля, так же темы, которые заинтересовали, ' +
          'можно растянуть и прочитать детали, так удобнее и читабельнее, чем в старом посте, так как информация растянута на всю страницу.',
    }
  },

}
</script>

<style scoped>

.v-expansion-panels--variant-popout > .v-expansion-panel {
  max-width: 1000px;
  margin: 10px;
  background-color: white;
}

.answer {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.analise{
  padding: 10px;
}

.title {
  font-weight: 700;
}

svg {
  width: 50px;
}

.wrapper-about-game {
  padding: 10px;
}

ul li {
  list-style-type: square;
  color: #7B2CBF;
}

ul li span {
  color: black;
}

.change {
  padding: 0 10px;
}

</style>
