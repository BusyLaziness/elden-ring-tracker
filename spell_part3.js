/* ER_SPELL_DB_PART | file: spell_part3.js | part: 3 | items: 20/20 (41-60) */
(function () {
  'use strict';

  var items = [
    {
      "id": "miriams_vanishing",
      "name": "Завеса Мириам",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D0%B2%D0%B5%D1%81%D0%B0_%D0%9C%D0%B8%D1%80%D0%B8%D0%B0%D0%BC",
      "graceRu": "Собор Манус Метир (Теневой Альтус)",
      "graceEn": "Cathedral of Manus Metyr",
      "dlc": true,
      "guide": "Продаётся у <b>Графа Имира, первосвященника</b> в <b>Соборе Манус Метир</b> (<i>Shadow of the Erdtree</i>) за <b>9 000 рун</b> (после завершения его квеста доступна у Старых служанок-близнецов по его колокольной сфере)."
    },
    {
      "id": "ambush_shard",
      "name": "Осколок засады",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D0%B7%D0%B0%D1%81%D0%B0%D0%B4%D1%8B",
      "graceRu": "Руины в ведьмином лесу (Плачущий полуостров)",
      "graceEn": "Witchbane Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подвале <b>Руин в ведьмином лесу</b> на западе Плачущего полуострова (вход запечатан иллюзорным полом, ударьте по земле среди руин)."
    },
    {
      "id": "night_shard",
      "name": "Осколок ночи",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA_%D0%BD%D0%BE%D1%87%D0%B8",
      "graceRu": "Город магии Селлия (Звёздные пустоши)",
      "graceEn": "Sellia, Town of Sorcery",
      "dlc": false,
      "guide": "Продаётся у <b>Мудреца Гоури</b> в его лачуге к югу от <b>Селлии, города магии</b> в Звёздных пустошах за <b>4 000 рун</b>."
    },
    {
      "id": "night_comet",
      "name": "Комета ночи",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D1%82%D0%B0_%D0%BD%D0%BE%D1%87%D0%B8",
      "graceRu": "Город магии Селлия (Звёздные пустоши)",
      "graceEn": "Sellia, Town of Sorcery",
      "dlc": false,
      "guide": "Лежит в сундуке внутри запечатанной башни в городе <b>Селлия, город магии</b> (зажгите три жаровни на крышах города, чтобы снять синий магический барьер)."
    },
    {
      "id": "night_maidens_mist",
      "name": "Туман ночной служанки",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%83%D0%BC%D0%B0%D0%BD_%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D1%81%D0%BB%D1%83%D0%B6%D0%B0%D0%BD%D0%BA%D0%B8",
      "graceRu": "Город магии Селлия (Звёздные пустоши)",
      "graceEn": "Sellia, Town of Sorcery",
      "dlc": false,
      "guide": "Появляется в продаже у <b>Мудреца Гоури</b> в его лачуге у Селлии за <b>6 000 рун</b> после того, как вы отдадите ему <b>Иглу из чистого золота</b>, выбитую из командира О'Нила в болоте Эония."
    },
    {
      "id": "unseen_blade",
      "name": "Невидимый клинок",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Юго-восточный тракт Беллума (Озёрная Лиурния)",
      "graceEn": "Eastern Tableland",
      "dlc": false,
      "guide": "Выпадает с <b>невидимого навозного скарабея</b> (оставляющего белые светящиеся следы на земле) к юго-востоку от <b>Обращённой башни</b> в северо-восточной части Озёрной Лиурнии."
    },
    {
      "id": "unseen_form",
      "name": "Невидимая форма",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%B0%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D0%B0",
      "graceRu": "Башня возвращения (Плачущий полуостров)",
      "graceEn": "Isolated Merchant's Shack",
      "dlc": false,
      "guide": "Лежит в сундуке на вершине <b>Башни отступников</b> (Миражной башни) на северо-востоке <b>Плато Альтус</b> (вместе с Зачарованным ливнем; разбейте 3 призрачных герба вокруг башни)."
    },
    {
      "id": "eternal_darkness",
      "name": "Вечная тьма",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%B5%D1%87%D0%BD%D0%B0%D1%8F_%D1%82%D1%8C%D0%BC%D0%B0",
      "graceRu": "Болотный берег (Звёздные пустоши)",
      "graceEn": "Swamp Shore",
      "dlc": false,
      "guide": "Лежит на трупе в самой верхней точке заброшенной башни <b>Болотная смотровая башня</b> на западном берегу болота Эония в Звёздных пустошах (поднимитесь по приставным лестницам внутри башни)."
    },
    {
      "id": "magma_shot",
      "name": "Выстрел магмы",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D1%8B%D1%81%D1%82%D1%80%D0%B5%D0%BB_%D0%BC%D0%B0%D0%B3%D0%BC%D1%8B",
      "graceRu": "Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Volcano Manor",
      "dlc": false,
      "guide": "Выдаётся <b>Танит</b> в <b>Вулкановом поместье</b> в награду за выполнение первого контракта на охоту на погасших (убийство <b>Старого рыцаря Иствана</b> в Замогилье; <b>пропускаемый предмет</b>: забрать до победы над Рикардом)."
    },
    {
      "id": "roiling_magma",
      "name": "Бурлящая магма",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D1%83%D1%80%D0%BB%D1%8F%D1%89%D0%B0%D1%8F_%D0%BC%D0%B0%D0%B3%D0%BC%D0%B0",
      "graceRu": "Девятый лагерь у вулкана Гельмир (Вулкан Гельмир)",
      "graceEn": "Ninth Mt. Gelmir Campsite",
      "dlc": false,
      "guide": "Лежит на трупе внутри заброшенной <b>Лачуги трупного смрада</b> на западном склоне <b>Вулкана Гельмир</b> (напротив места вторжения Анастасии, пожирательницы погасших)."
    },
    {
      "id": "gelmirs_fury",
      "name": "Гнев Гельмира",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B5%D0%B2_%D0%93%D0%B5%D0%BB%D1%8C%D0%BC%D0%B8%D1%80%D0%B0",
      "graceRu": "Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Volcano Manor",
      "dlc": false,
      "guide": "Выдаётся <b>Рыцарем Берналом</b> в гостиной <b>Вулканова поместья</b> в награду за выполнение его совместного задания на вторжение в <b>Лейнделле, столице королевства</b> (победа над Варграмом и чародеем Вильгельмом; <b>пропускаемый предмет</b>: забрать до убийства Рикарда)."
    },
    {
      "id": "rykards_rancor",
      "name": "Злоба Рикарда",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BB%D0%BE%D0%B1%D0%B0_%D0%A0%D0%B8%D0%BA%D0%B0%D1%80%D0%B4%D0%B0",
      "graceRu": "Рикард, богохульный владыка (Вулканово поместье)",
      "graceEn": "Rykard, Lord of Blasphemy",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Богохульном</b> после победы над сюжетным боссом <b>Рикард, богохульный владыка</b> в <b>Вулкановом поместье</b>."
    },
    {
      "id": "glintstone_icecrag",
      "name": "Глыба ледяных блестящих камней",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D1%8B%D0%B1%D0%B0_%D0%BB%D0%B5%D0%B4%D1%8F%D0%BD%D1%8B%D1%85_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D1%85_%D0%BA%D0%B0%D0%BC%D0%BD%D0%B5%D0%B9",
      "graceRu": "Три сестры (Озёрная Лиурния)",
      "graceEn": "Ranni's Rise",
      "dlc": false,
      "guide": "Продаётся у <b>Чародея Селувиса</b> в его башне в локации <b>Три сестры</b> на северо-западе Озёрной Лиурнии за <b>7 500 рун</b> (доступ открывается после начала службы у Ренни Колдуньи; <b>пропускаемый продавец</b> — после смерти Селувиса купите по его колокольной сфере)."
    },
    {
      "id": "freezing_mist",
      "name": "Ледяной туман",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D0%B4%D1%8F%D0%BD%D0%BE%D0%B9_%D1%82%D1%83%D0%BC%D0%B0%D0%BD",
      "graceRu": "Три сестры (Озёрная Лиурния)",
      "graceEn": "Ranni's Rise",
      "dlc": false,
      "guide": "Продаётся у <b>Чародея Селувиса</b> в <b>Башне Селувиса</b> (локация <b>Три сестры</b>, северо-запад Озёрной Лиурнии) за <b>6 000 рун</b> после начала квестовой линии Ренни."
    },
    {
      "id": "frozen_armament",
      "name": "Ледяное оружие",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B5%D0%B4%D1%8F%D0%BD%D0%BE%D0%B5_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5",
      "graceRu": "Поместье Кария (Озёрная Лиурния)",
      "graceEn": "Royal Moongazing Grounds",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> за разрушенной стеной в восточной части локации <b>Три сестры</b> (сразу за выходом с арены босса Лоретты в <b>Поместье Карии</b>)."
    },
    {
      "id": "zamor_ice_storm",
      "name": "Снежная буря Замора",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BD%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F_%D0%B1%D1%83%D1%80%D1%8F_%D0%97%D0%B0%D0%BC%D0%BE%D1%80%D0%B0",
      "graceRu": "Руины Замора (Вершины великанов)",
      "graceEn": "Zamor Ruins",
      "dlc": false,
      "guide": "Лежит на трупе у каменной арки в центральной части заснеженных <b>Руин Замора</b> на юго-западе <b>Вершин великанов</b> (сразу после подъёма на Большом подъёмнике Рольда)."
    },
    {
      "id": "shattering_crystal",
      "name": "Раскалывающий кристалл",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B0%D1%81%D0%BA%D0%B0%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D0%BB",
      "graceRu": "Классная комната школы (Академия Райи Лукарии)",
      "graceEn": "Schoolhouse Classroom",
      "dlc": false,
      "guide": "Лежит на трупе на верхнем уступе с деревянными балками в <b>Академии Райи Лукарии</b> (доступ через секретный прыжок с крыш от зала с красным волком Радагона)."
    },
    {
      "id": "crystal_torrent",
      "name": "Кристальный ураган",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%83%D1%80%D0%B0%D0%B3%D0%B0%D0%BD",
      "graceRu": "Тайник в Селлии (Звёздные пустоши)",
      "graceEn": "Sellia Hideaway",
      "dlc": false,
      "guide": "Выпадает за победу над парным боссом <b>Гнилой кристалиец</b> в конце секретного подземелья <b>Тайник в Селлии</b> (вход скрыт за иллюзорной стеной на кладбище за Чумной церковью в Звёздных пустошах)."
    },
    {
      "id": "crystal_rain",
      "name": "Кристальный град",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B3%D1%80%D0%B0%D0%B4",
      "graceRu": "Кристальная пещера Академии (Озёрная Лиурния)",
      "graceEn": "Academy Crystal Cave",
      "dlc": false,
      "guide": "Выпадает за победу над парным боссом <b>Кристалиец</b> в глубине подземелья <b>Кристальная пещера Академии</b> у западного подножия <b>Академии Райи Лукарии</b> (требуются <b>2 мечевидных ключа</b>)."
    },
    {
      "id": "gravity_well",
      "name": "Колодец гравитации",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86_%D0%B3%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8",
      "graceRu": "Вход в Академию (Озёрная Лиурния)",
      "graceEn": "Academy Gate Town",
      "dlc": false,
      "guide": "Выпадает с одинокого <b>Алебастрового повелителя</b> у каменного портала на окраине руин к западу от <b>Академии Райи Лукарии</b> (между Замком Грозовой Завесы и Руинами Ласкьяра)."
    }
  ];

  window.SPELL_PART_3 = items;
  window.SPELL_PART3 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(3, items);
  }
})();
