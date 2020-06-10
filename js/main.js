var age = 0
var dateToday = new Date()
var today = [dateToday.getFullYear(),dateToday.getMonth(),dateToday.getDate()]
var anniv = [1994,3,25]
if(today[1]>anniv[1] || (today[1]==anniv[1] && today[2]>=anniv[2])){
  age = today[0] - anniv[0]
}else {
  age = today[0] - anniv[0] - 1
}

var languagesJSON = {
  "FR" : {
    "home" : {
      "linkFlag" : "assets/imgs/uk.jpg",
      "title" : "Accueil",
      "subTitle" : "Développeur web/mobile",
      "linkedin" : "Mon Linkedin",
      "cv" : "Mon CV (PDF)",
      "linkCV" : "assets/pdf/cv_VERDU_William.pdf"
    },
    "about" : {
      "title" : "À propos de moi",
      "lines" : [
        "Je suis un développeur web/mobile de "+age+" ans, ayant une préférence pour le JavaScript et TypeScript, ainsi que leurs frameworks, tels qu'Angular ou React.",
        "Membre de la promotion 2017 de l'école PopSchool Valenciennes, j'ai pu être formé à de nombreux languages, aussi bien en front-end qu'en back-end.",
        "D'un naturel curieux et autonome, je suis actuellement à la recherche d'un emploi où je pourrais démontrer le panel de mes connaissances à travers de nombreux projets !"
      ]
    },
    "exp" : {
      "title" : "Expérience/formation",
      "title1" : "expérience en tant que développeur",
      "title2" : "formations et diplômes",
      "jobs" : [
        {
          "name" : "Agence Big Moustache",
          "city" : "Anzin",
          "role" : "Employé en tant que développeur web/mobile",
          "year" : "2017 - 2020"
        },
        {
          "name" : "Ecklipse",
          "city" : "Villeneuve-d'Ascq",
          "role" : "Stage en tant que développeur front-end",
          "year" : "2017"
        }
      ],
      "schools" : [
        {
          "name" : "Développeur web",
          "school" : "PopSchool Valenciennes",
          "year" : "2017"
        },
        {
          "name" : "Baccalauréat S",
          "school" : "Lycée du Val d'Argens",
          "year" : "2012"
        }
      ]
    },
    "skills" : {
      "title" : "Compétences"
    },
    "contact" : {
      "title" : "Contact",
      "email" : "Email",
      "tel" : "Téléphone",
      "telNum" : "06 11 31 11 17",
      "address" : "Adresse",
      "copy1" : "Copier dans le presse-papier",
      "copy2" : "Copié !"
    }
  },
  "EN" : {
    "home" : {
      "linkFlag" : "assets/imgs/france.jpg",
      "title" : "Home",
      "subTitle" : "Web/mobile developer",
      "linkedin" : "My Linkedin",
      "cv" : "My resume (PDF)",
      "linkCV" : "assets/pdf/resume_VERDU_William.pdf"
    },
    "about" : {
      "title" : "About me",
      "lines" : [
        "I'm a "+age+" years old web/mobile developer, with a liking for JavaScript and TypeScript, as well as their frameworks, such as Angular or React.",
        "Member of PopSchool Valenciennes graduating class of 2017, I was able to be trained in many languages, front-end and back-end.",
        "Being curious and independent, I'm currently looking for a job where I'll can demonstrate my knowledge through numerous projects !"
      ]
    },
    "exp" : {
      "title" : "Experience/qualifications",
      "title1" : "experience as a developer",
      "title2" : "qualifications",
      "jobs" : [
        {
          "name" : "Agence Big Moustache",
          "city" : "Anzin",
          "role" : "Working as a web/mobile developer",
          "year" : "2017 - 2020"
        },
        {
          "name" : "Ecklipse",
          "city" : "Villeneuve-d'Ascq",
          "role" : "Internship as a front-end developer",
          "year" : "2017"
        }
      ],
      "schools" : [
        {
          "name" : "Web developer",
          "school" : "PopSchool Valenciennes",
          "year" : "2017"
        },
        {
          "name" : "Baccalaurate S",
          "school" : "Lycée du Val d'Argens",
          "year" : "2012"
        }
      ]
    },
    "skills" : {
      "title" : "Skills"
    },
    "contact" : {
      "title" : "Contact",
      "email" : "Email",
      "tel" : "Phone number",
      "telNum" : "+336 11 31 11 17",
      "address" : "Address",
      "copy1" : "Copy to clipboard",
      "copy2" : "Copied !"
    }
  }
}


var language = "FR";

loadLanguage();

function customScroll(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function copyClipboard(type) {
  const elemTA = document.createElement('textarea');
  if(type=="email"){
    elemTA.value = "verduwilliam@gmail.com";
    document.getElementById("txtCopyEmail").innerHTML = languagesJSON[language].contact.copy2
  }else if(type=="tel"){
    elemTA.value = languagesJSON[language].contact.telNum;
    document.getElementById("txtCopyTel").innerHTML = languagesJSON[language].contact.copy2
  }
  elemTA.setAttribute('readonly', '');
  elemTA.style.position = 'absolute';
  elemTA.style.left = '-999px';
  document.body.appendChild(elemTA);
  elemTA.select();
  document.execCommand('copy');
  document.body.removeChild(elemTA);
  setTimeout(()=>{
    document.getElementById("txtCopyEmail").innerHTML = languagesJSON[language].contact.copy1
    document.getElementById("txtCopyTel").innerHTML = languagesJSON[language].contact.copy1
  }, 2000)
}

function changeLanguage() {
  if(language == "FR"){
    language = "EN"
  }else{
    language = "FR"
  }
  loadLanguage()
}

function loadLanguage() {
  //header
  document.getElementById("header").getElementsByClassName("headerOption")[0].getElementsByTagName("span")[0].innerHTML = languagesJSON[language].home.title
  document.getElementById("header").getElementsByClassName("headerOption")[1].getElementsByTagName("span")[0].innerHTML = languagesJSON[language].about.title
  document.getElementById("header").getElementsByClassName("headerOption")[2].getElementsByTagName("span")[0].innerHTML = languagesJSON[language].exp.title
  document.getElementById("header").getElementsByClassName("headerOption")[3].getElementsByTagName("span")[0].innerHTML = languagesJSON[language].skills.title
  document.getElementById("header").getElementsByClassName("headerOption")[4].getElementsByTagName("span")[0].innerHTML = languagesJSON[language].contact.title

  //home
  document.getElementById("flagImg").src = languagesJSON[language].home.linkFlag
  document.getElementById("home").getElementsByTagName("h2")[0].innerHTML = languagesJSON[language].home.subTitle
  document.getElementById("home").getElementsByTagName("div")[1].getElementsByTagName("a")[0].innerHTML = languagesJSON[language].home.linkedin + " <img src='assets/imgs/linkedin.png' alt='Linkedin'>"
  document.getElementById("home").getElementsByTagName("div")[1].getElementsByTagName("a")[1].innerHTML = languagesJSON[language].home.cv + " <img src='assets/imgs/pdf.png' alt='PDF'>"
  document.getElementById("home").getElementsByTagName("div")[1].getElementsByTagName("a")[1].href = languagesJSON[language].home.linkCV

  //about
  document.getElementById("about").getElementsByTagName("h3")[0].innerHTML = languagesJSON[language].about.title
  let txtAboutMe = ""
  let promiseAboutMe = languagesJSON[language].about.lines.forEach((child)=>{
    if(txtAboutMe==""){
      txtAboutMe = child
    }else{
      txtAboutMe = txtAboutMe + "<br>" + child
    }
  })
  Promise.all([promiseAboutMe]).then((vals)=>{
    document.getElementById("about").getElementsByTagName("div")[0].innerHTML = txtAboutMe
  })

  //exp
  document.getElementById("exp").getElementsByTagName("h3")[0].innerHTML = languagesJSON[language].exp.title1
  document.getElementById("exp").getElementsByTagName("h3")[1].innerHTML = languagesJSON[language].exp.title2
  let expPro = ""
  document.getElementById("expPro").innerHTML = ""
  let formations = ""
  document.getElementById("formations").innerHTML = ""
  let promiseExpPro = languagesJSON[language].exp.jobs.forEach((child)=>{
    if(expPro==""){
      expPro = `
      <div class="expDiv">
        <span class="expBoite">`+child.name+`</span> - `+child.city+`<br>
        `+child.role+`<br>
        <span class="expYear">`+child.year+`</span>
      </div>
      `
    }else{
      expPro = expPro + `
      <div class="expDiv">
        <span class="expBoite">`+child.name+`</span> - `+child.city+`<br>
        `+child.role+`<br>
        <span class="expYear">`+child.year+`</span>
      </div>
      `
    }
  })
  let promiseFormations = languagesJSON[language].exp.schools.forEach((child)=>{
    if(formations==""){
      formations = `
      <div class="expDiv">
        <span class="expBoite">`+child.name+`</span><br>
        `+child.school+`<br>
        <span class="expYear">`+child.year+`</span>
      </div>
      `
    }else{
      formations = formations + `
      <div class="expDiv">
        <span class="expBoite">`+child.name+`</span><br>
        `+child.school+`<br>
        <span class="expYear">`+child.year+`</span>
      </div>
      `
    }
  })
  Promise.all([promiseExpPro, promiseFormations]).then((vals)=>{
    document.getElementById("expPro").innerHTML = expPro
    document.getElementById("formations").innerHTML = formations
  })

  //skills
  document.getElementById("skills").getElementsByTagName("h3")[0].innerHTML = languagesJSON[language].skills.title

  //contact
  document.getElementById("contact").getElementsByClassName("contactDetails")[0].innerHTML = `
  <div class="gras">`+languagesJSON[language].contact.email+`</div>
  <div onclick="copyClipboard('email')">
    <div class="btnContact containerTooltipTop">
      verduwilliam@gmail.com
      <span class="tooltipTop" id="txtCopyEmail">`+languagesJSON[language].contact.copy1+`</span>
    </div>
  </div>
  `
  document.getElementById("contact").getElementsByClassName("contactDetails")[1].innerHTML = `
  <div class="gras">`+languagesJSON[language].contact.tel+`</div>
  <div onclick="copyClipboard('tel')">
    <div class="btnContact containerTooltipTop">
      `+languagesJSON[language].contact.telNum+`
      <span class="tooltipTop" id="txtCopyTel">`+languagesJSON[language].contact.copy1+`</span>
    </div>
  </div>
  `
  document.getElementById("contact").getElementsByClassName("contactDetails")[2].innerHTML = `
  <div class="gras">`+languagesJSON[language].contact.address+`</div>
  <div onclick="copyClipboard('tel')">
    <div>
      34 rue Pasteur <br>
      Appartement 3 <br>
      59300 VALENCIENNES
    </div>
  </div>
  `

}
