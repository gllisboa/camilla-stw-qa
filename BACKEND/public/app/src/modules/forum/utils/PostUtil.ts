
import { Post } from '../models/Post';
import { PostDTO } from '../dtos/postDTO';
import validator from 'validator';

export class PostUtil {
  public static maxTextLength: number = 10000;
  public static minTextLength: number = 20;

  public static maxTitleLength: number = 85;
  public static minTitleLength: number = 2;

  public static maxLinkLength: number = 500;
  public static minLinkLength: number = 8;

  public static validateURL(url: string): boolean {
    return validator.isURL(url, { protocols: ['http', 'https','ftp'], require_protocol: true });
  }

  public static computePostAfterUpvote(post: Post): Post {
    return {
      ...post,
      wasUpvotedByMe: post.wasUpvotedByMe ? false : true,
      points: post.wasUpvotedByMe ? post.points - 1 : post.points + 1,
    };
  }

  public static computePostAfterDownvote(post: Post): Post {
    return {
      ...post,
      wasDownvotedByMe: post.wasDownvotedByMe ? false : true,
      points: post.wasDownvotedByMe ? post.points + 1 : post.points - 1,
    };
  }

  public static toViewModel(dto: PostDTO): Post {
    return {
      slug: dto.slug,
      title: dto.title,
      createdAt: dto.createdAt,
      postAuthor: dto.memberPostedBy.user.username,
      numComments: dto.numComments,
      points: dto.points,
      type: dto.type,
      text: dto.text,
      link: dto.link,
      wasUpvotedByMe: dto.wasUpvotedByMe,
      wasDownvotedByMe: dto.wasDownvotedByMe,
    };
  }
}
