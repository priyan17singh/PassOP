import { toast } from "react-toastify";

const Actions = ({ id, passwordArray, setPasswordArray, setFormData }) => {
  const handleEdit = () => {
    const itemToEdit = passwordArray.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData({
        url: itemToEdit.url,
        username: itemToEdit.username,
        password: itemToEdit.password,
      });
      const updatedArray = passwordArray.filter((item) => item.id !== id);
      localStorage.setItem("passwordData", JSON.stringify(updatedArray));
      setPasswordArray(updatedArray);
    }
    // passwordArray.filter((item) => item.id !== id)
  };

  const handleDelete = () => {
    const ans = confirm("Are you sure you want to delete this entry?");
    if (!ans) return;
    const updatedArray = passwordArray.filter((item) => item.id !== id);
    localStorage.setItem("passwordData", JSON.stringify(updatedArray));
    setPasswordArray(updatedArray);
    toast('Saved Deleted', {
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
  };

  return (
    <>
      <div className="flex justify-around ">
        <button onClick={handleEdit}>
          <lord-icon
            src="https://cdn.lordicon.com/mudwpdhy.json"
            trigger="hover"
            // state="hover-once"
            // onload="this.play();"
    delay="1000"
    
          ></lord-icon>
        </button>
        <button onClick={handleDelete}>
          <lord-icon
            src="https://cdn.lordicon.com/oqeixref.json"
            trigger="morph"
            state="morph-trash-full"
          ></lord-icon>
        </button>
      </div>
    </>
  );
};

export default Actions;
