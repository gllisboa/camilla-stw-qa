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
SET @postNonFuncTest1_UserNumber1Id = UUID();
SET @postNonFuncTest2_UserNumber1Id = UUID();
SET @postNonFuncTest3_UserNumber1Id = UUID();
SET @postNonFuncTest4_UserNumber1Id = UUID();
SET @postNonFuncTest5_UserNumber1Id = UUID();
SET @postNonFuncTest1_UserNumber2Id = UUID();
SET @postNonFuncTest2_UserNumber2Id = UUID();
SET @postNonFuncTest3_UserNumber2Id = UUID();
SET @postNonFuncTest4_UserNumber2Id = UUID();
SET @postNonFuncTest5_UserNumber2Id = UUID();
SET @postNonFuncTest1_UserNumber3Id = UUID();
SET @postNonFuncTest2_UserNumber3Id = UUID();
SET @postNonFuncTest3_UserNumber3Id = UUID();
SET @postNonFuncTest4_UserNumber3Id = UUID();
SET @postNonFuncTest5_UserNumber3Id = UUID();
SET @postNonFuncTest1_UserNumber4Id = UUID();
SET @postNonFuncTest2_UserNumber4Id = UUID();
SET @postNonFuncTest3_UserNumber4Id = UUID();
SET @postNonFuncTest4_UserNumber4Id = UUID();
SET @postNonFuncTest5_UserNumber4Id = UUID();
SET @postNonFuncTest1_UserNumber5Id = UUID();
SET @postNonFuncTest2_UserNumber5Id = UUID();
SET @postNonFuncTest3_UserNumber5Id = UUID();
SET @postNonFuncTest4_UserNumber5Id = UUID();
SET @postNonFuncTest5_UserNumber5Id = UUID();
SET @postNonFuncTest1_post1dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest2_post2dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest3_post3dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest4_post4dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest5_post5dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest6_post6dayAgo_UserNumber6Id = UUID();
SET @postNonFuncTest7_post7dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest1_UserNumber1Id = UUID();
SET @slugNonFuncTest2_UserNumber1Id = UUID();
SET @slugNonFuncTest3_UserNumber1Id = UUID();
SET @slugNonFuncTest4_UserNumber1Id = UUID();
SET @slugNonFuncTest5_UserNumber1Id = UUID();
SET @slugNonFuncTest1_UserNumber2Id = UUID();
SET @slugNonFuncTest2_UserNumber2Id = UUID();
SET @slugNonFuncTest3_UserNumber2Id = UUID();
SET @slugNonFuncTest4_UserNumber2Id = UUID();
SET @slugNonFuncTest5_UserNumber2Id = UUID();
SET @slugNonFuncTest1_UserNumber3Id = UUID();
SET @slugNonFuncTest2_UserNumber3Id = UUID();
SET @slugNonFuncTest3_UserNumber3Id = UUID();
SET @slugNonFuncTest4_UserNumber3Id = UUID();
SET @slugNonFuncTest5_UserNumber3Id = UUID();
SET @slugNonFuncTest1_UserNumber4Id = UUID();
SET @slugNonFuncTest2_UserNumber4Id = UUID();
SET @slugNonFuncTest3_UserNumber4Id = UUID();
SET @slugNonFuncTest4_UserNumber4Id = UUID();
SET @slugNonFuncTest5_UserNumber4Id = UUID();
SET @slugNonFuncTest1_UserNumber5Id = UUID();
SET @slugNonFuncTest2_UserNumber5Id = UUID();
SET @slugNonFuncTest3_UserNumber5Id = UUID();
SET @slugNonFuncTest4_UserNumber5Id = UUID();
SET @slugNonFuncTest5_UserNumber5Id = UUID();
SET @slugNonFuncTest1_UserNumber6Id = UUID();
SET @slugNonFuncTest2_UserNumber6Id = UUID();
SET @slugNonFuncTest3_UserNumber6Id = UUID();
SET @slugNonFuncTest4_UserNumber6Id = UUID();
SET @slugNonFuncTest5_UserNumber6Id = UUID();
SET @slugNonFuncTest1_post1dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest2_post2dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest3_post3dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest4_post4dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest5_post5dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest6_post6dayAgo_UserNumber6Id = UUID();
SET @slugNonFuncTest7_post7dayAgo_UserNumber6Id = UUID();
INSERT INTO post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) VALUES    
   (@postNonFuncTest1_UserNumber1Id, @memberUserNumber1Id, 'text', 'Non-Func-Test - post 1 from User1', 'Non-Func-Test - post 1 from User1', null, @slugNonFuncTest1_UserNumber1Id, 100, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest2_UserNumber1Id, @memberUserNumber1Id, 'text', 'Non-Func-Test - post 2 from User1', 'Non-Func-Test - post 2 from User1', null, @slugNonFuncTest2_UserNumber1Id, 90, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest3_UserNumber1Id, @memberUserNumber1Id, 'text', 'Non-Func-Test - post 3 from User1', 'Non-Func-Test - post 3 from User1', null, @slugNonFuncTest3_UserNumber1Id, 80, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest4_UserNumber1Id, @memberUserNumber1Id, 'text', 'Non-Func-Test - post 4 from User1', 'Non-Func-Test - post 4 from User1', null, @slugNonFuncTest4_UserNumber1Id, 70, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest5_UserNumber1Id, @memberUserNumber1Id, 'text', 'Non-Func-Test - post 5 from User1', 'Non-Func-Test - post 5 from User1', null, @slugNonFuncTest5_UserNumber1Id, 60, 3, '2023-12-01 10:10:10', '2023-12-01 10:10:10'),
   (@postNonFuncTest1_UserNumber2Id, @memberUserNumber2Id, 'text', 'Non-Func-Test - post 1 from User2', 'Non-Func-Test - post 1 from User2', null, @slugNonFuncTest1_UserNumber2Id, 50, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest2_UserNumber2Id, @memberUserNumber2Id, 'text', 'Non-Func-Test - post 2 from User2', 'Non-Func-Test - post 2 from User2', null, @slugNonFuncTest2_UserNumber2Id, 40, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest3_UserNumber2Id, @memberUserNumber2Id, 'text', 'Non-Func-Test - post 3 from User2', 'Non-Func-Test - post 3 from User2', null, @slugNonFuncTest3_UserNumber2Id, 30, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest4_UserNumber2Id, @memberUserNumber2Id, 'text', 'Non-Func-Test - post 4 from User2', 'Non-Func-Test - post 4 from User2', null, @slugNonFuncTest4_UserNumber2Id, 20, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest5_UserNumber2Id, @memberUserNumber2Id, 'text', 'Non-Func-Test - post 5 from User2', 'Non-Func-Test - post 5 from User2', null, @slugNonFuncTest5_UserNumber2Id, 10, 3, '2023-12-01 10:10:20', '2023-12-01 10:10:20'),
   (@postNonFuncTest1_UserNumber3Id, @memberUserNumber3Id, 'text', 'Non-Func-Test - post 1 from User3', 'Non-Func-Test - post 1 from User3', null, @slugNonFuncTest1_UserNumber3Id, 9, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest2_UserNumber3Id, @memberUserNumber3Id, 'text', 'Non-Func-Test - post 2 from User3', 'Non-Func-Test - post 2 from User3', null, @slugNonFuncTest2_UserNumber3Id, 8, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest3_UserNumber3Id, @memberUserNumber3Id, 'text', 'Non-Func-Test - post 3 from User3', 'Non-Func-Test - post 3 from User3', null, @slugNonFuncTest3_UserNumber3Id, 7, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest4_UserNumber3Id, @memberUserNumber3Id, 'text', 'Non-Func-Test - post 4 from User3', 'Non-Func-Test - post 4 from User3', null, @slugNonFuncTest4_UserNumber3Id, 6, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest5_UserNumber3Id, @memberUserNumber3Id, 'text', 'Non-Func-Test - post 5 from User3', 'Non-Func-Test - post 5 from User3', null, @slugNonFuncTest5_UserNumber3Id, 5, 3, '2023-12-01 10:10:30', '2023-12-01 10:10:30'),
   (@postNonFuncTest1_UserNumber4Id, @memberUserNumber4Id, 'text', 'Non-Func-Test - post 1 from User4', 'Non-Func-Test - post 1 from User4', null, @slugNonFuncTest1_UserNumber4Id, 4, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest2_UserNumber4Id, @memberUserNumber4Id, 'text', 'Non-Func-Test - post 2 from User4', 'Non-Func-Test - post 2 from User4', null, @slugNonFuncTest2_UserNumber4Id, 3, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest3_UserNumber4Id, @memberUserNumber4Id, 'text', 'Non-Func-Test - post 3 from User4', 'Non-Func-Test - post 3 from User4', null, @slugNonFuncTest3_UserNumber4Id, 2, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest4_UserNumber4Id, @memberUserNumber4Id, 'text', 'Non-Func-Test - post 4 from User4', 'Non-Func-Test - post 4 from User4', null, @slugNonFuncTest4_UserNumber4Id, 1, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest5_UserNumber4Id, @memberUserNumber4Id, 'text', 'Non-Func-Test - post 5 from User4', 'Non-Func-Test - post 5 from User4', null, @slugNonFuncTest5_UserNumber4Id, 0, 3, '2023-12-01 10:10:40', '2023-12-01 10:10:40'),
   (@postNonFuncTest1_UserNumber5Id, @memberUserNumber5Id, 'text', 'Non-Func-Test - post 1 from User5', 'Non-Func-Test - post 1 from User5', null, @slugNonFuncTest1_UserNumber5Id, -1, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest2_UserNumber5Id, @memberUserNumber5Id, 'text', 'Non-Func-Test - post 2 from User5', 'Non-Func-Test - post 2 from User5', null, @slugNonFuncTest2_UserNumber5Id, -2, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest3_UserNumber5Id, @memberUserNumber5Id, 'text', 'Non-Func-Test - post 3 from User5', 'Non-Func-Test - post 3 from User5', null, @slugNonFuncTest3_UserNumber5Id, -3, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest4_UserNumber5Id, @memberUserNumber5Id, 'text', 'Non-Func-Test - post 4 from User5', 'Non-Func-Test - post 4 from User5', null, @slugNonFuncTest4_UserNumber5Id, -4, 3, current_timestamp, current_timestamp),
   (@postNonFuncTest5_UserNumber5Id, @memberUserNumber5Id, 'text', 'Non-Func-Test - post 5 from User5', 'Non-Func-Test - post 5 from User5', null, @slugNonFuncTest5_UserNumber5Id, -5, 3, '2023-12-01 10:10:50', '2023-12-01 10:10:50'),
   (@postNonFuncTest1_post1dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 1 day ago from User6', 'Non-Func-Test - post from 1 day ago from User6', null, @slugNonFuncTest1_post1dayAgo_UserNumber6Id, 99, 0, DATE_SUB(current_timestamp, INTERVAL 1 DAY), DATE_SUB(current_timestamp, INTERVAL 1 DAY)),
   (@postNonFuncTest2_post2dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 2 days ago from User6', 'Non-Func-Test - post from 2 days ago from User6', null, @slugNonFuncTest2_post2dayAgo_UserNumber6Id, 98, 0, DATE_SUB(current_timestamp, INTERVAL 2 DAY), DATE_SUB(current_timestamp, INTERVAL 2 DAY)),
   (@postNonFuncTest3_post3dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 3 days ago from User6', 'Non-Func-Test - post from 3 days ago from User6', null, @slugNonFuncTest3_post3dayAgo_UserNumber6Id, 97, 0, DATE_SUB(current_timestamp, INTERVAL 3 DAY), DATE_SUB(current_timestamp, INTERVAL 3 DAY)),
   (@postNonFuncTest4_post4dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 4 days ago from User6', 'Non-Func-Test - post from 4 days ago from User6', null, @slugNonFuncTest4_post4dayAgo_UserNumber6Id, 96, 0, DATE_SUB(current_timestamp, INTERVAL 4 DAY), DATE_SUB(current_timestamp, INTERVAL 4 DAY)),
   (@postNonFuncTest5_post5dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 5 days ago from User6', 'Non-Func-Test - post from 5 days ago from User6', null, @slugNonFuncTest5_post5dayAgo_UserNumber6Id, 95, 0, DATE_SUB(current_timestamp, INTERVAL 5 DAY), DATE_SUB(current_timestamp, INTERVAL 5 DAY)),
   (@postNonFuncTest6_post6dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 6 days ago from User6', 'Non-Func-Test - post from 6 days ago from User6', null, @slugNonFuncTest6_post6dayAgo_UserNumber6Id, 94, 0, DATE_SUB(current_timestamp, INTERVAL 6 DAY), DATE_SUB(current_timestamp, INTERVAL 6 DAY)),
   (@postNonFuncTest7_post7dayAgo_UserNumber6Id, @memberUserNumber6Id, 'text', 'Non-Func-Test - post from 7 days ago from User6', 'Non-Func-Test - post from 7 days ago from User6', null, @slugNonFuncTest7_post7dayAgo_UserNumber6Id, 93, 0, DATE_SUB(current_timestamp, INTERVAL 7 DAY), DATE_SUB(current_timestamp, INTERVAL 7 DAY));   
SET @commentNonFuncTest1_Post1FromUserNumber1_UserNumber6Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber1_UserNumber6Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber1_UserNumber6Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber1_UserNumber6Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber1_UserNumber6Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber2_UserNumber6Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber2_UserNumber6Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber2_UserNumber6Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber2_UserNumber6Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber2_UserNumber6Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber3_UserNumber6Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber3_UserNumber6Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber3_UserNumber6Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber3_UserNumber6Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber3_UserNumber6Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber4_UserNumber6Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber4_UserNumber6Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber4_UserNumber6Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber4_UserNumber6Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber4_UserNumber6Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber5_UserNumber6Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber5_UserNumber6Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber5_UserNumber6Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber5_UserNumber6Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber5_UserNumber6Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber1_UserNumber7Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber1_UserNumber7Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber1_UserNumber7Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber1_UserNumber7Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber1_UserNumber7Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber2_UserNumber7Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber2_UserNumber7Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber2_UserNumber7Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber2_UserNumber7Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber2_UserNumber7Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber3_UserNumber7Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber3_UserNumber7Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber3_UserNumber7Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber3_UserNumber7Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber3_UserNumber7Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber4_UserNumber7Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber4_UserNumber7Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber4_UserNumber7Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber4_UserNumber7Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber4_UserNumber7Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber5_UserNumber7Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber5_UserNumber7Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber5_UserNumber7Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber5_UserNumber7Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber5_UserNumber7Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber1_UserNumber8Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber1_UserNumber8Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber1_UserNumber8Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber1_UserNumber8Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber1_UserNumber8Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber2_UserNumber8Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber2_UserNumber8Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber2_UserNumber8Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber2_UserNumber8Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber2_UserNumber8Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber3_UserNumber8Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber3_UserNumber8Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber3_UserNumber8Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber3_UserNumber8Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber3_UserNumber8Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber4_UserNumber8Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber4_UserNumber8Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber4_UserNumber8Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber4_UserNumber8Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber4_UserNumber8Id = UUID();
SET @commentNonFuncTest1_Post1FromUserNumber5_UserNumber8Id = UUID();
SET @commentNonFuncTest2_Post2FromUserNumber5_UserNumber8Id = UUID();
SET @commentNonFuncTest3_Post3FromUserNumber5_UserNumber8Id = UUID();
SET @commentNonFuncTest4_Post4FromUserNumber5_UserNumber8Id = UUID();
SET @commentNonFuncTest5_Post5FromUserNumber5_UserNumber8Id = UUID();
INSERT INTO comment (comment_id, parent_comment_id, member_id, post_id, text, points, created_at, updated_at)VALUES
(@commentNonFuncTest1_Post1FromUserNumber1_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest1_UserNumber1Id, 'Non-Func-Test - comment 1 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber1_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest2_UserNumber1Id, 'Non-Func-Test - comment 2 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber1_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest3_UserNumber1Id, 'Non-Func-Test - comment 3 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber1_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest4_UserNumber1Id, 'Non-Func-Test - comment 4 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber1_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest5_UserNumber1Id, 'Non-Func-Test - comment 5 from User6', 0, '2023-12-02 10:10:10', '2023-12-02 10:10:10'),
(@commentNonFuncTest1_Post1FromUserNumber2_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest1_UserNumber2Id, 'Non-Func-Test - comment 1 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber2_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest2_UserNumber2Id, 'Non-Func-Test - comment 2 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber2_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest3_UserNumber2Id, 'Non-Func-Test - comment 3 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber2_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest4_UserNumber2Id, 'Non-Func-Test - comment 4 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber2_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest5_UserNumber2Id, 'Non-Func-Test - comment 5 from User6', 0, '2023-12-02 10:10:20', '2023-12-02 10:10:20'),
(@commentNonFuncTest1_Post1FromUserNumber3_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest1_UserNumber3Id, 'Non-Func-Test - comment 1 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber3_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest2_UserNumber3Id, 'Non-Func-Test - comment 2 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber3_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest3_UserNumber3Id, 'Non-Func-Test - comment 3 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber3_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest4_UserNumber3Id, 'Non-Func-Test - comment 4 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber3_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest5_UserNumber3Id, 'Non-Func-Test - comment 5 from User6', 0, '2023-12-02 10:10:30', '2023-12-02 10:10:30'),
(@commentNonFuncTest1_Post1FromUserNumber4_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest1_UserNumber4Id, 'Non-Func-Test - comment 1 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber4_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest2_UserNumber4Id, 'Non-Func-Test - comment 2 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber4_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest3_UserNumber4Id, 'Non-Func-Test - comment 3 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber4_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest4_UserNumber4Id, 'Non-Func-Test - comment 4 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber4_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest5_UserNumber4Id, 'Non-Func-Test - comment 5 from User6', 0, '2023-12-02 10:10:40', '2023-12-02 10:10:40'),
(@commentNonFuncTest1_Post1FromUserNumber5_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest1_UserNumber5Id, 'Non-Func-Test - comment 1 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber5_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest2_UserNumber5Id, 'Non-Func-Test - comment 2 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber5_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest3_UserNumber5Id, 'Non-Func-Test - comment 3 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber5_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest4_UserNumber5Id, 'Non-Func-Test - comment 4 from User6', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber5_UserNumber6Id, null, @memberUserNumber6Id, @postNonFuncTest5_UserNumber5Id, 'Non-Func-Test - comment 5 from User6', 0, '2023-12-02 10:10:50', '2023-12-02 10:10:50'),
(@commentNonFuncTest1_Post1FromUserNumber1_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest1_UserNumber1Id, 'Non-Func-Test - comment 1 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber1_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest2_UserNumber1Id, 'Non-Func-Test - comment 2 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber1_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest3_UserNumber1Id, 'Non-Func-Test - comment 3 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber1_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest4_UserNumber1Id, 'Non-Func-Test - comment 4 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber1_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest5_UserNumber1Id, 'Non-Func-Test - comment 5 from User7', 0, '2023-12-02 10:11:00', '2023-12-02 10:11:00'),
(@commentNonFuncTest1_Post1FromUserNumber2_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest1_UserNumber2Id, 'Non-Func-Test - comment 1 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber2_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest2_UserNumber2Id, 'Non-Func-Test - comment 2 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber2_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest3_UserNumber2Id, 'Non-Func-Test - comment 3 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber2_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest4_UserNumber2Id, 'Non-Func-Test - comment 4 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber2_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest5_UserNumber2Id, 'Non-Func-Test - comment 5 from User7', 0, '2023-12-02 10:11:10', '2023-12-02 10:11:10'),
(@commentNonFuncTest1_Post1FromUserNumber3_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest1_UserNumber3Id, 'Non-Func-Test - comment 1 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber3_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest2_UserNumber3Id, 'Non-Func-Test - comment 2 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber3_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest3_UserNumber3Id, 'Non-Func-Test - comment 3 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber3_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest4_UserNumber3Id, 'Non-Func-Test - comment 4 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber3_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest5_UserNumber3Id, 'Non-Func-Test - comment 5 from User7', 0, '2023-12-02 10:11:20', '2023-12-02 10:11:20'),
(@commentNonFuncTest1_Post1FromUserNumber4_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest1_UserNumber4Id, 'Non-Func-Test - comment 1 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber4_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest2_UserNumber4Id, 'Non-Func-Test - comment 2 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber4_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest3_UserNumber4Id, 'Non-Func-Test - comment 3 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber4_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest4_UserNumber4Id, 'Non-Func-Test - comment 4 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber4_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest5_UserNumber4Id, 'Non-Func-Test - comment 5 from User7', 0, '2023-12-02 10:11:30', '2023-12-02 10:11:30'),
(@commentNonFuncTest1_Post1FromUserNumber5_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest1_UserNumber5Id, 'Non-Func-Test - comment 1 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber5_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest2_UserNumber5Id, 'Non-Func-Test - comment 2 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber5_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest3_UserNumber5Id, 'Non-Func-Test - comment 3 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber5_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest4_UserNumber5Id, 'Non-Func-Test - comment 4 from User7', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber5_UserNumber7Id, null, @memberUserNumber7Id, @postNonFuncTest5_UserNumber5Id, 'Non-Func-Test - comment 5 from User7', 0, '2023-12-02 10:11:40', '2023-12-02 10:11:40'),
(@commentNonFuncTest1_Post1FromUserNumber1_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest1_UserNumber1Id, 'Non-Func-Test - comment 1 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber1_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest2_UserNumber1Id, 'Non-Func-Test - comment 2 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber1_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest3_UserNumber1Id, 'Non-Func-Test - comment 3 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber1_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest4_UserNumber1Id, 'Non-Func-Test - comment 4 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber1_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest5_UserNumber1Id, 'Non-Func-Test - comment 5 from User8', 0, '2023-12-02 10:11:50', '2023-12-02 10:11:50'),
(@commentNonFuncTest1_Post1FromUserNumber2_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest1_UserNumber2Id, 'Non-Func-Test - comment 1 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber2_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest2_UserNumber2Id, 'Non-Func-Test - comment 2 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber2_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest3_UserNumber2Id, 'Non-Func-Test - comment 3 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber2_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest4_UserNumber2Id, 'Non-Func-Test - comment 4 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber2_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest5_UserNumber2Id, 'Non-Func-Test - comment 5 from User8', 0, '2023-12-02 10:12:00', '2023-12-02 10:12:00'),
(@commentNonFuncTest1_Post1FromUserNumber3_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest1_UserNumber3Id, 'Non-Func-Test - comment 1 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber3_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest2_UserNumber3Id, 'Non-Func-Test - comment 2 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber3_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest3_UserNumber3Id, 'Non-Func-Test - comment 3 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber3_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest4_UserNumber3Id, 'Non-Func-Test - comment 4 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber3_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest5_UserNumber3Id, 'Non-Func-Test - comment 5 from User8', 0, '2023-12-02 10:12:00', '2023-12-02 10:12:00'),
(@commentNonFuncTest1_Post1FromUserNumber4_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest1_UserNumber4Id, 'Non-Func-Test - comment 1 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber4_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest2_UserNumber4Id, 'Non-Func-Test - comment 2 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber4_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest3_UserNumber4Id, 'Non-Func-Test - comment 3 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber4_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest4_UserNumber4Id, 'Non-Func-Test - comment 4 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber4_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest5_UserNumber4Id, 'Non-Func-Test - comment 5 from User8', 0, '2023-12-02 10:12:10', '2023-12-02 10:12:10'),
(@commentNonFuncTest1_Post1FromUserNumber5_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest1_UserNumber5Id, 'Non-Func-Test - comment 1 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest2_Post2FromUserNumber5_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest2_UserNumber5Id, 'Non-Func-Test - comment 2 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest3_Post3FromUserNumber5_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest3_UserNumber5Id, 'Non-Func-Test - comment 3 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest4_Post4FromUserNumber5_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest4_UserNumber5Id, 'Non-Func-Test - comment 4 from User8', 0, current_timestamp, current_timestamp),
(@commentNonFuncTest5_Post5FromUserNumber5_UserNumber8Id, null, @memberUserNumber8Id, @postNonFuncTest5_UserNumber5Id, 'Non-Func-Test - comment 5 from User8', 0, '2023-12-02 10:12:20', '2023-12-02 10:12:20');

