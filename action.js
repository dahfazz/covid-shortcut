const setValue = (id, value) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.value = value;
}

setValue('field-firstname', 'John')
setValue('field-lastname', 'Doe')
setValue('field-birthday', '01/12/1970')
setValue('field-lieunaissance', 'Lille')
setValue('field-address', '16, rue du Confinement')
setValue('field-town', 'Paris')
setValue('field-zipcode', '75000')

// Si vous voulez automatiser la case à cocher pour le motif de sortie
// Choisir parmi ces lignes
// document.getElementById('checkbox-travail').checked = true;
// document.getElementById('checkbox-courses').checked = true;
// document.getElementById('checkbox-sante').checked = true;
// document.getElementById('checkbox-travail').checked = true;
// document.getElementById('checkbox-famille').checked = true;
// document.getElementById('checkbox-sport').checked = true;
// document.getElementById('checkbox-judiciaire').checked = true;
// document.getElementById('checkbox-missions').checked = true;


// Pour automatiser la génération du PDF
document.getElementById('generate-btn').click()

// NE PAS OUBLIER DE TERMINER LE SCRIPT PAR CETTE LIGNE
completion()
