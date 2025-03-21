import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://v6.exchangerate-api.com/v6/0b1457fa39cb5fbccdb9f9f6/latest/${currency}`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/0b1457fa39cb5fbccdb9f9f6/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res); // Debugging
        setData(res.conversion_rates); // ✅ Correct key
      })
      .catch((err) => console.error("Fetch error: ", err));

    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
