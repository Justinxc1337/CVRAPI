/* Virksomheds CVR test - 61056416 */

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
              <p>Postnummer: ${data.zipcode}</p>
              <p>By: ${data.city}</p>
              <p>Telefon: ${data.phone}</p>
              <p>Fax: ${data.fax}</p>
              <p>Opstart: ${data.startdate}</p>
              <p>Ansatte: ${data.employees}</p>
              <p>Branchekode: ${data.industrycode}</p>
          `;
      } else {
          document.getElementById('companyInfo').textContent = 'Ingen resultater fundet.';
      }
  })
  .catch((error) => {
      console.error('Fejl ved hentning af data:', error);
  });
}