document.addEventListener('DOMContentLoaded', () => {
    const niveauSelect = document.getElementById('niveau');
    const classeSelect = document.getElementById('classe');
  
    // Définition des options par niveau
    const optionsParNiveau = {
      primaire: [
        { value: 'cp1', text: 'CP1' },
        { value: 'cp2', text: 'CP2' },
        { value: 'ce1', text: 'CE1' },
        { value: 'ce2', text: 'CE2' },
        { value: 'cm1', text: 'CM1' },
        { value: 'cm2', text: 'CM2' }
      ],
      secondaire: [
        { value: '6eme', text: '6ème' },
        { value: '5eme', text: '5ème' },
        { value: '4eme', text: '4ème' },
        { value: '3eme', text: '3ème' },
        { value: '2ndeA', text: '2ndeA' },
        { value: '2ndeC', text: '2ndeC' },
        { value: '1ereA', text: '1èreA' },
        { value: '1ereC', text: '1èreC' },
        { value: '1ereD', text: '1èreD' },
        { value: 'TleA', text: 'TleA' },
        { value: 'TleC', text: 'TleC' },
        { value: 'TleD', text: 'TleD' }
      ],
      superieur: [
        { value: 'mpci', text: 'MPCI' },
        { value: 'svt', text: 'SVT' },
        { value: 'seg', text: 'SEG' },
        { value: 'geographie', text: 'Géographie' },
        { value: 'lettres_modernes', text: 'Lettres modernes' },
        { value: 'psychologie', text: 'Psychologie' },
        { value: 'histoire_archeologie', text: 'Histoire et Archéologie' },
        { value: 'philosophie', text: 'Philosophie' },
        { value: 'sid', text: 'Science de l\'information documentaire(SID)' },
        { value: 'sd', text: 'Secrétariat / Assistant de Direction (SD)' },
        { value: 'assistants_administratifs', text: 'Assistants Administratifs' },
        { value: 'finances_comptabilites', text: 'Finances Comptabilités' },
        { value: 'marketing_gestion', text: 'Marketing et Gestion' },
        { value: 'management_entreprises', text: 'Management des entreprises Touristiques et Gestion des entreprises hôtelières' },
        { value: 'gc', text: 'Gestion Commerciale (GC)' },
        { value: 'genie_civil_batiment', text: 'Génie Civil Bâtiment' },
        { value: 'genie_electrique', text: 'Génie Electrique' },
      ]
    };
  
    // Fonction pour mettre à jour les options de la classe
    function mettreAJourOptionsClasse() {
      const niveauChoisi = niveauSelect.value;
      classeSelect.innerHTML = ''; // Supprime toutes les options existantes
  
      // Vérifie si le niveau choisi a des options associées
      if (optionsParNiveau[niveauChoisi]) {
        optionsParNiveau[niveauChoisi].forEach(option => {
          const opt = document.createElement('option');
          opt.value = option.value;
          opt.textContent = option.text;
          classeSelect.appendChild(opt);
        });
      }
    }
  
    // Écouteur d'événement pour détecter les changements sur le niveau
    niveauSelect.addEventListener('change', mettreAJourOptionsClasse);
  });
  