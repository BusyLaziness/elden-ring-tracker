/* ER_WEAPON_DB_PART | file: weapon_part4.js | part: 4 | items: 20/20 (61-80) */
(function () {
  'use strict';

  var items = [
    {
      "id": "ordovis_greatsword",
      "name": "Двуручник Ордовиса",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87_%D0%9E%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%81%D0%B0",
      "graceRu": "Могила героя Аурицы (Окраины столицы)",
      "graceEn": "Auriza Hero's Grave",
      "dlc": false,
      "guide": "Гарантированно выпадает в награду за победу над парным боссом <b>Рыцарь Горнила Ордовис и Рыцарь Горнила</b> в конце подземелья <b>Могила героя Аурицы</b> на востоке Плато Альтус."
    },
    {
      "id": "alabaster_lords_sword",
      "name": "Меч алебастрового повелителя",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D0%B0%D0%BB%D0%B5%D0%B1%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Главные ворота академии (Академия Райи Лукарии)",
      "graceEn": "Main Academy Gate",
      "dlc": false,
      "guide": "Выпадает с мини-босса <b>Алебастровый повелитель</b> в затопленных руинах на восточном краю <b>Озёрной Лиурнии</b> (к югу от Храмового квартала и к юго-востоку от благодати <b>Главные ворота академии</b>)."
    },
    {
      "id": "deaths_poker",
      "name": "Жезл смерти",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%96%D0%B5%D0%B7%D0%BB_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
      "graceRu": "Южный берег болота Эония (Звёздные пустоши)",
      "graceEn": "Southern Aeonia Swamp Bank",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над ночным боссом <b>Птица предзнаменования смерти</b> на склоне к юго-востоку от благодати <b>Южный берег болота Эония</b> в Звёздных пустошах (босс появляется исключительно <b>ночью</b>)."
    },
    {
      "id": "helphens_steeple",
      "name": "Шпиль Хелфена",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%BF%D0%B8%D0%BB%D1%8C_%D0%A5%D0%B5%D0%BB%D1%84%D0%B5%D0%BD%D0%B0",
      "graceRu": "Руины Замора (Вершины великанов)",
      "graceEn": "Zamor Ruins",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над ночным боссом <b>Моряк Тибия</b> на кладбище скелетов к северо-востоку от благодати <b>Руины Замора</b> на Вершинах великанов (появляется исключительно <b>ночью</b>)."
    },
    {
      "id": "blasphemous_blade",
      "name": "Богохульный клинок",
      "category": "Двуручные мечи",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%85%D1%83%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Рикард, богохульный владыка (Вулканово поместье)",
      "graceEn": "Rykard, Lord of Blasphemy",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Богохульном</b> после победы над сюжетным боссом <b>Рикард, богохульный владыка</b> в <b>Вулкановом поместье</b>."
    },
    {
      "id": "golden_order_greatsword",
      "name": "Двуручник Золотого порядка",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0",
      "graceRu": "Пещера Отверженных (Священное заснеженное поле)",
      "graceEn": "Cave of the Forlorn",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Бастард-крестоносец</b> в конце подземелья <b>Пещера Отверженных</b> (вход в ущелье замёрзшей реки на востоке Священного заснеженного поля; требуются <b>2 мечевидных ключа</b>)."
    },
    {
      "id": "dark_moon_greatsword",
      "name": "Двуручник тёмной луны",
      "category": "Двуручные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D1%82%D1%91%D0%BC%D0%BD%D0%BE%D0%B9_%D0%BB%D1%83%D0%BD%D1%8B",
      "graceRu": "Собор Мануса Целеса (Озёрная Лиурния)",
      "graceEn": "Cathedral of Manus Celes",
      "dlc": false,
      "guide": "Выдаётся в финале сюжетной линии <b>Ренни Колдуньи</b>: после победы над Астелем спуститесь в пещеру под <b>Собором Мануса Целеса</b> (юго-запад Озёрной Лиурнии) и наденьте <b>Кольцо Тёмной луны</b> на палец Ренни."
    },
    {
      "id": "greatsword_of_damnation",
      "name": "Двуручник проклятия",
      "category": "Двуручные мечи",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D0%BF%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D0%B8%D1%8F",
      "graceRu": "Покои за обсуждениями (Лес Бездны)",
      "graceEn": "Discussion Chamber",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Владыке Яростного Пламени</b> после победы над боссом <b>Мидра, Владыка Яростного Пламени</b> в глубине <b>Особняка Мидры</b> (<i>Shadow of the Erdtree</i>)."
    },
    {
      "id": "sacred_relic_sword",
      "name": "Меч священной реликвии",
      "category": "Двуручные мечи",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D1%80%D0%B5%D0%BB%D0%B8%D0%BA%D0%B2%D0%B8%D0%B8",
      "graceRu": "Расколотая Марика (Лейнделл, столица пепла)",
      "graceEn": "Fractured Marika",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Элдене</b> после победы над финальным боссом игры <b>Зверь Элдена</b> у благодати <b>Расколотая Марика</b>."
    },
    {
      "id": "zweihander",
      "name": "Цвайхендер",
      "category": "Огромные мечи",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A6%D0%B2%D0%B0%D0%B9%D1%85%D0%B5%D0%BD%D0%B4%D0%B5%D1%80",
      "graceRu": "Лачуга торговца-отшельника (Плачущий полуостров)",
      "graceEn": "Isolated Merchant's Shack",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-отшельника</b> в <b>Лачуге торговца-отшельника</b> на западном побережье Плачущего полуострова за <b>3 500 рун</b>."
    },
    {
      "id": "greatsword",
      "name": "Двуручник",
      "category": "Огромные мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA",
      "graceRu": "Руины Калема (Звёздные пустоши)",
      "graceEn": "Caelem Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке под охраной гигантских псов-тиранозавров на дороге к юго-востоку от благодати <b>Руины Калема</b> на севере Звёздных пустошей."
    },
    {
      "id": "watchdog_greatsword",
      "name": "Двуручник цербера",
      "category": "Огромные мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D1%86%D0%B5%D1%80%D0%B1%D0%B5%D1%80%D0%B0",
      "graceRu": "Потайной путь к Святому Древу (Вершины великанов)",
      "graceEn": "Hidden Path to the Haligtree",
      "dlc": false,
      "guide": "Фармится с рядовых врагов <b>Погребальный страж Древа Эрд</b>, вооружённых огромным мечом (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — одинокий страж в коридоре подземелья <b>Потайной путь к Святому Древу</b>."
    },
    {
      "id": "fire_knights_greatsword",
      "name": "Двуручник Огненного рыцаря",
      "category": "Огромные мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F",
      "graceRu": "Пристанище Теней, главные ворота (Теневой Альтус)",
      "graceEn": "Shadow Keep Main Gate",
      "dlc": true,
      "guide": "Фармится с <b>Огненных рыцарей</b>, вооружённых огромным двуручником, в локации <b>Пристанище Теней</b> (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — рыцарь, стоящий сразу за выходом из благодати <b>Площадь у главных ворот</b> или на нижнем ярусе Хранилища."
    },
    {
      "id": "trolls_golden_sword",
      "name": "Золотой меч тролля",
      "category": "Огромные мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%BC%D0%B5%D1%87_%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D1%8F",
      "graceRu": "Руины на дороге (Плато Альтус)",
      "graceEn": "Road of Iniquity Side Path",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке на тракте в северо-западной части Плато Альтус (к северо-востоку от благодати <b>Боковая тропа дороги Греха</b>, по пути к Вулканному поместью)."
    },
    {
      "id": "troll_knights_sword",
      "name": "Меч рыцаря-тролля",
      "category": "Огромные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F-%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D1%8F",
      "graceRu": "Вход в поместье (Поместье Карии)",
      "graceEn": "Manor Upper Level",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над невозрождаемым <b>Рыцарем-троллем</b>, охраняющим подъём к боссу Королевский рыцарь Лоретта на верхнем ярусе <b>Поместья Карии</b> (север Озёрной Лиурнии)."
    },
    {
      "id": "moonrithylls_knight_sword",
      "name": "Меч рыцаря Мунритиль",
      "category": "Огромные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%9C%D1%83%D0%BD%D1%80%D0%B8%D1%82%D0%B8%D0%BB%D1%8C",
      "graceRu": "Передний край замка (Равнина Надгробий)",
      "graceEn": "Castle Front",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над враждебным NPC <b>Мунритиль, карианский рыцарь</b>, стоящим на мосту во дворе <b>Замка Энсис</b> (по пути к подъёмнику от благодати <b>Передний край замка</b>)."
    },
    {
      "id": "royal_greatsword",
      "name": "Королевский двуручник",
      "category": "Огромные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA",
      "graceRu": "Покои Ренни (Три сестры)",
      "graceEn": "Ranni's Chamber",
      "dlc": false,
      "guide": "Выпадает с <b>Блайда Полуволка</b>, когда он обезумеет у входа в башню <b>Покои Ренни</b> в локации <b>Три сестры</b> (северо-запад Озёрной Лиурнии) в самом финале сюжетной линии <b>Ренни Колдуньи</b>."
    },
    {
      "id": "grafted_blade_greatsword",
      "name": "Двуручник с гибридным клинком",
      "category": "Огромные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D1%81_%D0%B3%D0%B8%D0%B1%D1%80%D0%B8%D0%B4%D0%BD%D1%8B%D0%BC_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BA%D0%BE%D0%BC",
      "graceRu": "Позади замка (Замок Морн)",
      "graceEn": "Beside the Rampart Gaol",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Леонинский бастард</b> на пляже позади <b>Замка Морн</b> на самом юге Плачущего полуострова."
    },
    {
      "id": "ruins_greatsword",
      "name": "Двуручник руин",
      "category": "Огромные мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D1%80%D1%83%D0%B8%D0%BD",
      "graceRu": "Покои у площади (Замок Рыжей Гривы)",
      "graceEn": "Chamber Outside the Plaza",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над парным боссом <b>Воин бастардов и Рыцарь Горнила</b> на площади <b>Замка Рыжей Гривы</b> на юго-востоке Звёздных пустошей (босс доступен до начала фестиваля Радана либо после его победы и разговора с Джерреном)."
    },
    {
      "id": "ancient_meteoric_ore_greatsword",
      "name": "Древний двуручник из метеоритной руды",
      "category": "Огромные мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D0%B9_%D0%B4%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA_%D0%B8%D0%B7_%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%82%D0%BD%D0%BE%D0%B9_%D1%80%D1%83%D0%B4%D1%8B",
      "graceRu": "Кузница разрушенного лабиринта (Теневой Альтус)",
      "graceEn": "Ruined Forge of Starfall Past",
      "dlc": true,
      "guide": "Выдаётся при взаимодействии с <b>алтарём кузницы</b> в самом конце подземелья <b>Кузница разрушенного лабиринта</b> на юге Теневого Альтуса (попасть в ущелье можно с западного уступа от Пристанища Теней)."
    }
  ];

  window.WEAPON_PART_4 = items;
  window.WEAPON_PART4 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(4, items);
  }
})();
