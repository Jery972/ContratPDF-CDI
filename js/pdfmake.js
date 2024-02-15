function generatePDF() {
  //EMPLOYEUR
  let societeValue = "....................";
  let kbisValue = "....................";
  let siretValue = "....................";
  let postalSocial1 = "..........";
  let postalSocial2 = "";
  let postalSocial3 = "";
  let nameEmployeur = "....................";
  let qualityEmployeur = "....................";

  document.getElementById("societe").value
    ? (societeValue = document.getElementById("societe").value)
    : null;
  document.getElementById("kbis").value
    ? (kbisValue = document.getElementById("kbis").value)
    : null;
  document.getElementById("siret").value
    ? (siretValue = document.getElementById("siret").value)
    : null;
  document.getElementById("postalSocial1").value
    ? (postalSocial1 = document.getElementById("postalSocial1").value)
    : null;
  document.getElementById("postalSocial2").value
    ? (postalSocial2 = document.getElementById("postalSocial2").value)
    : null;
  document.getElementById("postalSocial3").value
    ? (postalSocial3 = document.getElementById("postalSocial3").value)
    : null;
  document.getElementById("nameEmployeur").value
    ? (nameEmployeur = document.getElementById("nameEmployeur").value)
    : null;
  document.getElementById("qualityEmployeur").value
    ? (qualityEmployeur = document.getElementById("qualityEmployeur").value)
    : null;

  //SALARIE Page 1
  let civilite = 0;
  let fullname = "....................";
  let birthName = null;
  let birthDate = "....................";
  let birthGeo = "..........";
  let nationality = "..........";
  let postalWorker1 = "..........";
  let postalWorker2 = "";
  let postalWorker3 = "";
  let socialCode = "..........";
  let titleSejour = "..........";
  let numberSejour = "..........";
  let dateSejour = "du ..... au .....";

  // Sélectionner tous les boutons radio avec le nom "civilite"
  let boutonsRadio = document.querySelectorAll('input[name="civilite"]');

  // Parcourir chaque bouton radio pour trouver celui qui est sélectionné
  boutonsRadio.forEach(function (bouton) {
    if (bouton.checked) {
      civilite = bouton.value;
    }
  });

  function isGenre() {
    if (civilite == 1) {
      return "MME ";
    } else return "M. ";
  }

  document.getElementById("birthName").value
    ? (birthName = document.getElementById("birthName").value)
    : null;

  function haveBirthName() {
    if (birthName) {
      if (civilite == "0") {
        return " né " + birthName;
      } else {
        return " née " + birthName;
      }
    }
    return "";
  }

  document.getElementById("fullname").value
    ? (fullname = document.getElementById("fullname").value)
    : null;
  document.getElementById("birthDate").value
    ? (birthDate = document.getElementById("birthDate").value)
    : null;
  document.getElementById("birthGeo").value
    ? (birthGeo = document.getElementById("birthGeo").value)
    : null;
  document.getElementById("nationality").value
    ? (nationality = document.getElementById("nationality").value)
    : null;
  document.getElementById("postalWorker1").value
    ? (postalWorker1 = document.getElementById("postalWorker1").value)
    : null;
  document.getElementById("postalWorker2").value
    ? (postalWorker2 = document.getElementById("postalWorker2").value)
    : null;
  document.getElementById("postalWorker3").value
    ? (postalWorker3 = document.getElementById("postalWorker3").value)
    : null;
  document.getElementById("socialCode").value
    ? (socialCode = document.getElementById("socialCode").value)
    : null;
  document.getElementById("titleSejour").value
    ? (titleSejour = document.getElementById("titleSejour").value)
    : null;
  document.getElementById("numberSejour").value
    ? (numberSejour = document.getElementById("numberSejour").value)
    : null;
  document.getElementById("dateSejour").value
    ? (dateSejour = document.getElementById("dateSejour").value)
    : null;

  function isStranger() {
    if (titleSejour != "..........") {
      let line1 = "Titre de séjour valant autorisation de travail :\n";
      let line2 = "Nature du titre : " + titleSejour + "\n";
      let line3 = "N° de titre : " + numberSejour + "\n";
      let line4 = "Date de validité du titre : " + dateSejour + "\n\n";
      return line1 + line2 + line3 + line4;
    }
  }

  var dd = {
    styles: {
      h1: {
        fontSize: 20,
        bold: true,
        decoration: "underline",
        margin: [0, 40],
      },
      h2: {
        fontSize: 13,
        bold: true,
        margin: [0, 10],
      },
      p: {
        fontSize: 11,
      },
      footer1: {
        fontSize: 11,
        bold: true,
      },
      footer2: {
        fontSize: 10,
      },
    },
    pageMargins: [55, 40, 55, 80],

    footer: function (currentPage, pageCount) {
      return [
        {
          text: "Page " + currentPage.toString() + " sur " + pageCount,
          alignment: "center",
          style: "footer1",
        },
        {
          text: "Paraphe en bas de chaque page et signature sur la dernière page du contrat",
          alignment: "center",
          style: "footer2",
        },
      ];
    },

    content: [
      {
        text: "CONTRAT DE TRAVAIL A DUREE\nINDETERMINEE",
        style: "h1",
        alignment: "center",
      },
      {
        text: "Entre les soussignés :",
        style: "h2",
      },
      {
        text: [
          "La " + societeValue + "\n",
          "Immatriculation au Registre des Commerces et des Sociétés avec le N° :\n",
          kbisValue + "\n",
          "N° SIRET : " + siretValue + "\n\n",
          "Adresse du siège social :\n",
          postalSocial1 != ".........."
            ? postalSocial1 +
              "\n" +
              postalSocial2 +
              "\n" +
              postalSocial3 +
              "\n\n"
            : "..........\n ..........\n .......... \n\n",
          "Représentée par " +
            nameEmployeur +
            " agissant en qualité de " +
            qualityEmployeur +
            "\n\n",
          "ci-après l' « Employeur »,",
        ],
        style: "p",
      },
      {
        text: "\n\n\nEt :\n\n\n",
        style: "h2",
      },
      {
        text: [
          isGenre() + fullname + haveBirthName() + "\n",
          civilite == "1" ? "Née le " : "Né le ",
          birthDate + " à " + birthGeo + "\n",
          "Nationalité : " + nationality + "\n\n",
          "Demeurant :\n",
          postalWorker1 != ".........."
            ? postalWorker1 +
              "\n" +
              postalWorker2 +
              "\n" +
              postalWorker3 +
              "\n\n"
            : "..........\n ..........\n .......... \n\n",
          "N° de sécurité sociale : " + socialCode + "\n\n",
          isStranger(),
          civilite == "1" ? "Ci-après la Salariée" : "Ci-après le Salarié",
          "\n\n\n\n",
        ],
        style: "p",
      },
      {
        text: "IL EST CONVENU ET ARRETE CE QUI SUIT :\n\n\n\n",
        style: "h2",
      },
    ],
  };
  pdfMake.createPdf(dd).download();
}
