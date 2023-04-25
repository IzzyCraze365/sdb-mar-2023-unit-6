## findOne()

`findOne()` is a function that finds one document according to the condition. If multiple documents match the condition then it returns the first document satisfying the condition.

## find()

`find()` is a function that will return all documents according to the conditions. If you leave the paramenter blank you will return all documents.

## deleteOne()

`deleteOne()` is a function that will delete the first document that satisfying the condition. Insert an object in the parameter to give it a condition.

## findOneAndUpdate()

`findOneAndUpdate()` function which finds a matching document and updates it according to the update arg, passing any options, and returns the found document (if any) to the callback.
