/* Functionality that lazy-loads non-critical CSS */
const decodeHTML = function(html){
  const textarea = document.createElement('textarea');
  textarea.textContent = html;
  const target_str = '<link href="/css/style-min.css" rel="stylesheet" fetchpriority="low">';
  const target_str_subsite1 = '<link href="/econ-grad-app-deadlines/assets/css/style.css?v=43689b4a5deb69920fb8ecdc03d8039b7129af38" rel="stylesheet" fetchpriority="low">';
  const target_str_subsite2 = '<link href="/latex-cv-with-biblatex/assets/css/style.css?v=d68d18529c2205a0303115c6b8529323f961fd40" rel="stylesheet" fetchpriority="low">';
  const escapedHTML = textarea.textContent.trim();
  if (escapedHTML === target_str || escapedHTML === target_str_subsite1 || escapedHTML === target_str_subsite2) {
    return escapedHTML;
  }
  else {
    return false;
  }
};
const getItemsFromContainerText = function(container, selector){
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(decodeHTML(container.textContent), 'text/html');
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