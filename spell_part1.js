/* ER_SPELL_DB_PART | file: spell_part1.js | part: 1 | items: 20/20 (1-20) */
(function () {
  'use strict';

  var items = [
    {
      "id": "glintstone_pebble",
      "name": "Снаряды блестящих камней",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BD%D0%B0%D1%80%D1%8F%D0%B4%D1%8B_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D1%85_%D0%BA%D0%B0%D0%BC%D0%BD%D0%B5%D0%B9",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовые чары классов <b>Астролог</b> и <b>Заключённый</b>. Остальные классы могут купить заклинание у <b>Чародейки Селлены</b> в подвале Руин поселения (Замогилье) или у <b>Топса</b> в Храме Ирит за <b>1 000 рун</b>."
    },
    {
      "id": "swift_glintstone_shard",
      "name": "Быстрый осколок блестящего камня",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9_%D0%BE%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B5%D0%B3%D0%BE_%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
      "graceRu": "Храм Ирит (Озёрная Лиурния)",
      "graceEn": "Church of Irith",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в Руинах поселения или у <b>Топса</b> в <b>Храме Ирит</b> на юге Озёрной Лиурнии за <b>600 рун</b>."
    },
    {
      "id": "great_glintstone_shard",
      "name": "Великий осколок блестящего камня",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%BE%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B5%D0%B3%D0%BE_%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в подвале Руин поселения или у <b>Мириэля, пастыря клятв</b> в Храме клятв после передачи им <b>Свитка академии</b> (находится на кладбище к северо-западу от благодати <b>Скалы со стороны озера</b>) за <b>2 000 рун</b>."
    },
    {
      "id": "glintstone_cometshard",
      "name": "Осколок кометы блестящего камня",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D0%BA%D0%BE%D0%BC%D0%B5%D1%82%D1%8B_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B5%D0%B3%D0%BE_%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> или у <b>Мириэля, пастыря клятв</b> после передачи им <b>Свитка знатока</b> (лежит на балконе второго этажа <b>Академии Райи Лукарии</b> в зале с тремя чародеями перед Алым волком Радагона) за <b>12 000 рун</b>."
    },
    {
      "id": "comet",
      "name": "Комета",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D1%82%D0%B0",
      "graceRu": "Зал для прений (Академия Райи Лукарии)",
      "graceEn": "Debate Parlor",
      "dlc": false,
      "guide": "Лежит на трупе в потайной комнате за призрачной стеной в <b>Академии Райи Лукарии</b>. От благодати <b>Зал для прений</b> вернитесь в библиотеку с чародеями и ударьте по книжному шкафу без книг слева перед коридором к боссу."
    },
    {
      "id": "shard_spiral",
      "name": "Спиральный осколок",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA",
      "graceRu": "Великая библиотека Райи Лукарии (Озёрная Лиурния)",
      "graceEn": "Raya Lucaria Grand Library",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Чародейки Селлены</b> за <b>8 000 рун</b> в финале её квестовой линии после того, как вы встанете на её сторону у входа в <b>Великую библиотеку Райи Лукарии</b> и победите <b>Охотника на ведьм Джеррена</b> (<b>пропускаемый предмет</b>: если помочь Джеррену, чары станут недоступны)."
    },
    {
      "id": "glintstone_stars",
      "name": "Блестящие звёзды",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B5_%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D1%8B",
      "graceRu": "Храм Ирит (Озёрная Лиурния)",
      "graceEn": "Church of Irith",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в Руинах поселения или у <b>Топса</b> в <b>Храме Ирит</b> за <b>3 000 рун</b>."
    },
    {
      "id": "star_shower",
      "name": "Звездопад",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D0%BF%D0%B0%D0%B4",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> или у <b>Мириэля, пастыря клятв</b> после передачи им <b>Свитка знатока</b> (из Академии Райи Лукарии) за <b>10 000 рун</b>."
    },
    {
      "id": "glintstone_arc",
      "name": "Блестящая дуга",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B0%D1%8F_%D0%B4%D1%83%D0%B3%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовые чары класса <b>Астролог</b>. Остальные классы могут купить заклинание у <b>Чародейки Селлены</b> в Руинах поселения или у <b>Топса</b> в Храме Ирит за <b>1 500 рун</b>."
    },
    {
      "id": "crystal_barrage",
      "name": "Кристальный шквал",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%88%D0%BA%D0%B2%D0%B0%D0%BB",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в подвале Руин поселения в Замогилье за <b>1 500 рун</b> с самого начала игры."
    },
    {
      "id": "crystal_release",
      "name": "Кристальный залп",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BB%D0%BF",
      "graceRu": "Тайник в Селлии (Звёздные пустоши)",
      "graceEn": "Sellia Hideaway",
      "dlc": false,
      "guide": "Выдаётся за победу над тройным боссом <b>Гнилой кристалиец</b> в глубине секретного подземелья <b>Тайник в Селлии</b> (вход скрыт за призрачной стеной за кладбищем к северу от Селлии, города магии)."
    },
    {
      "id": "cannon_of_haima",
      "name": "Пушка Хаймы",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B0_%D0%A5%D0%B0%D0%B9%D0%BC%D1%8B",
      "graceRu": "Восточный тракт Беллума (Озёрная Лиурния)",
      "graceEn": "East Raya Lucaria Gate",
      "dlc": false,
      "guide": "Лежит в сундуке на самом верху <b>Обращённой башни</b> в северо-восточной части Озёрной Лиурнии (к северу от <b>Храма клятв</b>). Чтобы поднять барьер в башне, наденьте любую <b>блестящую корону</b> и используйте жест <b>«Эрудиция»</b> (выдаётся Топсом за второй ключ)."
    },
    {
      "id": "gavel_of_haima",
      "name": "Молоток Хаймы",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%BA_%D0%A5%D0%B0%D0%B9%D0%BC%D1%8B",
      "graceRu": "Восточный тракт Беллума (Озёрная Лиурния)",
      "graceEn": "East Raya Lucaria Gate",
      "dlc": false,
      "guide": "Лежит в том же сундуке, что и <b>Пушка Хаймы</b>, на вершине <b>Обращённой башни</b> на северо-востоке Озёрной Лиурнии (требуется любая <b>блестящая корона</b> и жест <b>«Эрудиция»</b>)."
    },
    {
      "id": "shatter_earth",
      "name": "Дрожь земли",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%BE%D0%B6%D1%8C_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8",
      "graceRu": "Туннель Райи Лукарии (Озёрная Лиурния)",
      "graceEn": "Raya Lucaria Crystal Tunnel",
      "dlc": false,
      "guide": "Лежит на трупе у деревянного мостика над пропастью в подземелье <b>Туннель Райи Лукарии</b> (на северо-восточном берегу Озёрной Лиурнии, под охраной рудокопов и марионеток)."
    },
    {
      "id": "rock_blaster",
      "name": "Разрушитель камня",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B0%D0%B7%D1%80%D1%83%D1%88%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
      "graceRu": "Туннель Селлии (Звёздные пустоши)",
      "graceEn": "Sellia Crystal Tunnel",
      "dlc": false,
      "guide": "Лежит в сундуке в деревянной хижине на среднем уровне подземелья <b>Туннель Селлии</b> (на северо-западе болота Эония в Звёздных пустошах)."
    },
    {
      "id": "scholars_armament",
      "name": "Оружие учёного",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%80%D1%83%D0%B6%D0%B8%D0%B5_%D1%83%D1%87%D1%91%D0%BD%D0%BE%D0%B3%D0%BE",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в подвале Руин поселения в Замогилье за <b>3 000 рун</b>."
    },
    {
      "id": "scholars_shield",
      "name": "Щит учёного",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%83%D1%87%D1%91%D0%BD%D0%BE%D0%B3%D0%BE",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в подвале Руин поселения в Замогилье за <b>2 500 рун</b>."
    },
    {
      "id": "starlight",
      "name": "Звездосвет",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%81%D0%B2%D0%B5%D1%82",
      "graceRu": "Храм Ирит (Озёрная Лиурния)",
      "graceEn": "Church of Irith",
      "dlc": false,
      "guide": "Продаётся у <b>Топса</b> в <b>Храме Ирит</b> (сразу за Замком Грозовой Завесы в Лиурнии) за <b>2 500 рун</b>."
    },
    {
      "id": "terra_magica",
      "name": "Зачарованные земли",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8",
      "graceRu": "Кристальная пещера академии (Озёрная Лиурния)",
      "graceEn": "Academy Crystal Cave",
      "dlc": false,
      "guide": "Лежат в сундуке на верхнем балконе башни после победы над парным боссом <b>Кристалиец</b> в подземелье <b>Кристальная пещера академии</b> (вход на западном склоне под Академией Райи Лукарии, требуются <b>2 мечевидных ключа</b>)."
    },
    {
      "id": "thops_barrier",
      "name": "Преграда Топса",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%80%D0%B5%D0%B3%D1%80%D0%B0%D0%B4%D0%B0_%D0%A2%D0%BE%D0%BF%D1%81%D0%B0",
      "graceRu": "Классная комната школы (Академия Райи Лукарии)",
      "graceEn": "Schoolhouse Classroom",
      "dlc": false,
      "guide": "Выдаётся за завершение квеста <b>Топса</b>: отдайте ему второй <b>Ключ от академии</b> в Храме Ирит, затем заберите чары с его тела за столом на террасе рядом с благодатью <b>Классная комната школы</b>."
    }
  ];

  window.SPELL_PART_1 = items;
  window.SPELL_PART1 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(1, items);
  }
})();
