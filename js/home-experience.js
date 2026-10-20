/* Ménage Bo-Bien signature interaction: space choice follows through to the estimate form. */
(() => {
  const picker = document.querySelector('.home-space-picker');
  if (!picker) return;

  const choices = Array.from(picker.querySelectorAll('.home-space-choice'));
  const photo = document.getElementById('heroSpaceImage');
  const status = document.getElementById('spacePickerStatus');
  const serviceField = document.getElementById('service');
  if (!photo || !status) return;

  const copy = {
    residential: { fr: 'Un service pensé pour votre quotidien.', en: 'Care shaped around the way you live.' },
    commercial: { fr: 'Un espace de travail prêt à accueillir votre équipe.', en: 'A workspace ready for your team.' },
    'window-cleaning': { fr: 'Plus de lumière, jusque dans les détails.', en: 'More light, right down to the details.' }
  };

  function language() {
    return document.documentElement.lang === 'en' ? 'en' : 'fr';
  }

  function update(choice) {
    const lang = language();
    choices.forEach((button) => {
      const selected = button === choice;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    photo.classList.add('is-changing');
    window.setTimeout(() => {
      photo.src = choice.dataset.image;
      photo.alt = choice.getAttribute(lang === 'en' ? 'data-alt-en' : 'data-alt-fr') || '';
      photo.classList.remove('is-changing');
    }, 110);

    if (serviceField) serviceField.value = choice.dataset.space;
    status.textContent = copy[choice.dataset.space]?.[lang] || '';
  }

  choices.forEach((button) => button.addEventListener('click', () => update(button)));

  const languageObserver = new MutationObserver(() => {
    const selected = choices.find((button) => button.getAttribute('aria-pressed') === 'true');
    if (selected) {
      photo.alt = selected.getAttribute(language() === 'en' ? 'data-alt-en' : 'data-alt-fr') || '';
      status.textContent = copy[selected.dataset.space]?.[language()] || '';
    }
  });
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
