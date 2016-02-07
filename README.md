# ui-markdown
> Ember addon which converts markdown to a styled HTML document

## Installation

    ember install ui-markdown

## Usage

Use an inline style if you're bringing content from a structured source like ember-data

````handlebars
{{markdown-convert content='#Hello World'}}
````

or use the _block_ style if you want to inline content:

````handlebars
{{#markdown-convert style='github'}}
  #Hello World
  _welcome home,_ my `earthling` friend
{{/markdown-convert}}
````

or finally, if the markdown resides on a URL based resource then you can just use:

````handlebars
{{markdown-file url='/docs/myDoc.md'}}
````

or if you want a pre-loader:

````handlebars
{{#markdown-file url='/docs/myDoc.md'}}
  <div class="pre-loader">...</div>
{{/markdown-file}}
````


## Styling the HTML

By default it will add CSS classes but add no styling to these classes. If you prefer styling you can choose from several themes including `github`.

## Demo

Check out the demo at: [ui-markdown](https://ui-markdown.firebaseapp.com/)

## MIT License

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
