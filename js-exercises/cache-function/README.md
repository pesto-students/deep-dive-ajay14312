# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
1. expensive function calls, which carry heavy computations
2. recursive functions
3. Pure functions return same output each time with particular input

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*
check callback function type