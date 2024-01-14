# API Test Documentation
### General Description
This file contains a suite of tests verifying the functionality of various endpoints within the API. The tests cover user creation, login, post creation, commenting on posts, upvoting/downvoting posts and comments, among other functionalities.

## Tests Performed
 - Post - Create User

- Description: Tests the creation of a user.
- Input: Required parameters to create a user: ID, email, and password.
- Expected Output: Verify the response status (should be 200).

- Post Login
- Description: Tests the user login process.
- Input: User credentials (ID and password).
- Expected Output: Checks if access and refresh tokens are generated correctly and if the response status is 200.

- Get Me username
- Description: Tests fetching logged-in user data.
- Input: Access token.
- Expected Output: Checks if user data is defined, if the username contains a specific value, and if the response - status is 200.

- Creates a post
- Description: Tests the creation of a new post.
- Input: Access token and post details.
- Expected Output: Verifies if the post is successfully created and if the response status is 200.

- Creates a post - Sem Comment
- Description: Tests the creation of a new post without comments.
- Input: Access token and post details.
- Expected Output: Verifies if the post is created correctly and if the response status is 200.

- Get popular posts
- Description: Fetches a list of popular posts.
- Input: Access
         - Sends a request to retrieve popular posts.
         - Checks if the response contains defined post data.
- Expected Output: Verifies the response status code (should be 200).

- Get recent posts
- Description: Fetches a list of recent posts.
Input:
     - Sends a request to retrieve recent posts.
     -Checks if the response contains defined post data.
Expected Output: Verifies the response status code (should be 200).

- Get slug of a post
- Description: Fetches the slug of a post.
- Input:
       -Sends a request to retrieve recent posts.
       -Extracts the slug from the post data.
Expected Output: Verifies if the slug is defined in the response.
                 Verifies the response status code (should be 200).

- Upvote a post
- Description: Upvotes a specific post.
- Input:
        - Sends a request to upvote a post using the post's slug and access token.
Expected Output: Verifies the response status code (should be 200).

- Downvote a post
- Description: Downvotes a specific post.
- input:
       -Sends a request to downvote a post using the post's slug and access token.
Expected Output: Verifies the response status code (should be 200).

- Reply to a post
- Description: Replies to a post by adding a comment.
input:
      -Sends a request to add a comment to a post using the post's slug and access token.
Expected Output: Verifies the response status code (should be 200).

- Get commentID of a comment of a post
- Description: Fetches the comment ID of a comment on a post.
- inpout:
        -Sends a request to fetch comments for a specific post.
        -Retrieves the comment ID from the response.
Expected Output: Checks if the comment ID is defined and if comments exist for the post.
                 Verifies the response status code (should be 200).

- Comment a comment of a post
- Description: Comments on an existing comment of a post.
- inpout:
         -Sends a request to add a comment to an existing comment on a post using the comment's ID, post's slug, and access token.
- Expected Output: Verifies the response status code (should be 200).

- Upvote a comment
- Description: Upvotes a specific comment.
- inpout:
        -Sends a request to upvote a comment using the comment's ID and access token.
- Expected Output: Verifies the response status code (should be 200).

- Downvote a comment
- Description: Downvotes a specific comment.
- inpout:
        -Sends a request to downvote a comment using the comment's ID and access token.
- Expected Output:Verifies the response status code (should be 200).


- Get Percentage of Posts without Comments
- Description: Retrieves the percentage of posts without comments on a specific date.
- inpout:
         -Specifies a date (day, month, year).
          - Sends a request to calculate the percentage of posts without comments using the provided date and access token.
- Expected Output: Verifies the response status code (should be 200).


- Get Hour With the Most Posts Created In a Day
- Description: Fetches the hour with the most posts created on a specific day.
- inpout:
        -Retrieves the current date.
- Expected Output: Sends a request to identify the hour with the most posts created in a day using the current date and access token.
                  Verifies the response status code (should be 200).

- Get a user by username
- Description: Retrieves user information using the username.
- inpout :
          -Sends a request to fetch user details by providing the username and access token.
- Expected Output: Verifies the response status code (should be 200).


- Delete a user
- Description: Deletes a user account using the username and access token.
- inpout:
         - Sends a request to delete a user by specifying the username and access token.
- Expected Output: Verifies the response status code (should be 200).


- Login 2nd try
- Description: Attempts to log in again with the same credentials after a user deletion.
- inpout:
         -Sends a request to log in using specific credentials (that have been previously deleted).
- Expected Output:  Verifies the response status code (expected to be 500).

- Get - username most comments
- Description: Retrieves information about the user with the most comments.
- inpout:
        -Sends a request to identify the user with the most comments using an access token.
- Expected Output:  Verifies the response status code (should be 200).


- Member Logout of the Forum
- Description: Performs logout for a member from the forum.
- inpout:
         -Sends a request to log out a member by providing the access token.
- Expected Output: Verifies the response status code (should be 200).


- Get Member by username
- Description: Retrieves member details using the username.
- inpout:
        -Sends a request to fetch member information by specifying the username and access token.
- Expected Output: Verifies the response status code (should be 200).


- Get Member Post Count
- Description: Fetches the count of posts made by a specific member.
- inpout:
        -Sends a request to get the count of posts made by a member using the username.
- Expected Output: Verifies the response status code (should be 200).

- Get Member Comment Count
- Description: Fetches the count of comments made by a specific member.
- inpout:
        -Sends a request to get the count of comments made by a member using the username.
- Expected Output: Verifies the response status code (should be 200).
