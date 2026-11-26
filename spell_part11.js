/* ER_SPELL_DB_PART | file: spell_part11.js | part: 11 | items: 13/13 (201-213) */
(function () {
  'use strict';

  var items = [
    {
      "id": "bayle_s_tyranny",
      "name": "Злоба Бейла",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BB%D0%BE%D0%B1%D0%B0_%D0%91%D0%B5%D0%B9%D0%BB%D0%B0",
      "graceRu": "Великий алтарь драконьего причастия (Зубастая гора)",
      "graceEn": "Grand Altar of Dragon Communion",
      "dlc": true,
      "guide": "Обменивается у <b>Великого алтаря драконьего причастия</b> у подножия <b>Зубастой горы</b> (<i>Shadow of the Erdtree</i>) на <b>Сердце Бейла</b> после победы над боссом <b>Бейл Ужасный</b> на вершине Зубастой горы."
    },
    {
      "id": "bayle_s_flame_lightning",
      "name": "Огненная молния Бейла",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D1%8F_%D0%91%D0%B5%D0%B9%D0%BB%D0%B0",
      "graceRu": "Великий алтарь драконьего причастия (Зубастая гора)",
      "graceEn": "Grand Altar of Dragon Communion",
      "dlc": true,
      "guide": "Обменивается у <b>Великого алтаря драконьего причастия</b> у подножия <b>Зубастой горы</b> (<i>Shadow of the Erdtree</i>) на <b>Сердце Бейла</b> после победы над боссом <b>Бейл Ужасный</b> (альтернативная награда за то же сердце)."
    },
    {
      "id": "golden_arcs",
      "name": "Золотые дуги",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5_%D0%B4%D1%83%D0%B3%D0%B8",
      "graceRu": "Руины Мурта (Теневой Альтус)",
      "graceEn": "Moorth Ruins",
      "dlc": true,
      "guide": "Лежит в сундуке в затопленной пещере <b>Тайный проход</b> к северо-западу от <b>Руин Мурта</b> в <b>Теневом Альтусе</b> (<i>Shadow of the Erdtree</i>; пройдите по озеру на север от руин и сверните в пещеру за врагами-тенями)."
    },
    {
      "id": "giant_golden_arc",
      "name": "Огромная золотая дуга",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B3%D1%80%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F_%D0%B4%D1%83%D0%B3%D0%B0",
      "graceRu": "Туннель у причала (Руины древней обители Рауха)",
      "graceEn": "Temple Town Ruins",
      "dlc": true,
      "guide": "Лежит в сундуке в верхней разрушенной башне <b>Руин храмового города</b> на нижнем ярусе <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; запрыгните на разрушенную стену на Потоке с восточной стороны руин)."
    },
    {
      "id": "spira",
      "name": "Спираль света",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D1%8C_%D1%81%D0%B2%D0%B5%D1%82%D0%B0",
      "graceRu": "Спиральный подъём (Энир-Илим)",
      "graceEn": "Spiral Rise",
      "dlc": true,
      "guide": "Лежит на трупе на скрытой лестнице в <b>Энир-Илиме</b> (<i>Shadow of the Erdtree</i>). От благодати <b>Спиральный подъём</b> поднимитесь по внешней лестнице, перепрыгните с крыши на разрушенные ступени с птицами-могильщицами и заберите молитву на площадке перед окном в башню."
    },
    {
      "id": "divine_bird_feathers",
      "name": "Перья священной птицы",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D1%80%D1%8C%D1%8F_%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%BF%D1%82%D0%B8%D1%86%D1%8B",
      "graceRu": "Спиральный подъём (Энир-Илим)",
      "graceEn": "Spiral Rise",
      "dlc": true,
      "guide": "Лежит на трупе на верхнем уступе <b>Энир-Илима</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Спиральный подъём</b> поднимитесь по внешней лестнице мимо патруля рогатых воинов к статуе у края обрыва)."
    },
    {
      "id": "divine_beast_tornado",
      "name": "Смерч священного зверя",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BC%D0%B5%D1%80%D1%87_%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B2%D0%B5%D1%80%D1%8F",
      "graceRu": "Виадук в храмовом городе (Руины древней обители Рауха)",
      "graceEn": "Viaduct Minor Tower",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над опциональным боссом <b>Священный танцующий лев</b> на руинах акведука в нижней северной части <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; доступ через руины храмового города)."
    },
    {
      "id": "watchful_spirit",
      "name": "Бдительный дух",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B4%D1%83%D1%85",
      "graceRu": "Складская башня (Белурат, поселение у башни)",
      "graceEn": "Storeroom",
      "dlc": true,
      "guide": "Выдаётся <b>Рогатой старухой</b> в запертой <b>Кладовой</b> в <b>Белурате, поселении у башни</b> (<i>Shadow of the Erdtree</i>) после победы над <b>Священным танцующим львом</b>, если вы поговорите с ней, надев <b>Голову священного зверя</b> (выпадает с босса)."
    },
    {
      "id": "fire_serpent",
      "name": "Огненный змей",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B7%D0%BC%D0%B5%D0%B9",
      "graceRu": "Хранилище, первый этаж (Пристанище Теней)",
      "graceEn": "Storehouse, First Floor",
      "dlc": true,
      "guide": "Лежит на трупе на верхнем ярусе <b>Хранилища образцов</b> в <b>Пристанище Теней</b>. От благодати <b>Хранилище, первый этаж</b> поднимитесь по лестницам к подвешенным статуям, перейдите на четвёртый этаж и выйдите на балкон."
    },
    {
      "id": "rain_of_fire",
      "name": "Огненный дождь",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B4%D0%BE%D0%B6%D0%B4%D1%8C",
      "graceRu": "Вид на Древо Упадка (Теневой Альтус)",
      "graceEn": "Scaduview",
      "dlc": true,
      "guide": "Выпадает с враждебного NPC <b>Огненный рыцарь Сальза</b> на узком каменном мосту в северной части <b>Пристанища Теней</b> (по пути от Хранилища образцов к плато <b>Вид на Древо Упадка</b>)."
    },
    {
      "id": "messmers_orb",
      "name": "Сфера Мессмера",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D1%84%D0%B5%D1%80%D0%B0_%D0%9C%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D0%B0",
      "graceRu": "Тёмный чертог (Пристанище Теней)",
      "graceEn": "Messmer's Dark Chamber",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Колосажателе</b> после победы над сюжетным боссом <b>Мессмер Колосажатель</b> в <b>Пристанище Теней</b>."
    },
    {
      "id": "multilayered_ring_of_light",
      "name": "Многослойные кольца света",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D0%BB%D0%BE%D0%B9%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B0_%D1%81%D0%B2%D0%B5%D1%82%D0%B0",
      "graceRu": "Главные ворота пристанища (Теневой Альтус)",
      "graceEn": "Shadow Keep Main Gate",
      "dlc": true,
      "guide": "Выпадает с <b>Инквизитора Йоури</b> после победы над боссом в глубине локации <b>Тёмные катакомбы</b> (спуститесь на юг по руслу реки от благодати <b>Руины замка у воды</b> в Теневом Альтусе)."
    },
    {
      "id": "light_of_miquella",
      "name": "Свет Микеллы",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B2%D0%B5%D1%82_%D0%9C%D0%B8%D0%BA%D0%B5%D0%BB%D0%BB%D1%8B",
      "graceRu": "Врата божественности (Энир-Илим)",
      "graceEn": "Gate of Divinity",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о боге и повелителе</b> после победы над финальным боссом DLC <b>Радан, консорт Микеллы</b> у <b>Врат божественности</b>."
    }
  ];

  window.SPELL_PART_11 = items;
  window.SPELL_PART11 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(11, items);
  }
})();
