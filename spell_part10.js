/* ER_SPELL_DB_PART | file: spell_part10.js | part: 10 | items: 20/20 (181-200) */
(function () {
  'use strict';

  var items = [
    {
      "id": "unendurable_frenzy",
      "name": "Невыносимое безумие",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%B2%D1%8B%D0%BD%D0%BE%D1%81%D0%B8%D0%BC%D0%BE%D0%B5_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D0%B5",
      "graceRu": "Священное заснеженное поле (Священное заснеженное поле)",
      "graceEn": "Yelough Anix Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подземном подвале <b>Руин Йелоу Аникс</b> на юго-западе <b>Священного заснеженного поля</b> (вход в подвал расположен в южной части руин за лагерем безумных солдат)."
    },
    {
      "id": "frenzied_burst",
      "name": "Яростный залп",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AF%D1%80%D0%BE%D1%81%D1%82%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BB%D0%BF",
      "graceRu": "Храм Сдержанности (Озёрная Лиурния)",
      "graceEn": "Church of Inhibition",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на скалистом уступе к югу от <b>Храма Сдержанности</b> (по пути от Деревни Яростного Пламени на северо-востоке Озёрной Лиурнии)."
    },
    {
      "id": "howl_of_shabriri",
      "name": "Вой Шабрири",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%BE%D0%B9_%D0%A8%D0%B0%D0%B1%D1%80%D0%B8%D1%80%D0%B8",
      "graceRu": "Башня Яростного Пламени (Озёрная Лиурния)",
      "graceEn": "Frenzied Flame Village Outskirts",
      "dlc": false,
      "guide": "Лежит в сундуке на втором этаже <b>Башни Яростного Пламени</b> на северо-востоке Озёрной Лиурнии (быстро поднимитесь по приставным лестницам и убейте жрецов наверху, чтобы погасить око безумия)."
    },
    {
      "id": "inescapable_frenzy",
      "name": "Неотвратимое безумие",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%BE%D1%82%D0%B2%D1%80%D0%B0%D1%82%D0%B8%D0%BC%D0%BE%D0%B5_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D0%B5",
      "graceRu": "Заброшенный гроб (Подземелье отчуждения)",
      "graceEn": "Forsaken Depths",
      "dlc": false,
      "guide": "Лежит на трупе на одном из нижних каменных стропил в пропасти <b>Храма Яростного Пламени</b> под ареной Мога в <b>Подземелье отчуждения</b> (осторожно спускайтесь вниз по гробам и балкам)."
    },
    {
      "id": "midra_s_flame_of_frenzy",
      "name": "Яростное Пламя Мидры",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AF%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%BE%D0%B5_%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%9C%D0%B8%D0%B4%D1%80%D1%8B",
      "graceRu": "Покои за обсуждениями (Лес Бездны)",
      "graceEn": "Discussion Chamber",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Владыке Яростного Пламени</b> после победы над секретным боссом <b>Мидра, Владыка Яростного Пламени</b> в <b>Особняке Мидры</b> (<i>Shadow of the Erdtree</i>)."
    },
    {
      "id": "dragonfire",
      "name": "Дыхание дракона",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0",
      "graceRu": "Храм драконьего причастия (Замогилье)",
      "graceEn": "Church of Dragon Communion",
      "dlc": false,
      "guide": "Обменивается у алтаря в <b>Храме драконьего причастия</b> (на острове у западного берега Замогилья, путь через Прибрежную пещеру) или в <b>Соборе драконьего причастия</b> (Звёздные пустоши) за <b>1 Драконье сердце</b>."
    },
    {
      "id": "agheels_flame",
      "name": "Пламя Эгхила",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%AD%D0%B3%D1%85%D0%B8%D0%BB%D0%B0",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> (юг Звёздных пустошей) за <b>2 Драконьих сердца</b> после победы над полевым боссом <b>Летучий дракон Эгхил</b> на озере Агхил в Замогилье."
    },
    {
      "id": "magma_breath",
      "name": "Лавовое дыхание",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B0%D0%B2%D0%BE%D0%B2%D0%BE%D0%B5_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> (юг Звёздных пустошей) за <b>1 Драконье сердце</b> после победы над любым <b>Магмовым змеем</b> (например, в Туннеле Гаэля)."
    },
    {
      "id": "theodorix_s_magma",
      "name": "Магма Теодорикса",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B0%D0%B3%D0%BC%D0%B0_%D0%A2%D0%B5%D0%BE%D0%B4%D0%BE%D1%80%D0%B8%D0%BA%D1%81%D0%B0",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> за <b>2 Драконьих сердца</b> после победы над боссом <b>Великий змей Теодорикс</b> на замёрзшей реке к востоку от <b>Пещеры Отверженных</b> на Священном заснеженном поле."
    },
    {
      "id": "glintstone_breath",
      "name": "Блестящее дыхание",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B5%D0%B5_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> (юг Звёздных пустошей) за <b>1 Драконье сердце</b> после победы над любым <b>Драконом блестящих камней</b> в Озёрной Лиурнии."
    },
    {
      "id": "smarag_s_glintstone_breath",
      "name": "Блестящее дыхание Смарага",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B5%D0%B5_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A1%D0%BC%D0%B0%D1%80%D0%B0%D0%B3%D0%B0",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> за <b>2 Драконьих сердца</b> после победы над полевым боссом <b>Смараг, дракон блестящих камней</b> на скале к западу от Академии Райи Лукарии."
    },
    {
      "id": "rotten_breath",
      "name": "Гнилое дыхание",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%BB%D0%BE%D0%B5_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> (юг Звёздных пустошей) за <b>1 Драконье сердце</b> с самого начала (или после убийства любого гнилого дракона в Звёздных пустошах)."
    },
    {
      "id": "ekzykes_s_decay",
      "name": "Гниение Экзикеса",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%B5%D0%BD%D0%B8%D0%B5_%D0%AD%D0%BA%D0%B7%D0%B8%D0%BA%D0%B5%D1%81%D0%B0",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> за <b>2 Драконьих сердца</b> после победы над полевым боссом <b>Разлагающийся Экзикес</b> на южном тракте Звёздных пустошей (рядом с самим собором)."
    },
    {
      "id": "dragonice",
      "name": "Ледяной дракон",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D0%B4%D1%8F%D0%BD%D0%BE%D0%B9_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> (юг Звёздных пустошей) за <b>1 Драконье сердце</b> после победы над любым ледяным драконом на Вершинах великанов."
    },
    {
      "id": "borealis_s_mist",
      "name": "Туман Борелиса",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%83%D0%BC%D0%B0%D0%BD_%D0%91%D0%BE%D1%80%D0%B5%D0%BB%D0%B8%D1%81%D0%B0",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> за <b>2 Драконьих сердца</b> после победы над полевым боссом <b>Борелис, ледяной туман</b> на замёрзшем озере в северо-восточной части <b>Вершин великанов</b>."
    },
    {
      "id": "placidusax_s_ruin",
      "name": "Гнев Пласидусакса",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B5%D0%B2_%D0%9F%D0%BB%D0%B0%D1%81%D0%B8%D0%B4%D1%83%D1%81%D0%B0%D0%BA%D1%81%D0%B0",
      "graceRu": "Владыка драконов Пласидусакс (Сокрушённый Фарум-Азула)",
      "graceEn": "Dragonlord Placidusax",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Владыке драконов</b> после победы над секретным боссом <b>Владыка драконов Пласидусакс</b> в <b>Сокрушённом Фарум-Азуле</b>."
    },
    {
      "id": "dragonclaw",
      "name": "Коготь дракона",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0",
      "graceRu": "Храм драконьего причастия (Замогилье)",
      "graceEn": "Church of Dragon Communion",
      "dlc": false,
      "guide": "Обменивается у алтаря в <b>Храме драконьего причастия</b> (Замогилье) или <b>Соборе драконьего причастия</b> (Звёздные пустоши) за <b>1 Драконье сердце</b>."
    },
    {
      "id": "dragonmaw",
      "name": "Драконья пасть",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8C%D1%8F_%D0%BF%D0%B0%D1%81%D1%82%D1%8C",
      "graceRu": "Храм драконьего причастия (Замогилье)",
      "graceEn": "Church of Dragon Communion",
      "dlc": false,
      "guide": "Обменивается у алтаря в <b>Храме драконьего причастия</b> (Замогилье) или <b>Соборе драконьего причастия</b> (Звёздные пустоши) за <b>1 Драконье сердце</b>."
    },
    {
      "id": "greyoll_s_roar",
      "name": "Рёв Грейолл",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D1%91%D0%B2_%D0%93%D1%80%D0%B5%D0%B9%D0%BE%D0%BB%D0%BB",
      "graceRu": "Собор драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Появляется у алтаря в <b>Соборе драконьего причастия</b> за <b>3 Драконьих сердца</b> после убийства гигантской старой драконихи <b>Грейолл</b> перед <b>Фортом Фарот</b> в Драконьем кургане."
    },
    {
      "id": "ghostflame_breath",
      "name": "Дыхание пламени смерти",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
      "graceRu": "Великий алтарь драконьего причастия (Зубастая гора)",
      "graceEn": "Grand Altar of Dragon Communion",
      "dlc": true,
      "guide": "Появляется у <b>Великого алтаря драконьего причастия</b> у подножия <b>Зубастой горы</b> (<i>Shadow of the Erdtree</i>) за <b>3 Драконьих сердца</b> после победы над боссом <b>Дракон пламени смерти</b> (например, на Равнине Надгробий или в Лазурном побережье)."
    }
  ];

  window.SPELL_PART_10 = items;
  window.SPELL_PART10 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(10, items);
  }
})();
