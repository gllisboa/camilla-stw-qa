# 0. Test enviroment Pre-setup

* **Pre-conditions:** The database should be empty

<br>

**SQL Script:**

```sql
delete from comment_vote;
delete from post_vote;
delete from comment;
delete from post;
delete from  member;
delete from base_user;
```

## The SQL script will be run in the following order:

## 1. Register New Accounts for 9 New Users:


**Test Inputs:**

| Member | Username | Email | Password |
| :---: | :---: | :---: | :---: |
| **user-number1** | "user-number1" | "user-number1@gmail.com" | "user-number1" |
| **user-number2** | "user-number2" | "user-number2@gmail.com" | "user-number2" |
| **user-number3** | "user-number3" | "user-number3@gmail.com" | "user-number3" |
| **user-number4** | "user-number4" | "user-number4@gmail.com" | "user-number4" |
| **user-number5** | "user-number5" | "user-number5@gmail.com" | "user-number5" |
| **user-number6** | "user-number6" | "user-number6@gmail.com" | "user-number6" |
| **user-number7** | "user-number7" | "user-number7@gmail.com" | "user-number7" |
| **user-number8** | "user-number8" | "user-number8@gmail.com" | "user-number8" |
| **user-number9** | "user-number9" | "user-number9@gmail.com" | "user-number9" |
|                  |                |                          |                |

<br>

**SQL script**

```sql
-- Create user
set @userNumber1Id = cast(uuid() as CHAR(36));
set @userNumber2Id = cast(uuid() as CHAR(36));
set @userNumber3Id = cast(uuid() as CHAR(36));
set @userNumber4Id = cast(uuid() as CHAR(36));
set @userNumber5Id = cast(uuid() as CHAR(36));
set @userNumber6Id = cast(uuid() as CHAR(36));
set @userNumber7Id = cast(uuid() as CHAR(36));
set @userNumber8Id = cast(uuid() as CHAR(36));
set @userNumber9Id = cast(uuid() as CHAR(36));

-- Create base_user
insert into base_user (base_user_id, user_email, is_email_verified, username, user_password, is_admin_user, is_deleted, created_at, updated_at) values
    (@userNumber1Id, 'user-number1@gmail.com', true, 'user-number1', 'user-number1', false, false, '2023-10-01 10:10:10', '2023-10-01 10:10:10'),
    (@userNumber2Id, 'user-number2@gmail.com', true, 'user-number2', 'user-number2', false, false, '2023-10-02 10:10:10', '2023-10-02 10:10:10'),
    (@userNumber3Id, 'user-number3@gmail.com', true, 'user-number3', 'user-number3', false, false, '2023-10-03 10:10:10', '2023-10-03 10:10:10'),
    (@userNumber4Id, 'user-number4@gmail.com', true, 'user-number4', 'user-number4', false, false, '2023-10-04 10:10:10', '2023-10-04 10:10:10'),
    (@userNumber5Id, 'user-number5@gmail.com', true, 'user-number5', 'user-number5', false, false, '2023-10-05 10:10:10', '2023-10-05 10:10:10'),
    (@userNumber6Id, 'user-number6@gmail.com', true, 'user-number6', 'user-number6', false, false, '2023-10-06 10:10:10', '2023-10-06 10:10:10'),
    (@userNumber7Id, 'user-number7@gmail.com', true, 'user-number7', 'user-number7', false, false, '2023-10-07 10:10:10', '2023-10-07 10:10:10'),
    (@userNumber8Id, 'user-number8@gmail.com', true, 'user-number8', 'user-number8', false, false, '2023-10-08 10:10:10', '2023-10-08 10:10:10'),
    (@userNumber9Id, 'user-number9@gmail.com', true, 'user-number9', 'user-number9', false, false, current_timestamp, current_timestamp);

select * from base_user;

-- Create member ids
set @memeberUserNumber1Id = cast(uuid() as CHAR(36));
set @memeberUserNumber2Id = cast(uuid() as CHAR(36));
set @memeberUserNumber3Id = cast(uuid() as CHAR(36));
set @memeberUserNumber4Id = cast(uuid() as CHAR(36));
set @memeberUserNumber5Id = cast(uuid() as CHAR(36));
set @memeberUserNumber6Id = cast(uuid() as CHAR(36));
set @memeberUserNumber7Id = cast(uuid() as CHAR(36));
set @memeberUserNumber8Id = cast(uuid() as CHAR(36));
set @memeberUserNumber9Id = cast(uuid() as CHAR(36));

 -- Create member
insert into member (member_id, member_base_id, reputation, created_at, updated_at)
	values
    (@memeberUserNumber1Id, @userNumber1Id, 1, '2023-10-01 10:10:10', '2023-10-01 10:10:10'),
    (@memeberUserNumber2Id, @userNumber2Id, 2, '2023-10-02 10:10:10', '2023-10-02 10:10:10'),
    (@memeberUserNumber3Id, @userNumber3Id, 3, '2023-10-03 10:10:10', '2023-10-03 10:10:10'),
    (@memeberUserNumber4Id, @userNumber4Id, 4, '2023-10-04 10:10:10', '2023-10-04 10:10:10'),
    (@memeberUserNumber5Id, @userNumber5Id, 5, '2023-10-05 10:10:10', '2023-10-05 10:10:10'),
    (@memeberUserNumber6Id, @userNumber6Id, 6, '2023-10-06 10:10:10', '2023-10-06 10:10:10'),
    (@memeberUserNumber7Id, @userNumber7Id, 7, '2023-10-07 10:10:10', '2023-10-07 10:10:10'),
    (@memeberUserNumber8Id, @userNumber8Id, 8, '2023-10-08 10:10:10', '2023-10-08 10:10:10'),
    (@memeberUserNumber9Id, @userNumber9Id, 9, current_timestamp, current_timestamp);

select * from member;
```

<br>

### Creation of 15 New Posts 

* Creation of 15 Posts for 5 of 9 Members Created in order to cover Member with post and without any posts and posts created at diferent dates and times.

**Test Inputs:**

| Post | Member | Type | Title | text | Created_at | Updated_at |
| :---: | :---: | :---: | :---: | :---: | :---: |:---: |
| **User-Number1 - Post 1** | "user-number1" | text | User-Number1 - Post 1 | This concerns the 1st post from User-Number1 | 2023-10-15 10:10:10 | 2023-10-15 10:10:10 |
| **User-Number1 - Post 2** | "user-number1" | text | User-Number1 - Post 2 | This concerns the 2nd post from User-Number1 | 2023-10-15 11:10:10 | 2023-10-15 11:10:10 |
| **User-Number1 - Post 3** | "user-number1" | text | User-Number1 - Post 3 | This concerns the 3rd post from User-Number1 | 2023-10-15 12:10:10 | 2023-10-15 12:10:10 |
| **User-Number1 - Post 4** | "user-number1" | text | User-Number1 - Post 4 | This concerns the 4th post from User-Number1 | 2023-10-15 13:10:10 | 2023-10-15 13:10:10 |
| **User-Number1 - Post 5** | "user-number1" | text | User-Number1 - Post 5 | This concerns the 5th post from User-Number1 | 2023-10-15 14:10:10 | 2023-10-15 14:10:10 |
| **User-Number2 - Post 1** | "user-number2" | text | User-Number2 - Post 1 | This concerns the 1st post from User-Number2 | 2023-10-16 10:10:10 | 2023-10-16 10:10:10 |
| **User-Number2 - Post 2** | "user-number2" | text | User-Number2 - Post 2 | This concerns the 2nd post from User-Number2 | 2023-10-16 11:10:10 | 2023-10-16 11:10:10 |
| **User-Number2 - Post 3** | "user-number2" | text | User-Number2 - Post 3 | This concerns the 3rd post from User-Number2 | 2023-10-16 12:10:10 | 2023-10-16 12:10:10 |
| **User-Number2 - Post 4** | "user-number2" | text | User-Number2 - Post 4 | This concerns the 4th post from User-Number2 | 2023-10-16 13:10:10 | 2023-10-16 13:10:10 |
| **User-Number3 - Post 1** | "user-number3" | text | User-Number3 - Post 1 | This concerns the 1st post from User-Number3 | 2023-10-17 10:10:10 | 2023-10-17 10:10:10 |
| **User-Number3 - Post 2** | "user-number3" | text | User-Number3 - Post 2 | This concerns the 2nd post from User-Number3 | 2023-10-17 11:10:10 | 2023-10-17 11:10:10 |
| **User-Number3 - Post 3** | "user-number3" | text | User-Number3 - Post 3 | This concerns the 3rd post from User-Number3 | 2023-10-17 12:10:10 | 2023-10-17 12:10:10 |
| **User-Number3 - Post 4** | "user-number3" | text | User-Number3 - Post 4 | This concerns the 4th post from User-Number3 | 2023-10-17 13:10:10 | 2023-10-17 13:10:10 |
| **User-Number4 - Post 1** | "user-number4" | text | User-Number4 - Post 1 | This concerns the 1st post from User-Number4 | 2023-10-18 10:10:10 | 2023-10-18 10:10:10 |
| **User-Number4 - Post 2** | "user-number4" | text | User-Number4 - Post 2 | This concerns the 2nd post from User-Number4 | 2023-10-18 11:10:10 | 2023-10-18 11:10:10 |
| **User-Number4 - Post 3** | "user-number4" | text | User-Number4 - Post 3 | This concerns the 3rd post from User-Number4 | 2023-10-18 12:10:10 | 2023-10-18 12:10:10 |
| **User-Number4 - Post 4** | "user-number4" | text | User-Number4 - Post 4 | This concerns the 4th post from User-Number4 | 2023-10-18 13:10:10 | 2023-10-18 13:10:10 |
| **User-Number5 - Post 1** | "user-number5" | text | User-Number5 - Post 1 | This concerns the 1st post from User-Number5 | 2023-10-19 10:10:10 | 2023-10-19 10:10:10 |
| **User-Number5 - Post 2** | "user-number5" | text | User-Number5 - Post 2 | This concerns the 2nd post from User-Number5 | 2023-10-19 11:10:10 | 2023-10-19 11:10:10 |
| **User-Number5 - Post 3** | "user-number5" | text | User-Number5 - Post 3 | This concerns the 3rd post from User-Number5 | 2023-10-19 12:10:10 | 2023-10-19 12:10:10 |
| **User-Number5 - Post 4** | "user-number5" | text | User-Number5 - Post 4 | This concerns the 4th post from User-Number5 | 2023-10-18 13:10:10 | 2023-10-19 13:10:10 |


**SQL script**

```sql


```



