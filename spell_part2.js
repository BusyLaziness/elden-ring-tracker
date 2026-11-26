/* ER_SPELL_DB_PART | file: spell_part2.js | part: 2 | items: 20/20 (21-40) */
(function () {
  'use strict';

  var items = [
    {
      "id": "comet_azur",
      "name": "Комета Азура",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D1%82%D0%B0_%D0%90%D0%B7%D1%83%D1%80%D0%B0",
      "graceRu": "Первородный чародей Азур (Вулкан Гельмир)",
      "graceEn": "Primeval Sorcerer Azur",
      "dlc": false,
      "guide": "Выдаётся при взаимодействии с окаменевшим телом <b>Первородного чародея Азура</b> у благодати <b>Первородный чародей Азур</b> на южном склоне <b>Вулкана Гельмир</b> (путь через Деревню отшельников)."
    },
    {
      "id": "founding_rain_of_stars",
      "name": "Первый звёздный дождь",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B4%D0%BE%D0%B6%D0%B4%D1%8C",
      "graceRu": "Заснеженные руины (Вершины великанов)",
      "graceEn": "Snow Valley Ruins Overlook",
      "dlc": false,
      "guide": "Лежит в сундуке на вершине <b>Еретической башни</b> на восточном краю <b>Вершин великанов</b>. Чтобы попасть туда, пройдите по <b>невидимому мосту</b> от разрушенного моста к юго-западу от Замка Сол (ориентируйтесь по падающему снегу и радужным камням)."
    },
    {
      "id": "stars_of_ruin",
      "name": "Гибельные звёзды",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%B8%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D1%8B",
      "graceRu": "Тайник в Селлии (Звёздные пустоши)",
      "graceEn": "Sellia Hideaway",
      "dlc": false,
      "guide": "Выдаётся в глубине секретного подземелья <b>Тайник в Селлии</b> при осмотре тела <b>Мастера Лусата</b> за запечатанным барьером (ключ-печать выдаёт <b>Чародейка Селлена</b> после того, как вы покажете ей <b>Комету Азура</b>)."
    },
    {
      "id": "magic_glintblade",
      "name": "Волшебный блестящий клинок",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA",
      "graceRu": "Церковь клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Стартовые чары класса <b>Заключённый</b>. Остальные классы могут купить заклинание у <b>Мириэля, пастыря клятв</b> в <b>Церкви клятв</b> на востоке Озёрной Лиурнии за <b>3 000 рун</b>."
    },
    {
      "id": "glintblade_trio",
      "name": "Три блестящих клинка",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%80%D0%B8_%D0%B1%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D1%85_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0",
      "graceRu": "Передний край замка (Равнина Надгробий)",
      "graceEn": "Castle Front",
      "dlc": true,
      "guide": "Лежат на трупе в <b>Замке Энсис</b> (<i>Shadow of the Erdtree</i>). От благодати <b>Передний край замка</b> поднимитесь по лестнице мимо тролля-рыцаря, сверните направо к краю стены и спрыгните на уступ за крышей часовни."
    },
    {
      "id": "glintblade_phalanx",
      "name": "Фаланга сияющего меча",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0_%D1%81%D0%B8%D1%8F%D1%8E%D1%89%D0%B5%D0%B3%D0%BE_%D0%BC%D0%B5%D1%87%D0%B0",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в Руинах поселения или у <b>Мириэля, пастыря клятв</b> после передачи им <b>Королевского свитка</b> (лежит на возвышенности к востоку от <b>Лачуги художника</b> в Лиурнии) за <b>2 500 рун</b>."
    },
    {
      "id": "carian_phalanx",
      "name": "Карианская фаланга",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D1%84%D0%B0%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0",
      "graceRu": "Три сестры (Озёрная Лиурния)",
      "graceEn": "Ranni's Rise",
      "dlc": false,
      "guide": "Продаётся у <b>Чародея Селувиса</b> в его башне в локации <b>Три сестры</b> (северо-запад Озёрной Лиурнии, за Поместьем Карии) за <b>12 000 рун</b> (<b>пропускаемый предмет</b>: купите до передачи Ренни клинка из Нокрона или заберите его колокольную сферу с тела Селувиса)."
    },
    {
      "id": "greatblade_phalanx",
      "name": "Фаланга большого меча",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A4%D0%B0%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B5%D1%87%D0%B0",
      "graceRu": "Туннель Гаэля (Звёздные пустоши)",
      "graceEn": "Gael Tunnel",
      "dlc": false,
      "guide": "Выдаётся за победу над боссом <b>Рыцарь-ищейка</b> в <b>Узилище кукушки</b> на юго-западе <b>Озёрной Лиурнии</b> (на уступе над берегом между Озёрной Лиурнией и Плачущим полуостровом)."
    },
    {
      "id": "magic_downpour",
      "name": "Зачарованный ливень",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%97%D0%B0%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BB%D0%B8%D0%B2%D0%B5%D0%BD%D1%8C",
      "graceRu": "Башня возвращения (Плачущий полуостров)",
      "graceEn": "Isolated Merchant's Shack",
      "dlc": false,
      "guide": "Лежит на вершине <b>Башни отступников</b> (Миражной башни) на северо-востоке <b>Плато Альтус</b>. Чтобы открыть башню, разбейте 3 призрачных герба (один прямо у входа, второй на камне к востоку, третий скрыт под призрачным валуном в лесу)."
    },
    {
      "id": "lorettas_greatbow",
      "name": "Большой лук Лоретты",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BB%D1%83%D0%BA_%D0%9B%D0%BE%D1%80%D0%B5%D1%82%D1%82%D1%8B",
      "graceRu": "Королевские земли лунных взоров (Озёрная Лиурния)",
      "graceEn": "Royal Moongazing Grounds",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Королевский рыцарь Лоретта</b> на арене в конце <b>Поместья Карии</b> (север Озёрной Лиурнии)."
    },
    {
      "id": "lorettas_mastery",
      "name": "Мастерство Лоретты",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D0%9B%D0%BE%D1%80%D0%B5%D1%82%D1%82%D1%8B",
      "graceRu": "Городская площадь Святого Древа (Святое Древо Микеллы)",
      "graceEn": "Haligtree Town Plaza",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над боссом <b>Лоретта, рыцарь Святого Древа</b> на арене в нижней части <b>Святого Древа Микеллы</b>."
    },
    {
      "id": "rennalas_full_moon",
      "name": "Полная Луна Ренналы",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%BE%D0%BB%D0%BD%D0%B0%D1%8F_%D0%9B%D1%83%D0%BD%D0%B0_%D0%A0%D0%B5%D0%BD%D0%BD%D0%B0%D0%BB%D1%8B",
      "graceRu": "Великая библиотека Райи Лукарии (Озёрная Лиурния)",
      "graceEn": "Raya Lucaria Grand Library",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Полнолунной королеве</b> после победы над сюжетным боссом <b>Реннала, Полнолунная королева</b> в <b>Академии Райи Лукарии</b>."
    },
    {
      "id": "rannis_dark_moon",
      "name": "Тёмная Луна Ренни",
      "category": "Чары",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D1%91%D0%BC%D0%BD%D0%B0%D1%8F_%D0%9B%D1%83%D0%BD%D0%B0_%D0%A0%D0%B5%D0%BD%D0%BD%D0%B8",
      "graceRu": "Лунный алтарь (Озёрная Лиурния)",
      "graceEn": "Moonlight Altar",
      "dlc": false,
      "guide": "Лежит в сундуке на самом верху <b>Башни Кхелоны</b> в юго-западной части плато <b>Лунный алтарь</b> (доступ по квесту Ренни). Для снятия печати с башни найдите и убейте <b>трёх гигантских призрачных черепах</b> на плато."
    },
    {
      "id": "rellanas_twin_moons",
      "name": "Две луны Релланы",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D0%B2%D0%B5_%D0%BB%D1%83%D0%BD%D1%8B_%D0%A0%D0%B5%D0%BB%D0%BB%D0%B0%D0%BD%D1%8B",
      "graceRu": "Покои владыки замка (Замок Энсис)",
      "graceEn": "Castle-Lord's Chamber",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Рыцаре Двойной Луны</b> после победы над сюжетным боссом <b>Реллана, Рыцарь Двойной Луны</b> в конце <b>Замка Энсис</b> (<i>Shadow of the Erdtree</i>)."
    },
    {
      "id": "carian_slicer",
      "name": "Карианский резак",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B5%D0%B7%D0%B0%D0%BA",
      "graceRu": "Руины поселения (Замогилье)",
      "graceEn": "Waypoint Ruins Cellar",
      "dlc": false,
      "guide": "Продаётся у <b>Чародейки Селлены</b> в Руинах поселения или у <b>Мириэля, пастыря клятв</b> после передачи им <b>Королевского свитка</b> (находится к востоку от <b>Лачуги художника</b> в Лиурнии) за <b>1 500 рун</b>."
    },
    {
      "id": "carian_greatsword",
      "name": "Карианский двуручник",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B2%D1%83%D1%80%D1%83%D1%87%D0%BD%D0%B8%D0%BA",
      "graceRu": "Церковь клятв (Озёрная Лиурния)",
      "graceEn": "Church of Vows",
      "dlc": false,
      "guide": "Продаётся у <b>Мириэля, пастыря клятв</b> в <b>Церкви клятв</b> на востоке Озёрной Лиурнии за <b>10 000 рун</b> с самого начала игры."
    },
    {
      "id": "carian_piercer",
      "name": "Карианское жало",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B6%D0%B0%D0%BB%D0%BE",
      "graceRu": "Нижний ярус поместья (Поместье Карии)",
      "graceEn": "Manor Lower Level",
      "dlc": false,
      "guide": "Выпадает с <b>навозного скарабея</b> на поляне к северо-западу от <b>Поместья Карии</b> (спуститесь по уступам с задней стены поместья в сторону локации Три сестры)."
    },
    {
      "id": "adulas_moonblade",
      "name": "Лунный клинок Адула",
      "category": "Чары",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9B%D1%83%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA_%D0%90%D0%B4%D1%83%D0%BB%D0%B0",
      "graceRu": "Собор Мануса Целеса (Озёрная Лиурния)",
      "graceEn": "Cathedral of Manus Celes",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над драконом <b>Адула, дракон блестящих камней</b> на площадке прямо перед входом в <b>Собор Мануса Целеса</b> на плато <b>Лунный алтарь</b> (финал квеста Ренни)."
    },
    {
      "id": "lucidity",
      "name": "Ясность рассудка",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%AF%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D1%80%D0%B0%D1%81%D1%81%D1%83%D0%B4%D0%BA%D0%B0",
      "graceRu": "Нижний ярус поместья (Поместье Карии)",
      "graceEn": "Manor Lower Level",
      "dlc": false,
      "guide": "Продаётся у <b>Первосвященника Джеремии / Чародея Селувиса</b> в локации <b>Три сестры</b> (севернее Поместья Карии) за <b>6 000 рун</b> (при смерти Селувиса доступна по его колокольной сфере)."
    },
    {
      "id": "carian_retaliation",
      "name": "Карианское возмездие",
      "category": "Чары",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%B8%D0%B5",
      "graceRu": "Королевские земли лунных взоров (Озёрная Лиурния)",
      "graceEn": "Royal Moongazing Grounds",
      "dlc": false,
      "guide": "Продаётся у <b>Пидии, карианского слуги</b> на верхнем балконе <b>Поместья Карии</b> за <b>9 000 рун</b> (спрыгните по обрывам со стороны локации <b>Три сестры</b> за Поместьем Карии)."
    }
  ];

  window.SPELL_PART_2 = items;
  window.SPELL_PART2 = items;
  window.SPELL_LIST = (window.SPELL_LIST || []).concat(items);
  if (typeof window.registerSpellPart === 'function') {
    window.registerSpellPart(2, items);
  }
})();
