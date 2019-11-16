# RB-Branch

## [task04] professor_page

Professor page uses cards in a grid layout to list courses managed by a profesor.

### Added the following:

+ Components
  + card-layout
  + course-card
  + course-info
  + nav-bar

+ Class Models
  + Course

+ Assets
  + notebook.png

### Components

#### card-layout

A 3-column, indefinite-row grid containing *course-card* components.
Ideally, this component takes a Course array interpolation and passes each element
down to the *course-info* component.

#### course-card

A 3-column, 3-row grid layout containing the course icon, *course-info* component, and
a button to direct the user to the selected course's page.
This component takes in a Course object interpolation and passes it down to the *course-info*
component.

#### course-info

This component takes in a Course object and iterates through its mambers. It calls the *getDays()*
and *getTimes()* functions to retrieve a string from the corresponding arrays.
This component employs a 2-column, 3-row grid layout to organize its information.

#### nav-bar

Provides a home for the page name and its navigation buttons. It takes in a name string.

### Class Models

+ *Course* provides an object for storing and passing information about a course.
+ The *course-info* component iterates through its members.

### Assets

+ *notebook.png* is a static icon for courses using colors from the CSUN color palette.