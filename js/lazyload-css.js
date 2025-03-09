/* Functionality that lazy-loads non-critical CSS */
const textarea = document.createElement('textarea');
function escapeHTML(html) {
  textarea.textContent = html;
  const target_str = '&lt;link href="/css/style-min.css" rel="stylesheet" fetchpriority="low"&gt;';
  const target_str_subsite1 = '&lt;link href="/econ-grad-app-deadlines/assets/css/style.css?v=43689b4a5deb69920fb8ecdc03d8039b7129af38" rel="stylesheet" fetchpriority="low"&gt;';
  const target_str_subsite2 = '&lt;link href="/latex-cv-with-biblatex/assets/css/style.css?v=a75545809cf24ebebb02839bc766fa35d60d9fa0" rel="stylesheet" fetchpriority="low"&gt;';
  const safe_str = textarea.innerHTML.trim();
  if (safe_str === target_str || safe_str === target_str_subsite1 || safe_str === target_str_subsite2) {
    return safe_str;
  }
  else {
    return false;
  }
}
function unescapeHTML(html) {
  textarea.innerHTML = html;
  return textarea.textContent;
}
const getItemsFromContainerText = function(container, selector){
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(unescapeHTML(escapeHTML(container.textContent)), 'text/html');
  return parsedHtml.querySelectorAll(selector);
};
function loadCss(){
  const cssContainers = document.querySelectorAll('noscript[data-css-lazyload]');
  if(!cssContainers){
    return;
  }
  const styleSheets = document.createDocumentFragment();
  for(const cssContainer of cssContainers){
    const sheets = getItemsFromContainerText(cssContainer, 'link[rel="stylesheet"]');
    styleSheets.append(...sheets);
    cssContainer.remove();
  }
  document.head.append(styleSheets);
}
loadCss();