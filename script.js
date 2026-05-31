const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const bookingForm = document.querySelector("#booking-form");
const formNote = document.querySelector("#form-note");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const languageButtons = document.querySelectorAll("[data-lang]");
const calendarGrid = document.querySelector(".calendar-grid");
const calendarMonth = document.querySelector(".calendar-month");
const calendarPrev = document.querySelector(".calendar-prev");
const calendarNext = document.querySelector(".calendar-next");
const datePicker = document.querySelector(".date-picker");
const checkinInput = document.querySelector('[name="checkin"]');
const checkoutInput = document.querySelector('[name="checkout"]');
const animatedItems = document.querySelectorAll(".service-grid article, .activity-list article");
const roomMainImage = document.querySelector(".room-main-image img");
const roomThumbs = document.querySelectorAll(".room-thumbs button");
const bookingRequestEndpoint = "https://formsubmit.co/ajax/info.medvedome@gmail.com";

const bookedDates = window.medveBookedDates || [];

const guestReviews = [
  {
    quote: "The tent was bigger and better in real life than in the photos, Barbara warmed up the lovely tub ahead of our arrival, and the setting was stunning! It felt like a secluded piece of forest but was accessible and safe. The kitchen was compact but modern and had everything we needed, the bathroom was lovely. It has all the benefits of being in nature but with all the comforts of a boutique hotel, and the care of family ownership. There were slippers and games for the whole family. We couldn't have wished for more - except to stay longer!",
    source: "Palmer-Grey, Booking.com",
    lang: "en",
    translations: {
      ro: "Cortul a fost mai mare și mai frumos în realitate decât în fotografii, Barbara a încălzit ciubărul minunat înainte de sosirea noastră, iar împrejurimile au fost superbe! Părea un colț retras de pădure, dar era accesibil și sigur. Bucătăria era compactă, dar modernă și avea tot ce ne trebuia, iar baia era minunată. Are toate avantajele apropierii de natură, dar cu tot confortul unui hotel boutique și grija unei afaceri de familie. Erau papuci și jocuri pentru întreaga familie. Nu ne-am fi putut dori mai mult, decât să rămânem mai mult timp!",
      hu: "A sátor a valóságban nagyobb és szebb volt, mint a képeken. Barbara már az érkezésünk előtt felfűtötte a kellemes dézsát, a környezet pedig lenyűgöző volt! Olyan érzés volt, mintha egy eldugott erdei zugban lennénk, mégis könnyen megközelíthető és biztonságos helyen. A konyha kicsi, de modern volt, és mindent megtaláltunk benne, amire szükségünk volt. A fürdőszoba is gyönyörű. A természet minden előnyét kínálja egy boutique hotel kényelmével és a családi vendéglátás gondoskodásával együtt. Papucsok és játékok is vártak az egész családra. Csak azt kívántuk, bárcsak tovább maradhatnánk!"
    }
  },
  {
    quote: "Me and my family spent one night at this extraordinary accommodation. I'm using Airbnb since 5 years or more and quite often, but this experience was far the BEST I ever had. Clean, stylish, luxurious, chill. Imagine spending the evening in the hot tub surrounded by the woodlands in dark and complete silence. I loved it. Wish all the best for Barbara. Also she was the greatest host, she even provided us with a UK to EU adapter which was a surprise to me that she had one. She thinks of everything.",
    source: "Gyorgy, Airbnb",
    lang: "en",
    translations: {
      ro: "Eu și familia mea am petrecut o noapte la această cazare extraordinară. Folosesc Airbnb de cinci ani sau chiar mai mult și destul de des, dar această experiență a fost de departe cea mai bună pe care am avut-o vreodată. Curat, elegant, luxos și relaxant. Imaginează-ți o seară în ciubăr, înconjurat de pădure, în întuneric și liniște deplină. Mi-a plăcut enorm. Îi doresc toate cele bune Barbarei. A fost și o gazdă extraordinară: ne-a oferit chiar și un adaptor din Marea Britanie pentru prize europene, ceea ce m-a surprins. Se gândește la toate.",
      hu: "A családommal egy éjszakát töltöttünk ezen a rendkívüli szálláshelyen. Több mint öt éve és elég gyakran használom az Airbnb-t, de messze ez volt a legjobb élményem. Tiszta, stílusos, luxus és nyugodt. Képzeld el, hogy este a dézsában ülsz, körülötted az erdő, sötétség és teljes csend. Imádtam. Minden jót kívánok Barbarának. Nagyszerű házigazda volt, még brit-európai adaptert is adott nekünk, ami meglepett. Mindenre gondol."
    }
  },
  {
    quote: "This place is amazing! Barbara was very kindly and helpful with me and my girlfriend: I asked for a cake and other things to make the perfect birthday there and she made all perfect! The place is amazing, you also have a beautiful hot tub where you can enjoy the place. It's an experience, a beautiful experience. Thank you Barbara again!",
    source: "Deniele, Airbnb",
    lang: "en",
    translations: {
      ro: "Locul acesta este minunat! Barbara a fost foarte amabilă și de ajutor cu mine și prietena mea: am rugat-o să pregătească un tort și alte lucruri pentru ca aniversarea să fie perfectă, iar ea a făcut totul minunat! Locul este superb și aveți și un ciubăr frumos în care vă puteți bucura de împrejurimi. Este o experiență, o experiență frumoasă. Îți mulțumesc din nou, Barbara!",
      hu: "Ez a hely csodálatos! Barbara nagyon kedves és segítőkész volt velem és a barátnőmmel. Tortot és néhány más dolgot kértem tőle, hogy tökéletes legyen az ottani születésnap, és mindent nagyszerűen megoldott! A hely gyönyörű, és van egy kellemes dézsa is, ahol élvezheted a környezetet. Ez egy élmény, méghozzá gyönyörű élmény. Még egyszer köszönöm, Barbara!"
    }
  },
  {
    quote: "Intimacy, attention to details, beauty, hospitality, luxurious comfort in the middle of nature, yet with easy access, excellent communication with the host, extra benefits, ideal hiding and resting place for a weekend relaxation, the private jacuzzi in the middle of the forest offers a unique spa-like experience! Everybody should spend a night here once in a lifetime!",
    source: "Andrea, Booking.com",
    lang: "en",
    translations: {
      ro: "Intimitate, atenție la detalii, frumusețe, ospitalitate, confort luxos în mijlocul naturii, dar cu acces ușor, comunicare excelentă cu gazda, beneficii suplimentare, loc ideal pentru retragere și odihnă într-un weekend. Jacuzzi-ul privat din mijlocul pădurii oferă o experiență spa unică! Toată lumea ar trebui să petreacă aici o noapte măcar o dată în viață!",
      hu: "Intimitás, figyelem a részletekre, szépség, vendégszeretet és luxuskényelem a természet közepén, mégis könnyű megközelíthetőséggel. Kiváló kommunikáció a házigazdával, extra figyelmességek, tökéletes rejtekhely és pihenőhely egy hétvégi kikapcsolódáshoz. Az erdő közepén található privát jacuzzi egyedülálló wellnessélményt kínál! Mindenkinek érdemes legalább egyszer egy éjszakát itt töltenie."
    }
  },
  {
    quote: "Exactly like in the photos, attention to details, the owners are very friendly, quality of the materials used for the dome.",
    source: "Homsi, Booking.com",
    lang: "en",
    translations: {
      ro: "Exact ca în fotografii, cu atenție la detalii, proprietari foarte prietenoși și materiale de calitate folosite pentru dom.",
      hu: "Pontosan olyan, mint a képeken: figyelem a részletekre, nagyon barátságos tulajdonosok és minőségi anyagok a dome-ban."
    }
  },
  {
    quote: "All the details regarding accommodation are perfect, there are even slippers for inside and for the terrace. The personal is very kind and helpful.",
    source: "Gloria, Booking.com",
    lang: "en",
    translations: {
      ro: "Toate detaliile cazării sunt perfecte. Există chiar și papuci pentru interior și pentru terasă. Personalul este foarte amabil și de ajutor.",
      hu: "A szállás minden részlete tökéletes. Még külön papucs is van bentre és a teraszra. A személyzet nagyon kedves és segítőkész."
    }
  },
  {
    quote: "Totul a fost peste așteptări, gazda este foarte primitoare, domul este foarte curat, baie moderna, atmosfera de vis, soba a încălzit domul suficient sa nu fie frig, chiar daca afară erau 7 grade. O experiență unică, recomand.",
    source: "Hindrich, Booking.com",
    lang: "ro",
    translations: {
      en: "Everything was beyond expectations, the host is very welcoming, the dome is very clean, the bathroom modern, the atmosphere dreamy, and the stove warmed the dome enough so it was not cold even though it was 7 degrees outside. A unique experience, I recommend it.",
      hu: "Minden felülmúlta a várakozásainkat. A házigazda nagyon barátságos, a dome nagyon tiszta, a fürdőszoba modern, a hangulat álomszerű. A kályha annyira jól befűtötte a dome-ot, hogy nem fáztunk, pedig kint 7 fok volt. Egyedülálló élmény, ajánlom."
    }
  },
  {
    quote: "Personalul foarte amabil, iar locatia este la superlativ. Este un loc de vis, o oaza de liniste in mijlocul naturii.",
    source: "Bogdan, Booking.com",
    lang: "ro",
    translations: {
      en: "The staff was very kind and the location is outstanding. It is a dream place, an oasis of peace in the middle of nature.",
      hu: "A személyzet nagyon kedves, a helyszín pedig kivételes. Álomszerű hely, a nyugalom oázisa a természet közepén."
    }
  },
  {
    quote: "Una dintre cele mai frumoase locații din Romania.",
    source: "Razvimao, Booking.com",
    lang: "ro",
    translations: {
      en: "One of the most beautiful locations in Romania.",
      hu: "Románia egyik legszebb helyszíne."
    }
  },
  {
    quote: "Cel mai mult mi-a placut asezarea cortului, in natura, singur, nu puteai fi deranjat de alte persoane, ceea ce te lasa sa te bucuri de tot ceea ce te inconjura!",
    source: "Aura, Booking.com",
    lang: "ro",
    translations: {
      en: "What I liked most was the position of the tent, alone in nature, where you could not be disturbed by other people, which let you enjoy everything around you.",
      hu: "Leginkább az tetszett, hogy a sátor egyedül áll a természetben. Mások nem zavarhatnak meg, így igazán élvezheted mindazt, ami körülvesz."
    }
  },
  {
    quote: "Am avut o experiență extraordinară la cazare și nu pot recomanda suficient acest loc! Gazda a fost incredibil de primitoare și atentă, asigurându-se că ne simțim ca acasă. Ciubărul a fost punctul culminant al sejurului, oferindu-ne momente de relaxare desăvârșită sub cerul liber. Atmosfera generală a fost minunată, cu un peisaj de vis și o liniște perfectă pentru a ne deconecta de la agitația zilnică. În concluzie, o experiență de neuitat pe care abia aștept să o repet!",
    source: "Marius, Booking.com",
    lang: "ro",
    translations: {
      en: "We had an extraordinary stay and I cannot recommend this place enough. The host was incredibly welcoming and attentive, making sure we felt at home. The hot tub was the highlight of the stay, giving us perfect relaxation under the open sky. The overall atmosphere was wonderful, with a dream landscape and perfect quiet for disconnecting from daily noise. An unforgettable experience I cannot wait to repeat.",
      hu: "Rendkívüli élményünk volt, és nem tudom eléggé ajánlani ezt a helyet! A házigazda hihetetlenül barátságos és figyelmes volt, gondoskodott róla, hogy otthon érezzük magunkat. A tartózkodás fénypontja a dézsa volt, amely tökéletes kikapcsolódást nyújtott a szabad ég alatt. A hangulat csodálatos, a táj álomszerű, a csend pedig tökéletes ahhoz, hogy kiszakadjunk a mindennapi nyüzsgésből. Felejthetetlen élmény, alig várom, hogy megismételjük!"
    }
  },
  {
    quote: "O locatie deosebita, in linistea naturii. Barbara este minunata! Recomand relaxarea in ciubar, noaptea. Nu am vazut niciodata atat de multe stele, atat de clar. Iar somnul de dupa, cu focul aprins in soba, este exceptional!",
    source: "Dana, Booking.com",
    lang: "ro",
    translations: {
      en: "A special location in the quiet of nature. Barbara is wonderful. I recommend relaxing in the hot tub at night. I have never seen so many stars so clearly. And the sleep afterwards, with the fire lit in the stove, is exceptional.",
      hu: "Különleges hely a természet csendjében. Barbara csodálatos! Ajánlom az éjszakai pihenést a dézsában. Soha nem láttam még ennyi csillagot ilyen tisztán. Az utána következő alvás pedig, a kályhában égő tűz mellett, kivételes."
    }
  },
  {
    quote: "Tiszta, ápolt, csendes környezet, tökéletes pihenésre.",
    source: "Hunor, Booking.com",
    lang: "hu",
    translations: {
      en: "Clean, well-kept and quiet surroundings, perfect for resting.",
      ro: "Împrejurimi curate, îngrijite și liniștite, perfecte pentru odihnă."
    }
  },
  {
    quote: "A Medve Dome egy fenyvesekkel övezett tisztáson található. A Dome maga egy kicsi ékszer, mindennel felszerelve, amire a családnak szüksége lehet. A hálószoba az óriási panoráma ablakkal, igazi élménynek számít. A konyha felszereltsége is rendkívüli, a fürdőszoba is első osztályú. A kinti dézsa, a föléje magasodó fenyőfával és a rajta lakó mókussal igazi luxus :-). A házigazdák nagyon kedvesek és segítőkészek voltak.",
    source: "Erika, Booking.com",
    lang: "hu",
    translations: {
      en: "Medve Dome is located in a clearing surrounded by pine trees. The dome itself is a small jewel, equipped with everything a family may need. The bedroom with the huge panoramic window is a real experience. The kitchen equipment is exceptional and the bathroom is first class. The outdoor hot tub, with the tall pine tree above it, is true luxury. The hosts were very kind and helpful.",
      ro: "Medve Dome se află într-o poiană înconjurată de brazi. Domul este o mică bijuterie, dotată cu tot ce ar putea avea nevoie o familie. Dormitorul cu fereastra panoramică uriașă este o adevărată experiență. Bucătăria este excepțional de bine echipată, iar baia este de primă clasă. Ciubărul exterior, cu bradul înalt deasupra sa, este un adevărat lux. Gazdele au fost foarte amabile și de ajutor."
    }
  },
  {
    quote: "A fákkal körülvett, egy kis tisztással rendelkező szállás hangulata fantasztikus volt, a kényelemről nem is beszélve. Tiszta, kényelmes és felszerelt volt. A dézsa, melyet este vettünk használatba külön élmény volt a számunkra. A házigazdák barátságosak és kedvesek voltak.",
    source: "Örs, Booking.com",
    lang: "hu",
    translations: {
      en: "The atmosphere of the accommodation surrounded by trees, with a small clearing, was fantastic, not to mention the comfort. It was clean, comfortable and equipped. The hot tub, which we used in the evening, was a special experience for us. The hosts were friendly and kind.",
      ro: "Atmosfera cazării înconjurate de copaci, cu o mică poiană, a fost fantastică, ca să nu mai vorbim despre confort. A fost curat, comod și bine echipat. Ciubărul, pe care l-am folosit seara, a fost o experiență aparte pentru noi. Gazdele au fost prietenoase și amabile."
    }
  },
  {
    quote: "Cortul este minunat! In mijlocul naturii, padure si triluri de pasari. Ciubarul era pregatit, lenjerii si prosoape impecabile, flori proaspete pe masa:) Bucatarioara este utilata suficient, totul a decurs ok. Gazda primitoare, ne-a ajutat cu tot ce poate fi vizitat in zona.",
    source: "Catalina, Booking.com",
    lang: "ro",
    translations: {
      en: "The tent is wonderful, in the middle of nature, with forest and birdsong. The hot tub was ready, the linens and towels impeccable, fresh flowers on the table. The small kitchen is sufficiently equipped and everything went well. The welcoming host helped us with everything that can be visited in the area.",
      hu: "A sátor csodálatos! A természet közepén, erdővel és madárcsicsergéssel körülvéve. A dézsa elő volt készítve, az ágyneműk és törölközők kifogástalanok voltak, az asztalon friss virágok vártak. A kis konyha megfelelően felszerelt, minden rendben ment. A barátságos házigazda segített abban is, hogy mit érdemes megnézni a környéken."
    }
  },
  {
    quote: "Ne-a placut totul, a fost perfect: ciubarul, gazdele foarte amabile, confortul, estetica si micile detalii, respectul fata de mediu, pisicile cu care se jucau copiii, pina si caprioarele pareau sa fie programate sa ne dea buna dimineata la micul dejun de pe terasa :-).",
    source: "Lia, Booking.com",
    lang: "ro",
    translations: {
      en: "We liked everything, it was perfect: the hot tub, the very kind hosts, the comfort, the aesthetics and small details, respect for the environment, the cats the children played with, even the deer seemed programmed to say good morning during breakfast on the terrace.",
      hu: "Minden tetszett, tökéletes volt: a dézsa, a nagyon kedves házigazdák, a kényelem, az esztétika és az apró részletek, a környezet tisztelete, a macskák, amelyekkel a gyerekek játszottak. Még az őzek is mintha arra lettek volna beprogramozva, hogy jó reggelt kívánjanak a teraszon elfogyasztott reggelinél."
    }
  },
  {
    quote: "A tulajdonosok nagyon kedvesek voltak. Csodálatos erdei környezet, rendkívüli élmény a reggeli kávé közben látni az őzikeket.",
    source: "Guest review, Booking.com",
    lang: "hu",
    translations: {
      en: "The owners were very kind. A wonderful forest setting, and an extraordinary experience to see the deer while having morning coffee.",
      ro: "Proprietarii au fost foarte amabili. Un cadru minunat în pădure și o experiență extraordinară să vezi căprioarele în timp ce îți bei cafeaua de dimineață."
    }
  },
  {
    quote: "We fell in love with this place, enjoyed the big comfort through the whirlpool and liked that feeling to be out in the woods. The communication with Barbara was easy and she is a very friendly woman.",
    source: "Anna, Airbnb",
    lang: "en",
    translations: {
      ro: "Ne-am îndrăgostit de acest loc, ne-am bucurat de confortul oferit de jacuzzi și ne-a plăcut senzația de a fi în mijlocul pădurii. Comunicarea cu Barbara a fost ușoară și este o femeie foarte prietenoasă.",
      hu: "Beleszerettünk ebbe a helybe. Élveztük a pezsgőfürdő kényelmét és azt az érzést, hogy az erdőben vagyunk. Barbarával könnyű volt kommunikálni, és nagyon barátságos."
    }
  }
];
let calendarDate = new Date();
calendarDate.setDate(1);
let activeDateInput = checkinInput;

const translations = {
  en: {
    langName: "English",
    title: "Medve Dome | Luxury Glamping in Harghita",
    description: "Medve Dome is a private glamping dome in Vlahita, Harghita, Romania with forest views, hot tub, terrace, fireplace, grill and cozy boutique comfort.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    nav: ["About", "The Dome", "Services", "Gallery", "See & Do", "FAQ", "Book Now"],
    hero: {
      eyebrow: "Private forest glamping in Harghita",
      text: "Luxury camping for slow mornings, starry nights and a warm, cozy stay close to nature.",
      primary: "Request a stay",
      secondary: "View gallery"
    },
    about: {
      kicker: "About",
      title: "A quiet dome with the comforts that make being in nature easy.",
      text: "Nestled in the heart of nature, Medve Dome offers an unparalleled luxury glamping experience. Our geodesic dome combines modern comfort with the raw beauty of nature, creating a sanctuary where you can disconnect from the everyday and reconnect with what matters most.\n\nEach element has been thoughtfully designed to provide you with an authentic yet luxurious outdoor experience. From the moment you arrive, you'll be immersed in tranquility, surrounded by trees and the gentle sounds of nature.\n\nWhether you're seeking a romantic getaway, a peaceful retreat or an adventure with the family in nature, Medve Dome provides the perfect setting for creating unforgettable memories."
    },
    dome: {
      kicker: "The Dome",
      title: "One private dome, made for memorable stays.",
      text: "The dome has a double bed downstairs and another in the mezzanine, giving guests a better view of the skyline window. Lie back, watch the stars and enjoy a romantic, tucked-away experience.",
      features: [
        "Double bed plus mezzanine sleeping area",
        "Private bathroom with hot shower",
        "Fully equipped kitchen and outdoor grill",
        "Panoramic views",
        "Terrace, garden, hammock and sun beds",
        "Private hot tub",
        "Climate control for comfort",
        "Ambient lighting and power outlets"
      ],
      capacityTitle: "Capacity",
      capacityText: "Perfect for couples or small families, our dome comfortably accommodates up to 4 guests, ensuring an intimate and exclusive experience.",
      link: "Check availability"
    },
    services: {
      kicker: "Services",
      title: "Everything for an easy escape.",
      items: [
        ["Terrace with Sun Beds", "Relax in the sun, snooze under the trees in the hammock or read a book inside in the swing chair."],
        ["Fire Place", "Spend the night surrounded by peace and quiet, feeling the warmth of the fireplace while listening to the crackle of the fire."],
        ["Outdoor Grill Experience", "Prepare your favorite meals on the outdoor grill and enjoy a cozy barbecue evening under the open sky."],
        ["Garden and Sky View", "Sleep under the sky, watching the stars from the comfort of your own cozy bed."],
        ["Hot Tub", "Relax in the hot tub with trees around you and stars above you."],
        ["Garden", "Walk around the property, admire nature, listen to the birds or sit on the bench looking at the pond."]
      ]
    },
    gallery: {
      kicker: "Gallery",
      title: "A glimpse of the dome, the garden and quiet moments outside."
    },
    activities: {
      kicker: "See & Do",
      title: "Optional activities in the area.",
      items: [
        ["Hiking & Walking", "Explore Harghita Madaras, Harghita Bai, the Gorge of Varghis, Lake Zetea and forest trails with beautiful views, waterfalls, caves and bridges."],
        ["Leisure Center & Thermal Baths", "Vlahita and Homorod offer leisure centers, swimming pools, sauna, salt water pools and thermal baths with natural hot water."],
        ["Kids Choice", "Children can enjoy the garden, games and trampoline. Nearby options include the Homorod Bai bobsleigh track, Balu Park and Mini Transylvania Park."],
        ["Leisure Activities", "Take a real break with a stroll in the woods, a good book, meditation or a quiet afternoon in the garden."],
        ["Horse Riding", "The area offers horse riding possibilities and guided riding tours for children and adults."],
        ["Winter Activities", "Harghita Bai and Harghita Madaras are excellent Transylvanian ski stations, with slopes, sleigh rides, snowmobile tours and skating options."]
      ]
    },
    review: {
      text: "\"It has all the benefits of being in nature but with all the comforts of a boutique hotel, and the care of family ownership.\"",
      source: "Palmer-Grey, Booking.com",
      sectionKicker: "Reviews",
      sectionTitle: "Loved by guests for quiet, comfort and family care.",
      showTranslation: "Show translation",
      hideTranslation: "Hide translation",
      translationLabel: "Translation",
      cards: [
        ["\"It has all the benefits of being in nature but with all the comforts of a boutique hotel.\"", "Palmer-Grey, Booking.com"],
        ["\"Linistea, intimitatea, atentia la detalii din partea gazdelor.\"", "Cezarina, Booking.com"],
        ["\"Tiszta, apolt, csendes kornyezet, tokeletes pihenesre.\"", "Hunor, Booking.com"],
        ["\"Intimacy, attention to details, beauty, hospitality, luxurious comfort in the middle of nature.\"", "Andrea, Booking.com"],
        ["\"Exceptional guest score: 9.8 on Booking.com and 5.0 on Airbnb.\"", "Public listing scores"],
        ["\"Camping-style comfort with everything needed, in a peaceful clearing surrounded by trees.\"", "Ioandecean, Booking.com"],
        ["\"Clean, comfortable, beautiful scenery, and a very kind host.\"", "Bianca.z, Booking.com"],
        ["\"Exactly like the photos, with friendly owners and attention to detail.\"", "Homsi, Booking.com"],
        ["\"A different way of being in the heart of nature.\"", "Gloria, Booking.com"],
        ["\"There are all the conditions to spend a successful stay.\"", "Florentina, Booking.com"]
      ],
      links: ["Booking.com reviews", "Airbnb listing", "Google Maps"]
    },
    faq: {
      kicker: "Questions",
      title: "Frequently asked questions.",
      items: [
        ["Is there parking?", "Yes, free parking is available on site."],
        ["Is it accessible by a low car?", "Yes, the road on the street is in very good condition and can be accessed by any car."],
        ["Is there a restaurant?", "The nearest restaurants are about 5 km away. They also do delivery to the Dome."],
        ["Is there any food option at the property?", "No food is provided at the Dome. There is a kitchen inside and a grill outside. The nearest restaurants and supermarkets are about 5 km away."],
        ["Is there a possibility for a barbecue?", "Yes, and charcoal is provided."],
        ["Is there A/C in the Dome?", "There is no A/C, but there is a fan for hot summer days. There are plenty of shaded places outside for relaxing."],
        ["Is there signal? WiFi?", "Yes, there is very good signal. Orange and Vodafone have the best signal. There is no WiFi."],
        ["Is there a fence around the property? Are there any bears?", "No, there is no fence around the property, but the area is safe. Mainly deer and foxes come around for a visit."]
      ]
    },
    availability: {
      kicker: "Availability",
      title: "See open dates before sending a request.",
      text: "Green days are available. Warm marked days are already booked or unavailable. Please send a request and we will confirm the dates personally.",
      prev: "Prev",
      next: "Next",
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      available: "Open",
      booked: "Booked",
      closed: "Closed",
      note: "Choose an available date.",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    booking: {
      kicker: "Booking Request",
      title: "Tell us when you would like to stay.",
      text: "Send a simple request and we will reply with availability, price and next steps. For the fastest answer, you can also message us on WhatsApp.",
      labels: ["Full name", "Preferred contact", "Email, phone or WhatsApp number", "Check-in", "Check-out", "Adults", "Children", "Pets", "Message"],
      preferred: ["Email", "Phone", "WhatsApp"],
      datePlaceholder: "YYYY-MM-DD",
      placeholder: "Tell us anything important about your stay.",
      button: "Send request",
      note: "This sends your request directly to Medve Dome.",
      sent: "Thank you. Your request was sent and we will get in touch with you soon.",
      sending: "Sending your request...",
      sendError: "Something went wrong. Please message us on WhatsApp or email info.medvedome@gmail.com.",
      subject: "Booking request for Medve Dome",
      emailIntro: "Hello Medve Dome,\n\nI would like to request a stay.",
      emailFields: ["Name", "Email or phone", "Check-in", "Check-out", "Adults", "Children", "Pets", "Preferred contact", "Message"]
    },
    bookingPage: {
      heroKicker: "Booking Request",
      heroTitle: "Book Medve Dome",
      heroText: "Check the important details, choose your preferred dates and send us a request. We will get in touch with you about the next steps.",
      contact: "Vlahita, Harghita, Romania",
      priceFrom: "From",
      priceValue: "650 LEI",
      priceNight: "Per Night",
      propertiesTitle: "Properties",
      propertyLabels: ["Accommodates:", "Size:", "Beds:"],
      propertyValues: ["4", "28 sq m", "1 Double(s), 1 Queen(s)"],
      checkTitle: "Check In and Out",
      checkLabels: ["Check-In", "Check-Out"],
      checkValues: ["02:00 PM", "12:00 PM"],
      termsTitle: "Terms",
      termsLabels: ["Direct request", "Deposit"],
      termsValues: ["We personally confirm every stay", "20% to confirm the booking"],
      importantTitle: "Important",
      importantItems: [
        "The hot tub is included in the price.",
        "After completing the booking form we will get in touch with you about your reservation and send all booking details.",
        "Your booking is final only after paying the <strong>20% deposit</strong> through Revolut, Internet Banking or Bank Transfer.",
        "Full payment is made on the day of your check-in.",
        "In case of cancellation, the full deposit is returnable if cancellation is made <strong>7 days</strong> before check-in.",
        "Rescheduling is possible depending on availability, with at least <strong>5 days' notice</strong>.",
        "Pets are welcome. Please include the number of pets in your request.",
        "<strong>Smoking:</strong> Smoking is not allowed inside the dome. It is only permitted outside/on the terrace, while respecting cleanliness and safety.",
        "<strong>Shoes inside:</strong> Outdoor shoes are not allowed inside. Please use the indoor slippers provided."
      ],
      moreKicker: "More Info",
      moreTitle: "Comfort, warmth and the skyline window.",
      moreText: [
        "Medve Dome is equipped with a Double Bed downstairs and one in the mezzanine, allowing you a better view of the skyline window where you can stare at the sky and watch the stars. It can be a truly memorable and romantic experience.",
        "It has a wood stove and an en-suite bathroom with a modern Eco-toilet that uses less water. The kitchen is equipped with the amenities needed to cook. Towels, pillows, duvets, bed linens and blankets are provided for free, washed with unscented organic and chemical-free detergent. We also provide organic soap and shower gel, and extra toilet paper."
      ],
      amenitiesKicker: "Amenities",
      amenitiesTitle: "Included for your stay.",
      amenities: ["Shower", "Kitchen", "Towels", "Fan", "Grill", "Fridge", "Skyline Window", "Terrace", "Wood Stove", "Hot Tub", "Sun Beds", "Linen", "Coffee", "Cookies", "Salt & Pepper", "Games", "Slippers", "Organic Soap"],
      policiesKicker: "Policies",
      policiesTitle: "Reservation Policy",
      policyItems: [
        ["Hot Tub:", "The hot tub is included and may only be used according to the instructions provided. It takes time to heat, so please let us know in advance if you'd like to use it."],
        ["Smoking:", "Smoking is not allowed inside the dome. It is only permitted outside/on the terrace, while respecting cleanliness and safety."],
        ["Shoes inside:", "Outdoor shoes are not allowed inside. Please use the indoor slippers provided."]
      ],
      contactKicker: "Contact Us",
      contactTitle: "Find us in Vlahita, Harghita."
    },
    footer: {
      kicker: "Contact",
      location: "Vlahita, Jud. Harghita, Romania",
      phone: "Tel: +40 742 919 341"
    },
    whatsapp: "WhatsApp",
    whatsappAria: "Message Medve Dome on WhatsApp",
    close: "Close"
  },
  ro: {
    langName: "Română",
    title: "Medve Dome | Glamping de lux în Harghita",
    description: "Medve Dome este un dom privat de glamping în Vlăhița, Harghita, cu vedere spre natură, ciubăr, terasă, șemineu, grătar și confort boutique.",
    menuOpen: "Deschide meniul",
    menuClose: "Închide meniul",
    nav: ["Despre", "Domul", "Servicii", "Galerie", "De văzut", "Întrebări frecvente", "Rezervă"],
    hero: {
      eyebrow: "Glamping privat în pădure, în Harghita",
      text: "Camping de lux pentru dimineți liniștite, nopți cu stele și o ședere caldă, aproape de natură.",
      primary: "Cere o rezervare",
      secondary: "Vezi galeria"
    },
    about: {
      kicker: "Despre",
      title: "Un dom liniștit, cu tot confortul care face natura ușor de trăit.",
      text: "Așezat în inima naturii, Medve Dome oferă o experiență de glamping luxoasă și aparte. Domul nostru geodezic îmbină confortul modern cu frumusețea autentică a naturii, creând un refugiu în care te poți desprinde de cotidian și reconecta cu ceea ce contează cu adevărat.\n\nFiecare detaliu a fost gândit pentru a-ți oferi o experiență autentică în aer liber, fără să renunți la confort. Din momentul în care ajungi, ești înconjurat de liniște, copaci și sunetele blânde ale naturii.\n\nFie că îți dorești o escapadă romantică, o retragere liniștită sau o aventură în natură alături de familie, Medve Dome este locul potrivit pentru amintiri de neuitat."
    },
    dome: {
      kicker: "Domul",
      title: "Un singur dom privat, gândit pentru șederi memorabile.",
      text: "Domul are un pat dublu la parter și încă unul în mezanin, de unde oaspeții au o priveliște mai bună spre fereastra din tavan. Întinde-te, privește stelele și bucură-te de o experiență romantică, retrasă.",
      features: [
        "Pat dublu și zona de dormit în mezanin",
        "Baie privată cu duș cald",
        "Bucătărie complet utilată și grătar exterior",
        "Vederi panoramice",
        "Terasă, grădină, hamac și șezlonguri",
        "Ciubăr privat",
        "Control al temperaturii pentru confort",
        "Lumini ambientale și prize"
      ],
      capacityTitle: "Capacitate",
      capacityText: "Perfect pentru cupluri sau familii mici, domul nostru găzduiește confortabil până la 4 oaspeți, păstrând o experiență intimă și exclusivă.",
      link: "Verifică disponibilitatea"
    },
    services: {
      kicker: "Servicii",
      title: "Tot ce ai nevoie pentru o escapadă ușoară în pădure.",
      items: [
        ["Terasă cu șezlonguri", "Relaxează-te la soare, dormitează la umbra copacilor în hamac sau citește o carte în scaunul suspendat."],
        ["Șemineu", "Petrece seara în liniște, înconjurat de pădure, simțind căldura focului și ascultând trosnetul lemnelor."],
        ["Grătar în aer liber", "Pregătește mâncarea preferată la grătar și bucură-te de o seară caldă sub cerul liber."],
        ["Grădină și vedere spre cer", "Dormi sub cer și privește stelele din confortul propriului pat."],
        ["Ciubăr", "Relaxează-te în ciubăr, cu copacii în jur și stelele deasupra."],
        ["Grădină", "Plimbă-te pe proprietate, admiră natura, ascultă păsările sau stai pe bancă privind iazul."]
      ]
    },
    gallery: {
      kicker: "Galerie",
      title: "O privire spre dom, grădină și momentele liniștite de afară."
    },
    activities: {
      kicker: "De văzut",
      title: "Activități opționale în zonă.",
      items: [
        ["Drumeții și plimbări", "Explorează Harghita Madaras, Harghita Băi, Cheile Varghisului, Lacul Zetea și trasee prin pădure cu priveliști frumoase, cascade, peșteri și podețe."],
        ["Centre de agrement și băi termale", "Vlăhița și Homorod oferă centre de agrement, piscine, saună, bazine cu apă sărată și băi termale cu apă naturală caldă."],
        ["Pentru copii", "Copiii se pot bucura de grădină, jocuri și trambulină. În apropiere sunt pista de bob din Homorod Băi, Balu Park și Mini Transylvania Park."],
        ["Relaxare", "Ia o pauză adevărată: o plimbare prin pădure, o carte bună, meditație sau o după-amiază liniștită în grădină."],
        ["Călărie", "În zonă există opțiuni de călărie și ture ghidate pentru copii și adulți."],
        ["Activități de iarnă", "Harghita Băi și Harghita Madaras sunt stațiuni de schi foarte bune din Transilvania, cu pârtii, plimbări cu sania, ture cu snowmobilul și patinoare."]
      ]
    },
    review: {
      text: "\"Are toate avantajele naturii, dar cu tot confortul unui hotel boutique și grija unei afaceri de familie.\"",
      source: "Palmer-Grey, Booking.com",
      sectionKicker: "Recenzii",
      sectionTitle: "Oaspeții apreciază liniștea, confortul și grija familiei.",
      showTranslation: "Vezi traducerea",
      hideTranslation: "Ascunde traducerea",
      translationLabel: "Traducere",
      cards: [
        ["\"Are toate avantajele naturii, dar cu tot confortul unui hotel boutique.\"", "Palmer-Grey, Booking.com"],
        ["\"Liniștea, intimitatea, atenția la detalii din partea gazdelor.\"", "Cezarina, Booking.com"],
        ["\"Mediu curat, îngrijit și liniștit, perfect pentru odihnă.\"", "Hunor, Booking.com"],
        ["\"Intimitate, atenție la detalii, frumusețe, ospitalitate și confort luxos în mijlocul naturii.\"", "Andrea, Booking.com"],
        ["\"Scor excepțional: 9.8 pe Booking.com și 5.0 pe Airbnb.\"", "Scoruri publice"],
        ["\"Confort ca la camping, cu tot ce este necesar, într-o poiană liniștită înconjurată de copaci.\"", "Ioandecean, Booking.com"],
        ["\"Curat, confortabil, peisaj frumos și o gazdă foarte amabilă.\"", "Bianca.z, Booking.com"],
        ["\"Exact ca în fotografii, cu proprietari prietenoși și atenție la detalii.\"", "Homsi, Booking.com"],
        ["\"Un mod diferit de a fi în inima naturii.\"", "Gloria, Booking.com"],
        ["\"Există toate condițiile pentru a petrece un sejur reușit.\"", "Florentina, Booking.com"]
      ],
      links: ["Recenzii Booking.com", "Anunț Airbnb", "Google Maps"]
    },
    faq: {
      kicker: "Întrebări",
      title: "Întrebări frecvente.",
      items: [
        ["Există parcare?", "Da, parcarea gratuită este disponibilă la proprietate."],
        ["Se poate ajunge cu o mașină joasă?", "Da, drumul de pe stradă este în stare foarte bună și poate fi accesat cu orice mașină."],
        ["Există restaurant?", "Cele mai apropiate restaurante sunt la aproximativ 5 km. Unele livrează și la Dome."],
        ["Există mâncare la proprietate?", "Nu oferim mâncare la Dome. Există o bucătărie în interior și un grătar afară. Restaurantele și supermarketurile cele mai apropiate sunt la aproximativ 5 km."],
        ["Se poate face grătar?", "Da, iar cărbunele este inclus."],
        ["Există aer condiționat în dom?", "Nu există aer condiționat, dar există un ventilator pentru zilele călduroase. Afară sunt multe locuri umbrite pentru relaxare."],
        ["Există semnal? WiFi?", "Da, există semnal foarte bun. Orange și Vodafone au cel mai bun semnal. Nu există WiFi."],
        ["Există gard în jurul proprietății? Sunt urși?", "Nu există gard în jurul proprietății, dar zona este sigură. În principal căprioare și vulpi mai vin în vizită."]
      ]
    },
    availability: {
      kicker: "Disponibilitate",
      title: "Vezi datele libere înainte să trimiți cererea.",
      text: "Zilele verzi sunt disponibile. Zilele marcate cu o culoare caldă sunt deja rezervate sau indisponibile. Trimite o cerere și îți vom confirma personal datele.",
      prev: "Înapoi",
      next: "Înainte",
      weekdays: ["Lun", "Mar", "Mie", "Joi", "Vin", "Sam", "Dum"],
      available: "Liber",
      booked: "Rezervat",
      closed: "Închis",
      note: "Alege o dată disponibilă.",
      monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
    },
    booking: {
      kicker: "Cerere de rezervare",
      title: "Spune-ne când ai vrea să vii.",
      text: "Trimite o cerere simplă și îți vom răspunde cu disponibilitatea, prețul și pașii următori. Pentru cel mai rapid răspuns, ne poți scrie și pe WhatsApp.",
      labels: ["Nume complet", "Metoda preferată de contact", "Email, telefon sau număr WhatsApp", "Check-in", "Check-out", "Adulți", "Copii", "Animale de companie", "Mesaj"],
      preferred: ["Email", "Telefon", "WhatsApp"],
      datePlaceholder: "AAAA-LL-ZZ",
      placeholder: "Scrie-ne orice detaliu important despre șederea ta.",
      button: "Trimite cererea",
      note: "Cererea ta se trimite direct către Medve Dome.",
      sent: "Mulțumim. Cererea ta a fost trimisă și te vom contacta în curând.",
      sending: "Se trimite cererea...",
      sendError: "Ceva nu a funcționat. Te rugăm să ne scrii pe WhatsApp sau la info.medvedome@gmail.com.",
      subject: "Cerere de rezervare pentru Medve Dome",
      emailIntro: "Bună, Medve Dome,\n\nAș dori să trimit o cerere de rezervare.",
      emailFields: ["Nume", "Email sau telefon", "Check-in", "Check-out", "Adulți", "Copii", "Animale de companie", "Metoda preferată de contact", "Mesaj"]
    },
    bookingPage: {
      heroKicker: "Cerere de rezervare",
      heroTitle: "Rezervă Medve Dome",
      heroText: "Verifică detaliile importante, alege datele preferate și trimite-ne o cerere. Te vom contacta cu pașii următori.",
      contact: "Vlăhița, Harghita, România",
      priceFrom: "De la",
      priceValue: "650 LEI",
      priceNight: "Pe noapte",
      propertiesTitle: "Proprietăți",
      propertyLabels: ["Capacitate:", "Dimensiune:", "Paturi:"],
      propertyValues: ["4", "28 mp", "1 pat dublu, 1 pat queen"],
      checkTitle: "Check-in și check-out",
      checkLabels: ["Check-in", "Check-out"],
      checkValues: ["14:00", "12:00"],
      termsTitle: "Termeni",
      termsLabels: ["Cerere directă", "Avans"],
      termsValues: ["Confirmăm personal fiecare ședere", "20% pentru confirmarea rezervării"],
      importantTitle: "Important",
      importantItems: [
        "Ciubărul este inclus în preț.",
        "După completarea formularului de rezervare, te vom contacta cu toate detaliile rezervării.",
        "Rezervarea devine finală doar după plata unui <strong>avans de 20%</strong> prin Revolut, Internet Banking sau Transfer Bancar.",
        "Plata integrală se face în ziua check-in-ului.",
        "În caz de anulare, avansul se returnează integral dacă anularea se face cu <strong>7 zile</strong> înainte de check-in.",
        "Reprogramarea este posibilă în funcție de disponibilitate, cu cel puțin <strong>5 zile</strong> înainte.",
        "Animalele de companie sunt binevenite. Te rugăm să incluzi numărul lor în cerere.",
        "<strong>Fumatul:</strong> Fumatul este interzis în interiorul domului. Este permis doar afară/pe terasă, cu respectarea curățeniei și siguranței.",
        "<strong>Încălțăminte:</strong> Nu este permis să purtați încălțăminte de exterior în interior. Vă rugăm să folosiți papucii furnizați."
      ],
      moreKicker: "Mai multe informații",
      moreTitle: "Confort, căldură și fereastra spre cer.",
      moreText: [
        "Medve Dome este echipat cu un pat dublu la parter și încă un pat în mezanin, de unde poți vedea mai bine fereastra din tavan, să privești cerul și stelele. Poate fi o experiență cu adevărat memorabilă și romantică.",
        "Domul are sobă pe lemne și baie proprie cu o toaletă Eco modernă, care folosește mai puțină apă. Bucătăria este utilată pentru gătit. Prosoapele, pernele, pilotele, lenjeria și păturile sunt incluse și spălate cu detergent organic, fără parfum și fără chimicale. Oferim și săpun organic, gel de duș și hârtie igienică extra."
      ],
      amenitiesKicker: "Dotări",
      amenitiesTitle: "Incluse în șederea ta.",
      amenities: ["Duș", "Bucătărie", "Prosoape", "Ventilator", "Grătar", "Frigider", "Fereastra spre cer", "Terasă", "Sobă pe lemne", "Ciubăr", "Șezlonguri", "Lenjerie", "Cafea", "Prăjiturele", "Sare și piper", "Jocuri", "Papuci", "Săpun organic"],
      policiesKicker: "Reguli",
      policiesTitle: "Politica de rezervare",
      policyItems: [
        ["Ciubăr:", "Ciubărul este inclus și se folosește doar conform instrucțiunilor primite. Pregătirea apei calde necesită timp, așadar vă rugăm să ne anunțați din timp dacă doriți să îl folosiți."],
        ["Fumatul:", "Fumatul este interzis în interiorul domului. Este permis doar afară/pe terasă, cu respectarea curățeniei și siguranței."],
        ["Încălțăminte:", "Nu este permis să purtați încălțăminte de exterior în interior. Vă rugăm să folosiți papucii furnizați."]
      ],
      contactKicker: "Contact",
      contactTitle: "Ne găsești în Vlăhița, Harghita."
    },
    footer: {
      kicker: "Contact",
      location: "Vlăhița, jud. Harghita, România",
      phone: "Tel: +40 742 919 341"
    },
    whatsapp: "WhatsApp",
    whatsappAria: "Scrie-ne pe WhatsApp",
    close: "Închide"
  },
  hu: {
    langName: "Magyar",
    title: "Medve Dome | Luxus glamping Hargita megyében",
    description: "A Medve Dome egy privát glamping dome Vlahitán, Hargita megyében, erdei kilátással, dézsával, terasszal, kandallóval, grillel és kényelmes boutique hangulattal.",
    menuOpen: "Menü megnyitása",
    menuClose: "Menü bezárása",
    nav: ["Rólunk", "A Dome", "Szolgáltatások", "Galéria", "Látnivalók", "Gyakori kérdések", "Foglalás"],
    hero: {
      eyebrow: "Privát erdei glamping Hargitában",
      text: "Luxus camping nyugodt reggelekhez, csillagos estékhez és meleg, kényelmes pihenéshez a természet közelében.",
      primary: "Foglalási kérés",
      secondary: "Galéria"
    },
    about: {
      kicker: "Rólunk",
      title: "Csendes dome, amely kényelmessé teszi a természet közelségét.",
      text: "A természet szívében megbúvó Medve Dome különleges luxus glamping élményt kínál. Geodézikus dome-unk a modern kényelmet kapcsolja össze a természet nyers szépségével, olyan menedéket teremtve, ahol kiszakadhatsz a hétköznapokból és újra kapcsolódhatsz ahhoz, ami igazán fontos.\n\nMinden részletet úgy alakítottunk ki, hogy autentikus, mégis kényelmes szabadtéri élményt kapj. Amint megérkezel, nyugalom vesz körül, fákkal és a természet halk hangjaival.\n\nLegyen szó romantikus pihenésről, csendes elvonulásról vagy családi kalandról a természetben, a Medve Dome tökéletes hely a felejthetetlen emlékekhez."
    },
    dome: {
      kicker: "A Dome",
      title: "Egyetlen privát dome, emlékezetes pihenésekhez.",
      text: "A dome-ban lent egy franciaágy, a galéria szinten pedig még egy fekvőhely található, ahonnan jobban látható a tetőn lévő ablak. Feküdj le, nézd a csillagokat, és élvezd a romantikus, elvonult hangulatot.",
      features: [
        "Franciaágy és galéria szinti alvóhely",
        "Privát fürdő meleg zuhannyal",
        "Teljesen felszerelt konyha és kinti grill",
        "Panorámás kilátás",
        "Terasz, kert, függőhinta és napágyak",
        "Privát dézsafürdő",
        "Kényelmet adó klímakontroll",
        "Hangulatvilágítás és konnektorok"
      ],
      capacityTitle: "Kapacitás",
      capacityText: "Pároknak vagy kisebb családoknak ideális, dome-unk kényelmesen legfeljebb 4 vendéget fogad, így intim és exkluzív élményt biztosít.",
      link: "Elérhetőség ellenőrzése"
    },
    services: {
      kicker: "Szolgáltatások",
      title: "Minden, ami egy könnyű erdei kikapcsolódáshoz kell.",
      items: [
        ["Terasz napozóágyakkal", "Pihenj a napon, szundíts a fák árnyékában a függőágyban, vagy olvass bent a hintaszékben."],
        ["Kandalló", "Töltsd az estét csendben, az erdő közepén, a tűz melege mellett, miközben hallgatod a fa ropogását."],
        ["Kinti grill élmény", "Készítsd el kedvenc ételeidet a kinti grillen, és élvezd a hangulatos estét a szabad ég alatt."],
        ["Kert és égbolt kilátás", "Aludj az ég alatt, és nézd a csillagokat a saját kényelmes ágyadból."],
        ["Dézsa", "Lazíts a dézsában, körülötted a fák, feletted a csillagok."],
        ["Kert", "Sétálj a birtokon, figyeld a természetet, hallgasd a madarakat, vagy pihenj a padon a tó mellett."]
      ]
    },
    gallery: {
      kicker: "Galéria",
      title: "Pillantás a dome-ra, a kertre és a csendes kinti pillanatokra."
    },
    activities: {
      kicker: "Látnivalók",
      title: "Választható programok a környéken.",
      items: [
        ["Túrázás és séták", "Fedezd fel a Madarasi Hargitát, Hargitafürdőt, a Vargyas-szorost, a Zetelaki-víztározót és az erdei útvonalakat szép kilátással, vízesésekkel, barlangokkal és hidakkal."],
        ["Szabadidőközpontok és termálfürdők", "Szentegyházán és Homoródon szabadidőközpontok, medencék, szauna, sós vizes medencék és természetes meleg vizes fürdők várnak."],
        ["Gyerekprogramok", "A gyerekek élvezhetik a kertet, a játékokat és a trambulint. A közelben van a homoródfürdői bobpálya, a Balu Park és a Mini Erdély Park."],
        ["Pihenés", "Tarts igazi szünetet: sétálj az erdőben, olvass, meditálj, vagy tölts egy csendes délutánt a kertben."],
        ["Lovaglás", "A környéken gyerekeknek és felnőtteknek is vannak lovaglási lehetőségek és vezetett túrák."],
        ["Téli programok", "Hargitafürdő és a Madarasi Hargita kiváló erdélyi sípályákkal, szános programokkal, motorosszános túrákkal és korcsolyázási lehetőségekkel vár."]
      ]
    },
    review: {
      text: "\"Megadja a természet minden előnyét, de közben megvan a boutique hotel kényelme és a családias gondoskodás is.\"",
      source: "Palmer-Grey, Booking.com",
      sectionKicker: "Vélemények",
      sectionTitle: "A vendégek a csendet, a kényelmet és a családias figyelmet szeretik.",
      showTranslation: "Fordítás megjelenítése",
      hideTranslation: "Fordítás elrejtése",
      translationLabel: "Fordítás",
      cards: [
        ["\"Megadja a természet minden előnyét, de közben megvan a boutique hotel kényelme is.\"", "Palmer-Grey, Booking.com"],
        ["\"Csend, intimitás és a házigazdák részéről mutatott figyelem a részletekre.\"", "Cezarina, Booking.com"],
        ["\"Tiszta, ápolt, csendes környezet, tökéletes pihenésre.\"", "Hunor, Booking.com"],
        ["\"Intimitás, figyelem a részletekre, szépség, vendégszeretet és luxus kényelem a természet közepén.\"", "Andrea, Booking.com"],
        ["\"Kiemelkedő vendég értékelés: 9.8 Booking.com-on és 5.0 Airbnb-n.\"", "Nyilvános listázások pontszámai"],
        ["\"Kempinghangulatú kényelem mindennel, amire szükség van, egy csendes, fák közötti tisztáson.\"", "Ioandecean, Booking.com"],
        ["\"Tiszta, kényelmes, gyönyörű kilátás és nagyon kedves házigazda.\"", "Bianca.z, Booking.com"],
        ["\"Pont olyan, mint a képeken, barátságos tulajdonosokkal és figyelmes részletekkel.\"", "Homsi, Booking.com"],
        ["\"Egy másfajta élmény a természet szívében.\"", "Gloria, Booking.com"],
        ["\"Minden feltétel adott egy sikeres pihenéshez.\"", "Florentina, Booking.com"]
      ],
      links: ["Booking.com vélemények", "Airbnb hirdetés", "Google Maps"]
    },
    faq: {
      kicker: "Kérdések",
      title: "Gyakori kérdések.",
      items: [
        ["Van parkolási lehetőség?", "Igen, a helyszínen ingyenes parkolás elérhető."],
        ["Alacsony autóval is megközelíthető?", "Igen, az út jó állapotban van, bármilyen autóval megközelíthető."],
        ["Van étterem?", "A legközelebbi éttermek körülbelül 5 km-re vannak, és néhányan kiszállítást is vállalnak a Dome-hoz."],
        ["Van étkezési lehetőség a szálláson?", "Ételt nem biztosítunk. Bent van egy konyha, kint pedig grill. A legközelebbi éttermek és üzletek körülbelül 5 km-re vannak."],
        ["Lehet grillezni?", "Igen, a faszenet is biztosítjuk."],
        ["Van légkondicionáló a dome-ban?", "Nincs légkondicionáló, de van ventilátor a meleg nyári napokra. Kint sok árnyékos pihenőhely található."],
        ["Van térerő? WiFi?", "Igen, nagyon jó a térerő. Az Orange és a Vodafone működik a legjobban. WiFi nincs."],
        ["Be van kerítve a birtok? Vannak medvék?", "A birtok nincs bekerítve, de a környék biztonságos. Leginkább őzikék és rókák fordulnak elő látogatóban."]
      ]
    },
    availability: {
      kicker: "Szabad dátumok",
      title: "Nézd meg a szabad napokat a kérés elküldése előtt.",
      text: "A zöld napok elérhetők. A meleg színnel jelölt napok már foglaltak vagy nem elérhetők. Küldd el a kérést, és személyesen visszaigazoljuk a dátumokat.",
      prev: "Előző",
      next: "Következő",
      weekdays: ["Hét", "Ked", "Sze", "Csü", "Pén", "Szo", "Vas"],
      available: "Szabad",
      booked: "Foglalt",
      closed: "Zárva",
      note: "Válassz egy szabad dátumot.",
      monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
    },
    booking: {
      kicker: "Foglalási kérés",
      title: "Írd meg, mikor szeretnél érkezni.",
      text: "Küldd el az egyszerű kérést, és válaszolunk az elérhetőséggel, árral és a következő lépésekkel. A leggyorsabb válaszért WhatsAppon is írhatsz.",
      labels: ["Teljes név", "Kedvelt kapcsolatfelvétel", "Email, telefon vagy WhatsApp szám", "Érkezés", "Távozás", "Felnőttek", "Gyerekek", "Háziállatok", "Üzenet"],
      preferred: ["Email", "Telefon", "WhatsApp"],
      datePlaceholder: "EEEE-HH-NN",
      placeholder: "Írd meg, ha van bármi fontos a pihenéssel kapcsolatban.",
      button: "Kérés elküldése",
      note: "A kérésed közvetlenül a Medve Dome-hoz érkezik.",
      sent: "Köszönjük. A kérésed elküldve, hamarosan felvesszük veled a kapcsolatot.",
      sending: "Kérés küldése...",
      sendError: "Valami nem sikerült. Kérjük, írj WhatsAppon vagy emailben: info.medvedome@gmail.com.",
      subject: "Foglalási kérés a Medve Dome-hoz",
      emailIntro: "Kedves Medve Dome,\n\nSzeretnék foglalási kérést küldeni.",
      emailFields: ["Név", "Email vagy telefon", "Érkezés", "Távozás", "Felnőttek", "Gyerekek", "Háziállatok", "Kedvelt kapcsolatfelvétel", "Üzenet"]
    },
    bookingPage: {
      heroKicker: "Foglalási kérés",
      heroTitle: "Medve Dome foglalás",
      heroText: "Nézd át a fontos részleteket, válaszd ki a kívánt dátumokat, és küldd el a kérést. Felvesszük veled a kapcsolatot a következő lépésekkel.",
      contact: "Vlahita, Hargita megye, Románia",
      priceFrom: "Ettől",
      priceValue: "650 LEI",
      priceNight: "Éjszakánként",
      propertiesTitle: "Adatok",
      propertyLabels: ["Kapacitás:", "Méret:", "Ágyak:"],
      propertyValues: ["4", "28 m²", "1 franciaágy, 1 queen ágy"],
      checkTitle: "Érkezés és távozás",
      checkLabels: ["Érkezés", "Távozás"],
      checkValues: ["14:00", "12:00"],
      termsTitle: "Feltételek",
      termsLabels: ["Közvetlen kérés", "Előleg"],
      termsValues: ["Minden pihenést személyesen igazolunk vissza", "20% a foglalás véglegesítéséhez"],
      importantTitle: "Fontos",
      importantItems: [
        "A dézsa benne van az árban.",
        "A foglalási űrlap kitöltése után felvesszük veled a kapcsolatot, és elküldjük a foglalás részleteit.",
        "A foglalás csak a <strong>20% előleg</strong> befizetése után végleges, Revolut, internetes bankolás vagy banki átutalás útján.",
        "A teljes összeg az érkezés napján fizetendő.",
        "Lemondás esetén az előleg teljesen visszajár, ha a lemondás legalább <strong>7 nappal</strong> az érkezés előtt történik.",
        "Átfoglalás a szabad helyek függvényében lehetséges, legalább <strong>5 nappal</strong> előre jelezve.",
        "Háziállatokat szívesen fogadunk. Kérjük, add meg a háziállatok számát is a kérésben.",
        "<strong>Dohányzás:</strong> A dome belsejében tilos a dohányzás. Csak kint/teraszon megengedett, a tisztaság és biztonság betartásával.",
        "<strong>Cipő bent:</strong> Kinti cipőt nem lehet bent viselni. Kérjük, használd a biztosított papucsokat."
      ],
      moreKicker: "További információk",
      moreTitle: "Kényelem, meleg és kilátás az égboltra.",
      moreText: [
        "A Medve Dome lent egy franciaággyal és a galéria szinten egy másik fekvőhellyel van felszerelve, ahonnan jobban látható a tetőn lévő ablak. Innen nézheted az eget és a csillagokat, ami igazán emlékezetes és romantikus élmény lehet.",
        "A dome-ban fakályha és saját fürdő található modern Eco-toalettel, amely kevesebb vizet használ. A konyha főzéshez felszerelt. Törölközők, párnák, paplanok, ágynemű és takarók ingyenesen biztosítottak, illatmentes, organikus és vegyszermentes mosószerrel mosva. Organikus szappant, tusfürdőt és extra WC-papírt is biztosítunk."
      ],
      amenitiesKicker: "Felszereltség",
      amenitiesTitle: "A pihenés része.",
      amenities: ["Zuhany", "Konyha", "Törölközők", "Ventilátor", "Grill", "Hűtőszekrény", "Égbolt ablak", "Terasz", "Fakályha", "Dézsa", "Napozóágyak", "Ágynemű", "Kávé", "Sütemény", "Só és bors", "Játékok", "Papucs", "Organikus szappan"],
      policiesKicker: "Szabályok",
      policiesTitle: "Foglalási szabályzat",
      policyItems: [
        ["Dézsa:", "A dézsa benne van az árban, és csak a kapott utasítások szerint használható. A víz felmelegítése időt vesz igénybe, ezért kérjük, előre jelezd, ha használni szeretnéd."],
        ["Dohányzás:", "A dome belsejében tilos a dohányzás. Csak kint/teraszon megengedett, a tisztaság és biztonság betartásával."],
        ["Cipő bent:", "Kinti cipőt nem lehet bent viselni. Kérjük, használd a biztosított papucsokat."]
      ],
      contactKicker: "Kapcsolat",
      contactTitle: "Vlahitán, Hargita megyében találsz minket."
    },
    footer: {
      kicker: "Kapcsolat",
      location: "Vlahita, Hargita megye, Románia",
      phone: "Tel: +40 742 919 341"
    },
    whatsapp: "WhatsApp",
    whatsappAria: "Üzenet küldése WhatsAppon",
    close: "Bezárás"
  }
};

let currentLanguage = "en";

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    if (text.includes("\n")) {
      element.innerHTML = text.split("\n\n").map((paragraph) => paragraph.trim()).join("<br><br>");
    } else {
      element.textContent = text;
    }
  }
}

function setHtml(selector, html) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = html;
  }
}

function setListText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) {
      element.textContent = values[index];
    }
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function renderGuestReviews(selector, t) {
  document.querySelectorAll(selector).forEach((grid) => {
    grid.innerHTML = guestReviews.map((review, index) => {
      const translation = review.translations[currentLanguage];
      const translationButton = translation ? `
        <button class="review-translate-button" type="button" data-review-index="${index}">
          ${escapeHtml(t.review.showTranslation)}
        </button>` : "";

      return `
        <article>
          <p>"${escapeHtml(review.quote)}"</p>
          <cite>${escapeHtml(review.source)}</cite>
          ${translationButton}
        </article>`;
    }).join("");
  });
}

function ensureReviewModal() {
  let modal = document.querySelector(".review-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "review-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="review-modal-card" role="dialog" aria-modal="true" aria-labelledby="review-modal-title">
        <button class="review-modal-close" type="button"></button>
        <p id="review-modal-title" class="section-kicker"></p>
        <blockquote></blockquote>
        <cite></cite>
      </div>`;
    document.body.appendChild(modal);
  }
  return modal;
}

function openReviewTranslation(index, opener) {
  const review = guestReviews[index];
  const translation = review?.translations[currentLanguage];
  if (!review || !translation) {
    return;
  }

  const t = translations[currentLanguage];
  const modal = ensureReviewModal();
  modal.querySelector(".review-modal-close").textContent = t.close;
  modal.querySelector(".review-modal-close").setAttribute("aria-label", t.close);
  modal.querySelector("#review-modal-title").textContent = t.review.translationLabel;
  modal.querySelector("blockquote").textContent = `"${translation}"`;
  modal.querySelector("cite").textContent = review.source;
  modal.dataset.returnFocus = opener ? "true" : "false";
  window.lastReviewTranslationButton = opener;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".review-modal-close").focus();
}

function closeReviewTranslation() {
  const modal = document.querySelector(".review-modal");
  if (!modal || !modal.classList.contains("is-open")) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (window.lastReviewTranslationButton) {
    window.lastReviewTranslationButton.focus();
  }
}

function setFormLabel(index, text) {
  if (!bookingForm) {
    return;
  }
  const label = bookingForm.querySelectorAll("label")[index];
  if (!label) {
    return;
  }

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `\n          ${text}\n          `;
  }
}

function toDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function isClosedMonth(month) {
  return month === 11 || month <= 3;
}

function renderAvailabilityCalendar() {
  if (!calendarGrid || !calendarMonth) {
    return;
  }

  const t = translations[currentLanguage].availability;
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (firstDay.getDay() + 6) % 7;

  calendarMonth.textContent = `${t.monthNames[month]} ${year}`;
  calendarGrid.innerHTML = "";

  for (let index = 0; index < firstWeekday; index += 1) {
    const emptyDay = document.createElement("div");
    emptyDay.className = "calendar-day is-empty";
    calendarGrid.appendChild(emptyDay);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = toDateKey(year, month, day);
    const isBooked = bookedDates.includes(dateKey);
    const isClosed = isClosedMonth(month);
    const isUnavailable = isBooked || isClosed;
    const statusLabel = isClosed ? t.closed : isBooked ? t.booked : t.available;
    const dayElement = document.createElement("button");
    dayElement.type = "button";
    dayElement.className = `calendar-day ${isUnavailable ? "is-booked is-closed" : "is-available"}`;
    dayElement.setAttribute("aria-label", `${dateKey}: ${statusLabel}`);
    dayElement.dataset.date = dateKey;
    dayElement.disabled = isUnavailable;
    const dayOfWeek = new Date(year, month, day).getDay();
    const price = dayOfWeek === 5 || dayOfWeek === 6 ? "750 lei" : "650 lei";
    dayElement.innerHTML = `<strong>${day}</strong><span>${statusLabel}</span>${isUnavailable ? "" : `<em>${price}</em>`}`;

    calendarGrid.appendChild(dayElement);
  }
}

function openDatePicker(input) {
  if (!datePicker) {
    return;
  }
  activeDateInput = input;
  datePicker.hidden = false;
  renderAvailabilityCalendar();
}

function closeDatePicker() {
  if (datePicker) {
    datePicker.hidden = true;
  }
}

function applyLanguage(language) {
  const t = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t.description);
  }

  setListText(".site-nav a", t.nav);
  const heroLine = document.querySelector(".hero-content p:not(.eyebrow)");
  if (heroLine) {
    heroLine.innerHTML = `<span></span>${t.hero.text}<span></span>`;
  }
  setText(".hero-actions .primary", t.hero.primary);
  setText(".hero-actions .ghost", t.hero.secondary);

  setText("#about .section-kicker", t.about.kicker);
  setText("#about h2", t.about.title);
  setText("#about > p", t.about.text);

  setText("#dome .section-kicker", t.dome.kicker);
  setText("#dome h2", t.dome.title);
  setText("#dome .copy-panel > p:not(.section-kicker)", t.dome.text);
  setListText("#dome .feature-list li", t.dome.features);
  setText("#dome .capacity-note h3", t.dome.capacityTitle);
  setText("#dome .capacity-note p", t.dome.capacityText);
  setText("#dome .text-link", t.dome.link);

  setText("#services .section-kicker", t.services.kicker);
  setText("#services h2", t.services.title);
  document.querySelectorAll("#services article").forEach((item, index) => {
    const service = t.services.items[index];
    if (service) {
      item.querySelector("h3").textContent = service[0];
      item.querySelector("p").textContent = service[1];
    }
  });

  setText("#gallery .section-kicker", t.gallery.kicker);
  setText("#gallery h2", t.gallery.title);

  setText("#see-do .section-kicker", t.activities.kicker);
  setText("#see-do h2", t.activities.title);
  document.querySelectorAll("#see-do article").forEach((item, index) => {
    const activity = t.activities.items[index];
    if (activity) {
      item.querySelector("h3").textContent = activity[0];
      item.querySelector("p").textContent = activity[1];
    }
  });

  setText(".review-band p", t.review.text);
  setText(".review-band cite", t.review.source);
  setText("#reviews .section-kicker", t.review.sectionKicker);
  setText("#reviews h2", t.review.sectionTitle);
  renderGuestReviews("#reviews .review-grid", t);
  setListText("#reviews .review-links a", t.review.links);

  setText("#faq .section-kicker", t.faq.kicker);
  setText("#faq h2", t.faq.title);
  document.querySelectorAll("#faq details").forEach((item, index) => {
    const faq = t.faq.items[index];
    if (faq) {
      item.querySelector("summary").textContent = faq[0];
      item.querySelector("p").textContent = faq[1];
    }
  });

  if (calendarPrev && calendarNext && calendarGrid) {
    calendarPrev.textContent = t.availability.prev;
    calendarNext.textContent = t.availability.next;
    calendarPrev.setAttribute("aria-label", t.availability.prev);
    calendarNext.setAttribute("aria-label", t.availability.next);
    setText(".date-picker-note", t.availability.note);
    setListText(".calendar-weekdays span", t.availability.weekdays);
    const legendItems = document.querySelectorAll(".calendar-legend span");
    if (legendItems[0]) {
      legendItems[0].innerHTML = `<i class="available-dot"></i> ${t.availability.available}`;
    }
    if (legendItems[1]) {
      legendItems[1].innerHTML = `<i class="booked-dot"></i> ${t.availability.booked}`;
    }
    renderAvailabilityCalendar();
  }

  setText("#booking .section-kicker", t.booking.kicker);
  setText("#booking h2", t.booking.title);
  setText("#booking .booking-copy > p:not(.section-kicker)", t.booking.text);
  if (bookingForm) {
    t.booking.labels.forEach((label, index) => setFormLabel(index, label));
    setListText("#booking select option", t.booking.preferred);
    checkinInput.setAttribute("placeholder", t.booking.datePlaceholder);
    checkoutInput.setAttribute("placeholder", t.booking.datePlaceholder);
    document.querySelector("#booking textarea").setAttribute("placeholder", t.booking.placeholder);
    setText("#booking button[type='submit']", t.booking.button);
    formNote.textContent = t.booking.note;
  }

  if (t.bookingPage) {
    setText(".booking-hero .section-kicker", t.bookingPage.heroKicker);
    setText(".booking-hero h1", t.bookingPage.heroTitle);
    setText(".booking-hero p:not(.section-kicker)", t.bookingPage.heroText);
    setText(".contact-cards span", t.bookingPage.contact);
    setText(".booking-price span:first-child", t.bookingPage.priceFrom);
    setText(".booking-price strong", t.bookingPage.priceValue);
    setText(".booking-price span:last-child", t.bookingPage.priceNight);
    setText(".properties-panel h2", t.bookingPage.propertiesTitle);
    setListText(".properties-panel dt", t.bookingPage.propertyLabels);
    setListText(".properties-panel dd", t.bookingPage.propertyValues);
    setText(".check-panel h2", t.bookingPage.checkTitle);
    setListText(".check-panel dt", t.bookingPage.checkLabels);
    setListText(".check-panel dd", t.bookingPage.checkValues);
    setText(".terms-panel h2", t.bookingPage.termsTitle);
    setListText(".terms-panel dt", t.bookingPage.termsLabels);
    setListText(".terms-panel dd", t.bookingPage.termsValues);
    setText(".important-panel h2", t.bookingPage.importantTitle);
    document.querySelectorAll(".important-panel li").forEach((item, index) => {
      if (t.bookingPage.importantItems[index]) {
        item.innerHTML = t.bookingPage.importantItems[index];
      }
    });
    setText(".more-info-panel .section-kicker", t.bookingPage.moreKicker);
    setText(".more-info-panel h2", t.bookingPage.moreTitle);
    document.querySelectorAll(".more-info-panel p:not(.section-kicker)").forEach((item, index) => {
      if (t.bookingPage.moreText[index]) {
        item.textContent = t.bookingPage.moreText[index];
      }
    });
    setText(".amenities-panel .section-kicker", t.bookingPage.amenitiesKicker);
    setText(".amenities-panel h2", t.bookingPage.amenitiesTitle);
    setListText(".amenity-grid b", t.bookingPage.amenities);
    if (window.lucide) {
      window.lucide.createIcons();
    }
    setText(".policies .section-kicker", t.bookingPage.policiesKicker);
    setText(".policies h2", t.bookingPage.policiesTitle);
    document.querySelectorAll(`[data-policy-lang="${language}"] p`).forEach((item, index) => {
      const policy = t.bookingPage.policyItems[index];
      if (policy) {
        item.innerHTML = `<strong>${policy[0]}</strong> ${policy[1]}`;
      }
    });
    setText(".contact-map .section-kicker", t.bookingPage.contactKicker);
    setText(".contact-map h2", t.bookingPage.contactTitle);
  }

  document.querySelectorAll("[data-policy-lang]").forEach((policy) => {
    policy.hidden = policy.dataset.policyLang !== currentLanguage;
  });

  setText(".site-footer .section-kicker", t.footer.kicker);
  setText(".site-footer p:nth-of-type(2)", t.footer.location);
  setText(".site-footer p:nth-of-type(3) a", t.footer.phone);
  setText(".whatsapp-float", t.whatsapp);
  document.querySelector(".whatsapp-float").setAttribute("aria-label", t.whatsappAria);
  lightboxClose.textContent = "\u00d7";
  lightboxClose.setAttribute("aria-label", t.close);
  menuButton.setAttribute("aria-label", siteNav.classList.contains("is-open") ? t.menuClose : t.menuOpen);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("medveDomeLanguage", language);
  } catch (error) {
    return;
  }
}

let menuPointerHandled = false;

function toggleMenu() {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen);
}

menuButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  menuPointerHandled = true;
  toggleMenu();
});

menuButton.addEventListener("click", () => {
  if (menuPointerHandled) {
    menuPointerHandled = false;
    return;
  }
  toggleMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", translations[currentLanguage].menuOpen);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  animatedItems.forEach((item) => revealObserver.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}

if (calendarPrev && calendarNext && calendarGrid && checkinInput && checkoutInput) {
  calendarPrev.addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    renderAvailabilityCalendar();
  });

  calendarNext.addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    renderAvailabilityCalendar();
  });

  calendarGrid.addEventListener("click", (event) => {
    const dayButton = event.target.closest(".calendar-day.is-available");
    if (!dayButton) {
      return;
    }

    const dateKey = dayButton.dataset.date;
    activeDateInput.value = dateKey;
    closeDatePicker();
  });

  checkinInput.addEventListener("click", () => openDatePicker(checkinInput));
  checkinInput.addEventListener("focus", () => openDatePicker(checkinInput));
  checkoutInput.addEventListener("click", () => openDatePicker(checkoutInput));
  checkoutInput.addEventListener("focus", () => openDatePicker(checkoutInput));
}

document.addEventListener("click", (event) => {
  const translationButton = event.target.closest(".review-translate-button");
  if (translationButton) {
    openReviewTranslation(Number(translationButton.dataset.reviewIndex), translationButton);
    return;
  }

  if (event.target.closest(".review-modal-close") || event.target.classList.contains("review-modal")) {
    closeReviewTranslation();
    return;
  }

  if (!datePicker || !bookingForm || datePicker.hidden || bookingForm.contains(event.target)) {
    return;
  }
  closeDatePicker();
});

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    if (!image || !lightbox || !lightboxImage) {
      return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

const galleryVideos = document.querySelectorAll(".gallery-video video");

if (galleryVideos.length) {
  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.src && !entry.target.src) {
            entry.target.src = entry.target.dataset.src;
            entry.target.load();
          }
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.35 });

    galleryVideos.forEach((video) => videoObserver.observe(video));
  } else {
    galleryVideos.forEach((video) => {
      if (video.dataset.src && !video.src) {
        video.src = video.dataset.src;
        video.load();
      }
      video.play().catch(() => {});
    });
  }
}

roomThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (!roomMainImage) {
      return;
    }

    const image = thumb.querySelector("img");
    roomMainImage.src = image.src.includes("static.wixstatic.com")
      ? image.src.replace(/w_\d+,h_\d+/, "w_980,h_720")
      : image.src;
    roomMainImage.alt = image.alt;
    roomMainImage.style.objectPosition = thumb.dataset.position || "center center";
    roomThumbs.forEach((item) => item.classList.remove("is-active"));
    thumb.classList.add("is-active");
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
  if (event.key === "Escape") {
    closeReviewTranslation();
  }
});

if (bookingForm) {
bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const t = translations[currentLanguage].booking;
  const data = new FormData(bookingForm);
  const preferred = bookingForm.querySelector("select").selectedOptions[0].textContent;
  const body = [
    t.emailIntro,
    "",
    `${t.emailFields[0]}: ${data.get("name")}`,
    `${t.emailFields[1]}: ${data.get("contact")}`,
    `${t.emailFields[2]}: ${data.get("checkin")}`,
    `${t.emailFields[3]}: ${data.get("checkout")}`,
    `${t.emailFields[4]}: ${data.get("adults")}`,
    `${t.emailFields[5]}: ${data.get("children")}`,
    `${t.emailFields[6]}: ${data.get("pets")}`,
    `${t.emailFields[7]}: ${preferred}`,
    "",
    `${t.emailFields[8]}:`,
    data.get("message") || "-"
  ].join("\n");

  const submitButton = bookingForm.querySelector('button[type="submit"]');
  formNote.textContent = t.sending;
  submitButton.disabled = true;

  try {
    const response = await fetch(bookingRequestEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: t.subject,
        _template: "table",
        _captcha: "false",
        name: data.get("name"),
        contact: data.get("contact"),
        preferred_contact: preferred,
        check_in: data.get("checkin"),
        check_out: data.get("checkout"),
        adults: data.get("adults"),
        children: data.get("children"),
        pets: data.get("pets"),
        message: data.get("message") || "-",
        full_request: body
      })
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    bookingForm.reset();
    formNote.textContent = t.sent;
  } catch (error) {
    formNote.textContent = t.sendError;
  } finally {
    submitButton.disabled = false;
  }
});
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("medveDomeLanguage") || "en";
} catch (error) {
  savedLanguage = "en";
}

applyLanguage(translations[savedLanguage] ? savedLanguage : "en");
