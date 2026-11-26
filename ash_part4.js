/* ER_ASH_DB_PART | file: ash_part4.js | part: 4 | items: 20/20 (61-80) */
(function () {
  'use strict';

  var items = [
  {
    "id": "black_flame_tornado",
    "name": "Чёрный огненный смерч",
    "category": "Пылающие",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%BE%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BC%D0%B5%D1%80%D1%87",
    "graceRu": "Драконий храм (Разрушающийся Фарум-Азула)",
    "graceEn": "Dragon Temple",
    "dlc": false,
    "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Двое из божественной кожи</b> в <b>Драконьем храме</b> в <b>Разрушающемся Фарум-Азуле</b>."
  },
  {
    "id": "flame_spear",
    "name": "Полыхающее копьё",
    "category": "Пылающие",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BE%D0%BB%D1%8B%D1%85%D0%B0%D1%8E%D1%89%D0%B5%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%91",
    "graceRu": "Тёмный чертог (Пристанище Теней)",
    "graceEn": "Messmer's Dark Chamber",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном балконе-переходе перед входом в <b>Хранилище образцов</b> в <b>Пристанище Теней</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "flame_skewer",
    "name": "Полыхающий вертел",
    "category": "Пылающие",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BE%D0%BB%D1%8B%D1%85%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%B2%D0%B5%D1%80%D1%82%D0%B5%D0%BB",
    "graceRu": "Тёмный чертог (Пристанище Теней)",
    "graceEn": "Messmer's Dark Chamber",
    "dlc": true,
    "guide": "Выпадает с враждебного NPC <b>Огненный рыцарь Квилайн</b> при победе над ним при первом вторжении в <b>Белурате, поселении у башни</b> или во время второго вторжения в <b>Церковном районе Пристанища Теней</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "thunderbolt",
    "name": "Удар молнии",
    "category": "Громовые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B8",
    "graceRu": "Восточный бастион столицы (Лейнделл, столица королевства)",
    "graceEn": "East Capital Rampart",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> во внутреннем дворике с большими горшками в нижней части <b>Лейнделла, столицы королевства</b> (<b>пропускаемый предмет</b>: забрать до превращения города в Пепельную столицу)."
  },
  {
    "id": "lightning_ram",
    "name": "Молниеносный баран",
    "category": "Громовые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9C%D0%BE%D0%BB%D0%BD%D0%B8%D0%B5%D0%BD%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D1%80%D0%B0%D0%BD",
    "graceRu": "Долина ветряных мельниц (Плато Альтус)",
    "graceEn": "Windmill Village",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> среди стада диких баранов на плато к юго-востоку от <b>Деревни у мельницы (Доминула)</b> на севере <b>Плато Альтус</b>."
  },
  {
    "id": "lightning_slash",
    "name": "Удар грома",
    "category": "Громовые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A3%D0%B4%D0%B0%D1%80_%D0%B3%D1%80%D0%BE%D0%BC%D0%B0",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Outer Wall Phantom Tree",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> к северу от входа в <b>Запечатанный туннель</b> у западного рва <b>Лейнделла</b> на <b>Окраинах столицы</b> (недалеко от Сумрачного замка)."
  },
  {
    "id": "blinkbolt",
    "name": "Вспышка молнии",
    "category": "Громовые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%92%D1%81%D0%BF%D1%8B%D1%88%D0%BA%D0%B0_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B8",
    "graceRu": "Катакомбы под туманным разломом (Теневой Альтус)",
    "graceEn": "Fog Rift Catacombs",
    "dlc": true,
    "guide": "Гарантированно выпадает за победу над боссом <b>Рыцарь Смерти</b> в глубине подземелья <b>Катакомбы под туманным разломом</b> на северо-западе <b>Теневого Альтуса</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "sacred_blade",
    "name": "Священный клинок",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
    "graceRu": "Третий храм Марики (Замогилье)",
    "graceEn": "Third Church of Marika",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на холме за духовным источником к северу от <b>Третьего храма Марики</b> в восточном Замогилье."
  },
  {
    "id": "prayerful_strike",
    "name": "Набожный удар",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9D%D0%B0%D0%B1%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Outer Wall Phantom Tree",
    "dlc": false,
    "guide": "Выпадает с <b>невидимого навозного скарабея</b> в неглубоком пруду во внешнем рву к северу от входа в <b>Лейнделл</b> на <b>Окраинах столицы</b>."
  },
  {
    "id": "sacred_ring_of_light",
    "name": "Священное кольцо света",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D1%81%D0%B2%D0%B5%D1%82%D0%B0",
    "graceRu": "Болотный берег (Звёздные пустоши)",
    "graceEn": "Swamp Shore",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на сухом островке в западной части <b>болота Эония</b> в Звёздных пустошах (к северу от благодати <b>Болотный берег</b>)."
  },
  {
    "id": "sacred_order",
    "name": "Священный порядок",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%A1%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Altus Highway Junction",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на тракте к северу от благодати <b>Перекрёсток тракта Альтуса</b> на <b>Плато Альтус</b> (недалеко от места стоянки Брата Корина)."
  },
  {
    "id": "shared_order",
    "name": "Общее дело",
    "category": "Священные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D0%B1%D1%89%D0%B5%D0%B5_%D0%B4%D0%B5%D0%BB%D0%BE",
    "graceRu": "Окраины столицы (Плато Альтус)",
    "graceEn": "Altus Highway Junction",
    "dlc": false,
    "guide": "Выпадает за победу над ночным боссом <b>Ночной всадник</b> (появляется только <b>ночью</b>) на дороге к северу от благодати <b>Перекрёсток тракта Альтуса</b> на <b>Плато Альтус</b>."
  },
  {
    "id": "golden_land",
    "name": "Золотой край",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9",
    "graceRu": "Низовье Глубокого Корня (Низовье Глубокого Корня)",
    "graceEn": "Across the Roots",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> у корней деревьев в северо-восточной части <b>Низовья Глубокого Корня</b> (под охраной василисков и гигантских муравьёв)."
  },
  {
    "id": "golden_slam",
    "name": "Золотой удар",
    "category": "Священные",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%83%D0%B4%D0%B0%D1%80",
    "graceRu": "Малое Древо Эрд (Плато Альтус)",
    "graceEn": "Minor Erdtree (Altus Plateau)",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> на поляне у подножия <b>Малого Древа Эрд</b> в центре <b>Плато Альтус</b> (рядом с полем боя с Червемордым)."
  },
  {
    "id": "golden_vow_ash",
    "name": "Золотой обет",
    "category": "Священные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%BE%D0%B1%D0%B5%D1%82",
    "graceRu": "Лачуга мастера войны (Замогилье)",
    "graceEn": "Warmaster's Shack",
    "dlc": false,
    "guide": "Выпадает с одинокого <b>Рыцаря Годрика</b> верхом на коне на холме к северо-востоку от <b>Лачуги мастера войны</b> на Грозовом холме в Замогилье."
  },
  {
    "id": "aspects_of_the_crucible_wings",
    "name": "Дар Горнила: крылья",
    "category": "Священные",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%94%D0%B0%D1%80_%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D0%B0:_%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D1%8F",
    "graceRu": "Форт порицания (Теневой Альтус)",
    "graceEn": "Fort of Reprimand",
    "dlc": true,
    "guide": "Гарантированно выпадает за победу над боссом <b>Чёрный рыцарь Эдред</b> в глубине <b>Форта порицания</b> на юге <b>Теневого Альтуса</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "poisonous_mist",
    "name": "Отравляющий туман",
    "category": "Ядовитые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9E%D1%82%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%B9_%D1%82%D1%83%D0%BC%D0%B0%D0%BD",
    "graceRu": "Болото Эония (Звёздные пустоши)",
    "graceEn": "Aeonia Swamp Shore",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в юго-восточной части <b>болота Эония</b> (к северо-востоку от места вторжения Миллисенты в Звёздных пустошах)."
  },
  {
    "id": "poison_moth_flight",
    "name": "Полёт ядовитого мотылька",
    "category": "Ядовитые",
    "type": "reward",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9F%D0%BE%D0%BB%D1%91%D1%82_%D1%8F%D0%B4%D0%BE%D0%B2%D0%B8%D1%82%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D1%82%D1%8B%D0%BB%D1%8C%D0%BA%D0%B0",
    "graceRu": "Южный берег болота Эония (Звёздные пустоши)",
    "graceEn": "Southern Aeonia Swamp Bank",
    "dlc": false,
    "guide": "Выпадает за победу над ночным боссом <b>Ночной всадник</b> (появляется только <b>ночью</b>) на дороге к юго-западу от благодати <b>Южный берег болота Эония</b> в Звёздных пустошах."
  },
  {
    "id": "the_poison_flower_blooms_twice",
    "name": "Бутон распускается дважды",
    "category": "Ядовитые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%91%D1%83%D1%82%D0%BE%D0%BD_%D1%80%D0%B0%D1%81%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%B4%D0%B2%D0%B0%D0%B6%D0%B4%D1%8B",
    "graceRu": "Храм Цветочных бутонов (Руины древней обители Рауха)",
    "graceEn": "Church of the Bud, Main Entrance",
    "dlc": true,
    "guide": "Выпадает с <b>навозного скарабея</b> на каменном уступе у пропасти к северо-западу от <b>Главного входа в храм Цветочных бутонов</b> в <b>Руинах древней обители Рауха</b> (<i>Shadow of the Erdtree</i>)."
  },
  {
    "id": "blood_blade",
    "name": "Кровавый клинок",
    "category": "Кровавые",
    "type": "loot",
    "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB_%D0%92%D0%BE%D0%B9%D0%BD%D1%8B:_%D0%9A%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
    "graceRu": "Форт Хейт (Замогилье)",
    "graceEn": "Fort Haight West",
    "dlc": false,
    "guide": "Выпадает с <b>навозного скарабея</b> в болотистой низине к северо-западу от <b>Форта Хейт</b> в восточном Замогилье (рядом с лагерем полулюдей)."
  }
];

  window.ASH_PART_4 = items;
  window.ASH_PART4 = items;
  window.ASH_LIST = (window.ASH_LIST || []).concat(items);
  if (typeof window.registerAshPart === 'function') {
    window.registerAshPart(4, items);
  }
})();
