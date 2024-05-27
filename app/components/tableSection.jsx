import React from "react";

function Table({ head }) {
  return (
    <div className="h-fit p-6 bg-slate-300 flex flex-col gap-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray--800  text-wrap w-full">
        {head}
      </h2>
      {/* Display table */}
      <table className="w-full text-center text-sm font-medium text-gray-800 text-surface ">
        <thead className="border-b border-neutral-200  dark:border-white/10">
          <tr className="bg-gray-800 text-white w-full">
            <th scope="col" className="py-4 ">
              ID #
            </th>
            <th scope="col" className="py-4 ">
              Picture
            </th>
            <th scope="col" className="py-4">
              First name
            </th>
            <th scope="col" className="py-4">
              Last name
            </th>
            <th scope="col" className="py-4">
              Othername(s)
            </th>
            <th scope="col" className="py-4">
              Email
            </th>
            <th scope="col" className="py-4">
              Gender
            </th>
            <th scope="col" className="py-4">
              Department
            </th>
            <th scope="col" className="py-4">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200 dark:border-white/10 hover:bg-neutral-300">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
          </tr>
          <tr className="border-b border-neutral-200 dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
          </tr>
          <tr className="border-b ">
            <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
            <td className="whitespace-nowrap px-6 py-4">Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
