import React from 'react';
import { Layout } from '../shared/layout';
import Header from '../shared/components/header/components/Header';
import { BackNavigation } from '../shared/components/header';
import { ProfileButton } from '../modules/users/components/profileButton';
import { User } from '../modules/users/models/user';
import { UsersState } from '../modules/users/redux/states';
import { ForumState } from '../modules/forum/redux/states';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersOperators from '../modules/users/redux/operators';
import * as forumOperators from '../modules/forum/redux/operators';
import withLogoutHandling from '../modules/users/hocs/withLogoutHandling';
import withVoting from '../modules/forum/hocs/withVoting';
import { RouteComponentProps } from 'react-router';
import { Post } from '../modules/forum/models/Post';
import './styles.css'; // Importe o arquivo CSS com os estilos;
import { PostRow } from '../modules/forum/components/posts/postRow';
import { Member } from '../modules/forum/models/Member';

interface StatisticsPageProps
  extends usersOperators.IUserOperators,
    forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
  // getPosts: () => void;
  // getComments: () => void;
}

interface IReactRouterParams {
  username: string;
  email: string;
}

export class StatisticsPage extends React.Component<
  StatisticsPageProps & RouteComponentProps<IReactRouterParams>,
  any
> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: 0,
      comments: 0,
      username: '',
      email: '',
      userId: {},
      loggedin: false,
      inputPostComDay: '', //Campo de input da data para posts com mais comentários
      postsByDate: [], //Array de posts com mais comentários
      isPostsComDaySubmitted: false, //Validação ou State de submissão - cliquei no botão de Refresh no campo Posts with more Comments
      isPostsComDayValidated: false, //Validação ou State de validação - data inserida no campo de input de Posts with more Comments
      inputAverageCommentsByDate: '', //Campo de input da data para a média de comentários
      isAverageCommentsByDateValidated: false, //Validação ou State de validação - data inserida no campo de input da média de comentários
      averageCommentsByDate: 0, //Número da média de comentários
      isAverageCommentsByDateSubmitted: false, //Validação ou State de submissão - cliquei no botão de Refresh no campo Average of Comments for a Specific Day
      percentageOfPostsWithoutComments: 0,
      hourWiththeMostPostsCreatedInaDay: 0,
      inputAveragePostsByDate: '',
      averagePostsByDate: 0,
      isAveragePostsByDateSubmitted: false,
      isAveragePostsByDateValidDate: false,
      loading: false,
      UsernamesWithoutPostsAndWithoutCommentsByDate: [],
      topMembersWithMoreCommentsDate: null,
      topMembersWithMoreComments: null
    };
  }

  getUserProfile() {
    this.props.getUserProfile();
    const user = this.props.users.user as User;
    this.setState({
      ...this.state,
      userId: user.userId
    });
  }

  getcreateUser() {
    return this.props.createUser;
  }

  //Chamo o serviço que me devolve os posts com mais comentários
  getPostsByDate(event: any) {
    event.preventDefault(); //O ecrã não recarregar quando clicarmos no botão
    const date = this.state.inputPostComDay; //Campo de input da data
    this.setState({ ...this.state, loading: true }); //Atualização do state de loading

    //console.log(date);
    this.props.getPostsByDate(date).then((res) => {
      //Chamada à API/Serviço
      //console.log(res);
      this.setState({
        ...this.state,
        postsByDate: res, //Retorno da API/Serviço - pots com mais comentários
        isPostsComDaySubmitted: true, //Atualização do state de submissão - cliquei no botão de Refresh no camp Posts with more Comments
        loading: false //Atualização do state de loading
      });
    });
  }

  //Chamo o serviço que me devolve a média de comentários
  getAverageCommentsByDate(event: any) {
    event.preventDefault(); //O ecrã não faz refresh
    const date = this.state.inputAverageCommentsByDate; //Campo de input da data
    this.setState({ ...this.state, loading: true }); //Atualização do state de loading

    //console.log(date);
    this.props.getAverageCommentsByDate(date).then((res) => {
      //Chamada à API/Serviço
      //console.log(res);
      this.setState({
        ...this.state,
        averageCommentsByDate: res, //Retorno da API/Serviço - número da média de comentários
        isAverageCommentsByDateSubmitted: true, //Atualização do state de submissão - cliquei no botão de Refresh no camp Average of Comments for a Specific Day
        loading: false //Atualização do state de loading
      });
    });
  }
  getTopMembers(event: React.MouseEvent) {
    event.preventDefault();
    const date = this.state.topMembersWithMoreCommentsDate;

    if (date != null) {
      this.props.getTopMembersWithMoreComments(date).then((res) => {
        this.setState({
          ...this.state,
          topMembersWithMoreComments: res
        });
      });
    }
  }
  getPercentageOfPostsWithoutCommentsByDate(event: any) {
    event.preventDefault();
    const date = this.state.inputPostComDay;
    console.log(date);
    this.props.getPercentageOfPostsWithoutCommentsByDate(date).then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        percentageOfPostsWithoutComments: res,
        isPostsComDaySubmitted: true
      });
    });
  }

  getListOfUsernamesWithoutPostsAndWithoutCommentsByDate(event: any) {
    event.preventDefault();
    const date = this.state.inputPostComDay;
    console.log(date);
    this.props
      .getListOfUsernamesWithoutPostsAndWithoutCommentsByDate(date)
      .then((res) => {
        console.log('>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(res));
        this.setState({
          ...this.state,
          UsernamesWithoutPostsAndWithoutCommentsByDate: res,
          isPostsComDaySubmitted: true
        });
      });
  }

  getHourWitheMostPostsCreadInaDay(event: any) {
    event.preventDefault();
    const date = this.state.inputPostComDay;
    console.log(date);
    this.props.getHourWiththeMostPostsCreatedInaDay(date).then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        hourWiththeMostPostsCreatedInaDay: res,
        isPostsComDaySubmitted: true,
        loading: false
      });
    });
  }

  getAveragePostsByDate(event: any) {
    event.preventDefault();
    const date = this.state.inputAveragePostsByDate;
    //console.log(date);
    this.props.getAveragePostsByDate(date).then((res) => {
      //console.log('result', res);
      this.setState({
        ...this.state,
        averagePostsByDate: res,
        isAveragePostsByDateSubmitted: true
      });
    });
    //console.log('state', this.state.averagePostsByDate);
  }

  getPosts() {
    return this.props.getRecentPosts();
  }

  getComments() {
    return this.props.getComments('');
  }

  async componentDidMount() {
    this.getUserProfile();
    this.getcreateUser();
    this.getPosts();
    this.getComments();
    this.setState({
      ...this.state,
      username: this.props.match.params.username,
      email: this.props.match.params.email
    });
  }

  handleTopMembersDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    this.setState({
      ...this.state,
      topMembersWithMoreCommentsDate: date
    });
  };

  handleInputChange = (event: any) => {
    const value = event.target.value;
    const dateRegEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    this.setState({
      ...this.state,
      inputPostComDay: value,
      isPostsComDayValidated: dateRegEx.test(value) && !isNaN(Date.parse(value))
    });
  };

  handleInputAverageCommentsByDateChange = (event: any) => {
    const value = event.target.value;
    const dateRegEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    this.setState({
      ...this.state,
      inputAverageCommentsByDate: value,
      isAverageCommentsByDateValidated:
        dateRegEx.test(value) && !isNaN(Date.parse(value))
    });
  };

  handleAveragePostsByDateInputChange = (event: any) => {
    const value = event.target.value;
    const dateRegEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    this.setState({
      ...this.state,
      inputAveragePostsByDate: value,
      isAveragePostsByDateSubmitted: false,
      isAveragePostsByDateValidDate:
        dateRegEx.test(value) && !isNaN(Date.parse(value)),
      loading: true
    });
  };

  render() {
    const {
      posts,
      comments,
      postsByDate,
      isPostsComDaySubmitted,
      averagePostsByDate,
      isAveragePostsByDateSubmitted,
      isAveragePostsByDateValidDate,
      inputAveragePostsByDate,
      isAverageCommentsByDateSubmitted,
      loading,
      topMembersWithMoreComments
    } = this.state;
    const { users, forum } = this.props;

    return (
      <Layout>
        <div className="header-container flex flex-row flex-center flex-between">
          <BackNavigation text="Back to all discussions" to="/" />
        </div>
        <div className="header-container flex flex-row flex-center flex-even">
          <Header
            title="Domain-Driven Designers"
            subtitle="Where awesome Domain-Driven Designers are made"
          />
          <ProfileButton
            isLoggedIn={users.isAuthenticated}
            username={
              users.isAuthenticated ? (users.user as User).username : ''
            }
            onLogout={() => this.props.logout()}
          />
        </div>
        <div className="statistics"></div>
        <h1>Statistics</h1>
        <div className="statisticsMetrics">
          {/* Sandra */}
          <div className="avgComDayMetric">
            <h2>Average of Comments for a Specific Day</h2>
            <form action="post">
              <label htmlFor="avgComDay">Date</label>
              <input
                type="date"
                id="avgComDay"
                name="avgComDay"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleInputAverageCommentsByDateChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button
                onClick={(e) => this.getAverageCommentsByDate(e)}
                disabled={!this.state.isAverageCommentsByDateValidated}
              >
                Refresh
              </button>
            </form>
            {loading ? <p>Loading...</p> : <></>}
            <div>
              {isAverageCommentsByDateSubmitted ? (
                <>
                  <>
                    <table cellPadding={5}>
                      <tr>
                        <th>Day</th>
                        <th>Average comments</th>
                      </tr>
                      <tr>
                        <td align="center">
                          {this.state.inputAverageCommentsByDate}
                        </td>
                        <td align="center">
                          {this.state.averageCommentsByDate
                            ? this.state.averageCommentsByDate
                            : 0}
                        </td>
                      </tr>
                    </table>
                  </>
                </>
              ) : null}
            </div>
          </div>
          {/* Sandra */}
          <br></br>
          <br></br>
          <hr></hr>
          <div className="avgPostDay">
            <h2>Average of Posts for a Specific Day</h2>
            <form action="post">
              <label htmlFor="avgPostDay">Date</label>&nbsp;
              <input
                type="date"
                id="avgPostDay"
                name="avgPostDay"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleAveragePostsByDateInputChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button
                onClick={(e) => this.getAveragePostsByDate(e)}
                disabled={!this.state.isAveragePostsByDateValidDate}
              >
                Refresh
              </button>
            </form>
            <br />

            {isAveragePostsByDateSubmitted ? (
              <>
                <table cellPadding={5}>
                  <tr>
                    <th>Day</th>
                    <th>Average posts</th>
                  </tr>
                  <tr>
                    <td align="center">{this.state.inputAveragePostsByDate}</td>
                    <td align="center">{this.state.averagePostsByDate}</td>
                  </tr>
                </table>
              </>
            ) : (
              <></>
            )}

            {inputAveragePostsByDate != '' && !isAveragePostsByDateValidDate ? (
              <>
                <div>Invalid date!</div>
              </>
            ) : (
              <></>
            )}
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          {/* Camilla */}
          <div className="postMostComDay">
            <h2>Post with more Comments</h2>
            <form action="post">
              <label htmlFor="postMostComDay">Date</label>
              <input
                type="date"
                id="postMostComDay"
                name="postMostComDay"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleInputChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button
                onClick={(e) => this.getPostsByDate(e)}
                disabled={!this.state.isPostsComDayValidated}
              >
                Refresh
              </button>
            </form>
            {loading ? <p>Loading...</p> : <></>}
            {isPostsComDaySubmitted ? (
              <>
                {postsByDate.length > 0 ? (
                  <>
                    <div>
                      {postsByDate[0].numComments > 0 &&
                        postsByDate.map((post: Post) => (
                          <PostRow
                            key={post.slug}
                            {...post}
                            onUpvoteClicked={() =>
                              this.props.upvotePost(post.slug)
                            }
                            onDownvoteClicked={() =>
                              this.props.downvotePost(post.slug)
                            }
                            isLoggedIn={users.isAuthenticated}
                            activeFilter={this.state.activeFilter}
                            maxComments={0}
                          ></PostRow>
                        ))}
                      {postsByDate[0].numComments === 0 ? ( //Se o post não tiver comentários ou não existem cmentários naquele dia
                        <>
                          <div>
                            <p>No comments found</p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p>No posts found</p>
                    </div>
                  </>
                )}
              </>
            ) : null}
          </div>
          {/* Camilla */}
          <br></br>
          <br></br>
          <hr></hr>
          {/* Joao Rocha */}
          <div className="statistics__content__item">
            <h2>Top 3 Members that published more Comments</h2>
            <form action="post">
              <label htmlFor="topMembersDate">Date</label>
              <input
                type="date"
                id="topMembersDate"
                name="topMembersDate"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleTopMembersDateInput}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button onClick={(e) => this.getTopMembers(e)}>Refresh</button>
            </form>
            {topMembersWithMoreComments == null ? (
              <></>
            ) : (
              topMembersWithMoreComments.map(
                (m: { member: Member; commentCount: number }) => (
                  <div>
                    {m.member.username}: {m.commentCount}
                  </div>
                )
              )
            )}
          </div>
          <br></br>
          <br></br>
          <hr></hr>

          <div className="getListOfUsernamesWithoutPostsAndWithoutCommentsByDate">
            <h2>Members without any activity (Posts and Comments)</h2>
            <form
              onSubmit={
                this.getListOfUsernamesWithoutPostsAndWithoutCommentsByDate
              }
            >
              <label htmlFor="ListOfUsernames">Date</label>
              <input
                type="date"
                id="ListOfUsernames"
                name="ListOfUsernames"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleInputChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              {this.state.UsernamesWithoutPostsAndWithoutCommentsByDate !==
                null && (
                <div>
                  <table cellPadding={5}>
                    <tr>
                      <td>
                        <ol>
                          {this.state.UsernamesWithoutPostsAndWithoutCommentsByDate.map(
                            (item: any, index: Number) => (
                              <li>{item}</li>
                            )
                          )}
                        </ol>
                      </td>
                    </tr>
                  </table>
                </div>
              )}
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button
                onClick={(e) =>
                  this.getListOfUsernamesWithoutPostsAndWithoutCommentsByDate(e)
                }
              >
                Refresh
              </button>
            </form>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <div className="percentageOfPostsWithoutComments">
            <h2>Percentage of Posts without any Comment</h2>
            <form action="post">
              <label htmlFor="percentage">Date:</label>
              <input
                type="Date"
                id="percentage"
                name="percentage"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleInputChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button
                onClick={(e) =>
                  this.getPercentageOfPostsWithoutCommentsByDate(e)
                }
              >
                Refresh
              </button>
            </form>
            {this.state.percentageOfPostsWithoutComments !== null && (
              <div>
                <p>
                  Percentage: {this.state.percentageOfPostsWithoutComments}%
                </p>
              </div>
            )}
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <div className="getHourWitheMostPostsCreadInaDay">
            <h2>Hour of the day with more Posts</h2>
            <form action="post">
              <label htmlFor="HourWithe">Date:</label>
              <input
                type="Date"
                id="HourWithe"
                name="HourWithe"
                placeholder="yyyy-mm-dd"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleInputChange}
              ></input>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <button onClick={(e) => this.getHourWitheMostPostsCreadInaDay(e)}>
                Refresh
              </button>
            </form>
            {loading ? <p>Loading...</p> : <></>}
            {this.state.hourWiththeMostPostsCreatedInaDay !== null && (
              <div>
                <p>hours: {this.state.hourWiththeMostPostsCreatedInaDay}:00</p>
              </div>
            )}
            <br></br>

            <br></br>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps({
  users,
  forum
}: {
  users: UsersState;
  forum: ForumState;
}) {
  return {
    users,
    forum
  };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators,
      ...forumOperators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(withLogoutHandling(withVoting(StatisticsPage)));
