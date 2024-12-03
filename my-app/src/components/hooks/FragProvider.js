// import { useContext, createContext, useState } from "react";

// const FragContext = createContext();

// const AuthProvider = ({ children }) => {

// const saveFragrancesAction = async (data) => {
//     try {
//         const response = await fetch("http://localhost:8080/api/frag/save/fragrance", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });
//         const res = await response.json();
//         console.log("res", res);
//         if (res.message) {
//             console.log("fragrance saved message", res.message);
//             console.log("Fragrances saved successfully");
//             return;
//         }
//         throw new Error(res.message);
//     } catch (err) {
//         console.error(err);
//     }
// }
// export default FragProvider;