/* jQuery skript */
$(function(){
    let mesta = [];
    fetch('https://stat-web.vercel.app/api/towns')
    .then(response => { return response.json() })
    .then(json => { mesta = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    let unesco = [];
    fetch('https://stat-web.vercel.app/api/unesco')
    .then(response => { return response.json() })
    .then(json => { unesco = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    /* Skrytí všech SVG objektů circle - v tomto případě označujících na mapě památky UNESCO */
    $("#mapa-cr circle").hide();
    /* Ovládací přepínače, které zajišťují zobrazení nebo skrytí SVG objektů na mapě */
    /* Při změně stavu přepínače se skryjí / zobrazí obdélníky symbolizující krajská města */
    $("#mesta").on('change', function(){
        $("#mapa-cr rect").toggle(500);
    });

    /* Při změně stavu přepínače se skryjí / zobrazí kruhy symbolizující památky UNESCO */
    $("#unesco").on('change', function(){
        $("#mapa-cr circle").toggle(500);
    });

    /* Pomocná proměnná pro uložení původního nastavení stylu výplně (fill) SVG objektu path */   
    let puvodni = '';  

    /* Při přejetí kurzoru myši nad některým SVG objektem typu path (nepravidelný uzavřený mnohoúhelník) se provede: */
    $("#mapa-cr path").on('mouseover', function(){
        /* Pouze v situaci, kdy přepínač s id kraje je ve stavu "checked" - zaškrtnuto */
        if ($("#kraje:checked").val()) {
            /* Do pomocné proměnné puvodni se uloží barva výplně objektu path */
            puvodni = $(this).css('fill');
            /* Právně aktivní objekt se vyplní červenou barvou */
            $(this).css('fill','red');
            /* Nastaví se pro danou oblast popover (grafické vyskakovací okénko) - součást externí knihovny bootstrap4-toggle */
            $(this).popover({
                /* definice spouštěcí akce zobrazení okénka - při kliknutí */
                'trigger':'click',
                /* umístění okénka vůči objektu */
                'placement': 'right',
                /* odsazení okénka vůči pravé hraně objektu - v ose y a x */
                'offset': '10%, -100',
                /* do titulku okénka vloží text, který je pro daný SVG prvek obsažen v tagu title */
                'title': $(this).find('title').text()
            });            
        }
    });
    
    /* Když myš opustí objekt path: */
    $("#mapa-cr path").on('mouseout', function(){
        /* dojde ke změně výplně na původní hodnotu */
        $(this).css('fill', puvodni);
    });


    /* Při kliknutí na některý z SVG objektů typu rect (obdélníky - tj. krajská města): */
    $("#mapa-cr rect").on('click', function(){
        /* do proměnné id se uloží identifikátor daného objektu - města */
        let id = $(this).attr('id');
        /* všechny objekty rect a circle se nejprve vyplní výchozími barvami */
        $("#mapa-cr rect").css('fill','black');
        $("#mapa-cr circle").css('fill','red');
        /* pouze právě aktivní objekt bude nastaven na žlutou barvu */
        $(this).css('fill','yellow');
        /* s využitím metody find se do proměnné mesto vyhledá v JSON poli mesta objekt podle odpovídajícího id */
        let mesto = mesta.find(item => {return item.id == id});
        /* během efektu zprůhlednění (1 s.) se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném městě  */
        $('#info').fadeOut(1000, function() {$('#info').html(`<div class="col-12"><h2 class="bg-primary">${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obv.</small></h2></div><div class="col-2"><img src="img/${mesto.sign}" class="img-fluid"></div><div class="col-10">${mesto.text}</div>`)});
        $('#info').fadeIn(1000);
    });  
    
    /* Při kliknutí na některý z SVG objektů typu circle (kruhy - tj. památky UNESCO) se obdobným způsobem zobrazí 
       podrobnější informace o vybrané památce */
    $("#mapa-cr circle").on('click', function(){
        let id = $(this).attr('id');
        $("#mapa-cr rect").css('fill','black');
        $("#mapa-cr circle").css('fill','red');
        $(this).css('fill','yellow');
        let pamatka = unesco.find(item => {return item.id == id});
        $('#info').slideUp(1000, function(){$('#info').html(`<div class="col-12"><h2 class="bg-info">${pamatka.locality} <small class="text-small">(od roku ${pamatka.year})</small></h2></div><div class="col-4"><img src="img/${pamatka.photo}" class="img-fluid"></div><div class="col-8"><p>${pamatka.description}</p><p><a href="${pamatka.url}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`)});
        $('#info').slideDown(1000);
    });    

})
