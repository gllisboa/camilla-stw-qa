# US016 -  Post with most Comments on a given day

## Acceptance Tests

### AC04- Most commente post statistics feature available on Statistics page
**Test 1:** Check if the "Statistics" option appears in the header of the main page next to the Login/Register button on the page.

    **Pre-conditions:** 
        Open the forum page
        The user must be logged in as a member
        
    **Expected result:**
         Check that the "Statistics" option appears in the menu next to the Login/Register button 

**Test 2:** Check if when clicking on the "Statistics" the user is redirected to the "Statistics Web Page". 

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the user is redirected to the "Statistics" page.


### AC01- User select a date on the Statistics page
**Test 3:** Check if the date selection field is visible and available. 

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        AC04
        
    **Expected result:**
         Check that the date selection field is visible and available.

**Test 4:** Check if a date can be selected.

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        Selection field available.
        AC04
        
    **Expected result:**
         Check that a date can be selected.


### AC02 - User must visualise must retrieve most commented post of the selected date
**Test 5:** Check if the most commented post is retreived when clicking on refresh button.

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        AC04
        AC01
        
    **Expected result:**
         Check that the most commented post of the selected date is retrieved.


### AC03 - User must visualise all top commented posts if comment count if igual on more then one post
**Test 6:** Check if all top commented posts are retreived if the comments count is the same on more then one post.

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        AC04
        AC01
        2 most commented posts with same comment count
        AC02
        
    **Expected result:**
         Check that all most commented posts are retrieved if they share the same comment count.




