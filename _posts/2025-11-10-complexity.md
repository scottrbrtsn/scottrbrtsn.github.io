## Complexity (a tool)
<https://github.com/thoughtbot/complexity>

example usage: `complexity --only .java | sort -n --reverse | head -n 3`

output:
```
 659.53 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFUnitTest.java
 295.73 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFwriter.java
 241.93 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFreader.java 
```
