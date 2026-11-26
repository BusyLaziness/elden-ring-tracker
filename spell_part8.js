/* ER_SPELL_DB_PART | file: spell_part8.js | part: 8 | items: 20/20 (141-160) */
(function () {
  'use strict';

  var items = [
    {
      "id": "florissaxs_dragonbolt",
      "name": "Драконья молния Флориссакс",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8C%D1%8F_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D1%8F_%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D1%81%D1%81%D0%B0%D0%BA%D1%81",
      "graceRu": "Алтарь драконьего причастия (Зубастая гора)",
      "graceEn": "Grand Altar of Dragon Communion",
      "dlc": true,
      "guide": "Выдаётся в награду от жрицы <b>Флориссакс</b> у <b>Алтаря драконьего причастия</b> (<i>Shadow of the Erdtree</i>) после победы над <b>Бейлом Ужасным</b> на вершине Зубастой горы (если не усыплять её снотворным Тиолье; <b>пропускаемый предмет</b>)."
    },
    {
      "id": "electrocharge",
      "name": "Электроразряд",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%80%D0%B0%D0%B7%D1%80%D1%8F%D0%B4",
      "graceRu": "Катакомбы под туманным разломом (Теневой Альтус)",
      "graceEn": "Fog Rift Catacombs",
      "dlc": true,
      "guide": "Лежит в сундуке на верхнем уступе подземелья <b>Катакомбы под туманным разломом</b> на северо-западе <b>Теневого Альтуса</b> (запрыгните на поднимающийся шипастый потолок и пройдите в боковую комнату)."
    },
    {
      "id": "catch_flame",
      "name": "Поджог",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%B4%D0%B6%D0%BE%D0%B3",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовая молитва класса <b>Пророк</b>. Остальные классы могут купить заклинание у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>600 рун</b> с самого начала игры (при уходе Корина на Плато Альтус — у Мириэля после передачи молитвослова)."
    },
    {
      "id": "o_flame",
      "name": "О пламя!",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F%21",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> в Храме клятв за <b>2 500 рун</b> после передачи им <b>Молитвослова огненного монаха</b> (находится в сундуке в южном лагере огненных монахов у границы Озёрной Лиурнии и Плато Альтус)."
    },
    {
      "id": "flame_sling",
      "name": "Огненный бросок",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D1%80%D0%BE%D1%81%D0%BE%D0%BA",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>800 рун</b> с самого начала игры."
    },
    {
      "id": "giantsflame_take_thee",
      "name": "Великанское пламя поглотит тебя",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F_%D0%BF%D0%BE%D0%B3%D0%BB%D0%BE%D1%82%D0%B8%D1%82_%D1%82%D0%B5%D0%B1%D1%8F",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> за <b>13 000 рун</b> после передачи им <b>Молитвослова великана</b> (лежит на самой вершине <b>Гарнизона стражей</b> на Вершинах великанов, за победой над Старейшиной Арганом)."
    },
    {
      "id": "flame_fall_upon_them",
      "name": "Пламя, испепели их",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F,_%D0%B8%D1%81%D0%BF%D0%B5%D0%BF%D0%B5%D0%BB%D0%B8_%D0%B8%D1%85",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> за <b>10 000 рун</b> после передачи им <b>Молитвослова великана</b> с вершины <b>Гарнизона стражей</b> на Вершинах великанов."
    },
    {
      "id": "flame_of_the_fell_god",
      "name": "Пламя падшего бога",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%BF%D0%B0%D0%B4%D1%88%D0%B5%D0%B3%D0%BE_%D0%B1%D0%BE%D0%B3%D0%B0",
      "graceRu": "Живописный остров (Озёрная Лиурния)",
      "graceEn": "Scenic Isle",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Адан, вор огня</b> внутри <b>Узилища злодея</b> на южном скалистом плато <b>Озёрной Лиурнии</b> (попасть на плато можно через духовный источник к востоку от благодати <b>Живописный остров</b>)."
    },
    {
      "id": "surge_o_flame",
      "name": "Гори ясно, пламя!",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BE%D1%80%D0%B8_%D1%8F%D1%81%D0%BD%D0%BE,_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F%21",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> за <b>1 800 рун</b> после передачи им <b>Молитвослова огненного монаха</b> из южного лагеря огненных монахов в Озёрной Лиурнии."
    },
    {
      "id": "whirl_o_flame",
      "name": "Кружись, пламя!",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%83%D0%B6%D0%B8%D1%81%D1%8C,_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F%21",
      "graceRu": "Девятый лагерь у вулкана Гельмир (Вулкан Гельмир)",
      "graceEn": "Ninth Mt. Gelmir Campsite",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на каменном мосту над ущельем с лавой к юго-западу от <b>Девятого лагеря у вулкана Гельмир</b> (по пути к Магмовому змею)."
    },
    {
      "id": "burn_o_flame",
      "name": "Обжигай, пламя!",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B1%D0%B6%D0%B8%D0%B3%D0%B0%D0%B9,_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F%21",
      "graceRu": "Огненный великан (Вершины великанов)",
      "graceEn": "Fire Giant",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Огненном великане</b> после победы над сюжетным боссом <b>Огненный великан</b> на Вершинах великанов."
    },
    {
      "id": "flame_cleanse_me",
      "name": "Пламя, очисти меня от скверны",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F,_%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B8_%D0%BC%D0%B5%D0%BD%D1%8F_%D0%BE%D1%82_%D1%81%D0%BA%D0%B2%D0%B5%D1%80%D0%BD%D1%8B",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Лежит на трупе в центре лагеря <b>Огненных монахов</b> к юго-востоку от <b>Храма клятв</b> в восточной части Озёрной Лиурнии (рядом с костром под охраной монахов)."
    },
    {
      "id": "flame_protect_me",
      "name": "Пламя, защити меня",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F,_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B8_%D0%BC%D0%B5%D0%BD%D1%8F",
      "graceRu": "Могила героя-победителя великанов (Вершины великанов)",
      "graceEn": "Giant-Conquering Hero's Grave",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на заснеженном уступе за лагерем огненных монахов к северо-востоку от <b>Могилы героя-победителя великанов</b> на Вершинах великанов."
    },
    {
      "id": "flame_grant_me_strength",
      "name": "Пламя, даруй мне силу",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F,_%D0%B4%D0%B0%D1%80%D1%83%D0%B9_%D0%BC%D0%BD%D0%B5_%D1%81%D0%B8%D0%BB%D1%83",
      "graceRu": "Форт Гаэль (Звёздные пустоши)",
      "graceEn": "Fort Gael North",
      "dlc": false,
      "guide": "Лежит на трупе между двумя огненными колесницами за западной внешней стеной <b>Форта Гаэль</b> на границе Замогилья и Звёздных пустошей."
    },
    {
      "id": "fire_s_deadly_sin",
      "name": "Смертельный грех",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BC%D0%B5%D1%80%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B3%D1%80%D0%B5%D1%85",
      "graceRu": "Мельница (Плато Альтус)",
      "graceEn": "Windmill Village",
      "dlc": false,
      "guide": "Выдаётся при осмотре призрачного стула на утёсе к югу от <b>Мельницы</b> на севере Плато Альтус после того, как вы найдёте <b>Картину «Бегство от безрассудства»</b> на первом этаже <b>Укреплённого поместья</b> в Лейнделле (до пепла)."
    },
    {
      "id": "black_flame",
      "name": "Чёрное пламя",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D1%91%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> за <b>7 500 рун</b> после передачи им <b>Молитвослова божественной кожи</b> (лежит в сундуке за барьером мечевидного ключа в подвале <b>Замка Грозовой Завесы</b>)."
    },
    {
      "id": "scouring_black_flame",
      "name": "Карающее чёрное пламя",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D1%8E%D1%89%D0%B5%D0%B5_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F",
      "graceRu": "Деревня у мельницы (Плато Альтус)",
      "graceEn": "Windmill Heights",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Апостол божественной кожи</b> на самой вершине локации <b>Деревня у мельницы (Доминула)</b> на севере Плато Альтус."
    },
    {
      "id": "black_flame_ritual",
      "name": "Ритуал чёрного пламени",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B8%D1%82%D1%83%D0%B0%D0%BB_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Пещера Призывателя душ (Вершины великанов)",
      "graceEn": "Spiritcaller Cave",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над парным боссом <b>Апостол и Аристократ божественной кожи</b> в конце подземелья <b>Пещера Призывателя душ</b> на замёрзшем озере на Вершинах великанов (требуются <b>2 мечевидных ключа</b>)."
    },
    {
      "id": "black_flame_blade",
      "name": "Клинок чёрного пламени",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> за <b>6 500 рун</b> после передачи им <b>Молитвослова божественной кожи</b> из подвала <b>Замка Грозовой Завесы</b>."
    },
    {
      "id": "black_flame_s_protection",
      "name": "Защита чёрного пламени",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Святое Древо Микеллы (Святое Древо Микеллы)",
      "graceEn": "Haligtree Canopy",
      "dlc": false,
      "guide": "Выдаётся <b>Сэром Гидеоном Офниром Всеведущим</b> в Крепости Круглого стола после того, как вы впервые попадёте в <b>Святое Древо Микеллы</b> (<b>пропускаемый предмет</b>: забрать до превращения Лейнделла в столицу пепла)."
    }
  ];

  window.SPELL_PART_8 = items;
  window.SPELL_PART8 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(8, items);
  }
})();
