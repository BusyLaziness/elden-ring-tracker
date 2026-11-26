/* ER_SHIELD_DB_PART | file: shield_part2.js | part: 2 | items: 20/20 (21-40) */
(function () {
  'use strict';

  var items = [
    {
      "id": "horse_crest_wooden_shield",
      "name": "Каплевидный щит с гербовым конём",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BF%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D1%8B%D0%BC_%D0%BA%D0%BE%D0%BD%D1%91%D0%BC",
      "graceRu": "Лачуга на Грозовом холме (Замогилье)",
      "graceEn": "Stormhill Shack",
      "dlc": false,
      "guide": "Продаётся у <b>Лоскутика</b> на острове <b>Остров живописца</b> в Озёрной Лиурнии за <b>1 000 рун</b> (после переезда из Грязной пещеры; либо по его колокольной сфере)."
    },
    {
      "id": "candletree_wooden_shield",
      "name": "Каплевидный щит древа-свечи",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BF%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D0%B4%D1%80%D0%B5%D0%B2%D0%B0-%D1%81%D0%B2%D0%B5%D1%87%D0%B8",
      "graceRu": "Пещера мудреца (Плато Альтус)",
      "graceEn": "Sage's Cave",
      "dlc": false,
      "guide": "Лежит в сундуке за иллюзорной стеной в секретном проходе подземелья <b>Пещера мудреца</b> на западе <b>Плато Альтус</b> (пройдите за водопад)."
    },
    {
      "id": "flame_crest_wooden_shield",
      "name": "Каплевидный щит с гербовым огнём",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BF%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D1%8B%D0%BC_%D0%BE%D0%B3%D0%BD%D1%91%D0%BC",
      "graceRu": "Восточная стена столицы (Лейнделл, столица королевства)",
      "graceEn": "East Capital Rampart",
      "dlc": false,
      "guide": "Лежит на трупе в заброшенном здании к югу от главных ворот в <b>Лейнделле, столице королевства</b> (<b>пропускаемый предмет</b>: забрать до Лейнделла, столицы пепла)."
    },
    {
      "id": "marred_wooden_shield",
      "name": "Порченый щит из дерева",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%80%D1%87%D0%B5%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D0%B8%D0%B7_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Лежит на трупе на нижнем уровне <b>Замка Грозовой Завесы</b> в комнате с тремя изгнанниками (рядом с винным погребом)."
    },
    {
      "id": "sun_realm_shield",
      "name": "Щит Солнцецарства",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D1%86%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B8%D1%8F",
      "graceRu": "Храм паломничества (Плачущий полуостров)",
      "graceEn": "Church of Pilgrimage",
      "dlc": false,
      "guide": "Фармится со <b>Скелетов</b>, вооружённых этим щитом (базовый шанс — <b>2%</b>). Быстрее всего фармить скелетов на кладбище у <b>Храма паломничества</b> или у <b>Восточного бастиона столицы</b>."
    },
    {
      "id": "round_shield",
      "name": "Круглый щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Прибрежная пещера (Замогилье)",
      "graceEn": "Coastal Cave",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на пляже у входа в <b>Прибрежную пещеру</b> (к западу от Первого шага в Замогилье) за <b>1 000 рун</b>."
    },
    {
      "id": "large_leather_shield",
      "name": "Большой кожаный щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Храм Элле (Замогилье)",
      "graceEn": "Church of Elleh",
      "dlc": false,
      "guide": "Стартовый щит класса <b>Герой</b>. Продаётся у <b>Торговца Кале</b> в <b>Храме Элле</b> в самом начале Замогилья за <b>600 рун</b>."
    },
    {
      "id": "black_leather_shield",
      "name": "Чёрный кожаный щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Лачуга любителя креветок (Озёрная Лиурния)",
      "graceEn": "Boilprawn Shack",
      "dlc": false,
      "guide": "Продаётся у <b>Пидии, карианского слуги</b> на верхнем балконе <b>Поместья Карии</b> (доступ через обрыв за Поместьем Карии после победы над Лореттой) за <b>2 500 рун</b>."
    },
    {
      "id": "marred_leather_shield",
      "name": "Порченый кожаный щит",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%80%D1%87%D0%B5%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Лежит на трупе в запертой комнате в <b>Замке Грозовой Завесы</b> (откройте дверь <b>Ржавым ключом</b>, поднявшись по лестнице в тёмном зале с рыцарем-изгнанником)."
    },
    {
      "id": "heater_shield",
      "name": "Экю",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовый щит класса <b>Бродяга</b>. Продаётся у <b>Старых служанок-близнецов</b> в <b>Крепости Круглого стола</b> за <b>1 500 рун</b> с самого начала игры."
    },
    {
      "id": "blue_crest_heater_shield",
      "name": "Экю с чёрным гербом",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E_%D1%81_%D1%87%D1%91%D1%80%D0%BD%D1%8B%D0%BC_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%BC",
      "graceRu": "Окраины озера Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Lake Shore",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на тракте у благодати <b>Окраины озера Лиурнии</b> (сразу за Замком Грозовой Завесы) за <b>1 500 рун</b>."
    },
    {
      "id": "red_crest_heater_shield",
      "name": "Экю с красным гербом",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E_%D1%81_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%BC_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%BC",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-отшельника</b> в лачуге к северу от <b>Окраин столицы</b> на Плато Альтус за <b>2 500 рун</b>."
    },
    {
      "id": "beast_crest_heater_shield",
      "name": "Экю с гербовым зверем",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D1%8B%D0%BC_%D0%B7%D0%B2%D0%B5%D1%80%D0%B5%D0%BC",
      "graceRu": "Лачуга на Грозовом холме (Замогилье)",
      "graceEn": "Stormhill Shack",
      "dlc": false,
      "guide": "Лежит в сундуке в военном лагере солдат Годрика в северной части <b>Грозового холма</b> (к северо-востоку от благодати <b>Лачуга на Грозовом холме</b>)."
    },
    {
      "id": "inverted_hawk_heater_shield",
      "name": "Экю с перевёрнутым ястребом",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E_%D1%81_%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D1%91%D1%80%D0%BD%D1%83%D1%82%D1%8B%D0%BC_%D1%8F%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%BC",
      "graceRu": "Берег реки Сиофра (Река Сиофра)",
      "graceEn": "Siofra River Bank",
      "dlc": false,
      "guide": "Лежит на трупе у колонны в подземной локации <b>Река Сиофра</b> (к северо-западу от благодати <b>Берег реки Сиофра</b>, под охраной глиняных людей)."
    },
    {
      "id": "eclipse_crest_heater_shield",
      "name": "Экю с гербом затмения",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%BA%D1%8E_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%BC_%D0%B7%D0%B0%D1%82%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Лежит на трупе в низине напротив входа в <b>Пещеру у топей</b> (к северо-западу от благодати <b>Бастион замка Морн</b> на Плачущем полуострове)."
    },
    {
      "id": "kite_shield",
      "name": "Треугольный щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Окраины озера Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Lake Shore",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на тракте у благодати <b>Окраины озера Лиурнии</b> в южной Лиурнии за <b>1 000 рун</b>."
    },
    {
      "id": "blue_gold_kite_shield",
      "name": "Сине-золотой треугольный щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B8%D0%BD%D0%B5-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%82%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Форт Хейт, запад (Замогилье)",
      "graceEn": "Fort Haight West",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> в южном Замогилье (у моста через реку к северо-западу от <b>Форта Хейт</b>) за <b>1 000 рун</b>."
    },
    {
      "id": "scorpion_kite_shield",
      "name": "Треугольный щит скорпиона",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81%D0%BA%D0%BE%D1%80%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0",
      "graceRu": "Мост искупления (Плачущий полуостров)",
      "graceEn": "Bridge of Sacrifice",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> у дороги к югу от <b>Моста Жертвоприношений</b> на Плачущем полуострове за <b>1 500 рун</b>."
    },
    {
      "id": "twinbird_kite_shield",
      "name": "Треугольный щит с парой птиц",
      "category": "Средние щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%BF%D0%B0%D1%80%D0%BE%D0%B9_%D0%BF%D1%82%D0%B8%D1%86",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Hermit Merchant's Shack (Capital Outskirts)",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над ночным боссом <b>Птица смерти</b> на дороге к югу от <b>Лачуги торговца-отшельника</b> на Окраинах столицы (босс появляется исключительно <b>ночью</b>)."
    },
    {
      "id": "brass_shield",
      "name": "Латунный щит",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Предвратные руины (Замогилье)",
      "graceEn": "Gatefront",
      "dlc": false,
      "guide": "Фармится с любых обычных <b>Солдат</b> (Годрика, Райи Лукарии, Радана, Лейнделла и Святого Древа), вооружённых треугольным щитом (базовый шанс — <b>2%</b>). Быстрее всего фармить в <b>Предвратных руинах</b>."
    }
  ];

  window.SHIELD_PART_2 = items;
  window.SHIELD_PART2 = items;
  window.SHIELD_LIST = (window.SHIELD_LIST || []).concat(items);
  if (typeof window.registerShieldPart === 'function') {
    window.registerShieldPart(2, items);
  }
})();
