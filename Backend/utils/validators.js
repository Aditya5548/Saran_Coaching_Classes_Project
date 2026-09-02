export function clean(value = '') {
  return String(value).trim();
}

export function isValidPhone(value) {
  return /^[0-9+()\-\s]{7,20}$/.test(clean(value));
}

export function isValidEmail(value) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(value));
}
