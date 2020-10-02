(() => {
  document.querySelectorAll('.js-services-form').forEach(el => {
    el.addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );

      e.currentTarget.reset();
      alert(
        'Ваша заявка принята. Мы с вами свяжемся в ближайшее время для уточнения деталей.',
      );
    });
  });
})();
