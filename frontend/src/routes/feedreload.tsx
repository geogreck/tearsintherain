import React from "react";
import { Navigate, redirect, useLoaderData } from "react-router";

export async function loader({params}:any) {
    let filter = params.filter
    return filter
}

export default function FeedReload() {
    const res = useLoaderData()
    return <Navigate to={`/${res}`} replace={true}/>
}

