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

  // ARTICLE 1

  let nameConvention = "....................";
  let codeConvention = "....................";

  document.getElementById("nameConvention").value
    ? (nameConvention = document.getElementById("nameConvention").value)
    : null;
  document.getElementById("codeConvention").value
    ? (codeConvention = document.getElementById("codeConvention").value)
    : null;

  //  ARTICLE 2
  let nameSalary = "....................";
  let fonctionSalary = "....................";
  let statusSalary = "....................";
  let positionSalary = "....................";
  let echelonSalary = "....................";
  let coefSalary = "....................";
  let levelSalary = "....................";
  let beginDate = "....................";
  let cityUrssaf = "....................";
  let taskClient = "....................";

  document.getElementById("nameSalary").value
    ? (nameSalary = document.getElementById("nameSalary").value)
    : null;
  document.getElementById("fonctionSalary").value
    ? (fonctionSalary = document.getElementById("fonctionSalary").value)
    : null;
  document.getElementById("statusSalary").value
    ? (statusSalary = document.getElementById("statusSalary").value)
    : null;
  document.getElementById("positionSalary").value
    ? (positionSalary = document.getElementById("positionSalary").value)
    : null;
  document.getElementById("echelonSalary").value
    ? (echelonSalary = document.getElementById("echelonSalary").value)
    : null;
  document.getElementById("coefSalary").value
    ? (coefSalary = document.getElementById("coefSalary").value)
    : null;
  document.getElementById("levelSalary").value
    ? (levelSalary = document.getElementById("levelSalary").value)
    : null;
  document.getElementById("beginDate").value
    ? (beginDate = document.getElementById("beginDate").value)
    : null;
  document.getElementById("cityUrssaf").value
    ? (cityUrssaf = document.getElementById("cityUrssaf").value)
    : null;
  document.getElementById("taskClient").value
    ? (taskClient = document.getElementById("taskClient").value)
    : null;

  // ARTICLE 3
  let essaiPeriode = "....................";
  let maxPeriode = "....................";

  document.getElementById("essaiPeriode").value
    ? (essaiPeriode = document.getElementById("essaiPeriode").value)
    : null;
  document.getElementById("maxPeriode").value
    ? (maxPeriode = document.getElementById("maxPeriode").value)
    : null;

  // ARTICLE 4
  let WorkPlace1 = "..........";
  let WorkPlace2 = "";
  let WorkPlace3 = "";

  document.getElementById("WorkPlace1").value
    ? (WorkPlace1 = document.getElementById("WorkPlace1").value)
    : null;
  document.getElementById("WorkPlace2").value
    ? (WorkPlace2 = document.getElementById("WorkPlace2").value)
    : null;
  document.getElementById("WorkPlace3").value
    ? (WorkPlace3 = document.getElementById("WorkPlace3").value)
    : null;

  // ARTICLE 5
  let hourWeek = "..........";
  let hourMonth = "..........";

  document.getElementById("hourWeek").value
    ? (hourWeek = document.getElementById("hourWeek").value)
    : null;
  document.getElementById("hourMonth").value
    ? (hourMonth = document.getElementById("hourMonth").value)
    : null;

  // ARTICLE 6
  let moneyMonth = "....................";

  document.getElementById("moneyMonth").value
    ? (moneyMonth = document.getElementById("moneyMonth").value)
    : null;

  // ARTICLE 9
  let orgaOthers = null;
  let orgaOthers2 = null;

  document.getElementById("orgaOthers").value
    ? (orgaOthers = document.getElementById("orgaOthers").value)
    : null;
  document.getElementById("orgaOthers2").value
    ? (orgaOthers2 = document.getElementById("orgaOthers2").value)
    : null;

  // ARTICLE 15

  function demarcheSejour() {
    if (titleSejour != "..........") {
      let line1 =
        isGenre() +
        nameSalary +
        " s'engage à effectuer toutes les démarches administratives nécessaires afin de toujours posséder un titre de séjour valable. De plus, ";
      let line2 =
        isGenre() +
        nameSalary +
        " s'engage à fournir une copie de ce document à l'Employeur.\n";
      let line3 =
        "Le non-respect de cette disposition expose " +
        isGenre() +
        nameSalary +
        " à un risque de rupture du contrat de travail dans le respect de la législation en vigueur. \n\n";
      return line1 + line2 + line3;
    }
  }

  // FIN CONTRAT
  let lieuContrat = "....................";
  let dateContrat = "....................";

  document.getElementById("lieuContrat").value
    ? (lieuContrat = document.getElementById("lieuContrat").value)
    : null;
  document.getElementById("dateContrat").value
    ? (dateContrat = document.getElementById("dateContrat").value)
    : null;

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
      h3: {
        fontSize: 12,
        bold: true,
        decoration: "underline",
        margin: [0, 20, 0, 10],
      },
      p: {
        fontSize: 11,
      },
      p2: {
        fontSize: 11,
        alignment: "justify",
      },
      footer1: {
        fontSize: 11,
        bold: true,
      },
      footer2: {
        fontSize: 10,
        italics: true,
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
        text: "\n\nEt :\n\n",
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
        text: "IL EST CONVENU ET ARRETE CE QUI SUIT :",
        pageBreak: "after",
        style: "h2",
      },

      {
        text: "ARTICLE 1. CONVENTION COLLECTIVE",
        style: "h3",
      },
      {
        text:
          "Le présent contrat est régi par les dispositions légales, réglementaires et conventionnelles applicables à la Société. En l'espèce, le présent contrat est régi par les dispositions conventionnelles de la Convention Collective " +
          nameConvention +
          ", IDCC " +
          codeConvention +
          ". La Convention Collective s'applique sous réserve d'un changement d'activité, ou tout autre situation entraînant sa mise en cause et les conditions particulières du présent contrat.\n\n",
        style: "p2",
      },
      {
        text: "Cette convention collective sera applicable pour toutes questions qui ne seraient pas abordées par le présent contrat.",
        style: "p2",
      },
      {
        text: "ARTICLE 2. DÉFINITION DE L'ENGAGEMENT",
        style: "h3",
      },
      {
        text: [
          isGenre() + nameSalary + " est ",
          civilite == "1" ? "engagée" : "engagé",
          " par la Société en qualité de " +
            fonctionSalary +
            ", Statut " +
            statusSalary +
            ", Position " +
            positionSalary +
            ", Échelon " +
            echelonSalary +
            ", Coefficient " +
            coefSalary +
            ", Niveau " +
            levelSalary +
            ".",
          "\nLe présent contrat est conclu pour une durée indéterminée et prend effet à compter du " +
            beginDate +
            ".\n\n",
          "La déclaration préalable à l'embauche de " +
            isGenre() +
            nameSalary +
            "  a été remise à l'URSSAF de " +
            cityUrssaf +
            ".\n",
          isGenre() +
            nameSalary +
            " est informé de son droit d'accès et de rectification des données collectées conformément à la loi n°78-17 du 6 janvier 1978.\n\n",
          isGenre() +
            nameSalary +
            " s'engage à effectuer les missions qui lui sont confiées par l'Employeur conformément à son profil professionnel et aux besoins de l'entreprise.\n\n",
          taskClient,
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 3. PÉRIODE D'ESSAI",
        style: "h3",
      },
      {
        text: [
          "Conformément aux dispositions légales et conventionnelles, la période d'essai de " +
            isGenre() +
            nameSalary +
            " est de " +
            essaiPeriode +
            ".\n\n",
          "Conformément aux dispositions conventionnelles, la période d'essai pourra être prolongée pour une durée maximale de " +
            maxPeriode +
            ".\n\n",
          "Au cours de la période d'essai, l'Employeur et " +
            isGenre() +
            nameSalary +
            " peuvent prendre l'initiative de rompre le contrat, sans indemnité, selon les délais de prévenance légaux et conventionnels en vigueur :\n\n",
        ],
        style: "p2",
      },
      {
        text: "- En cas de rupture du présent contrat à l'initiative de l'employeur :",
        style: "p2",
      },
      {
        ul: [
          {
            ul: [
              "Salarié présent depuis moins de 8 jours : 24h",
              "Salarié présent depuis 8 jours ou plus : 48h",
              "Salarié présent depuis moins d'un mois : 2 semaines",
              "Salarié présent depuis plus d'un mois : 1 mois",
            ],
          },
        ],
      },
      {
        text: "\n- En cas de rupture du présent contrat à l'initiative du salarié :",
        style: "p2",
      },
      {
        ul: [
          {
            ul: [
              "Salarié présent depuis moins de 8 jours : 24h",
              "Salarié présent depuis plus de 8 jours : 48h",
            ],
          },
        ],
      },
      {
        text: "ARTICLE 4. LIEU DE TRAVAIL",
        style: "h3",
        pageBreak: "before",
      },
      {
        text: [
          "Le lieu de travail de " +
            isGenre() +
            nameSalary +
            " est fixé au :\n",
          WorkPlace1 != ".........."
            ? WorkPlace1 + "\n" + WorkPlace2 + "\n" + WorkPlace3 + "\n\n"
            : "..........\n ..........\n .......... \n\n",
          "Toutefois et selon les nécessités du service, l'employeur pourra demander à " +
            isGenre() +
            nameSalary +
            " de réaliser des déplacements de manière temporaire dans les lieux nécessaires à l'accomplissement de sa profession. Ces déplacements ne pourront avoir pour conséquence le changement de résidence.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 5. DURÉE DU TRAVAIL",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " réalisera " +
            hourWeek +
            "h hebdomadaires effectives, correspondant à ",
          hourMonth + "h mensualisées.\n\n",
          isGenre() + nameSalary + " pourra être ",
          civilite == "1" ? "amenée" : "amené",
          " à effectuer des heures supplémentaires à la demande de la Direction qui seront rémunérées conformément aux dispositions légales et conventionnelles en vigueur.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 6. RÉMUNÉRATION",
        style: "h3",
      },
      {
        text: [
          "En contrepartie de l'accomplissement de ses missions, ",
          isGenre() +
            nameSalary +
            " percevra une rémunération mensuelle de " +
            moneyMonth +
            "€ pour " +
            hourMonth +
            "h.\n",
          hourMonth == "169"
            ? "La rémunération indiquée prend en compte les heures supplémentaires mensualisées.\n\n"
            : null,
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 7. MÉDECINE DU TRAVAIL",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " s'engage à se soumettre aux examens médicaux obligatoires réalisés par le service de médecine du travail, conformément à la législation en vigueur.\n" +
            "De plus, " +
            isGenre() +
            nameSalary +
            " bénéficie d'un suivi médical régulier assuré par le service de médecine du travail. Ce suivi médical vise à évaluer l'aptitude de ",
          civilite == "1" ? "cette dernière " : "ce dernier ",
          "à son poste de travail, à prévenir les risques professionnels, et à détecter toute altération de la santé en lien avec son activité professionnelle.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 8. CONGÉS PAYÉS",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " aura droit à des congés payés conformément aux dispositions légales et conventionnelles en vigueur.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 9. PROTECTION SOCIALE",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " bénéficie des régimes de retraite et de protection sociale complémentaires auxquels l'entreprise a adhéré, conformément aux dispositions légales et conventionnelles en vigueur.",
          isGenre() +
            nameSalary +
            " accepte de manière expresse le prélèvement de sa quote-part de cotisations prévus par les différents régimes ainsi que leurs modifications éventuelles.\n\n",
          "Les organismes auxquels l'entreprise adhère à ce jour sont :\n",
        ],

        style: "p2",
      },
      {
        ul: [
          "Retraite complémentaire : IRCOM - 20 avenue des Arawaks - 97205 FORT-DE-FRANCE CEDEX",
          orgaOthers ? orgaOthers : null,
          orgaOthers2 ? orgaOthers2 : null,
        ],
      },
      {
        text: "ARTICLE 10. ABSENCES",
        style: "h3",
        pageBreak: "before",
      },
      {
        text: [
          "Sauf cas de force majeure, ",
          isGenre() +
            nameSalary +
            " s'engage à informer l'Employeur de toute absence à son poste de travail dans les 24h suivant l'absence et à fournir un justificatif adéquat dans les 48h. \n\n",
          "En cas de prolongation d'un arrêt de travail initial, ",
          isGenre() +
            nameSalary +
            " s'engage à prévenir l'Employeur et lui transmettre dans les 48h le certificat médical.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 11. RUPTURE DU CONTRAT DE TRAVAIL",
        style: "h3",
      },
      {
        text: [
          "A l'issue de la période d'essai, le présent contrat se poursuivra pour une durée indéterminée. Toutefois l'Employeur ainsi que ",
          isGenre() +
            nameSalary +
            ", séparément ou d'un commun accord, peuvent mettre fin au présent contrat, conformément aux dispositions légales et conventionnelles applicables à l'entreprise.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 12. DISCRÉTION ET LOYAUTÉ",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " s'engage à observer toutes les instructions et consignes particulières de travail qui lui seront données et à respecter une stricte obligation de discrétion sur tout ce qui concerne l'activité de l'entreprise.\n\n",
          isGenre() +
            nameSalary +
            " s'engage à faire preuve de la plus grande loyauté envers l'Employeur pendant toute la durée du présent contrat et s'abstient de tout comportement, acte ou omission préjudiciable aux intérêts de l'Employeur durant toute la durée de la relation de travail et à l'issue de celle-ci.\n\n",
          isGenre() +
            nameSalary +
            " s'engage à ne pas exercer d'activité concurrente, directe ou indirecte pendant la durée du contrat.",
          civilite == "1" ? " Elle" : " Il",
          " s'interdit également de détourner ou de tenter de détourner les clients, partenaires commerciaux ou employés de l'Employeur.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 13. DONNÉES PERSONNELLES",
        style: "h3",
      },
      {
        text: [
          "Dans le cadre de l'exécution du présent contrat, l'Employeur est amené à collecter, traiter et conserver des données personnelles concernant " +
            isGenre() +
            nameSalary +
            ".\n\n",
          "L'Employeur s'engage à collecter et à traiter les données personnelles de " +
            isGenre() +
            nameSalary,
          " de manière licite, loyale et transparente, conformément aux lois et réglementations en vigueur en matière de protection des données.\n\n",
          "Les données personnelles de " +
            isGenre() +
            nameSalary +
            " seront traitées dans le seul but d'administrer le contrat, de respecter les obligations légales et réglementaires, et de gérer les relations professionnelles entre l'Employeur et ",
          isGenre() + nameSalary + ".\n\n",
          isGenre() +
            nameSalary +
            " bénéficie du droit d'accéder à ses données personnelles détenues par l'Employeur et de demander leur rectification en cas d'inexactitude.\n\n",
          "Les données personnelles de " +
            isGenre() +
            nameSalary +
            " seront conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales en matière de conservation.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 14. FRAIS PROFESSIONNELS",
        style: "h3",
        pageBreak: "before",
      },
      {
        text: [
          "L'employeur remboursera à " +
            isGenre() +
            nameSalary +
            " les frais professionnels ",
          civilite == "1" ? "qu'elle sera amenée " : "qu'il sera amené ",
          "à engager dans l'exercice de ses fonctions et sur demande de son supérieur hiérarchique. Le remboursement se fera sur présentation des justificatifs correspondants et en fonction des barèmes applicables dans la Société.",
        ],
        style: "p2",
      },
      {
        text: "ARTICLE 15. AUTRES DISPOSITIONS",
        style: "h3",
      },
      {
        text: [
          isGenre() +
            nameSalary +
            " bénéficiera tous les deux (2) ans d'un entretien professionnel avec l'Employeur conformément à l'article L. 6315-1 du Code du travail.\n\n",
          demarcheSejour(),
          "Enfin, le salarié déclare être libre de tout engagement et n'être lié(e) par aucune clause de non-concurrence à un autre employeur.\n\n\n\n\n\n",
          "Fait en double exemplaire,\n\n",
          "À " + lieuContrat + ", le " + dateContrat + "\n\n\n",
        ],
        style: "p2",
      },
      {
        columns: [
          {
            text: civilite == "1" ? "La Salariée," : "Le Salarié,",
            bold: true,
          },
          {
            text: "L'employeur,",
            bold: true,
          },
        ],
      },
      {
        columns: [
          {
            text: isGenre() + nameSalary,
          },
          {
            text: nameEmployeur + ", " + qualityEmployeur,
          },
        ],
      },
    ],
  };
  pdfMake.createPdf(dd).download();
}
