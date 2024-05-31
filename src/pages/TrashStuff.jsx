import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Case from "../components/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrashStuff() {
  const [trashs, setTrashs] = useState([]);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });

  useEffect(() => {
    instance
      .get("stuff/trash", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setTrashs(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/login?message=" + encodeURIComponent("Anda belum login!"));
        }
      });
  }, [navigate]);

  const restoreStuff = (id) => {
    instance.put(`stuff/restore/${id}`, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setTrashs(trashs.filter((stuff) => stuff.id !== id));
        navigate("/stuff");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const deleteStuff = (id) => {
    instance
      .delete(`stuff/permanent/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <Case>
      <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="items-center m-5 pb-10 pt-10">
          <div className="flex justify-between">
            <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Trash Stuff</h5>
            <div className="flex justify-end">
              <Link to='/stuff' className="inline-flex items-center px-4 py-2 text-sm ml-3 font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-blue-800 mb-5">Back to Stuff</Link>
            </div>
          </div>
          {Object.keys(error).length > 0 && (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Gagal!</div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <ul>{error.message}</ul>
              </div>
            </div>
          )}
          <div className="flex mt-4 md:mt-6">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-4">No</th>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Category</th>
                  <th scope="col" className="px-6 py-4">Total Available</th>
                  <th scope="col" className="px-6 py-4">Total Defec</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {trashs.map((stuff, id) => (
                  <tr key={stuff.id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{stuff.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{stuff.category}</td>
                    <td className="whitespace-nowrap px-6 py-4">{stuff.stock ? stuff.stock.total_available : "0"}</td>
                    <td className="whitespace-nowrap px-6 py-4">{stuff.stock ? stuff.stock.total_defec : "0"}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="button" onClick={() => restoreStuff(stuff.id)} className="px-4 py-2 bg-pink-500 rounded-lg mr-2 font-bold text-white">
                        Restore
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm("Yakin ingin menghapus data permanent?")) {
                            deleteStuff(stuff.id);
                          }
                        }}
                        className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white"
                      >
                        Hapus Permanent
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Case>
  );
}
