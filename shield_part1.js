/* ER_SHIELD_DB_PART | file: shield_part1.js | part: 1 | items: 20/20 (1-20) */
(function () {
  'use strict';

  var items = [
    {
      "id": "rickety_shield",
      "name": "Ветхий щит",
      "category": "Малые щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B5%D1%82%D1%85%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Храм Элле (Замогилье)",
      "graceEn": "Church of Elleh",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца Кале</b> в <b>Храме Элле</b> в самом начале Замогилья за <b>600 рун</b> (также выпадает со скелетов с шансом <b>2%</b>)."
    },
    {
      "id": "riveted_wooden_shield",
      "name": "Клёпаный деревянный щит",
      "category": "Малые щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D1%91%D0%BF%D0%B0%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Лачуга торговца-кочевника (Плачущий полуостров)",
      "graceEn": "Isolated Merchant's Shack",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на западном побережье <b>Плачущего полуострова</b> за <b>600 рун</b> (также падает с пехотинцев Годрика с шансом <b>2%</b>)."
    },
    {
      "id": "blue_white_wooden_shield",
      "name": "Сине-белый деревянный щит",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B8%D0%BD%D0%B5-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Утёс со стороны озера (Озёрная Лиурния)",
      "graceEn": "Lake-Facing Cliffs",
      "dlc": false,
      "guide": "Лежит на трупе у основания сломанного моста на кладбище к северу от благодати <b>Утёс со стороны озера</b> в Озёрной Лиурнии (под охраной скелетов)."
    },
    {
      "id": "script_wooden_shield",
      "name": "Деревянный щит с надписями",
      "category": "Малые щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8",
      "graceRu": "Покои у подъёмника (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Фармится со <b>Скелетов</b>, вооружённых этим круглым щитом (базовый шанс — <b>2%</b>). Удобнее всего фармить скелетов на кладбище у <b>Храма Марики</b> в Замогилье или у <b>Утёса со стороны озера</b>."
    },
    {
      "id": "red_thorn_roundshield",
      "name": "Круглый щит с красным шипом",
      "category": "Малые щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%BC_%D1%88%D0%B8%D0%BF%D0%BE%D0%BC",
      "graceRu": "Туманный лес, окраина (Замогилье)",
      "graceEn": "Mistwood Outskirts",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> рядом с благодатью <b>Туманный лес, окраина</b> в восточном Замогилье за <b>600 рун</b> (также падает с пехотинцев)."
    },
    {
      "id": "pillory_shield",
      "name": "Щит позора",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%BF%D0%BE%D0%B7%D0%BE%D1%80%D0%B0",
      "graceRu": "Тюремная пещера (Звёздные пустоши)",
      "graceEn": "Gaol Cave",
      "dlc": false,
      "guide": "Лежит на трупе в одной из камер подземелья <b>Тюремная пещера</b> на западе Звёздных пустошей (вход запечатан <b>2 мечевидными ключами</b>; потяните рычаг в глубине пещеры, чтобы открыть решётки)."
    },
    {
      "id": "buckler",
      "name": "Баклер",
      "category": "Малые щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D0%BA%D0%BB%D0%B5%D1%80",
      "graceRu": "Главные ворота Грозовой Завесы (Замогилье)",
      "graceEn": "Stormveil Main Gate",
      "dlc": false,
      "guide": "Стартовый щит класса <b>Бандит</b>. Продаётся у <b>Привратника Гостока</b> в <b>Замке Грозовой Завесы</b> (или у Старых служанок-близнецов по его колокольной сфере) за <b>1 500 рун</b>."
    },
    {
      "id": "iron_roundshield",
      "name": "Железный баклер",
      "category": "Малые щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BA%D0%BB%D0%B5%D1%80",
      "graceRu": "Лачуга торговца-кочевника (Замогилье)",
      "graceEn": "Saintsbridge",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на холме к северу от <b>Моста Святых</b> в северном Замогилье за <b>1 000 рун</b> (также падает с полулюдей)."
    },
    {
      "id": "gilded_iron_shield",
      "name": "Позолоченный баклер",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%B7%D0%BE%D0%BB%D0%BE%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BA%D0%BB%D0%B5%D1%80",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Лежит на трупе на кладбище у призрачного дерева к северо-западу от благодати <b>Бастион замка Морн</b> на Плачущем полуострове."
    },
    {
      "id": "man_serpents_shield",
      "name": "Баклер змеелюда",
      "category": "Малые щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D0%BA%D0%BB%D0%B5%D1%80_%D0%B7%D0%BC%D0%B5%D0%B5%D0%BB%D1%8E%D0%B4%D0%B0",
      "graceRu": "Храм Игли (Вулканово поместье)",
      "graceEn": "Temple of Eiglay",
      "dlc": false,
      "guide": "Фармится с <b>Людей-змеев</b>, вооружённых щитом, в <b>Вулкановом поместье</b> (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — двое людей-змеев на подъёмнике вверх от благодати <b>Храм Игли</b>."
    },
    {
      "id": "ice_crest_shield",
      "name": "Баклер с ледяным гребнем",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D0%BA%D0%BB%D0%B5%D1%80_%D1%81_%D0%BB%D0%B5%D0%B4%D1%8F%D0%BD%D1%8B%D0%BC_%D0%B3%D1%80%D0%B5%D0%B1%D0%BD%D0%B5%D0%BC",
      "graceRu": "Нижний ярус поместья (Поместье Карии)",
      "graceEn": "Manor Lower Level",
      "dlc": false,
      "guide": "Лежит на трупе в садике на нижнем ярусе <b>Поместья Карии</b> на севере Озёрной Лиурнии (спрыгните с галереи на каменную площадку в юго-восточной части двора)."
    },
    {
      "id": "rift_shield",
      "name": "Расколотый щит",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B0%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Подземная обочина (Подземелье отчуждения)",
      "graceEn": "Underground Roadside",
      "dlc": false,
      "guide": "Лежит на трупе в тупике канализации в <b>Подземелье отчуждения</b> под Лейнделлом (пройдите по трубам вниз от благодати <b>Подземная обочина</b>)."
    },
    {
      "id": "perfumers_shield",
      "name": "Щит парфюмера",
      "category": "Малые щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B5%D1%80%D0%B0",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Фармится с <b>Парфюмеров</b> в белых одеждах (базовый шанс — <b>2%</b>). Удобнее всего фармить парфюмеров в <b>Руинах парфюмера</b> на Плато Альтус или в <b>Сумрачном замке</b>."
    },
    {
      "id": "shield_of_the_guilty",
      "name": "Щит виновника",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%B0",
      "graceRu": "Руины леса полулюдей (Плачущий полуостров)",
      "graceEn": "Demi-Human Forest Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подземном подвале <b>Руин леса полулюдей</b> в центральной части Плачущего полуострова (спуск по лестнице в руинах)."
    },
    {
      "id": "spiralhorn_shield",
      "name": "Щит с витым рогом",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81_%D0%B2%D0%B8%D1%82%D1%8B%D0%BC_%D1%80%D0%BE%D0%B3%D0%BE%D0%BC",
      "graceRu": "Прибрежные руины (Озёрная Лиурния)",
      "graceEn": "Laskyar Ruins",
      "dlc": false,
      "guide": "Лежит на трупе на деревянной крыше разрушенного строения в <b>Руинах Ласкьяра</b> в южной затопленной части <b>Озёрной Лиурнии</b>."
    },
    {
      "id": "smoldering_shield",
      "name": "Тлеющий щит",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BB%D0%B5%D1%8E%D1%89%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Тюремная камера (Вулканово поместье)",
      "graceEn": "Prison Town Church",
      "dlc": false,
      "guide": "Лежит на трупе в тёмной камере за решёткой в <b>Вулкановом поместье</b> (пройдите по крышам от благодати <b>Церковь тюремного города</b> и спрыгните в окно)."
    },
    {
      "id": "coil_shield",
      "name": "Щит со змеёй",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81%D0%BE_%D0%B7%D0%BC%D0%B5%D1%91%D0%B9",
      "graceRu": "Пещера Вулкана (Вулкан Гельмир)",
      "graceEn": "Volcano Cave",
      "dlc": false,
      "guide": "Лежит на трупе в глубине подземелья <b>Пещера Вулкана</b> на северо-восточном склоне <b>Вулкана Гельмир</b> (перед входом к боссу Королева полулюдей Марго)."
    },
    {
      "id": "smithscript_shield",
      "name": "Щит с письменами",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC%D0%B8",
      "graceRu": "Разрушенная кузница Тайлю (Равнина Надгробий)",
      "graceEn": "Ruined Forge of Taylew",
      "dlc": true,
      "guide": "Лежит на трупе в подземелье <b>Разрушенная кузница Тайлю</b> на севере Равнины Надгробий (<i>Shadow of the Erdtree</i>; осмотрите нижний ярус кузницы у лавы)."
    },
    {
      "id": "shield_of_night",
      "name": "Щит ночи",
      "category": "Малые щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%BD%D0%BE%D1%87%D0%B8",
      "graceRu": "Поместье Мидры (Лес Бездны)",
      "graceEn": "Midra's Manse",
      "dlc": true,
      "guide": "Лежит на трупе за потайным книжным шкафом на втором этаже <b>Особняка Мидры</b> в <b>Лесу Бездны</b> (ударьте по картине в комнате с призраками, чтобы открыть проход)."
    },
    {
      "id": "hawk_crest_wooden_shield",
      "name": "Каплевидный щит с гербовым ястребом",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BF%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D1%8B%D0%BC_%D1%8F%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%BC",
      "graceRu": "Лачуга воителя (Замогилье)",
      "graceEn": "Warmaster's Shack",
      "dlc": false,
      "guide": "Выдаётся по подсказке с <b>Картины «Пророчество»</b> (находится в Замке Грозовой Завесы): встаньте на край обрыва к северу от <b>Церкви паломничества</b> на Плачущем полуострове, чтобы появился дух художника."
    }
  ];

  window.SHIELD_PART_1 = items;
  window.SHIELD_PART1 = items;
  window.SHIELD_LIST = (window.SHIELD_LIST || []).concat(items);
  if (typeof window.registerShieldPart === 'function') {
    window.registerShieldPart(1, items);
  }
})();
