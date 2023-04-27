# GIT MASTER

Open a new command prompt or terminal window, and navigate (cd/ls) to the teamGit folder we created earlier (You can also open a terminal in VSCode if that's easier for you)

Once you are in the teamGit directory, run the following commands in the command prompt/terminal to initialize a new Git repo:

    git init
    git add .
    git commit -m "message"
    git status


Make sure your console reads, "nothing to commit, working tree clean" after `status`

## CREATE GITHUB REPOSITORY

Navigate to https://github.com/ (https://github.com/) and sign in if necessary.

In the upper right hand corner of the screen, click the '+' icon, and then select New Repository to create a new repository. When you clone you will get all branches currently on github repository.

Name the repository, check create.

Copy the 2 lines of code from the ". ..or push an existing repository from the command line" section into your command prompt/terminal, and hit enter.

    git remote add origin https://github.com/<your user name>/teamGit.git
    git push -u origin master



## Add your team to the GitHub repository

To do this, navigate to the 'Settings' tab in the repository toolbar (very far right).

Once in the settings tab, select 'Manage Access' from the left menu panel.

Click the green 'Invite a collaborator' button at the bottom of the screen, and proceed to invite your group members by either GitHub username or the email addressattached to their GitHub account.

# Branches
Check what branch we're currently on (make sure you're still in the teamGit directory in your command prompt/terminal).
    
    git branch


Create a new branch run the following command:

    git checkout -b develop


To switch between branches, run:
    
    git checkout <branch name>


To delete a branch, run:

    git branch -d <branch name>

## Terminal Window
Running a 'git status' command:

    On branch develop
    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)


Changes not staged for commit, we need to add, commit, and push those changes to GitHub:

    git add .
    git commit -m "pushing deployment branch"
    git push


`NOTE` Running just 'git push' should give you an error saying:

    fatal: The current branch develop has no upstream branch.
    To push the current branch and set the remote as upstream, use
    git push --set-upstream origin develop



## Clone Repository

Open a new command prompt/terminal window, and navigate to your desktop (or wherever you want to store the project).

After navigating to the directory you want to store the project in, run:

    git clone <paste in linked copied from github>


After opening the folder in VSCode, in your command prompt/terminal, you should be able to switch to the develop branch ('git checkout <branch name>')

## Creating New Branches

Since we want our individual branches to be branching off of the develop branch and not the master branch, make sure you have switched to the develop branch before creating your own branch.

The command to switch to the develop branch is:

    git checkout develop


Once you get switched to the develop branch, you can run the following command to create and switch to a new branch:

    git checkout -b <your name>
    "git checkout -b John



Run the following commands to add, commit, and push the branch to GitHub:

    git add .
    git commit -m "johns branch"
    git push



### ERROR MESSAGE

You will recieve and error and a prompt in the terminal

    git push --set-upstream origin <your branch name>
    git push --set-upstream origin John



## Merging Branches

This is done exclusivly on GitHub

`ONLY ONE PERSON SHOULD PULL REQUEST AT A TIME!!!`

1. Click `Branches` Tab
2. Click `New Pull Request`
3. Make the the drop down menu is correct `base` <= `compare`
    you should see `Able to merge` with a green checkmark
4. Click `Create Pull Request`

As long as there are no merge conflicts (again, whoever is merging first should not run into any), go ahead and click the green 'Merge pull request' button.

### Merge Conflicts

1. Click `Branches` Tab
2. Click `New Pull Request`
3. Make the the drop down menu is correct `base` <= `compare`
    you should see `Can't automatically merge` with a red X
4. Click `Create Pull Request`
5. You will see a popup that says `This branch has conflicts that must be resolved`
6. Click the `Resolve conflicts` button
7. You will see a code view of the conflicted lines.

    To fix the merge conflict, simply remove the branch names preceding or succeeding the lines of code, and structure the code how you would like it to be structured.
8. With the conflicts now resolved, click the `Mark as resolved`

### Final Merge

This is the same process as above but you are merging the `develop` branch and the `main` branch.

## Keeping Locat Code Up-To-Date

### Inside the Command Terminal
Go into your personal branch

    git checkout <branch name>


To pull down everyone's changes to your codebase, run the following command:

    git pull origin <branch name>


### Merge conflicts within VSCode
If you happen to have a merge conflict locally within VSCode when pulling down changes, you should see something similar to what the merge conflict within GitHub itself showed you - it will show you both your current code, and the incoming changes. Since we know that the develop/master branches are up-to-date and correct, we can just `Accept incoming changes`.