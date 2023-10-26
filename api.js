function getCompanyInfo() {
  const cvrNumber = document.getElementById('cvrNumber').value;

  if (!cvrNumber) {
      alert('Indtast venligst et CVR-nummer.');
      return;
  }

  // Foretag et API-opkald til cvrapi.dk
  fetch(`https://cvrapi.dk/api?search=${cvrNumber}&country=dk`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.name) {
          const companyInfo = document.getElementById('companyInfo');
          companyInfo.innerHTML = `
              <p>Virksomhedens navn: ${data.name}</p>
              <p>CVR: ${data.vat}</p>
              <p>Adresse: ${data.address}</p>
          `;
      } else {
          document.getElementById('companyInfo').textContent = 'Ingen resultater fundet.';
      }
  })
  .catch((error) => {
      console.error('Fejl ved hentning af data:', error);
  });
}