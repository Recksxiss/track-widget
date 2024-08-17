async function trackPackage(trackingNumber) {
  const response = await fetch(
    `https://track-widget-3m38jf4tt-ricks-projects-24b79214.vercel.app`
  );
  const data = await response.json();

  if (data.error) {
    return `Erro: ${data.error}`;
  } else {
    return formatTrackingResult(data);
  }
}

function formatTrackingResult(data) {
  let result = `<h3>Status: ${data.status}</h3>`;
  result += `<p><strong>Última atualização:</strong> ${data.lastUpdate}</p>`;
  result += `<p><strong>Local:</strong> ${data.location}</p>`;
  return result;
}
