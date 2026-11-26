/* ER_WEAPON_DB_PART | file: weapon_part11.js | part: 11 | items: 20/20 (201-220) */
(function () {
  'use strict';

  var items = [
    {
      "id": "flail",
      "name": "Цеп",
      "category": "Цепы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A6%D0%B5%D0%BF",
      "graceRu": "Предвратные руины (Замогилье)",
      "graceEn": "Gatefront",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке в восточной части лагеря солдат прямо рядом с благодатью <b>Предвратные руины</b> в Замогилье."
    },
    {
      "id": "nightrider_flail",
      "name": "Цеп ночной конницы",
      "category": "Цепы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A6%D0%B5%D0%BF_%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D1%86%D1%8B",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над ночным всадником <b>Ночная конница</b> на дороге у благодати <b>Бастион замка Морн</b> (появляется исключительно <b>ночью</b>)."
    },
    {
      "id": "chainlink_flail",
      "name": "Звеньевой цеп",
      "category": "Цепы",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D1%8C%D0%B5%D0%B2%D0%BE%D0%B9_%D1%86%D0%B5%D0%BF",
      "graceRu": "Покои у подъёмника (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Фармится с белых <b>Тыквоголовых безумцев</b>, вооружённых цепом, с базовым шансом <b>2%</b>. Самая быстрая точка фарма — одинокий тыквоголовый на мосту <b>Святых</b> к востоку от <b>Хижины на Грозовом холме</b> в Замогилье."
    },
    {
      "id": "family_heads",
      "name": "Главы семейства",
      "category": "Цепы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B0%D0%B2%D1%8B_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
      "graceRu": "Пещера мудреца (Плато Альтус)",
      "graceEn": "Sage's Cave",
      "dlc": false,
      "guide": "Лежит в сундуке за иллюзорной стеной в секретной комнате подземелья <b>Пещера мудреца</b> на западе Плато Альтус (пройдите за водопад и бейте по стенам в правом ответвлении)."
    },
    {
      "id": "serpent_flail",
      "name": "Цеп со змеями",
      "category": "Цепы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A6%D0%B5%D0%BF_%D1%81%D0%BE_%D0%B7%D0%BC%D0%B5%D1%8F%D0%BC%D0%B8",
      "graceRu": "Задние ворота (Пристанище Теней)",
      "graceEn": "Shadow Keep, Back Gate",
      "dlc": true,
      "guide": "Лежит в сундуке в тёмной оружейной комнате с набитыми животными в подземелье <b>Пристанище Теней</b> (по пути к затопленному церковному району со стороны <b>Деревни Бонни</b>)."
    },
    {
      "id": "bastards_stars",
      "name": "Звёзды Бастарда",
      "category": "Цепы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D1%8B_%D0%91%D0%B0%D1%81%D1%82%D0%B0%D1%80%D0%B4%D0%B0",
      "graceRu": "Астель, Рождённый Бездной (Озеро Гнили)",
      "graceEn": "Astel, Naturalborn of the Void",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Рождённом Бездной</b> после победы над боссом <b>Астель, Рождённый Бездной</b> в конце квеста Ренни."
    },
    {
      "id": "large_club",
      "name": "Крупная дубина",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Одинокая хижина (Замогилье)",
      "graceEn": "Forlorn Hound Evergaol",
      "dlc": false,
      "guide": "Лежит на трупе на краю обрыва к югу от <b>Узилища ищейки</b> в южном Замогилье (над пляжем с шаром-скарабеем)."
    },
    {
      "id": "curved_great_club",
      "name": "Изогнутая большая дубина",
      "category": "Боевые молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D0%B0%D1%8F_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Деревня альбиноров (Озёрная Лиурния)",
      "graceEn": "Village of the Albinaurics",
      "dlc": false,
      "guide": "Фармится с крупных <b>Белокожих альбиноров</b> второго поколения (с красными глазами и дубиной) с базовым шансом <b>2%</b>. Быстрее всего фармить во Дворце Могвинов у благодати <b>Дорога к подножию дворца</b>."
    },
    {
      "id": "great_mace",
      "name": "Большая булава",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B1%D1%83%D0%BB%D0%B0%D0%B2%D0%B0",
      "graceRu": "Главные ворота (Форт Лаедд)",
      "graceEn": "Fort Laiedd",
      "dlc": false,
      "guide": "Лежит в сундуке в военном лагере у подножия <b>Форта Лаедд</b> на западном склоне <b>Вулкана Гельмир</b> (под охраной солдат и огненной колесницы)."
    },
    {
      "id": "pickaxe",
      "name": "Кирка",
      "category": "Боевые молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B8%D1%80%D0%BA%D0%B0",
      "graceRu": "Туннель Лимгрейва (Замогилье)",
      "graceEn": "Limgrave Tunnels",
      "dlc": false,
      "guide": "Фармится с <b>Рудокопов</b> в шахтах Междуземья с базовым шансом <b>2%</b>. Самая быстрая точка фарма — рудокопы в первом зале подземелья <b>Туннель Замогилья</b> на северном берегу озера Агил."
    },
    {
      "id": "brick_hammer",
      "name": "Каменный молот",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Лежит на трупе в боковом зале за туманной дверью в <b>Замке Грозовой Завесы</b> (требуется <b>1 мечевидный ключ</b>; поднимитесь по лестнице в оружейной комнате с Мизерикордом)."
    },
    {
      "id": "battle_hammer",
      "name": "Чекан",
      "category": "Боевые молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D0%B5%D0%BA%D0%B0%D0%BD",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Фармится с <b>Дуэлянтов</b> в плащах (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — двое дуэлянтов у входа в <b>Колизей Лейнделла</b> (<b>пропускаемый предмет</b>: забрать до Лейнделла, столицы пепла)."
    },
    {
      "id": "rotten_battle_hammer",
      "name": "Гнилой чекан",
      "category": "Боевые молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%BB%D0%BE%D0%B9_%D1%87%D0%B5%D0%BA%D0%B0%D0%BD",
      "graceRu": "Священное заснеженное поле (Священное заснеженное поле)",
      "graceEn": "Consecrated Snowfield",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над <b>Гнилым дуэлянтом</b> на заснеженном гребне к северо-западу от благодати <b>Священное заснеженное поле</b> (по пути к Ордине)."
    },
    {
      "id": "celebrants_skull",
      "name": "Праздничный череп",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%B5%D0%BF",
      "graceRu": "Доминула, деревня ветряной мельницы (Плато Альтус)",
      "graceEn": "Dominula, Windmill Village",
      "dlc": false,
      "guide": "Лежит на трупе у края обрыва на восточной окраине локации <b>Доминула, деревня ветряной мельницы</b> (не доходя до босса Апостол божественной кожи)."
    },
    {
      "id": "great_stars",
      "name": "Большая звезда",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0",
      "graceRu": "Дорога беззакония (Плато Альтус)",
      "graceEn": "Road of Iniquity Side Path",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке, которую тянут тролли по дороге на западе <b>Плато Альтус</b> (второй экземпляр выпадает при вторжении <b>Магнуса, Когтя Зверя</b> в <b>Руинах кровавых приказов</b>)."
    },
    {
      "id": "black_steel_greathammer",
      "name": "Большой молот из чёрной стали",
      "category": "Боевые молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82_%D0%B8%D0%B7_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D0%B0%D0%BB%D0%B8",
      "graceRu": "Равнина Надгробий (Равнина Надгробий)",
      "graceEn": "Gravesite Plain",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над <b>Чёрным рыцарем Эдреддом</b> внутри <b>Храма Утешения</b> на юго-восточном плато от благодати <b>Равнина Надгробий</b>."
    },
    {
      "id": "smithscript_greathammer",
      "name": "Большой молот с письменами",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82_%D1%81_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC%D0%B8",
      "graceRu": "Разрушенная кузница Тайлю (Равнина Надгробий)",
      "graceEn": "Ruined Forge of Taylew",
      "dlc": true,
      "guide": "Лежит на трупе у края лавового канала в глубине подземелья <b>Разрушенная кузница Тайлю</b> на севере Равнины Надгробий (перепрыгните через трубу от рычага)."
    },
    {
      "id": "greathorn_hammer",
      "name": "Большой молот",
      "category": "Боевые молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82",
      "graceRu": "Почитаемые земли (Река Сиофра)",
      "graceEn": "Worshippers' Woods",
      "dlc": false,
      "guide": "Фармится с крупных <b>Последователей предков</b> в <b>Реке Сиофра</b> с базовым шансом <b>2%</b>. Удобнее всего фармить двух рогатых воинов у каменных колонн прямо рядом с благодатью <b>Почитаемые земли</b>."
    },
    {
      "id": "envoys_long_horn",
      "name": "Длинный рожок посланца",
      "category": "Боевые молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%BE%D0%B6%D0%BE%D0%BA_%D0%BF%D0%BE%D1%81%D0%BB%D0%B0%D0%BD%D1%86%D0%B0",
      "graceRu": "Восточный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "East Capital Rampart",
      "dlc": false,
      "guide": "Фармится с крупных <b>Оракулов-посланцев</b> (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — крупный оракул на крепостной стене сразу за выходом от благодати <b>Восточный бастион столицы</b> (также на ветвях Святого Древа Микеллы)."
    },
    {
      "id": "craniel_vessel_candlestand",
      "name": "Подсвечник из черепа",
      "category": "Боевые молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%87%D0%BD%D0%B8%D0%BA_%D0%B8%D0%B7_%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0",
      "graceRu": "Могила героя-завоевателя (Вершины великанов)",
      "graceEn": "Giant-Conquering Hero's Grave",
      "dlc": false,
      "guide": "Лежит на трупе в запертой комнате в глубине подземелья <b>Могила героя-завоевателя</b> на Вершинах великанов (требуется <b>1 мечевидный ключ</b>; спрыгните с лифта в шахту)."
    }
  ];

  window.WEAPON_PART_11 = items;
  window.WEAPON_PART11 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(11, items);
  }
})();
