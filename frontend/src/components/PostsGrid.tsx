import React from 'react'
import { IMoment } from '../models'

interface GridProps {
    moments: IMoment[]
}

function PostsGrid(props: GridProps) {
    return (
        
        <div className=" container my-1 p-1 bg-body">
            <div className="d-flex justify-content-center">
                <img src="logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
                <img src="logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
                <img src="logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
            </div>
            <div className="d-flex justify-content-center">
                <img src="public/logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
                <img src="logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
                <img src="logo512.png" className="col-3 border border-secondary rounded m-2 shadow"></img>
            </div>
        </div>
    )
}

export default PostsGrid
