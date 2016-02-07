# ui-markdown
> convert markdown to a styled HTML document

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

## Styling the HTML

By default it will add CSS classes but add no styling to these classes. If you prefer styling you can choose from several themes including `github`.

## Demo

Check out the demo at: TBD
