exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('films')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {
          "title": "A New Hope",
          "episode_id": 4,
          "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base" +
              ", have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDu" +
              "ring the battle, Rebel\n\nspies managed to steal secret\n\nplans to the Empire's" +
              "\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough " +
              "power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister" +
              " agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n" +
              "\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy." +
              "...",
          "director": "George Lucas",
          "producer": "Gary Kurtz, Rick McCallum",
          "release_date": "5/25/77",
          "url": "http://swapi.co/api/films/1/"
        }, {
          "title": "The Empire Strikes Back",
          "episode_id": 5,
          "opening_crawl": "It is a dark time for the\n\nRebellion. Although the Death\n\nStar has been dest" +
              "royed,\n\nImperial troops have driven the\n\nRebel forces from their hidden\n\nb" +
              "ase and pursued them across\n\nthe galaxy.\n\n\n\nEvading the dreaded Imperial\n" +
              "\nStarfleet, a group of freedom\n\nfighters led by Luke Skywalker\n\nhas establi" +
              "shed a new secret\n\nbase on the remote ice world\n\nof Hoth.\n\n\n\nThe evil lo" +
              "rd Darth Vader,\n\nobsessed with finding young\n\nSkywalker, has dispatched\n\nt" +
              "housands of remote probes into\n\nthe far reaches of space....",
          "director": "Irvin Kershner",
          "producer": "Gary Kurtz, Rick McCallum",
          "release_date": "5/17/80",
          "url": "http://swapi.co/api/films/2/"
        }, {
          "title": "Return of the Jedi",
          "episode_id": 6,
          "opening_crawl": "Luke Skywalker has returned to\n\nhis home planet of Tatooine in\n\nan attempt t" +
              "o rescue his\n\nfriend Han Solo from the\n\nclutches of the vile gangster\n\nJab" +
              "ba the Hutt.\n\n\n\nLittle does Luke know that the\n\nGALACTIC EMPIRE has secret" +
              "ly\n\nbegun construction on a new\n\narmored space station even\n\nmore powerful" +
              " than the first\n\ndreaded Death Star.\n\n\n\nWhen completed, this ultimate\n\nw" +
              "eapon will spell certain doom\n\nfor the small band of rebels\n\nstruggling to r" +
              "estore freedom\n\nto the galaxy...",
          "director": "Richard Marquand",
          "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
          "release_date": "5/25/83",
          "url": "http://swapi.co/api/films/3/"
        }, {
          "title": "The Phantom Menace",
          "episode_id": 1,
          "opening_crawl": "Turmoil has engulfed the\n\nGalactic Republic. The taxation\n\nof trade routes t" +
              "o outlying star\n\nsystems is in dispute.\n\n\n\nHoping to resolve the matter\n" +
              "\nwith a blockade of deadly\n\nbattleships, the greedy Trade\n\nFederation has s" +
              "topped all\n\nshipping to the small planet\n\nof Naboo.\n\n\n\nWhile the Congres" +
              "s of the\n\nRepublic endlessly debates\n\nthis alarming chain of events,\n\nthe " +
              "Supreme Chancellor has\n\nsecretly dispatched two Jedi\n\nKnights, the guardians" +
              " of\n\npeace and justice in the\n\ngalaxy, to settle the conflict....",
          "director": "George Lucas",
          "producer": "Rick McCallum",
          "release_date": "5/19/99",
          "url": "http://swapi.co/api/films/4/"
        }, {
          "title": "Attack of the Clones",
          "episode_id": 2,
          "opening_crawl": "There is unrest in the Galactic\n\nSenate. Several thousand solar\n\nsystems hav" +
              "e declared their\n\nintentions to leave the Republic.\n\n\n\nThis separatist mov" +
              "ement,\n\nunder the leadership of the\n\nmysterious Count Dooku, has\n\nmade it " +
              "difficult for the limited\n\nnumber of Jedi Knights to maintain \n\npeace and or" +
              "der in the galaxy.\n\n\n\nSenator Amidala, the former\n\nQueen of Naboo, is retu" +
              "rning\n\nto the Galactic Senate to vote\n\non the critical issue of creating\n\n" +
              "an ARMY OF THE REPUBLIC\n\nto assist the overwhelmed\n\nJedi....",
          "director": "George Lucas",
          "producer": "Rick McCallum",
          "release_date": "5/16/02",
          "url": "http://swapi.co/api/films/5/"
        }, {
          "title": "Revenge of the Sith",
          "episode_id": 3,
          "opening_crawl": "War! The Republic is crumbling\n\nunder attacks by the ruthless\n\nSith Lord, Co" +
              "unt Dooku.\n\nThere are heroes on both sides.\n\nEvil is everywhere.\n\n\n\nIn a" +
              " stunning move, the\n\nfiendish droid leader, General\n\nGrievous, has swept int" +
              "o the\n\nRepublic capital and kidnapped\n\nChancellor Palpatine, leader of\n\nth" +
              "e Galactic Senate.\n\n\n\nAs the Separatist Droid Army\n\nattempts to flee the b" +
              "esieged\n\ncapital with their valuable\n\nhostage, two Jedi Knights lead a\n\nde" +
              "sperate mission to rescue the\n\ncaptive Chancellor....",
          "director": "George Lucas",
          "producer": "Rick McCallum",
          "release_date": "5/19/05",
          "url": "http://swapi.co/api/films/6/"
        }, {
          "title": "The Force Awakens",
          "episode_id": 7,
          "opening_crawl": "Luke Skywalker has vanished.\n\nIn his absence, the sinister\n\nFIRST ORDER has " +
              "risen from\n\nthe ashes of the Empire\n\nand will not rest until\n\nSkywalker, t" +
              "he last Jedi,\n\nhas been destroyed.\n\n \n\nWith the support of the\n\nREPUBLIC" +
              ", General Leia Organa\n\nleads a brave RESISTANCE.\n\nShe is desperate to find h" +
              "er\n\nbrother Luke and gain his\n\nhelp in restoring peace and\n\njustice to the" +
              " galaxy.\n\n \n\nLeia has sent her most daring\n\npilot on a secret mission\n\nt" +
              "o Jakku, where an old ally\n\nhas discovered a clue to\n\nLuke's whereabouts....",
          "director": "J. J. Abrams",
          "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
          "release_date": "12/11/15",
          "url": "http://swapi.co/api/films/7/"
        }
      ]);
    });
};
