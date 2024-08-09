import axios from "axios";
import { useAppStore } from ".";

// Configs
axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV == "production" &&
  window.location.hostname !== "localhost"
    ? "https://quizapp-g12m.onrender.com/api"
    : "http://localhost:3000/api";

function useActions() {
  const store = useAppStore();
  console.log(store);

  function init() {
    console.log("Initializing App");
    axios
      .get("/get-subjects")
      .then(({ data }) => {
        console.log(data);
        store.subjects = data;
        console.log(store);
      })
      .catch((err) => console.log(err));
  }

  function addSubject(subject) {
    axios.get("/add-subject?name=" + subject).then(({ data }) => {
      store.subjects.push(data);
    });
  }

  async function deleteSubject(i) {
    try {
      let response = await axios.get(`/delete-subject/${i}`);
      console.log(response);
      if (response.data == true) store.subjects.splice(index, 1);
    } catch (err) {
      console.log(err);
    }
  }

  function isIDAvailable(name) {
    name = name.trim().replaceAll(" ", "-").toLowerCase();
    return axios.get("/check-id?id=" + name).then(({ data }) => {
      return data;
    });
  }

  return { init, deleteSubject, isIDAvailable, addSubject };
}

export { useActions };
