import { IComment } from "../models"

interface CommentProps {
    comment: IComment
}

export default function Comment(props: CommentProps) {
    return (
        <>
        <div className="row">
                <span className="fw-bold">{props?.comment.author_name} <span className="fw-normal mx-2 my-3" > {props?.comment.text}</span></span>
            </div>
        </>
    )
}