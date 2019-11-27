# RB-Branch

**Last update 11/25/2019**

Branch implements three main features:

### Professor Courses Page

**URL: '.../profMain':** Displays a grid of courses, each containing links to the corresponding *coursePage* and *messages* page.

### Professor Messages Page

**URL: '.../profMessages:'** Displays a set of tabs corresponding to different courses. Each tab contains a list of automated messages that have been sent, each containing links to perform *archive* and *delete* actions.
There are two types of messages: Announcements and Warnings; each with a corresponding icon and color.
  + Red indicates a warning. It is a message sent after a student has missed a number of classes.
  + Yellow indicates an announcement. It serves to remind students of exams and other important class events. 

### Professor Settings Page

**URL: '.../profSettings:'** Displays an accordion-style list of courses. Each course may be expanded to reveal three toggles that affect the following parameters; each toggle has a set of additional child options which are hidden whenever the toggle is disabled.
There are two buttons for performing *save* and *cancel* actions.

### Other Comments
  + TODO:
    + Need to figure out how user settings will be stored.
    + Card components should be turned into a module that can be used by any other module in the project.
    + Theme colors are defined in *styles.css* based on CSUN color specifications.
    + Branch imports some fonts and icons from online resources. See *index.html* for references.

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