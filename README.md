# Brouwerij Vopop: drankenkaart

Cantus-proeverij van de oudleiding van Chiro Popov. Elk chiroliedje is gekoppeld aan een bestaand Belgisch bier; de prijs is de bladzijde in het zangboekje.

- `index.html`: de online drankenkaart, live op https://darkoboesmans.github.io/cantus/
- `print.html`: A4-versie om af te drukken, `menu.pdf` is de export daarvan (met QR-code), `menu-zonder-qr.pdf` zonder QR-code (open `print.html?qr=0`), `menu-liedjes.pdf` met de liedtitels in plaats van de bieren (open `print.html?titels=1&qr=0`)
- `menu.js`: de kaart die online staat (biernamen als woordspeling, zoals Pinkel Pils en Aspi Amber). Pas hier iets aan en web en print volgen.
- `menu-echte-bieren.js` en `menu-echte-bieren.pdf`: de versie met echte Belgische bieren. Om die terug online te zetten: hernoem het bestand naar `menu.js`.
