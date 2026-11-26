/* ER_SHIELD_DB_PART | file: shield_part4.js | part: 4 | items: 19/19 (61-79) */
(function () {
  'use strict';

  var items = [
    {
      "id": "distinguished_greatshield",
      "name": "Особый большой щит",
      "category": "Большие щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%81%D0%BE%D0%B1%D1%8B%D0%B9_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Лачуга торговца-отшельника (Окраины столицы)",
      "graceEn": "Hermit Merchant's Shack (Capital Outskirts)",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-отшельника</b> в лачуге к северу от <b>Окраин столицы</b> на Плато Альтус за <b>5 500 рун</b>."
    },
    {
      "id": "gilded_greatshield",
      "name": "Позолоченный большой щит",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%B7%D0%BE%D0%BB%D0%BE%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Предвратные руины (Замогилье)",
      "graceEn": "Gatefront",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей Годрика</b>, вооружённых большим щитом и копьём (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — одинокий рыцарь в лагере прямо у благодати <b>Предвратные руины</b>."
    },
    {
      "id": "cuckoo_greatshield",
      "name": "Большой щит Кукушки",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%9A%D1%83%D0%BA%D1%83%D1%88%D0%BA%D0%B8",
      "graceRu": "Тракт к Озёрной Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Highway North",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей Кукушки</b>, вооружённых большим щитом и копьём (базовый шанс — <b>2%</b>). Удобнее всего фармить рыцаря на дороге перед воротами <b>Академии Райи Лукарии</b>."
    },
    {
      "id": "redmane_greatshield",
      "name": "Большой щит Рыжей Гривы",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%A0%D1%8B%D0%B6%D0%B5%D0%B9_%D0%93%D1%80%D0%B8%D0%B2%D1%8B",
      "graceRu": "Южный берег болота Эония (Звёздные пустоши)",
      "graceEn": "Southern Aeonia Swamp Bank",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей Рыжей Гривы</b>, вооружённых большим щитом (базовый шанс — <b>2%</b>). Самая быстрая точка — рыцарь в военном лагере у ворот <b>Замка Рыжей Гривы</b>."
    },
    {
      "id": "golden_greatshield",
      "name": "Большой золотой щит",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Восточный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "East Capital Rampart",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей Лейнделла</b>, вооружённых большим щитом (базовый шанс — <b>2%</b>). Самая быстрая точка — рыцарь на главной улице к югу от благодати <b>Восточный бастион столицы</b>."
    },
    {
      "id": "haligtree_crest_greatshield",
      "name": "Большой щит Святого Древа",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%94%D1%80%D0%B5%D0%B2%D0%B0",
      "graceRu": "Внутренняя стена Эльфаэля (Эльфаэль, опора Святого Древа)",
      "graceEn": "Elphael Inner Wall",
      "dlc": false,
      "guide": "Фармится с единственного <b>Рыцаря Святого Древа</b> с большим щитом в <b>Эльфаэле</b> (базовый шанс — <b>4%</b>). Выйдите из благодати <b>Внутренняя стена Эльфаэля</b> на восток на мост с призраками и спрыгните на площадку с рыцарем внизу."
    },
    {
      "id": "black_steel_greatshield",
      "name": "Большой щит из чёрной стали",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%B8%D0%B7_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D0%B0%D0%BB%D0%B8",
      "graceRu": "Главные ворота Пристанища (Теневой Альтус)",
      "graceEn": "Shadow Keep Main Gate",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над невозрождаемым <b>Чёрным рыцарем Гаррю</b> в пещере <b>Грот у речного устья</b> (вход в ущелье реки Эллак к югу от благодати <b>Передний край замка</b> в Равнине Надгробий)."
    },
    {
      "id": "crucible_hornshield",
      "name": "Рогатый щит Горнила",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0",
      "graceRu": "Акведук Сиофры (Река Сиофра)",
      "graceEn": "Aqueduct-Facing Cliffs",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над невозрождаемым <b>Рыцарем Горнила</b> с копьём и рогатым щитом на узком карнизе в <b>Акведуке Сиофры</b> (путь из Нокрона перед Отважными горгульями)."
    },
    {
      "id": "dragonclaw_shield",
      "name": "Щит когтя дракона",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%BA%D0%BE%D0%B3%D1%82%D1%8F_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0",
      "graceRu": "Внешняя стена поля боя (Окраины столицы)",
      "graceEn": "Outer Wall Battleground",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над полевым боссом <b>Драконий Страж Древа</b> у северо-восточного входа в <b>Лейнделл, столицу королевства</b> (вместе с молотом Драконий коготь)."
    },
    {
      "id": "fingerprint_stone_shield",
      "name": "Каменный щит с отпечатками",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%BE%D1%82%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BA%D0%B0%D0%BC%D0%B8",
      "graceRu": "Проскрипция Яростного Пламени (Подземелье отчуждения)",
      "graceEn": "Frenzied Flame Proscription",
      "dlc": false,
      "guide": "Лежит на трупе на нижнем уровне <b>Проскрипции Яростного Пламени</b> под Лейнделлом (после победы над Могом Знамением ударьте по алтарю и спуститесь вниз по гробам и балкам)."
    },
    {
      "id": "eclipse_crest_greatshield",
      "name": "Большой щит с гербом затмения",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%BC_%D0%B7%D0%B0%D1%82%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F",
      "graceRu": "Главные ворота замка Сол (Вершины великанов)",
      "graceEn": "Castle Sol Main Gate",
      "dlc": false,
      "guide": "Фармится с призрачных <b>Рыцарей Мавзолея</b> с большим щитом (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — рыцарь у входа в <b>Катакомбы Чёрного ножа</b> в Лиурнии или в <b>Замке Сол</b>."
    },
    {
      "id": "ant_skull_plate",
      "name": "Пластина из муравьиного черепа",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0_%D0%B8%D0%B7_%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D1%8C%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE_%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0",
      "graceRu": "Вечный город Нокстелла (Нокстелла, Вечный город)",
      "graceEn": "Nokstella, Eternal City",
      "dlc": false,
      "guide": "Лежит в сундуке в тёмном зале в глубине <b>Нокстеллы, Вечного города</b> (поднимитесь по лестницам от благодати <b>Нокстелла, Вечный город</b> и сверните в комнату со слизнями и гигантскими муравьями)."
    },
    {
      "id": "erdtree_greatshield",
      "name": "Большой щит Древа Эрд",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%94%D1%80%D0%B5%D0%B2%D0%B0_%D0%AD%D1%80%D0%B4",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над парным мини-боссом <b>Страж Древа</b> у главных ворот на лестнице перед <b>Лейнделлом, столицей королевства</b> (к югу от благодати <b>Окраины столицы</b>)."
    },
    {
      "id": "jellyfish_shield",
      "name": "Медузий щит",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D0%B4%D1%83%D0%B7%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Подножие Четырёх колоколен (Озёрная Лиурния)",
      "graceEn": "Foot of the Four Belfries",
      "dlc": false,
      "guide": "Лежит на трупе внутри разбитой повозки в окружении красных призрачных медуз на дороге к северу от благодати <b>Подножие Четырёх колоколен</b> на западе Озёрной Лиурнии."
    },
    {
      "id": "visage_shield",
      "name": "Щит с ликом",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81_%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC",
      "graceRu": "Руины Калема (Звёздные пустоши)",
      "graceEn": "Caelem Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подземелье под <b>Руинами Калема</b> на севере Звёздных пустошей после победы над парным боссом <b>Безумный тыквоголовый</b> (спуск по лестнице в руинах)."
    },
    {
      "id": "one_eyed_shield",
      "name": "Щит с глазом",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81_%D0%B3%D0%BB%D0%B0%D0%B7%D0%BE%D0%BC",
      "graceRu": "Лачуга стража (Вершины великанов)",
      "graceEn": "Guardians' Garrison",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Старший прелат Аргхил</b> на вершине крепости <b>Гарнизон стражей</b> на Вершинах великанов (к югу от благодати <b>Лачуга стража</b>)."
    },
    {
      "id": "verdigris_greatshield",
      "name": "Большой щит из зелёной меди",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D0%B8%D0%B7_%D0%B7%D0%B5%D0%BB%D1%91%D0%BD%D0%BE%D0%B9_%D0%BC%D0%B5%D0%B4%D0%B8",
      "graceRu": "Прихожая Палаты Очищения (Энир-Илим)",
      "graceEn": "Cleansing Chamber Anteroom",
      "dlc": true,
      "guide": "Выпадает с <b>Мура</b> в финальной сюжетной схватке с союзниками Леды в <b>Энир-Илиме</b> (или при его убийстве у Креста у главных ворот; <b>пропускаемый предмет</b>: если ответить «Не знаю» в его диалоге, он не появится)."
    },
    {
      "id": "dueling_shield",
      "name": "Дуэльный щит",
      "category": "Колющие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%83%D1%8D%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Хранилище, первый этаж (Пристанище Теней)",
      "graceEn": "Storehouse, First Floor",
      "dlc": true,
      "guide": "Лежит на трупе в книжном зале на первом этаже <b>Хранилища образцов</b> в <b>Пристанище Теней</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Хранилище, первый этаж</b> пройдите в зал с огромными статуями и сверните в правый проход)."
    },
    {
      "id": "carian_thrusting_shield",
      "name": "Карианский колющий щит",
      "category": "Колющие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BB%D1%8E%D1%89%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Хранилище, седьмой этаж (Пристанище Теней)",
      "graceEn": "Storehouse, Seventh Floor",
      "dlc": true,
      "guide": "Лежит на трупе в западном зале верхнего яруса <b>Хранилища образцов</b> в <b>Пристанище Теней</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Хранилище, седьмой этаж</b> выйдите на балкон, поднимитесь по лестнице и спуститесь в западную галерею)."
    }
  ];

  window.SHIELD_PART_4 = items;
  window.SHIELD_PART4 = items;
  window.SHIELD_LIST = (window.SHIELD_LIST || []).concat(items);
  if (typeof window.registerShieldPart === 'function') {
    window.registerShieldPart(4, items);
  }
})();
