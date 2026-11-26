/* ER_SPELL_DB_PART | file: spell_part5.js | part: 5 | items: 20/20 (81-100) */
(function () {
  'use strict';

  var items = [
    {
      "id": "fias_mist",
      "name": "Туман Фии",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%83%D0%BC%D0%B0%D0%BD_%D0%A4%D0%B8%D0%B8",
      "graceRu": "Трон принца Смерти (Низовье Глубокого Корня)",
      "graceEn": "Prince of Death's Throne",
      "dlc": false,
      "guide": "Выпадает за победу над мини-боссом <b>Воители Фии</b> в глубине <b>Низовья Глубокого Корня</b> (на большой корневой арене у благодати <b>Через великий водопад</b> в рамках квестовой линии Фии)."
    },
    {
      "id": "tibias_summons",
      "name": "Зов Тибии",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%B2_%D0%A2%D0%B8%D0%B1%D0%B8%D0%B8",
      "graceRu": "Руины Виндхэма (Плато Альтус)",
      "graceEn": "Wyndham Ruins",
      "dlc": false,
      "guide": "Выпадает за победу над полевым боссом <b>Моряк Тибия</b> среди затопленных <b>Руин Виндхэма</b> на севере Плато Альтус (между Ущельем с руинами и Вулканным поместьем)."
    },
    {
      "id": "mass_of_putrescence",
      "name": "Пузырь гнили",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%83%D0%B7%D1%8B%D1%80%D1%8C_%D0%B3%D0%BD%D0%B8%D0%BB%D0%B8",
      "graceRu": "Разлом в каменном саркофаге (Лазурное побережье)",
      "graceEn": "Stone Coffin Fissure",
      "dlc": true,
      "guide": "Лежит на трупе в боковой пещере подземелья <b>Разлом в каменном саркофаге</b> на юге Лазурного побережья (от благодати <b>Крест в разломе</b> пробегите по туннелю мимо каменных глыб и сверните налево к обрыву)."
    },
    {
      "id": "vortex_of_putrescence",
      "name": "Вихрь гнили",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B8%D1%85%D1%80%D1%8C_%D0%B3%D0%BD%D0%B8%D0%BB%D0%B8",
      "graceRu": "Сад фиолетовых цветов (Лазурное побережье)",
      "graceEn": "Garden of Deep Purple",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Гнили</b> после победы над боссом <b>Рыцарь гнили</b> в глубине <b>Разлома в каменном саркофаге</b>."
    },
    {
      "id": "urgent_heal",
      "name": "Срочное лечение",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D0%B5_%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовая молитва класса <b>Духовник</b>. Остальные классы могут купить заклинание у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>1 000 рун</b> с самого начала игры."
    },
    {
      "id": "heal",
      "name": "Лечение",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовая молитва класса <b>Пророк</b>. Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>1 500 рун</b> с начала игры."
    },
    {
      "id": "great_heal",
      "name": "Мощное лечение",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D1%89%D0%BD%D0%BE%D0%B5_%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Altus Highway Junction",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Брата Корина</b> за <b>4 500 рун</b> после его переезда на <b>Плато Альтус</b> (на дорогу к северу от благодати <b>Перекрёсток тракта Альтуса</b>)."
    },
    {
      "id": "lords_heal",
      "name": "Лечение повелителя",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Западный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "West Capital Rampart",
      "dlc": false,
      "guide": "Лежит на сундуке/алтаре на первом этаже <b>Укреплённого поместья</b> в <b>Лейнделле, столице королевства</b> (рядом с бывшим залом Круглого стола; <b>пропускаемый предмет</b>: забрать до Лейнделла, столицы пепла)."
    },
    {
      "id": "cure_poison",
      "name": "Исцеляющий яд",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D1%81%D1%86%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%B9_%D1%8F%D0%B4",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>1 000 рун</b> с самого начала игры."
    },
    {
      "id": "lords_aid",
      "name": "Помощь повелителя",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%BC%D0%BE%D1%89%D1%8C_%D0%BF%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Придорожные катакомбы (Окраины столицы)",
      "graceEn": "Wyndham Catacombs",
      "dlc": false,
      "guide": "Лежит на трупе у края водопада в нижней канализационной части подземелья <b>Подземная обочина</b> под Лейнделлом (в помещении с гигантскими креветками перед Могом, Знамением)."
    },
    {
      "id": "magic_fortification",
      "name": "Защита от магии",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%BE%D1%82_%D0%BC%D0%B0%D0%B3%D0%B8%D0%B8",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>3 500 рун</b> с самого начала игры."
    },
    {
      "id": "flame_fortification",
      "name": "Защита от огня",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%BE%D1%82_%D0%BE%D0%B3%D0%BD%D1%8F",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>3 500 рун</b> с самого начала игры."
    },
    {
      "id": "lightning_fortification",
      "name": "Защита от молнии",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%BE%D1%82_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B8",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Altus Highway Junction",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Брата Корина</b> за <b>3 500 рун</b> после его переезда на <b>Плато Альтус</b> (на тракт к северу от перекрёстка)."
    },
    {
      "id": "divine_fortification",
      "name": "Божественная защита",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0",
      "graceRu": "Руины леса полулюдей (Плачущий полуостров)",
      "graceEn": "Tombsward Ruins",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на уступе к юго-западу от <b>Руин леса полулюдей</b> на Плачущем полуострове (недалеко от Башни Оридиса)."
    },
    {
      "id": "lords_divine_fortification",
      "name": "Божественная защита повелителя",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%BF%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Выдаётся в награду от <b>Сэра Гидеона Офнира</b> в <b>Крепости Круглого стола</b> после победы над <b>Маленией, Клинком Микеллы</b> (<b>пропускаемый предмет</b>: забрать до победы над Маликетом, иначе появится в продаже у Старых служанок-близнецов)."
    },
    {
      "id": "rejection",
      "name": "Отказ",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%82%D0%BA%D0%B0%D0%B7",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> за <b>1 500 рун</b> с самого начала игры."
    },
    {
      "id": "shadow_bait",
      "name": "Теневая приманка",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F_%D0%BF%D1%80%D0%B8%D0%BC%D0%B0%D0%BD%D0%BA%D0%B0",
      "graceRu": "Западный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "West Capital Rampart",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> в закрытом дворе в <b>Подземной обочине</b> под Лейнделлом (пройдите по трубам канализации в боковой колодец со скарабеем)."
    },
    {
      "id": "darkness",
      "name": "Мгла",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B3%D0%BB%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> в <b>Крепости Круглого стола</b> или у <b>Мириэля, пастыря клятв</b> в Храме клятв после передачи им <b>Молитвослова убийцы</b> (лежит в запертой комнате в нижней части Крепости Круглого стола за туманной дверью, требуется <b>1 мечевидный ключ</b>) за <b>3 500 рун</b>."
    },
    {
      "id": "assassins_approach",
      "name": "Поступь убийцы",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%81%D1%82%D1%83%D0%BF%D1%8C_%D1%83%D0%B1%D0%B8%D0%B9%D1%86%D1%8B",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовая молитва класса <b>Духовник</b>. Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова убийцы</b> из подвала Крепости Круглого стола за <b>2 500 рун</b>."
    },
    {
      "id": "golden_vow_incantation",
      "name": "Золотой обет",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%BE%D0%B1%D0%B5%D1%82",
      "graceRu": "Лачуга трупного смрада (Вулкан Гельмир)",
      "graceEn": "Corpse-Stench Shack",
      "dlc": false,
      "guide": "Лежит на трупе внутри заброшенной <b>Лачуги трупного смрада</b> на западном склоне <b>Вулкана Гельмир</b> (напротив места вторжения Анастасии, пожирательницы погасших)."
    }
  ];

  window.SPELL_PART_5 = items;
  window.SPELL_PART5 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(5, items);
  }
})();
