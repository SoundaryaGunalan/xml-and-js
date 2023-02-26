# Git Commands

## How to create a branch

```bash
git checkout -b "<branch-name>"
```

## How to commit the asssignment/activity

```bash
git checkout main
git checkout -b "module-6/activity-6"
git add *
git commit -m "complete activity 6"
git push
```

if `git push` gives you `fatal: The current branch <branch-name> has no upstream branch.`, then run the command suggested in the message. would look like
`git push --set-upstream origin <branch-name>`
