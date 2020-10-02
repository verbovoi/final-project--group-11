document.querySelector('.ss').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^\d]/g, '');
});
document.querySelector('.ss-modal').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^\d]/g, '');
});
