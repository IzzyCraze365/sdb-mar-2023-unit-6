# Day 1

## Bronze

BRONZE CHALLENGE:
Make a new 'animal/create' endpoint in the animal-controller file. It should save all
the data from the animal model to the database, including # of legs,
boolean predator value, and its name.

If the animal is correctly saved in the database, inform the user.
Otherwise, alert the user if there's an error.

Make another '/' endpoint that will return all the animals
created in the database. Like the others, send appropriate statuses based on
if the request succeeds or not.

When testing in postman you must use the request

{"name": "alligator", "legNumber": 4, "predator": true}

## Silver

SILVER CHALLENGE:
Complete the bronze challenge, then make a new 'animal/delete' endpoint 
that will delete an animal from the database.  
However you complete this challenge, a request must be able to 
specify which animal needs to be deleted.  
If the delete was successful, inform the user, otherwise alert the 
user to an error.

## Gold

GOLD CHALLENGE:   Complete the silver challenge, but make a new 'animal/update' endpoint    that will let a request update animal data in the database.     Like with the silver challenge, the request must be able to    specify which animal needs to be updated.     On success, inform the user, on failure, alert appropriately.       Postman Body should look like the following.   { "name": "alligator", "legNumber": 4, "predator": true}