/* ER_WEAPON_DB_PART | file: weapon_part14.js | part: 14 | items: 20/20 (261-280) */
(function () {
  'use strict';

  var items = [
    {
      "id": "bolt_of_gransax",
      "name": "Болт Грансакса",
      "category": "Копья",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%82_%D0%93%D1%80%D0%B0%D0%BD%D1%81%D0%B0%D0%BA%D1%81%D0%B0",
      "graceRu": "Святилище Древа Эрд (Лейнделл, столица королевства)",
      "graceEn": "Erdtree Sanctuary",
      "dlc": false,
      "guide": "Лежит на гигантском золотом копье дракона в <b>Лейнделле</b> (спрыгните с балкона после благодати <b>Святилище Древа Эрд</b> на лифт, затем на гигантское копьё). <b>(Пропускаемый предмет: забрать до Лейнделла, столицы пепла)</b>."
    },
    {
      "id": "lance",
      "name": "Пика",
      "category": "Большие копья",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B8%D0%BA%D0%B0",
      "graceRu": "Лачуга воителя (Замогилье)",
      "graceEn": "Warmaster's Shack",
      "dlc": false,
      "guide": "Лежит в сундуке на развалинах каменного строения к юго-востоку от <b>Лачуги воителя</b> в <b>Замогилье</b> (охраняется лагерем наёмников Кайдена)."
    },
    {
      "id": "messmer_soldier_spear",
      "name": "Копьё солдата Мессмера",
      "category": "Большие копья",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BF%D1%8C%D1%91_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D0%B0_%D0%9C%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D0%B0",
      "graceRu": "Передний край замка (Равнина Надгробий)",
      "graceEn": "Castle Front",
      "dlc": true,
      "guide": "Фармится с <b>Солдат Мессмера</b>, вооружённых большим копьём (базовый шанс — <b>4%</b>). Удобнее всего фармить солдат в лагере прямо перед <b>Замком Энсис</b>."
    },
    {
      "id": "treespear",
      "name": "Древесное копьё",
      "category": "Большие копья",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91",
      "graceRu": "Предместье академии (Озёрная Лиурния)",
      "graceEn": "Liurnia Highway South",
      "dlc": false,
      "guide": "Лежит в сундуке в заброшенной повозке на разрушенном мосту к югу от <b>Предместья академии</b> (рядом с повозкой стоит баллиста)."
    },
    {
      "id": "serpent_hunter",
      "name": "Охотник на змей",
      "category": "Большие копья",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA_%D0%BD%D0%B0_%D0%B7%D0%BC%D0%B5%D0%B9",
      "graceRu": "Аудиенция (Вулканово поместье)",
      "graceEn": "Audience Pathway",
      "dlc": false,
      "guide": "Лежит на трупе слева сразу при входе на арену босса <b>Рикард, богохульный владыка</b> в <b>Вулкановом поместье</b>."
    },
    {
      "id": "silurias_tree",
      "name": "Дерево Силурии",
      "category": "Большие копья",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE_%D0%A1%D0%B8%D0%BB%D1%83%D1%80%D0%B8%D0%B8",
      "graceRu": "Безымянный вечный город (Низовье Глубокого Корня)",
      "graceEn": "Nameless Eternal City",
      "dlc": false,
      "guide": "Выпадает за победу над мини-боссом <b>Рыцарь Горнила Силурия</b> у корней в <b>Низовье Глубокого Корня</b> (попасть можно после победы над Отважными горгульями)."
    },
    {
      "id": "vykes_war_spear",
      "name": "Боевое копьё Вика",
      "category": "Большие копья",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%B5%D0%B2%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D0%92%D0%B8%D0%BA%D0%B0",
      "graceRu": "Храм сдерживания (Озёрная Лиурния)",
      "graceEn": "Church of Inhibition",
      "dlc": false,
      "guide": "Выпадает при победе над красным фантомом <b>Гниющий отпечаток Вик</b> на подходе к <b>Храму сдерживания</b> на северо-востоке Озёрной Лиурнии."
    },
    {
      "id": "barbed_staff_spear",
      "name": "Зазубренный посох",
      "category": "Большие копья",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D0%B7%D1%83%D0%B1%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D0%BE%D1%85",
      "graceRu": "Зал очищения (Пристанище Теней)",
      "graceEn": "Chamber of Purification",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Жреце</b> после победы над <b>Джори, старшим инквизитором</b> в <b>Тёмных катакомбах</b>."
    },
    {
      "id": "bloodfiends_sacred_spear",
      "name": "Священное копьё кровопускателя",
      "category": "Большие копья",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Передний край замка (Равнина Надгробий)",
      "graceEn": "Castle Front",
      "dlc": true,
      "guide": "Выпадает со жреца кровопускателей на вершине руин <b>Города-убежища</b> (южная часть <b>Равнины Надгробий</b>; поднимитесь по обломкам в святилище)."
    },
    {
      "id": "mohgwyns_sacred_spear",
      "name": "Священное копьё Могвина",
      "category": "Большие копья",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91_%D0%9C%D0%BE%D0%B3%D0%B2%D0%B8%D0%BD%D0%B0",
      "graceRu": "Кокон Эмпирея (Дворец Могвинов)",
      "graceEn": "Cocoon of the Empyrean",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Повелителе Крови</b> после победы над <b>Могом, Повелителем Крови</b>."
    },
    {
      "id": "spear_of_the_impaler",
      "name": "Копьё Колосажателя",
      "category": "Большие копья",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BF%D1%8C%D1%91_%D0%9A%D0%BE%D0%BB%D0%BE%D1%81%D0%B0%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Тёмный чертог (Пристанище Теней)",
      "graceEn": "Messmer's Dark Chamber",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Колосажателе</b> после победы над <b>Мессмером Колосажателем</b>."
    },
    {
      "id": "halberd",
      "name": "Алебарда",
      "category": "Алебарды",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0",
      "graceRu": "Лачуга воителя (Замогилье)",
      "graceEn": "Warmaster's Shack",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на побережье к западу от <b>Церкви Элле</b> в Замогилье за <b>600 рун</b> (либо падает с <b>Изгнанников</b> с шансом <b>2%</b>)."
    },
    {
      "id": "banished_knights_halberd",
      "name": "Алебарда рыцаря-изгнанника",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F-%D0%B8%D0%B7%D0%B3%D0%BD%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0",
      "graceRu": "Лачуга мстителя (Озёрная Лиурния)",
      "graceEn": "Revenger's Shack",
      "dlc": false,
      "guide": "Гарантированно выпадает уже улучшенной до +8 с <b>Эдгара Мстителя</b> при его вторжении в <b>Лачугу мстителя</b> в Лиурнии (либо при его убийстве в Замке Морн). Также фармится с <b>Рыцарей-изгнанников</b> с шансом <b>4%</b>."
    },
    {
      "id": "lucerne",
      "name": "Люцернский молот",
      "category": "Алебарды",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D1%8E%D1%86%D0%B5%D1%80%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82",
      "graceRu": "Тракт Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Highway North",
      "dlc": false,
      "guide": "Лежит на трупе у баррикады рыцарей на дороге к северу от благодати <b>Тракт Лиурнии (север)</b> перед воротами академии."
    },
    {
      "id": "glaive",
      "name": "Глефа",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BB%D0%B5%D1%84%D0%B0",
      "graceRu": "Лачуга художника (Озёрная Лиурния)",
      "graceEn": "Artist's Shack (Liurnia of the Lakes)",
      "dlc": false,
      "guide": "Фармится с больших <b>Скелетов</b>, вооружённых глефой (базовый шанс — <b>2%</b>). Быстрее всего фармить скелета на кладбище к югу от благодати <b>Лачуга художника</b> в Лиурнии."
    },
    {
      "id": "vulgar_militia_shotel",
      "name": "Шотель плебея-ополченца",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%BE%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BB%D0%B5%D0%B1%D0%B5%D1%8F-%D0%BE%D0%BF%D0%BE%D0%BB%D1%87%D0%B5%D0%BD%D1%86%D0%B0",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Фармится с <b>Плебеев-ополченцев</b>, вооружённых шотелем (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — на спуске перед <b>Звериным святилищем</b>."
    },
    {
      "id": "vulgar_militia_saw",
      "name": "Пила плебея-ополченца",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B8%D0%BB%D0%B0_%D0%BF%D0%BB%D0%B5%D0%B1%D0%B5%D1%8F-%D0%BE%D0%BF%D0%BE%D0%BB%D1%87%D0%B5%D0%BD%D1%86%D0%B0",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Фармится с <b>Плебеев-ополченцев</b>, вооружённых зазубренной пилой (базовый шанс — <b>2%</b>). Удобнее всего фармить на дороге от благодати <b>Звериное святилище</b> к мосту Фарам."
    },
    {
      "id": "guardians_swordspear",
      "name": "Копьё-меч стража",
      "category": "Алебарды",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BF%D1%8C%D1%91-%D0%BC%D0%B5%D1%87_%D1%81%D1%82%D1%80%D0%B0%D0%B6%D0%B0",
      "graceRu": "Утёс с видом на древо (Плачущий полуостров)",
      "graceEn": "Tree-Worship Passage",
      "dlc": false,
      "guide": "Фармится со <b>Стражей Древа Эрд</b> вокруг Малых Древ Эрд (базовый шанс — <b>2%</b>). Быстрее всего фармить пятерых стражей на подъёме к Малому Древу Эрд на Плачущем полуострове."
    },
    {
      "id": "gargoyles_halberd",
      "name": "Алебарда горгулий",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D0%B3%D0%BE%D1%80%D0%B3%D1%83%D0%BB%D0%B8%D0%B9",
      "graceRu": "Окраины столицы (Плато Альтус)",
      "graceEn": "Outer Wall Phantom Tree",
      "dlc": false,
      "guide": "Выпадает за победу над полевой <b>Отважной горгульей</b> на лестнице по пути к внутренним стенам <b>Лейнделла</b> от благодати <b>Окраины столицы</b>."
    },
    {
      "id": "gargoyles_black_halberd",
      "name": "Чёрная алебарда горгулий",
      "category": "Алебарды",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A7%D1%91%D1%80%D0%BD%D0%B0%D1%8F_%D0%B0%D0%BB%D0%B5%D0%B1%D0%B0%D1%80%D0%B4%D0%B0_%D0%B3%D0%BE%D1%80%D0%B3%D1%83%D0%BB%D0%B8%D0%B9",
      "graceRu": "Большой подъёмник Рольда (Запретные земли)",
      "graceEn": "Grand Lift of Rold",
      "dlc": false,
      "guide": "Выпадает за победу над полевым боссом <b>Чёрный клинок сородича</b> на пути от <b>Лейнделла</b> к <b>Большому подъёмнику Рольда</b> в Запретных землях."
    }
  ];

  window.WEAPON_PART_14 = items;
  window.WEAPON_PART14 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(14, items);
  }
})();
