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

// Edit these dates when you need to mark a night as booked or unavailable.
const bookedDates = [
  "2026-06-07",
  "2026-06-08",
  "2026-06-14",
  "2026-06-15",
  "2026-07-19",
  "2026-07-20",
  "2026-08-02",
  "2026-08-03"
];

const guestReviews = [
  {
    quote: "The tent was bigger and better in real life than in the photos, Barbara warmed up the lovely tub ahead of our arrival, and the setting was stunning! It felt like a secluded piece of forest but was accessible and safe. The kitchen was compact but modern and had everything we needed, the bathroom was lovely. It has all the benefits of being in nature but with all the comforts of a boutique hotel, and the care of family ownership. There were slippers and games for the whole family. We couldn't have wished for more - except to stay longer!",
    source: "Palmer-Grey, Booking.com",
    lang: "en",
    translations: {}
  },
  {
    quote: "Me and my family spent one night at this extraordinary accommodation. I'm using Airbnb since 5 years or more and quite often, but this experience was far the BEST I ever had. Clean, stylish, luxurious, chill. Imagine spending the evening in the hot tub surrounded by the woodlands in dark and complete silence. I loved it. Wish all the best for Barbara. Also she was the greatest host, she even provided us with a UK to EU adapter which was a surprise to me that she had one. She thinks of everything.",
    source: "Gyorgy, Airbnb",
    lang: "en",
    translations: {}
  },
  {
    quote: "This place is amazing! Barbara was very kindly and helpful with me and my girlfriend: I asked for a cake and other things to make the perfect birthday there and she made all perfect! The place is amazing, you also have a beautiful hot tub where you can enjoy the place. It's an experience, a beautiful experience. Thank you Barbara again!",
    source: "Deniele, Airbnb",
    lang: "en",
    translations: {}
  },
  {
    quote: "Intimacy, attention to details, beauty, hospitality, luxurious comfort in the middle of nature, yet with easy access, excellent communication with the host, extra benefits, ideal hiding and resting place for a weekend relaxation, the private jacuzzi in the middle of the forest offers a unique spa-like experience! Everybody should spend a night here once in a lifetime!",
    source: "Andrea, Booking.com",
    lang: "en",
    translations: {}
  },
  {
    quote: "Exactly like in the photos, attention to details, the owners are very friendly, quality of the materials used for the dome.",
    source: "Homsi, Booking.com",
    lang: "en",
    translations: {}
  },
  {
    quote: "All the details regarding accommodation are perfect, there are even slippers for inside and for the terrace. The personal is very kind and helpful.",
    source: "Gloria, Booking.com",
    lang: "en",
    translations: {}
  },
  {
    quote: "Totul a fost peste așteptări, gazda este foarte primitoare, domul este foarte curat, baie moderna, atmosfera de vis, soba a încălzit domul suficient sa nu fie frig, chiar daca afară erau 7 grade. O experiență unică, recomand.",
    source: "Hindrich, Booking.com",
    lang: "ro",
    translations: {
      en: "Everything was beyond expectations, the host is very welcoming, the dome is very clean, the bathroom modern, the atmosphere dreamy, and the stove warmed the dome enough so it was not cold even though it was 7 degrees outside. A unique experience, I recommend it."
    }
  },
  {
    quote: "Personalul foarte amabil, iar locatia este la superlativ. Este un loc de vis, o oaza de liniste in mijlocul naturii.",
    source: "Bogdan, Booking.com",
    lang: "ro",
    translations: {
      en: "The staff was very kind and the location is outstanding. It is a dream place, an oasis of peace in the middle of nature."
    }
  },
  {
    quote: "Una dintre cele mai frumoase locații din Romania.",
    source: "Razvimao, Booking.com",
    lang: "ro",
    translations: {
      en: "One of the most beautiful locations in Romania."
    }
  },
  {
    quote: "Cel mai mult mi-a placut asezarea cortului, in natura, singur, nu puteai fi deranjat de alte persoane, ceea ce te lasa sa te bucuri de tot ceea ce te inconjura!",
    source: "Aura, Booking.com",
    lang: "ro",
    translations: {
      en: "What I liked most was the position of the tent, alone in nature, where you could not be disturbed by other people, which let you enjoy everything around you."
    }
  },
  {
    quote: "Am avut o experiență extraordinară la cazare și nu pot recomanda suficient acest loc! Gazda a fost incredibil de primitoare și atentă, asigurându-se că ne simțim ca acasă. Ciubărul a fost punctul culminant al sejurului, oferindu-ne momente de relaxare desăvârșită sub cerul liber. Atmosfera generală a fost minunată, cu un peisaj de vis și o liniște perfectă pentru a ne deconecta de la agitația zilnică. În concluzie, o experiență de neuitat pe care abia aștept să o repet!",
    source: "Marius, Booking.com",
    lang: "ro",
    translations: {
      en: "We had an extraordinary stay and I cannot recommend this place enough. The host was incredibly welcoming and attentive, making sure we felt at home. The hot tub was the highlight of the stay, giving us perfect relaxation under the open sky. The overall atmosphere was wonderful, with a dream landscape and perfect quiet for disconnecting from daily noise. An unforgettable experience I cannot wait to repeat."
    }
  },
  {
    quote: "O locatie deosebita, in linistea naturii. Barbara este minunata! Recomand relaxarea in ciubar, noaptea. Nu am vazut niciodata atat de multe stele, atat de clar. Iar somnul de dupa, cu focul aprins in soba, este exceptional!",
    source: "Dana, Booking.com",
    lang: "ro",
    translations: {
      en: "A special location in the quiet of nature. Barbara is wonderful. I recommend relaxing in the hot tub at night. I have never seen so many stars so clearly. And the sleep afterwards, with the fire lit in the stove, is exceptional."
    }
  },
  {
    quote: "Tiszta, ápolt, csendes környezet, tökéletes pihenésre.",
    source: "Hunor, Booking.com",
    lang: "hu",
    translations: {
      en: "Clean, well-kept and quiet surroundings, perfect for resting."
    }
  },
  {
    quote: "A Medve Dome egy fenyvesekkel övezett tisztáson található. A Dome maga egy kicsi ékszer, mindennel felszerelve, amire a családnak szüksége lehet. A hálószoba az óriási panoráma ablakkal, igazi élménynek számít. A konyha felszereltsége is rendkívüli, a fürdőszoba is első osztályú. A kinti dézsa, a föléje magasodó fenyőfával és a rajta lakó mókussal igazi luxus :-). A házigazdák nagyon kedvesek és segítőkészek voltak.",
    source: "Erika, Booking.com",
    lang: "hu",
    translations: {
      en: "Medve Dome is located in a clearing surrounded by pine trees. The dome itself is a small jewel, equipped with everything a family may need. The bedroom with the huge panoramic window is a real experience. The kitchen equipment is exceptional and the bathroom is first class. The outdoor hot tub, with the tall pine tree above it, is true luxury. The hosts were very kind and helpful."
    }
  },
  {
    quote: "A fákkal körülvett, egy kis tisztással rendelkező szállás hangulata fantasztikus volt, a kényelemről nem is beszélve. Tiszta, kényelmes és felszerelt volt. A dézsa, melyet este vettünk használatba külön élmény volt a számunkra. A házigazdák barátságosak és kedvesek voltak.",
    source: "Örs, Booking.com",
    lang: "hu",
    translations: {
      en: "The atmosphere of the accommodation surrounded by trees, with a small clearing, was fantastic, not to mention the comfort. It was clean, comfortable and equipped. The hot tub, which we used in the evening, was a special experience for us. The hosts were friendly and kind."
    }
  },
  {
    quote: "Cortul este minunat! In mijlocul naturii, padure si triluri de pasari. Ciubarul era pregatit, lenjerii si prosoape impecabile, flori proaspete pe masa:) Bucatarioara este utilata suficient, totul a decurs ok. Gazda primitoare, ne-a ajutat cu tot ce poate fi vizitat in zona.",
    source: "Catalina, Booking.com",
    lang: "ro",
    translations: {
      en: "The tent is wonderful, in the middle of nature, with forest and birdsong. The hot tub was ready, the linens and towels impeccable, fresh flowers on the table. The small kitchen is sufficiently equipped and everything went well. The welcoming host helped us with everything that can be visited in the area."
    }
  },
  {
    quote: "Ne-a placut totul, a fost perfect: ciubarul, gazdele foarte amabile, confortul, estetica si micile detalii, respectul fata de mediu, pisicile cu care se jucau copiii, pina si caprioarele pareau sa fie programate sa ne dea buna dimineata la micul dejun de pe terasa :-).",
    source: "Lia, Booking.com",
    lang: "ro",
    translations: {
      en: "We liked everything, it was perfect: the hot tub, the very kind hosts, the comfort, the aesthetics and small details, respect for the environment, the cats the children played with, even the deer seemed programmed to say good morning during breakfast on the terrace."
    }
  },
  {
    quote: "A tulajdonosok nagyon kedvesek voltak. Csodálatos erdei környezet, rendkívüli élmény a reggeli kávé közben látni az őzikeket.",
    source: "Guest review, Booking.com",
    lang: "hu",
    translations: {
      en: "The owners were very kind. A wonderful forest setting, and an extraordinary experience to see the deer while having morning coffee."
    }
  },
  {
    quote: "We fell in love with this place, enjoyed the big comfort through the whirlpool and liked that feeling to be out in the woods. The communication with Barbara was easy and she is a very friendly woman.",
    source: "Anna, Airbnb",
    lang: "en",
    translations: {}
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
    langName: "Romana",
    title: "Medve Dome | Glamping de lux in Harghita",
    description: "Medve Dome este un dom privat de glamping in Vlahita, Harghita, cu vedere spre natura, ciubar, terasa, semineu, gratar si confort boutique.",
    menuOpen: "Deschide meniul",
    menuClose: "Inchide meniul",
    nav: ["Despre", "Domul", "Servicii", "Galerie", "De vazut", "FAQ", "Rezerva"],
    hero: {
      eyebrow: "Glamping privat in padure, in Harghita",
      text: "Camping de lux pentru dimineti linistite, nopti cu stele si o sedere calda, aproape de natura.",
      primary: "Cere o rezervare",
      secondary: "Vezi galeria"
    },
    about: {
      kicker: "Despre",
      title: "Un dom linistit, cu tot confortul care face natura usor de trait.",
      text: "Asezat in inima naturii, Medve Dome ofera o experienta de glamping luxoasa si aparte. Domul nostru geodezic imbina confortul modern cu frumusetea autentica a naturii, creand un refugiu in care te poti desprinde de cotidian si reconecta cu ceea ce conteaza cu adevarat.\n\nFiecare detaliu a fost gandit pentru a-ti oferi o experienta autentica in aer liber, fara sa renunti la confort. Din momentul in care ajungi, esti inconjurat de liniste, copaci si sunetele blande ale naturii.\n\nFie ca iti doresti o escapada romantica, o retragere linistita sau o aventura in natura alaturi de familie, Medve Dome este locul potrivit pentru amintiri de neuitat."
    },
    dome: {
      kicker: "Domul",
      title: "Un singur dom privat, gandit pentru sederi memorabile.",
      text: "Domul are un pat dublu la parter si inca unul in mezanin, de unde oaspetii au o priveliste mai buna spre fereastra din tavan. Intinde-te, priveste stelele si bucura-te de o experienta romantica, retrasa.",
      features: [
        "Pat dublu si zona de dormit in mezanin",
        "Baie privata cu dus cald",
        "Bucatarie complet utilata si gratar exterior",
        "Vederi panoramice",
        "Terasa, gradina, hamac si sezlonguri",
        "Ciubar privat",
        "Control al temperaturii pentru confort",
        "Lumini ambientale si prize"
      ],
      capacityTitle: "Capacitate",
      capacityText: "Perfect pentru cupluri sau familii mici, domul nostru gazduieste confortabil pana la 4 oaspeti, pastrand o experienta intima si exclusiva.",
      link: "Verifica disponibilitatea"
    },
    services: {
      kicker: "Servicii",
      title: "Tot ce ai nevoie pentru o escapada usoara in padure.",
      items: [
        ["Terasa cu sezlonguri", "Relaxeaza-te la soare, dormiteaza la umbra copacilor in hamac sau citeste o carte in scaunul suspendat."],
        ["Semineu", "Petrece seara in liniste, inconjurat de padure, simtind caldura focului si ascultand trosnetul lemnelor."],
        ["Gratar in aer liber", "Pregateste mancarea preferata la gratar si bucura-te de o seara calda sub cerul liber."],
        ["Gradina si vedere spre cer", "Dormi sub cer si priveste stelele din confortul propriului pat."],
        ["Ciubar", "Relaxeaza-te in ciubar, cu copacii in jur si stelele deasupra."],
        ["Gradina", "Plimba-te pe proprietate, admira natura, asculta pasarile sau stai pe banca privind iazul."]
      ]
    },
    gallery: {
      kicker: "Galerie",
      title: "O privire spre dom, gradina si momentele linistite de afara."
    },
    activities: {
      kicker: "De vazut",
      title: "Activitati optionale in zona.",
      items: [
        ["Drumetii si plimbari", "Exploreaza Harghita Madaras, Harghita Bai, Cheile Varghisului, Lacul Zetea si trasee prin padure cu privelisti frumoase, cascade, pesteri si podete."],
        ["Centre de agrement si bai termale", "Vlahita si Homorod ofera centre de agrement, piscine, sauna, bazine cu apa sarata si bai termale cu apa naturala calda."],
        ["Pentru copii", "Copiii se pot bucura de gradina, jocuri si trambulina. In apropiere sunt pista de bob din Homorod Bai, Balu Park si Mini Transylvania Park."],
        ["Relaxare", "Ia o pauza adevarata: o plimbare prin padure, o carte buna, meditatie sau o dupa-amiaza linistita in gradina."],
        ["Calarie", "In zona exista optiuni de calarie si ture ghidate pentru copii si adulti."],
        ["Activitati de iarna", "Harghita Bai si Harghita Madaras sunt statiuni de schi foarte bune din Transilvania, cu partii, plimbari cu sania, ture cu snowmobilul si patinoare."]
      ]
    },
    review: {
      text: "\"Are toate avantajele naturii, dar cu tot confortul unui hotel boutique si grija unei afaceri de familie.\"",
      source: "Palmer-Grey, Booking.com",
      sectionKicker: "Recenzii",
      sectionTitle: "Oaspetii apreciaza linistea, confortul si grija familiei.",
      showTranslation: "Vezi traducerea",
      hideTranslation: "Ascunde traducerea",
      translationLabel: "Traducere",
      cards: [
        ["\"Are toate avantajele naturii, dar cu tot confortul unui hotel boutique.\"", "Palmer-Grey, Booking.com"],
        ["\"Linistea, intimitatea, atentia la detalii din partea gazdelor.\"", "Cezarina, Booking.com"],
        ["\"Mediu curat, ingrijit si linistit, perfect pentru odihna.\"", "Hunor, Booking.com"],
        ["\"Intimitate, atentie la detalii, frumusete, ospitalitate si confort luxos in mijlocul naturii.\"", "Andrea, Booking.com"],
        ["\"Scor exceptional: 9.8 pe Booking.com si 5.0 pe Airbnb.\"", "Scoruri publice"],
        ["\"Confort ca la camping, cu tot ce este necesar, intr-o poiana linistita inconjurata de copaci.\"", "Ioandecean, Booking.com"],
        ["\"Curat, confortabil, peisaj frumos si o gazda foarte amabila.\"", "Bianca.z, Booking.com"],
        ["\"Exact ca in fotografii, cu proprietari prietenosi si atentie la detalii.\"", "Homsi, Booking.com"],
        ["\"Un mod diferit de a fi in inima naturii.\"", "Gloria, Booking.com"],
        ["\"Exista toate conditiile pentru a petrece un sejur reusit.\"", "Florentina, Booking.com"]
      ],
      links: ["Recenzii Booking.com", "Anunt Airbnb", "Google Maps"]
    },
    faq: {
      kicker: "Intrebari",
      title: "Intrebari frecvente.",
      items: [
        ["Exista parcare?", "Da, parcarea gratuita este disponibila la proprietate."],
        ["Se poate ajunge cu o masina joasa?", "Da, drumul de pe strada este in stare foarte buna si poate fi accesat cu orice masina."],
        ["Exista restaurant?", "Cele mai apropiate restaurante sunt la aproximativ 5 km. Unele livreaza si la Dome."],
        ["Exista mancare la proprietate?", "Nu oferim mancare la Dome. Exista o bucatarie in interior si un gratar afara. Restaurantele si supermarketurile cele mai apropiate sunt la aproximativ 5 km."],
        ["Se poate face gratar?", "Da, iar carbunele este inclus."],
        ["Exista aer conditionat in dom?", "Nu exista aer conditionat, dar exista un ventilator pentru zilele calduroase. Afara sunt multe locuri umbrite pentru relaxare."],
        ["Exista semnal? WiFi?", "Da, exista semnal foarte bun. Orange si Vodafone au cel mai bun semnal. Nu exista WiFi."],
        ["Exista gard in jurul proprietatii? Sunt ursi?", "Nu exista gard in jurul proprietatii, dar zona este sigura. In principal caprioare si vulpi mai vin in vizita."]
      ]
    },
    availability: {
      kicker: "Disponibilitate",
      title: "Vezi datele libere inainte sa trimiti cererea.",
      text: "Zilele verzi sunt disponibile. Zilele marcate cald sunt deja rezervate sau indisponibile. Trimite o cerere si iti vom confirma personal datele.",
      prev: "Inapoi",
      next: "Inainte",
      weekdays: ["Lun", "Mar", "Mie", "Joi", "Vin", "Sam", "Dum"],
      available: "Liber",
      booked: "Rezervat",
      note: "Alege o data disponibila.",
      monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
    },
    booking: {
      kicker: "Cerere de rezervare",
      title: "Spune-ne cand ai vrea sa vii.",
      text: "Trimite o cerere simpla si iti vom raspunde cu disponibilitatea, pretul si pasii urmatori. Pentru cel mai rapid raspuns, ne poti scrie si pe WhatsApp.",
      labels: ["Nume complet", "Metoda preferata de contact", "Email, telefon sau numar WhatsApp", "Check-in", "Check-out", "Adulti", "Copii", "Animale de companie", "Mesaj"],
      preferred: ["Email", "Telefon", "WhatsApp"],
      datePlaceholder: "AAAA-LL-ZZ",
      placeholder: "Scrie-ne orice detaliu important despre sederea ta.",
      button: "Trimite cererea",
      note: "Cererea ta se trimite direct catre Medve Dome.",
      sent: "Multumim. Cererea ta a fost trimisa si te vom contacta in curand.",
      sending: "Se trimite cererea...",
      sendError: "Ceva nu a functionat. Te rugam sa ne scrii pe WhatsApp sau la info.medvedome@gmail.com.",
      subject: "Cerere de rezervare pentru Medve Dome",
      emailIntro: "Buna, Medve Dome,\n\nAs dori sa trimit o cerere de rezervare.",
      emailFields: ["Nume", "Email sau telefon", "Check-in", "Check-out", "Adulti", "Copii", "Animale de companie", "Metoda preferata de contact", "Mesaj"]
    },
    bookingPage: {
      heroKicker: "Cerere de rezervare",
      heroTitle: "Rezerva Medve Dome",
      heroText: "Verifica detaliile importante, alege datele preferate si trimite-ne o cerere. Te vom contacta cu pasii urmatori.",
      contact: "Vlahita, Harghita, Romania",
      priceFrom: "De la",
      priceValue: "650 LEI",
      priceNight: "Pe noapte",
      propertiesTitle: "Proprietati",
      propertyLabels: ["Capacitate:", "Dimensiune:", "Paturi:"],
      propertyValues: ["4", "28 mp", "1 pat dublu, 1 pat queen"],
      checkTitle: "Check In si Out",
      checkLabels: ["Check-in", "Check-out"],
      checkValues: ["14:00", "12:00"],
      termsTitle: "Termeni",
      termsLabels: ["Cerere directa", "Avans"],
      termsValues: ["Confirmam personal fiecare sedere", "20% pentru confirmarea rezervarii"],
      importantTitle: "Important",
      importantItems: [
        "Ciubarul este inclus in pret.",
        "Dupa completarea formularului de rezervare, te vom contacta cu toate detaliile rezervarii.",
        "Rezervarea devine finala doar dupa plata unui <strong>avans de 20%</strong> prin Revolut, Internet Banking sau Transfer Bancar.",
        "Plata integrala se face in ziua check-in-ului.",
        "In caz de anulare, avansul se returneaza integral daca anularea se face cu <strong>7 zile</strong> inainte de check-in.",
        "Reprogramarea este posibila in functie de disponibilitate, cu cel putin <strong>5 zile</strong> inainte.",
        "Animalele de companie sunt binevenite. Te rugam sa incluzi numarul lor in cerere.",
        "<strong>Fumatul:</strong> Fumatul este interzis in interiorul domului. Este permis doar afara/pe terasa, cu respectarea curateniei si sigurantei.",
        "<strong>Incaltaminte:</strong> Nu este permis sa purtati incaltaminte de exterior in interior. Va rugam sa folositi papucii furnizati."
      ],
      moreKicker: "Mai multe informatii",
      moreTitle: "Confort, caldura si fereastra spre cer.",
      moreText: [
        "Medve Dome este echipat cu un pat dublu la parter si inca un pat in mezanin, de unde poti vedea mai bine fereastra din tavan, sa privesti cerul si stelele. Poate fi o experienta cu adevarat memorabila si romantica.",
        "Domul are soba pe lemne si baie proprie cu o toaleta Eco moderna, care foloseste mai putina apa. Bucataria este utilata pentru gatit. Prosoapele, pernele, pilote, lenjeria si paturile sunt incluse si spalate cu detergent organic, fara parfum si fara chimicale. Oferim si sapun organic, gel de dus si hartie igienica extra."
      ],
      amenitiesKicker: "Dotari",
      amenitiesTitle: "Incluse in sederea ta.",
      amenities: ["Dus", "Bucatarie", "Prosoape", "Ventilator", "Gratar", "Frigider", "Fereastra spre cer", "Terasa", "Soba pe lemne", "Ciubar", "Sezlonguri", "Lenjerie", "Cafea", "Prajiturele", "Sare si piper", "Jocuri", "Papuci", "Sapun organic"],
      policiesKicker: "Reguli",
      policiesTitle: "Politica de rezervare",
      policyItems: [
        ["Ciubar:", "Ciubarul este inclus si se foloseste doar conform instructiunilor primite. Pregatirea apei calde necesita timp, asadar va rugam sa ne anuntati din timp daca doriti sa il folositi."],
        ["Fumatul:", "Fumatul este interzis in interiorul domului. Este permis doar afara/pe terasa, cu respectarea curateniei si sigurantei."],
        ["Incaltaminte:", "Nu este permis sa purtati incaltaminte de exterior in interior. Va rugam sa folositi papucii furnizati."]
      ],
      contactKicker: "Contact",
      contactTitle: "Ne gasesti in Vlahita, Harghita."
    },
    footer: {
      kicker: "Contact",
      location: "Vlahita, jud. Harghita, Romania",
      phone: "Tel: +40 742 919 341"
    },
    whatsapp: "WhatsApp",
    whatsappAria: "Scrie-ne pe WhatsApp",
    close: "Inchide"
  },
  hu: {
    langName: "Magyar",
    title: "Medve Dome | Luxus glamping Hargita megyeben",
    description: "A Medve Dome egy privat glamping dome Vlahitan, Hargita megyeben, erdei kilatassal, dezsaval, terasszal, kandalloval, grillel es kenyelmes boutique hangulattal.",
    menuOpen: "Menu megnyitasa",
    menuClose: "Menu bezarasa",
    nav: ["Rolunk", "A Dome", "Szolgaltatasok", "Galeria", "Latnivalok", "GYIK", "Foglalas"],
    hero: {
      eyebrow: "Privat erdei glamping Hargitaban",
      text: "Luxus camping nyugodt reggelekhez, csillagos estekhez es meleg, kenyelmes piheneshez a termeszet kozeleben.",
      primary: "Foglalasi keres",
      secondary: "Galeria"
    },
    about: {
      kicker: "Rolunk",
      title: "Csendes dome, amely kenyelmesse teszi a termeszet kozelseget.",
      text: "A termeszet sziveben megbuvo Medve Dome kulonleges luxus glamping elmenyt kinal. Geodezikus dome-unk a modern kenyelmet kapcsolja ossze a termeszet nyers szepsegevel, olyan menedeket teremtve, ahol kiszakadhatsz a hetkoznapokbol es ujra kapcsolodhatsz ahhoz, ami igazan fontos.\n\nMinden reszletet ugy alakitottunk ki, hogy autentikus, megis kenyelmes szabadtéri elmenyt kapj. Amint megerkezel, nyugalom vesz korul, fakkal es a termeszet halk hangjaival.\n\nLegyen szo romantikus pihenesrol, csendes elvonulasrol vagy csaladi kalandrol a termeszetben, a Medve Dome tokeletes hely a felejthetetlen emlekekhez."
    },
    dome: {
      kicker: "A Dome",
      title: "Egyetlen privat dome, emlekezetes pihenesekhez.",
      text: "A dome-ban lent egy franciaagy, a galeria szinten pedig meg egy fekvohely talalhato, ahonnan jobban lathato a teton levo ablak. Fekudj le, nezd a csillagokat, es elvezd a romantikus, elvonult hangulatot.",
      features: [
        "Franciaagy es galeria szinti alvohely",
        "Privat furdo meleg zuhannyal",
        "Teljesen felszerelt konyha es kinti grill",
        "Panoramas kilatas",
        "Terasz, kert, fuggohinta es napagyak",
        "Privat dezsafurdo",
        "Kenyelmet ado klimakontroll",
        "Hangulatvilagitas es konnektorok"
      ],
      capacityTitle: "Kapacitas",
      capacityText: "Paroknak vagy kisebb csaladoknak idealis, dome-unk kenyelmesen legfeljebb 4 vendeget fogad, igy intim es exkluziv elmenyt biztosit.",
      link: "Elerhetoseg ellenorzese"
    },
    services: {
      kicker: "Szolgaltatasok",
      title: "Minden, ami egy konnyu erdei kikapcsolodashoz kell.",
      items: [
        ["Terasz napozoagyakkal", "Pihenj a napon, szundits a fak arnyekaban a fuggohagyban, vagy olvass bent a hintaszekben."],
        ["Kandallo", "Toltsd az estet csendben, az erdo kozepen, a tuz melege mellett, mikozben hallgatod a fa ropogasat."],
        ["Kinti grill elmeny", "Keszd el kedvenc eteleidet a kinti grillen, es elvezd a hangulatos estet a szabad eg alatt."],
        ["Kert es egbolt kilatas", "Aludj az eg alatt, es nezd a csillagokat a sajat kenyelmes agyadbol."],
        ["Dezsa", "Lazits a dezsaban, korulotted a fak, feletted a csillagok."],
        ["Kert", "Setalj a birtokon, figyeld a termeszetet, hallgasd a madarakat, vagy pihenj a padon a to mellett."]
      ]
    },
    gallery: {
      kicker: "Galeria",
      title: "Pillantas a dome-ra, a kertre es a csendes kinti pillanatokra."
    },
    activities: {
      kicker: "Latnivalok",
      title: "Valaszthato programok a kornyeken.",
      items: [
        ["Turazas es setak", "Fedezd fel a Madarasi Hargitat, Hargitafurdot, a Vargyas-szorost, a Zetelaki-viztarozot es az erdei utvonalakat szep kilatassal, vizesesekkel, barlangokkal es hidakkal."],
        ["Szabadidokozpontok es termalfurdok", "Szentegyhazán es Homorodon szabadidokozpontok, medencek, szauna, sosvizes medencek es termeszetes meleg vizes furdok varnak."],
        ["Gyerekprogramok", "A gyerekek elvezhetik a kertet, a jatekokat es a trambulint. A kozelben van a homorodfurdoi bobpalya, a Balu Park es a Mini Erdely Park."],
        ["Pihenes", "Tarts igazi szunetet: setalj az erdoben, olvass, meditalj, vagy tolts egy csendes delutant a kertben."],
        ["Lovaglas", "A kornyeken gyerekeknek es felnotteknek is vannak lovaglasi lehetosegek es vezetett turak."],
        ["Teli programok", "Hargitafurdo es a Madarasi Hargita kivalo erdelyi sipalyakkal, szanos programokkal, motorosszanos turakkal es korcsolyazasi lehetosegekkel var."]
      ]
    },
    review: {
      text: "\"Megadja a termeszet minden elonyet, de kozben megvan a boutique hotel kenyelme es a csaladias gondoskodas is.\"",
      source: "Palmer-Grey, Booking.com",
      sectionKicker: "Velemenyek",
      sectionTitle: "A vendegek a csendet, a kenyelmet es a csaladias figyelmet szeretik.",
      showTranslation: "Forditas megjelenitese",
      hideTranslation: "Forditas elrejtese",
      translationLabel: "Forditas",
      cards: [
        ["\"Megadja a termeszet minden elonyet, de kozben megvan a boutique hotel kenyelme is.\"", "Palmer-Grey, Booking.com"],
        ["\"Csend, intimitas es a hazigazdak reszerol mutatott figyelem a reszletekre.\"", "Cezarina, Booking.com"],
        ["\"Tiszta, apolt, csendes kornyezet, tokeletes pihenesre.\"", "Hunor, Booking.com"],
        ["\"Intimitas, figyelem a reszletekre, szepseg, vendegszeretet es luxus kenyelem a termeszet kozepen.\"", "Andrea, Booking.com"],
        ["\"Kiemelkedo vendege ertekeles: 9.8 Booking.com-on es 5.0 Airbnb-n.\"", "Nyilvanos listazasok pontszamai"],
        ["\"Kempinghangulatu kenyelem mindennel, amire szukseg van, egy csendes, fak kozotti tisztason.\"", "Ioandecean, Booking.com"],
        ["\"Tiszta, kenyelmes, gyonyoru kilatas es nagyon kedves hazigazda.\"", "Bianca.z, Booking.com"],
        ["\"Pont olyan, mint a kepeken, baratsagos tulajdonosokkal es figyelmes reszletekkel.\"", "Homsi, Booking.com"],
        ["\"Egy masfajta elmeny a termeszet sziveben.\"", "Gloria, Booking.com"],
        ["\"Minden feltetel adott egy sikeres piheneshez.\"", "Florentina, Booking.com"]
      ],
      links: ["Booking.com velemenyek", "Airbnb hirdetes", "Google Maps"]
    },
    faq: {
      kicker: "Kerdesek",
      title: "Gyakori kerdesek.",
      items: [
        ["Van parkolasi lehetoseg?", "Igen, a helyszinen ingyenes parkolas elerheto."],
        ["Alacsony autoval is megkozelitheto?", "Igen, az ut jo allapotban van, barmilyen autoval megkozelitheto."],
        ["Van etterem?", "A legkozelebbi ettermek korulbelul 5 km-re vannak, es nehanyan kiszallitast is vallalnak a Dome-hoz."],
        ["Van etkezesi lehetoseg a szallason?", "Etelt nem biztositunk. Bent van egy konyha, kint pedig grill. A legkozelebbi ettermek es uzletek korulbelul 5 km-re vannak."],
        ["Lehet grillezni?", "Igen, a faszenet is biztositjuk."],
        ["Van legkondicionalo a dome-ban?", "Nincs legkondicionalo, de van ventilator a meleg nyari napokra. Kint sok arnyekos pihenohely talalhato."],
        ["Van terero? WiFi?", "Igen, nagyon jo a terero. Az Orange es a Vodafone mukodik a legjobban. WiFi nincs."],
        ["Be van keritve a birtok? Vannak medvek?", "A birtok nincs bekeritve, de a kornyek biztonsagos. Leginkabb ozikek es rokak fordulnak elo latogatoban."]
      ]
    },
    availability: {
      kicker: "Szabad datumok",
      title: "Nezd meg a szabad napokat a keres elkuldese elott.",
      text: "A zold napok elerhetok. A meleg szinnel jelolt napok mar foglaltak vagy nem elerhetok. Kuldd el a kerest, es szemelyesen visszaigazoljuk a datumokat.",
      prev: "Elozo",
      next: "Kovetkezo",
      weekdays: ["Het", "Ked", "Sze", "Csu", "Pen", "Szo", "Vas"],
      available: "Szabad",
      booked: "Foglalt",
      note: "Valassz egy szabad datumot.",
      monthNames: ["Januar", "Februar", "Marcius", "Aprilis", "Majus", "Junius", "Julius", "Augusztus", "Szeptember", "Oktober", "November", "December"]
    },
    booking: {
      kicker: "Foglalasi keres",
      title: "Ird meg, mikor szeretnel erkezni.",
      text: "Kuldd el az egyszeru kerest, es valaszolunk az elerhetoseggel, arral es a kovetkezo lepesekkel. A leggyorsabb valaszert WhatsAppon is irhatsz.",
      labels: ["Teljes nev", "Kedvelt kapcsolatfelvetel", "Email, telefon vagy WhatsApp szam", "Erkezes", "Tavozas", "Felnottek", "Gyerekek", "Haziallatok", "Uzenet"],
      preferred: ["Email", "Telefon", "WhatsApp"],
      datePlaceholder: "EEEE-HH-NN",
      placeholder: "Ird meg, ha van barmi fontos a pihenessel kapcsolatban.",
      button: "Keres elkuldese",
      note: "A keresed kozvetlenul a Medve Dome-hoz erkezik.",
      sent: "Koszonjuk. A keresed elkuldve, hamarosan felvesszuk veled a kapcsolatot.",
      sending: "Keres kuldese...",
      sendError: "Valami nem sikerult. Kerjuk, irj WhatsAppon vagy emailben: info.medvedome@gmail.com.",
      subject: "Foglalasi keres a Medve Dome-hoz",
      emailIntro: "Kedves Medve Dome,\n\nSzeretnek foglalasi kerest kuldeni.",
      emailFields: ["Nev", "Email vagy telefon", "Erkezes", "Tavozas", "Felnottek", "Gyerekek", "Haziallatok", "Kedvelt kapcsolatfelvetel", "Uzenet"]
    },
    bookingPage: {
      heroKicker: "Foglalasi keres",
      heroTitle: "Medve Dome foglalas",
      heroText: "Nezd at a fontos reszleteket, valaszd ki a kivant datumokat, es kuldd el a kerest. Felvesszuk veled a kapcsolatot a kovetkezo lepesekkel.",
      contact: "Vlahita, Hargita megye, Romania",
      priceFrom: "Ettol",
      priceValue: "650 LEI",
      priceNight: "Ejszakankent",
      propertiesTitle: "Adatok",
      propertyLabels: ["Kapacitas:", "Meret:", "Agyak:"],
      propertyValues: ["4", "28 m2", "1 franciaagy, 1 queen agy"],
      checkTitle: "Erkezes es tavozas",
      checkLabels: ["Erkezes", "Tavozas"],
      checkValues: ["14:00", "12:00"],
      termsTitle: "Feltetelek",
      termsLabels: ["Kozvetlen keres", "Eloleg"],
      termsValues: ["Minden pihenest szemelyesen igazolunk vissza", "20% a foglalas veglegesitesehez"],
      importantTitle: "Fontos",
      importantItems: [
        "A dezsa benne van az arban.",
        "A foglalasi urlap kitoltese utan felvesszuk veled a kapcsolatot, es elkuldjuk a foglalas reszleteit.",
        "A foglalas csak a <strong>20% eloleg</strong> befizetese utan vegleges, Revolut, internetes bankolas vagy banki atutalas utjan.",
        "A teljes osszeg az erkezes napjan fizetendo.",
        "Lemondas eseten az eloleg teljesen visszajar, ha a lemondas legalabb <strong>7 nappal</strong> az erkezes elott tortenik.",
        "Atfoglalas a szabad helyek fuggvenyeben lehetseges, legalabb <strong>5 nappal</strong> elore jelezve.",
        "Haziallatokat szivesen fogadunk. Kerjuk, add meg a haziallatok szamat is a keresben.",
        "<strong>Dohanyzas:</strong> A dome belsejeben tilos a dohanyzas. Csak kint/teraszon megengedett, a tisztasag es biztonsag betartasaval.",
        "<strong>Cipo bent:</strong> Kinti cipot nem lehet bent viselni. Kerjuk, hasznald a biztositott papucsokat."
      ],
      moreKicker: "Tovabbi informaciok",
      moreTitle: "Kenyelem, meleg es kilatas az egboltra.",
      moreText: [
        "A Medve Dome lent egy franciaaggyal es a galeria szinten egy masik fekvohellyel van felszerelve, ahonnan jobban lathato a teton levo ablak. Innen nezheted az eget es a csillagokat, ami igazan emlekezetes es romantikus elmeny lehet.",
        "A dome-ban fakalyha es sajat furdo talalhato modern Eco-toalettel, amely kevesebb vizet hasznal. A konyha fozeshez felszerelt. Torolkozok, parnak, paplanok, agynemu es takarok ingyenesen biztositottak, illatmentes, organikus es vegyszermentes mososzerrel mosva. Organikus szappant, tusfurdot es extra WC-papirt is biztositunk."
      ],
      amenitiesKicker: "Felszereltseg",
      amenitiesTitle: "A pihenes resze.",
      amenities: ["Zuhany", "Konyha", "Torolkozok", "Ventilator", "Grill", "Hutoszekreny", "Egbolt ablak", "Terasz", "Fakalyha", "Dezsa", "Napozoagyak", "Agynemu", "Kave", "Sutemeny", "So es bors", "Jatekok", "Papucs", "Organikus szappan"],
      policiesKicker: "Szabalyok",
      policiesTitle: "Foglalasi szabalyzat",
      policyItems: [
        ["Dezsa:", "A dezsa benne van az arban, es csak a kapott utasitasok szerint hasznalhato. A viz felmelegitese idot vesz igenybe, ezert kerjuk, elore jelezd, ha hasznalni szeretned."],
        ["Dohanyzas:", "A dome belsejeben tilos a dohanyzas. Csak kint/teraszon megengedett, a tisztasag es biztonsag betartasaval."],
        ["Cipo bent:", "Kinti cipot nem lehet bent viselni. Kerjuk, hasznald a biztositott papucsokat."]
      ],
      contactKicker: "Kapcsolat",
      contactTitle: "Vlahitan, Hargita megyeben talalsz minket."
    },
    footer: {
      kicker: "Kapcsolat",
      location: "Vlahita, Hargita megye, Romania",
      phone: "Tel: +40 742 919 341"
    },
    whatsapp: "WhatsApp",
    whatsappAria: "Uzenet kuldese WhatsAppon",
    close: "Bezaras"
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
    const dayElement = document.createElement("button");
    dayElement.type = "button";
    dayElement.className = `calendar-day ${isBooked ? "is-booked" : "is-available"}`;
    dayElement.setAttribute("aria-label", `${dateKey}: ${isBooked ? t.booked : t.available}`);
    dayElement.dataset.date = dateKey;
    dayElement.disabled = isBooked;
    const dayOfWeek = new Date(year, month, day).getDay();
    const price = dayOfWeek === 0 || dayOfWeek === 6 ? "750 lei" : "650 lei";
    dayElement.innerHTML = `<strong>${day}</strong><span>${isBooked ? t.booked : t.available}</span>${isBooked ? "" : `<em>${price}</em>`}`;

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
  lightboxClose.textContent = t.close;
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

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen);
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
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

roomThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (!roomMainImage) {
      return;
    }

    const image = thumb.querySelector("img");
    roomMainImage.src = image.src.replace(/w_\d+,h_\d+/, "w_980,h_720");
    roomMainImage.alt = image.alt;
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
