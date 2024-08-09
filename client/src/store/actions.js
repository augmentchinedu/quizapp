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

  return { init };
}

export { useActions };
