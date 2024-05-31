import { useEffect, useRef, useState } from "react";
import Case from "../../components/Case";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
    const [forms, setForms] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    })

    const params = useParams()
    const id = params.id

    const [error, setError] = useState([])

    const navigate = useNavigate() // untuk mendirect 

    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    })

    useEffect(() => {
        instance.get(`user/${id}`)
        .then(res => {
            setForms(res.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    const handleEditUser = (event) => {
        event.preventDefault();

        instance.put(`user/${id}`, forms)
        .then(res => {
            navigate('/user');
        })
        .catch(err => {
            setError(err.response.data.data)
            console.log(err.response)
        })
    }
    return (
        <Case name='stuff Edit'>
            <div className="block m-auto h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="items-center m-5 pb-10 pt-10">
                {
                        Object.keys(error).length > 0 ? ( // menghitung jumlah error, jika lebih dri 0 maka itu bakal muncul eror (merah)
                            <div role="alert">
                                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                    Gagal!
                                </div>
                                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <ul>
                                        {
                                            Object.entries(error).map(([key, value], i) => (
                                                <li key={key}>{key != "status" ? i+1 + '. ' + value : ''}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ) : ''
                    }
                    <div className="flex justify-center">
                        <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Edit User</h5>
                    </div>
                    <form onSubmit={handleEditUser} class="max-w-sm mx-auto">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={forms.username}  placeholder="Ketik Nama Barang" required 
                            onChange={e => setForms({...forms, username: e.target.value})} /> 
                            
                        </div>
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={forms.email}  placeholder="Ketik Nama Barang" required 
                            onChange={e => setForms({...forms, email: e.target.value})} />
                        </div>
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={forms.password}  placeholder="Ketik Nama Barang" required 
                            onChange={e => setForms({...forms, password: e.target.value})} />
                        </div>
                        <div class="mb-5">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            onChange={e => setForms({...forms, role: e.target.value})}>
                                <option selected>Pilih Kategori</option>
                                <option value="staff" selected={forms.role == 'staff' ? 'selected' : ''}>Staff</option>
                                <option value="admin"  selected={forms.role == 'admin' ? 'selected' : ''}>Admin</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Case>
    )
}

