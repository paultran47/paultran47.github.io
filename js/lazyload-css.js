/* Functionality that lazy-loads non-critical CSS */
const decodeHTML = function(html){
  const textarea = document.createElement('textarea');
  textarea.textContent = html;
  const target_str = '<link href="/css/style-min.css" rel="stylesheet" fetchpriority="low">';
  const target_str_subsite1 = '<link href="/assets/css/style.css?v=2b2adc92bab78443eef6b43efb7294fdb8dc9e1f" rel="stylesheet" fetchpriority="low">';
  const target_str_subsite2 = '<link href="/assets/css/style.css?v=f8db67769659eb759bd7c29d124aca65f1248f60" rel="stylesheet" fetchpriority="low">';
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