import React, { Component } from 'react';

class NewsFooter extends Component {

    render() {

        let commentParsed = "";
        if (this.props.data.commentsCount === 0) {
            commentParsed = "Sin Comentarios"
        } else {
            if (this.props.data.commentsCount < 100) {
                commentParsed = this.props.data.commentsCount + " Comentarios"
            } else {
                commentParsed = "99+ Comentarios"
            }
        }
        return (
            <div className="post_info">{this.props.data.date} | Posted by <a href="#">{this.props.data.owner}</a> | <a href="#">{commentParsed}</a></div>
        );
    }

}

export default NewsFooter;
