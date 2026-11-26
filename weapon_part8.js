/* ER_WEAPON_DB_PART | file: weapon_part8.js | part: 8 | items: 20/20 (141-160) */
(function () {
  'use strict';

  var items = [
    {
      "id": "star_lined_sword",
      "name": "Меч Танцующих Звёзд",
      "category": "Катаны",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D0%A2%D0%B0%D0%BD%D1%86%D1%83%D1%8E%D1%89%D0%B8%D1%85_%D0%97%D0%B2%D1%91%D0%B7%D0%B4",
      "graceRu": "Лазурное побережье, запад (Лазурное побережье)",
      "graceEn": "Cerulean Coast West",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над полевым боссом <b>Королева полулюдей Маригга</b> на западном берегу <b>Лазурного побережья</b> (<i>Shadow of the Erdtree</i>; пройдите через пещеру на западе пляжа)."
    },
    {
      "id": "hand_of_malenia",
      "name": "Длань Малении",
      "category": "Катаны",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%BB%D0%B0%D0%BD%D1%8C_%D0%9C%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8",
      "graceRu": "Корни Святого Древа (Эльфаэль, опора Святого Древа)",
      "graceEn": "Haligtree Roots",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Богине гнили</b> после победы над <b>Маленией, Клинком Микеллы</b>."
    },
    {
      "id": "twinblade",
      "name": "Парный клинок",
      "category": "Парные клинки",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Сожжённые драконом руины (Замогилье)",
      "graceEn": "Dragon-Burnt Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в изолированном подвале <b>Сожжённых драконом руин</b> на озере Агил в Замогилье (перепрыгните через низкую каменную стену руин верхом на <b>Потоке</b> и спуститесь по лестнице)."
    },
    {
      "id": "twinned_knight_swords",
      "name": "Парные клинки рыцаря",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D1%80%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BA%D0%B8_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F",
      "graceRu": "Мельница в деревне (Плато Альтус)",
      "graceEn": "Windmill Village",
      "dlc": false,
      "guide": "Гарантированно выпадают за победу над боссом <b>Апостол божественной кожи</b> на самой вершине локации <b>Доминула, деревня ветряной мельницы</b> на севере Плато Альтус."
    },
    {
      "id": "black_steel_twinblade",
      "name": "Парный клинок из чёрной стали",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B8%D0%B7_%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D0%B0%D0%BB%D0%B8",
      "graceRu": "Главные ворота Пристанища (Теневой Альтус)",
      "graceEn": "Shadow Keep Main Gate",
      "dlc": true,
      "guide": "Гарантированно выпадает с <b>Чёрного рыцаря</b>, охраняющего лагерь у дороги на юго-востоке <b>Теневого Альтуса</b> (к востоку от руин Мурта по пути к локации <b>Вид на Древо Упадка</b>)."
    },
    {
      "id": "godskin_peeler",
      "name": "Свежеватель божественной кожи",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B2%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_%D0%B1%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%BA%D0%BE%D0%B6%D0%B8",
      "graceRu": "Мельница в деревне (Плато Альтус)",
      "graceEn": "Windmill Village",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Апостол божественной кожи</b> на вершине <b>Доминулы, деревни ветряной мельницы</b> на севере Плато Альтус (продолжение ветки Миллисенты)."
    },
    {
      "id": "gargoyles_twinblade",
      "name": "Парный клинок горгулий",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B3%D0%BE%D1%80%D0%B3%D1%83%D0%BB%D0%B8%D0%B9",
      "graceRu": "Водопад в акведуке (Акведук Сиофры)",
      "graceEn": "Aqueduct-Facing Cliffs",
      "dlc": false,
      "guide": "Гарантированно выпадает в награду за победу над парным боссом <b>Отважная горгулья</b> в глубине <b>Акведука Сиофры</b> (вместе с Двуручником горгулий)."
    },
    {
      "id": "gargoyles_black_blades",
      "name": "Чёрный парный клинок горгулий",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B3%D0%BE%D1%80%D0%B3%D1%83%D0%BB%D0%B8%D0%B9",
      "graceRu": "Внешний периметр (Запретные земли)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над полевым боссом <b>Чёрный клинок сородича</b> на дороге перед <b>Большим подъёмником Рольда</b> в Запретных землях."
    },
    {
      "id": "eleonoras_poleblade",
      "name": "Нагината Элеоноры",
      "category": "Парные клинки",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%82%D0%B0_%D0%AD%D0%BB%D0%B5%D0%BE%D0%BD%D0%BE%D1%80%D1%8B",
      "graceRu": "Второй храм Марики (Плато Альтус)",
      "graceEn": "Second Church of Marika",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над вторгающимся фантомом <b>Элеонора, Лиловый окровавленный палец</b> во <b>Втором храме Марики</b> на Плато Альтус в рамках квеста <b>Юры</b>."
    },
    {
      "id": "euporia",
      "name": "Эйфория",
      "category": "Парные клинки",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AD%D0%B9%D1%84%D0%BE%D1%80%D0%B8%D1%8F",
      "graceRu": "Витая башня (Энир-Илим)",
      "graceEn": "Spiral Rise",
      "dlc": true,
      "guide": "Лежит на алтаре в скрытой нижней части <b>Энир-Илима</b> (<i>Shadow of the Erdtree</i>). От благодати <b>Витая башня</b> спуститесь по лестнице, перепрыгните с уступа на разрушенные ступени с летающими инквизиторами, затем спрыгивайте по выступам башни и окнам вниз к подъёмнику в <b>Пристанище Теней</b>."
    },
    {
      "id": "hand_axe",
      "name": "Топорик",
      "category": "Топоры",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D1%80%D0%B8%D0%BA",
      "graceRu": "Туманный лес, окраина (Замогилье)",
      "graceEn": "Mistwood Outskirts",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> рядом с благодатью <b>Туманный лес, окраина</b> в восточном Замогилье за <b>600 рун</b>."
    },
    {
      "id": "forked_hatchet",
      "name": "Раздвоенный топорик",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%82%D0%BE%D0%BF%D0%BE%D1%80%D0%B8%D0%BA",
      "graceRu": "Катакомбы под утёсом (Озёрная Лиурния)",
      "graceEn": "Cliffbottom Catacombs",
      "dlc": false,
      "guide": "Фармится с <b>Клыкастых бесов</b>, вооружённых раздвоенным топориком (базовый шанс — <b>2%</b>). Удобнее всего фармить бесов в начале подземелий <b>Катакомбы под утёсом</b> или <b>Катакомбы Колосажателя</b>."
    },
    {
      "id": "forked_tongue_hatchet",
      "name": "Топорик-язык",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D1%80%D0%B8%D0%BA-%D1%8F%D0%B7%D1%8B%D0%BA",
      "graceRu": "Кузница разрушенного лабиринта (Теневой Альтус)",
      "graceEn": "Ruined Forge of Starfall Past",
      "dlc": true,
      "guide": "Фармится с каменных <b>Бесов-ящеров</b>, вооружённых топориком-языком, в кузницах <i>Shadow of the Erdtree</i> (базовый шанс — <b>4%</b>). Быстрее всего фармить в <b>Разрушенной кузнице зверолюдей</b> или <b>Кузнице разрушенного лабиринта</b>."
    },
    {
      "id": "battle_axe",
      "name": "Секира",
      "category": "Топоры",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B5%D0%BA%D0%B8%D1%80%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Стартовое оружие класса <b>Герой</b>. Остальные классы могут купить секиру у <b>Старых служанок-близнецов</b> в <b>Крепости Круглого стола</b> за <b>800 рун</b>."
    },
    {
      "id": "messmer_soldiers_axe",
      "name": "Топор солдата Мессмера",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D1%80_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D0%B0_%D0%9C%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D0%B0",
      "graceRu": "Выжженные руины (Равнина Надгробий)",
      "graceEn": "Scorched Ruins",
      "dlc": true,
      "guide": "Фармится с обычных <b>Солдат Мессмера</b>, вооружённых топором, в <i>Shadow of the Erdtree</i> (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — лагерь солдат сразу у благодати <b>Выжженные руины</b>."
    },
    {
      "id": "warped_axe",
      "name": "Искривлённая секира",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D1%81%D0%BA%D1%80%D0%B8%D0%B2%D0%BB%D1%91%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D0%BA%D0%B8%D1%80%D0%B0",
      "graceRu": "Подземная обочина (Подземелье отчуждения)",
      "graceEn": "Underground Roadside",
      "dlc": false,
      "guide": "Фармится исключительно с крупных <b>Знамений</b>, вооружённых этим топором, с базовым шансом <b>4%</b>. Самая быстрая точка фарма — трое знамений в коридоре прямо у благодати <b>Подземная обочина</b> под Лейнделлом."
    },
    {
      "id": "jawbone_axe",
      "name": "Зазубренная секира",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D0%B7%D1%83%D0%B1%D1%80%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D0%BA%D0%B8%D1%80%D0%B0",
      "graceRu": "Лес предков (Река Сиофра)",
      "graceEn": "Ancestral Woods",
      "dlc": false,
      "guide": "Фармится с <b>Последователей предков</b> (рогатых воинов), вооружённых этим топором, в подземной локации <b>Река Сиофра</b> с базовым шансом <b>4%</b>. Удобнее всего фармить воинов рядом с благодатью <b>Лес предков</b>."
    },
    {
      "id": "iron_cleaver",
      "name": "Железный тесак",
      "category": "Топоры",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9_%D1%82%D0%B5%D1%81%D0%B0%D0%BA",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Фармится с агрессивных <b>Бастардов</b> в туниках, вооружённых тесаком, с базовым шансом <b>2%</b>. Самая быстрая точка фарма — группа бастардов во дворе в начале <b>Замка Морн</b> (от благодати <b>Подъёмник замка Морн</b>)."
    },
    {
      "id": "highland_axe",
      "name": "Секира горца",
      "category": "Топоры",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B5%D0%BA%D0%B8%D1%80%D0%B0_%D0%B3%D0%BE%D1%80%D1%86%D0%B0",
      "graceRu": "Покои у подъёмника (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Лежит на трупе под картиной Годфри в трапезном зале <b>Замка Грозовой Завесы</b> (рядом с приращённым потомком; выйдите из благодати <b>Покои у подъёмника</b> во двор и зайдите в зал напротив)."
    },
    {
      "id": "scriptsmith_axe",
      "name": "Топор с письменами",
      "category": "Топоры",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D1%80_%D1%81_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC%D0%B8",
      "graceRu": "Разрушенная кузница Тейлью (Равнина Надгробий)",
      "graceEn": "Ruined Forge of Starfall Past",
      "dlc": true,
      "guide": "Лежит на трупе в подземелье <b>Разрушенная кузница Тейлью</b> (в северной части <b>Лазурного побережья</b> / юге Равнины Надгробий, <i>Shadow of the Erdtree</i>). Обыщите нижний уровень кузницы перед подъёмом к алтарю."
    }
  ];

  window.WEAPON_PART_8 = items;
  window.WEAPON_PART8 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(8, items);
  }
})();
