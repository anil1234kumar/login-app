import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";
import convertToBase64 from "../helper/convert";

const Register = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values);
      console.log(values);
    },
  });
  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64();
    setFile(base64);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form className="py-1 " onSubmit={formik.handleSubmit}>
        <label htmlFor="profile">
          <img
            // src={file || avatar}
            // className={styles.profile_img}
            alt="avatar"
          />
        </label>

        <input type="file" id="profile" name="profile" />

        <div className="textbox flex flex-col items-center gap-6">
          <input
            {...formik.getFieldProps("email")}
            type="text"
            placeholder="Email*"
          />
          <input
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="Username*"
          />
          <input
            {...formik.getFieldProps("password")}
            type="text"
            placeholder="Password*"
          />
          <button type="submit">Let's Go</button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            already Register
            <Link className="text-red-500" to="/">
              log in now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
