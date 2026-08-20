import { useState } from "react";
import { signupUser } from "../service/userService.js";


export default function UserSignup({ setShowForm, setUser }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await signupUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            });

            // Save token
            localStorage.setItem("token", response.token);

            // Save user
            localStorage.setItem(
                "user",
                JSON.stringify(response.user)
            );

            console.log("Signup successful:", response);

            // Automatically log user in
            setUser(response.user);

        } catch (error) {
            console.error("Signup failed:", error);
            setError(error?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="md:text-[45px] text-[30px] font-bold !mb-[50px]">
                Create an account
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error && (
                    <p className="text-red-500 text-sm">
                        {error}
                    </p>
                )}

                <button
                    className="bg-[#000] text-white font-semibold py-3 hover:opacity-90 transition p-[12px] flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            <div className="mt-[30px] mb-[10px]">
                Already have an account?

                <button
                    type="button"
                    className="text-[#FF8500] cursor-pointer"
                    onClick={() => setShowForm("login")}
                >
                    Sign In
                </button>
            </div>
        </>
    );
}