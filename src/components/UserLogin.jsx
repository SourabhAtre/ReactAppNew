import { useState } from "react";
import { loginUser } from "../service/userService.js";

export default function UserLogin({ setShowForm, setUser }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        try {
            setLoading(true);
            setError("");

            const response = await loginUser(
                formData.email,
                formData.password
            );
            // Save token
            localStorage.setItem("token", response.token);

            // Save user
            localStorage.setItem(
                "user",
                JSON.stringify(response.user)
            );

            console.log("Login successful:", response);

            // Set logged-in user in Account.jsx
            setUser(response.user);

        } catch (error) {
            setError(error.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="md:text-[45px] text-[30px] font-bold !mb-[50px]">
                Login to your account
            </h1>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
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
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            <div className="mt-[30px]">
                <span>Don't have an account?</span>

                <button
                    type="button"
                    className="text-[#FF8500] cursor-pointer"
                    onClick={() => setShowForm("signup")}
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}