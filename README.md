# F1

### What was done:
Single page application with 3 available URLs:
- '/' - root, will redirect to '/f1/seasons'.
- '/f1/seasons' - champions page. Will show each season and it's champion from 2005 until 2015
- '/f1/seasons/:season' - season details page. Will show each race, winner and some more info

Application design is responsive. Material guidelines (only major breakpoints) are used.

### Modules:
`AppModule` - no words needed

`AppRoutingModule` - contains app routing. Only 2 routes:
First redirects to 'f1/seasons', acting as home page.
Usually it should lead to a (home)component defined in an app or core module for fastest app loading
Second is a lazy route, loading routes from FeaturesModule. 
     
`CoreModule` - incl. only once, contains singleton services. Implements 'forRoot' pattern.

`SharedModule` - module containing common components/services/directive and so on. Can be included by any feature module.

`FeaturesModule` - module that connects all features. Imports FeaturesRoutingModule.

`FeaturesRoutingModule` - the only place to enable features routing. 
Contain routes 'f1/*' from ChampionshipModule.
     
`ChampionshipModule` - implements 2 features: show champions and season details.

`ChampionshipRoutingModule` - Contains routes required for ChampionshipModule.
         
### ChampionshipModule:
Components:

`SeasonComponent` - renders single node in SeasonListComponent. 
Accepts 'Season' model.
                          
`SeasonListComponent` - renders all champions/seasons (SeasonComponent). 
Handles click and redirects to season details (SeasonDetailsComponent).

`SeasonDetailsComponent` - shows a table with season data: races, winners, points, etc
        
Services:

`ErgastService` - service for accessing ErgastAPI.
>NOTE: API doesn't have filtering possibilities, so for fetching all champions/seasons
>I decided to fetch them all. It could be possible to use paging (e.g. first championship is a known constant) for solving current assignment - fetching
>2005 - 2015 years - but that won't work in general, because year can be skipped, current year becomes available when first race is logged. 
        
### CoreModule:

Services:

`HttpInterceptorService` - basic service that globally catches http errors and logs them.

`LoggerService` - basic logger service that logs errors to console and shows in MatSnackBar.
        
### SharedModule:

Components:

`BaseComponent` - component to be inherited by other components. Implements 'unsubscribe' pattern and shared 'loading' property.

`LoaderComponent` - component showing loading indicator. Accepts 'loading' boolean input parameter.
        
Directives:

`LoadingDirective` - directive that inserts LoaderComponent to indicate loading process

### Styles folder:

Contains global style variables/mixins

### Modules used:

`MatSnackBarModule` - to show error messages.

`MatIconModule` - to render icons from material library.

`CdkTableModule` - to render tables, no styles.
    
### How to run:
1. Install Angular CLI `npm install -g @angular/cli`
2. Checkout project
3. Open project folder
4. Inside project folder run cmd/bash
5. 
    - `npm install` to install required packages
    
    - `ng serve` to run in express mode or
      `ng build` - to build project. Use `--prod` flag to build in production mode.
      
       You will need to set up server (apache/nginx/iis)
        
    - `ng test` to run unit tests

### Tested in:
- Chrome
- Firefox
- Safari
