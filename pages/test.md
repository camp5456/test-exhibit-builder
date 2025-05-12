---
title: Test
layout: test
permalink: /test.html
# include CollectionBuilder info at bottom
# credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---
{% capture accordion_1 %}
### Heading One
This is the content for the **first** accordion.  
You can use **Markdown** and it will be rendered as HTML *after* capture.
{% endcapture %}

{% capture accordion_2 %}
### Heading Two
Second accordion content goes here.  
Still Markdown! Still works.
{% endcapture %}

{% capture accordion_3 %}
### Heading Three
This one has a list:

- Item one
- Item two
- Item three
{% endcapture %}

## Welcome

This page is to highlight various out of the box layout features.
___

## Accordion Magic

{% include feature/accordion.html 
    title1="Section Header 1" text1=accordion_1
    title2="Section Header 2" text2=accordion_2 
    title3="Section Header 3" text3=accordion_3
%}
___

## Bootstrap Alert Text

{% include feature/alert.html text="This is an example of a warning" color="warning" align="center" %}
{% include feature/alert.html text="This is an example of an information statement" color="info" align="center" %}

___

## Audio - External OR Exhibit Object

{% include feature/audio.html objectid="/objects/demo_003" %}

___

## Blockquote - includes: text, speaker, source, link

{% include feature/blockquote.html text="Quod te non mutat, te docet." speaker="Marcus Aurelius" source="Locksley Hall" %}

___

## Button 
{% include feature/button.html text="Example Button" link="https://example.com" color="success" %}

___

## Card

{% include feature/card.html text="Some text" header="Example item" objectid="/objects/demo_004" title="This is a title" alt="this is alt text" %}

 ---

## Jumbotron - or featured image section banner 
{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}