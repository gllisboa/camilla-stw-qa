# US014 - Average number of comments for a specific day

## Acceptance Tests

 
### **AC2:** The statistics button should be located in the top right corner of the page, next to the Logout button to access the statistics page.

**Test 1:** Check if the Statistics button appears in the top right corner of the page, next to the Logout button.

    **Pre-conditions:** 
        Open the forum page
        The user must be logged in as a member
        
    **Expected result:**
         Check that the "Statistics" option appears in in the top right corner of the page, next to the Logout button

  ### **AC3** After clicking on the statistics button, the user should be redirected to the Statistics page
  
  **Test 1:** Check if when clicking on the Statistics button the user is redirected to the Statistics page.

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the user is redirected to the statistics page.

  ### **AC4:** The user should be able to select a specific day for which they want to know the average of comments;

 **Test 1:** Check if the average number of comments for a specific day have a box to choose the date from the calendar

      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the average number of comments for a specific day section area has a calendar to choose the date from.

### **AC5:** The refresh button is only enabled after the user selects a valid day for which they want to know the average of comments;

**Teste 1:**

     **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the refresh button is only enabled after the user selects a valid day for which they want to know the average of comments. 

### **AC6:** The average of comments should be updated in real-time or at regular intervals to reflect any new comments made on the specified day;

     **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
        Check that the average of comments is updated in real-time or at regular intervals to reflect any new comments made on the specified day.


### **AC7:** The "average number of comments for a Specific Day" will be the first metric displayed in the "Statistics Page"
 
**Test 1:** Check if the average posts per user for a specific day is on the first position on the page
     
      **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         Check that the average posts per user for specific day is on the first position.

### **AC8:** When the refresh button is pressed, the average number of comments for a specific day will be updated. The information will be displayed in a label below the button.

**Test 1:** Check if clicking the "refresh button" the results are updated and with the expected format
   
     **Pre-conditions:** 
        Open the forum page
        User must be logged in as a member
        
    **Expected result:**
         | Day | Average comments |
	|:-------------  |:--------------------- |
	| YYYY-MM-DD | x |

