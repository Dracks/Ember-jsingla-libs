# Ember-dracks-libs

It's a group of components that I create for a project, but can be reused on a lot of them. 

## Components

### js-select 

A simple select view, using the sample from ember-js with some modifications

### js-feedback-message

A component to show a message (tipical error message, or save ok), you should use like:
```
{{#js-feedback-message isShowed="true" type="info" timer=15}}
	Lorem ipsum
{{/js-feedback-message}}
```

It has 4 arguments to configure it:
  * isShowed: If it should be showed or not
  * type: String with "info", "error" or "warning" to show as diferent color types
  * timer: the number of seconds you wish to show the messages, or null if it should be showed forever
  * hasCloseButton: If it has the button to close it. 
  
This component should be used with boostrap or something like that. 

### js-date-picker

It's a date picker with selectable values, For birthday dates or something, it's not practical the tipical library with 
a calendar view. It uses js-select

## Helpers

### is-equal

A helper required by js-select

## Mixins

### Login

A mixin to manage the main parts of a login window. It has js-login and js-login-form as templates to show it out of the 
box. 

## Utils

### Feedback Message

A group of functions to create an object with the 4 main elements used on js-feedback-message, with a simple line, It 
includes empty (to create a non-showed message object), base (a base object, with info type), error (the same as base, 
but with error type) and warning.
 
### Required fields & Required Select Fields

This two functions was made to easy check if a group of fields (of a form) where empty or not. You put an object with
 the fields as first argument, the fields names as an array in the second argument and it checks if there is a null value
 if it has more than x length (this requires the third argument of required-fields) or an id (only for select fields). 
