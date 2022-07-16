// Import hooks
import { useDispatch, useSelector } from "react-redux";

// Import slice actions
import { uiSliceActions } from "../store/slices/uiSlice";

// Import RootState type
import { RootState } from "../store/Store";

export const useModals = () => {
    const dispatch = useDispatch()

    const showLogin = useSelector((state: RootState) => state.uiSlice.loginModalIsVisible)
    const showSignup = useSelector((state: RootState) => state.uiSlice.signupModalIsVisible)

    const openLoginHandler = () => {
        dispatch(uiSliceActions.showLoginModal())
    }

    const openSignupHandler = () => {
        dispatch(uiSliceActions.showSignupModal())
    }


    const closeLoginHandler = () => {
        dispatch(uiSliceActions.hideLoginModal())
    }

    const closeSignupHandler = () => {
        dispatch(uiSliceActions.hideSignupModal())
    }

    return {
        showLogin,
        showSignup,
        openLoginHandler,
        closeLoginHandler,
        openSignupHandler,
        closeSignupHandler,
    }
}
