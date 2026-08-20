import { useEffect, useState } from "react";
import LoginForm from "../components/UserLogin.jsx";
import SignupForm from "../components/UserSignup.jsx";

function Account() {
  const [showForm, setShowForm] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex-1 flex flex-col items-center justify-center">

      {/* User is logged in */}
      {user ? (
        <div>
          <h1 className="text-3xl font-bold">
            Welcome
          </h1>

          <p className="text-left"><strong>Name: </strong> {user.name}</p>
          <p className="text-left"><strong>Email: </strong> {user.email}</p>

          <button
            type="button"
            className="bg-black text-white px-4 py-2 mt-4 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {/* Get Started */}
          {!showForm && (
            <div className="flex flex-col items-center justify-center gap-12">
              <h1 className="md:text-[45px] text-[30px] font-bold !mb-[50px]">
                Get Started
              </h1>

              <div className="flex gap-2 flex-col items-center justify-center">

                <button
                  type="button"
                  onClick={() => setShowForm("login")}
                  className="bg-[#FF8500] text-white font-regular cursor-pointer py-2 rounded-[100px] text-[15px] w-[220px]"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm("signup")}
                  className="bg-[#FF8500] text-white font-regular cursor-pointer py-2 rounded-[100px] text-[15px] w-[220px]"
                >
                  Sign Up
                </button>

              </div>
            </div>
          )}

          {/* Login */}
          {showForm === "login" && (
            <LoginForm
              setShowForm={setShowForm}
              setUser={setUser}
            />
          )}

          {/* Signup */}
          {showForm === "signup" && (
            <SignupForm
              setShowForm={setShowForm}
              setUser={setUser}
            />
          )}
        </>
      )}

    </div>
  );
}

export default Account;