import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Register = () => {
   const [agreed, setAgreed] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      console.log("this is url: ", import.meta.env.VITE_APP_BE_URL);
   });

   const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastname: "",
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // check password
         if (formData.confirmPassword !== formData.password) {
            throw new Error("Password missmatch");
         }

         const response = await fetch(
            import.meta.env.VITE_APP_BE_URL + "/auth/register",
            {
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );

         if (response.ok) {
            navigate("/login");
            console.log(response.json);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="flex flex-col justify-center content-center h-svh">
         <div className="isolate bg-white px-6 lg:px-8">
            <div
               className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
               aria-hidden="true"
            >
               <div
                  className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                  style={{
                     clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
               />
            </div>
            <div className="mx-auto max-w-2xl text-center">
               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Register
               </h2>
               <p className="mt-2 text-lg leading-8 text-gray-600">
                  Share your thoughts and create posts.
               </p>
            </div>
            <form
               onSubmit={handleSubmit}
               method="POST"
               className="mx-auto mt-4 max-w-xl sm:mt-20"
            >
               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                     <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        First name
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="text"
                           onChange={handleChange}
                           name="name"
                           id="first-name"
                           autoComplete="given-name"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>
                  <div>
                     <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        Last name
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="text"
                           onChange={handleChange}
                           name="lastname"
                           id="last-name"
                           autoComplete="family-name"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        Username
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="text"
                           onChange={handleChange}
                           name="username"
                           id="username"
                           autoComplete="username"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        Email
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="email"
                           onChange={handleChange}
                           name="email"
                           id="email"
                           autoComplete="email"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        Password
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="password"
                           onChange={handleChange}
                           name="password"
                           id="password"
                           autoComplete="password"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                     >
                        Confirm password
                     </label>
                     <div className="mt-2.5">
                        <input
                           required
                           type="password"
                           onChange={handleChange}
                           name="confirmPassword"
                           id="confirmPassword"
                           autoComplete="confirmPassword"
                           className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* phone number */}
                  {/* <div className="sm:col-span-2">
                  <label
                     htmlFor="phone-number"
                     className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                     Phone number
                  </label>
                  <div className="relative mt-2.5">
                     <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                           Country
                        </label>
                        <select
                           id="country"
                           name="country"
                           className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                           <option>US</option>
                           <option>CA</option>
                           <option>EU</option>
                        </select>
                        <ChevronDownIcon
                           className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                           aria-hidden="true"
                        />
                     </div>
                     <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div> */}

                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                     <div className="flex h-6 items-center">
                        <Switch
                           checked={agreed}
                           onChange={setAgreed}
                           className={classNames(
                              agreed ? "bg-indigo-600" : "bg-gray-200",
                              "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                           )}
                        >
                           <span className="sr-only">Agree to policies</span>
                           <span
                              aria-hidden="true"
                              className={classNames(
                                 agreed ? "translate-x-3.5" : "translate-x-0",
                                 "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                              )}
                           />
                        </Switch>
                     </div>
                     <Switch.Label className="text-sm leading-6 text-gray-600">
                        By selecting this, you agree to our{" "}
                        <a href="#" className="font-semibold text-indigo-600">
                           privacy&nbsp;policy
                        </a>
                        .
                     </Switch.Label>
                  </Switch.Group>
               </div>
               <div className="mt-10">
                  <button
                     type="submit"
                     className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Register
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
