import { Component, OnInit } from '@angular/core';
import {FilterPipe} from '../filter.pipe'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  searchText: string;
  characters = [
    'Andrew : +447766698739',
    'Smith : +44375345387547',
    'John : +4443534698744',
    'Lums : +443766698712',
    'Beemo1 : +4555766698722',
    'Mathew : +444566698752',
    'Emma : +4476456698724',
'Olivia : +4477634545767',
'Sophia : +447766698788',
'Isabella : +447763458798',
'Ava : +46575669874',
'Mia : +4477666987545',
'Emily : +44776669875324',
'Abigail : +4477666987223',
'Madison : +4477666987324',
'Charlotte : +4477666987564',
'Harper : +44776669875434',
'Sofia : +44776669875423',
'Avery : +447766698722',
'Elizabeth : +4477666987543',
'Amelia : +4477666987544',
'Evelyn : +4477666987541',
'Ella : +4477666987540',
'Chloe : +4477666987454',
'Victoria : +447766698745',
'Aubrey : +447766698666',
'Grace : +44776669875411',
'Zoey : +44776669875422',
'Natalie : +44776669875434',
'Addison : +4477666987546',
'Lillian : +4477666987541',
'Brooklyn : +4477666987547',
'Lily : +4477666987566',
'Hannah : +44776669875412',
'Layla : +447766698700',
'Scarlett : +447766698712',
'Aria : +447766698766',
'Zoe : +447766698777',
'Samantha : +44776669874',
'Anna : +4477666987540',
'Leah : +4477666987541',
'Audrey : +4477666987542',
'Ariana : +4477666987543',
'Allison : +4477666987544',
'Savannah : +4477666987545',
'Arianna : +4477666987546',
'Camila : +4477666987547',
'Penelope : +4477666987548',
'Gabriella : +4477666987549',
'Claire : +4477666987540',
'Aaliyah : +447766698753',
'Sadie : +447766698753',
'Riley : +447766698756',
'Skylar : +4477666987545',
'Nora : +447766698756',
'Sarah : +4477666987343',
'Hailey : +447766698233',
'Kaylee : +4477666987546',
'Paisley : +447766698234',
'Kennedy : +4477666987876',
'Ellie : +447766698734',
'Peyton : +4477666987656',
'Annabelle : +44776669234',
'Caroline : +4477666987657',
'Madelyn : +4477666987234',
'Serenity : +4477666987435',
'Aubree : +4477666987234',
'Lucy : +4477666987234',
'Alexa : +447766698754213',
'Alexis : +447766698345',
'Nevaeh : +447766698345',
'Stella : +447766698654',
'Violet : +447766698234',
'Genesis : +4477666987234',
'Mackenzie : +4477666982342',
'Bella : +447766698234',
'Autumn : +4477666986546',
'Mila : +4477666987456',
'Kylie : +4477666987234',
'Maya : +4477666987877',
'Piper : +447766698234',
'Alyssa : +4477666986545',
'Taylor : +447766698677',
'Eleanor : +447766698754234',
'Melanie : +447766698754234',
'Naomi : +44776669875423',
'Faith : +447766698754234',
'Eva : +44776669875412',
'Katherine : +447766698754213',
'Lydia : +447766698754122',
'Brianna : +447766698754231',
'Julia : +447766698754213',
'Ashley : +447766698754546',
'Khloe : +447766698234',
'Madeline : +447766698234',
'Ruby : +4477666987234',
'Sophie : +4477666982344',
'Alexandra : +4477666234754',
'London : +447766698766',
'Lauren : +4477666987555',
'Gianna : +447766698733',
'Isabelle : +447766698344',
'Alice : +4477666987324',
'Vivian : +4477666987234',
'Hadley : +4477666987234',
'Jasmine : +447766698654',
'Morgan : +4477666987234',
'Kayla : +4477666987234',
'Cora : +4477666987122',
'Bailey : +447766698099',
'Kimberly : +447766698231',
'Reagan : +447766698321',
'Hazel : +4477666987345',
'Clara : +447766698111',
'Sydney : +447766698000',
'Trinity : +4477666985411',
'Natalia : +4477666987462',
'Valentina : +4477666985402',
'Rylee : +4477666987542',
'Jocelyn : +4477666987524',
'Maria : +4477666987524',
'Aurora : +4477666987454',
'Eliana : +4477666987454',
'Brielle : +4477666985754',
'Liliana : +4477666986754',
'Mary : +4477666987547',
'Elena : +4477666987564',
'Molly : +4477666987554',
'Makayla : +4477666984754',
'Lilly : +4477666987544',
'Andrea : +4477666987454',
'Quinn : +44776669874544',
'Jordyn : +4477666984754',
'Adalynn : +4477666948758',
'Nicole : +4477666987544',
'Delilah : +4477666987544',
'Kendall : +4477666987454',
'Kinsley : +4477666987454',
'Ariel : +4477666987544',
'Payton : +4477666987454',
'Paige : +4477666987534',
'Mariah : +4477666987354',
'Brooke : +44776669872541',
'Willow : +4477666987542',
'Jade : +4477666987542',
'Lyla : +4477666987542',
'Mya : +4477666987542',
'Ximena : +4477666987542',
'Luna : +4477666987524',
'Isabel : +4477666987542',
'Mckenzie : +4477666987542',
'Ivy : +4477666987542',
'Josephine : +4477666987542',
'Amy : +4477666987545',
'Laila : +4477666987554',
'Isla : +4477666987544',
'Eden : +4477666987534',
'Adalyn : +4477666987541',
'Angelina : +4477666987542',
'Londyn : +4477666987543',
'Rachel : +4477666987543',
'Melody : +4477666987544',
'Juliana : +4477666987545',
'Kaitlyn : +4477666987547',
'Brooklynn : +4477666987548',
'Destiny : +4477666987549',
'Emery : +4477666987540',
'Gracie : +4477666987542',
'Norah : +4477666987545',
'Emilia : +4477666987546',
'Reese : +4477666987547',
'Elise : +4477666987545',
'Sara : +4477666987544',
'Aliyah : +4477666987543',
'Margaret : +4477666987547',
'Catherine : +4477666987547',
'Vanessa : +4477666987548',
'Katelyn : +4477666987543',
'Gabrielle : +4477666987543',
'Arabella : +4477666987541',
'Valeria : +4477666987542',
'Valerie : +4477666987543',
'Adriana : +4477666987544',
'Everly : +4477666987547',
'Jessica : +4477666987543',
'Daisy : +4477666987542',
'Makenzie : +4477666987541',
'Summer : +4477666987543',
'Lila : +4477666987542',
'Rebecca : +4477666987543',
'Julianna : +4477666987544',
'Callie : +4477666987544',
'Michelle : +4477666987544',
'Ryleigh : +4477666987541',
'Presley : +4477666987542',
'Alaina : +44776669875423',
'Angela : +447766698711',
'Alina : +44776669875433',
'Harmony : +447766698734',
'Rose : +447766698745',
'Athena : +447766698766',
'Emerson : +447766698743',
'Adelyn : +447766698756',
'Alana : +447766698724',
'Hayden : +447766698778',
'Izabella : +447766698723',
'Cali : +447766698789',
'Marley : +447766698780',
'Esther : +447766698757',
'Fiona : +447766698752',
'Stephanie : +447766698756',
'Cecilia : +447766698722',
'Kate : +447766698721',
'Kinley : +447766698756',
'Jayla : +447766698735',
'Genevieve : +447766698745',
'Alexandria : +447766694554',
'Eliza : +44776669875432',
'Kylee : +44776669876',
'Alivia : +447766698777',
'Giselle : +447766698733',
'Arya : +447766698766',
'Alayna : +447766698788',
'Leilani : +447766698712',
'Adeline : +447766698745',
'Jennifer : +447766698746',
'Tessa : +4477666987543',
'Ana : +4477666987542',
'Finley : +4477666987524',
'Melissa : +447766698724',
'Daniela : +447766698554',
'Aniyah : +447766698756',
'Daleyza : +447766698777',
'Keira : +447766698779',
'Charlie : +447766698778',
'Lucia : +447766698754',
'Hope : +44776669874',
'Gabriela : +447766698754',
'Mckenna : +447766698757',
'Brynlee : +447766698759',
'Parker : +447766698753',
'Lola : +447766698757',
'Amaya : +447766698752',
'Miranda : +447766698757',
'Maggie : +447766698758',
'Anastasia : +447766698755',
'Leila : +447766698758',
'Lexi : +447766698750',
'Georgia : +447766698752',
'Kenzie : +447766698756',
'Iris : +447766698758',
'Jacqueline : +447766698757',
'Jordan : +4477666987544',
'Cassidy : +447766698759',
'Vivienne : +447766698758',
'Camille : +447766698756',
'Noelle : +447766698777',
'Adrianna : +447766698756',
'Teagan : +447766698745',
'Josie : +4477666987354',
'Juliette : +447766698745',
'Annabella : +447766698765',
'Allie : +4477666987565',
'Juliet : +447766698745',
'Kendra : +447766698733',
'Sienna : +447766698700',
'Brynn : +447766698754',
'Kali : +4477666987548',
'Maci : +4477666987548',
'Danielle : +4477666987547',
'Haley : +4477666987545',
'Jenna : +4477666987544',
'Raelynn : +4477666987544',
'Delaney : +4477666987545',
'Paris : +4477666987546',
'Alexia : +4477666987547',
'Lyric : +4477666987547',
'Gemma : +4477666987547',
'Lilliana : +4477666987547',
'Chelsea : +4477666987545',
'Angel : +44776669875444',
'Evangeline : +4477666987544',
'Ayla : +4477666987544',
'Kayleigh : +4477666987544',
'Lena : +44776669875444',
'Katie : +44776669875444',
'Elaina : +44776669875444',
'Olive : +44776669875433',
'Madeleine : +44776669875423',
'Makenna : +44776669875433',
'Dakota : +44776669875433',
'Elsa : +44776669875433',
'Nova : +44776669875466',
'Nadia : +4477666987546',
'Alison : +4477666987546',
'Kaydence : +4477666987548',
'Journey : +4477666987544',
'Jada : +44776669875',
'Kathryn : +447766698758',
'Shelby : +447766698777',
'Nina : +447766698788',
'Elliana : +447766698756',
'Diana : +447766698788',
'Phoebe : +44776669875t4',
'Alessandra : +44776669t8754',
'Eloise : +44776669875r4',
'Nyla : +447766698758',
'Skyler : +4477666987587',
'Madilyn : +447766698765',
'Adelynn : +447766698709',
'Miriam : +447766698700',
'Ashlyn : +447766698758',
'Amiyah : +447766698755',
'Megan: + 447766698722',
'Amber : +4477666987544',
'Rosalie : +4477666987542',
'Annie : +4477666987544',
'Lilah : +4477666987541',
'Charlee : +4477666987540',
'Amanda : +447766698757',
'Ruth : +447766698758',
'Adelaide : +447766698777',
'June : +447766698788',
'Laura : +4477666987533',
'Daniella : +44776669876',
'Mikayla : +4477666987545',
'Raegan : +4477666987543',
'Jane : +4477666987543',
'Ashlynn : +4477666987544',
'Kelsey : +4477666987544',
'Erin : +4477666987544',
'Christina : +4477666987544',
'Joanna : +4477666987542',
'Fatima : +4477666987541',
'Allyson : +4477666987542',
'Talia : +4477666987543',
'Mariana : +4477666987543',

'Sabrina : +4477666987546',
'Haven : +4477666987546',
'Ainsley : +4477666987546',
'Cadence : +4477666987545',
'Elsie : +4477666987455',
'Leslie : +44776669875433',
'Heaven : +4477666987543',
'Arielle : +4477666987543',
'Maddison : +4477666987542',
'Alicia : +4477666987541',
'Briella : +4477666987542',
'Lucille : +4477666987544',
'Sawyer : +4477666987545',
'Malia : +4477666987543',
'Selena : +4477666987548',
'Heidi : +4477666987548',
'Kyleigh : +4477666987541',
'Harley : +4477666987542',
'Kira : +44776669875434',
'Lana : +44776669875344',
'Sierra : +44776669875444',
'Kiara : +44776669875444',
'Paislee : +44776669875411',
'Alondra : +44776669875421',
'Daphne : +44776669875432',
'Carly : +44776669875412',
'Jaylah : +44776669875412',
'Kyla : +44776669875421',
'Bianca : +44776669875411',
'Baylee : +44776669875411',
'Cheyenne : +44776669875411',
'Macy : +44776669875455',
'Camilla : +44776669875412',
'Catalina : +44776669875415',
'Gia : +44776669875416',
'Vera : +44776669875417',
'Skye : +44776669875418',
'Aylin : +44776669875419',
'Sloane : +44776669875415',
'Myla : +44776669875412',
'Yaretzi : +44776669875415',
'Giuliana : +44776669875416',
'Macie : +44776669875416',
'Veronica : +44776669875416',
'Esmeralda : +44776669875422',
'Lia : +44776669875422',
'Averie : +44776669875422',
'Addyson : +4477666987541',
'Kamryn : +4477666987542',
'Mckinley : +4477666987542',
'Ada : +4477666987545',
'Carmen : +4477666987546',
'Mallory : +4477666987543',
'Jillian : +4477666987543',
'Ariella : +4477666987543',
'Rylie : +4477666987543',
'Sage : +4477666987546',
'Abby : +4477666987547',
'Scarlet : +4477666987548',
'Logan : +4477666987549',
'Tatum : +4477666987540',
'Bethany : +4477666987541',
'Dylan : +4477666987541',
'Elle : +4477666987542',
'Jazmin : +4477666987543',
'Aspen : +4477666987543',
'Camryn : +4477666987544',
'Malaysia : +4477666987545',
'Haylee : +4477666987543',
'Nayeli : +4477666987547',
'Gracelyn : +4477666987541',
'Kamila : +4477666987542',
'Helen : +447766698766',
'Marilyn : +44776669875411',
'April : +44776669875433',
'Carolina : +44776669875433',
'Amina : +44776669875433',
'Julie : +44776669875433',
'Raelyn : +44776669875433',
'Blakely : +44776669875455',
'Rowan : +44776669875412',
'Angelique : +44776669875421',
'Miracle : +44776669875421',
'Emely : +44776669875412',
'Jayleen : +44776669875415',
'Kennedi : +44776669875416',
'Amira : +44776669875417',
'Briana : +44776669875418',
'Gwendolyn : +44776669875416',
'Justice : +44776669875414',
'Zara : +44776669875417',
'Aleah : +44776669875418',
'Itzel : +44776669875419',
'Bristol : +44776669875433',
'Francesca : +44776669875444',
'Emersyn : +44776669875446',
'Aubrie : +44776669875477',
'Karina : +44776669875478',
'Nylah : +44776669875478',
'Kelly : +44776669875466',
'Anaya : +44776669875434',
'Maliyah : +44776669875476',
'Evelynn : +44776669875412',
'Ember : +44776669875455',
'Melany : +44776669875424',
'Angelica : +447766698753',
'Jimena : +4477666987543',
'Madelynn : +4477666987543',
'Kassidy : +4477666987543',
'Tiffany : +4477666987543',
'Kara : +4477666987544',
'Jazmine : +4477666987545',
'Jayda : +4477666987545',
'Dahlia : +4477666987546',
'Alejandra : +4477666987546',
'Sarai : +4477666987546',
'Annabel : +4477666987546',
'Holly : +4477666987546',
'Janelle : +4477666987546',
'Braelyn : +4477666987547',
'Gracelynn : +4477666987546',
'River : +4477666987546',
'Viviana : +4477666987541',
'Serena : +4477666987546',
'Brittany : +4477666987544',
'Annalise : +4477666987543',
'Brinley : +4477666987544',
'Madisyn : +44776669875446',
'Eve : +4477666987544',
'Cataleya : +4477666987548',
'Joy : +4477666987548',
'Caitlyn : +4477666987544',
'Anabelle : +447766698767',
'Emmalyn : +44776669875467',
'Journee : +4477666987543',
'Celeste : +4477666987543',
'Brylee : +44776669875454',
'Luciana : +44776669875445',
'Marlee : +44776669875445',
'Savanna : +44776669875434',
'Anya : +44776669875423',
'Marissa : +44776669875423',
'Jazlyn : +44776669875423',
'Zuri : +44776669875421',
'Kailey : +44776669875444',
'Crystal : +44776669875412',
'Michaela : +44776669875412',
'Lorelei : +44776669875421',
'Guadalupe : +44776669875412',
'Madilynn : +44776669875421',
'Maeve : +44776669875421',
'Hanna : +44776669875434',
'Priscilla : +4477666987545',
'Kyra : +4477666987543',
'Lacey : +4477666987545',
'Nia : +4477666987540',
'Charley : +4477666987524',
'Jamie : +4477666987543',
'Juniper : +4477666987554',
'Cynthia : +447766698754',
'Karen : +4477666987544',
'Sylvia : +4477666987544',
'Phoenix : +4477666987544',

'Aleena : +4477666987524',
'Caitlin : +4477666987545',
'Felicity : +4477666987554',
'Elisa : +4477666987546',
'Julissa : +4477666987854',
'Rebekah : +4477666987549',
'Evie : +4477666987549',
'Helena : +4477666987547',
'Imani : +4477666987547',
'Karla : +4477666987549',
'Millie : +4477666987543',
'Lilian : +4477666987542',
'Raven : +4477666987545',
'Harlow : +447766698754',
'Leia : +44776669875411',
'Ryan : +4477666987544',
'Kailyn : +4477666987544',
'Lillie : +4477666987545',
'Amara : +4477666987547',
'Kadence : +4477666987548',
'Lauryn : +4477666987546',
'Cassandra : +4477666987544',
'Kaylie : +4477666987547',
'Madalyn : +4477666987548',
'Anika : +4477666987549',
'Hayley : +4477666987543',
'Bria : +4477666987545',
'Colette : +4477666987546',
'Henley : +4477666987548',
'Amari : +4477666987548',
'Regina : +4477666987548',
'Alanna : +4477666987548',
'Azalea : +4477666987549',
'Fernanda : +4477666987543',
'Jaliyah : +4477666987546',
'Anabella : +4477666987547',
'Adelina : +4477666987541',
'Lilyana : +4477666987543',
'Skyla : +4477666987547',
'Addisyn : +4477666987548',
'Zariah : +4477666987543',
'Bridget : +4477666987542',
'Braylee : +4477666987545',
'Monica : +4477666987543',
'Jayden : +4477666987545',
'Leighton : +4477666987546',
'Gloria : +4477666987542',
'Johanna : +4477666987542',
'Addilyn : +4477666987544',
'Danna : +4477666987544',
'Selah : +447766698754',
'Aryanna : +447766698745',
'Kaylin : +447766698712',
'Aniya : +447766698714',
'Willa : +447766698716',
'Angie : +447766698766',
'Kaia : +447766698777',
'Kaliyah : +447766698779',
'Anne : +447766698768',
'Tiana : +447766698790',
'Charleigh : +447766698744',
'Winter : +447766698755',
'Danica : +447766698777',
'Alayah : +447766698799',
'Aisha : +4477666987554',
'Bailee : +4477666987543',
'Kenley : +4477666987544',
'Aileen : +4477666987545',
'Lexie : +4477666987542',
'Janiyah : +4477666987541',
'Braelynn : +4477666987544',
'Liberty : +4477666987545',
'Katelynn : +4477666987546',
'Mariam : +4477666987547',
'Sasha : +4477666987544',
'Lindsey : +4477666987544',
'Montserrat : +4477666987540',
'Cecelia : +44776669875412',
'Mikaela : +447766698754',
'Kaelyn : +44776669875411',
'Rosemary : +44776669875411',
'Annika : +44776669875423',
'Tatiana : +44776669875432',
'Cameron : +44776669875423',
'Marie : +44776669875432',
'Dallas : +44776669875422',
'Virginia : +44776669875422',
'Liana : +44776669875411',
'Matilda : +44776669875422',
'Freya : +44776669856',
'Lainey : +447766698777',
'Hallie : +447766698745',
'Jessie : +447766698733',
'Audrina : +447766698777',
'Blake : +447766698734',
'Hattie : +447766698734',
'Monserrat : +447766698766',
'Kiera : +447766698777',
'Laylah : +447766698788',
'Greta : +447766698734',
'Alyson : +447766698767',
'Emilee : +447766698756',
'Maryam : +447766698776',
'Melina : +447766698787',
'Dayana : +447766698745',
'Jaelynn : +447766698788',
'Beatrice : +447766698733',
'Frances : +447766698767',
'Elisabeth : +447766698734',
'Saige : +447766698767',
'Kensley : +447766698798',
'Meredith : +447766698734',
'Aranza : +447766698790',
'Rosa : +447766698767',
'Shiloh : +447766698745',
'Charli : +447766698778',
'Elyse : +447766698789',
'Alani : +447766698789',
'Mira : +447766698756',
'Lylah : +447766698777',
'Linda : +447766698756',
'Whitney : +447766698745',
'Alena : +447766698734',
'Jaycee : +447766698723',
'Joselyn : +447766698787',
'Ansley : +447766698723',
'Kynlee : +447766698712',
'Miah : +4477666987454',
'Tenley : +447766698777',
'Breanna : +447766698735',
'Emelia : +447766698778',
'Maia : +447766698712',
'Edith : +447766698777',
'Pearl : +447766698717',
'Anahi : +447766698788',
'Coraline : +447766698787',
'Samara : +447766698723',
'Demi : +4477666987542',
'Chanel : +44776669875423',
'Kimber : +447766698766',
'Lilith : +447766698777',
'Malaya : +447766698799',
'Jemma : +447766698788',
'Myra : +447766698715',
'Bryanna : +447766698756',
'Laney : +447766698777',
'Jaelyn : +447766698736',
'Kaylynn : +447766698747',
'Kallie : +447766698798',
'Natasha : +447766698747',
'Nathalie : +447766698788',
'Perla : +447766698788',
'Amani : +447766698736',
'Lilianna : +447766698788',
'Madalynn : +447766698736',
'Blair : +447766698777',
'Elianna : +447766698778',
'Karsyn : +447766698799',
'Lindsay : +447766698789',
'Elaine : +447766698780',
'Dulce : +447766698747',
'Ellen : +447766698744',
'Erica : +447766698768',
'Maisie : +447766698798',

'Renata : +447766698733',
'Kiley : +447766698755',
'Marina : +447766698734',
'Remi : +447766698756',
'Emmy : +447766698776',
'Ivanna : +447766698778',
'Amirah : +447766698734',
'Livia : +447766698767',
'Amelie : +447766698776',
'Irene : +447766698788',
'Mabel : +447766698745',
'Milan : +447766698778',
'Armani : +447766698777',
'Cara : +44776669875433',
'Ciara : +447766698777',
'Kathleen : +447766698756',
'Jaylynn : +447766698788',
'Caylee : +447766698799',
'Lea : +447766698746',
'Erika : +447766698734',
'Paola : +447766698767',
'Alma : +447766698723',
'Courtney : +4477666987576',
'Mae : +447766698778',
'Kassandra : +447766698734',
'Maleah : +447766698788',
'Remington : +447766698767',
'Leyla : +447766698734',
'Mina : +447766698777',
'Ariah : +447766698725',
'Christine : +447766698756',
'Jasmin : +447766698777',
'Kora : +4477666987543',
'Chaya : +4477666987542',
'Karlee : +4477666987545',
'Lailah : +4477666987547',
'Mara : +4477666987543',
'Jaylee : +4477666987534',
'Raquel : +447766698755',
'Siena : +447766698766',
'Lennon : +447766698799',
'Desiree : +447766698790',
'Hadassah : +4477666987544',
'Kenya : +4477666987544',
'Aliana : +447766698756',
'Wren : +44776669875445',
'Amiya : +44776669875434',
'Isis : +44776669875484',
'Zaniyah : +44776669875433',
'Avah : +44776669875465',
'Amia : +44776669875456',
'Cindy : +44776669875445',
'Eileen : +44776669875434',
'Kayden : +44776669875423',
'Madyson : +44776669875423',
'Celine : +44776669875423',
'Aryana : +44776669875423',
'Everleigh : +44776669875423',
'Isabela : +44776669875454',
'Reyna : +44776669875423',
'Teresa : +44776669875411',
'Jolene : +44776669875444',
'Marjorie : +447766698778',
'Myah : +447766698782',
'Clare : +447766698785',
'Claudia : +447766698745',
'Leanna : +447766698778',
'Noemi : +447766698790',
'Corinne : +447766698735',
'Simone : +447766698734',
'Alia : +447766698756',
'Brenda : +447766698778',
'Dorothy : +44776669875434',
'Emilie : +447766698767',
'Elin : +4477666987541',
'Tori : +4477666987544',
'Martha : +447766698745',
'Ally : +447766698767',
'Arely : +447766698799',
'Leona : +4477666987546',
'Patricia : +4477666987542',
'Sky : +4477666987542',
'Thalia : +4477666987543',
'Carolyn : +4477666987544',
'Emory : +447766698756',
'Nataly : +44776669875456',
'Paityn : +44776669875423',
'Shayla : +44776669875422',
'Averi : +44776669875422',
'Jazlynn : +44776669875434',
'Margot : +44776669875434',
'Lisa : +44776669875423',
'Lizbeth : +44776669875454',
'Nancy : +44776669875445',
'Deborah : +44776669875423',
'Ivory : +44776669875423',
'Khaleesi : +44776669875425',
'Elliot : +44776669875466',
'Meadow : +44776669875434',
'Yareli : +44776669875434',
'Farrah : +44776669875423',
'Milania : +44776669875477',
'Janessa : +44776669875445',
'Milana : +44776669875434',
'Zoie : +44776669875423',
'Adele : +44776669875411',
'Clarissa : +44776669875413',
'Hunter : +44776669875411',
'Lina : +44776669875474',
'Oakley : +44776669875433',
'Sariah : +44776669875422',
'Emmalynn : +44776669875412',
'Galilea : +44776669875415',
'Hailee : +44776669875451',
'Halle : +44776669875412',
'Sutton : +44776669875432',
'Giana : +44776669875444',
'Thea : +44776669875401',
'Denise : +44776669875422',
'Naya : +44776669875433',
'Kristina : +44776669875433',
'Liv : +44776669875444',
'Nathaly : +44776669875433',
'Wendy : +44776669875422',
'Aubrielle : +44776669875422',
'Brenna : +44776669875422',
'Carter : +44776669875422',
'Danika : +44776669875432',
'Monroe : +44776669875423',
'Celia : +44776669875454',
'Dana : +44776669875412',
'Jolie : +44776669875454',
'Taliyah : +44776669875434',
'Casey : +44776669875412',
'Miley : +44776669875478',
'Yamileth : +44776669875456',
'Jaylene : +44776669875455',
'Saylor : +44776669875434',
'Joyce : +44776669875415',
'Milena : +44776669875413',
'Zariyah : +44776669875417',
'Sandra : +44776669875417',
'Ariadne : +44776669875446',
'Aviana : +44776669875476',
'Mollie : +44776669875467',
'Cherish : +44776669875476',
'Alaya : +44776669875466',
'Asia : +44776669875444',
'Nola : +44776669875488',
'Penny : +44776669875499',
'Dixie : +44776669875444',
'Marisol : +44776669875411',
'Adrienne : +44776669875488',
'Rylan : +44776669875466',
'Kori : +44776669875414',
'Kristen : +44776669875456',
'Aimee : +44776669875434',
'Esme : +44776669875446',
'Laurel : +44776669875411',
'Aliza : +44776669875476',
'Roselyn : +44776669875422',
'Sloan : +44776669875446',
'Lorelai : +44776669875454',
'Jenny : +44776669875445',
'Katalina : +44776669875423',
'Lara : +44776669875423',
'Amya : +44776669875433',
'Ayleen : +44776669875433',
'Aubri : +44776669875433',
'Ariya : +44776669875423',
'Carlee : +44776669875433',
'Iliana : +44776669875433',
'Magnolia : +44776669875412',
'Aurelia : +44776669875414',

'Elliott : +44776669875455',
'Evalyn : +44776669875423',
'Natalee : +44776669875423',
'Rayna : +44776669875422',
'Heather : +44776669875422',
'Collins : +44776669875435',
'Estrella : +4477666987556',
'Rory : +44776669875434',
'Hana : +44776669875423',
'Kenna : +4477666987543',
'Jordynn : +4477666987543',
'Rosie : +4477666987545',
'Aiyana : +4477666987547',
'America : +4477666987543',
'Angeline : +4477666987543',
'Janiya : +4477666987541',
'Jessa : +4477666987547',
'Tegan : +4477666987548',
'Susan : +4477666987549',
'Emmalee : +4477666987541',
'Taryn : +4477666987542',
'Temperance : +4477666987546',
'Alissa : +4477666987547',
'Kenia : +4477666987548',
'Abbigail : +4477666987541',
'Briley : +4477666987548',
'Kailee : +4477666987543',
'Zaria : +4477666987541',
'Chana : +4477666987549',
'Lillianna : +4477666987549',
'Barbara : +4477666987540',
'Carla : +4477666987541',
'Aliya : +4477666987545',
'Bonnie : +4477666987542',
'Keyla : +4477666987541',
'Marianna : +4477666987547',
'Paloma : +4477666987544',
'Jewel : +4477666987544',
'Joslyn : +4477666987547',
'Saniyah : +4477666987544',
'Audriana : +4477666987542',
'Giovanna : +4477666987543',
'Hadleigh : +4477666987542',
'Mckayla : +4477666987543',
'Jaida : +4477666987548',
'Salma : +4477666987546',
'Sharon : +4477666987543',
'Emmaline : +4477666987546',
'Kimora : +4477666987541',
'Wynter : +4477666987544',
'Avianna : +447766698754',
'Amalia : +447766698776',
'Karlie : +447766698798',
'Kaidence : +447766698734',
'Kairi : +447766698776',
'Libby : +447766698778',
'Sherlyn : +4477666987534',
'Diamond : +447766698767',
'Holland : +447766698746',
'Zendaya : +447766698767',
'Mariyah : +447766698789',
'Zainab : +44776669874',
'Alisha : +447766698756',
'Ayanna : +447766698778',
'Ellison : +447766698735',
'Harlee : +447766698768',
'Lilyanna : +447766698737',
'Bryleigh : +447766698777',
'Julianne : +447766698791',
'Kaleigh : +447766698737',
'Miya : +447766698724',
'Yasmin : +447766698765',
'Anniston : +447766698776',
'Estelle : +447766698744',
'Emmeline : +447766698766',
'Faye : +447766698755',
'Kiana : +447766698777',
'Anabel : +447766698799',
'Zion : +4477666987543',
'Tara : +447766698756',
'Astrid : +447766698776',
'Emerie : +447766698734',
'Sidney : +447766698778',
'Zahra : +447766698789',
'Jaylin : +447766698736',
'Kinslee : +447766698789',
'Tabitha : +447766698729',
'Aubriella : +447766698700',
'Addilynn : +447766698728',
'Alyvia : +447766698780',
'Hadlee : +447766698779',
'Ingrid : +447766698728',
'Lilia : +447766698737',
'Macey : +447766698778',
'Azaria : +447766698766',
'Kaitlynn : +447766698755',
'Neriah : +4477666987578',
'Annabell : +447766698734',
'Ariyah : +447766698724',
'Janae : +447766698756',
'Kaiya : +447766698745',
'Reina : +447766698734',
'Rivka : +447766698776',
'Alisa : +447766698725',
'Marleigh : +447766698717',
'Alisson : +447766698717',
'Maliah : +447766698719',
'Mercy : +447766698710',
'Noa : +447766698750',
'Scarlette : +447766698739',
'Clementine : +447766698748',
'Frida : +447766698769',
'Ann : +447766698799',
'Sonia : +447766698735',
'Alannah : +447766698765',
'Avalynn : +447766698775',
'Dalia : +447766698783',
'Ayva : +447766698783',
'Stevie : +447766698798',
'Judith : +447766698735',
'Paulina : +447766698767',
'Azariah : +447766698787',
'Estella : +447766698735',
'Remy : +447766698726',
'Gwen : +447766698778',
'Mattie : +447766698726',
'Milani : +447766698789',
'Raina : +447766698739',
'Julieta : +447766698725',
'Renee : +447766698767',
'Lesly : +4477666987098',
'Abrielle : +4477666987764'
  ]
  constructor() { }

  ngOnInit() {
  }

}