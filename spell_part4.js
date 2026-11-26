/* ER_SPELL_DB_PART | file: spell_part4.js | part: 4 | items: 20/20 (61-80) */
(function () {
  'use strict';

  var items = [
    {
      "id": "collapsing_stars",
      "name": "Умирающие звёзды",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A3%D0%BC%D0%B8%D1%80%D0%B0%D1%8E%D1%89%D0%B8%D0%B5_%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D1%8B",
      "graceRu": "Боевые катакомбы (Звёздные пустоши)",
      "graceEn": "War-Dead Catacombs",
      "dlc": false,
      "guide": "Лежит в сундуке в затопленном нижнем зале подземелья <b>Боевые катакомбы</b> в северном углу пустоши, где проходила битва с Раданом (поднимитесь по лестнице в боковой нише)."
    },
    {
      "id": "gravitational_missile",
      "name": "Гравитационный снаряд",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BD%D0%B0%D1%80%D1%8F%D0%B4",
      "graceRu": "Вид на Древо Упадка (Теневой Альтус)",
      "graceEn": "Scaduview",
      "dlc": true,
      "guide": "Выпадает с <b>Падающей звезды</b> в кратере на плато <b>Вид на Древо Упадка</b> в северо-восточной части <b>Теневого Альтуса</b> (доступ через секретный проход с жестом «О Матерь» у Задних ворот Пристанища Теней)."
    },
    {
      "id": "rock_sling",
      "name": "Метательный камень",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C",
      "graceRu": "Руины у тракта (Звёздные пустоши)",
      "graceEn": "Street of Sages Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подземном подвале в северной части <b>Руин улицы мудрецов</b> в болоте Эония (спуститесь по лестнице внутри руин; рядом в соседнем подвале лежит Метеоритный посох)."
    },
    {
      "id": "blades_of_stone",
      "name": "Каменные клинки",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BA%D0%B8",
      "graceRu": "Вид на Древо Упадка (Теневой Альтус)",
      "graceEn": "Scaduview",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Командующем вепре</b> после победы над боссом <b>Командующий Гай</b> у <b>Задних ворот Пристанища Теней</b>."
    },
    {
      "id": "meteorite",
      "name": "Метеорит",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%82",
      "graceRu": "Королевское узилище (Озёрная Лиурния)",
      "graceEn": "Royal Grave Evergaol",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Ониксовый повелитель</b> внутри <b>Королевского узилища</b> на скалистом плато к северо-западу от <b>Поместья Карии</b> (требуется <b>1 мечевидный ключ</b>)."
    },
    {
      "id": "meteorite_of_astel",
      "name": "Метеорит Астеля",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%82_%D0%90%D1%81%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Туннель Йелоу Аникс (Священное заснеженное поле)",
      "graceEn": "Yelough Anix Tunnel",
      "dlc": false,
      "guide": "Выпадает за победу над секретным боссом <b>Астель, Звёзды Тьмы</b> в глубине подземелья <b>Туннель Йелоу Аникс</b> на юго-западе <b>Священного заснеженного поля</b>."
    },
    {
      "id": "glintstone_nail",
      "name": "Блестящий гвоздь",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B9_%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D1%8C",
      "graceRu": "Собор Мануса Метир (Теневой Альтус)",
      "graceEn": "Cathedral of Manus Metyr",
      "dlc": true,
      "guide": "Продаётся у <b>Графа Имира, первосвященника</b> в <b>Соборе Мануса Метир</b> на востоке <b>Теневого Альтуса</b> за <b>10 000 рун</b> с самого начала его квестовой линии (<b>пропускаемый торговец</b>: купите до победы над Метир)."
    },
    {
      "id": "glintstone_nails",
      "name": "Блестящие гвозди",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B5_%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D0%B8",
      "graceRu": "Собор Мануса Метир (Теневой Альтус)",
      "graceEn": "Cathedral of Manus Metyr",
      "dlc": true,
      "guide": "Продаётся у <b>Графа Имира, первосвященника</b> в <b>Соборе Мануса Метир</b> на <b>Теневом Альтусе</b> за <b>18 000 рун</b> после того, как вы прозвоните в первый висячий колокол в <b>Руинах пальцев Риа</b> (<b>пропускаемый торговец</b>)."
    },
    {
      "id": "fleeting_microcosm",
      "name": "Неуловимый микрокосм",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D1%83%D0%BB%D0%BE%D0%B2%D0%B8%D0%BC%D1%8B%D0%B9_%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D0%BC",
      "graceRu": "Собор Мануса Метир (Теневой Альтус)",
      "graceEn": "Cathedral of Manus Metyr",
      "dlc": true,
      "guide": "Продаётся у <b>Графа Имира, первосвященника</b> в <b>Соборе Мануса Метир</b> на <b>Теневом Альтусе</b> за <b>25 000 рун</b> после того, как вы прозвоните во второй висячий колокол в <b>Руинах пальцев Део</b> (<b>пропускаемый торговец</b>)."
    },
    {
      "id": "cherishing_fingers",
      "name": "Заботливые пальцы",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D0%B1%D0%BE%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B5_%D0%BF%D0%B0%D0%BB%D1%8C%D1%86%D1%8B",
      "graceRu": "Руины пальцев Део (Внутренние земли)",
      "graceEn": "Finger Ruins of Dheo",
      "dlc": true,
      "guide": "Лежит на трупе у подножия каменного пьедестала в северной части <b>Руин пальцев Део</b> (попасть на плато Внутренних земель можно с помощью жеста «О Матерь» у статуи Марики у Задних ворот Пристанища Теней)."
    },
    {
      "id": "oracle_bubbles",
      "name": "Пузыри оракула",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D1%83%D0%B7%D1%8B%D1%80%D0%B8_%D0%BE%D1%80%D0%B0%D0%BA%D1%83%D0%BB%D0%B0",
      "graceRu": "Берег реки Сиофра (Река Сиофра)",
      "graceEn": "Siofra River Bank",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на каменном уступе над рекой в подземной локации <b>Река Сиофра</b> (поднимитесь по лесам у разрушенного моста неподалёку от благодати <b>Берег реки Сиофра</b>)."
    },
    {
      "id": "great_oracular_bubble",
      "name": "Большой загадочный пузырь",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B7%D0%B0%D0%B3%D0%B0%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C",
      "graceRu": "Берег реки Ансель (Река Ансель)",
      "graceEn": "Ainsel River Downstream",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на высоком уступе над подземным храмом в <b>Реке Ансель</b> (спрыгните с каменного моста возле больших муравьёв по пути к Драконьему солдату Нокстеллы)."
    },
    {
      "id": "briars_of_sin",
      "name": "Шипы греха",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B8%D0%BF%D1%8B_%D0%B3%D1%80%D0%B5%D1%85%D0%B0",
      "graceRu": "Храм клятв (Озёрная Лиурния)",
      "graceEn": "Artist's Shack (Liurnia of the Lakes)",
      "dlc": false,
      "guide": "Выпадает с одинокого <b>Огненного прелата</b> с шипастым посохом в лагере на холме к юго-востоку от <b>Лачуги художника</b> в восточной части Озёрной Лиурнии (свиток привязан к этому конкретному врагу)."
    },
    {
      "id": "briars_of_punishment",
      "name": "Карающие шипы",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D1%8E%D1%89%D0%B8%D0%B5_%D1%88%D0%B8%D0%BF%D1%8B",
      "graceRu": "Могила героя-победителя великанов (Вершины великанов)",
      "graceEn": "Giant-Conquering Hero's Grave",
      "dlc": false,
      "guide": "Лежит на трупе у края узкого заснеженного хребта к юго-западу от <b>Могилы героя-победителя великанов</b> на Вершинах великанов (рядом с лагерем огненных монахов и надгробиями)."
    },
    {
      "id": "mantle_of_thorns",
      "name": "Шипованная мантия",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B8%D0%BF%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D1%8F",
      "graceRu": "Тёмный чертог (Пристанище Теней)",
      "graceEn": "Messmer's Dark Chamber",
      "dlc": true,
      "guide": "Выпадает с вторгающегося красного фантома <b>Кровопускателя</b> в затопленной верхней части <b>Хранилища образцов</b> в <b>Пристанище Теней</b> (по пути от благодати <b>Хранилище, чердак</b> к боссу Мессмеру Колосажателю)."
    },
    {
      "id": "impenetrable_thorns",
      "name": "Непробиваемые шипы",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%BF%D1%80%D0%BE%D0%B1%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5_%D1%88%D0%B8%D0%BF%D1%8B",
      "graceRu": "Затонувшая часовня (Пристанище Теней)",
      "graceEn": "Sunken Chapel",
      "dlc": true,
      "guide": "Лежат на трупе, свисающем с каменного уступа в нижней осушенной части <b>Церковного района</b> в <b>Пристанище Теней</b> (после спуска воды спуститесь вниз от благодати <b>Затонувшая часовня</b> к краю обрыва)."
    },
    {
      "id": "rancorcall",
      "name": "Зов мести",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%B2_%D0%BC%D0%B5%D1%81%D1%82%D0%B8",
      "graceRu": "Водопад в акведуке (Грозовой холм)",
      "graceEn": "Stormfoot Catacombs",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на скрытом уступе под скалой в <b>Грозовом холме</b> (к западу от входа в <b>Катакомбы под Грозовым холмом</b>, мимо группы великанов-крабов)."
    },
    {
      "id": "ancient_death_rancor",
      "name": "Месть древних мертвецов",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%81%D1%82%D1%8C_%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D1%85_%D0%BC%D0%B5%D1%80%D1%82%D0%B2%D0%B5%D1%86%D0%BE%D0%B2",
      "graceRu": "Вход в Академию (Озёрная Лиурния)",
      "graceEn": "Academy Gate Town",
      "dlc": false,
      "guide": "Выпадает за победу над ночным боссом <b>Птица предзнаменования смерти</b> (появляется только <b>ночью</b>) на затопленном острове к юго-востоку от благодати <b>Предместье академии</b> в Озёрной Лиурнии."
    },
    {
      "id": "rings_of_spectral_light",
      "name": "Кольца призрачного света",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0_%D0%BF%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D0%B2%D0%B5%D1%82%D0%B0",
      "graceRu": "Тайная могила Харо (Тайная могила Харо)",
      "graceEn": "Charo's Hidden Grave",
      "dlc": true,
      "guide": "Лежит на трупе у подножия гигантской окаменелой птицы в центре локации <b>Тайная могила Харо</b> (<i>Shadow of the Erdtree</i>; попасть в долину можно спрыгнув по уступам с Лазурного побережья или через юг Зубастой горы)."
    },
    {
      "id": "explosive_ghostflame",
      "name": "Взрывное пламя смерти",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B7%D1%80%D1%8B%D0%B2%D0%BD%D0%BE%D0%B5_%D0%BF%D0%BB%D0%B0%D0%BC%D1%8F_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
      "graceRu": "Внутренний Священный путь (Священное заснеженное поле)",
      "graceEn": "Inner Consecrated Snowfield",
      "dlc": false,
      "guide": "Выпадает за победу над ночным боссом <b>Птица предзнаменования смерти</b> (появляется только <b>ночью</b>) на замёрзшем русле реки к востоку от благодати <b>Внутренний Священный путь</b> (недалеко от Ордины)."
    }
  ];

  window.SPELL_PART_4 = items;
  window.SPELL_PART4 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(4, items);
  }
})();
