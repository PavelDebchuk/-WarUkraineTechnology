const data = [
  // {
  //   images:'',
  //   type:'',
  //   model:'',
  //   yearOfIssue:'',
  //   country:'',
  //   crev:'',
  //   wiki:'',
  // },
  {
    images:
      'https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/259706/pt91twardymspo09jpg/large.jpg',
    type: 'танк',
    model: 'PT-91',
    yearOfIssue: '1995',
    country: 'Польша',
    crev: '3',
    wiki: 'https://ru.wikipedia.org/wiki/PT-91',
  },
  {
    images: 'https://mil.in.ua/wp-content/uploads/2010/06/bmp-1.jpg',
    type: 'бмп',
    model: 'бмп-1',
    yearOfIssue: '1966',
    country: 'СССЗ',
    crev: '3-8',
    wiki: 'https://ru.wikipedia.org/wiki/%D0%91%D0%9C%D0%9F-1',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/920x465/e/81/86200d08-8f94f05812c501aa67646917635c381e.png?v=4469_1',
    type: 'літак',
    model: 'Миг-29',
    yearOfIssue: '',
    country: 'СССР',
    crev: '1',
    wiki: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%93-29',
  },
  {
    images:
      'https://novynarnia.com/wp-content/uploads/2022/04/bushmaster-avstraliya.jpg',
    type: 'Бронеавто',
    model: 'Bushmaster',
    yearOfIssue: '1998',
    country: 'Австралия',
    crev: '1-9',
    wiki: 'https://ru.wikipedia.org/wiki/Bushmaster',
  },
  {
    images: 'https://img.pravda.com/images/doc/b/c/bc24607-e5cdb66-1111.avif',
    type: 'БПЛА',
    model: 'Shahed_136',
    yearOfIssue: '',
    country: 'Iran',
    crev: '',
    wiki: 'https://ru.wikipedia.org/wiki/Shahed_136',
  },
  {
    images:
      'https://static.ukrinform.com/photos/2023_09/thumb_files/630_360_1695397952-885.jpg',
    type: 'рсзо',
    model: 'ATACMS',
    yearOfIssue: '1991',
    country: 'США',
    crev: '',
    wiki: 'https://ru.wikipedia.org/wiki/MGM-140_ATACMS',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/1200x630/5/31/b8ca165c-81a8b713823cde79c35c302ace9d0315.jpg?v=3632_1',
    type: 'бпла',
    model: 'Switchblade',
    yearOfIssue: '2011',
    country: 'США',
    crev: '',
    wiki: 'https://ru.wikipedia.org/wiki/Switchblade_(%D0%91%D0%9F%D0%9B%D0%90)',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/920x465/d/e1/e91ef435-755b53838130da28a6506b17bea10e1d.jpeg?v=6652_1',
    type: 'сау',
    model: 'PzH 2000',
    yearOfIssue: '1998',
    country: 'Німетчина',
    crev: '5',
    wiki: 'https://ru.wikipedia.org/wiki/PzH_2000',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/920x465/5/91/f4cc3007-7ecceef023ca2f4dde33d2d43bbb8915.jpg?v=2562_1',
    type: 'ППО',
    model: 'IRIS-T',
    yearOfIssue: '2005',
    country: 'Німетчинна',
    crev: '',
    wiki: 'https://ru.wikipedia.org/wiki/IRIS-T',
  },
  {
    images: 'https://kor.ill.in.ua/m/610x385/2814909.png',
    type: 'танк',
    model: 'Challenger 2',
    yearOfIssue: '1994-2005',
    country: 'Great Britain',
    crev: '4',
    wiki: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BB%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80_2',
  },
  {
    images:
      'https://www.rbc.ua/static/img/1/2/1280px_openwater2017qualifying_27_650x410.jpg',
    type: 'танк',
    model: 'Т-72',
    yearOfIssue: '1973-2005',
    country: 'СССР',
    crev: '3',
    wiki: 'https://ru.wikipedia.org/wiki/%D0%A2-72',
  },
  {
    images: 'https://static.ukrinform.com/photos/2020_03/1585307894-5795.jpeg',
    type: 'танк',
    model: 'Т-80',
    yearOfIssue: '1976',
    country: 'СССР',
    crev: '3',
    wiki: 'https://ru.wikipedia.org/wiki/%D0%A2-80',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/1200x630/a/70/f59f3e64-893a85eb01b3d6bdcf5d513cbef9170a.jpg?v=7233_1',
    type: 'літак',
    model: 'F-16',
    yearOfIssue: '1978',
    country: 'США',
    crev: '1',
    wiki: 'https://uk.wikipedia.org/wiki/F-16_Fighting_Falcon',
  },
  {
    images:
      'https://mil.in.ua/wp-content/uploads/2022/10/TRML_4D_ret_2_200dpi_1024x700.jpg',
    type: 'РЛС',
    model: 'TRML',
    yearOfIssue: '',
    country: 'Німетчина',
    crev: '',
    wiki: 'https://uk.wikipedia.org/wiki/TRML',
  },
  {
    images:
      'https://imgcdn.cna.com.tw/Eng/WebEngPhotos/800/2023/20230510/1024x768_81613422152.jpg',
    type: 'РСЗО',
    model: 'Himars',
    yearOfIssue: '2003',
    country: 'США',
    crev: '',
    wiki: 'https://ru.wikipedia.org/wiki/M142_HIMARS',
  },
  {
    images:
      'https://focus.ua/static/storage/thumbs/1088x/6/ba/94ddad1f-88ecb132f98f19f5d2fdd40998aa0ba6.jpg',
    type: 'РСЗО',
    model: 'БМ21-«Град»',
    yearOfIssue: '	1960 — 1988',
    country: 'СССР',
    crev: '6',
    wiki: 'https://uk.wikipedia.org/wiki/%D0%91%D0%9C-21_%C2%AB%D0%93%D1%80%D0%B0%D0%B4%C2%BB',
  },
  {
    images:
      'https://finance.ua/uploads/media/article-image/01/6711-02.jpg?v=1-0',
    type: 'БМП',
    model: 'Bradley',
    yearOfIssue: '1980-1989',
    country: 'США',
    crev: '3-7',
    wiki: 'https://ru.wikipedia.org/wiki/M2_%C2%AB%D0%91%D1%80%D1%8D%D0%B4%D0%BB%D0%B8%C2%BB',
  },
  {
    images:
      'https://c.files.bbci.co.uk/1159F/production/_105117017_tass_26680294.jpg',
    type: 'танк',
    model: 'T-34',
    yearOfIssue: 1939,
    country: 'СССР',
    crev: 4,
    wiki: 'https://ru.wikipedia.org/wiki/%D0%A2-34',
  },
  {
    images:
      'https://imagedelivery.net/4_JwVYxosZqzJ7gIDJgTLA/a663116b-a7f3-4e3e-c185-cd0bf0099a00/16x9',
    type: 'танк',
    model: 'Abrams',
    yearOfIssue: 1980,
    country: 'США',
    crev: 4,
    wiki: 'https://ru.wikipedia.org/wiki/M1_%C2%AB%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%81%C2%BB',
  },
  {
    images:
      'https://media.slovoidilo.ua/media/publications/18/172962/leopard-2_large.jpg',
    type: 'танк',
    model: 'Leopard 2',
    yearOfIssue: 1979,
    country: 'Німеччина',
    crev: 4,
    wiki: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BE%D0%BF%D0%B0%D1%80%D0%B4_2',
  },
  {
    images:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sukhoi_Su-25_in_Ukrainian_service_269_n_%28cropped%29.jpg',
    type: 'літак',
    model: 'Су-25',
    yearOfIssue: 1981,
    country: 'СССР',
    crev: 1,
    wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D1%83-25',
  },
  {
    images:
      'https://img.tsn.ua/cached/189/tsn-45ddb1c1da8bc78232f746637fde253d/thumbs/1036x648/10/21/1febcba1dcded030b36bbf02ccff2110.jpeg',
    type: 'САУ',
    model: 'CAESAR',
    yearOfIssue: 2002,
    country: 'Франція',
    crev: 4 - 5,
    wiki: 'https://ru.wikipedia.org/wiki/CAESAR_(%D0%A1%D0%90%D0%A3)',
  },
];

export default data;
