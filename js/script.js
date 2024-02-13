const { jsPDF } = window.jspdf;

function generatePDF() {
  let societeValue = "..........";
  let kbisValue = "..........";
  let siretValue = "..........";
  let postalSocial1 = "..........";
  let postalSocial2 = "..........";
  let postalSocial3 = "..........";
  let nameEmployeur = "..........";
  let qualityEmployeur = "..........";

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

  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setLineWidth(0.5);
  doc.text("CONTRAT DE TRAVAIL A DUREE", 105, 40, "center");
  let textWidth = doc.getTextWidth("CONTRAT DE TRAVAIL A DUREE");
  doc.line(105 - textWidth / 2 - 1, 41, 105 + textWidth / 2 + 1.5, 41);
  doc.text("INDETERMINEE", 105, 48, "center");
  textWidth = doc.getTextWidth("INDETERMINEE");
  doc.line(105 - textWidth / 2, 49, 105 + textWidth / 2, 49);

  doc.setFontSize(13);
  doc.text("Entre les soussignés :", 25, 70);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("La " + societeValue, 25, 80);
  doc.text(
    "Immatriculation au Registre des Commerces et des Sociétés avec le N° :",
    25,
    85
  );
  doc.text(kbisValue, 25, 90);

  doc.text("N° SIRET : " + siretValue, 25, 95);

  doc.text("Adresse du siège social : ", 25, 105);

  if (document.getElementById("postalSocial1").value) {
    doc.text(postalSocial1, 25, 110);
    if (document.getElementById("postalSocial2").value) {
      doc.text(postalSocial2, 25, 115);
    }
    if (document.getElementById("postalSocial3").value) {
      doc.text(postalSocial3, 25, 120);
    }
  } else {
    doc.text(postalSocial1, 25, 110);
    doc.text(postalSocial2, 25, 115);
    doc.text(postalSocial3, 25, 120);
  }

  doc.text(
    "Représentée par M./MME " +
      nameEmployeur +
      " agissant en qualité de " +
      qualityEmployeur,
    25,
    130
  );

  doc.text("ci-après l' « Employeur »,", 25, 140);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Et : ", 25, 155);

  doc.setFontSize(11);
  doc.text("M. / MME ..............., né(e)  ...............", 25, 170);
  doc.setFont("helvetica", "normal");
  doc.text("Né(e) le ............... à ...............", 25, 175);
  doc.text("Nationalité : ...............", 25, 180);
  doc.text("Demeurant :", 25, 190);
  doc.text("...............", 25, 195);
  doc.text("...............", 25, 200);
  doc.text("...............", 25, 205);
  doc.text("N° de sécurité sociale : ...............", 25, 215);
  doc.text(
    "( Titre de séjour valant autorisation de travail : inclure le paragraphe suivant le cas échéant",
    25,
    225
  );
  doc.text("« Nature du titre : ...............", 25, 230);
  doc.text("N° de titre : : ...............", 25, 235);
  doc.text(
    "Date de validité du titre : du ............... au ............... )",
    25,
    240
  );
  doc.text("Ci-après “le/la Salarié(e)”", 25, 250);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("IL EST CONVENU ET ARRETE CE QUI SUIT :", 25, 270);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Page 1 sur 5", 105, 280, "center");

  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.text(
    "Paraphe en bas de chaque page et signature sur la dernière page du contrat",
    105,
    285,
    "center"
  );

  doc.save("a4.pdf");
}
