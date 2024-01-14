import { PostService } from './postService';
import { authService } from '../../users/services';
import { CommentService } from './commentService';
import { MemberService } from './memberService';

const commentService = new CommentService(authService);
const postService = new PostService(authService);
const memberService = new MemberService(authService);

export { postService, commentService, memberService };
