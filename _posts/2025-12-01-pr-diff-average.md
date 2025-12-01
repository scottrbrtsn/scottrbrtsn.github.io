# PR Diff average 

Sometimes, you may find yourself wondering, what is a simple way to track the average PR size in my repo.  

So from the default/main/master branch, you can get at that information pretty easily.  

The assumption here: the default branch is locked, and all changes go through the PR process, which squashes the changes into a single commit.  

## Average number of lines added over the past month

`git log --oneline --shortstat --no-merges --since="1 month ago" | paste - - | awk '{ count=0; for (i=1; i<=NF; i++) if ($i ~ /insertion/) count=$(i-1); sum+=count; lines++ } END { if (lines > 0) print sum/lines; else print 0 }'`

## Average number of lines removed over the past month

`git log --oneline --shortstat --no-merges --since="1 month ago" | paste - - | awk '{ count=0; for (i=1; i<=NF; i++) if ($i ~ /deletion/) count=$(i-1); sum+=count; lines++ } END { if (lines > 0) print sum/lines; else print 0 }'`


For other git metrics, see [a previous post on simple metrics from git](https://scottrbrtsn.github.io/2025/11/10/git.html).

