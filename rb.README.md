# RB-Branch

**Last update 11/28/2019**

+ Branch updates *profMain*, *profMessages*, and *profSettings*.
+ Adds dynamic navbar heading.
+ Adds TestingData service.
+ Adds Angular Model for Messages.
+ Streamlines components.

## Updated pages

Layout has been improved. Content does not disappear or overlap when window narrows.
Card components use a uniform styling file located in the **src/styles** folder.
Grid layouts have been replaced by a vertical list of cards.
Modified colors in prebuilt theme.

## Navbar heading

Uses NavbarTitleService to set the Navbar title.
Components must use this service to modify the name by injecting it into their constructor.

## TestingData service

Provides random generation of data.
Should be replaced by a real data provider.

## messages.model.ts

Provides an object model with fields to make message card generation simple.

## Streamlined components

Removed various redundant components.

#### Accessing fonts:
    Futura PT Book
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;

    Futura PT Book Oblique
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: italic;

    Futura PT Bold
    font-family: futura-pt-bold, sans-serif;
    font-weight: 700;
    font-style: normal;

    Futura PT Bold Oblique
    font-family: futura-pt-bold, sans-serif;
    font-weight: 700;
    font-style: italic;