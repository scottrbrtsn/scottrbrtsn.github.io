# Tactics to assess project complexity.
## System discovery tactics using git
### Number of commits per file in a directory.
- `git log --name-only --pretty=format: | sort | uniq -c | sort -n`
- This is useful to identify churn on specific files.  

### Total number of commits across all repositories in an organization.
- `find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && pwd && git rev-list --count --all" \;`
- This is useful to find the most active repositories.  

## Complexity (a tool)
https://github.com/thoughtbot/complexity

example usage: `complexity --only .java | sort -n --reverse | head -n 3`

output:
```
 659.53 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFUnitTest.java
 295.73 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFwriter.java
 241.93 ./streaming-apps/embedded-kafka/src/main/java/com/embedded/kafka/utils/edflib/EDFreader.java 
```

## Dependency graphs.
- [](https://github.com/tox-dev/pipdeptree)
- [](https://github.com/kordamp/jdeps-gradle-plugin)
- [](https://github.com/marschall/jdeps-maven-plugin)
- [](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-nuget-why)
- [](https://github.com/kisielk/godepgraph)

`npm ls --all` or `npm ls [dependency]`

`pipdeptree | wc -l`

`jdeps -v --dot-output . myjar.jar` && `dot summary.dot -Tpng -o summ.png`

`mvn dependency:tree` or `gradle dependencies`

`gradle jdeps --dot-output . && sed -i '/java/d' main.dot && sed -i '/.jar/d' main.dot && dot main.dot -Tpng -o main.png`

`dotnet nuget why [<PROJECT|SOLUTION>] <PACKAGE> [-f|--framework <FRAMEWORK>]`

### Kubernetes cluster graph 
Requires `krew` to install the `kubectl-graph` plugin
- `k graph -o=graphviz all >> sosoa.txt`

