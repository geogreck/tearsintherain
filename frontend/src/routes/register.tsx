import { redirect } from "react-router-dom";
import Register from "../components/Register";

export async function action({ request, params }: any) {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    console.log(updates)
    sessionStorage.setItem('logged', 'true')
    let user_id = '1'
    sessionStorage.setItem('user_id', user_id)
    return redirect(`/profile/${user_id}`)
}

export default function RegisterRoute() {
    return (
        <Register />
    )
}