
## THANK YOU FOR TRYING MY IMPLEMENTATION OF EXD TRADER

## Steps To Run:
1. 'npm i' to install dependencies
2. 'npm start' to run application

## Things to note

1. You can configure  application specific variables at 'exd-trader/src/app/constants/tradeViewConstants.ts'. This is the entry point of the application.

2. You can configure global application variables if needed at 'exd-trader/src/app/constants/appConstants.ts'

3. Forms:

    - 'GenericForm' - The purpose of genericForm is to allow the definition of a form in JSON. User can define a Layout component as part of GenericForm definition in 'tradeViewConstants'.
    If user does not pass a custom layout, a default horizontal one will be used. This component can be further enhanced for more layouts.

4. I am using the browser local storage to implement a psuedo Database to persist records if a user was to reload the page. There is a clear button to remove these records on the
    GridView header.

    ### If you do not wish to use this functionality please set 'USE_LOCAL_STORAGE = false' in 'appConstants.ts' file

5. For purposes of this exercise and to avoid the possiblity of errors I did not implement Webpack for bundling or SCSS (css). In a real world environment I would have done so.

6. I did not use Redux in this application. I have not used it in the past, and was able to complete the assignment without it.


##### For any questions, comments, or issues please reach out to me directly. Thank you!

Adam Santamaria
631-235-2612
AdamSanta85@gmail.com
