

# AngularFixerUpper

This project was generated using [Nx](https://nx.dev).

## Fixer Upper Scenario

This project was created over the span of 2 days. A lot of things were rushed and while it is running, it needs a lot of attention and knowledge of Angular, HTML, and CSS.

It will also test your knowledge of:

- component architecture
- data flow
  - NGRX Data Stores
- asynchronous programming
- testing
- accessibility
- semantic elements

Task Completion Report:

TODO: 1. the header (footer) needs to run flush to the top (bottom) and sides
//TODO: 1: Working as per instruction

TODO: 2. We've setup these routes and have them on the page but they aren't working
//TODO: 2(Solutuion):- Now, all routes are working smoothly.

TODO: 3. Use Semantic HTML properly, what's wrong with this usage of main
//TODO: 3main isn't part of the semantic HTML and when we use Semantic HTML browser always try to extract relevant content for a better user experience

TODO: 4. Our header and footer are suppose to fill the full width of the page and sit flush to the top / bottom
//TODO: 4, I have done in the styles.scss

TODO: 5. Fixing one thing may break other things, but sometimes it has to be done
//TODO: 5:- Fixed the styling of table and its components

TODO: how to retrieve account id and other account details in this route?
//TODO: Retrieved all account details through subscribe in the account.details.component.ts file

TODO: 6. Angular ngFor, refactor, and bonus points
TODO: 7. Accessibility, table markup, form control
//Both task done as per instruction

TODO: 8. route to detail view
//TODO: 8:- Now can get Routes of all account id

TODO: 9. Topics in this file: Angular Unit Testing w/ Jest
// TODO: 9:- Task Remaining

TODO: 10. this test isn't doing anything atm, how can we make it more meaningful?
//TODO: 10:- Task Remaining

TODO: 10. Asynchronous Programming (RxJS):-  Done as per instruction

TODO: 11. The Last Link is only suppose to be offset from the side of the screen by 20px, what can we do to fix this
//Here imported theme instead of use and unlinked "theme" from the background, padding-right, and padding-left So, all three links are set 

TODO: 12. something's off with this include
//@import "theme" is the solution and because that link() is working properly.

TODO: 13. Angular (NX) Architecture:- Task Remaining
//Steps which I followd, Lastlt I opted for Manul migration
Two ways to migrate angular cli to nx

1. automatic
2. manual 

1. Automatic
-> ng add @nrwl/angular --preserve-angular-cli-layout
-> ng add @nrwl/workspace_name@13.5.0 --preserveAngularCLILayout
-> installs the nx and @nrwl/workspace packages.
-> ng add @nrwl/angular

2. Migrate Manually
-> npm init nx-workspace myorg --preset=angular
-> application name,  = > current json file 
-> copy all files manually like appls, lib and shared
-> ng serve <app name>






TODO: 14. fix the deprecation
//Fixed the color and changed tag into its value
