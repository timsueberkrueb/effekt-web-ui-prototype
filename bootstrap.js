import morphdom from 'morphdom';

if (typeof window !== 'undefined') {
  window.morphdom = morphdom;
}

import './out/index.js';

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { window.$index && window.$index.main && window.$index.main(); });
  } else {
    window.$index && window.$index.main && window.$index.main();
  }
}
