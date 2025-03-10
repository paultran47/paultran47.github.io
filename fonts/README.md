# Fonts

[GitHub repo](https://github.com/paultran47/paultran47.github.io).

[MIT licensed](https://github.com/paultran47/paultran47.github.io/blob/master/LICENCE.md).

---

## Overview

Fonts used are [JetBrains Mono](https://www.jetbrains.com/lp/mono/) in 400, 700;
normal.

The .woff2, .woff, .ttf, and .eot web font files are downloaded using
[Mario Ranftl's google-webfonts-helper](https://github.com/majodev/google-webfonts-helper).
The .ttf web font files are then converted to .svg web font files using
[FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator).

All of the files are to ensure most browsers render webfonts (with system font
"Courier New" and "Courier" as OS fallback). The fallback fonts are
optimised for minimal FOIT thanks to [Monica Dinculescu's font-style-matcher](https://github.com/notwaldorf/font-style-matcher)
and [Michael Duve's Auto Font Matcher](https://github.com/dazlious/font-matcher),
that optimises `letter-spacing` and `word-spacing` attributes algorithmically.

Supported browsers include:

* Chrome 4+;
* Firefox 3.5+;
* Opera 23+;
* IE5+;
* Safari 3.1+;
* Android Browser 2.2+;
* iOS (Legacy+).

---
