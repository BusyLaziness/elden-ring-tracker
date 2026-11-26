/* ER_SHIELD_DB_PART | file: shield_part3.js | part: 3 | items: 20/20 (41-60) */
(function () {
  'use strict';

  var items = [
    {
      "id": "messmer_soldier_shield",
      "name": "Щит солдата Мессмера",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D0%B0_%D0%9C%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D0%B0",
      "graceRu": "Выжженные руины (Равнина Надгробий)",
      "graceEn": "Scorched Ruins",
      "dlc": true,
      "guide": "Фармится с <b>Солдат Мессмера</b>, вооружённых круглым чёрным щитом, в землях Теней (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — лагерь солдат сразу у благодати <b>Выжженные руины</b>."
    },
    {
      "id": "banished_knights_shield",
      "name": "Щит рыцаря-изгнанника",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F-%D0%B8%D0%B7%D0%B3%D0%BD%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0",
      "graceRu": "Храм драконьего причастия (Звёздные пустоши)",
      "graceEn": "Cathedral of Dragon Communion",
      "dlc": false,
      "guide": "Фармится с <b>Рыцарей-изгнанников</b>, вооружённых щитом и мечом (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — рыцарь, патрулирующий прямо у входа в <b>Храм драконьего причастия</b>."
    },
    {
      "id": "wolf_crest_shield",
      "name": "Щит с волком",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81_%D0%B2%D0%BE%D0%BB%D0%BA%D0%BE%D0%BC",
      "graceRu": "Покои владыки замка (Замок Энсис)",
      "graceEn": "Castle-Lord's Chamber",
      "dlc": true,
      "guide": "Лежит в сундуке в башне <b>Замка Энсис</b> (<i>Shadow of the Erdtree</i>; от благодати <b>Покои владыки замка</b> вернитесь на балкон, спрыгните на крышу слева и поднимитесь в башню)."
    },
    {
      "id": "serpent_crest_shield",
      "name": "Щит со змеем",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81%D0%BE_%D0%B7%D0%BC%D0%B5%D0%B5%D0%BC",
      "graceRu": "Теневой Альтус, запад (Теневой Альтус)",
      "graceEn": "Highroad Cross",
      "dlc": true,
      "guide": "Выдаётся за решение загадки с <b>Картиной «Владения дракона»</b> (сама картина в Пристанище Теней): подойдите к краю скалы над рекой к северу от <b>Зубастой горы</b> (через духовный источник у <b>Вида на Древо Упадка</b>)."
    },
    {
      "id": "albinauric_shield",
      "name": "Щит альбинора",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%B0%D0%BB%D1%8C%D0%B1%D0%B8%D0%BD%D0%BE%D1%80%D0%B0",
      "graceRu": "Ворота Академии (Озёрная Лиурния)",
      "graceEn": "Academy Gate Town",
      "dlc": false,
      "guide": "Фармится с <b>Альбиноров</b> первого поколения, вооружённых щитом и дубинкой (базовый шанс — <b>2%</b>). Самая быстрая точка — трое альбиноров у руин к северу от <b>Храма Элле</b> или у благодати <b>Предместье Академии</b>."
    },
    {
      "id": "beastmans_jar_shield",
      "name": "Щит-кувшин зверочеловека",
      "category": "Средние щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82-%D0%BA%D1%83%D0%B2%D1%88%D0%B8%D0%BD_%D0%B7%D0%B2%D0%B5%D1%80%D0%BE%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0",
      "graceRu": "Могила дракона-храмовника (Разрушающийся Фарум-Азула)",
      "graceEn": "Dragon Temple Altar",
      "dlc": false,
      "guide": "Фармится со <b>Зверолюдей Фарум-Азулы</b>, носящих щит-кувшин (базовый шанс — <b>4%</b>). Удобнее всего фармить в коридоре к северу от благодати <b>Могила дракона-храмовника</b>."
    },
    {
      "id": "carian_knights_shield",
      "name": "Щит карианского рыцаря",
      "category": "Средние щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%BA%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8F",
      "graceRu": "Зал прений (Академия Райи Лукарии)",
      "graceEn": "Debate Parlor",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над невозрождаемым враждебным NPC <b>Мунграм, карианский рыцарь</b> во дворе перед подъёмником к Реннале в <b>Академии Райи Лукарии</b>."
    },
    {
      "id": "silver_mirrorshield",
      "name": "Серебряный зеркальный щит",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D1%8F%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Священное заснеженное поле (Священное заснеженное поле)",
      "graceEn": "Apostate Derelict",
      "dlc": false,
      "guide": "Лежит на трупе у северной стены полуразрушенной церкви <b>Покинутый храм</b> на самом севере <b>Священного заснеженного поля</b> (рядом с огромной альбиноркой Латенной)."
    },
    {
      "id": "great_turtle_shell",
      "name": "Панцирь большой черепахи",
      "category": "Средние щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D0%BD%D1%86%D0%B8%D1%80%D1%8C_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B8",
      "graceRu": "Бастион замка Морн (Плачущий полуостров)",
      "graceEn": "Castle Morne Rampart",
      "dlc": false,
      "guide": "Лежит на вершине сторожевой башни у дороги к северу от благодати <b>Бастион замка Морн</b> на Плачущем полуострове (запрыгните на крышу башни с помощью <b>духовного источника</b> за ней)."
    },
    {
      "id": "golden_lion_shield",
      "name": "Щит в виде золотого льва",
      "category": "Средние щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D0%B2_%D0%B2%D0%B8%D0%B4%D0%B5_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B3%D0%BE_%D0%BB%D1%8C%D0%B2%D0%B0",
      "graceRu": "Главные ворота Белурата (Белурат, поселение у башни)",
      "graceEn": "Belurat, Tower Settlement",
      "dlc": true,
      "guide": "Выпадает с <b>Фрейи</b>, если отдать ей письмо от Ансбаха в <b>Пристанище Теней</b> (либо с её тела после финальной схватки в <b>Энир-Илиме</b>; <b>пропускаемый предмет</b>)."
    },
    {
      "id": "wooden_greatshield",
      "name": "Деревянный большой щит",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Лежит на трупе на крыше у башни в <b>Замке Грозовой Завесы</b> (от благодати <b>Башня бастиона</b> выйдите на стену и сверните к уступу слева от ястребов)."
    },
    {
      "id": "lordsworn_greatshield",
      "name": "Армейский щит",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%90%D1%80%D0%BC%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Предвратные руины (Замогилье)",
      "graceEn": "Gatefront",
      "dlc": false,
      "guide": "Фармится с обычных <b>Солдат Годрика</b>, носящих большой деревянный щит (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — лагерь солдат прямо у благодати <b>Предвратные руины</b> в Замогилье."
    },
    {
      "id": "briar_greatshield",
      "name": "Павеза с железными шипами",
      "category": "Большие щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D0%B2%D0%B5%D0%B7%D0%B0_%D1%81_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%BC%D0%B8_%D1%88%D0%B8%D0%BF%D0%B0%D0%BC%D0%B8",
      "graceRu": "Покои владыки Сумрачного замка (Плато Альтус)",
      "graceEn": "Castellan's Hall",
      "dlc": false,
      "guide": "Продаётся у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола в разделе снаряжения боссов после победы над <b>Элемером из Шипов</b> в <b>Сумрачном замке</b>."
    },
    {
      "id": "spiked_palisade_shield",
      "name": "Шипастый частокольный щит",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B8%D0%BF%D0%B0%D1%81%D1%82%D1%8B%D0%B9_%D1%87%D0%B0%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Озеро Агил, север (Замогилье)",
      "graceEn": "Agheel Lake North",
      "dlc": false,
      "guide": "Лежит на трупе в ущелье на границе Замогилья и Звёздных пустошей (к северо-востоку от <b>Тлеющей церкви</b>, под охраной гигантских воронов)."
    },
    {
      "id": "icon_shield",
      "name": "Щит со знаком",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82_%D1%81%D0%BE_%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC",
      "graceRu": "Руины леса (Плато Альтус)",
      "graceEn": "Woodfolk Ruins",
      "dlc": false,
      "guide": "Лежит в сундуке в подвале <b>Руин леса</b> на Плато Альтус (к югу от Сумрачного замка; спуск по лестнице в центре руин)."
    },
    {
      "id": "golden_beast_crest_shield",
      "name": "Золотой щит с гербовым зверем",
      "category": "Большие щиты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%B3%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D1%8B%D0%BC_%D0%B7%D0%B2%D0%B5%D1%80%D0%B5%D0%BC",
      "graceRu": "Часовня ожидания (Замогилье)",
      "graceEn": "Chapel of Anticipation",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Приращённый потомок</b> в стартовой локации <b>Часовня ожидания</b> (вернуться туда можно через второй портал сверху в <b>Четырёх колокольнях</b> в Озёрной Лиурнии)."
    },
    {
      "id": "manor_towershield",
      "name": "Башенный щит Поместья",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D0%9F%D0%BE%D0%BC%D0%B5%D1%81%D1%82%D1%8C%D1%8F",
      "graceRu": "Башня бастиона (Замок Грозовой Завесы)",
      "graceEn": "Rampart Tower",
      "dlc": false,
      "guide": "Лежит на трупе в комнате за запертой туманной дверью в <b>Замке Грозовой Завесы</b> (требуется <b>1 мечевидный ключ</b>; в зале с Приращённым потомком под картиной Годфри)."
    },
    {
      "id": "crossed_tree_towershield",
      "name": "Башенный щит со скрещёнными стволами",
      "category": "Большие щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81%D0%BE_%D1%81%D0%BA%D1%80%D0%B5%D1%89%D1%91%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8_%D1%81%D1%82%D0%B2%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8",
      "graceRu": "Лесной мост (Плато Альтус)",
      "graceEn": "Forest-Spanning Greatbridge",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> на разрушенном мосту у благодати <b>Лесной мост</b> в северной части Плато Альтус за <b>3 800 рун</b>."
    },
    {
      "id": "inverted_hawk_towershield",
      "name": "Башенный щит с перевёрнутым ястребом",
      "category": "Большие щиты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82_%D1%81_%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D1%91%D1%80%D0%BD%D1%83%D1%82%D1%8B%D0%BC_%D1%8F%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%BC",
      "graceRu": "Нокрон, Вечный город (Река Сиофра)",
      "graceEn": "Nokron, Eternal City",
      "dlc": false,
      "guide": "Фармится с призрачных <b>Павших ястребов</b>, вооружённых большим щитом, в подземном городе <b>Нокрон</b> (базовый шанс — <b>2%</b>). Удобнее всего фармить у руин рядом с благодатью <b>Нокрон, Вечный город</b>."
    },
    {
      "id": "dragon_towershield",
      "name": "Драконий башенный щит",
      "category": "Большие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B8%D0%B9_%D0%B1%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Крыша драконьего храма (Разрушающийся Фарум-Азула)",
      "graceEn": "Dragon Temple Rooftop",
      "dlc": false,
      "guide": "Лежит в сундуке на скрытом нижнем уступе <b>Сокрушённого Фарум-Азулы</b> (от благодати <b>Крыша драконьего храма</b> спрыгните с обрыва за драконом на каменные балки внизу)."
    }
  ];

  window.SHIELD_PART_3 = items;
  window.SHIELD_PART3 = items;
  window.SHIELD_LIST = (window.SHIELD_LIST || []).concat(items);
  if (typeof window.registerShieldPart === 'function') {
    window.registerShieldPart(3, items);
  }
})();
