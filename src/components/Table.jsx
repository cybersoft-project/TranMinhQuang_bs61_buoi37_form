import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import initReducer, { chinhSuaSinhVien, xoaSinhVien } from '../redux/slice/initReducer'

const Table = () => {
    const { danhSachSinhVien } = useSelector(reducer => reducer.initReducer)
    const dispatch = useDispatch()    
    return (
        <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center">
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Mã sinh viên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Họ tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {danhSachSinhVien.map((sinhVien, index) => {
                        
                        const {maSV, hoTen, soDT, email}= sinhVien
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {maSV}
                                </th>
                                <td className="px-6 py-4">
                                    {hoTen}
                                </td>
                                <td className="px-6 py-4">
                                    {soDT}
                                </td>
                                <td className="px-6 py-4">
                                    {email}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button 
                                        type="button" 
                                        className='py-2 px-3 text-sm rounded border-2 border-dashed border-red-600 mx-2'
                                        onClick={
                                            ()=>{
                                                dispatch(xoaSinhVien(maSV))
                                            }
                                        }
                                        
                                        > Xoá </button>
                                    <button type="button" className='py-2 px-3 text-sm rounded border-2 border-dashed border-yellow-600 mx-2'
                                        onClick={()=>{dispatch(chinhSuaSinhVien({maSV, hoTen, soDT, email}))}}
                                    > Cập nhật </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table