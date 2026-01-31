async function loadContent(file) {
  const response = await fetch(file);
  const text = await response.text();

  const data = {};
  text.split('\n').forEach(line => {
    const index = line.indexOf(':');
    if (index > -1) {
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      data[key] = value.replace(/^"|"$|^>|>/g, '').trim();
    }
  });

  return data;
}
