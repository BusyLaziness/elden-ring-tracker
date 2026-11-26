/* ER_SPELL_DB_PART | file: spell_part6.js | part: 6 | items: 20/20 (101-120) */
(function () {
  'use strict';

  var items = [
    {
      "id": "barrier_of_gold",
      "name": "Золотая преграда",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F_%D0%BF%D1%80%D0%B5%D0%B3%D1%80%D0%B0%D0%B4%D0%B0",
      "graceRu": "Западный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "West Capital Rampart",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на крыше у башни в западной части <b>Лейнделла, столицы королевства</b> (поднимитесь по крышам от <b>Западного бастиона столицы</b>; <b>пропускаемый предмет</b>: забрать до Лейнделла, столицы пепла)."
    },
    {
      "id": "golden_lightning_fortification",
      "name": "Защита от золотой молнии",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%BE%D1%82_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B8",
      "graceRu": "Утёс с видом на святилище (Разрушающийся Фарум-Азула)",
      "graceEn": "Crumbling Beast Grave",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на обрыве в начале <b>Разрушающегося Фарум-Азулы</b> (пройдите через террасу со спящими зверолюдьми от первой благодати к краю обрыва)."
    },
    {
      "id": "protection_of_the_erdtree",
      "name": "Покровительство Древа Эрд",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE_%D0%94%D1%80%D0%B5%D0%B2%D0%B0_%D0%AD%D1%80%D0%B4",
      "graceRu": "Столица королевства, западный бастион (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на холме к западу от ворот <b>Лейнделла</b> на <b>Окраинах столицы</b> (недалеко от лагеря солдат с повозкой и изъязвлённым древесным духом)."
    },
    {
      "id": "wrath_of_gold",
      "name": "Золотой гнев",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%B3%D0%BD%D0%B5%D0%B2",
      "graceRu": "Кровавые руины (Плато Альтус)",
      "graceEn": "Writheblood Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подземном подвале <b>Лесных руин</b> (к северу от <b>Кровавых руин</b> на западе Плато Альтус; спуститесь по лестнице под охраной полулюдей)."
    },
    {
      "id": "erdtree_heal",
      "name": "Лечение Древа Эрд",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%80%D0%B5%D0%B2%D0%B0_%D0%AD%D1%80%D0%B4",
      "graceRu": "Спальня королевы (Лейнделл, столица пепла)",
      "graceEn": "Queen's Bedchamber",
      "dlc": false,
      "guide": "Лежит на кровати в <b>Спальне королевы</b> в <b>Лейнделле, столице пепла</b> (появляется на месте благодати Древа Эрд только <b>после</b> победы над Маликетом и сжигания Древа Эрд)."
    },
    {
      "id": "blessing_of_the_erdtree",
      "name": "Благословение Древа Эрд",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%80%D0%B5%D0%B2%D0%B0_%D0%AD%D1%80%D0%B4",
      "graceRu": "Спальня королевы (Лейнделл, столица королевства)",
      "graceEn": "Queen's Bedchamber",
      "dlc": false,
      "guide": "Лежит на кровати в <b>Спальне королевы</b> в <b>Лейнделле, столице королевства</b> перед боем с Морготтом (<b>пропускаемый предмет</b>: забрать до превращения Лейнделла в Столицу пепла, где её заменит Лечение Древа Эрд)."
    },
    {
      "id": "blessings_boon",
      "name": "Благословенный дар",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B0%D1%80",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Altus Highway Junction",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Брата Корина</b> за <b>4 200 рун</b> после его переезда на <b>Плато Альтус</b> (на тракт к северу от перекрёстка)."
    },
    {
      "id": "aspects_of_the_crucible_breath",
      "name": "Атрибут рыцаря Горнила: дыхание",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5",
      "graceRu": "Вход в Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Prison Town Church",
      "dlc": false,
      "guide": "Выпадает за победу над мини-боссом <b>Рыцарь Горнила</b> в глубине <b>Вулканова поместья</b> (спуститесь от Храма Игли к лавовому озеру и пройдите в зал перед телепортом к Рикарду)."
    },
    {
      "id": "aspects_of_the_crucible_tail",
      "name": "Атрибут рыцаря Горнила: хвост",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D1%85%D0%B2%D0%BE%D1%81%D1%82",
      "graceRu": "Узилище на Грозовом холме (Замогилье)",
      "graceEn": "Stormhill Evergaol",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Рыцарь Горнила</b> внутри <b>Узилища на Грозовом холме</b> на юго-западе Замогилья."
    },
    {
      "id": "aspects_of_the_crucible_horns",
      "name": "Атрибут рыцаря Горнила: рога",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D1%80%D0%BE%D0%B3%D0%B0",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над невозрождаемым <b>Рыцарем Горнила</b> в овраге у подножия <b>Замка Грозовой Завесы</b> (спрыгните по уступам с обрыва за стеной у благодати <b>Башня бастиона</b>)."
    },
    {
      "id": "elden_stars",
      "name": "Звёзды Элдена",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D1%8B_%D0%AD%D0%BB%D0%B4%D0%B5%D0%BD%D0%B0",
      "graceRu": "Безымянный вечный город (Низовье Глубокого Корня)",
      "graceEn": "Great Waterfall Crest",
      "dlc": false,
      "guide": "Лежит на трупе в глубине муравьиной пещеры на западе <b>Низовья Глубокого Корня</b> (заберитесь по гигантским корням от благодати <b>Гребень великого водопада</b> в пещеру с гигантскими муравьями-матками)."
    },
    {
      "id": "black_blade",
      "name": "Чёрный клинок",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Маликет, Чёрный Клинок (Сокрушённый Фарум-Азула)",
      "graceEn": "Maliketh, the Black Blade",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Чёрном Клинке</b> после победы над сюжетным боссом <b>Маликет, Чёрный Клинок</b> в <b>Сокрушённом Фарум-Азуле</b>."
    },
    {
      "id": "heal_from_afar",
      "name": "Лечение на расстоянии",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8",
      "graceRu": "Руины древней обители Рауха, восток (Руины древней обители Рауха)",
      "graceEn": "Rauh Ancient Ruins, East",
      "dlc": true,
      "guide": "Лежит на трупе в маленькой пещере у подножия водопада на нижнем ярусе <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; спуститесь по уступам к югу от благодати <b>Руины древней обители Рауха, восток</b>)."
    },
    {
      "id": "wrath_from_afar",
      "name": "Отголосок гнева",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%82%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%BA_%D0%B3%D0%BD%D0%B5%D0%B2%D0%B0",
      "graceRu": "Вид на Древо Упадка (Теневой Альтус)",
      "graceEn": "Scaduview",
      "dlc": true,
      "guide": "Лежит в сундуке в деревянной лачуге у края обрыва на плато <b>Вид на Древо Упадка</b> в северо-восточной части <b>Теневого Альтуса</b> (доступ через секретный проход с жестом «О Матерь» у Задних ворот Пристанища Теней)."
    },
    {
      "id": "minor_erdtree_incantation",
      "name": "Малое Древо Эрд",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B0%D0%BB%D0%BE%D0%B5_%D0%94%D1%80%D0%B5%D0%B2%D0%BE_%D0%AD%D1%80%D0%B4",
      "graceRu": "Деревня шаманов (Внутренние земли)",
      "graceEn": "Hinterland",
      "dlc": true,
      "guide": "Лежит на трупе у корней золотого деревца в заброшенной <b>Деревне шаманов</b> на восточном плато <b>Внутренних земель</b> (<i>Shadow of the Erdtree</i>; к востоку от благодати <b>Внутренние земли</b> за двумя Стражами Древа)."
    },
    {
      "id": "aspects_of_the_crucible_thorns",
      "name": "Атрибут рыцаря Горнила: шипы",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D1%88%D0%B8%D0%BF%D1%8B",
      "graceRu": "Покои за очищением (Пристанище Теней)",
      "graceEn": "Shadow Keep, Back Gate",
      "dlc": true,
      "guide": "Выпадает при победе над невозрождаемым <b>Гиппопотамом</b> в нижней пещере <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; спуститесь по уступам в грот под храмом в южной части руин)."
    },
    {
      "id": "aspects_of_the_crucible_bloom",
      "name": "Атрибут рыцаря Горнила: цветок",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%BA",
      "graceRu": "Руины древней обители Рауха, запад (Руины древней обители Рауха)",
      "graceEn": "Rauh Ancient Ruins, West",
      "dlc": true,
      "guide": "Лежит на трупе на вершине скрытого каменного уступа в <b>Руинах древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Руины древней обители Рауха, запад</b> поднимитесь по лестницам к храму и перепрыгните через разрушенный балкон налево)."
    },
    {
      "id": "land_of_shadow",
      "name": "Земля теней",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F_%D1%82%D0%B5%D0%BD%D0%B5%D0%B9",
      "graceRu": "Подножие Древа Упадка (Древо Упадка)",
      "graceEn": "Scadutree Base",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о теневом подсолнухе</b> после победы над боссом <b>Воплощение Древа Упадка</b> у <b>Подножия Древа Упадка</b>."
    },
    {
      "id": "discus_of_light",
      "name": "Сияющий диск",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B8%D1%8F%D1%8E%D1%89%D0%B8%D0%B9_%D0%B4%D0%B8%D1%81%D0%BA",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Altus Highway Junction",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Брата Корина</b> за <b>11 000 рун</b> после того, как вы найдёте <b>Золотую Маску</b> на разрушенном мосту на севере <b>Плато Альтус</b> и сообщите Корину о его местонахождении."
    },
    {
      "id": "triple_rings_of_light",
      "name": "Тройные кольца света",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%80%D0%BE%D0%B9%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B0_%D1%81%D0%B2%D0%B5%D1%82%D0%B0",
      "graceRu": "Молельня (Эльфаэль, опора Святого Древа)",
      "graceEn": "Prayer Room",
      "dlc": false,
      "guide": "Лежит в сундуке в запертой комнате в <b>Эльфаэле, опоре Святого Древа</b> (требуется <b>1 мечевидный ключ</b>; от благодати <b>Молельня</b> пробегите по стене на север и спрыгните в закрытый дворик с рыцарем чистой гнили)."
    }
  ];

  window.SPELL_PART_6 = items;
  window.SPELL_PART6 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(6, items);
  }
})();
