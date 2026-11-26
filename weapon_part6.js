/* ER_WEAPON_DB_PART | file: weapon_part6.js | part: 6 | items: 20/20 (101-120) */
(function () {
  'use strict';

  var items = [
    {
      "id": "falchion",
      "name": "Фальшион",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BB%D1%8C%D1%88%D0%B8%D0%BE%D0%BD",
      "graceRu": "Форт Хейт, запад (Замогилье)",
      "graceEn": "Fort Haight West",
      "dlc": false,
      "guide": "Фармится с <b>Полулюдей</b>, вооружённых фальшионом (базовый шанс — <b>2%</b>). Быстрее всего фармить стаю полулюдей в лесу у дороги сразу к западу от благодати <b>Форт Хейт, запад</b> в Замогилье."
    },
    {
      "id": "shamshir",
      "name": "Шамшир",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B0%D0%BC%D1%88%D0%B8%D1%80",
      "graceRu": "Пещера у дороги (Замогилье)",
      "graceEn": "Highroad Cave",
      "dlc": false,
      "guide": "Лежит на трупе у края каменного уступа в подземелье <b>Пещера у дороги</b> (севернее озера Агил в Замогилье). От места с водопадами спрыгните по выступам в боковой туннель с летучими мышами."
    },
    {
      "id": "grossmesser",
      "name": "Гросс-мессер",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D1%81%D1%81-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D1%80",
      "graceRu": "Храм паломничества (Плачущий полуостров)",
      "graceEn": "Church of Pilgrimage",
      "dlc": false,
      "guide": "Фармится со <b>Скелетов</b>, вооружённых изогнутым мечом (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — трое скелетов на кладбище сразу за стеной к югу от благодати <b>Храм паломничества</b>."
    },
    {
      "id": "bandits_curved_sword",
      "name": "Изогнутый меч бандита",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87_%D0%B1%D0%B0%D0%BD%D0%B4%D0%B8%D1%82%D0%B0",
      "graceRu": "Храм паломничества (Плачущий полуостров)",
      "graceEn": "Church of Pilgrimage",
      "dlc": false,
      "guide": "Фармится со <b>Скелетов-бандитов</b> (высокие скелеты с двумя мечами) с базовым шансом <b>1,5%</b>. Самая быстрая точка фарма — одинокий скелет на кладбище прямо у входа в <b>Храм паломничества</b> на Плачущем полуострове."
    },
    {
      "id": "shotel",
      "name": "Шотель",
      "category": "Изогнутые мечи",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%BE%D1%82%D0%B5%D0%BB%D1%8C",
      "graceRu": "Зал для аудиенций (Нокрон, Вечный город)",
      "graceEn": "Great Waterfall Basin",
      "dlc": false,
      "guide": "Продаётся у <b>Торговца-кочевника</b> в подземном городе <b>Нокрон</b> за <b>2 500 рун</b> (от благодати <b>Нижний Сиофра</b> поднимитесь по лесам и обломкам акведука мимо молящихся врагов)."
    },
    {
      "id": "scavengers_curved_sword",
      "name": "Изогнутый меч гробокопателя",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87_%D0%B3%D1%80%D0%BE%D0%B1%D0%BE%D0%BA%D0%BE%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Первый лагерь (Вулкан Гельмир)",
      "graceEn": "First Mt. Gelmir Campsite",
      "dlc": false,
      "guide": "Лежит на трупе у края обрыва за разрушенным мостом на <b>Вулкане Гельмир</b>. От благодати <b>Первый лагерь</b> поднимитесь по приставной лестнице, перейдите каменный мост и заберите меч с тела под охраной Приращённого отпрыска."
    },
    {
      "id": "mantis_blade",
      "name": "Клинок богомола",
      "category": "Изогнутые мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC%D0%BE%D0%BB%D0%B0",
      "graceRu": "Могила героя Гельмира (Вулкан Гельмир)",
      "graceEn": "Gelmir Hero's Grave",
      "dlc": false,
      "guide": "Выпадает с <b>Кладбищенской тени</b> в глубине подземелья <b>Могила героя Гельмира</b> (спрыгните с узкой балки под второй колесницей на нижний ярус и победите тень у сундука)."
    },
    {
      "id": "beastmans_curved_sword",
      "name": "Изогнутый меч зверочеловека",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87_%D0%B7%D0%B2%D0%B5%D1%80%D0%BE%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0",
      "graceRu": "Могила дракона-храмовника (Разрушающийся Фарум-Азула)",
      "graceEn": "Dragon Temple Altar",
      "dlc": false,
      "guide": "Фармится с <b>Зверолюдей Фарум-Азулы</b>, вооружённых изогнутым мечом (базовый шанс — <b>3%</b>). Удобнее всего фармить двух зверолюдей в коридоре сразу к северу от благодати <b>Могила дракона-храмовника</b>."
    },
    {
      "id": "flowing_curved_sword",
      "name": "Текучий изогнутый меч",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D0%BA%D1%83%D1%87%D0%B8%D0%B9_%D0%B8%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87",
      "graceRu": "Внутренний Священный путь (Священное заснеженное поле)",
      "graceEn": "Inner Consecrated Snowfield",
      "dlc": false,
      "guide": "Лежит в сундуке в чёрной повозке, которую тянут два тролля в составе каравана к юго-западу от благодати <b>Внутренний Священный путь</b> (появляется только в ночное время)."
    },
    {
      "id": "serpent_gods_curved_sword",
      "name": "Изогнутый меч бога-змея",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87_%D0%B1%D0%BE%D0%B3%D0%B0-%D0%B7%D0%BC%D0%B5%D1%8F",
      "graceRu": "Окраина ущелья с руинами (Озёрная Лиурния)",
      "graceEn": "Ruin-Strewn Precipice",
      "dlc": false,
      "guide": "Лежит на трупе в пещере с гигантским осьминогом в начале подъёма через <b>Ущелье с руинами</b> (между Озёрной Лиурнией и Плато Альтус)."
    },
    {
      "id": "magma_blade",
      "name": "Лавовый клинок",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D0%B0%D0%B2%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Храм Игли (Вулканово поместье)",
      "graceEn": "Temple of Eiglay",
      "dlc": false,
      "guide": "Фармится исключительно с <b>Людей-змеев</b>, вооружённых светящимся лавовым мечом, с крайне низким шансом <b>1%</b>. Самая быстрая точка фарма — двое людей-змеев на подъёмнике вверх от благодати <b>Храм Игли</b> в <b>Вулкановом поместье</b>."
    },
    {
      "id": "spirit_sword",
      "name": "Меч духа",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D0%B4%D1%83%D1%85%D0%B0",
      "graceRu": "Лазурное побережье, запад (Лазурное побережье)",
      "graceEn": "Cerulean Coast West",
      "dlc": true,
      "guide": "Лежит на трупе у края скалы на северо-западе <b>Лазурного побережья</b> (<i>Shadow of the Erdtree</i>). От благодати <b>Лазурное побережье, запад</b> скачите на север вдоль обрыва в сторону ущелья."
    },
    {
      "id": "nox_flowing_sword",
      "name": "Текучий меч нокса",
      "category": "Изогнутые мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D0%BA%D1%83%D1%87%D0%B8%D0%B9_%D0%BC%D0%B5%D1%87_%D0%BD%D0%BE%D0%BA%D1%81%D0%B0",
      "graceRu": "Селлия, город магии (Звёздные пустоши)",
      "graceEn": "Sellia, Town of Sorcery",
      "dlc": false,
      "guide": "Гарантированно выпадает в награду за победу над парным боссом <b>Мечница ноксов и Жрец ноксов</b> в запертой южной комнате города <b>Селлия, город магии</b> (откройте дверь, зажгив три жаровни на башнях города)."
    },
    {
      "id": "wing_of_astel",
      "name": "Крыло Астеля",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D1%80%D1%8B%D0%BB%D0%BE_%D0%90%D1%81%D1%82%D0%B5%D0%BB%D1%8F",
      "graceRu": "Главные ворота Нокстеллы (Нокстелла, Вечный город)",
      "graceEn": "Nokstella, Eternal City",
      "dlc": false,
      "guide": "Лежит в сундуке на вершине каменных руин над <b>Ульским дворцом</b> (проход через <b>Нокстеллу, Вечный город</b> и бассейн рек Ансель — поднимитесь по ступеням мимо муравьёв на уступ над рекой)."
    },
    {
      "id": "falx",
      "name": "Фалькс",
      "category": "Изогнутые мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BB%D1%8C%D0%BA%D1%81",
      "graceRu": "Покои за очищением (Пристанище Теней)",
      "graceEn": "Shadow Keep, Back Gate",
      "dlc": true,
      "guide": "Выпадает с <b>Рогатого воина</b> по завершении его сюжетной линии в <i>Shadow of the Erdtree</i>: примите сторону Леды или Рогатого воина в битве у <b>Пристанища Теней</b> либо победите его при вторжении в <b>Древних руинах Рауха</b> (<b>пропускаемый предмет</b> при неправильном порядке квестов)."
    },
    {
      "id": "dancing_blade_of_ranah",
      "name": "Танцующий меч Ранаха",
      "category": "Изогнутые мечи",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B0%D0%BD%D1%86%D1%83%D1%8E%D1%89%D0%B8%D0%B9_%D0%BC%D0%B5%D1%87_%D0%A0%D0%B0%D0%BD%D0%B0%D1%85%D0%B0",
      "graceRu": "Лазурное побережье, юг (Лазурное побережье)",
      "graceEn": "Cerulean Coast South",
      "dlc": true,
      "guide": "Гарантированно выпадает за победу над боссом <b>Танцовщица Ранаха</b> внутри <b>Безымянного южного мавзолея</b> на острове у южной оконечности <b>Лазурного побережья</b> (попасть на остров можно через подземный туннель у берега)."
    },
    {
      "id": "horned_warriors_sword",
      "name": "Меч рогатого воина",
      "category": "Изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B5%D1%87_%D1%80%D0%BE%D0%B3%D0%B0%D1%82%D0%BE%D0%B3%D0%BE_%D0%B2%D0%BE%D0%B8%D0%BD%D0%B0",
      "graceRu": "Главные ворота Белурата (Белурат, поселение у башни)",
      "graceEn": "Belurat, Tower Settlement",
      "dlc": true,
      "guide": "Фармится с <b>Рогатых воинов</b>, вооружённых парными изогнутыми мечами, в Белурате и Энир-Илиме (базовый шанс — <b>4%</b>). Самая быстрая точка фарма — рогатый воин в переулке к северу от благодати <b>Малый частный алтарь</b> в Белурате."
    },
    {
      "id": "eclipse_shotel",
      "name": "Шотель затмения",
      "category": "Изогнутые мечи",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%BE%D1%82%D0%B5%D0%BB%D1%8C_%D0%B7%D0%B0%D1%82%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F",
      "graceRu": "Замок Сол (Вершины великанов)",
      "graceEn": "Castle Sol Main Gate",
      "dlc": false,
      "guide": "Лежит на алтаре в часовне в юго-восточной части <b>Замка Сол</b> на Вершинах великанов (от главных ворот поверните направо и зайдите в церковь)."
    },
    {
      "id": "dismounter",
      "name": "Сбиватель",
      "category": "Большие изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B1%D0%B8%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C",
      "graceRu": "Предвратные руины (Замогилье)",
      "graceEn": "Gatefront",
      "dlc": false,
      "guide": "Фармится со всадников <b>Кайдена</b>, вооружённых этим мечом (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — группа всадников на дороге к северу от благодати <b>Предвратные руины</b> или у <b>Грязной пещеры</b> в Замогилье."
    },
    {
      "id": "omen_cleaver",
      "name": "Тесак знамения",
      "category": "Большие изогнутые мечи",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D1%81%D0%B0%D0%BA_%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F",
      "graceRu": "Пристройка к чертогу (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Фармится с крупных <b>Знамений</b>, вооружённых тесаком (базовый шанс — <b>4%</b>). Быстрее всего фармить одинокое Знамение во дворе прямо за дверью от благодати <b>Пристройка к чертогу</b> в Замке Грозовой Завесы."
    }
  ];

  window.WEAPON_PART_6 = items;
  window.WEAPON_PART6 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(6, items);
  }
})();
