[Оформление readme.md] (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

# The largest heading
## The second largest heading
###### The smallest heading

**This is bold text**
*This text is italicized*
~~This was mistaken text~~
<sub>This is a subscript text</sub>

Text that is not a quote

> Text that is a quote

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted. You can also press the Command+E (Mac) or Ctrl+E (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.

Use `git status` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:
```
git status
git add
git commit
```
This site was built using [GitHub Pages](https://pages.github.com/).

You can display an image by adding ! and wrapping the alt text in [ ]. Then wrap the link for the image in parentheses ().
![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

You can make an unordered list by preceding one or more lines of text with - or *.

- George Washington
- John Adams
- Thomas Jefferson

1. First list item
   - First nested list item
     - Second nested list item

To create a task list, preface list items with a hyphen and space followed by [ ]. To mark a task as complete, use [x].

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

You can add footnotes to your content by using this bracket syntax:

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

<!-- This content will not appear in the rendered Markdown -->

