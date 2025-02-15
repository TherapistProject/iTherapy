import { Alert } from 'flowbite-react/lib/esm/components';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Poster from '../Signup/Images/online-meetings.png';

function Login() {
  const required = true;
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, signInWithFacebook, signInWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      await logIn(emailRef.current.value, passwordRef.current.value);
      setLoginSuccess(true);
      const timer = setTimeout(() => {
        return navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    } catch (firebaseError) {
      return setError(firebaseError.message.split(':')[1].split('(')[0].trim());
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await signInWithGoogle();
      setLoginSuccess(true);
      const timer = setTimeout(() => {
        return navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    } catch (firebaseError) {
      return setError(firebaseError.message.split(':')[1].split('(')[0].trim());
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setError('');
      await signInWithFacebook();
      setLoginSuccess(true);
      const timer = setTimeout(() => {
        return navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    } catch (firebaseError) {
      return setError(firebaseError.message.split(':')[1].split('(')[0].trim());
    }
  };

  return (
    <section className="bg-stone-50 px-12 py-10  dark:bg-gray-900 grid md:grid-cols-2  w-screen  items-center md:space-x-10">
      <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 lg:ml-36 dark:bg-gray-800 dark:border-gray-700">
        {loginSuccess && (
          <Alert color="success">
            <span>
              <span className="font-medium">Alert!</span> you successfully
              logged in
            </span>
          </Alert>
        )}
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login 🐣
          </h1>
          {error && (
            <Alert color="failure">
              <span>
                <span className="font-medium">Alert!</span> {error}{' '}
              </span>
            </Alert>
          )}
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 placeholder:text-gray-400 placeholder:font-normal text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={required}
                  ref={emailRef}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300  placeholder:text-gray-400 placeholder:font-normal text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={required}
                  ref={passwordRef}
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>

            <div className="flex gap-5 justify-center items-center">
              <hr className="my-2 w-36 h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="text-lg font-light text-gray-500 dark:text-gray-400">
                or
              </span>
              <hr className="my-2 w-36 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <button
                onClick={handleFacebookLogin}
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  />
                </svg>
                Login with Facebook
              </button>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-5 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
                Login with Google
              </button>
            </div>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account?{' '}
              <a
                href="signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden md:block md:max-w-md lg:max-w-lg">
        <img src={Poster} alt="poster" />
      </div>
    </section>
  );
}

export default Login;
