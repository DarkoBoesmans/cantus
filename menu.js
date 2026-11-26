// Drankenkaart van Brouwerij Vopop.
// Elk lied is gekoppeld aan een bestaand Belgisch bier.
// prijs = bladzijde in het zangboekje (null = staat niet in het boekje, "dag" = dagprijs)
window.VOPOP = {
  url: "https://darkoboesmans.github.io/cantus/",
  adres: "Eerste Bochtweg 1, Gijzegem",
  verhaal:
    "Ons café is leeg: bijna niemand komt nog op café. Wij hebben dringend nieuwe bieren nodig. " +
    "Vanavond worden jullie sommelier en daarna zoeken jullie op de fuif nieuwe bieren voor ons café.",
  rubrieken: [
    {
      id: "vat",
      naam: "Van 't vat",
      bieren: [
        { bier: "Bink Blond", stijl: "Blond", lied: "Pinkellied", prijs: 1, uitleg: "Voor de kleinste binken van de Chiro." },
        { bier: "La Chouffe", stijl: "Blond", lied: "Speelclublied", prijs: 2, uitleg: "Kabouterbier voor wie nog overal in klimt." },
        { bier: "Pauwel Kwak", stijl: "Amber", lied: "Rakwilied", prijs: 3, uitleg: "Een rakwi en een Kwakglas: allebei moeilijk stil te houden." },
        { bier: "Duvel", stijl: "Sterk blond", lied: "Titolied", prijs: 4, uitleg: "Kleine duiveltjes met een groot karakter." },
        { bier: "Gulden Draak", stijl: "Donker tripel", lied: "Ketilied", prijs: 5, uitleg: "Pubers die vuur spuwen." },
        { bier: "Cuvée des Trolls", stijl: "Blond", lied: "Aspilied", prijs: 6, uitleg: "Te groot voor de rest, te klein voor de leiding." },
        { bier: "Cluysenaer", stijl: "Tripel", lied: "Leidingsploeglied", prijs: 7, uitleg: "Voor wie de sleutels van het lokaal heeft." }
      ]
    },
    {
      id: "dag",
      naam: "Bier van de dag",
      bieren: [
        { bier: "Achel", stijl: "Verrassing", lied: "Ik ben kachel", prijs: "dag", uitleg: "Improvisatie: de cafébaas beslist hoe kachel je wordt." }
      ]
    },
    {
      id: "pils",
      naam: "Pils & licht",
      bieren: [
        { bier: "Delirium Tremens", stijl: "Blond", lied: "Loe la li lee", prijs: 23, uitleg: "Na drie strofen klinkt alles zo." },
        { bier: "Ramée", stijl: "Abdijblond", lied: "A ram sam sam", prijs: 25, uitleg: "Goeli goeli, gulle schenking." },
        { bier: "Tongerlo", stijl: "Abdijbier", lied: "Desal", prijs: 14, uitleg: "Een tongbreker in een abdijfles." },
        { bier: "Piraat", stijl: "Sterk blond", lied: "En de krokodil", prijs: 21, uitleg: "Kapitein Haak kent die krokodil maar al te goed." },
        { bier: "Ezel", stijl: "Blond", lied: "Grauwtje de ezel", prijs: 13, uitleg: "Koppig, maar trouw." }
      ]
    },
    {
      id: "wit",
      naam: "Witbieren",
      bieren: [
        { bier: "Vedett Extra White", stijl: "Witbier", lied: "Tuimeling", prijs: 12, uitleg: "Salto's op eigen risico." },
        { bier: "Hoegaarden", stijl: "Witbier", lied: "Heb je de zon gezien", prijs: 28, uitleg: "Zon in een glas, ook in november." }
      ]
    },
    {
      id: "fruit",
      naam: "Fruitig",
      bieren: [
        { bier: "Mort Subite Kriek", stijl: "Kriek", lied: "Er zat een kieken op het spoor", prijs: 13, uitleg: "Toen kwam de trein. Plots." },
        { bier: "Floris Framboise", stijl: "Framboos", lied: "Een grote dikke vlo", prijs: 21, uitleg: "Vlo-ris: klein beestje, grote smaak." },
        { bier: "Belle-Vue Kriek", stijl: "Kriek", lied: "Snottebel", prijs: 14, uitleg: "Snotte-Belle-Vue. Rood en een beetje plakkerig." },
        { bier: "3 Fonteinen Pruim", stijl: "Fruitlambiek", lied: "Pruimenlied", prijs: 32, uitleg: "Echte Belgische pruimen, geen grap." }
      ]
    },
    {
      id: "blond",
      naam: "Blond & speels",
      bieren: [
        { bier: "La Chatte Blonde", stijl: "Blond", lied: "De poes van tante Loes", prijs: 13, uitleg: "Zevenling inbegrepen." },
        { bier: "Silly Pink Killer", stijl: "Witbier", lied: "Hinky Pinky", prijs: 17, uitleg: "Pinda's en augurken in het zuur niet inbegrepen." },
        { bier: "Viswijf", stijl: "Blond", lied: "Tien kleine visjes", prijs: null, uitleg: "Tien visjes erin, één komt er terug." }
      ]
    },
    {
      id: "sterk",
      naam: "Sterk & stapelend",
      bieren: [
        { bier: "Grimbergen", stijl: "Abdijtripel", lied: "En de boom staat op de bergen", prijs: 16, uitleg: "Tak, twijg, blad, nest... en dan pas een slok." },
        { bier: "Judas", stijl: "Sterk blond", lied: "Ene God alleen", prijs: 23, uitleg: "Twaalf apostelen, één verrader." },
        { bier: "Klootzakske", stijl: "Tripel", lied: "Jef ge moet naar huis toe gaan", prijs: 24, uitleg: "Jef speelt liever tsjoepbiljart." },
        { bier: "De Koninck Bolleke", stijl: "Amber", lied: "Ballen", prijs: 30, uitleg: "Rond, Antwerps en niet te stoppen." }
      ]
    },
    {
      id: "trappist",
      naam: "Trappisten",
      bieren: [
        { bier: "Orval", stijl: "Trappist", lied: "Het loze vissertje", prijs: 20, uitleg: "Op het etiket zwemt al een vis." },
        { bier: "Westvleteren 12", stijl: "Trappist", lied: "De wereld is een toverbal", prijs: 15, uitleg: "Geen mens weet wanneer je er een krijgt." }
      ]
    },
    {
      id: "donker",
      naam: "Donker & zuur",
      bieren: [
        { bier: "Hercule Stout", stijl: "Stout", lied: "Stout liedje", prijs: 11, uitleg: "Voor wie stout durft te zijn." },
        { bier: "Oude Geuze Boon", stijl: "Geuze", lied: "De slag van Soetenaaie", prijs: 25, uitleg: "Geuzen trekken ten strijde." },
        { bier: "Cantillon", stijl: "Lambiek", lied: "Hand aan dis", prijs: null, uitleg: "Bijna een cantus in een fles." }
      ]
    },
    {
      id: "muts",
      naam: "Slaapmutsje",
      bieren: [
        { bier: "St. Bernardus Abt 12", stijl: "Quadrupel", lied: "Avondlied", prijs: 10, uitleg: "Een monnik zegt het laatste gebed." }
      ]
    }
  ]
};


// Iconen per rubriek (24x24, worden wit op een rode tegel getekend)
window.VOPOP.iconen = {
  vat: '<path d="M8 2h8v3h-3v3h5v4h-4v2h-4v-2H6V8h5V5H8z"/><path d="M12 16c1.5 2 2 3 2 4a2 2 0 0 1-4 0c0-1 .5-2 2-4z"/>',
  dag: '<path d="M12 2l3 7 7 .5-5.5 4.5 2 7-6.5-4-6.5 4 2-7L2 9.5 9 9z"/>',
  pils: '<path d="M6 3h12l-1.6 18H7.6z"/><path fill="#E1143C" d="M8 9h8l-.2 2H8.2z"/>',
  wit: '<circle cx="12" cy="12" r="4.5"/><path d="M11 1h2v4h-2zM11 19h2v4h-2zM1 11h4v2H1zM19 11h4v2h-4zM4.2 5.6l1.4-1.4 2.8 2.8-1.4 1.4zM15.6 17l1.4-1.4 2.8 2.8-1.4 1.4zM4.2 18.4l2.8-2.8 1.4 1.4-2.8 2.8zM15.6 7l2.8-2.8 1.4 1.4L17 8.4z"/>',
  fruit: '<circle cx="7.5" cy="16.5" r="4.5"/><circle cx="16.5" cy="17.5" r="4.5"/><path d="M8 12.5c.5-5 3-8.5 8-10.5l.8 1.6c-3.6 1.6-5.6 4.4-6.3 9zM15.4 13c-.4-3.5-1.6-6.4-3.6-8.4l1.3-1.2c2.3 2.3 3.6 5.6 4.1 9.4z"/>',
  blond: '<path d="M3 10V2l5 4h8l5-4v8c0 6-4 11-9 11s-9-5-9-11z"/><circle fill="#E1143C" cx="9" cy="12" r="1.4"/><circle fill="#E1143C" cx="15" cy="12" r="1.4"/>',
  sterk: '<path d="M1 21l8-14 4.5 7 3-4.5L23 21z"/>',
  trappist: '<path d="M2 12c3.5-5.5 10-6.5 14.5-2L22 6v12l-5.5-4C12 18.5 5.5 17.5 2 12z"/><circle fill="#E1143C" cx="7" cy="11" r="1.3"/>',
  donker: '<path d="M14.5 2.5A9.5 9.5 0 1 0 21.5 18 8 8 0 0 1 14.5 2.5z"/>',
  muts: '<path d="M3 20c2-9 7-15 16-17-2.5 4.5-2.5 9.5 0 14v3z"/><circle cx="19.5" cy="3.5" r="2.5"/><path d="M2 19h19v3H2z"/>'
};

window.VOPOP.prijsTekst = function (p) {
  if (p === "dag") return "dagprijs";
  if (p === null || p === undefined) return "€ ??,??";
  return "€ " + p + ",00";
};
