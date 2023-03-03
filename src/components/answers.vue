<template>

  <v-expansion-panels variant="popout">
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h3 class="title">Cайты других игровых компаний.
          Приведите пример 5 новостных публикаций, которые очень понравились вам по подаче информации.</h3>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="answer" v-for="answer in feedback" :key="answer.id">
          <a :href="answer.link" target="_blank">Link</a>
          <span>2. {{ answer.decideTask }}</span>
          <span>3. {{ answer.feedbackDesign }}</span>
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

      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels variant="popout">
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h3 class="title">Анализ страницы «Об игре»</h3>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <span>{{ mainArticle }}</span>
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
          decideTask: 'Рассказывает фанатам про новый виток игры с новыми фичами и бонусами за выполнение миссий.',
          feedbackDesign: 'Оформление сделано в стиле игры и есть ощущение, что ты не покидаешь вселенную игры а внутри ее читаешь новости.'
        },
        {
          link: 'https://korabli.su/ru/news/general-news/early-access-to-british-submarines/',
          decideTask: 'можно узнать о добавлении возможностей для новичков и демонстрация оснащения лодок',
          feedbackDesign: 'Все выполнено в одной стилистике, отлично спроектированна страница, так как все интуитивно понятно и доступно.'
        },
        {
          link: 'https://wargaming.com/en/news/wows-blitz-released/',
          decideTask: 'информирует нас о старте игры на мобильных платформах',
          feedbackDesign: 'это не несет в себе изменения внутри игры, по этому простой дизайн отлично подходит для этой новости.'
        },
        {
          link: 'https://korabli.su/ru/news/history/armada-alliance/',
          decideTask: 'из этой новости узнаем, что эта ветка игры создана на базе исторических событий.',
          feedbackDesign: 'Мне понравилось то как добавили стили к заголовками в стиле морских кораблей.'
        },
        {
          link: 'https://korabli.su/ru/news/sales-and-events/armory-121-british-submarines/',
          decideTask: 'Инструкция как можно получить Британскую лодку.',
          feedbackDesign: 'Отлично подобнные изображения и визуализация жетонов, все интуитивно понятно.'
        },

      ],
      mainArticle: 'Мне понравилось в более новом новосном посте, проработанная цветопередача картинок, все в одном стиле, ' +
          'так как в более старой новости были картинки которые выбивались из основного стиля, так же темы которые заинтересовали' +
          ' можно расстянуть и прочитать детали, так более удобно и читабельно чем в старом посте информация расстянута на всю страницу.' +
          '  Минусы: переход на другие новости работает при клике вне стрелки так же эти стрелки разъезжаются при наведении рядом возле стрелки.  ' +
          '  Что бы изменил: На подтемах изменил бы или убрал стрелку что бы развернуть новость и шрифт выбивается из основного стиля, ' +
          ' так же этот блок при нажатии открытие сделал бы более плавым. Внутри темы есть картинки при наведение на которые появляется скролл нижний,' +
          ' я бы изменил на возможность прокрутки колесиком и стрелки по бокам. Убрал бы просмотр картинок, так как размер картинки практически не изменяется.',
      analysisPage: 'По моему мнение нужно убрать консоль логи и консоль варны.  В мобильной версии: блок с деталями не скрывается при нажатии вне блока. ' +
          ' При переходе на страницу системные требования отсутсвует кнопка возврата на страницу об игре.  В версии десктоп:   так же на странице про системные ' +
          'требования отсутсвует возможность возврата. В блоке про погоду видео запускается при наведении на этот блок, я бы запускал его по' +
          ' дефолту при запуске, это бы добавило странице больше интерактивности. Так же набор картинок со скролом добавил бы автоскрол, что бы картинки сами переключались.',
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

.title {
  font-weight: 700;
}

svg{
  width: 50px;
}

</style>
