/* ER_ASH_DB_PART | file: ash_part3.js | part: 3 | items: 20/20 (41-60) */
(function () {
  'use strict';

  var items = [
  {
    "id": "stormcaller",
    "name": "Буревестник",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%91%D1%83%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D0%BA",
    "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
    "graceEn": "Rampart Tower",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> во внутреннем дворе <b>Замка Грозовой Завесы</b> (за дверью, требующей <b>1 мечевидный ключ</b>, рядом со статуей с трещинами и рыцарем-изгнанником)."
  },
  {
    "id": "storm_stomp",
    "name": "Грозовой удар",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%93%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Предвратные руины (Замогилье)",
    "graceEn": "Gatefront",
    "dlc": false,
    "guide": "Лежит в сундуке в подземном подвале в центре <b>Предвратных руин</b> в Замогилье (рядом с точильным ножом)."
  },
  {
    "id": "vacuum_slice",
    "name": "Опустошающий порез",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D0%BF%D1%83%D1%81%D1%82%D0%BE%D1%88%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BF%D0%BE%D1%80%D0%B5%D0%B7",
    "graceRu": "Водопад в акведуке (Низовье Глубокого Корня)",
    "graceEn": "Great Waterfall Crest",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на ветке дерева к востоку от благодати <b>Гребень великого водопада</b> в <b>Низовье Глубокого Корня</b> (сразу за входом от Отважных горгулий)."
  },
  {
    "id": "phantom_slash",
    "name": "Призрачный удар",
    "category": "Качественные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Запретные земли (Вершины великанов)",
    "graceEn": "Forbidden Lands",
    "dlc": false,
    "guide": "Выпадает с полевого босса <b>Ночной всадник</b> (появляется только <b>ночью</b>) на заснеженной тропе в середине локации <b>Запретные земли</b> (по пути к Большому подъёмнику Рольда)."
  },
  {
    "id": "determination",
    "name": "Твёрдость духа",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%B2%D1%91%D1%80%D0%B4%D0%BE%D1%81%D1%82%D1%8C_%D0%B4%D1%83%D1%85%D0%B0",
    "graceRu": "Берег у Агхила (Замогилье)",
    "graceEn": "Agheel Lake North",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном мосту к северо-востоку от <b>Озера Агхил</b> в Замогилье (по дороге к Третьему храму Марики)."
  },
  {
    "id": "royal_knights_resolve",
    "name": "Решимость рыцаря",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D0%B5%D1%88%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F",
    "graceRu": "Храм Игли (Вулкан Гельмир)",
    "graceEn": "Temple of Eiglay",
    "dlc": false,
    "guide": "Лежит на трупе за дверью, запечатанной бесом (требуются <b>2 мечевидных ключа</b>), на верхнем ярусе тюремного города <b>Вулканова поместья</b> (поднимитесь на лифте от Храма Игли и пройдите по карнизу к камерам)."
  },
  {
    "id": "sideways_slash",
    "name": "Стойка вполоборота",
    "category": "Качественные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D1%82%D0%BE%D0%B9%D0%BA%D0%B0_%D0%B2%D0%BF%D0%BE%D0%BB%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D0%B0",
    "graceRu": "Форт порицания (Теневой Альтус)",
    "graceEn": "Fort of Reprimand",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> в лагере солдат перед входом в <b>Форт порицания</b> на юге <b>Теневого Альтуса</b> (<i>Shadow of the Erdtree</i>; сразу к востоку от моста через ущелье)."
  },
  {
    "id": "glintstone_pebble_ash",
    "name": "Снаряды блестящих камней",
    "category": "Магические",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%BD%D0%B0%D1%80%D1%8F%D0%B4%D1%8B_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D1%85_%D0%BA%D0%B0%D0%BC%D0%BD%D0%B5%D0%B9",
    "graceRu": "Лачуга мастера войны (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Чародея Рожера</b> в <b>Крепости Круглого стола</b> за <b>1 500 рун</b> после победы над Годриком Сторуким в Замке Грозовой Завесы (либо по колокольной сфере Рожера после его смерти)."
  },
  {
    "id": "glintblade_phalanx_ash",
    "name": "Фаланга сияющего меча",
    "category": "Магические",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A4%D0%B0%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0_%D1%81%D0%B8%D1%8F%D1%8E%D1%89%D0%B5%D0%B3%D0%BE_%D0%BC%D0%B5%D1%87%D0%B0",
    "graceRu": "Крепость Круглого стола (Крепость Круглого стола)",
    "graceEn": "Table of Lost Grace",
    "dlc": false,
    "guide": "Снимается с <b>Рапиры Рожера +8</b>, которую <b>Чародей Рожер</b> дарит в <b>Крепости Круглого стола</b> после победы над Годриком Сторуким в Замке Грозовой Завесы (либо забирается с его тела)."
  },
  {
    "id": "carian_greatsword_ash",
    "name": "Карианский двуручник",
    "category": "Магические",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA",
    "graceRu": "Лачуга мастера войны (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Чародея Рожера</b> в <b>Крепости Круглого стола</b> за <b>2 500 рун</b> после победы над Годриком Сторуким в Замке Грозовой Завесы (либо по колокольной сфере Рожера)."
  },
  {
    "id": "carian_grandeur",
    "name": "Карианское величие",
    "category": "Магические",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D0%B5",
    "graceRu": "Нижний ярус поместья (Поместье Карии)",
    "graceEn": "Manor Lower Level",
    "dlc": false,
    "guide": "Лежит на трупе на крыше в восточной части <b>Поместья Карии</b> (Озёрная Лиурния). От благодати <b>Нижний ярус поместья</b> выйдите на стену, пройдите по левому краю и спрыгните по крышам в закрытый двор с садом."
  },
  {
    "id": "spinning_weapon",
    "name": "Вращающееся оружие",
    "category": "Магические",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D1%80%D0%B0%D1%89%D0%B0%D1%8E%D1%89%D0%B5%D0%B5%D1%81%D1%8F_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5",
    "graceRu": "Лачуга мастера войны (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Чародея Рожера</b> в <b>Крепости Круглого стола</b> за <b>1 000 рун</b> после победы над Годриком Сторуким в Замке Грозовой Завесы (либо по колокольной сфере Рожера)."
  },
  {
    "id": "lorettas_slash",
    "name": "Удар Лоретты",
    "category": "Магические",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D0%9B%D0%BE%D1%80%D0%B5%D1%82%D1%82%D1%8B",
    "graceRu": "Королевские земли лунных взоров (Озёрная Лиурния)",
    "graceEn": "Royal Moongazing Grounds",
    "dlc": false,
    "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Королевский рыцарь Лоретта</b> на арене в конце <b>Поместья Карии</b> (север Озёрной Лиурнии)."
  },
  {
    "id": "gravitas",
    "name": "Гравитас",
    "category": "Магические",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%93%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B0%D1%81",
    "graceRu": "Прибрежные руины (Замогилье)",
    "graceEn": "Seaside Ruins",
    "dlc": false,
    "guide": "Выпадает с <b>Алебастрового повелителя</b> на песчаном пляже у подножия скал к югу от <b>Прибрежных руин</b> в Замогилье (спуститесь вниз через воздушный поток)."
  },
  {
    "id": "waves_of_darkness",
    "name": "Тёмные волны",
    "category": "Магические",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%BB%D0%BD%D1%8B",
    "graceRu": "Озеро Гнили (Озеро Гнили)",
    "graceEn": "Grand Cloister",
    "dlc": false,
    "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Рождённом Бездной</b> после победы над боссом <b>Астель, Рождённый Бездной</b> в глубине за <b>Великим клуатром</b>."
  },
  {
    "id": "carian_sovereignty",
    "name": "Власть рода Кария",
    "category": "Магические",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D0%BB%D0%B0%D1%81%D1%82%D1%8C_%D1%80%D0%BE%D0%B4%D0%B0_%D0%9A%D0%B0%D1%80%D0%B8%D1%8F",
    "graceRu": "Катакомбы под туманным разломом (Теневой Альтус)",
    "graceEn": "Fog Rift Catacombs",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном уступе у подножия скалы к северу от <b>Замка Энсис</b> в <b>Теневом Альтусе</b> (<i>Shadow of the Erdtree</i>; напротив входа в <b>Катакомбы под туманным разломом</b>)."
  },
  {
    "id": "flaming_strike",
    "name": "Пламенный удар",
    "category": "Огненные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Покои у площади (Замок Рыжей Гривы)",
    "graceEn": "Chamber Outside the Plaza",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на кладбище за внешней стеной <b>Замка Рыжей Гривы</b> в Звёздных пустошах (обойдите замок справа от главных ворот)."
  },
  {
    "id": "flame_of_the_redmanes",
    "name": "Пламя Рыжегривых",
    "category": "Огненные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%A0%D1%8B%D0%B6%D0%B5%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D1%85",
    "graceRu": "Форт Гаэль (Звёздные пустоши)",
    "graceEn": "Fort Gael North",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> (оставляющего светящиеся следы) на дороге к западу от благодати <b>Форт Гаэль, север</b> на границе Замогилья и Звёздных пустошей."
  },
  {
    "id": "eruption",
    "name": "Извержение",
    "category": "Огненные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%98%D0%B7%D0%B2%D0%B5%D1%80%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5",
    "graceRu": "Вулканово поместье (Вулкан Гельмир)",
    "graceEn": "Volcano Manor",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в гостиной <b>Вулканова поместья</b> за <b>3 000 рун</b> после выполнения первых двух контрактов на охоту на погасших (<b>пропускаемый продавец</b>: купите до убийства Рикарда или снимите с его тела при вторжении в Фарум-Азуле)."
  },
  {
    "id": "prelates_charge",
    "name": "Рывок прелата",
    "category": "Пылающие",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D1%8B%D0%B2%D0%BE%D0%BA_%D0%BF%D1%80%D0%B5%D0%BB%D0%B0%D1%82%D0%B0",
    "graceRu": "Могила героя-победителя великанов (Вершины великанов)",
    "graceEn": "Giant-Conquering Hero's Grave",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на ветке дерева над обрывом в лагере огненных монахов <b>Стражи пламени</b> на юго-западе <b>Вершин великанов</b>."
  }
];

  window.ASH_PART_3 = items;
  window.ASH_PART3 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(3, items);
  }
})();
