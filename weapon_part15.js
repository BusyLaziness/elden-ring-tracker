/* ER_WEAPON_DB_PART | file: weapon_part15.js | part: 15 | items: 20/20 (281-300) */
(function () {
  'use strict';

  var items = [
    {
      "id": "nightrider_glaive",
      "name": "Глефа ночной конницы",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0_%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D1%86%D1%8B",
      "graceRu": "Восточный тракт Беллума (Озёрная Лиурния)",
      "graceEn": "East Raya Lucaria Gate",
      "dlc": false,
      "guide": "Выпадает за победу над ночным боссом <b>Ночной всадник</b> (появляется только <b>ночью</b>) на дороге к северо-востоку от благодати <b>Восточные ворота Райи Лукарии</b>."
    },
    {
      "id": "pests_glaive",
      "name": "Глефа вредителя",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0_%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Храм чумы (Звёздные пустоши)",
      "graceEn": "Church of the Plague",
      "dlc": false,
      "guide": "Фармится с <b>Родственников гнили</b> в Звёздных пустошах, Озере Гнили и Эльфаэле (базовый шанс — <b>2%</b>). Быстрее всего фармить двух вредителей на крыше <b>Храма чумы</b>."
    },
    {
      "id": "ripple_crescent_halberd",
      "name": "Алебарда лунной волны",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D0%BB%D1%83%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%BB%D0%BD%D1%8B",
      "graceRu": "Ворота Академии (Озёрная Лиурния)",
      "graceEn": "Academy Gate Town",
      "dlc": false,
      "guide": "Фармится с <b>Альбиноров</b> первого поколения в затопленном городе к югу от Академии Райи Лукарии (базовый шанс — <b>2%</b>). Быстрее всего бегать от благодати <b>Предместье Академии</b> к группе из трёх альбиноров у руин."
    },
    {
      "id": "golden_halberd",
      "name": "Золотая алебарда",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F_%D0%B0%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0",
      "graceRu": "Первый шаг (Замогилье)",
      "graceEn": "The First Step",
      "dlc": false,
      "guide": "Выпадает за победу над конным полевым боссом <b>Страж Древа</b>, патрулирующим дорогу прямо у благодати <b>Первый шаг</b> в начале игры."
    },
    {
      "id": "dragon_halberd",
      "name": "Алебарда дракона",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0",
      "graceRu": "Река Сиофра (Подземье)",
      "graceEn": "Worshippers' Woods",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Драконий солдат Нокстеллы</b> на арене в <b>Реке Сиофра</b> (доступ через портал на вершине разрушенного акведука в лесу почитателей)."
    },
    {
      "id": "lorettas_war_sickle",
      "name": "Боевой серп Лоретты",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%B5%D0%B2%D0%BE%D0%B9_%D1%81%D0%B5%D1%80%D0%BF_%D0%9B%D0%BE%D1%80%D0%B5%D1%82%D1%82%D1%8B",
      "graceRu": "Святое Древо Микеллы (Эльфаэль)",
      "graceEn": "Haligtree Town Plaza",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Лоретта, рыцарь Святого Древа</b> на арене в конце верхней части <b>Святого Древа Микеллы</b>."
    },
    {
      "id": "commanders_standard",
      "name": "Штандарт командующего",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%83%D1%8E%D1%89%D0%B5%D0%B3%D0%BE",
      "graceRu": "Внутренняя часть Эонии (Звёздные пустоши)",
      "graceEn": "Inner Aeonia",
      "dlc": false,
      "guide": "Выпадает за победу над боссом <b>Командующий О'Нил</b> в центре болота <b>Эония</b> в Звёздных пустошах."
    },
    {
      "id": "spirit_glaive",
      "name": "Глефа духа",
      "category": "Алебарды",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0_%D0%B4%D1%83%D1%85%D0%B0",
      "graceRu": "Побережье Лазурного берега (Лазурное побережье)",
      "graceEn": "Cerulean Coast",
      "dlc": true,
      "guide": "Лежит на трупе у одинокого надгробия в юго-западной части <b>Лазурного побережья</b> (к западу от места благодати <b>Крест на Лазурном берегу</b>)."
    },
    {
      "id": "poleblade_of_the_bud",
      "name": "Глефа Цветочных бутонов",
      "category": "Алебарды",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0_%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D1%85_%D0%B1%D1%83%D1%82%D0%BE%D0%BD%D0%BE%D0%B2",
      "graceRu": "Церковь бутонов, главный вход (Древние руины Рауха)",
      "graceEn": "Church of the Bud, Main Entrance",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о святой Цветочных бутонов</b> после победы над <b>Роминой</b>."
    },
    {
      "id": "scythe",
      "name": "Коса",
      "category": "Косы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D1%81%D0%B0",
      "graceRu": "Катакомбы у Смертоносного утёса (Озёрная Лиурния)",
      "graceEn": "Cliffbottom Catacombs",
      "dlc": false,
      "guide": "Лежит на трупе в секретной комнате за призрачной стеной в <b>Катакомбах у Смертоносного утёса</b> (в зале с двумя бесами под лестницей)."
    },
    {
      "id": "grave_scythe",
      "name": "Могильная коса",
      "category": "Косы",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%81%D0%B0",
      "graceRu": "Утёс с видом на озеро (Озёрная Лиурния)",
      "graceEn": "Lake-Facing Cliffs",
      "dlc": false,
      "guide": "Фармится со <b>Скелетов</b>, вооружённых косой (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — трое скелетов на кладбище прямо у благодати <b>Утёс с видом на озеро</b> сразу за замком Грозовой Завесы."
    },
    {
      "id": "halo_scythe",
      "name": "Сияющая коса",
      "category": "Косы",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B8%D1%8F%D1%8E%D1%89%D0%B0%D1%8F_%D0%BA%D0%BE%D1%81%D0%B0",
      "graceRu": "Внутренняя часть Эонии (Звёздные пустоши)",
      "graceEn": "Inner Aeonia",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей чистой гнили</b>, вооружённых косой (базовый шанс — <b>2%</b>). Удобнее всего фармить двух рыцарей, патрулирующих болото вокруг благодати <b>Внутренняя часть Эонии</b>."
    },
    {
      "id": "winged_scythe",
      "name": "Крылатая коса",
      "category": "Косы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%8B%D0%BB%D0%B0%D1%82%D0%B0%D1%8F_%D0%BA%D0%BE%D1%81%D0%B0",
      "graceRu": "Руины в лесу полулюдей (Плачущий полуостров)",
      "graceEn": "Tombsward Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подвале <b>Руин в лесу полулюдей</b> на Плачущем полуострове (спуск по лестнице в центре руин)."
    },
    {
      "id": "obsidian_lamina",
      "name": "Обсидиановое лезвие",
      "category": "Косы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B1%D1%81%D0%B8%D0%B4%D0%B8%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BB%D0%B5%D0%B7%D0%B2%D0%B8%D0%B5",
      "graceRu": "Прихожая Палаты Очищения (Энир-Илим)",
      "graceEn": "Cleansing Chamber Anteroom",
      "dlc": true,
      "guide": "Выдаётся в финале квеста <b>Сира Ансбаха</b>: помогите ему в битве против Леды и призовите на бой с <b>Обещанным консорт-Раданом</b>, после чего заберите косу с его тела на арене (пропускаемый предмет)."
    },
    {
      "id": "whip",
      "name": "Кнут",
      "category": "Кнуты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BD%D1%83%D1%82",
      "graceRu": "Подъёмник замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Lift",
      "dlc": false,
      "guide": "Лежит на трупе в тёмной комнате на первом этаже <b>Замка Морн</b> (пройдите мимо горящей кучи трупов налево в здание)."
    },
    {
      "id": "thorned_whip",
      "name": "Шипастый кнут",
      "category": "Кнуты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B8%D0%BF%D0%B0%D1%81%D1%82%D1%8B%D0%B9_%D0%BA%D0%BD%D1%83%D1%82",
      "graceRu": "Могила героя-завоевателя (Вершины великанов)",
      "graceEn": "Giant-Conquering Hero's Grave",
      "dlc": false,
      "guide": "Фармится с <b>Огненных прелатов</b> в красных одеяниях, вооружённых кнутом (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — прелат в начале подземелья <b>Могила героя-завоевателя</b>."
    },
    {
      "id": "urumi",
      "name": "Уруми",
      "category": "Кнуты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A3%D1%80%D1%83%D0%BC%D0%B8",
      "graceRu": "Поместье Кария (Озёрная Лиурния)",
      "graceEn": "Manor Lower Level",
      "dlc": false,
      "guide": "Лежит на трупе на юго-восточной внешней стене <b>Поместья Кария</b> (спрыгните с балкона нижнего уровня поместья на каменный уступ)."
    },
    {
      "id": "hoslows_petal_whip",
      "name": "Кнут-лепесток Хослоу",
      "category": "Кнуты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BD%D1%83%D1%82-%D0%BB%D0%B5%D0%BF%D0%B5%D1%81%D1%82%D0%BE%D0%BA_%D0%A5%D0%BE%D1%81%D0%BB%D0%BE%D1%83",
      "graceRu": "Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Volcano Manor",
      "dlc": false,
      "guide": "Выпадает за выполнение последнего контракта <b>Вулканова поместья</b> (вторжение к <b>Юно Хослоу</b> на Вершинах великанов, пропускаемый до убийства Рикарда) либо за убийство <b>Диаллоса</b> в кувшинном городке."
    },
    {
      "id": "tooth_whip",
      "name": "Зубастый кнут",
      "category": "Кнуты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D1%83%D0%B1%D0%B0%D1%81%D1%82%D1%8B%D0%B9_%D0%BA%D0%BD%D1%83%D1%82",
      "graceRu": "Хижина хирурга (Теневой Альтус)",
      "graceEn": "Whipping Hut",
      "dlc": true,
      "guide": "Лежит на трупе внутри <b>Хижины хирурга</b> на северо-востоке от <b>Деревни Бонни</b> в Теневом Альтусе."
    },
    {
      "id": "magma_whip_candlestick",
      "name": "Магмовый подсвечник",
      "category": "Кнуты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B0%D0%B3%D0%BC%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%87%D0%BD%D0%B8%D0%BA",
      "graceRu": "Вулканово поместье (Вулкан Гельмир)",
      "graceEn": "Volcano Manor",
      "dlc": false,
      "guide": "Выдаётся <b>Лоскутиком</b> в <b>Вулкановом поместье</b> за выполнение его особого поручения на вторжение к <b>Великому рогатому Траготу</b> в Руинах Усеянного Утёса (пропускаемый предмет)."
    }
  ];

  window.WEAPON_PART_15 = items;
  window.WEAPON_PART15 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(15, items);
  }
})();
