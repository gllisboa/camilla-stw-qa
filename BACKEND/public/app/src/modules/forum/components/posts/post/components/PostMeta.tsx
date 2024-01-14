import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Post } from '../../../../models/Post';
import '../styles/PostMeta.sass';
import PostFilters, {
  PostFilterType
} from '../../../../components/posts/filters/components/PostFilters';
import { is } from 'sequelize/types/lib/operators';

export interface PostMetaProps extends Post {
  includeLink?: boolean;
  activeFilter: PostFilterType;
  isloggedIn: boolean;
  maxComments: number;
  isHighlighted?: boolean;
  isHightlightedRed?: boolean;
  isHightlightedGreen?: boolean;
}

const PostMeta: React.FC<PostMetaProps> = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isHighlightedRed, setIsHighlightedRed] = useState(false);
  const [isHighlightedGreen, setIsHighlightedGreen] = useState(false);
  const [maxComments, setMaxComments] = useState(0);

  useEffect(() => {
    const isWithinOneThirdAndTwoThirdsOfMaxComments =
      props.numComments !== undefined &&
      props.numComments >= props.maxComments / 3 &&
      props.numComments <= (2 * props.maxComments) / 3;

    setIsHighlighted(
      props.isloggedIn === true &&
        props.activeFilter === 'ASC' &&
        props.numComments !== undefined &&
        props.numComments > 0 &&
        isWithinOneThirdAndTwoThirdsOfMaxComments
    );

    /* posts that have less than 1/3 of the comments from the post with the 
    highest comments on the webpage to be highlighted with a red background.*/
    const isWithinOneThirdMaxComments =
      props.numComments !== undefined &&
      props.numComments <= props.maxComments / 3;

    setIsHighlightedRed(
      props.isloggedIn === true &&
        props.activeFilter === 'NEW' &&
        props.numComments !== undefined &&
        isWithinOneThirdMaxComments
    );

    /* posts that have more than 2/3 of the comments from the post with the 
    highest comments on the webpage to be highlighted with a green background.*/
    const isWithinTwoThirdMaxComments =
      props.numComments !== undefined &&
      props.numComments !== 0 &&
      props.numComments >= (2 * props.maxComments) / 3;

    /* update property HighlightedGreen */
    setIsHighlightedGreen(
      //isHighlightedGreen is true if:
      props.isloggedIn === true && //User is logged in
        props.activeFilter === 'POPULAR' && //Filter is set to popular
        props.numComments !== undefined && //Number of comments is not undefined
        isWithinTwoThirdMaxComments //Number of comments is greater than 2/3 of the max comments
    );
  }, [
    props.numComments,
    props.isloggedIn,
    props.activeFilter,
    props.maxComments
  ]);

  const isOlderThanTwoDays =
    moment().diff(moment(props.createdAt), 'days') >= 2;
  const isWithinSevenDays = moment().diff(moment(props.createdAt), 'days') < 7;
  const isOlderThanFiveDays =
    moment().diff(moment(props.createdAt), 'days') > 5;
  const isLessThanTwoDays = moment().diff(moment(props.createdAt), 'days') < 2;

  let textClass = '';

  if (
    props.isloggedIn === true &&
    props.activeFilter === 'NEW' &&
    isOlderThanTwoDays &&
    isWithinSevenDays
  ) {
    textClass = 'yellow-text';
  } else if (
    props.isloggedIn === true &&
    props.activeFilter === 'POPULAR' &&
    isOlderThanFiveDays
  ) {
    textClass = 'red-text';
  } else if (
    props.isloggedIn === true &&
    props.activeFilter === 'ASC' &&
    isLessThanTwoDays
  ) {
    textClass = 'green-text';
  }

  return (
    <div
      id={`${
        isHighlighted
          ? 'highlighted-yellow'
          : isHighlightedRed //If highlightedGreen is true, then add the class highlighted-red
          ? 'highlighted-red'
          : isHighlightedGreen //If highlightedGreen is true, then add the class highlighted-green
          ? 'highlighted-green'
          : ''
      }`}
      className={`post-row-content ${textClass} ${
        isHighlighted
          ? 'highlighted-yellow'
          : isHighlightedRed //If highlightedGreen is true, then add the class highlighted-red
          ? 'highlighted-red'
          : isHighlightedGreen //If highlightedGreen is true, then add the class highlighted-green
          ? 'highlighted-green'
          : ''
      }`}
    >
      {props.includeLink === false ? (
        ''
      ) : (
        <Link to={`/discuss/${props.slug}`} className="title">
          "{props.title}"
          {props.link ? <span className="link">[link]</span> : ''}
        </Link>
      )}
      <div className="post-row-meta">
        <span className={`post-date ${textClass}`}>
          {moment(props.createdAt).fromNow()}
        </span>
        {' | '}
        {`by `}
        <Link to={`/member/${props.postAuthor}`}>{props.postAuthor}</Link>
        {' | '}

        {props.isloggedIn &&
        props.activeFilter === 'POPULAR' &&
        props.numComments === 0 ? (
          <Link to={`/discuss/${props.slug}`} className="please-comment-me">
            Please comment me
          </Link>
        ) : (
          <span className="post-comment">{props.numComments} comments</span>
        )}
      </div>
    </div>
  );
};

export default PostMeta;
