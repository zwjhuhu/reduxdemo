import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    deleteComment = () => {
        const {index,comment,deleteComment} = this.props;

        if(window.confirm(`是否要删除${comment.username}的评论?`)){
            deleteComment(index)
        }
    }

    render () {
        const {comment} = this.props;
        return (
            <li>
                <div>
                    <a href="javascript:;" onClick={this.deleteComment}>删除</a>
                </div>
                <p><span>{comment.username}</span><span>说: </span></p>
                <p>{comment.content}</p>
            </li>
        )
    }

}



