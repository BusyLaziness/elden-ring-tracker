/* ER_WEAPON_DB_PART | file: weapon_part17.js | part: 17 | items: 20/20 (321-340) */
(function () {
  'use strict';

  var items = [
    {
      "id": "raptor_talons",
      "name": "Когти хищника",
      "category": "Когти",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D1%82%D0%B8_%D1%85%D0%B8%D1%89%D0%BD%D0%B8%D0%BA%D0%B0",
      "graceRu": "Пещера мудреца (Плато Альтус)",
      "graceEn": "Sage's Cave",
      "dlc": false,
      "guide": "Лежат в сундуке в одной из потайных комнат за призрачными стенами в <b>Пещере мудреца</b> на Плато Альтус."
    },
    {
      "id": "claws_of_night",
      "name": "Когти ночи",
      "category": "Когти",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D1%82%D0%B8_%D0%BD%D0%BE%D1%87%D0%B8",
      "graceRu": "Собор Манус Метир (Теневой Альтус)",
      "graceEn": "Cathedral of Manus Metyr",
      "dlc": true,
      "guide": "Выпадают за победу над вторгшимся фантомом <b>Анной, мечницей ночи</b> на подземном кладбище под <b>Собором Манус Метир</b> (после удара в первый висячий колокол по квесту Имира)."
    },
    {
      "id": "beast_claw",
      "name": "Коготь зверя",
      "category": "Когти",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%B7%D0%B2%D0%B5%D1%80%D1%8F",
      "graceRu": "Равнина Надгробий (Равнина Надгробий)",
      "graceEn": "Gravesite Plain",
      "dlc": true,
      "guide": "Выпадает с дикого враждебного NPC <b>Логур, Звериный коготь</b>, бродящего в лесу к юго-востоку от места благодати <b>Равнина Надгробий</b>."
    },
    {
      "id": "red_bears_claw",
      "name": "Коготь красного медведя",
      "category": "Когти",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%B3%D0%BE%D1%82%D1%8C_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8F",
      "graceRu": "Северный безымянный мавзолей (Равнина Надгробий)",
      "graceEn": "Northern Nameless Mausoleum",
      "dlc": true,
      "guide": "Выпадает за победу над боссом <b>Красный медведь</b> в <b>Северном безымянном мавзолее</b> (доступ через духовный источник у подножия плато в Равнине Надгробий)."
    },
    {
      "id": "firespark_perfume_bottle",
      "name": "Флакон огненных искр",
      "category": "Флаконы для метания",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BE%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D0%B8%D1%81%D0%BA%D1%80",
      "graceRu": "Передний край замка (Равнина Надгробий)",
      "graceEn": "Castle Front",
      "dlc": true,
      "guide": "Лежит в сундуке в лагере парфюмеров в лесу к востоку от благодати <b>Передний край замка</b> (у обрыва над отравленным болотом)."
    },
    {
      "id": "lightning_perfume_bottle",
      "name": "Флакон молнии",
      "category": "Флаконы для метания",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B8",
      "graceRu": "Лазурное побережье (Лазурное побережье)",
      "graceEn": "Cerulean Coast",
      "dlc": true,
      "guide": "Лежит на трупе в мелком озере с электрическими овцами на <b>Лазурном побережье</b> (к востоку от благодати <b>Крест на Лазурном берегу</b>)."
    },
    {
      "id": "chilling_perfume_bottle",
      "name": "Флакон мороза",
      "category": "Флаконы для метания",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BC%D0%BE%D1%80%D0%BE%D0%B7%D0%B0",
      "graceRu": "Тюрьма Плакальщика (Тайная могила Харо)",
      "graceEn": "Lamenter's Gaol",
      "dlc": true,
      "guide": "Лежит на трупе в замерзшем тупике внутри подземелья <b>Тюрьма Плакальщика</b> в южной части Тайной могилы Харо."
    },
    {
      "id": "frenzyflame_perfume_bottle",
      "name": "Флакон яростного пламени",
      "category": "Флаконы для метания",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D0%BE%D0%BD_%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8",
      "graceRu": "Церковь руин (Лес Бездны)",
      "graceEn": "Church Ruins",
      "dlc": true,
      "guide": "Лежит на трупе у алтаря внутри полуразрушенной <b>Церкви руин</b> в южной части <b>Леса Бездны</b>."
    },
    {
      "id": "deadly_poison_perfume_bottle",
      "name": "Флакон смертельного яда",
      "category": "Флаконы для метания",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D0%BE%D0%BD_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D1%8F%D0%B4%D0%B0",
      "graceRu": "Крест у тракта (Равнина Надгробий)",
      "graceEn": "Pillar Path Cross",
      "dlc": true,
      "guide": "Продаётся у <b>Тиолье</b> рядом с благодатью <b>Крест у тракта</b> в Равнине Надгробий за <b>6 000 рун</b> (после первого разговора с ним)."
    },
    {
      "id": "torch",
      "name": "Факел",
      "category": "Факелы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB",
      "graceRu": "Храм Элле (Замогилье)",
      "graceEn": "Church of Elleh",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца Кале</b> в <b>Храме Элле</b> в самом начале Замогилья за <b>200 рун</b>."
    },
    {
      "id": "beast_repellent_torch",
      "name": "Пахучий факел",
      "category": "Факелы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D1%85%D1%83%D1%87%D0%B8%D0%B9_%D1%84%D0%B0%D0%BA%D0%B5%D0%BB",
      "graceRu": "Лачуга торговца-отшельника (Драконий курган Грейолл)",
      "graceEn": "Isolated Merchant's Shack (Dragonbarrow)",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-отшельника</b> в западной части <b>Драконьего кургана</b> за <b>1 200 рун</b>."
    },
    {
      "id": "steel_wire_torch",
      "name": "Факел со стальной проволокой",
      "category": "Факелы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB_%D1%81%D0%BE_%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%B9",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Лежит на трупе на деревянных лесах у крепостной стены в <b>Замке Морн</b> (поднимитесь по лестнице справа от двора с горящей кучей трупов)."
    },
    {
      "id": "sentrys_torch",
      "name": "Факел часового",
      "category": "Факелы",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB_%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE",
      "graceRu": "Лачуга торговца-отшельника (Окраины столицы)",
      "graceEn": "Hermit Merchant's Shack (Capital Outskirts)",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-отшельника</b> в лачуге к северу от <b>Окраин столицы</b> на Плато Альтус за <b>7 000 рун</b>."
    },
    {
      "id": "ghostflame_torch",
      "name": "Факел с пламенем смерти",
      "category": "Факелы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB_%D1%81_%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5%D0%BC_%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8",
      "graceRu": "Берег речного источника (Река Сиофра)",
      "graceEn": "Below the Well",
      "dlc": false,
      "guide": "Лежит на трупе в низине под разрушенным мостом у водопада в <b>Нокроне, Вечном городе</b> (спуск со стороны руин у обрыва)."
    },
    {
      "id": "st_trinas_torch",
      "name": "Факел св. Трины",
      "category": "Факелы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB_%D1%81%D0%B2._%D0%A2%D1%80%D0%B8%D0%BD%D1%8B",
      "graceRu": "Священное заснеженное поле (Священное заснеженное поле)",
      "graceEn": "Consecrated Snowfield",
      "dlc": false,
      "guide": "Лежит в сундуке в повозке, которую тянут два тролля в западной части <b>Священного заснеженного поля</b>."
    },
    {
      "id": "nanayas_torch",
      "name": "Факел Нанайи",
      "category": "Факелы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BA%D0%B5%D0%BB_%D0%9D%D0%B0%D0%BD%D0%B0%D0%B9%D0%B8",
      "graceRu": "Поместье Мидры (Лес Бездны)",
      "graceEn": "Midra's Manse",
      "dlc": true,
      "guide": "Лежит на трупе в закрытой комнате на втором этаже <b>Особняка Мидры</b> (попасть можно спрыгнув с балок чердака после активации рычага)."
    },
    {
      "id": "lamenting_visage",
      "name": "Скорбный лик",
      "category": "Факелы",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BA%D0%BE%D1%80%D0%B1%D0%BD%D1%8B%D0%B9_%D0%BB%D0%B8%D0%BA",
      "graceRu": "Тайная могила Харо (Тайная могила Харо)",
      "graceEn": "Lamenter's Gaol",
      "dlc": true,
      "guide": "Лежит в сундуке в запертой камере в глубине подземелья <b>Тайная могила Харо</b> (требуется <b>Ключ от верхнего уровня тюрьмы</b>, найденный в этом же подземелье)."
    },
    {
      "id": "shortbow",
      "name": "Короткий лук",
      "category": "Лёгкие луки",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9_%D0%BB%D1%83%D0%BA",
      "graceRu": "Побережье Замогилья (Замогилье)",
      "graceEn": "Coastal Cave",
      "dlc": false,
      "guide": "Стартовое оружие класса <b>Бандит</b>. Продаётся у <b>Торговца-кочевника</b> на пляже к западу от благодати <b>Первый шаг</b> (рядом с <b>Прибрежной пещерой</b>) за <b>600 рун</b>."
    },
    {
      "id": "composite_bow",
      "name": "Составной лук",
      "category": "Лёгкие луки",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BB%D1%83%D0%BA",
      "graceRu": "Окраины озера Лиурнии (Озёрная Лиурния)",
      "graceEn": "Liurnia Lake Shore",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> у моста рядом с благодатью <b>Окраины озера Лиурнии</b> (сразу за Замком Грозовой Завесы) за <b>3 500 рун</b>."
    },
    {
      "id": "red_branch_shortbow",
      "name": "Короткий лук из красного дерева",
      "category": "Лёгкие луки",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9_%D0%BB%D1%83%D0%BA_%D0%B8%D0%B7_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0",
      "graceRu": "Покои у подъёмника (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Фармится с <b>Пажей</b>, вооружённых луком (базовый шанс — <b>2%</b>). Удобнее всего фармить пажей на крышах <b>Академии Райи Лукарии</b> или в <b>Лейнделле</b> (до пепла)."
    }
  ];

  window.WEAPON_PART_17 = items;
  window.WEAPON_PART17 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(17, items);
  }
})();
