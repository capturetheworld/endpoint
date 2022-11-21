# endpoint

1. Create a javascript file in the input folder according to the object specifications listed on the instructions.
2. Title the object as inputdata ={....} and be sure to export {inputdata}; at the end of the file
3. Please see samples of all 4 functions working in the input folder.
4. In the explorer component be sure to change the import statement to point to the test input file.
5. run npm run start and try!

The main explorer component is broken down into 3 components: page, form, and output. The output is a child of form which is in turn a child of page. This allows for easy modularity.

It dynamically renders the form on the fly and stores this with a single React hook for all the form values. It supports PUT, GET, DELETE, and POST. It can be easily updated in the future to support PATCH, as the the switch statements handle the API shape creation to easily adapt to each request.