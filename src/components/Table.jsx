import React from "react";
import Case from "./Case";

export default function Table({ headers, data }) {
  return (
    <Case>
        <Table headers={headers} data={stuffs}></Table>
    </Case>
    // <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-20 py-10">
    //   <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //       <tr>
    //         {headers.map((header, index) => (
    //           <th scope="col" class="px-6 py-3" key={index}>
    //             {header}
    //           </th>
    //         ))}
    //         <th scope="col" class="px-6 py-3"></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Object.entries(data).map(([index, item]) => (
    //         <>
    //           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    //             <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{parseInt(index) + 1}.</td>
    //             <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
    //             <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.category}</td>
    //             <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.stuff_stock ? item.stuff_stock.total_available : "0"}</td>
    //             <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.stuff_stock ? item.stuff_stock.total_defec : "0"}</td>

    //             {/* <!-- aksi --> */}
    //             <td class="px-6 py-4 text-right">
    //               <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
    //                 Edit
    //               </a>
    //               <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline ml-3">
    //                 Delete
    //               </a>
    //             </td>
    //           </tr>
    //         </>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}
