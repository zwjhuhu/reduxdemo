import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import {addComment, deleteComment, getComments} from '../../redux/actions'

class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    }
    componentDidMount () {
        this.props.getComments();
    }

    render () {
        const {comments, addComment, deleteComment} = this.props;
        return (
            <div>
                <header>
                    <div>
                        <div>
                            <h1>请发表评论</h1>
                        </div>
                    </div>
                </header>
                <div>
                    <CommentAdd addComment={addComment}/>
                    <CommentList comments={comments} deleteComment={deleteComment}/>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({comments: state}),
    {addComment, deleteComment, getComments}
)(App)