$('[lang="fr"]').hide();

$('#switch-lang').click(function() {
  $('[lang="fr"]').toggle();
  $('[lang="en"]').toggle();
});

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
var language = {
    eng: {
        homeStart: "Home",
        about: "About me",
        contacts: "Contact",
        freelance: "Freelance",
        selftaught: "Self-taught",
        myTools: "My Tools",
        angular: "I have worked for more than 6 months on a Angular based website.",
        readMore: "Read more",
        nodeJs: "I used NodeJs to developpe most of my website to have a stable and strong back-end.",
        sql: "SQL is one of the most fastest and easiest databases for web developpement.",
        django: "Django and flask are powerful Python-based free and open-source web framework.",
        cplusplus: "I had the chance to use C++ during most of my second year projects.",
        cProgramming: "Most of my first year projects were in C to get a better understanding of how programms work.",
        aboutMe: "About Me",
        hi: "Hi There",
        info: "I am a in my third year of my bachelor's degree at Epitech Montpellier. I am currently looking for a full-time job as a full-stack developper for 4 months. Then a 6 months part-time job and finally a 6 months internship to finish my bachelor's degree. I am very autodidact and very keen to learn new things.",
        name: "Name:",
        phone: "Phone:",
        contactMe: "Contact Me",
        workTogether: "Let’s Work Together On Your Next Project!",
        hire: "Hire Me Now!",
        projects: "Projects",
        hoursPerDay: "Hours per working day",
        yearsExp: "Years Experience",
        testimonial: "Testimonials",
        testimonial1: "Richard, despite the fact that he is at the beginning of his studies, already has a solid knowledge, which he will obviously develop into an excellent engineer at the end of his studies. His personality is very pleasant and he is very serious. In short, an excellent recruit.",
        camatau: "Founder & CEO of Camatau",
        testimonial2: "Richard has totally adapted to the particularity and multicultural richness of the learners by using English as a working and communication language without any difficulty.",
        supagro: "Head of Language Departement\nat Supagro Montpellier",
        touch: "Get In Touch",
        adress: "Adress",
        getPhone: "Phone",
        connectMe: "Let’s Connect",
        messageSend: "Send Me a Message",
        nameStar: "Name *",
        subjectStar: "Subject *",
        sendAMessage: "Send a Message",
    },
    fr: {
        homeStart: "Acceuil",
        about: "À propos",
        contacts: "Contactez-moi",
        freelance: "Freelanceur",
        selftaught: "Autodidacte",
        myTools: "Mes Outils",
        angular: "J'ai travaillé pendant plus de 6 mois sur un site web basé sur Angular.",
        readMore: "Lire la suite",
        nodeJs: "J'ai utilisé NodeJs pour développer la plupart de mon site web afin d'avoir un back-end stable et solide.",
        sql: "SQL est l'une des bases de données les plus rapides et les plus faciles à utiliser pour le développement de sites web",
        django: "Django et flask sont de puissants frameworks web gratuits et open-source basés sur Python.",
        cplusplus: "J'ai eu la chance d'utiliser C++ pendant la plupart de mes projets de deuxième année",
        cProgramming: "La plupart de mes projets de première année étaient en C afin de mieux comprendre le fonctionnement des programmes.",
        aboutMe : "À propos de moi",
        hi : "Salut",
        info : "Je suis un étudiant en troisième année de bachelor à Epitech Montpellier. Je suis actuellement à la recherche d'un emploi à temps plein en tant que développeur full-stack pendant 4 mois. Puis un emploi à temps partiel de 6 mois et enfin un stage de 6 mois pour finir ma licence. Je suis très autodidacte et très désireux d'apprendre de nouvelles choses.",
        nameInfo : "Nom :",
        phone : "Téléphone :",
        contactMe : "Contact Me",
        workTogether : "Travaillons ensemble sur votre prochain projet !",
        hire : "Embauchez-moi maintenant !",
        projects : "Projets",
        hoursPerDay : "Heures par jour de travail",
        yearsExp : "Années d'expérience",
        testimonial : "Témoignages",
        testimonial1 : "Richard, malgré le fait qu'il soit au début de ses études, possède déjà de solides connaissances, qu'il développera évidemment en un excellent ingénieur à la fin de ses études. Sa personnalité est très agréable et il est très sérieux. Bref, une excellente recrue",
        camatau : "Fondateur et PDG de Camatau",
        testimonial2 : "Richard s'est totalement adapté à la particularité et à la richesse multiculturelle des apprenants en utilisant l'anglais comme langue de travail et de communication sans aucune difficulté",
        supagro : "Chef du département des langues\nat Supagro Montpellier",
        touch : "Prenez contact avec nous",
        adress : "Adresse",
        getPhone : "Phone",
        connectMe : "Rentrons En Contact",
        messageSend : "Envoyez-moi un message",
        nameStar : "Nom *",
        subjectStar : "Sujet *",
        sendAMessage : "Envoyer un message",
    }
};

  // Check if a hash value exists in the URL
if (window.location.hash && window.location.hash == "#fr") {
    homeStart.textContent = language.fr.homeStart;
    about.textContent = language.fr.about;
    contacts.textContent = language.fr.contacts;
    freelance.textContent = language.fr.freelance;
    selftaught.textContent = language.fr.selftaught;
    myTools.textContent = language.fr.myTools;
    angular.textContent = language.fr.angular;
    readMore.textContent = language.fr.readMore;
    readMore2.textContent = language.fr.readMore;
    readMore3.textContent = language.fr.readMore;
    readMore4.textContent = language.fr.readMore;
    readMore5.textContent = language.fr.readMore;
    readMore6.textContent = language.fr.readMore;
    nodeJs.textContent = language.fr.nodeJs;
    sql.textContent = language.fr.sql;
    django.textContent = language.fr.django;
    cplusplus.textContent = language.fr.cplusplus;
    cProgramming.textContent = language.fr.cProgramming;
    hi.textContent = language.fr.hi;
    info.textContent = language.fr.info;
    nameInfo.textContent = language.fr.nameInfo;
    phone.textContent = language.fr.phone;
    contactMe.textContent = language.fr.contactMe;
    workTogether.textContent = language.fr.workTogether;
    hire.textContent = language.fr.hire;
    projects.textContent = language.fr.projects;
    hoursPerDay.textContent = language.fr.hoursPerDay;
    yearsExp.textContent = language.fr.yearsExp;
    testimonial.textContent = language.fr.testimonial;
    testimonial1.textContent = language.fr.testimonial1;
    camatau.textContent = language.fr.camatau;
    testimonial2.textContent = language.fr.testimonial2;
    supagro.textContent = language.fr.supagro;
    touch.textContent = language.fr.touch;
    adress.textContent = language.fr.adress;
    getPhone.textContent = language.fr.getPhone;
    connectMe.textContent = language.fr.connectMe;
    messageSend.textContent = language.fr.messageSend;
    nameStar.textContent = language.fr.nameStar;
    subjectStar.textContent = language.fr.subjectStar;
    document.getElementById('form-contact-submit').textContent = language.fr.sendAMessage;
    document.getElementById('form-contact-name').placeholder= 'Nom';
    document.getElementById('form-contact-subject').placeholder= 'Sujet';
} else if (window.location.hash && window.location.hash == "#eng") {
    homeStart.textContent = language.en.home;
    about.textContent = language.en.about;
    contacts.textContent = language.en.contacts;
    freelance.textContent = language.en.freelance;
    selftaught.textContent = language.en.selftaught;
    myTools.textContent = language.en.myTools;
    angular.textContent = language.en.angular;
    readMore.textContent = language.en.readMore;
    readMore2.textContent = language.en.readMore;
    readMore3.textContent = language.en.readMore;
    readMore4.textContent = language.en.readMore;
    readMore5.textContent = language.en.readMore;
    readMore6.textContent = language.en.readMore;
    nodeJs.textContent = language.en.nodeJs;
    sql.textContent = language.en.sql;
    django.textContent = language.en.django;
    cplusplus.textContent = language.en.cplusplus;
    cProgramming.textContent = language.en.cProgramming;
    hi.textContent = language.en.hi;
    info.textContent = language.en.info;
    nameInfo.textContent = language.en.nameInfo;
    phone.textContent = language.en.phone;
    contactMe.textContent = language.en.contactMe;
    workTogether.textContent = language.en.workTogether;
    hire.textContent = language.en.hire;
    projects.textContent = language.en.projects;
    hoursPerDay.textContent = language.en.hoursPerDay;
    yearsExp.textContent = language.en.yearsExp;
    testimonial.textContent = language.en.testimonial;
    testimonial1.textContent = language.en.testimonial1;
    camatau.textContent = language.en.camatau;
    testimonial2.textContent = language.en.testimonial2;
    supagro.textContent = language.en.supagro;
    touch.textContent = language.en.touch;
    adress.textContent = language.en.adress;
    getPhone.textContent = language.en.getPhone;
    connectMe.textContent = language.en.connectMe;
    messageSend.textContent = language.en.messageSend;
    nameStar.textContent = language.en.nameStar;
    subjectStar.textContent = language.en.subjectStar;
    document.getElementById('form-contact-submit').textContent = language.en.sendAMessage;
    document.getElementById('form-contact-name').placeholder= 'Name';
    document.getElementById('form-contact-subject').placeholder= 'Subject';
}