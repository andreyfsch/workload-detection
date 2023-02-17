const categorize = import('./categorize_controller').default;
const finalize = import('./finalize_controller').default;
const picture = import('./picture_controller').default;
const next = import('./next_controller').default;
const prev = import('./prev_controller').default;

console.log('teste');

export default {
  categorize: categorize,
  finalize: finalize,
  picture: picture,
  next: next,
  prev: prev
};