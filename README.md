# Collections

 - #### Array
   - Is only an object which offer operations for access and to manipulate yours properties;
   - Is possible and initialize passing only a Number for the function constructor;
   - The property length indicate the amount of elements which existents inside the Array;
   - The elements empties inside the Array is considered in length
   - #### Mutator API
      - The mutator methods when invoked modify the array
      - push: Adds an element at the end
      - pop: Removes an element from the end
      - unshift: Adds an element at the beginning
      - shift: Removes an element from the beginning
      - splice: Removes, replaces or adds one or more elements at a given position
      - sort: Sort elements according to the sorting function
      - reverse: Reverses the order of elements
      - fill: Fills the elements according to the start and end position 
   - #### Accessor API
      - Accessor methods when invoked return specific information about the array
      - indexOf: Returns the position of the first element found
      - lastIndexOf: Returns the position of the last element found
      - includes: Returns true if the element exists
      - concat: Returns a new array resulting from the concatenation of one or more arrays
      - slice: Returns parts of a given array according to start and end position
      - join: Converts the array to a String, joining elements based on a separator
 - #### Map
   - A Map is an object which stores a set the keys and values which that can be of any data type
   - size: Returns the number of elements
   - set: Adds a key and value pair
   - forEach: Iterates over the map
   - has: Returns true if the key exists
   - get: Returns the value of a given key
   - delete: Removes a key and value pair
   - clear: Removes all elements
   - What is tha difference for a object?
     - One the main differences is the behavior between the key. The object only works with String or Symbol, while the Map works with all types of keys.
     - Another difference when an object is created it has inheritances, for example, toString and valueOf, and to create without these inheritances, it's necessary to use Object.create(null), when a null value is passed, it doesn't create the inherited properties. Already in the Map doesn't have them.
