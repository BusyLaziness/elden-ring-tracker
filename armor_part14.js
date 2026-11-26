/* ER_ARMOR_DB_PART | file: armor_part14.js | part: 14 | items: 5/5 (187-191) */
(function () {
  'use strict';

  var items = [
    {
      id: 'upper_class_robe',
      name: 'Одеяние знати',
      type: 'loot',
      wiki: 'https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B4%D0%B5%D1%8F%D0%BD%D0%B8%D0%B5_%D0%B7%D0%BD%D0%B0%D1%82%D0%B8',
      graceRu: 'Восточный бастион столицы (Лейнделл, столица королевства)',
      graceEn: 'East Capital Rampart',
      dlc: false,
      slots: [null, 'Одеяние знати', null, null],
      guide: 'Лежит на трупе за залом с Парфюмерами к югу от благодати <b>Восточный бастион столицы</b> в <b>Лейнделле, столице королевства</b> (необходимо подобрать до превращения Лейнделла в Столицу пепла). Также продаётся у <b>Торговца-отшельника</b> в лачуге в северо-восточной части <b>Окраин столицы</b> (за <b>2 400 рун</b>).'
    },
    {
      id: 'fell_omen_cloak',
      name: 'Накидка Ужасного Знамения',
      type: 'buy',
      wiki: 'https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0_%D0%A3%D0%B6%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE_%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F',
      graceRu: 'Трон Элдена (Лейнделл, столица королевства)',
      graceEn: 'Elden Throne',
      dlc: false,
      slots: [null, 'Накидка Ужасного Знамения', null, null],
      guide: 'Открывается в продаже у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола за <b>12 000 рун</b> после победы над сюжетным боссом <b>Морготт, король знамений</b> в <b>Лейнделле, столице королевства</b> (у благодати <b>Трон Элдена</b>).'
    },
    {
      id: 'lord_of_bloods_robe',
      name: 'Одеяние Повелителя Крови',
      type: 'buy',
      wiki: 'https://eldenring.fandom.com/ru/wiki/%D0%9E%D0%B4%D0%B5%D1%8F%D0%BD%D0%B8%D0%B5_%D0%9F%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8F_%D0%9A%D1%80%D0%BE%D0%B2%D0%B8',
      graceRu: 'Кокон Эмпирея (Дворец Могвинов)',
      graceEn: 'Cocoon of the Empyrean',
      dlc: false,
      slots: [null, 'Одеяние Повелителя Крови', null, null],
      guide: 'Открывается в продаже у <b>Энии, чтицы Пальцев</b> в Крепости Круглого стола за <b>15 000 рун</b> после победы над полубогом <b>Мог, Повелитель Крови</b> в <b>Дворце Могвинов</b> (у благодати <b>Кокон Эмпирея</b>).'
    },
    {
      id: 'tree_surcoat',
      name: 'Накидка (дерево)',
      type: 'buy',
      wiki: 'https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0_(%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)',
      graceRu: 'Перекрёсток тракта Альтуса (Плато Альтус)',
      graceEn: 'Altus Highway Junction',
      dlc: false,
      slots: [null, 'Накидка (дерево)', null, null],
      guide: 'Продаётся у <b>Торговца-кочевника</b> на южном конце разрушенного Лесного моста на <b>Плато Альтус</b> (на северо-восток от благодати <b>Перекрёсток тракта Альтуса</b>, рядом со знаками призыва у Врат ущелья) за <b>3 500 рун</b>.'
    },
    {
      id: 'eye_surcoat',
      name: 'Накидка (глаз)',
      type: 'loot',
      wiki: 'https://eldenring.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0_(%D0%B3%D0%BB%D0%B0%D0%B7)',
      graceRu: 'Рикард, богохульный владыка (Вулкан Гельмир)',
      graceEn: 'Rykard, Lord of Blasphemy',
      dlc: false,
      slots: [null, 'Накидка (глаз)', null, null],
      guide: 'Лежит на трупе у северо-восточной стены подземной пещеры-арены босса <b>Рикард, богохульный владыка</b> в <b>Вулкановом поместье</b> (появляется после победы над Рикардом рядом с благодатью <b>Рикард, богохульный владыка</b>).'
    }
  ];

  window.ARMOR_PART_14 = items;
  window.ARMOR_PART14 = items;
  if (typeof window.registerArmorPart === 'function') {
    window.registerArmorPart(14, items);
  }
})();
