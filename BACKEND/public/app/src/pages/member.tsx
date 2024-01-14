import React from 'react';
import { Layout } from '../shared/layout';
import Header from '../shared/components/header/components/Header';
import { BackNavigation } from '../shared/components/header';
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

import './styles.css'; // Importe o arquivo CSS com os estilos
import { MemberButton } from '../modules/users/components/memberButton';

interface MemberPageProps
  extends usersOperators.IUserOperators,
    forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
  setNumPosts: (numPosts: number) => void;
  setNumComments: (numComments: number) => void;
}

interface IReactRouterParams {
  username: string;
  email: string;
}

export class MemberPage extends React.Component<
  MemberPageProps & RouteComponentProps<IReactRouterParams>,
  any
> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: 0,
      comments: 0,
      username: '',
      email: '',
      loggedin: false
      //getListOfUsernamesWithoutPostsAndWithoutComments: []
    };
  }

  getUserProfile() {
    return this.props.getUserProfile();
  }

  getcreateUser() {
    return this.props.createUser;
  }

  getUserName() {
    return this.props.match.params.username;
  }

  getEmail() {
    return this.props.match.params.email;
  }
  handleDeleteUserClick = (username: string) => {
    this.props.deleteUser(username);
    window.location.reload();
    console.log(`Usuário a ser deletado: ${username}`);
  };

  async componentDidMount() {
    this.getUserName();
    this.getEmail();
    const username = this.getUserName();
    const email = this.getEmail();

    try {
      await this.setNumPosts(username);
      await this.setNumComments(username);
      await this.props.getListOfUsernamesWithoutPostsAndWithoutComments();
    } catch (error) {
      console.error('Erro ao buscar número de posts ou comentários:', error);
    }
  }
  setNumPosts(username: string) {
    fetch('http://localhost:5001/api/v1/members/postcount/' + username)
      .then((res) => res.json())
      .then((data) => {
        const numPosts = data.memberPostCount;

        this.setState({ posts: numPosts });
      })
      .catch((error) => {
        console.error('Erro ao buscar número de posts:', error);
      });
  }

  setNumComments(username: string) {
    fetch('http://localhost:5001/api/v1/members/commentcount/' + username)
      .then((res) => res.json())
      .then((data) => {
        const numComments = data.memberCommentCount;

        this.setState({ comments: numComments });
      })
      .catch((error) => {
        console.error('Erro ao buscar número de comentários:', error);
      });
  }

  render() {
    const username = this.getUserName();
    const email = this.getEmail();
    const loggedin = '(Currently Logged In)';

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
          <MemberButton
            isLoggedIn={this.props.users.isAuthenticated}
            username={
              this.props.users.isAuthenticated
                ? (this.props.users.user as User).username
                : ''
            }
            onLogout={() => this.props.logout()}
          />
        </div>
        <h1>
          Member:{' '}
          {this.props.users.isAuthenticated
            ? (this.props.users.user as User).userId
            : ''}
        </h1>
        <h4>
          {this.props.users.isAuthenticated && (
            <strong>
              <mark>
                <em>{loggedin}</em>
              </mark>
            </strong>
          )}
        </h4>
        <table
          style={{
            width: '50%',
            border: '2px solid black',
            borderRadius: '25px',
            padding: '20px',
            margin: '10px'
          }}
        >
          <tr>
            <td>
              <h3>
                <u>Details</u>
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Username:</strong>
            </td>

            <td>{username}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Email:</strong>
            </td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
            <td>
              <strong>Nr. Posts:</strong>
            </td>
            <td>{this.state.posts}</td>
          </tr>
          <tr>
            <td>
              <strong>Nr. Comments:</strong>
            </td>
            <td>{this.state.comments}</td>
          </tr>
        </table>
        <br />
        <br />
        <hr />
        <div className="User-most-comeented">
          <h1>Most Commented User</h1>
          <table
            style={{
              width: '50%',
              borderRadius: '25px',
              padding: '20px',
              margin: '10px'
            }}
          >
            <tr>
              <td>
                <strong>Username:</strong>
              </td>
              <td>adminuser</td>
            </tr>
            <tr>
              <td>
                <strong>Nr. Comments:</strong>
              </td>
              <td>4</td>
            </tr>
          </table>
          <br />
          <hr />
        </div>
        <div className="getListOfUsernamesWithoutPostsAndWithoutComments">
          <h2>Members without any activity (Posts and Comments)</h2>

          {this.props.forum.usernames === null ||
          this.props.forum.usernames.length === 0 ? (
            <p>No usernames available</p>
          ) : (
            <div>
              <table cellPadding={10}>
                <tbody>
                  <tr>
                    <td>
                      <ol>
                        {this.props.forum.usernames.map((item, index) => (
                          <li key={index}>
                            {item}
                            <button
                              className="deleteButton"
                              onClick={() =>
                                this.handleDeleteUserClick(item.toString())
                              }
                            >
                              Delete
                            </button>
                          </li>
                        ))}
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <p>&nbsp;&nbsp;&nbsp;</p>
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
)(withLogoutHandling(withVoting(MemberPage)));
