import react from "react";
import EventComp from "../components/EventComp";
import { subbs } from "../data/local";

export default function NotificationsRoute() {
    return (
        <>
        <EventComp sub_event={subbs[0]} />
        </>
    )
}