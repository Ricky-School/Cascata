const datiRegioni = ["Emilia-Romagna", "Calabria", "Lombardia"];
    const datiProvince = {
      "Emilia-Romagna": ["Parma", "Reggio", "Modena"],
      "Calabria": ["Potenza", "Cosenza", "Catanzaro"],
      "Lombardia": ["Milano", "Como", "Bergamo"]
    };
    const datiComuni = {
      "Parma": ["Langhirabo", "Medesano", "Collecchio"],
      "Milano": ["Rozzano", "Quarto Oggiaro", "Rho"],
      "Potenza": ["Rione Lucania", "Rione Francioso", "Rione Risorgimento"],
    };

    function caricaProvince() {
      const regioneSelect = document.getElementById("regione");
      const provinciaSelect = document.getElementById("provincia");
      const comuneSelect = document.getElementById("comune");

      const regioneSelezionata = regioneSelect.value;
      const province = datiProvince[regioneSelezionata];

      provinciaSelect.innerHTML = "<option value=''>Seleziona provincia</option>";

      province.forEach((provincia) => {
        const option = document.createElement("option");
        option.value = provincia;
        option.text = provincia;
        provinciaSelect.add(option);
      });

      comuneSelect.innerHTML = "<option value=''>Seleziona comune</option>";
    }

    function caricaComuni() {
      const provinciaSelect = document.getElementById("provincia");
      const comuneSelect = document.getElementById("comune");

      const provinciaSelezionata = provinciaSelect.value;
      const comuni = datiComuni[provinciaSelezionata];

      comuneSelect.innerHTML = "<option value=''>Seleziona comune</option>";

      comuni.forEach((comune) => {
        const option = document.createElement("option");
        option.value = comune;
        option.text = comune;
        comuneSelect.add(option);
      });
    }

    window.onload = function () {
      const regioneSelect = document.getElementById("regione");

      datiRegioni.forEach((regione) => {
        const option = document.createElement("option");
        option.value = regione;
        option.text = regione;
        regioneSelect.add(option);
      });
    };