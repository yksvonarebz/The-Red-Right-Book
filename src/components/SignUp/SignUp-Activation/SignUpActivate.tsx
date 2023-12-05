import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activateSignUp } from "../../../redux/action-creators/user_action_creator";

const SignUpActivate = () => {
  const {uid = '', token = ''} = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activateSignUp({uid, token}))
  }, [uid, token])
  return (
    <div>
      Please, Stand By...
    </div>
  )
}

export { SignUpActivate };
