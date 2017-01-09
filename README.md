# Kantilever front-end applicatie

## Scope

Deze applicatie is de angular frontend. Dit is het gedeelte dat de klant te zien krijgt. User-experience is hier
van groot belang. Dit is de **webshop** waar de klanten hun producten kunnen bestellen.

## Werking van de applicatie

De complete webshop is in drie onderdelen opgedeeld:

1. de frontend voor klanten
2. de android app voor medewerkers
3. de backend via de service-bus

Deze applicatie, de **angular-frontend**, is het gedeelte dat de klanten te zien krijgen. De logica omtrend orders
en het opslaan van data gaat via de service-bus. Binnen deze applictaie kan een gebruiker inloggen, een winkelwagen
vullen en vervolgens de order plaatsen. De frontend stuurt die data naar de backend, die de data kan opslaan en de order
afhandeld. Alle overige communicatie vanuit de klant gaat ook via de front-end, de acties die de gebruiker kan uitvoeren zijn:

* Catalogus bekijken
* Product bekijken
* Product toevoegen en verwijderen in de winkelwagen
* Order plaatsen
* Orderstatus bekijken en de order wijzigen
* Klantinformatie bekijken en wijzigen


---


## De projectbeschrijving:

### Kantilever Webshop

Het bedrijf Kantilever verkoopt fietsen en fietsonderdelen aan fietswinkels.

De automatisering daarvoor is zojuist door Info Support opgestart. Er is een ESB product geselecteerd en
daarmee moet er een Integration Service gekoppeld worden die de catalogus beheert. Idem voor een
bestaande Front End die de voorraad van onderdelen beheert.

Kantilever wil nu via een webwinkel ook aan particulieren gaan verkopen.

In de webwinkel is een grote catalogus in te zien waarin alle fietsen en onderdelen te bekijken en te
bestellen zijn. De toegevoegde waarde van Kantilever voor de klanten is dat de catalogus de
mogelijkheid biedt om te zoeken over merken en leveranciers heen. Daarnaast is Kantilever goedkoper
dan een fietswinkel omdat het bedrijf geen panden heeft anders dan een opslag met een beperkte
voorraad onderdelen en fietsen van waaruit de bestellingen verstuurd worden.

Hiervoor moet de bestaande automatisering van Kantilever uitgebreid worden. Er moet een Front End
WebWinkel gebouwd worden die het voor klanten mogelijk maakt om door de catalogus te bladeren en
te zoeken maar ook om bestellingen te plaatsen. Voor de commercieel managers van Kantilever is er
ook een Front End Bestellingen om grote bestellingen goed te keuren. Hiermee hoopt Kantilever
wanbetalingen tegen te gaan en het klantcontact met grote klanten te verbeteren. Als de bestelling
goedgekeurd is kan een magazijnmedewerker aan de hand van de Front End Bestellingen de bestelling
samenstellen en opsturen.

Er is door de architect van Info Support besloten dat er naast de twee Front Ends ook een Business
Service Klantenbeheer en een Business Service BestellingenBeheer moeten komen. Verder moet er een
Process Service Bestellen en een Process Service Winkelen worden gerealiseerd. 
