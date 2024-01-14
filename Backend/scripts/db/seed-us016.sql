USE data_dev;
insert into base_user (base_user_id, user_email, is_email_verified, username, user_password, is_admin_user, is_deleted, created_at, updated_at)	values ('d5f147b8-8344-11ee-99bc-0242ac120002', 'user1@isep.ipp.pt', true, 'user1', '$2a$10$tYaLhCk1wNZxe.K6rED/9uuvHRjeVx1.3BhnzwNIUCTuzVGtHaq7C', false, false, now(), now());
insert into member (member_id, member_base_id, reputation, created_at, updated_at) values('e9e645d5-8344-11ee-99bc-0242ac120002', 'd5f147b8-8344-11ee-99bc-0242ac120002', 10, now(), now());
insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (uuid(), 'e9e645d5-8344-11ee-99bc-0242ac120002', 'link', 'sapo', null, 'www.sapo.pt',         concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-11-12 10:10:01' as datetime), now());
insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (uuid(), 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post001', 'Text -Post001', null,    concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 5, cast('2023-11-14 10:11:01' as datetime), now());
insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (uuid(), 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post001', 'Text -Post001', null,    concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 5, cast('2023-11-14 10:11:01' as datetime), now());
insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (uuid(), 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post001', 'Text -Post001', null,    concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-11-15 10:11:01' as datetime), now());