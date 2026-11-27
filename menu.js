// Drankenkaart van Brouwerij Vopop: de versie met de biernamen als woordspeling.
// (De versie met echte Belgische bieren staat in menu-echte-bieren.js.)
// prijs = bladzijde in het zangboekje (null = staat niet in het boekje, "dag" = dagprijs)
window.VOPOP = {
  url: "https://darkoboesmans.github.io/cantus/",
  adres: "Eerste Bochtweg 1, Gijzegem",
  verhaal:
    "Ons café is leeg: bijna niemand komt nog op café. Wij hebben dringend nieuwe bieren nodig. " +
    "Vanavond worden jullie sommelier en daarna zoeken jullie op de fuif nieuwe bieren voor ons café.",
  kolommen: { links: ["dag", "vat", "pils", "wit", "fruit"], rechts: ["blond", "tripel", "trappist", "stout", "geuze", "muts"] },
  rubrieken: [
    { id: "dag", naam: "Bier van de dag", bieren: [
      { bier: "Vraag het aan de cafébaas", lied: "Improvisatie", prijs: "dag" } ] },
    { id: "vat", naam: "Van 't vat", bieren: [
      { bier: "Pinkel Pils", lied: "Pinkellied", prijs: 1 },
      { bier: "Speelclub Spéciale", lied: "Speelclublied", prijs: 2 },
      { bier: "Rakwi Rouge", lied: "Rakwilied", prijs: 3 },
      { bier: "Tito Tapbier", lied: "Titolied", prijs: 4 },
      { bier: "Keti Kelderbier", lied: "Ketilied", prijs: 5 },
      { bier: "Aspi Amber", lied: "Aspilied", prijs: 6 } ] },
    { id: "pils", naam: "Pils", bieren: [
      { bier: "Stella Loe-La", lied: "Loe la li lee", prijs: 23 },
      { bier: "Jupi-Ram Sam Sam", lied: "A ram sam sam", prijs: 25 },
      { bier: "Desalperados", lied: "Desal", prijs: 14 },
      { bier: "Krokineken", lied: "En de krokodil", prijs: 21 } ] },
    { id: "wit", naam: "Witbieren", bieren: [
      { bier: "Tuimelgaarden", lied: "Tuimeling", prijs: 12 },
      { bier: "Blanche de Zon", lied: "Heb je de zon gezien", prijs: 28 } ] },
    { id: "fruit", naam: "Fruitbieren", bieren: [
      { bier: "Tante Loesemans Kriek", lied: "De poes van tante Loes", prijs: 13 },
      { bier: "Kieken Boon Kriek", lied: "Er zat een kieken op het spoor", prijs: 13 },
      { bier: "Vlo-ris Framboos", lied: "Een grote dikke vlo", prijs: 21 },
      { bier: "Snot-Belle-Vue", lied: "Snottebel", prijs: 14 },
      { bier: "Liefmans Pruim", lied: "Pruimenlied", prijs: 32 } ] },
    { id: "blond", naam: "Blonde", bieren: [
      { bier: "Hinky Duvel", lied: "Hinky Pinky", prijs: 17 },
      { bier: "Pauwel Blub", lied: "Tien kleine visjes", prijs: null } ] },
    { id: "tripel", naam: "Tripels", bieren: [
      { bier: "Grimbergen", lied: "En de boom staat op de bergen", prijs: 16 },
      { bier: "Tripel Zaligmeliet", lied: "Ene God alleen", prijs: 23 },
      { bier: "Jefmalle", lied: "Jef ge moet naar huis toe gaan", prijs: 24 },
      { bier: "La Ballouffe", lied: "Ballen", prijs: 30 } ] },
    { id: "trappist", naam: "Trappisten", bieren: [
      { bier: "Orvissertje", lied: "Het loze vissertje", prijs: 20 },
      { bier: "Westtoveren", lied: "De wereld is een toverbal", prijs: 15 } ] },
    { id: "stout", naam: "Stout", bieren: [
      { bier: "Beu-nness", lied: "Stout liedje", prijs: 11 } ] },
    { id: "geuze", naam: "Oude geuze", bieren: [
      { bier: "Geus", lied: "De slag van Soetenaaie", prijs: 25 },
      { bier: "Dis-tillon", lied: "Hand aan dis", prijs: null } ] },
    { id: "muts", naam: "Slaapmutsje", bieren: [
      { bier: "Avondrodenbach", lied: "Avondlied", prijs: 10 } ] }
  ]
};

window.VOPOP.prijsTekst = function (p) {
  if (p === "dag") return "dagprijs";
  if (p === null || p === undefined) return "€ ??,??";
  return "€ " + p + ",00";
};
