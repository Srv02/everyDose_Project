export const getDataFromLocalStorage = () => {
  let data = [];
  try {
    data = JSON.parse(localStorage.getItem("everdoseData"));
    if (data.length === 0) {
      return null;
    }
  } catch (e) {}
  return data;
};

export const setDataToLocalStorage = (data) => {
  localStorage.setItem("everdoseData", JSON.stringify(data));
};
