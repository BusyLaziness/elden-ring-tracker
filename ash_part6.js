/* ER_ASH_DB_PART | file: ash_part6.js | part: 6 | items: 16/16 (101-116) */
(function () {
  'use strict';

  var items = [
  {
    "id": "parry",
    "name": "Парирование",
    "category": "Щиты",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%B0%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме в Замогилье (или в гостиной <b>Вулканова поместья</b>, а после его ухода — по колокольной сфере) за <b>600 рун</b>."
  },
  {
    "id": "golden_parry",
    "name": "Золотое парирование",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5_%D0%BF%D0%B0%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Outer Wall Phantom Tree",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменной лестнице у главных ворот <b>Лейнделла, столицы королевства</b> (между двумя Стражами Древа на Окраинах столицы)."
  },
  {
    "id": "vow_of_the_indomitable",
    "name": "Клятва непокорства",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%BB%D1%8F%D1%82%D0%B2%D0%B0_%D0%BD%D0%B5%D0%BF%D0%BE%D0%BA%D0%BE%D1%80%D1%81%D1%82%D0%B2%D0%B0",
    "graceRu": "Деревня альбиноров (Озёрная Лиурния)",
    "graceEn": "Village of the Albinaurics",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в ядовитом болоте под <b>Деревней альбиноров</b> на юго-западе Озёрной Лиурнии (к северу от дороги в деревню)."
  },
  {
    "id": "storm_wall",
    "name": "Грозовая стена",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%93%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F_%D1%81%D1%82%D0%B5%D0%BD%D0%B0",
    "graceRu": "Замок Грозовой Завесы (Замогилье)",
    "graceEn": "Stormhill Shack",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на разрушенной части сломанного моста к северу от <b>Лачуги на Грозовом холме</b> (над обрывом у восточной стены Замка Грозовой Завесы)."
  },
  {
    "id": "shield_bash",
    "name": "Толчок щитом",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%BE%D0%BB%D1%87%D0%BE%D0%BA_%D1%89%D0%B8%D1%82%D0%BE%D0%BC",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Hermit Merchant's Shack",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на дороге к юго-востоку от <b>Лачуги торговца-отшельника</b> на Окраинах столицы (рядом с руинами и скелетами)."
  },
  {
    "id": "barricade_shield",
    "name": "Заслон",
    "category": "Щиты",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%B0%D1%81%D0%BB%D0%BE%D0%BD",
    "graceRu": "Замок Морн (Плачущий полуостров)",
    "graceEn": "Castle Morne Rampart",
    "dlc": false,
    "guide": "Выпадает за победу над ночным боссом <b>Ночной всадник</b> (появляется только <b>ночью</b>) на тракте рядом с благодатью <b>Бастион замка Морн</b> на Плачущем полуострове."
  },
  {
    "id": "thops_barrier_ash",
    "name": "Преграда Топса (пепел)",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%B5%D0%B3%D1%80%D0%B0%D0%B4%D0%B0_%D0%A2%D0%BE%D0%BF%D1%81%D0%B0",
    "graceRu": "Храм Ирит (Озёрная Лиурния)",
    "graceEn": "Church of Irith",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на кладбище к северо-западу от <b>Храма Ирит</b> на юге Озёрной Лиурнии (сразу за выходом из Замка Грозовой Завесы)."
  },
  {
    "id": "carian_retaliation_ash",
    "name": "Карианское возмездие (пепел)",
    "category": "Щиты",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%B8%D0%B5",
    "graceRu": "Королевские земли лунных взоров (Озёрная Лиурния)",
    "graceEn": "Royal Moongazing Grounds",
    "dlc": false,
    "guide": "Продаётся у <b>Пидии, карианского слуги</b> на верхнем балконе <b>Поместья Карии</b> за <b>3 000 рун</b> (спрыгните по уступам со стороны локации <b>Три сестры</b> за Поместьем Карии)."
  },
  {
    "id": "shield_crash",
    "name": "Разлом щита",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D0%B0%D0%B7%D0%BB%D0%BE%D0%BC_%D1%89%D0%B8%D1%82%D0%B0",
    "graceRu": "Внешний ров (Плато Альтус)",
    "graceEn": "Lux Ruins",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на северной окраине <b>Руин Люкса</b> на западе Плато Альтус (рядом с выходом из Ущелья с руинами)."
  },
  {
    "id": "holy_ground",
    "name": "Святая земля",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%B2%D1%8F%D1%82%D0%B0%D1%8F_%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F",
    "graceRu": "Могила героя Аурицы (Окраины столицы)",
    "graceEn": "Auriza Hero's Grave",
    "dlc": false,
    "guide": "Лежит в сундуке в тупике на среднем уровне подземелья <b>Могила героя Аурицы</b> на востоке Плато Альтус (за уничтоженными колесницами в коридоре с василисками)."
  },
  {
    "id": "no_skill",
    "name": "Нет навыка",
    "category": "Щиты",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%BD%D0%B5%D1%82_%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA%D0%B0",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме в Замогилье (или в гостиной <b>Вулканова поместья</b>) за <b>600 рун</b> с самого начала игры."
  },
  {
    "id": "shield_strike",
    "name": "Атака щитом",
    "category": "Щиты",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%90%D1%82%D0%B0%D0%BA%D0%B0_%D1%89%D0%B8%D1%82%D0%BE%D0%BC",
    "graceRu": "Хранилище, первый этаж (Пристанище Теней)",
    "graceEn": "Storehouse, First Floor",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на скрытом нижнем балконе <b>Пристанища Теней</b> (<i>Shadow of the Erdtree</i>; от главного входа в Хранилище образцов спуститесь на лифте и пройдите в боковой зал к обрыву)."
  },
  {
    "id": "rolling_sparks",
    "name": "Фонтан искр",
    "category": "Флаконы для метания",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A4%D0%BE%D0%BD%D1%82%D0%B0%D0%BD_%D0%B8%D1%81%D0%BA%D1%80",
    "graceRu": "Пристанище Теней (Теневой Альтус)",
    "graceEn": "Shadow Keep Main Gate",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> в лагере парфюмеров у юго-восточного подножия <b>Пристанища Теней</b> в <b>Теневом Альтусе</b> (<i>Shadow of the Erdtree</i>; к северу от благодати <b>Перекрёсток у главных ворот</b>)."
  },
  {
    "id": "wall_of_sparks",
    "name": "Стена искр",
    "category": "Флаконы для метания",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D1%82%D0%B5%D0%BD%D0%B0_%D0%B8%D1%81%D0%BA%D1%80",
    "graceRu": "Лазурное побережье (Лазурное побережье)",
    "graceEn": "Cerulean Coast",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> в небольшой роще у южного берега <b>Лазурного побережья</b> (<i>Shadow of the Erdtree</i>; к западу от благодати <b>Крест на Лазурном побережье</b>, рядом с могилами)."
  },
  {
    "id": "palm_blast",
    "name": "Удар ладонью",
    "category": "Рукопашные искусства",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D0%BB%D0%B0%D0%B4%D0%BE%D0%BD%D1%8C%D1%8E",
    "graceRu": "Лес Бездны (Лес Бездны)",
    "graceEn": "Abyssal Woods",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на уступе в северо-западной части локации <b>Лес Бездны</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Лес Бездны</b> идите на север вдоль обрыва в сторону заброшенного поместья)."
  },
  {
    "id": "dryleaf_whirlwind",
    "name": "Вихрь Сухих Листьев",
    "category": "Рукопашные искусства",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D0%B8%D1%85%D1%80%D1%8C_%D0%A1%D1%83%D1%85%D0%B8%D1%85_%D0%9B%D0%B8%D1%81%D1%82%D1%8C%D0%B5%D0%B2",
    "graceRu": "Руины древней обители Рауха, восток (Руины древней обители Рауха)",
    "graceEn": "Rauh Ancient Ruins, East",
    "dlc": true,
    "guide": "Лежит на трупе у края водопада на верхнем ярусе <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Руины древней обители Рауха, восток</b> поднимитесь по лестнице к храму и поверните направо к скале)."
  }
];

  window.ASH_PART_6 = items;
  window.ASH_PART6 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(6, items);
  }
})();
