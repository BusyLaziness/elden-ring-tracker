/* ER_SHIELD_DB_PART | file: shield_part5.js | part: 5 | items: 2/2 (Tarnished Pack) */
(function () {
  'use strict';

  var items = [
    {
      "id": "silver_grooved_shield",
      "name": "Серебряный рубчатый щит",
      "category": "Средние щиты",
      "type": "buy",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D1%8F%D0%BD%D1%8B%D0%B9_%D1%80%D1%83%D0%B1%D1%87%D0%B0%D1%82%D1%8B%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Храм Беллума (Озёрная Лиурния)",
      "graceEn": "Bellum Church",
      "dlc": true,
      "guide": "Стартовый щит класса <b>Идский рыцарь</b> (<i>Tarnished Pack</i>). Остальные классы могут купить его у <b>Торговца-кочевника</b> на дороге к северу от благодати <b>Храм Беллума</b> (на пути к Великому подъёмнику Дектуса в Озёрной Лиурнии) за <b>2 000 рун</b>."
    },
    {
      "id": "ritual_thrusting_shield",
      "name": "Ритуальный колющий щит",
      "category": "Колющие щиты",
      "type": "loot",
      "wiki": "https://eldenring.fandom.com/ru/wiki/%D0%A0%D0%B8%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BB%D1%8E%D1%89%D0%B8%D0%B9_%D1%89%D0%B8%D1%82",
      "graceRu": "Глубокий колодец Сиофры (Звёздные пустоши)",
      "graceEn": "Deep Siofra Well",
      "dlc": true,
      "guide": "Лежит на трупе в первой комнате за спиной гигантского кувшина-воина перед входом в <b>Колизей Звёздных пустошей</b> в регионе <b>Драконий курган Грейолл</b> (<i>Tarnished Pack</i>; чтобы попасть в ущелье, поднимитесь на лифте от благодати <b>Глубокий колодец Сиофры</b>, используя <b>2 мечевидных ключа</b>, и пробегите мимо двух стражей-големов)."
    }
  ];

  window.SHIELD_PART_5 = items;
  window.SHIELD_PART5 = items;
  window.SHIELD_LIST = (window.SHIELD_LIST || []).concat(items);
  if (typeof window.registerShieldPart === 'function') {
    window.registerShieldPart(5, items);
  }
})();
