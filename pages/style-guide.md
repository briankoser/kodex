---
layout: page
title: Style Guide
description: kodex style guide
permalink: /style-guide/index.html

cssFiles:
  - components/demo
  - components/dialog
  - components/hr
  - components/youtube

exampleString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>!@@#$%^&*()[]{}<>;:'\",./?"

contentCard:
    author: Melissa
    date: 2021-11-05
    url: example

articleCard:
    date: 2021-11-05
    url: example
    title: The Article Title
    data:
        authors: 
            - Penny
            - Susanna
        excerpt: The first line of the article.

noteCard:
    author: Lydia
    cardType: note
    contentUrl: 
        name: Harding’s Pompous Phrases
        url: https://presidentialhistory.com/2011/08/hardings-pompous-phrases.html
    date: 2021-10-05
    url: example
---

<div class="stack">

## Fonts

<div class="h2 stack">
<div style="font-family:'ConcourseBlack';">
{% demo "Concourse Black - site header" %}
    {{ exampleString | safe }}
{% enddemo %}
</div>

<div class="stack" style="font-family:var(--font-heading);">
{% demo "Concourse Light - large headings" %}
    {{ exampleString | safe }}
{% enddemo %}

{% demo "Concourse Light (italic) - large headings" %}
    <em class="h2" style="font-family:'ConcourseLight'; font-style:italic;">{{ exampleString | safe }}</em>
{% enddemo %}
</div>

<div class="stack" style="font-family:var(--font-regular);">
{% demo "Concourse - body text" %}
    {{ exampleString | safe }}
{% enddemo %}

{% demo "Concourse (bold) - body text" %}
    <strong>{{ exampleString | safe }}</strong>
{% enddemo %}

{% demo "Concourse (italic) - body text" %}
    <em>{{ exampleString | safe }}</em>
{% enddemo %}

{% demo "Concourse (bold italic) - body text" %}
    <strong><em>{{ exampleString | safe }}</em></strong>
{% enddemo %}
</div>

<div style="font-family:var(--font-mono);">
{% demo "Fira Mono - code" %}
    {{ exampleString | safe }}
{% enddemo %}
</div>

</div>



## Colors
{% demo "Author Colors" %}
    {% swatch {"brightness":"light", "color":"brian", "text":"Brian Blue"} %}
    {% swatch {"brightness":"dark", "color":"brian", "text":"Brian Blue"} %}
    {% swatch {"brightness":"light", "color":"melissa", "text":"Melissa Green"} %}
    {% swatch {"brightness":"dark", "color":"melissa", "text":"Melissa Green"} %}
    {% swatch {"brightness":"light", "color":"lydia", "text":"Lydia Purple"} %}
    {% swatch {"brightness":"dark", "color":"lydia", "text":"Lydia Purple"} %}
    {% swatch {"brightness":"light", "color":"amber", "text":"Amber Yellow"} %}
    {% swatch {"brightness":"dark", "color":"amber", "text":"Amber Yellow"} %}
    {% swatch {"brightness":"light", "color":"penelope", "text":"Penelope Orange"} %}
    {% swatch {"brightness":"dark", "color":"penelope", "text":"Penelope Orange"} %}
    {% swatch {"brightness":"light", "color":"susanna", "text":"Susanna Pink"} %}
    {% swatch {"brightness":"dark", "color":"susanna", "text":"Susanna Pink"} %}
    {% swatch {"brightness":"light", "color":"verity", "text":"Verity Red"} %}
    {% swatch {"brightness":"dark", "color":"verity", "text":"Verity Red"} %}
{% enddemo %}

{% demo "Greyscale Colors" %}
    {% swatch {"brightness":"dark", "color":"black", "text":"Black"} %}
    {% swatch {"brightness":"dark", "color":"dark-grey", "text":"Dark Grey"} %}
    {% swatch {"brightness":"dark", "color":"grey", "text":"Grey"} %}
    {% swatch {"brightness":"light", "color":"light-grey", "text":"Light Grey"} %}
    {% swatch {"brightness":"light", "color":"white", "text":"White"} %}
{% enddemo %}



## Headings
{% demo "Headings Hierarchy" %}
    <h1>Top-Level Header</h1>
    <h2>Second-Level Header</h2>
    <h3>Third-Level Header</h3>
    <h4>Fourth-Level Header</h4>
    <h5>Fifth-Level Header</h5>
    <h6>Sixth-Level Header</h6>
{% enddemo %}

{% demo "Headings in Body Text" %}
    <h1>Top Level Header</h1>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
    <h2>Second-Level Header</h2>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
    <h3>Third-Level Header</h3>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
    <h4>Fourth-Level Header</h4>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
    <h5>Fifth-Level Header</h5>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
    <h6>Sixth-Level Header</h6>
    <p>This paragraph is here to demonstrate how a heading and paragraph are displayed when such a heading is directly succeeded by a paragraph. The main point to note is the amount of whitespace between the two elements.</p>
{% enddemo %}



## Forms
{% demo "Dropdown" %}
    <select>
        <option>Adams, Douglas</option>
        <option>Bradbury, Ray</option>
        <option>Simmons, Dan</option>
        <option>Stephenson, Neal</option>
    </select>
{% enddemo %}

{% demo "Textarea" %}
    <label for="demo-textarea">Textarea</label>
    <textarea id="demo-textarea" name="demo-textarea">Textarea</textarea>
{% enddemo %}

{% demo "Button" %}
    <label for="demo-button">Button</label>
    <input type="button" name="demo-button" id="demo-button" value="Click Me" />
{% enddemo %}

{% demo "Checkbox" %}
    <label for="demo-checkbox">Checkbox</label>
    <input type="checkbox" name="demo-checkbox" id="demo-checkbox" />
{% enddemo %}

{% demo "Color" %}
    <label for="demo-color">Color</label>
    <input type="color" name="demo-color" id="demo-color" />
{% enddemo %}

{% demo "Date" %}
    <label for="demo-date">Date</label>
    <input type="date" name="demo-date" id="demo-date" />
{% enddemo %}

{% demo "Datetime Local" %}
    <label for="demo-datetime-local">Datetime Local</label>
    <input type="datetime-local" name="demo-datetime-local" id="demo-datetime-local" placeholder="Datetime Local" />
{% enddemo %}

{% demo "Email" %}
    <label for="demo-email">Email</label>
    <input type="email" name="demo-email" id="demo-email" placeholder="Email" />
{% enddemo %}

{% demo "File" %}
    <label for="demo-file">File</label>
    <input type="file" name="demo-file" id="demo-file" />
{% enddemo %}

{% demo "Image" %}
    <label for="demo-image">Image</label>
    <input type="image" name="demo-image" id="demo-image" />
{% enddemo %}

{% demo "Month" %}
    <label for="demo-month">Month</label>
    <input type="month" name="demo-month" id="demo-month" placeholder="Month" />
{% enddemo %}

{% demo "Number" %}
    <label for="demo-number">Number</label>
    <input type="number" name="demo-number" id="demo-number" />
{% enddemo %}

{% demo "Password" %}
    <label for="demo-password">Password</label>
    <input type="password" name="demo-password" id="demo-password" placeholder="password" />
{% enddemo %}

{% demo "Radio" %}
    <label for="demo-radio">Radio</label>
    <input type="radio" name="demo-radio" id="demo-radio" />
{% enddemo %}

{% demo "Range" %}
    <label for="demo-range">Range</label>
    <input type="range" name="demo-range" id="demo-range" />
{% enddemo %}

{% demo "Reset" %}
    <label for="demo-reset">Reset</label>
    <input type="reset" name="demo-reset" id="demo-reset" />
{% enddemo %}

{% demo "Search" %}
    <label for="demo-search">Search</label>
    <input type="search" name="demo-search" id="demo-search" placeholder="Search" />
{% enddemo %}

{% demo "Submit" %}
    <label for="demo-submit">Submit</label>
    <input type="submit" name="demo-submit" id="demo-submit" />
{% enddemo %}

{% demo "Tel" %}
    <label for="demo-tel">Tel</label>
    <input type="tel" name="demo-tel" id="demo-tel" placeholder="Tel" />
{% enddemo %}

{% demo "Text" %}
    <label for="demo-text">Text</label>
    <input type="text" name="demo-text" id="demo-text" placeholder="Text" />
{% enddemo %}

{% demo "Time" %}
    <label for="demo-time">Time</label>
    <input type="time" name="demo-time" id="demo-time" />
{% enddemo %}

{% demo "URL" %}
    <label for="demo-url">Url</label>
    <input type="url" name="demo-url" id="demo-url" placeholder="Url" />
{% enddemo %}

{% demo "Week" %}
    <label for="demo-week">Week</label>
    <input type="week" name="demo-week" id="demo-week" placeholder="Week" />
{% enddemo %}



## Lists
{% demo "Ordered List" %}
    <ol>
        <li>Adams</li>
        <li>Bradbury</li>
        <li>Brontë</li>
        <li>Melville</li>
        <li>Simmons</li>
        <li>Stephenson</li>
        <li>Tolkien</li>
    </ol>
{% enddemo %}

{% demo "Unordered List" %}
    <ul>
        <li>Adams</li>
        <li>Bradbury</li>
        <li>Brontë</li>
        <li>Melville</li>
        <li>Simmons</li>
        <li>Stephenson</li>
        <li>Tolkien</li>
    </ul>
{% enddemo %}

{% demo "Lists with Paragraphs" %}
    <p>A paragraph followed by an ordered list and an unordered list.</p>
    <ol>
        <li>Adams</li>
        <li>Bradbury</li>
        <li>Brontë</li>
        <li>Melville</li>
        <li>Simmons</li>
        <li>Stephenson</li>
        <li>Tolkien</li>
    </ol>
    <p>That was the ordered list. Next will be the unordered list.</p>
    <ul>
        <li>Adams</li>
        <li>Bradbury</li>
        <li>Brontë</li>
        <li>Melville</li>
        <li>Simmons</li>
        <li>Stephenson</li>
        <li>Tolkien</li>
    </ul>
{% enddemo %}
    
{% demo "Nested Lists" %}
    <ol>
        <li>First item</li>
        <li>
            Second item
            <ol>
                <li>Nested ordered list</li>
                <li>Another item</li>
            </ol>
        </li>
        <li>Last item</li>
    </ol>
    <ul>
        <li>First item</li>
        <li>
            Second item
            <ul>
                <li>Nested unordered list</li>
                <li>Another item</li>
            </ul>
        </li>
        <li>Last item</li>
    </ul>
{% enddemo %}



{% demo "Phrasing" %}
    <p>This sentence has normal text.</p>
    <p><strong>This sentence has strong text.</strong></p>
    <p><em>The sentence has emphasized text.</em></p>
    <p>This sentence has <a href="/">a hyperlink</a> in the middle of it.</p>
    <p>Subscript example: glucose is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.</p>
    <p>Superscript example: on the 17<sup>th</sup> day of Christmas, my true love gave me a fish.</p>
    <small>This is small text.</small>
    <p>A regular abbreviation <abbr>HTML</abbr> and a small caps abbreviation <abbr class="small-caps">HTML</abbr></p>
    <p><kbd><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd></kbd></p>
{% enddemo %}



{% demo "Typography" %}
    <p class="constant-line-breaks">This paragraph has constant line breaks. Perspiciatis voluptatem deserunt consequatur numquam tenetur accusantium.</p>
    <p><span>1234567890</span> Digits without tracking</p>
    <p><span class="digit-string">1234567890</span> Digits with tracking</p>
    <p>1/2 No fraction</p>
    <p><span class="fraction">1/2</span> Fraction</p>
    <p>lower case</p>
    <p class="uppercase">uppercase</p>
    <p class="small-caps">small caps</p>
    <p class="text-glow" style="background-color:black; color:white;">This text is glowing</p>
{% enddemo %}



{% demo "Horizontal Rule" %}
    <p>This is a test of the horizontal rule.</p>
    {% hr %}
    <p>Does the horizontal rule display correctly?</p>
{% enddemo %}



## Quotes
{% demo "Inline Quote" %}
    <p>This is an inline quote: <q>Imitating paper on a computer screen is like tearing the wings off a 747 and using it as a bus on the highway.</q></p>
{% enddemo %}

{% demo "Blockquote" %}
    <p>Paragraph number one that is leading into a long long quote.</p>
    <blockquote>
        This is blockquote text. Blockquotes are for long quotes from other sources that should be their own paragraph.
    </blockquote>
    <p>Another paragraph explaining the quote.</p>
{% enddemo %}



## Code
{% demo "Inline Code" %}
    <code>function inlineCode => { a* = li1[0]; }</code>
{% enddemo %}

{% demo "Code Block" %}
    <pre><code>function multilinecode1 () {
    return a + g.toString() + "asdf";
}</code></pre>
{% enddemo %}



{% demo "Table" %}
<table>
    <thead>
        <tr>
            <th>Author</th>
            <th>Book</th>
            <th>Century</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ray Bradbury</td>
            <td>Something Wicked This Way Comes</td>
            <td class="numeric-column">20</td>
        </tr>
        <tr>
            <td>Dan Simmons</td>
            <td>Hyperion</td>
            <td class="numeric-column">21</td>
        </tr>
        <tr>
            <td>Homer</td>
            <td>The Iliad</td>
            <td class="numeric-column">7</td>
        </tr>
    </tbody>
</table>
{% enddemo %}



{% demo "Figure" %}
    <p>This is a paragraph before the figure, which includes an image and a caption.</p>
    {% img {"src":"logo.svg", "alt":"alternate text", "caption":"The kodex site logo"} %}
    <p>This is a paragraph after the figure, which includes an image and a caption.</p>
{% enddemo %}



{% demo "Box" %}
<div class="box">This is an example box.</div>
{% enddemo %}



## Cards
{% demo "Card" %}
    {% card %}This is a card with no type. Should an untyped card be used?{% endcard %}
{% enddemo %}

{% demo "Content Card" %}
    {% contentcard contentCard %}This is a content card. This should only be used by typed card shortcodes, not directly.{% endcontentcard %}
{% enddemo %}

{% demo "Note Card with Body" %}
    {% notecard contentCard %}This is a note card with a body.{% endnotecard %}
{% enddemo %}

{% demo "Note Card with External Link" %}
    {% notecard noteCard %}{% endnotecard %}
{% enddemo %}

{% demo "Note Card with External Link and Body" %}
    {% notecard noteCard %}This is a note card with an external link and a body.{% endnotecard %}
{% enddemo %}

{% demo "Article Card" %}
    {% articlecard articleCard %}
{% enddemo %}



## Stars
{% demo "0/10" %}{% stars 0 %}{% enddemo %}
{% demo "1/10" %}{% stars 1 %}{% enddemo %}
{% demo "2/10" %}{% stars 2 %}{% enddemo %}
{% demo "3/10" %}{% stars 3 %}{% enddemo %}
{% demo "4/10" %}{% stars 4 %}{% enddemo %}
{% demo "5/10" %}{% stars 5 %}{% enddemo %}
{% demo "6/10" %}{% stars 6 %}{% enddemo %}
{% demo "7/10" %}{% stars 7 %}{% enddemo %}
{% demo "8/10" %}{% stars 8 %}{% enddemo %}
{% demo "9/10" %}{% stars 9 %}{% enddemo %}
{% demo "10/10" %}{% stars 10 %}{% enddemo %}

</div>