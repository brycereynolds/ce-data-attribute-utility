export function isDebugEnabled(){
  return document.body.classList.contains('nflx-debug-mode');
}

export function injectDebugAttributes(label, value){
  return {
    'data-nflx-key': value,
    'data-nflx-key-label': label,
  }
}
