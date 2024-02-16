@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&family=Rye&display=swap?family=Creepster&family=Itim&family=PT+Serif&display=swap');

/*
! tailwindcss v3.4.0 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container{
  width: 100%;
}

@media (min-width: 640px){
  .container{
    max-width: 640px;
  }
}

@media (min-width: 768px){
  .container{
    max-width: 768px;
  }
}

@media (min-width: 1024px){
  .container{
    max-width: 1024px;
  }
}

@media (min-width: 1280px){
  .container{
    max-width: 1280px;
  }
}

@media (min-width: 1536px){
  .container{
    max-width: 1536px;
  }
}

.fixed{
  position: fixed;
}

.bottom-0{
  bottom: 0px;
}

.bottom-2{
  bottom: 0.5rem;
}

.right-5{
  right: 1.25rem;
}

.m-4{
  margin: 1rem;
}

.m-8{
  margin: 2rem;
}

.flex{
  display: flex;
}

.h-\[100vh\]{
  height: 100vh;
}

.w-\[282px\]{
  width: 282px;
}

.translate-y-14{
  --tw-translate-y: 3.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-6{
  --tw-rotate: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-\[57deg\]{
  --tw-rotate: 57deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.items-center{
  align-items: center;
}

.justify-center{
  justify-content: center;
}

.scroll-smooth{
  scroll-behavior: smooth;
}

.whitespace-nowrap{
  white-space: nowrap;
}

.border-2{
  border-width: 2px;
}

.border-b-2{
  border-bottom-width: 2px;
}

.border-t-2{
  border-top-width: 2px;
}

.border-\[\#d72d32\]{
  --tw-border-opacity: 1;
  border-color: rgb(215 45 50 / var(--tw-border-opacity));
}

.border-orange-500{
  --tw-border-opacity: 1;
  border-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-orange-950{
  --tw-border-opacity: 1;
  border-color: rgb(67 20 7 / var(--tw-border-opacity));
}

.bg-\[\#eba937\]{
  --tw-bg-opacity: 1;
  background-color: rgb(235 169 55 / var(--tw-bg-opacity));
}

.bg-blue-700{
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-red-700{
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}

.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-\[8px\]{
  font-size: 8px;
}

.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-green-400{
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}

.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:root {
  --varDARKBEAKTOP:     rgba(120,80,1,1);
  /* #785001  */
  --D-MEDBEAKTOP:      rgba(182,121,2,1);
  /* #b67902 */
  --D-LIGHTBEAKTOP:    rgba(252,168,2,1);
  /* #fca802 */
  --D-DARKDUCKHEAD:     rgba(30,59,40,1);
  /* #1e3b28 */
  --D-MEDDUCKHEAD:      rgba(40,79,53,1);
  /* #284f35 */
  --D-LIGHTDUCKHEAD:    rgba(82,143,133,1);
  /* #528f85 */
  --D-DARKBLUEFEATHER:  rgba(36,85,141,1);
  /* #24558d  */
  --D-MEDBLUEFEATHER:   rgb(42, 97, 161);
  /* #2a61a1  */
  --D-LIGHTBLUEFEATHER: rgba(65,154,255,1);
  /* #419aff */
  --D-DARKDUCKCHEEKS:   rgba(54,46,71,1);
  /*  #362e47 */
  --D-MEDDUCKCHEEKS:    rgba(107,91,141,1);
  /* #6b5b8d */
  --D-LIGHTDUCKCHEEKS:  rgba(160,136,210,1);
  /* #a088d2*/
  --D-DARKNECK:        rgba(65,42,50,1);
  /* #412a32 */
  --D-MEDNECK:        rgba(152, 100, 141,1);
  /* #98648d */
  --D-LIGHTNECK:      rgba(198,129,183,1);
  /* #c68199 */
  --varDARKWING:        rgba(60,48,46,1);
  /*  #3c302e */
  --D-MEDWING:         rgba(128,102,97,1);
  /* #806661 */
  --D-1LIGHTWING:       rgba(207,166,157,1);
  /* #cfa69d */
  --D-DARKBEAK:        rgba(112,24,26,1);
  /* #70181a */
  --D-MEDBEAK:         rgba(150,32,35,1);
  /*  #962023*/
  --D-LIGHTBEAK:       rgba(215,45,50,1);
  /* #d72d32 */
  --D-DARKSPACE:      rgba(8, 18, 28,1);
  /* #08121c */
  --D-MEDSPACE:       rgba(27,56,84,1);
  /*  #1b3854 */
  --D-LIGHTSPACE:     rgba(38, 77, 115,1);
  /*  #264d73 */
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: border;
  background-image: linear-gradient( rgba(55, 124, 177, 1)15% ,
    rgba(65, 79, 91, 1)60%-80%,rgba(151, 145, 144, 1)100%);
  min-width: 250px;
  max-width:100%;
  max-height:100% ;
  outline: 4px double var(--f9LIGHTDUCKCHEEKS);
  margin: 2px;
  padding: 20px;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 100%;
  height: 100vh;
  display : flex;
  justify-content:center;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
  margin: 0 auto;
  padding: 10px;
}

.topParagraphWrapper :hover{
  color:#895b05;
  text-shadow: 2px 2px 4px wheat;
}

.topParagraphWrapper {
  text-align: center;
  padding: .2rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
}

@media screen and (max-width:500px) {
  .topParagraphWrapper {
    letter-spacing: 3px;
    position:fixed;
    display: flex;
    text-align: center;
    left: 50%;
    margin-top:40px;
    padding: 2px;
    transform: translatex(-50%);
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    text-shadow: white .5px .5px;
    font-weight: 400;
    text-decoration: none;
    color: blue;
  }
}

.topParagraph {
  position:relative;
  font-family: 'PT Serif', serif;
  color:rgba(215,45,50,1);
  text-shadow: #151515 .75px .75px;
  margin: auto;
}

.outerDemoWrapper{
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 2px;
}

@media screen and (max-width:  500px) {
  .outerDemoWrapper {
    letter-spacing: 3px;
    position:fixed;
    display: flex;
    left: 50%;
    transform: translate(-50%);
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    text-shadow: #151515 .5px .5px;
    font-weight: 400;
    text-decoration: none;
    margin-top:5rem;
  }
}

.demoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  position:relative;
  width: -moz-fit-content;
  width: fit-content;
  text-align: center;
  font-weight: 500;
  text-decoration:none;
  text-shadow: #151515 .5px .5px;
}

#demo {
  position: relative;
  padding: 2px;
  text-shadow: #151515 .5px .5px;
  white-space: nowrap;
  letter-spacing: 0px;
  color: #d72d32;
}

.cube {
  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transform: rotateX(-15deg);
  animation: animate 20s linear infinite;
  z-index: -1;
}

.item {
  width: 100px;
  height: 100px;
}

@keyframes animate
{
  0%
    {
    transform:rotateX(-15deg) rotateY(360deg);
  }

  100%
    {
    transform:rotateX(-15deg) rotateY(0deg);
  }
}

.outerCubeDiv {
  position: relative;
  justify-content: center;
  align-items: center;
}

.cube div {
  position: absolute;
  top: 0%;
  left: 0%;
  min-width: 100%;
  min-height: 100%;
  transform-style: preserve-3d;
}

.cube div span {
  position: absolute;
  top: 0%;
  left: 0%;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(#151515,#962023);
  transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background: #222;
  transform: rotateX(90deg) translateZ(75px);
}

.top::before  {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background:rgba(214, 46, 52, 1);
  transform: translateZ(-220px);
  filter: blur(20px);
  box-shadow: 0 0 120px rgba(114, 24, 26, 4),
    0 0 200px rgba(151, 32, 36,7),
    0 0 300px rgba(151, 32, 36,7),
    0 0 400px rgba(151, 32, 36,7),
    0 0 500px rgba(214, 46, 52, 1);
}

.post {
  width:400px;
  font-family: creepster;
}

.post-image {
  display:block;
  width:100%;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.post-ratings-container {
  display: flex;
  justify-content: end;
  padding: 12px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.post-rating {
  display: flex;
  align-items: center;
  cursor: default;
}

.post-rating:not(:last-child) {
  margin-right: 12px;
}

.post-rating-button {
  margin-right: 6px;
  cursor:pointer;
}

.post-rating-selected > .post-rating-button, 
.post-rating-selected > .post-rating-count {
  color: #009578;
}

.post-rating:not(.post-rating-selected) > .post-rating-button:hover {
  color: #000;
}

/* xxxs */

@media (min-width: 300px) {
  .container {
    max-width: 300px;
  }
}

@media (min-width: 350px) {
  .container {
    max-width: 350px;
  }
}

/* xxs */

@media (min-width: 400px) {
  .container {
    max-width: 400px;
  }
}

/* xs */

@media (min-width: 500px) {
  .container {
    max-width: 500px;
  }
}

/* s */

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

/* md */

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl */

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl */

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

/* media query for bigger cube */

@media (min-width: 900px) and (min-height: 500px) {
  .top::before  {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background:rgba(214, 46, 52, 1);
    transform: translateZ(-400px);
    filter: blur(40px);
    box-shadow: 0 0 240px rgba(114, 24, 26, 4),
      0 0 400px  rgba(151, 32, 36, 7),
      0 0 600px rgba(151, 32, 36, 7),
      0 0 800px rgba(151, 32, 36, 7),
      0 0 900px rgba(214, 46, 52, 1);
  }

  .cube {
    width: 300px;
    height: 300px;
    animation: animate 40s linear infinite;
  }

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    background: #222;
    transform: rotateX(90deg) translateZ(150px);
  }

  .cube div span {
    position: absolute;
    top: 0%;
    left: 0%;
    min-width: 100%;
    min-height: 100%;
    background: linear-gradient(#151515,#d72d32);
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  }

  /* media query for smaller cube */
}

@media (min-width: 640px){
  .sm\:text-3xl{
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .sm\:text-\[10px\]{
    font-size: 10px;
  }

  .sm\:text-lg{
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 768px){
  .md\:text-2xl{
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\:text-4xl{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

@media (min-width: 1024px){
  .lg\:text-4xl{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .lg\:text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}