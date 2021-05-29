# password-generator

GIVEN I need a new, secure password
GIVEN I need a new, secure password between 8 and 128
When I enter a number that is below 28 or above 128 
Then I am met with a prompt to input the correct number of characters
When I am presented with a series of checkboxes for password criteria
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I check the checkbox of the characters I would like to include
THEN my input should be validated with the character type that is selected 
WHEN no checkbox is checked 
THEN only lowercase letters will be included in password
When I click on Generate Password
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is is displayed in a text box

```

