import { useAuthContext } from "../contexts/AuthContext"

// Example for HOC. It receives a component and returns a new Component with the same props as the original component 
export function withAuth(Component) {
    function WrapperComponent(props) {
        const authContext = useAuthContext()
        return(
            <Component {...props} auth={authContext}/>
        )
    }

    return WrapperComponent
}