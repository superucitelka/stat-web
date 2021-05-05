// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)

// Články s historickými zajímavostmi
const articles = [{
      "title": "Slavná bitva na Vítkově: Vítězství husitů a potupa křižáků",
      "text": "Obrovské křižácké vojsko se rozložilo kolem Prahy, a když ho 9. července posílily oddíly rakouského vévody Albrechta Habsburského, dosáhlo své největší síly. Přesto jich na úplné obležení pražských měst bylo málo, Žižka stále z Vítkova kontroloval východní oblast.",
      "date": "14.7.1420",
      "author": "Jindřich Kačer",
      "source": "https://www.stoplusjednicka.cz/slavna-bitva-na-vitkove-vitezstvi-husitu-potupa-krizaku",
      "likes": "15",
      "dislikes": "5",
      "gallery": [
         "adolf_liebscher_-_bitva_na_hore_vitkove_dne_14._cervence_roku_1420.jpg",
         "jan_vilimek_-_jan_zizka_z_trocnova-2.jpg",
         "pisanello_024.jpg"
      ]
   },
   {
      "title": "Diplomat Jiří z Poděbrad: Co dělal, než se stal českým králem?",
      "text": "Musel snést hanlivé přídomky od nepřátel, osočování závistivých spojenců i zradu toho, kterému dopomohl ke království. Ač neměl královskou krev, přesto se jím Jiří z Poděbrad stal. Nadávali mu do panchartů, kterým zřejmě byl. Již od sedmi let byl sirotkem uprostřed víru husitských válek. Posmívali se mu kvůli jeho obézní postavě a považovali ho za neschopného rytířských soubojů. Vyčítali mu nekrálovský původ. Ačkoli katolíky toleroval, oni ho osočovali jako kacíře. Přes to všechno dokázal vystoupit po mocenských stupních až na samý vrchol. Kališnický král Jiří z Poděbrad byl zkrátka neobyčejně silnou osobností. Dokázal prozíravě reagovat na soudobé dění a úspěšně vládnout nejen své zemi, ale také sám sobě…",
      "date": "3.9.1448",
      "author": "Robert Vlk",
      "source": "https://www.stoplusjednicka.cz/diplomat-jiri-z-podebrad-co-delal-nez-se-stal-ceskym-kralem",
      "likes": "25",
      "dislikes": "3",
      "gallery": [
         "vaclav_brozik_-_volba.jpg",
      ]
   },
   {
      "title": "Muž s promítačkou: První stálé kino v Praze založil Viktor Ponrepo",
      "text": "Filmové projekce se zpočátku uskutečňovaly v kavárnách nebo nočních podnicích a přesně tak tomu bylo i v českých zemích. Na šíření kinematografie se podílela řada dnes už zapomenutých nadšenců, kteří si pořídili potřebné vybavení a putovali od města k městu. K založení stálého kina se ale z obavy o nedostatek diváků dlouho nikdo neměl. Jedním z prvních odvážlivců se stal  Viktor Ponrepo.",
      "date": "1907",
      "author": "Robert Šimek",
      "source": "https://www.stoplusjednicka.cz/muz-s-promitackou-prvni-stale-kino-v-praze-zalozil-viktor-ponrepo",
      "likes": "24",
      "dislikes": "1",
      "gallery": [
         "ponrepo1.jpg",
         "ponrepo2.jpg",
      ]
   },
   {
      "title": "Pokrok na odiv světu: V roce 1891 se v Praze konala Jubilejní zemská výstava",
      "text": "Velkou zásluhu na uskutečnění výstavy měla pražská obchodní komora a její předseda Bohumil Bondy. Roku 1887 vznikla z jeho popudu komise, která nakonec ustanovila zřízení stálé výstavní budovy v bubenečském parku. O rok později se rozhodlo o termínu výstavy a jejím názvu. Schválené výdaje činily 1 132 000 zlatých. Podnik si vyžadoval postavení mnoha budov, což se ovšem potkalo s velkou nepřízní počasí. Navzdory povodni v září 1890 a silným mrazům na přelomu let 1890 a 1891 byla výstava slavnostně zahájena 15. května 1891. Událost doprovázely Dvořákovy fanfáry a úvodní projev pronesl arcivévoda Karel Ludvík. Později ji navštívil i sám císař František Josef I. ",
      "date": "15.5.1891",
      "author": "Ilona Šťastná",
      "source": "https://www.stoplusjednicka.cz/pokrok-na-odiv-svetu-v-roce-1891-se-v-praze-konala-jubilejni-zemska-vystava",
      "likes": "14",
      "dislikes": "2",
      "gallery": [
         "bruner3_cisar.jpg",
      ]
   }
];

$(function () {
   
   /* Po kliknutí na některý z nadpisů h2 se střídavě zobrazí nebo zmizí blok (div) pod nadpisem */
   $("h2").on("click", function () {
      /* $(this) = selektor, který ukazuje na právě aktivní objekt, v tomto případě tedy na jeden z nadpisů h2, na který bylo kliknuto */
      /* Následuje tzv. traverzování: */
      /* parents(".row") - hledá mezi nadřízenými prvky (rodiči) první, který obsahuje třídu .row */
      /* next() - ukáže na nejbližšího sourozence; v tomto případě další div */
      /* toggle() - metoda, která střídavě skrývá|odkrývá vybrané prvky */
      $(this).parents(".row").next().toggle(1000);
   });

   /* V první části je tabulka s významnými událostmi z dějin dané země */
   function eventsBlock(events) {
      /* Data jsou do tabulky načtena z proměnné events */
      /* Všimněte si, že v bloku .event-evaluation je použit ternární operátor, který rozhoduje o zobrazení ikony + nebo -*/
      events.forEach((event) => {
         /* Metoda append() přidává nové prvky do vybrané částí stránky (vždy za už existující obsah) */
         $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
      });

      /* Po načtení stránky se skryjí všechny detaily událostí */
      $(".event-detail").hide();

      /* Při najetí kurzoru myši na ikonu nebo odkaz dojde k následujícím akcím: */
      $(".event-name i, .event-name a").on("mouseover", function () {
         /* Ze všech řádků tabulky se odstraní dvě uvedené třídy */
         $("#udalosti tr").removeClass("bg-secondary text-white");
         /* Tyto dvě třídy sepřidají jen rodičovskému řádku (.parents("tr")) toho (this) prvku, na který zrovna ukázala myš */
         $(this).parents("tr").addClass("bg-secondary text-white");
         /* Nejprve zajistíme skrytí všech detailů událostí */
         $(".event-detail").hide();
         /* Poté ukážeme pouze ten detail, který následuje po prvku, na který zrovna ukázala myš */
         /* Zde je použito tzv. traverzování - metodou parent() nejprve "traverzujeme" na rodiče aktivního prvku (odstavec), 
            poté metodou next() vybereme nejbližšího následujícího sourozence (odstavec s detailem) */
         /* Zároveň zde, ale i na jiných místech, využíváme tzv. řetězení (chaining), kdy můžeme volat několik metod v řadě */
         $(this).parent().next().show(500);
      });
   }

   fetch('../historie/data/events.json')
      .then(response => {
         console.log(response);
         return response.json()
      })
      .then(json => {
         console.log(json);
         eventsBlock(json);
      })
      .catch(function (error) {
         console.error('Chyba: \n', error);
      });


   /* Druhá část stránky obsahuje seznam slavných postav a vedle něj se po kliknutí zobrazuje karta s podrobnějším profilem osobnosti */
   function heroesBlock(heroes) {
      /* Nejprve jsou načtena jména osobností z proměnné heroes do seznamu upraveného pomocí tříd Bootstrapu */
      heroes.forEach((hero) => {
         $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
      });
      /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
      $("#postavy li:first").addClass('active');
      /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */
      fillPersonCard(heroes, heroes[0].name);

      /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
      $("#postavy li").on("click", function () {
         /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
         $("#postavy li").removeClass("active");
         /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
         $(this).addClass("active");
         /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
         let person = $(this).text();
         /* Celý blok označený id portret se nejprve zaroluje a po dovršení této akce se zavolá tzv. callback funkce */
         $("#portret").slideUp(1000, function () {
            /* Součástí callback funkce je změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
            fillPersonCard(heroes, person);
         });
         /* Blok portret se během 1 sekundy vyroluje */
         $("#portret").slideDown(1000);
      });

   }
   /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
   function fillPersonCard(heroes, person) {
      /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
      let hero = heroes.find(item => {
         return item.name === person
      });
      /* Metoda html() umožnuje vložení HTML kódu (odpovídá innerHTML() v JS) */
      $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
      /* Metoda text() umožnuje vložení "holého" textu (odpovídá innerText() v JS) */
      $(".card-title").text(hero.name);
      $(".card-text").text(hero.biography);
      $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
      /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
      $(".gallery").empty();
      /* V cyklu budou přidány nové bloky s fotkami osobnosti */
      for (let i = 0; i < hero.portraits.length; i++) {
         $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
      }
   }

   fetch('../historie/data/heroes.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      heroesBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });

   /*
   async function getJSON(JSONfile, action) {
      const response = await fetch(JSONfile);
      const json = await response.json();
      action(json)
   }
   
   getJSON('../historie/data/events.json', eventsBlock).catch(error => {
      console.error('Chyba: \n', error);
   });
   
   getJSON('../historie/data/heroes.json', heroesBlock).catch(error => {
      console.error('Chyba: \n', error);
   });
*/
   /* Třetí část stránky je věnována článkům z historie země */
   /* Články jsou načteny z proměnné articles a umístěny do responzivních bloků */
   articles.forEach((article) => {
      $("#zpravodaj").append(`    
        <div class="col-sm-6 mt-3 pb-3 border-bottom">
          <article>
            <figure>
              <img src="images/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
            </figure>
            <h3>${article.title}</h3>
            <div class="article-text">
                <p>${article.text}</p>
                <p><a href="${article.source}" target="_new">Celý článek</a></p>
            </div>
            <div class="article-footer">Autor: ${article.author} 
            <button type="button" class="btn btn-success likes"><i class="fas fa-thumbs-up"></i> <span class="badge badge-light">${article.likes}</span></button>
            <button type="button" class="btn btn-danger dislikes"><i class="fas fa-thumbs-down"></i> <span class="badge badge-light">${article.dislikes}</span></button>
            </div>
          </article>
        </div>        
    `);
   });

   /* Po načtení stránky jsou texty všech článků nejprve skryty */
   $(".article-text").hide();

   /* Po kliknutí na titulek článku se střídavě zobrazuje, nebo skrývá text článku */
   $("#zpravodaj h3").on("click", function () {
      $(this).next(".article-text").toggle();
   });

   /* Po kliknutí na tlačítka likes a dislikes dojde k symbolickému zvýšení uvedených čísel */
   $(".likes").on("click", function () {
      /* Metoda find() hledá zadaného potomka (podřízený/child prvek) zrovna aktivního elementu (this) */
      /* Metoda text() tady vystupuje jako tzv. getter - slouží k získání dat */
      /* Pomocí parseInt() převedeme získaný text na číslo a uložíme do proměnné likes */
      let likes = parseInt($(this).find("span").text());
      /* Metoda text() je zde použita ve formě setteru - hodnota se nastavuje */
      $(this).find("span").text(likes + 1);
   });

   $(".dislikes").on("click", function () {
      let dislikes = parseInt($(this).find("span").text());
      $(this).find("span").text(dislikes + 1);
   });

   /* Animované střídavé zobrazování fotografií z galerií u jednotlivých článků */
   let timer = 0;
   window.setInterval(() => {
      timer++;
      $("article figure img").each(function (index, value) {
         $(value)
            .fadeOut(500, function () {
               $(value).attr("src", "images/" + articles[index].gallery[timer % articles[index].gallery.length])
            })
            .fadeIn(500);
      });
   }, 5000);
})