/* ER_WEAPON_DB_PART | file: weapon_part10.js | part: 10 | items: 20/20 (181-200) */
(function () {
  'use strict';

  var items = [
    {
      "id": "putrescence_cleaver",
      "name": "Тесак из гнили",
      "category": "Большие топоры",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D1%81%D0%B0%D0%BA_%D0%B8%D0%B7_%D0%B3%D0%BD%D0%B8%D0%BB%D0%B8",
      "graceRu": "Сад фиолетовых цветов (Лазурное побережье)",
      "graceEn": "Garden of Deep Purple",
      "dlc": true,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Гнили</b> после победы над боссом <b>Рыцарь Смерти / Воплощение гнили</b> в глубине <b>Разлома в каменном саркофаге</b> (<i>Shadow of the Erdtree</i>)."
    },
    {
      "id": "great_katana",
      "name": "Большая катана",
      "category": "Большие катаны",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0",
      "graceRu": "Равнина Надгробий (Равнина Надгробий)",
      "graceEn": "Gravesite Plain",
      "dlc": true,
      "guide": "Лежит на трупе у северо-западного берега озера к западу от благодати <b>Равнина Надгробий</b> под охраной спиритического <b>Призрачного пламенного дракона</b>."
    },
    {
      "id": "dragon_hunters_great_katana",
      "name": "Большая катана дракона-охотника",
      "category": "Большие катаны",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0",
      "graceRu": "Драконья яма (Равнина Надгробий)",
      "graceEn": "Dragon's Pit",
      "dlc": true,
      "guide": "Выпадает за победу над боссом <b>Древний человек-дракон</b> в глубине подземелья <b>Драконья яма</b> на юго-востоке Равнины Надгробий (по пути к Зубастой горе)."
    },
    {
      "id": "rakshasas_great_katana",
      "name": "Большая катана Ракшасы",
      "category": "Большие катаны",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0_%D0%A0%D0%B0%D0%BA%D1%88%D0%B0%D1%81%D1%8B",
      "graceRu": "Одинокий восточный мавзолей (Теневой Альтус)",
      "graceEn": "Eastern Nameless Mausoleum",
      "dlc": true,
      "guide": "Выпадает за победу над боссом <b>Ракшаса</b> внутри <b>Одинокого восточного мавзолея</b> (доступ через реку Аскетов на юго-востоке от Пристанища Теней)."
    },
    {
      "id": "club",
      "name": "Дубина",
      "category": "Молоты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%94%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Прибрежная пещера (Замогилье)",
      "graceEn": "Coastal Cave",
      "dlc": false,
      "guide": "Стартовое оружие класса <b>Мерзавец</b>. Продаётся у <b>Торговца-кочевника</b> на пляже у входа в <b>Прибрежную пещеру</b> к западу от Первого шага за <b>600 рун</b> (также падает с полулюдей с шансом <b>2%</b>)."
    },
    {
      "id": "curved_club",
      "name": "Изогнутая дубина",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%98%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Храм Элле (Замогилье)",
      "graceEn": "Church of Elleh",
      "dlc": false,
      "guide": "Фармится с <b>Белокожих альбиноров</b> первого поколения (базовый шанс — <b>2%</b>). Самая быстрая точка фарма в начале игры — трое альбиноров в руинах по дороге к северу от <b>Храма Элле</b> (или у благодати <b>Деревня альбиноров</b>)."
    },
    {
      "id": "spiked_club",
      "name": "Шипастая дубина",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A8%D0%B8%D0%BF%D0%B0%D1%81%D1%82%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Форт Хейт, запад (Замогилье)",
      "graceEn": "Fort Haight West",
      "dlc": false,
      "guide": "Фармится с <b>Полулюдей</b>, вооружённых шипастой дубиной, с базовым шансом <b>2%</b>. Удобнее всего фармить стаю полулюдей в лесу у дороги сразу к западу от благодати <b>Форт Хейт, запад</b>."
    },
    {
      "id": "stone_club",
      "name": "Каменная дубина",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B4%D1%83%D0%B1%D0%B8%D0%BD%D0%B0",
      "graceRu": "Школьный класс (Академия Райи Лукарии)",
      "graceEn": "Schoolhouse Classroom",
      "dlc": false,
      "guide": "Фармится исключительно с <b>Боевых магов</b> (базовый шанс — <b>2%</b>). Самая быстрая точка фарма — одинокий боевой маг на лесной тропе к северо-востоку от <b>Храма чумы</b> в Звёздных пустошах или в <b>Академии Райи Лукарии</b>."
    },
    {
      "id": "mace",
      "name": "Булава",
      "category": "Молоты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D1%83%D0%BB%D0%B0%D0%B2%D0%B0",
      "graceRu": "Стол утраченной благодати (Крепость Круглого стола)",
      "graceEn": "Table of Lost Grace",
      "dlc": false,
      "guide": "Продаётся у <b>Старых служанок-близнецов</b> в <b>Крепости Круглого стола</b> за <b>1 200 рун</b> с самого начала игры."
    },
    {
      "id": "morning_star",
      "name": "Моргенштерн",
      "category": "Молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D1%80%D0%B3%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D1%80%D0%BD",
      "graceRu": "Мост Жертвоприношений (Плачущий полуостров)",
      "graceEn": "Bridge of Sacrifice",
      "dlc": false,
      "guide": "Лежит в сундуке в разбитой чёрной повозке на дороге сразу за <b>Мостом Жертвоприношений</b> на входе в Плачущий полуостров."
    },
    {
      "id": "warpick",
      "name": "Клевец",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%BB%D0%B5%D0%B2%D0%B5%D1%86",
      "graceRu": "Пристройка к чертогу (Замок Грозовой Завесы)",
      "graceEn": "Liftside Chamber",
      "dlc": false,
      "guide": "Фармится с обычных <b>Солдат</b> (Годрика, Райи Лукарии, Радана и Лейнделла), вооружённых клевцом, с базовым шансом <b>2%</b>. Удобнее всего фармить солдат во дворе у благодати <b>Пристройка к чертогу</b>."
    },
    {
      "id": "hammer",
      "name": "Молот",
      "category": "Молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82",
      "graceRu": "Западный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "West Capital Rampart",
      "dlc": false,
      "guide": "Лежит на трупе в кузнице на первом этаже <b>Укреплённого поместья</b> в <b>Лейнделле, столице королевства</b> (<b>пропускаемый предмет</b>: забрать до превращения Лейнделла в Столицу пепла)."
    },
    {
      "id": "monks_flamemace",
      "name": "Горящая булава монаха",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%93%D0%BE%D1%80%D1%8F%D1%89%D0%B0%D1%8F_%D0%B1%D1%83%D0%BB%D0%B0%D0%B2%D0%B0_%D0%BC%D0%BE%D0%BD%D0%B0%D1%85%D0%B0",
      "graceRu": "Могила героя-завоевателя (Вершины великанов)",
      "graceEn": "Giant-Conquering Hero's Grave",
      "dlc": false,
      "guide": "Фармится с <b>Огненных монахов</b>, вооружённых этой булавой, с базовым шансом <b>4%</b>. Быстрее всего фармить монаха в первом коридоре подземелья <b>Могила героя-завоевателя</b> на Вершинах великанов."
    },
    {
      "id": "varres_bouquet",
      "name": "Букет Варрэ",
      "category": "Молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%91%D1%83%D0%BA%D0%B5%D1%82_%D0%92%D0%B0%D1%80%D1%80%D1%8D",
      "graceRu": "Мавзолей династии, центр (Дворец Могвинов)",
      "graceEn": "Dynasty Mausoleum Midpoint",
      "dlc": false,
      "guide": "Выпадает при вторжении в мир <b>Белоликого Варрэ</b> по красной надписи призыва в тёмном коридоре перед подъёмником во <b>Дворце Могвинов</b> (доступ через медальон чистокровного рыцаря по квесту Варрэ)."
    },
    {
      "id": "envoys_horn",
      "name": "Рожок посланца",
      "category": "Молоты",
      "type": "farm",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%BE%D0%B6%D0%BE%D0%BA_%D0%BF%D0%BE%D1%81%D0%BB%D0%B0%D0%BD%D1%86%D0%B0",
      "graceRu": "Восточный бастион столицы (Лейнделл, столица королевства)",
      "graceEn": "East Capital Rampart",
      "dlc": false,
      "guide": "Фармится с белых <b>Оракулов-посланцев</b> с базовым шансом <b>2%</b>. Самая быстрая точка фарма — четверо оракулов на крепостной стене сразу за выходом от благодати <b>Восточный бастион столицы</b> (также фармится в Святом Древе Микеллы)."
    },
    {
      "id": "nox_flowing_hammer",
      "name": "Текучий молот нокса",
      "category": "Молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A2%D0%B5%D0%BA%D1%83%D1%87%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82_%D0%BD%D0%BE%D0%BA%D1%81%D0%B0",
      "graceRu": "Нокрон, Вечный город (Нокрон, Вечный город)",
      "graceEn": "Nokron, Eternal City",
      "dlc": false,
      "guide": "Лежит на трупе в беседке за запертой туманной дверью в <b>Нокроне, Вечном городе</b> (требуется <b>1 мечевидный ключ</b>; справа от большого моста перед Священной землёй ночи)."
    },
    {
      "id": "ringed_finger",
      "name": "Палец с перстнем",
      "category": "Молоты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9F%D0%B0%D0%BB%D0%B5%D1%86_%D1%81_%D0%BF%D0%B5%D1%80%D1%81%D1%82%D0%BD%D0%B5%D0%BC",
      "graceRu": "Могила героя Гельмира (Вулкан Гельмир)",
      "graceEn": "Gelmir Hero's Grave",
      "dlc": false,
      "guide": "Лежит в сундуке в глубине подземелья <b>Могила героя Гельмира</b> на горе Гельмир: спрыгните с каменных балок на застывшую лаву под колесницей и пройдите в боковой зал с кладбищенской тенью."
    },
    {
      "id": "scepter_of_the_all_knowing",
      "name": "Скипетр Всеведущего",
      "category": "Молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%BA%D0%B8%D0%BF%D0%B5%D1%82%D1%80_%D0%92%D1%81%D0%B5%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE",
      "graceRu": "Лейнделл, столица пепла (Лейнделл, столица пепла)",
      "graceEn": "Leyndell, Capital of Ash",
      "dlc": false,
      "guide": "Гарантированно выпадает за победу над сюжетным боссом <b>Сэр Гидеон Офнир, Всеведущий</b> в <b>Святилище Древа Эрд</b> после сожжения Древа Эрд."
    },
    {
      "id": "flowerstone_gavel",
      "name": "Каменный молот-цветок",
      "category": "Молоты",
      "type": "reward",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D0%BE%D0%BB%D0%BE%D1%82-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%BA",
      "graceRu": "Алтарь драконьего причастия (Зубастая гора)",
      "graceEn": "Grand Altar of Dragon Communion",
      "dlc": true,
      "guide": "Выдаётся в награду от жрицы <b>Флориссакс</b> у <b>Алтаря драконьего причастия</b> (или остаётся на её месте вместе с сердцем жрицы после победы над <b>Бейлом Ужасным</b> на вершине Зубастой горы)."
    },
    {
      "id": "marikas_hammer",
      "name": "Молот Марики",
      "category": "Молоты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%82_%D0%9C%D0%B0%D1%80%D0%B8%D0%BA%D0%B8",
      "graceRu": "Расколотая Марика (Лейнделл, столица пепла)",
      "graceEn": "Fractured Marika",
      "dlc": false,
      "guide": "Обменивается у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола на <b>Воспоминание о Элдене</b> после победы над финальным боссом <b>Зверь Элдена</b>."
    }
  ];

  window.WEAPON_PART_10 = items;
  window.WEAPON_PART10 = items;
  window.WEAPON_LIST = (window.WEAPON_LIST || []).concat(items);
  if (typeof window.registerWeaponPart === 'function') {
    window.registerWeaponPart(10, items);
  }
})();
