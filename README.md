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
#### HTML code
```css
 <section id="talk">
              <h2 class="white">Let's talk</h2>
                <div id="formCard">
                    <div class="formFront">
                        <form>
                            <div class="container">
                                <div class="name">
                                    <label for="name">Name: </label>
                                    <input type="text" name="name" required/>
                                </div>
                                <div class="email">
                                    <label for="email">Email: </label>
                                    <input type="email" name="email" required/>
                                </div>
                                <div class="subject">
                                    <label for="subject">Subject: </label>
                                    <input type="text" name="subject" required/>
                                </div>
                            </div>
                                <textarea name="message" cols="60" rows="20" required></textarea>
                        </form>
                            <button type="submit" class="btn" onclick="flip()">Send</button>
                    </div>
                    <div class="formBack">
                        <!-- Checkmark SVG -->
                        <svg class="checkmarksvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 476.98 385" style="enable-background:new 0 0 476.98 385;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M1.98,205c1.41-4.57,2.82-9.14,4.24-13.7c16.23-52.13,81.22-71.34,123.38-36.03c12.34,10.34,23.24,22.4,34.73,33.75
                                    c2,1.97,3.65,4.3,5.67,6.72c2.72-2.56,4.69-4.32,6.56-6.19c54.77-54.75,109.55-109.49,164.27-164.29
                                    c9.54-9.55,20.22-16.73,32.44-20.88c7.61-2.58,15.44-3.48,16.04-3.55c0.68-0.08,10.26-1.16,19.81,0.06
                                    c15.1,1.93,36.48,10.44,51.32,29.7c8.93,11.58,12.04,22.56,14.1,29.86l0,0c1.39,3.01,4.34,10.65,1.63,28.3
                                    c-0.66,4.33-1.31,8.7-3.02,13.98c-3.91,12.06-10.9,22.56-20.18,31.85c-75.54,75.61-151.13,151.18-226.72,226.74
                                    c-7.43,7.43-15.8,13.24-25.2,17.17c-5.84,2.44-12.58,3.97-12.58,3.97c-6.12,1.5-11.45,2.2-15.5,2.55
                                    c-8.35,0.05-21.46-0.98-35.31-7.54c-10.93-5.18-17.87-11.57-21.39-15.07c-29.96-29.85-59.64-59.99-89.65-89.78
                                    C15.86,261.92,7.61,250,4.24,235.03c-0.26-1.13-0.54-2.27-0.54-2.27s-0.94-4.16-1.49-7.5C1.65,221.76,1.37,214.47,1.98,205z
                                    M79.88,172.41c-4.08,0.71-8.24,1.11-12.23,2.17c-24.73,6.55-45.64,43.53-16.49,72.74c29.42,29.48,58.75,59.07,88.5,88.21
                                    c4.95,4.85,11.42,8.98,17.96,11.19c17.76,6.01,32.96,0.28,45.89-12.64c74.46-74.47,148.92-148.93,223.38-223.4
                                    c1.06-1.06,2.1-2.14,3.08-3.28c20.55-23.86,11.86-59.04-17.15-69.19c-18.48-6.46-33.92-1-47.28,12.37
                                    C314.18,101.97,262.8,153.33,211.43,204.7c-9.9,9.9-19.74,19.85-29.71,29.67c-7.86,7.76-13.72,8-21.53,0.37
                                    c-16.32-15.96-32.38-32.18-48.59-48.25C102.86,177.82,92.55,172.67,79.88,172.41z"/>
                            </g>
                        </g>
                        <path d="M475.57,88.23"/>
                        <path d="M476.47,88.46"/>
                        </svg>

                        <h3 class="backh3">Your email has been sent successfully!</h3>
                        <p class="bottomp">We will get back to you as soon as possible.</p>
                        <button class="secondbtn" onclick="flip()">Reset</button>
                    </div>
                </section>
            </section>
```
#### CSS code
```css
/* FORM FLIP ANIMATIE */
#formCard {
    position: relative;
    display: block;
    margin:0 auto;
    height: 700px;
    width:600px;
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    -o-perspective: 600px;
    perspective: 600px;
}

.formFront {
    background-color: #EBF2F1;
    -webkit-transform: rotateX(0deg) rotateY(0deg);
    -moz-transform: rotateX(0deg) rotateY(0deg);
    -o-transform: rotateX(0deg) rotateY(0deg);
    transform: rotateX(0deg) rotateY(0deg);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: transform 4s cubic-bezier(0.2, 1, 0.3, 1.3);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
}

#formCard.flip .formFront {
    -webkit-transform: rotateY(180deg);
    -mox-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.formBack {
    background-color: #EBF2F1;
    display: block;
    margin-top: -660px;
    height: 700px;
    width:600px;
    padding: 10px;
    text-align: center;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: transform 4s cubic-bezier(0.2, 1, 0.3, 1.3);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
}

#formCard.flip .formBack{
    -webkit-transform: rotateX(0deg) rotateY(0deg);
    -moz-transform: rotateX(0deg) rotateY(0deg);
    -o-transform: rotateX(0deg) rotateY(0deg);
    transform: rotateX(0deg) rotateY(0deg);
}
```
### Google map bewerking
De google map heb ik in de css in grayscale gemaakt. Dat heb ik met een grey filter gemaakt in de map class.
#### CSS code
```css
.map {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+ */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
    justify-content: center;
}
```
## Installatie

## Gebruik

## Bronnen

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
