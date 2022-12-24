import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectAuthState,
  updateProfileAction,
} from "../redux-toolkit/auth/auth-slice";
import { useAppSelector } from "../redux-toolkit/hooks";

function AboutPage() {
  const { profile, email } = useAppSelector(selectAuthState);
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateProfileAction());
  };
  return (
    <>
      <h1>About Page</h1>
      <p>
        Hello {profile} {email}
      </p>
      <button onClick={update}>Update Profile</button>
      <Link to={"/"} replace={true}>
        กลับหน้าหลัก
      </Link>
    </>
  );
}

export default AboutPage;
