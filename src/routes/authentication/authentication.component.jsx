// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  //   useEffect(() => {
  //     //we call signinwithGoogleRedirect directly but we need to declar this useeffect to be able to get the last
  //     //auth operation that was done when the app redirected
  //     const fetchResult = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     fetchResult();
  //   }, []);

 

  return (
    <div>
      <h1>Sign In Page</h1>

     <SignInForm/>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
