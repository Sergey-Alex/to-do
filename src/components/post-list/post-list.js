import React from 'react'
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDeleted, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) =>{
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}
                    onDelete = {() => onDeleted(id)}
                    onToggleImportant = {()=> onToggleImportant(id)}
                    onToggleLiked = {()=> onToggleLiked(id)}
                />
            </li>
        )
    })

    return (
        <ListGroup className = 'app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList
