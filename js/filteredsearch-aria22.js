/*
  Filtered live search function with ARIA22 accessibility.
  Search is case-insensitive, whitespace-sensitive.
  In filteredsearch-aria22-min.js, livesearch = t
*/
let cards = document.querySelectorAll('[aria-label="Callout box"]');
function liveSearch() {
  let searchQuery = document.getElementById('searchbox').value;
  let isEmpty
  /*
    Use innerText if all contents are visible
    Use textContent for including hidden elements
    Also counting number of results to display using role="status"
  */
  let counter = 0;
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('hide');
      counter += 1;
    }
    /* If input field is empty or has only whitespaces, display all results (i.e., no filter applied) */
    else if (searchQuery == '' || searchQuery == null || searchQuery.trim().length == 0) {
      cards[i].classList.remove('hide');
    }
    else {
      cards[i].classList.add('hide');
    }
    if (searchQuery != '' && searchQuery != null && searchQuery.trim().length != 0) {
      document.getElementById('resultsmsg').innerHTML = counter + ' result(s) found.';
    }
    /* Return default ARIA22 message. */
    else {
      document.getElementById('resultsmsg').innerHTML = 'Result&#0040;s&#0041; with matched keywords will be displayed in real-time.';
    }
  }
}
/* Adding a little delay for liveSearch() results to appear */
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');
/* Checking searchInput is not null before adding event listener */
if(searchInput) {
  searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
  });
}