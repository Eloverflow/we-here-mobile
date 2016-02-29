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
        website: 'http://www.letempsdunepinte.ca',
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Bar","Tard", "Nuit blanche"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Bar","Tard", "Nuit blanche"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant","Tôt", "Déjeuner"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
        "15 % de rabais sur l'ensemble du menu à la carte.",
        "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
      ],
        "filters": ["Restaurant","Sushi", "Diner", "Souper"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Restaurant","Souper"]
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
        website: 'http://www.banhthai.ca',
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant","Thaï", "Souper"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Restaurant","Indien"]
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
        website: 'http://www.librairiepoirier.ca',
        type: "Autre",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15% de rabais"
        ],
        "filters": ["Étudier"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant", "Sport", "Souper"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Du café tout simplement délicieux et rapide! À partir de 35$ pour 100 capsules de café ou de thé Lavica riche en saveurs et compatible Nespresso©"
        ],
        "filters": ["Café","matin", "Après-midi"]
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
        website: 'http://www.letempsdunepinte.ca',
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Bar","Tard"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Bar","Tard", "Nuit blanche"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant","Souper"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant","Souper"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Restaurant","Souper"]
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
        website: 'http://www.banhthai.ca',
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15 % de rabais sur l'ensemble du menu à la carte.",
          "Obtenez GRATUITEMENT une entrée, applicable à l'achat d'un repas"
        ],
        "filters": ["Restaurant","Souper"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Restaurant","Souper"]
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
        website: 'http://www.librairiepoirier.ca',
        type: "Autre",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "15% de rabais"
        ],
        "filters": ["Étudier"]
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
        type: "Bar",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Première bière gratuite!",
          "Obtenez 10% de rabais en présentant votre carte étudiante."
        ],
        "filters": ["Restaurant","Souper"]
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
        type: "Restaurant",
        ratings: [
          {
            "rate": 5,
            "name": "Vincent Rouleau",
            comment: "De passage dans la région nous cherchions un coin sympa pour manger. Nous sommes rentrés au Temps d'une pinte et nous n'avons pas été déçu ! Accueil chaleureux, bonnes bières, service au top et plats savoureux!"
          },
          {
            "rate": 5,
            "name": "Francis Vallieres",
            comment: "Le meilleur endroit pour prendre une bière à Trois-Rivières. Ah oui, la boustifaille et le café sont pas piqué des vers ;)"
          },
          {
            "rate": 4,
            "name": "Antoine Chené-Côté",
            comment: "Très agréable. L'endroit idéal pour s'arrêter prendre une bière avec des amis. Par contre le menu est assez restreint et peut ne pas convenir à tous les goûts. Très bien cuisiné toutefois"
          }
        ],
        promotions: [
          "Du café tout simplement délicieux et rapide! À partir de 35$ pour 100 capsules de café ou de thé Lavica riche en saveurs et compatible Nespresso©"
        ],
        "filters": ["Restaurant","Souper"]
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

      this.categories = [
        {
          name: "Bar",
          isActive: true
        },
        {
          name: "Restaurant",
          isActive: true
        },
        {
          name: "Bistro",
          isActive: true
        },
        {
          name: "Musique",
          isActive: true
        },
        {
          name: "Cinéma",
          isActive: true
        },
        {
          name: "Théâtre",
          isActive: true
        },
        {
          name: "Sport",
          isActive: true
        },
        {
          name: "Artistique",
          isActive: true
        },
        {
          name: "Sushi",
          isActive: true
        },
        {
          name: "Thaï",
          isActive: true
        },
        {
          name: "Indien",
          isActive: true
        },
        {
          name: "Crèmerie",
          isActive: true
        },
        {
          name: "Enfant",
          isActive: true
        },
        {
          name: "Autre",
          isActive: true
        }
      ];
      this.moods = [
        {
          name: "Social",
          isActive: true
        },
        {
          name: "Boire un verre",
          isActive: true
        },
        {
          name: "Étudier",
          isActive: true
        },
        {
          name: "Dancer",
          isActive: true
        },
        {
          name: "Relax",
          isActive: true
        },
        {
          name: "Discuter",
          isActive: true
        },
        {
          name: "Nostalgie",
          isActive: true
        }
      ];
      this.times = [
        {
          name: "Ce soir",
          isActive: true
        },
        {
          name: "Demain AM",
          isActive: true
        },
        {
          name: "Demain PM",
          isActive: true
        },
        {
          name: "Cette semaine",
          isActive: true
        },
        {
          name: "Fin de semaine prochaine",
          isActive: true
        },
        {
          name: "Matin",
          isActive: true
        },
        {
          name: "Après-midi",
          isActive: true
        },
        {
          name: "Soir",
          isActive: true
        },
        {
          name: "Tôt le matin",
          isActive: true
        },
        {
          name: "Nuit blanche",
          isActive: true
        }];
    }
  ]);
});
