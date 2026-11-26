/* ER_SPELL_DB_PART | file: spell_part7.js | part: 7 | items: 20/20 (121-140) */
(function () {
  'use strict';

  var items = [
    {
      "id": "radagons_rings_of_light",
      "name": "Кольца света Радагона",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0_%D1%81%D0%B2%D0%B5%D1%82%D0%B0_%D0%A0%D0%B0%D0%B4%D0%B0%D0%B3%D0%BE%D0%BD%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова Золотого порядка</b> за <b>7 500 рун</b> (молитвослов висит на люстре на втором этаже <b>Святилища Древа Эрд</b> в Лейнделле; <b>пропускаемый предмет</b>: забрать до Пепельной столицы)."
    },
    {
      "id": "litany_of_proper_death",
      "name": "Литания истинной смерти",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F_%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%BD%D0%BE%D0%B9_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Охотника на мёртвых Ди</b> в <b>Крепости Круглого стола</b> за <b>2 500 рун</b> (после его смерти по сюжету Фии доступна у Старых служанок-близнецов по его колокольной сфере)."
    },
    {
      "id": "order_healing",
      "name": "Лечение порядка",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Охотника на мёртвых Ди</b> в <b>Крепости Круглого стола</b> за <b>3 000 рун</b> (или по его колокольной сфере у Старых служанок-близнецов)."
    },
    {
      "id": "orders_blade",
      "name": "Клинок порядка",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Охотника на мёртвых Ди</b> в <b>Крепости Круглого стола</b> за <b>3 000 рун</b> (или по его колокольной сфере у Старых служанок-близнецов)."
    },
    {
      "id": "immutable_shield",
      "name": "Непреложный щит",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%BF%D1%80%D0%B5%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Altus Highway Junction",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Брата Корина</b> за <b>7 500 рун</b> после того, как вы расскажете <b>Золотой Маске</b> правду о Радагоне в <b>Лейнделле</b> (используя молитву <b>Принцип регрессии</b> перед статуей) и встретите их на мосту в <b>Вершинах великанов</b>."
    },
    {
      "id": "law_of_causality",
      "name": "Закон причины и следствия",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B_%D0%B8_%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B8%D1%8F",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Выдаётся в награду от <b>Сэра Гидеона Офнира</b> в <b>Крепости Круглого стола</b> после того, как вы победите <b>Мога, Повелителя Крови</b> во Дворце Могвинов и расскажете Гидеону о коконе Микеллы (<b>пропускаемый предмет</b>: забрать до победы над Маликетом)."
    },
    {
      "id": "law_of_regression",
      "name": "Принцип регрессии",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B8",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова Золотого порядка</b> (с люстры в <b>Святилище Древа Эрд</b> в Лейнделле) за <b>10 000 рун</b> (<b>пропускаемый свиток</b>: забрать до Пепельной столицы)."
    },
    {
      "id": "lightning_spear",
      "name": "Громовое копьё",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91",
      "graceRu": "Лачуга художника (Озёрная Лиурния)",
      "graceEn": "Artist's Shack (Liurnia of the Lakes)",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова драконьего культа</b> за <b>6 000 рун</b> (молитвослов выпадает с рыцаря Лейнделла в золотых доспехах на тракте к югу от <b>Лачуги художника</b> в Лиурнии)."
    },
    {
      "id": "lightning_strike",
      "name": "Сноп молний",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BD%D0%BE%D0%BF_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B9",
      "graceRu": "Башня возвращения (Плачущий полуостров)",
      "graceEn": "Ailing Village Outskirts",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на уступе над <b>Деревней больных</b> в центральной части <b>Плачущего полуострова</b> (к северу от дороги, ведущей к Башне возвращения)."
    },
    {
      "id": "honed_bolt",
      "name": "Прицельный удар",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%80%D0%B8%D1%86%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
      "graceRu": "Лачуга художника (Озёрная Лиурния)",
      "graceEn": "Artist's Shack (Liurnia of the Lakes)",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова драконьего культа</b> (с рыцаря Лейнделла к югу от <b>Лачуги художника</b>) за <b>7 000 рун</b>."
    },
    {
      "id": "ancient_dragons_lightning_spear",
      "name": "Громовое копьё древних драконов",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D1%85_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%B2",
      "graceRu": "Утёс с видом на святилище (Разрушающийся Фарум-Азула)",
      "graceEn": "Crumbling Beast Grave",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова древних драконов</b> за <b>10 000 рун</b> (молитвослов лежит в центре зала со зверолюдьми сразу за благодатью <b>Утёс с видом на святилище</b> в Фарум-Азуле)."
    },
    {
      "id": "ancient_dragons_lightning_strike",
      "name": "Сноп молний древних драконов",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BD%D0%BE%D0%BF_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B9_%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D1%85_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%B2",
      "graceRu": "Утёс с видом на святилище (Разрушающийся Фарум-Азула)",
      "graceEn": "Crumbling Beast Grave",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова древних драконов</b> (из <b>Разрушающегося Фарум-Азулы</b>) за <b>13 000 рун</b>."
    },
    {
      "id": "lansseaxs_glaive",
      "name": "Глефа Лансеаксы",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0_%D0%9B%D0%B0%D0%BD%D1%81%D0%B5%D0%B0%D0%BA%D1%81%D1%8B",
      "graceRu": "Бастионный тракт (Плато Альтус)",
      "graceEn": "Rampartside Path",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над полевым боссом <b>Древний дракон Лансеакс</b> на холме к юго-западу от благодати <b>Бастионный тракт</b> на Плато Альтус (после её бегства при первой встрече у гробницы святого героя)."
    },
    {
      "id": "fortissaxs_lightning_spear",
      "name": "Громовое копьё Фортисакса",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D0%A4%D0%BE%D1%80%D1%82%D0%B8%D1%81%D0%B0%D0%BA%D1%81%D0%B0",
      "graceRu": "Трон принца Смерти (Низовье Глубокого Корня)",
      "graceEn": "Prince of Death's Throne",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о драконе-личе</b> после победы над секретным боссом <b>Дракон-лич Фортисакс</b> во сне <b>Фии</b> (финал её квеста в Низовье Глубокого Корня)."
    },
    {
      "id": "frozen_lightning_spear",
      "name": "Ледяное громовое копьё",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D0%B4%D1%8F%D0%BD%D0%BE%D0%B5_%D0%B3%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91",
      "graceRu": "Река Ансель (Река Ансель)",
      "graceEn": "Ainsel River Downstream",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Драконий солдат Нокстеллы</b> в огромном подземном храме в глубине <b>Реки Ансель</b> (вход через колодец реки Ансель в восточной части Озёрной Лиурнии)."
    },
    {
      "id": "death_lightning",
      "name": "Смертоносная молния",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BC%D0%B5%D1%80%D1%82%D0%BE%D0%BD%D0%BE%D1%81%D0%BD%D0%B0%D1%8F_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D1%8F",
      "graceRu": "Трон принца Смерти (Низовье Глубокого Корня)",
      "graceEn": "Prince of Death's Throne",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о драконе-личе</b> после победы над секретным боссом <b>Дракон-лич Фортисакс</b> в финале квестовой линии Фии."
    },
    {
      "id": "electrify_armament",
      "name": "Электрическое оружие",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5",
      "graceRu": "Лачуга художника (Озёрная Лиурния)",
      "graceEn": "Artist's Shack (Liurnia of the Lakes)",
      "dlc": false,
      "guide": "Продаётся у <b>Брата Корина</b> или <b>Мириэля, пастыря клятв</b> после передачи им <b>Молитвослова драконьего культа</b> (выпадает с золотого рыцаря к югу от <b>Лачуги художника</b> в Лиурнии) за <b>4 000 рун</b>."
    },
    {
      "id": "dragonbolt_blessing",
      "name": "Дар драконьего грома",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B0%D1%80_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8C%D0%B5%D0%B3%D0%BE_%D0%B3%D1%80%D0%BE%D0%BC%D0%B0",
      "graceRu": "Могила героя Аурицы (Окраины столицы)",
      "graceEn": "Auriza Hero's Grave",
      "dlc": false,
      "guide": "Лежит в сундуке в тупике на нижнем уровне подземелья <b>Могила героя Аурицы</b> на востоке Плато Альтус (спрыгните с узкой каменной балки под колесницами в зал с василисками)."
    },
    {
      "id": "vykes_dragonbolt",
      "name": "Драконий удар Вика",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B8%D0%B9_%D1%83%D0%B4%D0%B0%D1%80_%D0%92%D0%B8%D0%BA%D0%B0",
      "graceRu": "Узилище правителя (Вершины великанов)",
      "graceEn": "Lord Contender's Evergaol",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Рыцарь Круглого стола Вик</b> внутри <b>Узилища правителя</b> на юго-западе <b>Вершин великанов</b> (требуется <b>1 мечевидный ключ</b>)."
    },
    {
      "id": "knights_lightning_spear",
      "name": "Громовое копьё рыцаря",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F",
      "graceRu": "Катакомбы Скорпионовой реки (Руины древней обители Рауха)",
      "graceEn": "Scorpion River Catacombs",
      "dlc": true,
      "guide": "Лежит на трупе в секретной нише подземелья <b>Катакомбы Скорпионовой реки</b> (<i>Shadow of the Erdtree</i>; в комнате со спускающимся шипастым потолком запрыгните в боковой проём на стене справа)."
    }
  ];

  window.SPELL_PART_7 = items;
  window.SPELL_PART7 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(7, items);
  }
})();
