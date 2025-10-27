/* Functionality that lazy-loads non-critical CSS */
const decodeHTML = function(html){
  const textarea = document.createElement('textarea');
  textarea.textContent = html;
  const target_str = '<link href="/css/style-min.css" rel="stylesheet" fetchpriority="low">';
  const target_str_subpage1 = '<link href="/econ-grad-app-deadlines/assets/css/style.css?v=fe5431114d36ce8d753438e68af001e44e06a426" rel="stylesheet" fetchpriority="low">';
  const target_str_subpage2 = '<link href="/latex-cv-with-biblatex/assets/css/style.css?v=28a6b776cca873b06be9e5f70f127f287d722db8" rel="stylesheet" fetchpriority="low">';
  const escapedHTML = textarea.value.trim();
  const sanitisedHTML = escapedHTML.replace(/(javascript:|data:|vbscript:)/gi, '');
  if (sanitisedHTML === target_str || sanitisedHTML === target_str_subpage1 || sanitisedHTML === target_str_subpage2) {
    return sanitisedHTML;
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