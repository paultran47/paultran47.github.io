# Paul Le Tran dot com

[MIT licensed](https://github.com/paultran47/paultran47.github.io/blob/master/LICENCE.md).

<details>
  <summary>Table of contents</summary>
  <ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#notable-features">Notable features</a></li>
    <li><a href="#reporting-vulnerabilities">Reporting vulnerabilities</a></li>
    <li><a href="#built-with">Built with:</a></li>
    <li><a href="#google-lighthouse-scores">Google Lighthouse scores</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ul>
</details>

---

## Overview

This repository hosts all assets and source code used to build the website
showing the internet who I am.

In economics and academia, uniquely designed websites that are optimised and
follow best practices are rare. My website is an exception.

View it here: [Paul Le Tran dot com](https://paulletran.com/)

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

## Reporting vulnerabilities

If you discover a vulnerability/error/mistake in the production code of my
website, please [refer to the instructions found in SECURITY.md](https://github.com/paultran47/paultran47.github.io/blob/master/SECURITY.md)
for instructions on reporting these issues. I will then address the problem as
soon as possible.

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

## Notable features

Below are some features of my website that I feel are noteworthy:

* The website source code is entirely vanilla HTML5, CSS, and JS. This was
consciously done to make the source code (and all of its mistakes) completely
understandable to all programmers

* Entire website is written in semantic HTML
  * Usage of div and span tags are strictly for styling purposes and kept at a minimum
  * Semantic HTML tags also comply with ARIA accessibility requirements (e.g.,
  sections and articles having headings)
  * Every img tag has a relevant alt attribute for both screen reader
  compatibility and legal requirements

* HTML5 and CSS code of every website page pass the W3C validators with no errors
  * HTML5 code is checked using the [Nu HTML checker](https://validator.w3.org/nu/)
  * Usage of the modal pseudo-class in reset.css results in the [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
  to throw an error because the pseudo-class is currently in Selectors Level 4.
  However, because the pseudo-class works as intended in all modern browsers, I
  do not view this as an actual CSS code error
  * W3C "validation" links are displayed in the footer of every website page
    * Links allow for quick re-validation of every page
    * I am not including the links into my project sub-sites (e.g., [econ-grad-app-deadlines](https://github.com/paultran47/econ-grad-app-deadlines))
    The reason for this is because these sub-sites are generated using the
    default GitHub Pages theme of [Cayman](https://github.com/pages-themes/cayman)
    As a result, the W3C validation results wouldn't be reflecting my own design
    and code

* Entire website uses [JetBrains Mono](https://www.jetbrains.com/lp/mono/) as
its sole font. This choice is because the font is not only clean and legible (e.g.,
increased letter height), but has ligature support, italics support, wide
language support, and is both free and open source
  * The font is also my font-of-choice for all development interfaces

* Every website page is fully interactive within 2 seconds, including on 3G
mobile connections. This speed is achieved by:
  1. All CSS and JS are minified at the source code
  2. All HTML, CSS, and JS are [Zstandard compressed via Cloudflare](https://developers.cloudflare.com/speed/optimization/content/compression/)
  to browsers, with Brotli then Gzip compression as a fallback order
  3. remedy.css and reset.css are both inlined in the head tags
  4. Critical CSS for initial rendering of every page are inlined in the head
  tags
  5. All non-critical CSS are preloaded with low priority then lazy-loaded in
  such a way that works with any kind of strict Content Security Policy that
  disallows `unsafe-inline`
  6. Web fonts (i.e., JetBrains Mono) are preloaded with high priority, loaded
  with `font-display: swap;` and use locally hosted fonts before pulling from
  origin or cache. The website's fallback font, Courier New (Courier for MacOS),
  has been tuned and optimised to mimic JetBrains Mono. This makes the web font
  "nice to have" rather than a critical component to experiencing the website
  Thus, the font property and attribute prevents FOIT allows for JetBrains Mono
  to appear on first page view without being a render-blocking resource
      * I will retune my fallback fonts using the new `@font-face` attributes
      (e.g., `ascent-override`) when they have broad browser support
  7. All JS are preloaded with high priority then defer loaded
  8. All graphics are served in compressed .webp format (with compressed .jpg as
  a fallback)
      * All below-the-fold graphics are lazily loaded for minimal FOIT

* Entire website is designed to be responsive for almost all common display
resolutions, both desktop and mobile
  * Every page is verified as [WCAG 2.2 compliant](https://www.accessibilitychecker.org/)
  and displays the "compliance" links in the footer
    * I am not including the links into my project sub-sites (e.g., [econ-grad-app-deadlines](https://github.com/paultran47/econ-grad-app-deadlines))
    The reason for this is because these sub-sites are generated using the
    default GitHub Pages theme of [Cayman](https://github.com/pages-themes/cayman)
    As a result, the WCAG 2.2 compliance results wouldn't be reflecting my own design
    and code
  * This design covers displays as small as the JioPhone2 to as large as widescreen
  desktop monitors
  * Uncommon display resolutions such as the Galaxy Fold, Surface Duo, and Nest
  Hub are also supported

* Entire website is designed to be accessible for all input types
  * Every page, menu, and link can be navigated using a mouse, keyboard, or touch
  * Research and More pages feature live filtered search for publications with
  ARIA22 accessibility by explaining what occurs in the live search when
  keywords are typed and displaying number of results in real-time

* Every website page has a Google Lighthouse of 100/100 (99/100) on desktop (mobile).
  * I am not including the Google Lighthouse scores of my project sub-sites
  (e.g., [econ-grad-app-deadlines](https://github.com/paultran47/econ-grad-app-deadlines))
  This decision is because these sub-sites are generated using the default GitHub
  Pages theme of [Cayman](https://github.com/pages-themes/cayman). As a result, the
  scores wouldn't be reflecting my own design and code

* Favicon support for every platform (with different favicon embedded for night
mode support).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

## Built with

* [Vanilla HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [GitHub Pages](https://pages.github.com/) for hosting
* [Google Domains](https://domains.google/) for the awesome domain
* [CloudFlare](https://www.cloudflare.com/) for DNS management and security,
full SSL/TLS encryption mode, HTTPS enforcement, Argo smart routing, Zstandard
compression, tiered cache, Cache Reserve, the fancy green lock :lock:, and a
whole lot more
* [git](https://git-scm.com/) for source control

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

## Google Lighthouse Scores

* 100/100 (99/100) for every website page on desktop (mobile) for You can't get
anymore optimised than that (technically you can, but marginal utility is
negative at that point lol)
  * To view the full reports, please visit [this subdirectory](https://github.com/paultran47/paultran47.github.io/tree/master/lighthouse)
and paste the respective JSON file into the [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/)

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

## Acknowledgements

Below are the awesome resources used to make my website as optimised as possible:

* [ymatuhin's online interactive demo of Autoprefixer CSS](https://github.com/autoprefixer/autoprefixer.github.io)
* [Mario Ranftl's google-webfonts-helper](https://github.com/majodev/google-webfonts-helper)
* [Monica Dinculescu's font-style-matcher](https://github.com/notwaldorf/font-style-matcher)
  * Extra credit to [Michael Duve's Auto Font Matcher](https://github.com/dazlious/font-matcher)
  that optimises `letter-spacing` and `word-spacing` attributes algorithmically.
* [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
* [Jen Simmons' remedy.css](https://github.com/jensimmons/cssremedy)
* [Elad Shechter's reset.css](https://elad2412.github.io/the-new-css-reset/)
* [James Ross' method to preload and lazy-load CSS without any inline scripts](https://jross.me/asynchronous-and-progressive-css-loading/)
* [Google Closure Compiler](https://github.com/google/closure-compiler) for
minification of JS in strict mode
  * Extra credit to [Dimitrii Tikhomirov's web-based UI and REST API](https://github.com/treblereel/jscompressor)
  for Closure Compiler
* [James Hill's Minimal Google Analytics 4 Snippet with localstorage support](https://github.com/jahilldev/minimal-analytics)
(2kb v. 179kb+ when compiled with Google Closure Compiler)
* [Real Favicon Generator](https://github.com/RealFaviconGenerator)
* [jonasjacek's comprehensive robots.txt](https://www.ditig.com/robots-txt-template)
* [Hilman Ramadhan's live filtered search](https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/)
* [Harry Roberts's ct.css](https://csswizardry.com/ct/) for optimising head tag elements
* [Jonas Ohlsson Aden's critical path CSS generator](https://github.com/pocketjoso/penthouse)
* [Unminify](https://unminify.com/) and its wonderful CSS prettification for
quick updates of critical inline CSS
* [Kevin Powell's tutorial on CSS variables](https://www.youtube.com/watch?v=PHO6TBq_auI&list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi)
* [Google Squoosh](https://github.com/GoogleChromeLabs/squoosh) for image
compression and conversion using the best-in-class codecs

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---
