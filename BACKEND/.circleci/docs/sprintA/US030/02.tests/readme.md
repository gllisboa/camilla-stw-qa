# US027 - The main page should include a new tab to show the posts that have comments made by the member (My Comments)

# 1. Tests 

While accessing the Forum page we must garantee the following:

**Test 1:** Check if the "My Comments" option appears on the page next to the "Ascending". - AC3, AC4. 

   **Pre-conditions:** 
        Open the forum page
        The user must be logged in as a member

   **Expected result:**
      Check that the "My Comments" option appears in the menu next to the "Ascending" options


**Test 2:** Check if when clicking on the "My Comments" the user is redirected to the "My Comments" tab. - AC5. 

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the user is redirected to the "My Comments" tab.

**Test 4:** After creating one comment on a post it should appear on the "My Comments" page the post - AC6.

    **Pre-conditions:** 
        The database should be empty
        Have a registered user
        Obtain the registered user's access token
        Created one comment with the access token

    **Test-Steps:**
        Invoke the `mycomments` API endpoint

    **Expected result:**
        Return Status Code `200-ok` and the created comment.

   **Test 4.1:** Check if post information on "My Comments" page is display as required - AC6.

      &uarr; **"post title"**<br/>
      0<br/>
      &darr; 20 minutes ago | by [username]() | 1 comments

**Test 5:** After creating two member commented on a post it should appear on the "My Comments" page for both users - AC6.

    **Pre-conditions:** 
        The database should be empty
        Have two registered users
        Obtain the registered user's access tokens
        Created one comment with each access tokens

    **Test-Steps:**
        Invoke the `mycomments` API endpoint with each access tokens

    **Expected result:**
        Return Status Code `200-ok` and the created comment for both tokens.

**Test 6:** When no comments have been created by the member, check if a blank page is displayed  - AC7.

    **Pre-conditions:** 
        The database should be empty

    **Test-Steps:**
        Invoke the `mycomments` API endpoint

    **Expected result:**
        Return Status Code `200-ok`


