USE data_dev;
delete from comment_vote;
delete from post_vote;
delete from comment;
delete from post;
delete from  member;
delete from base_user;
set @userNumber1Id = cast(uuid() as CHAR(36));
set @userNumber2Id = cast(uuid() as CHAR(36));
set @userNumber3Id = cast(uuid() as CHAR(36));
set @userNumber4Id = cast(uuid() as CHAR(36));
set @userNumber5Id = cast(uuid() as CHAR(36));
set @userNumber6Id = cast(uuid() as CHAR(36));
set @userNumber7Id = cast(uuid() as CHAR(36));
set @userNumber8Id = cast(uuid() as CHAR(36));
set @userNumber9Id = cast(uuid() as CHAR(36));
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
set @memberUserNumber1Id = cast(uuid() as CHAR(36));
set @memberUserNumber2Id = cast(uuid() as CHAR(36));
set @memberUserNumber3Id = cast(uuid() as CHAR(36));
set @memberUserNumber4Id = cast(uuid() as CHAR(36));
set @memberUserNumber5Id = cast(uuid() as CHAR(36));
set @memberUserNumber6Id = cast(uuid() as CHAR(36));
set @memberUserNumber7Id = cast(uuid() as CHAR(36));
set @memberUserNumber8Id = cast(uuid() as CHAR(36));
set @memberUserNumber9Id = cast(uuid() as CHAR(36));
insert into member (member_id, member_base_id, reputation, created_at, updated_at)values
    (@memberUserNumber1Id, @userNumber1Id, 1, '2023-10-01 10:10:10', '2023-10-01 10:10:10'),
    (@memberUserNumber2Id, @userNumber2Id, 2, '2023-10-02 10:10:10', '2023-10-02 10:10:10'),
    (@memberUserNumber3Id, @userNumber3Id, 3, '2023-10-03 10:10:10', '2023-10-03 10:10:10'),
    (@memberUserNumber4Id, @userNumber4Id, 4, '2023-10-04 10:10:10', '2023-10-04 10:10:10'),
    (@memberUserNumber5Id, @userNumber5Id, 5, '2023-10-05 10:10:10', '2023-10-05 10:10:10'),
    (@memberUserNumber6Id, @userNumber6Id, 6, '2023-10-06 10:10:10', '2023-10-06 10:10:10'),
    (@memberUserNumber7Id, @userNumber7Id, 7, '2023-10-07 10:10:10', '2023-10-07 10:10:10'),
    (@memberUserNumber8Id, @userNumber8Id, 8, '2023-10-08 10:10:10', '2023-10-08 10:10:10'),
    (@memberUserNumber9Id, @userNumber9Id, 9, current_timestamp, current_timestamp);
SET @post1UserNumber1Id = UUID();
SET @post2UserNumber1Id = UUID();
SET @post3UserNumber1Id = UUID();
SET @post4UserNumber1Id = UUID();
SET @post5UserNumber1Id = UUID();
SET @post1UserNumber2Id = UUID();
SET @post2UserNumber2Id = UUID();
SET @post3UserNumber2Id = UUID();
SET @post4UserNumber2Id = UUID();
SET @post1UserNumber3Id = UUID();
SET @post2UserNumber3Id = UUID();
SET @post3UserNumber3Id = UUID();
SET @post1UserNumber4Id = UUID();
SET @post2UserNumber4Id = UUID();
SET @post1UserNumber5Id = UUID();
SET @postAllUsersNumber1Id = UUID();
SET @postAllUsersNumber2Id = UUID();
SET @postAllUsersNumber3Id = UUID();
SET @postAllUsersNumber4Id = UUID();
SET @postAllUsersNumber5Id = UUID();
SET @postAllUsersNumber6Id = UUID();
SET @postAllUsersNumber7Id = UUID();
SET @postAllUsersNumber8Id = UUID();
SET @postAllUsersNumber9Id = UUID();
SET @post1dayAgoUserNumber1Id = UUID();
SET @post2daysAgoUserNumber1Id = UUID();
SET @post3daysAgoUserNumber1Id = UUID();
SET @post4daysAgoUserNumber1Id = UUID();
SET @post5daysAgoUserNumber1Id = UUID();
SET @post6daysAgoUserNumber1Id = UUID();
SET @post7daysAgoUserNumber1Id = UUID();
SET @slug1UserNumber1Id = UUID();
SET @slug2UserNumber1Id = UUID();
SET @slug3UserNumber1Id = UUID();
SET @slug4UserNumber1Id = UUID();
SET @slug5UserNumber1Id = UUID();
SET @slug1UserNumber2Id = UUID();
SET @slug2UserNumber2Id = UUID();
SET @slug3UserNumber2Id = UUID();
SET @slug4UserNumber2Id = UUID();
SET @slug1UserNumber3Id = UUID();
SET @slug2UserNumber3Id = UUID();
SET @slug3UserNumber3Id = UUID();
SET @slug1UserNumber4Id = UUID();
SET @slug2UserNumber4Id = UUID();
SET @slug1UserNumber5Id = UUID();
SET @slugAllUsersNumber1Id = UUID();
SET @slugAllUsersNumber2Id = UUID();
SET @slugAllUsersNumber3Id = UUID();
SET @slugAllUsersNumber4Id = UUID();
SET @slugAllUsersNumber5Id = UUID();
SET @slugAllUsersNumber6Id = UUID();
SET @slugAllUsersNumber7Id = UUID();
SET @slugAllUsersNumber8Id = UUID();
SET @slugAllUsersNumber9Id = UUID();
SET @slug1dayAgoUserNumber1Id = UUID();
SET @slug2daysAgoUserNumber1Id = UUID();
SET @slug3daysAgoUserNumber1Id = UUID();
SET @slug4daysAgoUserNumber1Id = UUID();
SET @slug5daysAgoUserNumber1Id = UUID();
SET @slug6daysAgoUserNumber1Id = UUID();
SET @slug7daysAgoUserNumber1Id = UUID();
INSERT INTO post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) VALUES    
   (@post1UserNumber1Id, @memberUserNumber1Id, 'text', 'This concerns the 1st post from User1', 'This concerns the 1st post from User1', null, @slug1UserNumber1Id, 5, 3, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post2UserNumber1Id, @memberUserNumber1Id, 'text', 'This concerns the 2nd post from User1', 'This concerns the 2nd post from User1', null, @slug2UserNumber1Id, 4, 2, '2023-10-03 09:10:10', '2023-10-03 09:10:10'),
   (@post3UserNumber1Id, @memberUserNumber1Id, 'text', 'This concerns the 3rd post from User1', 'This concerns the 3rd post from User1', null, @slug3UserNumber1Id, 3, 1, '2023-10-03 02:10:10', '2023-10-03 02:10:10'),
   (@post4UserNumber1Id, @memberUserNumber1Id, 'text', 'This concerns the 4th post from User1', 'This concerns the 4th post from User1', null, @slug4UserNumber1Id, 2, 0, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post5UserNumber1Id, @memberUserNumber1Id, 'text', 'This concerns the 5th post from User1', 'This concerns the 5th post from User1', null, @slug5UserNumber1Id, 1, 0, '2023-10-03 10:10:10', '2023-10-03 10:10:10'),
   (@post1UserNumber2Id, @memberUserNumber2Id, 'text', 'This concerns the 1st post from User2', 'This concerns the 1st post from User2', null, @slug1UserNumber2Id, 3, 1, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post2UserNumber2Id, @memberUserNumber2Id, 'text', 'This concerns the 2nd post from User2', 'This concerns the 2nd post from User2', null, @slug2UserNumber2Id, 2, 1, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post3UserNumber2Id, @memberUserNumber2Id, 'text', 'This concerns the 3rd post from User2', 'This concerns the 3rd post from User2', null, @slug3UserNumber2Id, 1, 0, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post4UserNumber2Id, @memberUserNumber2Id, 'text', 'This concerns the 4th post from User2', 'This concerns the 4th post from User2', null, @slug4UserNumber2Id, 0, 0, '2023-10-03 12:10:10', '2023-10-03 12:10:10'),
   (@post1UserNumber3Id, @memberUserNumber3Id, 'text', 'This concerns the 1st post from User3', 'This concerns the 1st post from User3', null, @slug1UserNumber3Id, 1, 1, '2023-10-03 02:10:10', '2023-10-03 02:10:10'),
   (@post2UserNumber3Id, @memberUserNumber3Id, 'text', 'This concerns the 2nd post from User3', 'This concerns the 2nd post from User3', null, @slug2UserNumber3Id, 2, 1, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post3UserNumber3Id, @memberUserNumber3Id, 'text', 'This concerns the 3rd post from User3', 'This concerns the 3rd post from User3', null, @slug3UserNumber3Id, -1, 0, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post1UserNumber4Id, @memberUserNumber4Id, 'text', 'This concerns the 1st post from User4', 'This concerns the 1st post from User4', null, @slug1UserNumber4Id, -1, 1, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post2UserNumber4Id, @memberUserNumber4Id, 'text', 'This concerns the 2nd post from User4', 'This concerns the 2nd post from User4', null, @slug2UserNumber4Id, -2, 1, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post1UserNumber5Id, @memberUserNumber5Id, 'text', 'This concerns the 1st post from User5', 'This concerns the 1st post from User5', null, @slug1UserNumber5Id, -3, 0, '2023-10-03 08:10:10', '2023-10-03 08:10:10'),
   (@post1dayAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 1 day ago by User1', 'Post made 1 day ago by User1', null, @slug1dayAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 1 DAY), DATE_SUB(current_timestamp, INTERVAL 1 DAY)),
   (@post2daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 2 days ago by User1', 'Post made 2 days ago by User1', null, @slug2daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 2 DAY), DATE_SUB(current_timestamp, INTERVAL 2 DAY)),
   (@post3daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 3 days ago by User1', 'Post made 3 days ago by User1', null, @slug3daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 3 DAY), DATE_SUB(current_timestamp, INTERVAL 3 DAY)),
   (@post4daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 4 days ago by User1', 'Post made 4 days ago by User1', null, @slug4daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 4 DAY), DATE_SUB(current_timestamp, INTERVAL 4 DAY)),
   (@post5daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 5 days ago by User1', 'Post made 5 days ago by User1', null, @slug5daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 5 DAY), DATE_SUB(current_timestamp, INTERVAL 5 DAY)),
   (@post6daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 6 days ago by User1', 'Post made 6 days ago by User1', null, @slug6daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 6 DAY), DATE_SUB(current_timestamp, INTERVAL 6 DAY)),
   (@post7daysAgoUserNumber1Id, @memberUserNumber1Id, 'text', 'Post made 7 days ago by User1', 'Post made 7 days ago by User1', null, @slug7daysAgoUserNumber1Id, 4, 0, DATE_SUB(current_timestamp, INTERVAL 7 DAY), DATE_SUB(current_timestamp, INTERVAL 7 DAY)),
   (@postAllUsersNumber1Id, @memberUserNumber1Id, 'text', 'This concerns All Users Post in the same day - post from User1', 'This concerns All Users Post in the same day - post from User1', null, @slugAllUsersNumber1Id, 0, 9, current_timestamp, current_timestamp),
   (@postAllUsersNumber2Id, @memberUserNumber2Id, 'text', 'This concerns All Users Post in the same day - post from User2', 'This concerns All Users Post in the same day - post from User2', null, @slugAllUsersNumber2Id, 0, 0, current_timestamp, current_timestamp),
   (@postAllUsersNumber3Id, @memberUserNumber3Id, 'text', 'This concerns All Users Post in the same day - post from User3', 'This concerns All Users Post in the same day - post from User3', null, @slugAllUsersNumber3Id, 0, 0, current_timestamp, current_timestamp), 
   (@postAllUsersNumber4Id, @memberUserNumber4Id, 'text', 'This concerns All Users Post in the same day - post from User4', 'This concerns All Users Post in the same day - post from User4', null, @slugAllUsersNumber4Id, 0, 0, current_timestamp, current_timestamp),
   (@postAllUsersNumber5Id, @memberUserNumber5Id, 'text', 'This concerns All Users Post in the same day - post from User5', 'This concerns All Users Post in the same day - post from User5', null, @slugAllUsersNumber5Id, 0, 0, current_timestamp, current_timestamp),
   (@postAllUsersNumber6Id, @memberUserNumber6Id, 'text', 'This concerns All Users Post in the same day - post from User6', 'This concerns All Users Post in the same day - post from User6', null, @slugAllUsersNumber6Id, 0, 0, current_timestamp, current_timestamp),
   (@postAllUsersNumber7Id, @memberUserNumber7Id, 'text', 'This concerns All Users Post in the same day - post from User7', 'This concerns All Users Post in the same day - post from User7', null, @slugAllUsersNumber7Id, 0, 0, current_timestamp, current_timestamp),
   (@postAllUsersNumber8Id, @memberUserNumber8Id, 'text', 'This concerns All Users Post in the same day - post from User8', 'This concerns All Users Post in the same day - post from User8', null, @slugAllUsersNumber8Id, 0, 0, current_timestamp, current_timestamp), 
   (@postAllUsersNumber9Id, @memberUserNumber9Id, 'text', 'This concerns All Users Post in the same day - post from User9', 'This concerns All Users Post in the same day - post from User9', null, @slugAllUsersNumber9Id, 0, 0, current_timestamp, current_timestamp);
SET @comment1UserNumber1Id = UUID();
SET @comment2UserNumber1Id = UUID();
SET @comment1UserNumber2Id = UUID();
SET @comment2UserNumber2Id = UUID();
SET @comment1UserNumber3Id = UUID();
SET @comment2UserNumber3Id = UUID();
SET @comment1UserNumber4Id = UUID();
SET @comment2UserNumber4Id = UUID();
SET @comment1UserNumber6Id = UUID();
SET @comment2UserNumber6Id = UUID();
SET @commentAllUsersNumber1Id = UUID();
SET @commentAllUsersNumber2Id = UUID();
SET @commentAllUsersNumber3Id = UUID();
SET @commentAllUsersNumber4Id = UUID();
SET @commentAllUsersNumber5Id = UUID();
SET @commentAllUsersNumber6Id = UUID();
SET @commentAllUsersNumber7Id = UUID();
SET @commentAllUsersNumber8Id = UUID();
SET @commentAllUsersNumber9Id = UUID();
INSERT INTO comment (comment_id, parent_comment_id, member_id, post_id, text, points, created_at, updated_at)VALUES
(@comment1UserNumber1Id, null, @memberUserNumber1Id, @post1UserNumber2Id, 'This concerns the 1st comment from User1', 5, '2023-10-15 08:10:10', '2023-10-15 08:10:10'),
(@comment2UserNumber1Id, null, @memberUserNumber1Id, @post2UserNumber2Id, 'This concerns the 2nd comment from User1', 4, '2023-10-15 09:10:10', '2023-10-15 09:10:10'),
(@comment1UserNumber2Id, null, @memberUserNumber2Id, @post1UserNumber1Id, 'This concerns the 1st comment from User2', 3, '2023-10-15 10:10:10', '2023-10-15 10:10:10'),
(@comment2UserNumber2Id, null, @memberUserNumber2Id, @post2UserNumber1Id, 'This concerns the 2nd comment from User2', 2, '2023-10-15 11:10:10', '2023-10-15 11:10:10'),
(@comment1UserNumber3Id, null, @memberUserNumber3Id, @post1UserNumber1Id, 'This concerns the 1st comment from User3', 1, '2023-10-15 12:10:10', '2023-10-15 12:10:10'),
(@comment2UserNumber3Id, null, @memberUserNumber3Id, @post2UserNumber4Id, 'This concerns the 2nd comment from User3', 0, '2023-10-15 13:10:10', '2023-10-15 13:10:10'),
(@comment1UserNumber4Id, null, @memberUserNumber4Id, @post1UserNumber3Id, 'This concerns the 1st comment from User4', -1, '2023-10-15 14:10:10', '2023-10-15 14:10:10'),
(@comment2UserNumber4Id, null, @memberUserNumber4Id, @post2UserNumber3Id, 'This concerns the 2nd comment from User4', -2, '2023-10-15 15:10:10', '2023-10-15 15:10:10'),
(@comment1UserNumber6Id, null, @memberUserNumber6Id, @post1UserNumber1Id, 'This concerns the 1st comment from User6', -3, '2023-10-15 16:10:10', '2023-10-15 16:10:10'),
(@comment2UserNumber6Id, null, @memberUserNumber6Id, @post2UserNumber1Id, 'This concerns the 2nd comment from User6', -4, '2023-10-15 17:10:10', '2023-10-15 17:10:10'),
(@commentAllUsersNumber1Id, null, @memberUserNumber1Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User1', 0, current_timestamp, current_timestamp),
(@commentAllUsersNumber2Id, null, @memberUserNumber2Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User2', 0, current_timestamp, current_timestamp),
(@commentAllUsersNumber3Id, null, @memberUserNumber3Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User3', 0, current_timestamp, current_timestamp),
(@commentAllUsersNumber4Id, null, @memberUserNumber4Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User4', 0, current_timestamp, current_timestamp), 
(@commentAllUsersNumber5Id, null, @memberUserNumber5Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User5', 0, current_timestamp, current_timestamp), 
(@commentAllUsersNumber6Id, null, @memberUserNumber6Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User6', 0, current_timestamp, current_timestamp),
(@commentAllUsersNumber7Id, null, @memberUserNumber7Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User7', 0, current_timestamp, current_timestamp), 
(@commentAllUsersNumber8Id, null, @memberUserNumber8Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User8', 0, current_timestamp, current_timestamp), 
(@commentAllUsersNumber9Id, null, @memberUserNumber9Id, @postAllUsersNumber1Id, 'This concerns All Users Post in the same day - comment from User9', 0, current_timestamp, current_timestamp);

