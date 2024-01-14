import React from 'react';
import '../styles/PostRow.sass';
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';
import PostFilters, {
  PostFilterType
} from '../../../../components/posts/filters/components/PostFilters';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
  activeFilter: PostFilterType;
  maxComments: number;
}

const PostRow: React.FC<PostRowProps> = (props) => {
  // Lógica para determinar se o post deve ser destacado
  const isHighlighted =
    props.isLoggedIn &&
    props.activeFilter === 'ASC' &&
    props.numComments !== undefined &&
    props.numComments > 0 &&
    props.numComments >= props.maxComments / 3 &&
    props.numComments <= (2 * props.maxComments) / 3;

  return (
    <div className={`post-row ${isHighlighted ? 'highlighted' : ''}`}>
      <Points
        onUpvoteClicked={() => props.onUpvoteClicked()}
        onDownvoteClicked={() => props.onDownvoteClicked()}
        points={props.points}
        isLoggedIn={props.isLoggedIn}
      />
      <PostMeta
        {...props}
        isloggedIn={props.isLoggedIn}
        isHighlighted={isHighlighted}
      />
    </div>
  );
};

export default PostRow;
