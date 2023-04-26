# Day 3

## Bronze

BRONZE CHALLENGE:
Implement a validate-session.js. Use the validateSession to protect every
route in the animal-controller.js. They should block any request that does
not have an authorization header that bears a token.
This token should be one returned from the login or sign up methods.

## Silver

SILVER CHALLENGE:
Add a new column named 'userId' to the animal model.
This column should take ObjetId like we did in class.

## Gold

GOLD CHALLENGE:
Taking advantage of the new userId column that links the row of the
animal table to the user that posted it from the Silver level challenge,
modify the delete endpoint to only allow users to delete only their own
animals from the database. You will need to use an options object
similar to one used in the Sequelize update() method.
Similarly, modify the get to return only animals the requesting
user has posted.