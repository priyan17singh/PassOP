import CopyButton from "./Copybutton";
import { useRef, useState, useEffect } from "react";
import Actions from "./Actions";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Manager = () => {
  const [formData, setFormData] = useState({
    url: "",
    username: "",
    password: "",
  });
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let storedData = localStorage.getItem("passwordData");
    if (storedData) setpasswordArray(JSON.parse(storedData));
  }, []);

  const inputRef = useRef();
  const iconRef = useRef();

  const showPassword = () => {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
      iconRef.current.src = "/icons/show.png"; // ✅ Correct path
    } else {
      inputRef.current.type = "password";
      iconRef.current.src = "/icons/hide.png"; // ✅ Correct path
    }
  };

  const handleChange = (e) => {
    // const { placeholder, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canPush = () => {
    if (formData.url.length>3 && formData.username.length>3 && formData.password.length>3) {
      return true;
    }
    toast.info("Error: Data can't be saved!")
    return false;
  };

  const savePassword = () => {
    if (!canPush()) {
      return;
    }
    toast("Saved Password", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    setpasswordArray([...passwordArray, { ...formData, id: uuidv4() }]);
    localStorage.setItem(
      "passwordData",
      JSON.stringify([...passwordArray, { ...formData, id: uuidv4() }])
    );
    // console.log([...passwordArray, {...formData, id: uuidv4()}]);
    setFormData({
      url: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="md:myContainer m-3 text-center z-20">
        <h1 className="font-bold text-3xl ">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-lg text-green-900">Your Personal Password Manager</p>
        <div className="  flex flex-col gap-8 mt-10 items-center">
          <input
            className="rounded-full border w-full border-green-500"
            placeholder="URL"
            type="text"
            onChange={handleChange}
            value={formData.url}
            name="url"
          />
          <div className="flex w-full justify-between gap-4">
            <input
              className="rounded-full  px-3 border border-green-500 w-full"
              type="text"
              onChange={handleChange}
              value={formData.username}
              placeholder="Username"
              name="username"
            />
            <div className="relative">
              <input
                className="rounded-full px-3 border border-green-500 "
                ref={inputRef}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={iconRef}
                  width={24}
                  src="public\icons\hide.png"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 rounded-full px-3 py-1 w-fit bg-green-500 hover:bg-green-600 border border-green-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="left-0 passwords mx-auto mt-8 max-w-full">
          <h2 className="font-bold text-2xl text-left my-4">
            Your Passwords
            {passwordArray.length === 0 && (
              <p className="text-left text-sm font-normal">
                No passwords saved yet.
              </p>
            )}
          </h2>

          {passwordArray.length != 0 && (
            <table className="table-auto mr-4 md:mb-16 max-w-fit rounded-xl overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="px-4 py-2 w-1/2">URL</th>
                  <th className="px-4 py-2 w-1/4">Username</th>
                  <th className="px-4 py-2 w-1/4">Password</th>
                  <th className="px-4 py-2 w-1/4">Actions</th>
                </tr>
              </thead>

              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index} className=" h-8 md:h-12">
                    <td className="border-2 border-white px-4 py-2 text-center w-[40%] max-w-[100px] md:max-w-[200px] truncate">
                      <div className="flex justify-between items-center gap-2">
                        <a
                          href={item.url}
                          target="_blank"
                          className="truncate max-w-[80%] block  hover:underline"
                          title={item.url} // shows full text on hover
                        >
                          <p>{item.url}</p>
                        </a>
                        <CopyButton textToCopy={item.url} />
                      </div>
                    </td>

                    <td className="border-2 border-white px-4 py-2 text-center w-[25%]  md:max-w-[200px] max-w-[100px] truncate">
                      <div className="flex justify-between items-center gap-2">
                        <p
                          className="truncate max-w-[150px]"
                          title={item.username}
                        >
                          {item.username}
                        </p>
                        <CopyButton textToCopy={item.username} />
                      </div>
                    </td>

                    <td className="border-2 border-white px-4 py-2 text-center max-w-[100px] w-[40%]  md:max-w-[200px] truncate">
                      <div className="flex justify-between items-center gap-2">
                        <p
                          className="truncate max-w-[150px]"
                          title={item.password}
                        >
                          {item.password}
                        </p>
                        <CopyButton textToCopy={item.password} />
                      </div>
                    </td>
                    <td className="border-2 border-white px-2 py-2 text-center max-w-[100px] w-[8%]">
                      <Actions
                        id={item.id}
                        passwordArray={passwordArray}
                        setPasswordArray={setpasswordArray}
                        setFormData={setFormData}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
