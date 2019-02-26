import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    state = {
        username: '',
        content: ''
    }

    handleSubmit = (event) => {
        const comment = this.state;
        this.props.addComment(comment);
        this.setState({username:'',content:''});
        event.preventDefault();
    }

    handleNameChange = (event) => {
        const username = event.target.value;
        this.setState({username});
    }

    handleContentChange = (event) => {
        const content = event.target.value;
        this.setState({content});
    }

    render () {
        const {username,content} = this.state;
        return (
            <div>
                <form>
                <div>
                    <label>用户名: </label>
                    <input type="text" placeholder="用户名" value={username} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>评论内容: </label>
                    <textarea rows="6" placeholder="评论内容" value={content} onChange={this.handleContentChange}></textarea>
                </div>
                <div>
                    <div>
                        <button onClick={this.handleSubmit}>添加</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}