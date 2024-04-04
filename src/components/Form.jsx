import React, { useEffect } from 'react'
import Input from './Input'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { capNhatSinhVien, chinhSuaSinhVien, themSinhVien } from '../redux/slice/initReducer'
import {object, string} from 'yup'

const Form = () => {
const {thongTinSinhVien} = useSelector(reducer=>reducer.initReducer)
    const dispatch = useDispatch(reducer => reducer.initReducer);
    const { handleChange, handleSubmit, values, touched, handleBlur, setValues, errors, setTouched} = useFormik({
        initialValues: {
            maSV: '',
            hoTen: '',
            soDT: '',
            email: '',
        },
        onSubmit: () => {

            // chinh sua thong tin
            if (thongTinSinhVien.maSV) {
                dispatch(chinhSuaSinhVien({maSV: '', hoTen: '', soDT: '', email: ''}))
                dispatch(capNhatSinhVien(values))
                setTouched({});
            }
            else{
                dispatch(themSinhVien(values))
            }

        },
        validationSchema: object({
            maSV: string().required("Không bỏ trống trường này"),
            hoTen:string().required("Không bỏ trống trường này").matches(/^[^\d]+$/, 'Họ tên không được chứa kí tự số'),
            soDT: string().required("Không bỏ trống trường này").matches(/(\+?(84|0)([3|5|7|8|9])+([0-9]{7}))\b/g, "Không phải số điện thoại Việt nam"),
            email: string().required("Không bỏ trống trường này").email("Không phải định dạng email")
        })
    })
    useEffect(()=>{
        setValues(thongTinSinhVien)
       
        
    }, [thongTinSinhVien])


    return (        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">

            <Input value={values.maSV} disable={thongTinSinhVien.maSV} handleBlur={handleBlur} touched={touched.maSV} type='text' name="maSV" label="Mã sinh viên" handleChange={handleChange} handleBlur={handleBlur} error={errors.maSV} />
            <Input value={values.hoTen} touched={touched.hoTen} handleBlur={handleBlur} type='text' name="hoTen" label="Họ tên" handleChange={handleChange} handleBlur={handleBlur} error={errors.hoTen} />
            <Input value={values.soDT} touched={touched.soDT} handleBlur={handleBlur} type='text' name="soDT" label="Số điện thoại" handleChange={handleChange} handleBlur={handleBlur} error={errors.soDT} />
            <Input value={values.email} touched={touched.email} handleBlur={handleBlur} type='text' name="email" label="Email" handleChange={handleChange} handleBlur={handleBlur} error={errors.email}/>
            {!thongTinSinhVien.maSV && (
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5">Thêm sinh viên</button>
            )}
            {thongTinSinhVien.maSV && (
                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sửa</button>
            )}
        </form>

    )
}

export default Form