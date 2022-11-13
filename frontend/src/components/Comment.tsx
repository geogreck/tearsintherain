import { IComment } from "../models"

interface CommentProps {
    comment: IComment
}

export default function Comment(props: CommentProps) {
    return (
        <>
        <div className="row d-inline">
                <span className="fw-bold">{props?.comment.author} <span className="fw-normal" > {props?.comment.content}</span></span>
            </div>
        </>
    )
}