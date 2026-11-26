/* ER_ASH_DB_PART | file: ash_part1.js | part: 1 | items: 20/20 (1-20) */
(function () {
  'use strict';

  var items = [
  {
    "id": "stamp_upward_cut",
    "name": "Топот (удар снизу)",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%BE%D0%BF%D0%BE%D1%82_(%D1%83%D0%B4%D0%B0%D1%80_%D1%81%D0%BD%D0%B8%D0%B7%D1%83)",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>1 500 рун</b>."
  },
  {
    "id": "stamp_sweep",
    "name": "Топот (размах)",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%BE%D0%BF%D0%BE%D1%82_(%D1%80%D0%B0%D0%B7%D0%BC%D0%B0%D1%85)",
    "graceRu": "Аллея у башни (Плачущий полуостров)",
    "graceEn": "Bridge of Sacrifice",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на тракте к юго-западу от <b>Жертвенного моста</b> на севере Плачущего полуострова (рядом с пасущимися овцами и лесом)."
  },
  {
    "id": "wild_strikes",
    "name": "Дикие удары",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%94%D0%B8%D0%BA%D0%B8%D0%B5_%D1%83%D0%B4%D0%B0%D1%80%D1%8B",
    "graceRu": "Туннель у замка (Грозовой холм)",
    "graceEn": "Castleward Tunnel",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на южной тропе перед входом в <b>Замок Грозовой Завесы</b> (недалеко от благодати <b>Туннель у замка</b>)."
  },
  {
    "id": "lions_claw",
    "name": "Коготь льва",
    "category": "Тяжёлые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%BB%D1%8C%D0%B2%D0%B0",
    "graceRu": "Форт Гаэль (Звёздные пустоши)",
    "graceEn": "Fort Gael North",
    "dlc": false,
    "guide": "Гарантированно выпадает за победу над невозрождаемым <b>Львом-стражем</b> во внутреннем дворе <b>Форта Гаэль</b> на западной границе Звёздных пустошей."
  },
  {
    "id": "cragblade",
    "name": "Каменный меч",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87",
    "graceRu": "Непроходимый великий мост (Звёздные пустоши)",
    "graceEn": "Impassable Greatbridge",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на скалистом уступе к северо-западу от благодати <b>Непроходимый великий мост</b> перед Замком Рыжей Гривы."
  },
  {
    "id": "kick",
    "name": "Пинок",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%B8%D0%BD%D0%BE%D0%BA",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>800 рун</b>."
  },
  {
    "id": "endure",
    "name": "Выдержка",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>600 рун</b>."
  },
  {
    "id": "ground_slam",
    "name": "Удар по земле",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D0%BF%D0%BE_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5",
    "graceRu": "Кладбище у башни (Замогилье)",
    "graceEn": "Mistwood Outskirts",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на поляне с малыми Древами Эрд к востоку от <b>Туманного леса</b> (на юге восточного Замогилья)."
  },
  {
    "id": "earthshaker",
    "name": "Землетряс",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%B5%D0%BC%D0%BB%D0%B5%D1%82%D1%80%D1%8F%D1%81",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Altus Highway Junction",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в лагере великанов-рабочих на тракте к северу от благодати <b>Перекрёсток тракта Альтуса</b> (рядом с повозкой и стоянкой Брата Корина)."
  },
  {
    "id": "hoarah_loux_s_earthshaker",
    "name": "Землетряс Хоары Лукса",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%B5%D0%BC%D0%BB%D0%B5%D1%82%D1%80%D1%8F%D1%81_%D0%A5%D0%BE%D0%B0%D1%80%D1%8B_%D0%9B%D1%83%D0%BA%D1%81%D0%B0",
    "graceRu": "Элденский трон (Лейнделл, столица пепла)",
    "graceEn": "Elden Throne",
    "dlc": false,
    "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Хоаре Луксе</b> после победы над сюжетным боссом <b>Годфри, первый повелитель Элдена</b>."
  },
  {
    "id": "warcry",
    "name": "Боевой клич",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%91%D0%BE%D0%B5%D0%B2%D0%BE%D0%B9_%D0%BA%D0%BB%D0%B8%D1%87",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>800 рун</b>."
  },
  {
    "id": "barbaric_roar",
    "name": "Первобытный рёв",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%B1%D1%8B%D1%82%D0%BD%D1%8B%D0%B9_%D1%80%D1%91%D0%B2",
    "graceRu": "Ущелье (Озёрная Лиурния)",
    "graceEn": "Ravine",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в глубоком каньоне к северу от <b>Озёрной Лиурнии</b> (по реке от благодати <b>Ущелье</b> по пути к Усеянному руинами ущелью)."
  },
  {
    "id": "braggarts_roar",
    "name": "Рёв хвастуна",
    "category": "Тяжёлые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D1%91%D0%B2_%D1%85%D0%B2%D0%B0%D1%81%D1%82%D1%83%D0%BD%D0%B0",
    "graceRu": "Хижина креветок (Озёрная Лиурния)",
    "graceEn": "Boilprawn Shack",
    "dlc": false,
    "guide": "Извлекается из меча <b>Железный шар</b>, который падает с <b>Чёрного Стража Большого Богарда</b> в <b>Хижине креветок</b> или у внешнего рва <b>Лейнделла</b> (при убийстве или после проклятия Поедателя Отбросов)."
  },
  {
    "id": "trolls_roar",
    "name": "Рык тролля",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A0%D1%8B%D0%BA_%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D1%8F",
    "graceRu": "Храм Марики (Вершины великанов)",
    "graceEn": "Church of Repose",
    "dlc": false,
    "guide": "Лежит на трупе у края пропасти на северо-западе <b>Вершин великанов</b> (к западу от <b>Храма Покоя</b>, под охраной гигантского черепа и троллей)."
  },
  {
    "id": "savage_lions_claw",
    "name": "Коготь свирепого льва",
    "category": "Тяжёлые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D1%81%D0%B2%D0%B8%D1%80%D0%B5%D0%BF%D0%BE%D0%B3%D0%BE_%D0%BB%D1%8C%D0%B2%D0%B0",
    "graceRu": "Трёхпутный крест (Равнина Надгробий)",
    "graceEn": "Three-Path Cross",
    "dlc": true,
    "guide": "Лежит на трупе в небольшом лагере у скалы к северу от благодати <b>Трёхпутный крест</b> на <b>Равнине Надгробий</b> (<i>Shadow of the Erdtree</i>; сразу за мостом Эллака)."
  },
  {
    "id": "gravity_thrust",
    "name": "Толчок гравитации",
    "category": "Тяжёлые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D0%BE%D0%BB%D1%87%D0%BE%D0%BA_%D0%B3%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8",
    "graceRu": "Вид на Древо Упадка (Теневой Альтус)",
    "graceEn": "Scaduview",
    "dlc": true,
    "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Командующем вепре</b> после победы над боссом <b>Командующий Гай</b> у <b>Задних ворот Пристанища Теней</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "spinning_slash",
    "name": "Удар с разворота",
    "category": "Острые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D1%81_%D1%80%D0%B0%D0%B7%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>1 200 рун</b>."
  },
  {
    "id": "impaling_thrust",
    "name": "Пронзающий выпад",
    "category": "Острые",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%BE%D0%BD%D0%B7%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4",
    "graceRu": "Лачуга воителя (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в <b>Лачуге воителя</b> на Грозовом холме (позже в <b>Вулкановом поместье</b>) за <b>1 000 рун</b>."
  },
  {
    "id": "piercing_fang",
    "name": "Пронзающий клык",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%BE%D0%BD%D0%B7%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BA%D0%BB%D1%8B%D0%BA",
    "graceRu": "Вторая церковь Марики (Плато Альтус)",
    "graceEn": "Second Church of Marika",
    "dlc": false,
    "guide": "Извлекается из катаны <b>Нагакиба</b>, которая выпадает с <b>Юры, охотника на окровавленных пальцев</b> во <b>Второй церкви Марики</b> на Плато Альтус в финале его квестовой линии (или при его убийстве)."
  },
  {
    "id": "repeating_thrust",
    "name": "Многократный выпад",
    "category": "Острые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4",
    "graceRu": "Берег у Агхила (Замогилье)",
    "graceEn": "Agheel Lake North",
    "dlc": false,
    "guide": "Выпадает с полевого босса <b>Ночной всадник</b> (появляется только <b>ночью</b>) на мосту к востоку от <b>Озера Агхил</b> в Замогилье."
  }
];

  window.ASH_PART_1 = items;
  window.ASH_PART1 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(1, items);
  }
})();
