import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useService = (ServiceFactory) => {
    const { token } = useContext(AuthContext)

    const service = ServiceFactory(token)

    return service
}