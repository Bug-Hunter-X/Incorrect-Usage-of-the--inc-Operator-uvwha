# Incorrect Usage of the $inc Operator in MongoDB

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numerical field by a specified value.  However, if you try to increment with a non-numerical value (e.g., a string), it throws an error. 

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version. This example illustrates the importance of using appropriate data types when interacting with MongoDB.