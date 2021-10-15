> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Beyco contactpagina
🌐 https://daphnebeycocontact.student.fdnd.nl/
![screenshot](https://user-images.githubusercontent.com/69635977/137127263-e274d9e5-2531-4a88-a087-d65637da612f.png)

## Beschrijving
De huidige contactpagina van Beyco is erg simpel. Voor gebruikers moet het gemakkelijker worden om contact op te nemen. Hiervoor willen ze een nieuwe contactpagina in de huisstijl die responsive is.

## Inhoudsopgave

- [Titel](#titel)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Kenmerken
### Foutmeldingen
Voor de foutmeldingen van het formulier heb ik input:focus:required:invalid en textarea:focus:required:invalid gebruikt. Dit gebruik ik om de lijn rood te maken wanneer een text input en een textarea niet ingevuld zijn. De email input blijft ook rood wanneer je geen @ gebruikt.
#### Code

### Animatie formulier
Voor de animatie van de formulier heb ik voor de button een onclick="flip() gebruikt in html. Die verwijst naar de function flip() in de javascript waarin een document.getElementById zit. Verder zijn er ook draai animaties in de css die het formulier laten draaien.
#### Code

### Google map bewerking
De google map heb ik in de css in grayscale gemaakt. Dat heb ik met een grey filter gemaakt in de map class.
#### CSS code
.map {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+ */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
    justify-content: center;
}
## Installatie

## Gebruik

## Bronnen

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
