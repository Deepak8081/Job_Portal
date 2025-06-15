// import React, { useEffect, useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { Button } from "../ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "@/redux/authSlice";
// import { Loader2 } from "lucide-react";

// const Signup = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//     file: "",
//   });
//   const { loading, user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const changeFileHandler = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(); //formdata object
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("password", input.password);
//     formData.append("role", input.role);
//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
//         >
//           <h1 className="font-bold text-xl mb-5">Sign Up</h1>
//           <div className="my-2">
//             <Label>Full Name</Label>
//             <Input
//               type="text"
//               value={input.fullname}
//               name="fullname"
//               onChange={changeEventHandler}
//               placeholder="deepak"
//               required
              
//             />
//           </div>
//           <div className="my-2">
//             <Label>Email</Label>
//             <Input
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="deepak@gmail.com"
//               required
//             />
//           </div>
//           <div className="my-2">
//             <Label>Phone Number</Label>
//             <Input
//               type="text"
//               value={input.phoneNumber}
//               name="phoneNumber"
//               onChange={changeEventHandler}
//               placeholder="8080808080"
//               required
//             />
//           </div>
//           <div className="my-2">
//             <Label>Password</Label>
//             <Input
//               type="password"
//               value={input.password}
//               name="password"
//               required
//               onChange={changeEventHandler}
//               placeholder="123@abc"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
                  
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   checked={input.role === "recruiter"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
                  
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>
//             <div className="flex items-center gap-2">
//               <Label>Profile</Label>
//               <Input
//                 accept="image/*"
//                 type="file"
//                 onChange={changeFileHandler}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//           {loading ? (
//             <Button className="w-full my-4">
//               {" "}
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full my-4">
//               Signup
//             </Button>
//           )}
//           <span className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600">
//               Login
//             </Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "phoneNumber") {
      // Allow only digits and max 10 characters
      if (!/^\d{0,10}$/.test(value)) return;
    }
    setInput((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
  // ✅ Validate phone number (must be exactly 10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(input.phoneNumber)) {
    toast.error("Phone number must be exactly 10 digits.");
    return;
  }
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border border-border rounded-xl p-6 my-10 bg-card shadow-sm"
        >
          <h1 className="font-bold text-2xl mb-6 text-center">Sign Up</h1>

          {/* Full Name */}
          <div className="my-3 space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              value={input.fullname}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="my-3 space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={input.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="my-3 space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
               type="text"
               
              value={input.phoneNumber}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength={10}
              required
            />
          </div>

          {/* Password */}
          <div className="my-3 space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Role & Profile Picture */}
          <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-4">
            <RadioGroup className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  id="student"
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  id="recruiter"
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2 ">
              <Label htmlFor="file">Profile</Label>
              <Input
                id="file"
                name="file"
                accept="image/*"
                type="file"
                onChange={handleChange}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="my-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Signup"
              )}
            </Button>
          </div>

          {/* Link to Login */}
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 dark:text-blue-400 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
