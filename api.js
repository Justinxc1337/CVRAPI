

/* 61056416 */

async function virk(int) {
    const requestURL = `https://cvrapi.dk/api?search=${int}&country=dk`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const virk = await response.json();
}

virksomhedsdata(virk, 20);