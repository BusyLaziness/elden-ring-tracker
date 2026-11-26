/* ER_SPELL_DB_PART | file: spell_part9.js | part: 9 | items: 20/20 (161-180) */
(function () {
  'use strict';

  var items = [
    {
      "id": "noble_presence",
      "name": "Благородное присутствие",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5",
      "graceRu": "Храм Игли (Вулкан Гельмир)",
      "graceEn": "Temple of Eiglay",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Аристократ божественной кожи</b> внутри <b>Храма Игли</b> в <b>Вулкановом поместье</b>."
    },
    {
      "id": "beast_claw",
      "name": "Коготь зверя",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%B7%D0%B2%D0%B5%D1%80%D1%8F",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>5 Корней Смерти</b>."
    },
    {
      "id": "gurranq_s_beast_claw",
      "name": "Коготь Гурранка",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%93%D1%83%D1%80%D1%80%D0%B0%D0%BD%D0%BA%D0%B0",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>8 Корней Смерти</b>."
    },
    {
      "id": "bestial_sling",
      "name": "Звериная праща",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%B0%D1%89%D0%B0",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>2 Корней Смерти</b>."
    },
    {
      "id": "stone_of_gurranq",
      "name": "Камень Гурранка",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C_%D0%93%D1%83%D1%80%D1%80%D0%B0%D0%BD%D0%BA%D0%B0",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>6 Корней Смерти</b>."
    },
    {
      "id": "bestial_constitution",
      "name": "Звериное тело",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D1%80%D0%B8%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D0%BB%D0%BE",
      "graceRu": "Драконий курган (Драконий курган Грейолл)",
      "graceEn": "Dragonbarrow West",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на узком уступе к юго-востоку от <b>Башни изоляции в Драконьем кургане</b> (в восточной части Звёздных пустошей)."
    },
    {
      "id": "bestial_vitality",
      "name": "Звериная живучесть",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B2%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%8F_%D0%B6%D0%B8%D0%B2%D1%83%D1%87%D0%B5%D1%81%D1%82%D1%8C",
      "graceRu": "Звериное святилище (Драконий курган Грейолл)",
      "graceEn": "Bestial Sanctum",
      "dlc": false,
      "guide": "Выдаётся <b>Гурранком, звериным жрецом</b> в <b>Зверином святилище</b> в награду за передачу ему <b>3 Корней Смерти</b>."
    },
    {
      "id": "roar_of_rugalea",
      "name": "Рёв Ругали",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D1%91%D0%B2_%D0%A0%D1%83%D0%B3%D0%B0%D0%BB%D0%B8",
      "graceRu": "Овраг Реки Аскетов (Руины древней обители Рауха)",
      "graceEn": "Ravine North",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над боссом <b>Ругалия, Великий красный медведь</b> в лесной чаще на севере <b>Руин древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Овраг Реки Аскетов</b> идите на север через руины)."
    },
    {
      "id": "swarm_of_flies",
      "name": "Рой мух",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%BE%D0%B9_%D0%BC%D1%83%D1%85",
      "graceRu": "Дворец Могвинов (Дворец Могвинов)",
      "graceEn": "Palace Approach Ledge-Road",
      "dlc": false,
      "guide": "Лежит на трупе в небольшой тёмной пещере на краю кровавого болота во <b>Дворце Могвинов</b> (напротив входа в пещеру с врагами-альбинорами у благодати <b>Дорога, ведущая ко дворцу</b>)."
    },
    {
      "id": "bloodflame_talons",
      "name": "Когти кровавого пламени",
      "category": "Молитвы",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D1%82%D0%B8_%D0%BA%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Заброшенный гроб (Подземелье отчуждения)",
      "graceEn": "Forsaken Depths",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Мог, Знамение</b> в самом низу <b>Подземелья отчуждения</b> под Лейнделлом (доступно даже после превращения города в столицу пепла)."
    },
    {
      "id": "bloodboon",
      "name": "Подаяние крови",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%B4%D0%B0%D1%8F%D0%BD%D0%B8%D0%B5_%D0%BA%D1%80%D0%BE%D0%B2%D0%B8",
      "graceRu": "Покои владыки (Дворец Могвинов)",
      "graceEn": "Cocoon of the Empyrean",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Повелителе Крови</b> после победы над боссом <b>Мог, Повелитель Крови</b> во <b>Дворце Могвинов</b>."
    },
    {
      "id": "bloodflame_blade",
      "name": "Клинок кровавого пламени",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%BA%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Храм Розы (Озёрная Лиурния)",
      "graceEn": "Rose Church",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> в неглубоком водоёме к северо-западу от <b>Храма Розы</b> в центральной части затопленной <b>Озёрной Лиурнии</b>."
    },
    {
      "id": "furious_blade_of_ansbach",
      "name": "Неистовый клинок Ансбаха",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B5%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%90%D0%BD%D1%81%D0%B1%D0%B0%D1%85%D0%B0",
      "graceRu": "Врата божественности (Энир-Илим)",
      "graceEn": "Divine Gate Front Staircase",
      "dlc": true,
      "guide": "Лежит на теле <b>Сэра Ансбаха</b> на арене финального босса <b>Радан, консорт Микеллы</b> в <b>Энир-Илиме</b> (<i>Shadow of the Erdtree</i>) после победы над ним, если вы помогли Ансбаху в Пристанище Теней."
    },
    {
      "id": "poison_mist",
      "name": "Ядовитый туман",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AF%D0%B4%D0%BE%D0%B2%D0%B8%D1%82%D1%8B%D0%B9_%D1%82%D1%83%D0%BC%D0%B0%D0%BD",
      "graceRu": "Замок Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на каменном уступе у южного берега <b>Плачущего полуострова</b> (к юго-западу от башни Ориса и к востоку от Замка Морн)."
    },
    {
      "id": "poison_armament",
      "name": "Ядовитое оружие",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AF%D0%B4%D0%BE%D0%B2%D0%B8%D1%82%D0%BE%D0%B5_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5",
      "graceRu": "Болото Эония (Звёздные пустоши)",
      "graceEn": "Aeonia Swamp Shore",
      "dlc": false,
      "guide": "Выпадает с <b>невидимого навозного скарабея</b> в юго-западной части ядовитого <b>болота Эония</b> в Звёздных пустошах (к северу от благодати <b>Берег болота Эония</b>)."
    },
    {
      "id": "pest_threads",
      "name": "Потоки паразитов",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D1%82%D0%BE%D0%BA%D0%B8_%D0%BF%D0%B0%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D0%BE%D0%B2",
      "graceRu": "Город магии Селлия (Звёздные пустоши)",
      "graceEn": "Sellia, Town of Sorcery",
      "dlc": false,
      "guide": "Продаётся у <b>Мудреца Гоури</b> в его лачуге к югу от <b>Селлии</b> за <b>7 500 рун</b> после того, как вы передадите <b>Протез валькирии</b> Миллисенте у <b>Храма чумы</b> и снова поговорите с Гоури."
    },
    {
      "id": "scarlet_aeonia",
      "name": "Красная Эония",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%AD%D0%BE%D0%BD%D0%B8%D1%8F",
      "graceRu": "Корни Святого Древа (Эльфаэль, опора Святого Древа)",
      "graceEn": "Haligtree Roots",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Богине гнили</b> после победы над секретным боссом <b>Маления, Клинок Микеллы</b> в глубине <b>Эльфаэля</b>."
    },
    {
      "id": "rotten_butterflies",
      "name": "Гнилые бабочки",
      "category": "Молитвы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BD%D0%B8%D0%BB%D1%8B%D0%B5_%D0%B1%D0%B0%D0%B1%D0%BE%D1%87%D0%BA%D0%B8",
      "graceRu": "Храм Цветочных бутонов (Руины древней обители Рауха)",
      "graceEn": "Church of the Bud",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Святой Цветочных бутонов</b> после победы над сюжетным боссом <b>Ромина, Святая Цветочных бутонов</b> (<i>Shadow of the Erdtree</i>)."
    },
    {
      "id": "pest_thread_spears",
      "name": "Липкие копья",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B8%D0%BF%D0%BA%D0%B8%D0%B5_%D0%BA%D0%BE%D0%BF%D1%8C%D1%8F",
      "graceRu": "Храм Цветочных бутонов (Руины древней обители Рауха)",
      "graceEn": "Church of the Bud, Main Entrance",
      "dlc": true,
      "guide": "Лежит на трупе в затопленном зале храма перед ареной Ромины в <b>Руинах древней обители Рауха</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Главный вход в храм Цветочных бутонов</b> спуститесь по лестнице в боковой зал слева)."
    },
    {
      "id": "the_flame_of_frenzy",
      "name": "Пламя Ярости",
      "category": "Молитвы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%AF%D1%80%D0%BE%D1%81%D1%82%D0%B8",
      "graceRu": "Деревня в Каллу (Плачущий полуостров)",
      "graceEn": "Ailing Village Outskirts",
      "dlc": false,
      "guide": "Лежит на трупе у алтаря внутри разрушенной <b>Церкви Каллу</b> на вершине холма над <b>Деревней в Каллу</b> на Плачущем полуострове (осторожно: в башне сидят враги, накладывающие безумие)."
    }
  ];

  window.SPELL_PART_9 = items;
  window.SPELL_PART9 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(9, items);
  }
})();
