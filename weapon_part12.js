/* ER_WEAPON_DB_PART | file: weapon_part12.js | part: 12 | items: 20/20 (221-240) */
(function () {
  'use strict';

  var items = [
    {
      "id": "beastclaw_greathammer",
      "name": "Звериный большой молот",
      "category": "Боевые молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся в награду от <b>Гурранка, Жреца Зверя</b> в <b>Зверином святилище</b> после передачи ему <b>7 корней смерти</b>."
    },
    {
      "id": "devourers_scepter",
      "name": "Скипетр пожирателя",
      "category": "Боевые молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BA%D0%B8%D0%BF%D0%B5%D1%82%D1%80_%D0%BF%D0%BE%D0%B6%D0%B8%D1%80%D0%B0%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Лачуга Воителя (Замогилье)",
      "graceEn": "Warmaster's Shack",
      "dlc": false,
      "guide": "Выпадает с <b>Рыцаря Бернала</b> при его вторжении в <b>Фарум-Азуле</b> (по пути к сундуку с когтем богохульника перед ареной Маликета) либо при убийстве его в Лачуге Воителя / Вулкановом поместье."
    },
    {
      "id": "duelist_greataxe",
      "name": "Секира дуэлянта",
      "category": "Огромное оружие",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B5%D0%BA%D0%B8%D1%80%D0%B0_%D0%B4%D1%83%D1%8D%D0%BB%D1%8F%D0%BD%D1%82%D0%B0",
      "graceRu": "Западный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "West Capital Rampart",
      "dlc": false,
      "guide": "Фармится с <b>Дуэлянтов</b> у Колизея <b>Лейнделла</b> (базовый шанс — <b>4%</b>). Самая быстрая точка — двое дуэлянтов у входа в Колизей к юго-западу от благодати <b>Западный бастион столицы</b> <b>(пропускаемый предмет: забрать до Лейнделла, столицы пепла)</b>."
    },
    {
      "id": "rotten_greataxe",
      "name": "Гнилая секира",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%BB%D0%B0%D1%8F_%D1%81%D0%B5%D0%BA%D0%B8%D1%80%D0%B0",
      "graceRu": "Ордина, литургический город (Священное заснеженное поле)",
      "graceEn": "Ordina, Liturgical Town",
      "dlc": false,
      "guide": "Выпадает с <b>Гнилого дуэлянта</b> на краю обрыва к северо-западу от <b>Ордины, литургического города</b> (по пути к телепорту в Святое Древо Микеллы)."
    },
    {
      "id": "golems_halberd",
      "name": "Алебарда голема",
      "category": "Огромное оружие",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D0%B3%D0%BE%D0%BB%D0%B5%D0%BC%D0%B0",
      "graceRu": "Подъёмник замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Lift",
      "dlc": false,
      "guide": "Фармится со <b>Стражей-големов</b>, вооружённых алебардой (базовый шанс — <b>4%</b>). Быстрее всего фармить одинокого голема с луком/алебардой у входа в <b>Замок Морн</b> или на мосту к Башне возвращения."
    },
    {
      "id": "giant_crusher",
      "name": "Гроза великанов",
      "category": "Огромное оружие",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D0%B7%D0%B0_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке в военном лагере к югу от благодати <b>Окраины столицы</b> (повозку охраняет <b>Изъязвлённый древесный дух</b>)."
    },
    {
      "id": "prelates_inferno_crozier",
      "name": "Адский посох прелата",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D1%81%D0%BE%D1%85_%D0%BF%D1%80%D0%B5%D0%BB%D0%B0%D1%82%D0%B0",
      "graceRu": "Форт Лаедд (Вулкан Гельмир)",
      "graceEn": "Fort Laiedd",
      "dlc": false,
      "guide": "Выпадает с <b>Огненного прелата</b> внутри <b>Форта Лаедд</b> на западном побережье <b>Вулкана Гельмир</b>."
    },
    {
      "id": "great_club",
      "name": "Большая дубина",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Малое Древо Эрд — Плато Альтус (Плато Альтус)",
      "graceEn": "Bower of Bounty",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Воплощение Древа Эрд</b> у <b>Малого Древа Эрд</b> на Плато Альтус (к юго-западу от Лейнделла)."
    },
    {
      "id": "trolls_hammer",
      "name": "Молот тролля",
      "category": "Огромное оружие",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82_%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D1%8F",
      "graceRu": "Мост беззакония (Вулкан Гельмир)",
      "graceEn": "Bridge of Iniquity",
      "dlc": false,
      "guide": "Лежит на трупе в сарае внутри <b>Старого туннеля Альтуса</b> (вход в ущелье к югу от <b>Вулкана Гельмир</b>; требуется <b>1 мечевидный ключ</b>)."
    },
    {
      "id": "dragon_greatclaw",
      "name": "Драконий коготь",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D0%B3%D0%BE%D1%82%D1%8C",
      "graceRu": "Внешняя стена поля боя (Окраины столицы)",
      "graceEn": "Outer Wall Battleground",
      "dlc": false,
      "guide": "Выпадает за победу над <b>Драконьим Стражем Древа</b>, охраняющим северо-восточный вход в <b>Лейнделл, столицу королевства</b>."
    },
    {
      "id": "bloodfiends_arm",
      "name": "Рука кровопускателя",
      "category": "Огромное оружие",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D1%83%D0%BA%D0%B0_%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Грот у речного устья (Равнина Надгробий)",
      "graceEn": "Rivermouth Cave",
      "dlc": true,
      "guide": "Выпадает с <b>Кровопускателей</b> в <b>Городе-убежище</b> (базовый шанс — <b>8%</b>; гарантированно с группы у костра в руинах к югу от <b>Главных ворот замка</b> или в <b>Гроте у речного устья</b>)."
    },
    {
      "id": "watchdog_staff",
      "name": "Посох цербера",
      "category": "Огромное оружие",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%81%D0%BE%D1%85_%D1%86%D0%B5%D1%80%D0%B1%D0%B5%D1%80%D0%B0",
      "graceRu": "Катакомбы под дорогой (Озёрная Лиурния)",
      "graceEn": "Road's End Catacombs",
      "dlc": false,
      "guide": "Лежит за иллюзорной стеной в <b>Катакомбах под дорогой</b> (у подножия скал на юго-западе <b>Озёрной Лиурнии</b>; ударьте по стене в тупике за гробами)."
    },
    {
      "id": "staff_of_the_avatar",
      "name": "Посох воплощения",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%81%D0%BE%D1%85_%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F",
      "graceRu": "Тракт к Озёрной Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Highway North",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Воплощение Древа Эрд</b> у <b>Малого Древа Эрд</b> на востоке Озёрной Лиурнии."
    },
    {
      "id": "rotten_staff",
      "name": "Гнилой посох",
      "category": "Огромное оружие",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%BB%D0%BE%D0%B9_%D0%BF%D0%BE%D1%81%D0%BE%D1%85",
      "graceRu": "Внутренняя стена Эльфаэля (Эльфаэль, опора Святого Древа)",
      "graceEn": "Elphael Inner Wall",
      "dlc": false,
      "guide": "Фармится с <b>Гнилых воплощений Древа Эрд</b> в <b>Эльфаэле</b> (базовый шанс — <b>4%</b>). Самая быстрая точка — воплощение на мосту прямо перед благодатью <b>Внутренняя стена Эльфаэля</b>."
    },
    {
      "id": "envoys_greathorn",
      "name": "Большой рожок посланца",
      "category": "Огромное оружие",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%80%D0%BE%D0%B6%D0%BE%D0%BA_%D0%BF%D0%BE%D1%81%D0%BB%D0%B0%D0%BD%D1%86%D0%B0",
      "graceRu": "Крона Святого Древа (Святое Древо Микеллы)",
      "graceEn": "Haligtree Canopy",
      "dlc": false,
      "guide": "Фармится только с огромных <b>Посланцев Оракула</b> на ветвях <b>Святого Древа Микеллы</b> (базовый шанс — <b>2%</b>). Удобнее всего бегать от благодати <b>Крона Святого Древа</b>."
    },
    {
      "id": "ghizas_wheel",
      "name": "Колесо Гизы",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BE_%D0%93%D0%B8%D0%B7%D1%8B",
      "graceRu": "Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Volcano Manor",
      "dlc": false,
      "guide": "Выпадает при вторжении фантома <b>Инквизитор Гиза</b> на верхнем этаже <b>Вулканова поместья</b> (поднимитесь по лестнице в зале гостиной)."
    },
    {
      "id": "fallingstar_beast_jaw",
      "name": "Челюсть зверя Падающей звезды",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D0%B5%D0%BB%D1%8E%D1%81%D1%82%D1%8C_%D0%B7%D0%B2%D0%B5%D1%80%D1%8F_%D0%9F%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B5%D0%B9_%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B",
      "graceRu": "Девятый лагерь у вулкана Гельмир (Вулкан Гельмир)",
      "graceEn": "Ninth Mt. Gelmir Campsite",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Взрослый зверь Падающей звезды</b> в кратере на вершине <b>Вулкана Гельмир</b>."
    },
    {
      "id": "anvil_hammer",
      "name": "Молот-наковальня",
      "category": "Огромное оружие",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82-%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F",
      "graceRu": "Кузница разрушенного лабиринта (Теневой Альтус)",
      "graceEn": "Ruined Forge Lava Intake",
      "dlc": true,
      "guide": "Получается при взаимодействии с алтарём кузницы в самом конце подземелья <b>Кузница лавовых потоков</b> (в начале <b>Равнины Надгробий</b> к юго-востоку от благодати <b>Передний край замка</b>)."
    },
    {
      "id": "devonias_hammer",
      "name": "Молот Девонии",
      "category": "Огромное оружие",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82_%D0%94%D0%B5%D0%B2%D0%BE%D0%BD%D0%B8%D0%B8",
      "graceRu": "Руины древней обители Рауха, восток (Древние руины Рауха)",
      "graceEn": "Rauh Ancient Ruins, East",
      "dlc": true,
      "guide": "Выпадает с босса <b>Рыцарь Горнила Девония</b> на северной террасе нижнего яруса <b>Древних руин Рауха</b>."
    },
    {
      "id": "axe_of_godfrey",
      "name": "Топор Годфри",
      "category": "Огромное оружие",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D1%80_%D0%93%D0%BE%D0%B4%D1%84%D1%80%D0%B8",
      "graceRu": "Трон Элдена (Лейнделл, столица пепла)",
      "graceEn": "Elden Throne",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Хоара Луксе</b> после победы над <b>Годфри, первым повелителем Элдена</b>."
    }
  ];

  window.WEAPON_PART_12 = items;
  window.WEAPON_PART12 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(12, items);
  }
})();
