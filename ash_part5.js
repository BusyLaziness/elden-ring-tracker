/* ER_ASH_DB_PART | file: ash_part5.js | part: 5 | items: 20/20 (81-100) */
(function () {
  'use strict';

  var items = [
  {
    "id": "blood_tax",
    "name": "Кровавая дань",
    "category": "Кровавые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D0%B0%D1%8F_%D0%B4%D0%B0%D0%BD%D1%8C",
    "graceRu": "Дворец Могвинов (Дворец Могвинов)",
    "graceEn": "Palace Approach Ledge-Road",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в тёмной пещере на краю кровавого болота во <b>Дворце Могвинов</b> (напротив входа в пещеру с врагами-альбинорами)."
  },
  {
    "id": "seppuku",
    "name": "Сэппуку",
    "category": "Кровавые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D1%8D%D0%BF%D0%BF%D1%83%D0%BA%D1%83",
    "graceRu": "Замерзающее озеро (Вершины великанов)",
    "graceEn": "Freezing Lake",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> (оставляющего белые светящиеся следы на льду) на замёрзшем озере к востоку от благодати <b>Замерзающее озеро</b> на <b>Вершинах великанов</b>."
  },
  {
    "id": "bloody_slash",
    "name": "Кровавый удар",
    "category": "Кровавые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Форт Хейт (Замогилье)",
    "graceEn": "Fort Haight West",
    "dlc": false,
    "guide": "Гарантированно выпадает за победу над командиром <b>Рыцарем Годрика</b> на вершине крепости <b>Форт Хейт</b> на юго-востоке Замогилья."
  },
  {
    "id": "ice_spear",
    "name": "Ледяное копьё",
    "category": "Морозные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9B%D0%B5%D0%B4%D1%8F%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91",
    "graceRu": "Вход в Академию (Озёрная Лиурния)",
    "graceEn": "Gate Town Bridge",
    "dlc": false,
    "guide": "Выпадает за победу над ночным боссом <b>Ночной всадник</b> (появляется только <b>ночью</b>) на дороге к северу от благодати <b>Мост у предместья</b> в восточной части Озёрной Лиурнии."
  },
  {
    "id": "chilling_mist",
    "name": "Льдистый туман",
    "category": "Морозные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9B%D1%8C%D0%B4%D0%B8%D1%81%D1%82%D1%8B%D0%B9_%D1%82%D1%83%D0%BC%D0%B0%D0%BD",
    "graceRu": "Три сестры (Озёрная Лиурния)",
    "graceEn": "Ranni's Rise",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в руинах за разрушенной стеной в юго-восточной части локации <b>Три сестры</b> (сразу за ареной босса Лоретты в Поместье Карии)."
  },
  {
    "id": "hoarfrost_stomp",
    "name": "Морозный топот",
    "category": "Морозные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9C%D0%BE%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9_%D1%82%D0%BE%D0%BF%D0%BE%D1%82",
    "graceRu": "Поместье Кария (Озёрная Лиурния)",
    "graceEn": "Main Caria Manor Gate",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> в неглубоком пруду к юго-востоку от главных ворот <b>Поместья Карии</b> в северо-западной части Озёрной Лиурнии."
  },
  {
    "id": "ghostflame_call",
    "name": "Зов пламени смерти",
    "category": "Морозные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%BE%D0%B2_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
    "graceRu": "Крест у дороги (Равнина Надгробий)",
    "graceEn": "Three-Path Cross",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на скалистом уступе у подножия <b>Белурата, поселения у башни</b> на <b>Равнине Надгробий</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Крест у дороги</b> идите на северо-запад к скалам)."
  },
  {
    "id": "divine_beast_frost_stomp",
    "name": "Морозящий топот зверя",
    "category": "Морозные",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9C%D0%BE%D1%80%D0%BE%D0%B7%D1%8F%D1%89%D0%B8%D0%B9_%D1%82%D0%BE%D0%BF%D0%BE%D1%82_%D0%B7%D0%B2%D0%B5%D1%80%D1%8F",
    "graceRu": "Сцена в теневом театре (Белурат, поселение у башни)",
    "graceEn": "Theatre of the Divine Beast",
    "dlc": true,
    "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о танцующем льве</b> после победы над сюжетным боссом <b>Священный танцующий лев</b> в <b>Белурате</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "spectral_lance",
    "name": "Призрачная пика",
    "category": "Оккультные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B8%D0%BA%D0%B0",
    "graceRu": "Классная комната школы (Академия Райи Лукарии)",
    "graceEn": "Schoolhouse Classroom",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на кладбище у стены <b>Церкви Кукушки</b> в <b>Академии Райи Лукарии</b> (до благодати Классная комната школы)."
  },
  {
    "id": "lifesteal_fist",
    "name": "Истощающий кулак",
    "category": "Оккультные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%98%D1%81%D1%82%D0%BE%D1%89%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BA%D1%83%D0%BB%D0%B0%D0%BA",
    "graceRu": "Болото Эония (Звёздные пустоши)",
    "graceEn": "Astray from Caelid Highway North",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в ущелье на дороге на юге <b>Звёздных пустошей</b> (рядом с парой гигантских ворон и полулюдей)."
  },
  {
    "id": "white_shadows_lure",
    "name": "Обман белой тени",
    "category": "Оккультные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D0%B1%D0%BC%D0%B0%D0%BD_%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9_%D1%82%D0%B5%D0%BD%D0%B8",
    "graceRu": "Священное заснеженное поле (Священное заснеженное поле)",
    "graceEn": "Consecrated Snowfield",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> (оставляющего белые светящиеся следы) на снежном поле к юго-западу от <b>Ордины, литургического города</b>."
  },
  {
    "id": "assassins_gambit",
    "name": "Трюк убийцы",
    "category": "Оккультные",
    "type": "buy",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A2%D1%80%D1%8E%D0%BA_%D1%83%D0%B1%D0%B8%D0%B9%D1%86%D1%8B",
    "graceRu": "Вулканово поместье (Вулкан Гельмир)",
    "graceEn": "Volcano Manor",
    "dlc": false,
    "guide": "Продаётся у <b>Рыцаря Бернала</b> в гостиной <b>Вулканова поместья</b> за <b>6 500 рун</b> после начала выполнения контрактов на охоту на погасших (<b>пропускаемый продавец</b>: купите до убийства Рикарда)."
  },
  {
    "id": "shriek_of_sorrow",
    "name": "Скорбный вопль",
    "category": "Оккультные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%BA%D0%BE%D1%80%D0%B1%D0%BD%D1%8B%D0%B9_%D0%B2%D0%BE%D0%BF%D0%BB%D1%8C",
    "graceRu": "Тайная могила Харо (Тайная могила Харо)",
    "graceEn": "Charo's Hidden Grave",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на краю кровавого озера с кладбищенскими тенями в западной части локации <b>Тайная могила Харо</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "mighty_shot",
    "name": "Могучий залп",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9C%D0%BE%D0%B3%D1%83%D1%87%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BB%D0%BF",
    "graceRu": "Замок Морн (Плачущий полуостров)",
    "graceEn": "Castle Morne Rampart",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на дороге к северу от <b>Замка Морн</b> на Плачущем полуострове (недалеко от <b>Торговца-кочевника</b> и места благодати <b>Бастион замка Морн</b>)."
  },
  {
    "id": "through_and_through",
    "name": "Сквозная рана",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%BA%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BD%D0%B0",
    "graceRu": "Болото Эония (Звёздные пустоши)",
    "graceEn": "Astray from the Undercity",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на деревянном настиле у северо-западного берега ядовитого <b>болота Эония</b> в Звёздных пустошах (рядом с <b>Торговцем-кочевником</b> у тракта)."
  },
  {
    "id": "barrage",
    "name": "Шквал",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A8%D0%BA%D0%B2%D0%B0%D0%BB",
    "graceRu": "Подъёмник Дектуса (Озёрная Лиурния)",
    "graceEn": "Grand Lift of Dectus",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на уступе перед <b>Большим подъёмником Дектуса</b> на севере Озёрной Лиурнии (справа от главной лестницы, за лагерем солдат)."
  },
  {
    "id": "sky_shot",
    "name": "Небесный залп",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9D%D0%B5%D0%B1%D0%B5%D1%81%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BB%D0%BF",
    "graceRu": "Вход в Академию (Озёрная Лиурния)",
    "graceEn": "Academy Gate Town",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в неглубокой воде к западу от затопленного города <b>Предместье академии</b> в центральной части Озёрной Лиурнии."
  },
  {
    "id": "enchanted_shot",
    "name": "Волшебный залп",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BB%D0%BF",
    "graceRu": "Внешняя стена поля боя (Окраины столицы)",
    "graceEn": "Outer Wall Battleground",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на тракте к югу от благодати <b>Внешняя стена поля боя</b> на <b>Окраинах столицы</b> (недалеко от лагеря солдат Лейнделла и горгульи)."
  },
  {
    "id": "rain_of_arrows",
    "name": "Ливень стрел",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9B%D0%B8%D0%B2%D0%B5%D0%BD%D1%8C_%D1%81%D1%82%D1%80%D0%B5%D0%BB",
    "graceRu": "Звериное святилище (Драконий курган Грейолл)",
    "graceEn": "Bestial Sanctum",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на скрытом нижнем уступе обрыва под <b>Звериным святилищем</b> в Драконьем кургане (спуститесь по корням и каменным балкам за храмом; требуется <b>Картина «Красная Грива»</b> из Селлии)."
  },
  {
    "id": "igons_drake_hunt",
    "name": "Охотник на драконов",
    "category": "Луки",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA_%D0%BD%D0%B0_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%B2",
    "graceRu": "Подножие Зубастой горы (Зубастая гора)",
    "graceEn": "Foot of the Jagged Peak",
    "dlc": true,
    "guide": "Лежит на теле <b>Игона</b> на склоне <b>Зубастой горы</b> (<i>Shadow of the Erdtree</i>) после победы над <b>Бейлом Ужасным</b> на вершине горы (если вы призвали Игона на бой по его квестовой линии)."
  }
];

  window.ASH_PART_5 = items;
  window.ASH_PART5 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(5, items);
  }
})();
