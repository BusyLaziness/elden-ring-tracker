/* ER_ASH_DB_PART | file: ash_part2.js | part: 2 | items: 20/20 (21-40) */
(function () {
  'use strict';

  var items = [
  {
    "id": "double_slash",
    "name": "Двойной удар",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%94%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Город магии Селлия (Звёздные пустоши)",
    "graceEn": "Sellia, Town of Sorcery",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> на крыше здания в западной части города <b>Селлия, город магии</b> в Звёздных пустошах (заберитесь по корням и лестницам)."
  },
  {
    "id": "sword_dance",
    "name": "Танец с мечом",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%B0%D0%BD%D0%B5%D1%86_%D1%81_%D0%BC%D0%B5%D1%87%D0%BE%D0%BC",
    "graceRu": "Руины у тракта (Озёрная Лиурния)",
    "graceEn": "Road to the Manor",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в лесной чаще к юго-западу от <b>Малого Древа Эрд</b> на западе <b>Озёрной Лиурнии</b> (между Узилищем кукушки и Поместьем Карии)."
  },
  {
    "id": "unsheathe",
    "name": "Обнажение клинка",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D0%B1%D0%BD%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0",
    "graceRu": "Берег у Агхила (Замогилье)",
    "graceEn": "Agheel Lake South",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в мелководье юго-восточной части <b>Озера Агхил</b> в Замогилье (рядом с группой больших крабов)."
  },
  {
    "id": "quickstep",
    "name": "Отшаг",
    "category": "Острые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D1%82%D1%88%D0%B0%D0%B3",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>800 рун</b>."
  },
  {
    "id": "bloodhound_s_step",
    "name": "Поступь ищейки",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BE%D1%81%D1%82%D1%83%D0%BF%D1%8C_%D0%B8%D1%89%D0%B5%D0%B9%D0%BA%D0%B8",
    "graceRu": "Башня Ленне (Драконий курган Грейолл)",
    "graceEn": "Lenne's Rise",
    "dlc": false,
    "guide": "Выпадает с полевого босса <b>Ночной всадник</b> (появляется только <b>ночью</b>) на мосту прямо перед <b>Башней Ленне</b> на северо-востоке Драконьего кургана."
  },
  {
    "id": "raptor_of_the_mists",
    "name": "Затаившийся хищник",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%B0%D1%82%D0%B0%D0%B8%D0%B2%D1%88%D0%B8%D0%B9%D1%81%D1%8F_%D1%85%D0%B8%D1%89%D0%BD%D0%B8%D0%BA",
    "graceRu": "Главные ворота академии (Озёрная Лиурния)",
    "graceEn": "Main Academy Gate",
    "dlc": false,
    "guide": "Выдаётся за помощь <b>Юре, охотнику на окровавленных пальцев</b> по красному знаку призыва на разрушенном мосту за северным барьером <b>Академии Райи Лукарии</b> (<b>пропускаемый предмет</b>: выполнить до встречи с Юрой во Второй церкви Марики)."
  },
  {
    "id": "beast_s_roar",
    "name": "Звериный рык",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%B2%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D0%BA",
    "graceRu": "Звериное святилище (Драконий курган Грейолл)",
    "graceEn": "Bestial Sanctum",
    "dlc": false,
    "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>4 Корней Смерти</b>."
  },
  {
    "id": "wing_stance",
    "name": "Поднять оружие",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D1%8C_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5",
    "graceRu": "Покои владыки замка (Замок Энсис)",
    "graceEn": "Castle-Lord's Chamber",
    "dlc": true,
    "guide": "Лежит в сундуке на вершине сторожевой башни <b>Замка Энсис</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Покои владыки замка</b> вернитесь на балкон, спрыгните на уступ справа и поднимитесь по лестнице в башню)."
  },
  {
    "id": "swift_slash",
    "name": "Быстрый удар",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%91%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Главные ворота пристанища (Теневой Альтус)",
    "graceEn": "Shadow Keep Main Gate",
    "dlc": true,
    "guide": "Выдаётся за помощь <b>Роговесту</b> против Леды по золотому знаку призыва в <b>Пристанище Теней</b> (<i>Shadow of the Erdtree</i>; <b>пропускаемый предмет</b>: исчезнет после победы над Мессмером или если помочь Леде)."
  },
  {
    "id": "blind_spot",
    "name": "Слепая зона",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%BB%D0%B5%D0%BF%D0%B0%D1%8F_%D0%B7%D0%BE%D0%BD%D0%B0",
    "graceRu": "Выжженные руины (Равнина Надгробий)",
    "graceEn": "Scorched Ruins",
    "dlc": true,
    "guide": "Встроен в стартовый <b>Клинок для левой руки</b>, который лежит в сундуке в лагере у обожжённой колонны к северо-востоку от <b>Выжженных руин</b> на <b>Равнине Надгробий</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "raging_beast",
    "name": "Бешеный зверь",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%91%D0%B5%D1%88%D0%B5%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B2%D0%B5%D1%80%D1%8C",
    "graceRu": "Лесной тракт (Равнина Надгробий)",
    "graceEn": "Gravesite Plain",
    "dlc": true,
    "guide": "Встроен в оружие <b>Коготь зверя</b>, которое падает с дикого NPC <b>Логур, звериный коготь</b> в лесу к юго-востоку от первой благодати <b>Равнина Надгробий</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "savagery",
    "name": "Хищные когти",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A5%D0%B8%D1%89%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BE%D0%B3%D1%82%D0%B8",
    "graceRu": "Северное безымянное узилище (Равнина Надгробий)",
    "graceEn": "Northern Nameless Mausoleum",
    "dlc": true,
    "guide": "Встроен в оружие <b>Коготь красного медведя</b>, которое выпадает за победу над боссом <b>Красный медведь</b> в <b>Северном безымянном узилище</b> на возвышенности к северо-западу от Равнины Надгробий (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "scattershot_throw",
    "name": "Разброс",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D0%B0%D0%B7%D0%B1%D1%80%D0%BE%D1%81",
    "graceRu": "Кузница разрушенного лабиринта (Теневой Альтус)",
    "graceEn": "Ruined Forge of Starfall Past",
    "dlc": true,
    "guide": "Встроен в кинжал <b>Гладиус с письменами</b>, который лежит на трупе в нише за большим падающим рычагом в подземелье <b>Кузница разрушенного лабиринта</b> на <b>Теневом Альтусе</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "piercing_throw",
    "name": "Пронзающий бросок",
    "category": "Острые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%BE%D0%BD%D0%B7%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%B1%D1%80%D0%BE%D1%81%D0%BE%D0%BA",
    "graceRu": "Древние руины у подножия (Руины древней обители Рауха)",
    "graceEn": "Ancient Ruins Base",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном уступе у подножия скал в северной части <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; к западу от благодати <b>Древние руины у подножия</b>)."
  },
  {
    "id": "square_off",
    "name": "Расплата",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D0%B0%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%B0",
    "graceRu": "Берег реки Сиофра (Река Сиофра)",
    "graceEn": "Siofra River Bank",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном выступе над пропастью в подземной локации <b>Река Сиофра</b> (к югу от деревянных лесов и разрушенного моста)."
  },
  {
    "id": "charge_forth",
    "name": "Рывок вперёд",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D1%8B%D0%B2%D0%BE%D0%BA_%D0%B2%D0%BF%D0%B5%D1%80%D1%91%D0%B4",
    "graceRu": "Вход в Академию (Озёрная Лиурния)",
    "graceEn": "Gate Town Bridge",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на северном конце разрушенного моста к востоку от <b>Предместья академии</b> в Озёрной Лиурнии."
  },
  {
    "id": "spinning_strikes",
    "name": "Удар во вращении",
    "category": "Качественные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80%D1%8B_%D0%B2%D0%BE_%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B8",
    "graceRu": "Лачуга мстителя (Озёрная Лиурния)",
    "graceEn": "Revenger's Shack",
    "dlc": false,
    "guide": "Извлекается из алебарды <b>Алебарда рыцаря-изгнанника (+8)</b>, которую вы получите по квесту <b>Ирины и Эдгара</b> (после победы над <b>Эдгаром Мстителем</b> при его вторжении в <b>Лачуге мстителя</b> на западе Озёрной Лиурнии)."
  },
  {
    "id": "giant_hunt",
    "name": "Охота на великана",
    "category": "Качественные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D1%85%D0%BE%D1%82%D0%B0_%D0%BD%D0%B0_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D0%B0",
    "graceRu": "Восточный тракт Беллума (Озёрная Лиурния)",
    "graceEn": "East Raya Lucaria Gate",
    "dlc": false,
    "guide": "Выпадает с полевого босса <b>Ночной всадник</b> (появляется только <b>ночью</b>) на тракте, ведущем на север от <b>Восточных ворот Райи Лукарии</b> к Великому подъёмнику Дектуса."
  },
  {
    "id": "storm_blade",
    "name": "Грозовой клинок",
    "category": "Качественные",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%93%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>1 800 рун</b>."
  },
  {
    "id": "storm_assault",
    "name": "Грозовая атака",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%93%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B0%D1%82%D0%B0%D0%BA%D0%B0",
    "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
    "graceEn": "Rampart Tower",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на крышах <b>Замка Грозовой Завесы</b> (от благодати <b>Башня бастиона</b> выйдите наружу к птицам с бочками и перепрыгните через парапет на соседнюю крышу)."
  }
];

  window.ASH_PART_2 = items;
  window.ASH_PART2 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(2, items);
  }
})();
