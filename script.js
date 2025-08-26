async function loadSite() {
  const res = await fetch('content/site.json');
  const data = await res.json();
  const words = data.hero.titleWords;
  let i = 0;
  const titleEl = document.getElementById('hero-title');
  function rotate() {
    titleEl.textContent = words[i];
    i = (i + 1) % words.length;
  }
  rotate();
  setInterval(rotate, 2000);
  document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
  document.getElementById('primary-cta').textContent = data.hero.primaryCta;
  document.getElementById('secondary-cta').textContent = data.hero.secondaryCta;
  const grid = document.getElementById('services-grid');
  data.services.forEach((s) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${s.title}</h3><p>${s.description}</p>`;
    grid.appendChild(div);
  });
  document.getElementById('contact-email').textContent = data.contact.email;
  document.getElementById('contact-phone').textContent = data.contact.phone;
  document.getElementById('contact-address').textContent = data.contact.address;
  document.getElementById('contact-description').textContent = data.contact.description;
}
loadSite();

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensaje enviado (demo)');
  form.reset();
});
