define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        name: "Le temps d'une pinte",
        city: 'Trois-Rivière',
        street: 'Rue Notre Dame Centre',
        number: '1465',
        zip: 'G9A 4X4',
        lat: 46.341232,
        lng: -72.540404,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 691-3371',
          email: 'test@example.com'
        },
        website: 'letempsdunepinte.ca',
        type: "Bar"
      }, {
        id: 2,
        name: "Gambrinus Brasserie Artisanale",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '3160',
        zip: 'G8Z 1V6',
        lat: 46.350535,
        lng: -72.572628,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        website: 'http://www.gambrinus.qc.ca/',
        type: "Bar"
      }, {
        id: 3,
        name: "Crêperie Dc",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '855',
        zip: 'G8Z 3W4',
        lat: 46.359321,
        lng: -72.570051,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Restaurant"
      }, {
        id: 4,
        name: "Sushizo",
        city: 'Trois-Rivière',
        street: 'Rue Royale',
        number: '1350',
        zip: 'G9A 4J4',
        lat: 46.343280,
        lng: -72.543860,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 840-2919',
          email: 'test@example.com'
        },
        type: "Restaurant"
      }, {
        id: 5,
        name: "La Maison de Débauche par le Carlito",
        city: 'Trois-Rivière',
        street: 'Rue des Forges',
        number: '361',
        zip: 'G9A 4S8',
        lat: 46.341934,
        lng: -72.543890,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Bar"
      }, {
        id: 6,
        name: "Banh Thai Restaurant",
        city: 'Trois-Rivière',
        street: 'Boul Gene-H.-Kruger',
        number: '4730',
        zip: 'G9A 4N1',
        lat: 46.324686,
        lng: -72.565321,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 840-2833',
          email: 'test@example.com'
        },
        website: 'banhthai.ca',
        type: "Restaurant"
      },{
        id: 7,
        name: "ELEPHANT",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '820',
        zip: 'G8Z 3W2',
        lat: 46.360328,
        lng: -72.571055,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 840-6923',
          email: 'test@example.com'
        },
        type: "Bar"
      },{
        id: 8,
        name: "Librairie Poirier",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '1374',
        zip: 'G8Z 4L5',
        lat: 46.353343,
        lng: -72.578717,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 379-8980',
          email: 'test@example.com'
        },
        website: 'librairiepoirier.ca',
        type: "Autre"
      },{
        id: 9,
        name: "L'Oriflamme",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '1900',
        zip: 'G8Z 0A3',
        lat: 46.345672,
        lng: -72.573886,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Bar"
      },{
        id: 10,
        name: "Café Morgane",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '3790',
        zip: 'G8Y 4R2',
        lat: 46.354528,
        lng: -72.582336,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 375-8821',
          email: 'test@example.com'
        },
        type: "Restaurant"
      },{
        id: 11,
        name: "Le temps d'une pinte",
        city: 'Trois-Rivière',
        street: 'Rue Notre Dame Centre',
        number: '1465',
        zip: 'G9A 4X4',
        lat: 46.341232,
        lng: -72.540404,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 691-3371',
          email: 'test@example.com'
        },
        website: 'letempsdunepinte.ca',
        type: "Bar"
      }, {
        id: 12,
        name: "Gambrinus Brasserie Artisanale",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '3160',
        zip: 'G8Z 1V6',
        lat: 46.350535,
        lng: -72.572628,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        website: 'http://www.gambrinus.qc.ca/',
        type: "Bar"
      }, {
        id: 13,
        name: "Crêperie Dc",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '855',
        zip: 'G8Z 3W4',
        lat: 46.359321,
        lng: -72.570051,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Restaurant"
      }, {
        id: 14,
        name: "Sushizo",
        city: 'Trois-Rivière',
        street: 'Rue Royale',
        number: '1350',
        zip: 'G9A 4J4',
        lat: 46.343280,
        lng: -72.543860,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 840-2919',
          email: 'test@example.com'
        },
        type: "Restaurant"
      }, {
        id: 15,
        name: "La Maison de Débauche par le Carlito",
        city: 'Trois-Rivière',
        street: 'Rue des Forges',
        number: '361',
        zip: 'G9A 4S8',
        lat: 46.341934,
        lng: -72.543890,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Bar"
      }, {
        id: 16,
        name: "Banh Thai Restaurant",
        city: 'Trois-Rivière',
        street: 'Boul Gene-H.-Kruger',
        number: '4730',
        zip: 'G9A 4N1',
        lat: 46.324686,
        lng: -72.565321,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 840-2833',
          email: 'test@example.com'
        },
        website: 'banhthai.ca',
        type: "Restaurant"
      },{
        id: 17,
        name: "ELEPHANT",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '820',
        zip: 'G8Z 3W2',
        lat: 46.360328,
        lng: -72.571055,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 840-6923',
          email: 'test@example.com'
        },
        type: "Bar"
      },{
        id: 18,
        name: "Librairie Poirier",
        city: 'Trois-Rivière',
        street: 'Boulevard des Récollets',
        number: '1374',
        zip: 'G8Z 4L5',
        lat: 46.353343,
        lng: -72.578717,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 379-8980',
          email: 'test@example.com'
        },
        website: 'librairiepoirier.ca',
        type: "Autre"
      },{
        id: 19,
        name: "L'Oriflamme",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '1900',
        zip: 'G8Z 0A3',
        lat: 46.345672,
        lng: -72.573886,
        dates: [
          'Lundi: Fermé',
          'Mardi: Fermé',
          'Mercredi: Fermé',
          'Jeudi: 11:00 AM - 3:00 AM',
          'Vendredi: 11:00 AM - 3:00 AM',
          'Samedi: 11:00 AM - 3:00 AM',
          'Dimanche: 11:00 AM - 3:00 AM'
        ],
        contact: {
          tel: '(819) 694-4484',
          email: 'test@example.com'
        },
        type: "Bar"
      },{
        id: 20,
        name: "Café Morgane",
        city: 'Trois-Rivière',
        street: 'Boulevard des Forges',
        number: '3790',
        zip: 'G8Y 4R2',
        lat: 46.354528,
        lng: -72.582336,
        dates: [
          'Lundi: 8:00 AM - 9:00 PM',
          'Mardi: 8:00 AM - 9:00 PM',
          'Mercredi: 8:00 AM - 9:00 PM',
          'Jeudi: 8:00 AM - 11:00 PM',
          'Vendredi: 11:00 AM - 11:00 PM',
          'Samedi: 11:00 AM - 11:00 PM',
          'Dimanche: 11:00 AM - 9:00 PM'
        ],
        contact: {
          tel: '(819) 375-8821',
          email: 'test@example.com'
        },
        type: "Restaurant"
      }];

      this.pages = [{
        alias: 'impress',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Impress',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Contact',
        icon: 'ion-paper-airplane'
      }];
    }
  ]);
});
