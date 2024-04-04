import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utils/localStorage';
import { findIndexObjectInArrayTypeOne } from '../../utils/find';

const initialState = {
    danhSachSinhVien: [],
    thongTinSinhVien: {
        maSV: '',
        hoTen: '',
        soDT: '',
        email: ''
    },
}

const initReducer = createSlice({
  name: 'init',
  initialState,
  reducers: {
    layDanhSach: (state, {type, payload})=>{
        state.danhSachSinhVien = [...payload]
    },
    themSinhVien: (state, {type, payload})=>{
        //them sinh vao state va luu state vao local de su dung khi reload
        state.danhSachSinhVien.push({...payload});
        setLocalStorage(state.danhSachSinhVien);
    },
    xoaSinhVien: (state, {type, payload})=>{
        const pos = findIndexObjectInArrayTypeOne("maSV",payload, state.danhSachSinhVien)
        state.danhSachSinhVien.splice(pos, 1)
        setLocalStorage(state.danhSachSinhVien);
    },
    chinhSuaSinhVien: (state, {type, payload})=>{
        state.thongTinSinhVien = payload;
    },
    capNhatSinhVien: (state, {type, payload})=>{
        
        const pos = findIndexObjectInArrayTypeOne("maSV",payload.maSV, state.danhSachSinhVien)
        state.danhSachSinhVien[pos] = payload;
        setLocalStorage(state.danhSachSinhVien);
        
        
        
    }

  }
});

export const {layDanhSach, themSinhVien, xoaSinhVien, chinhSuaSinhVien, capNhatSinhVien} = initReducer.actions

export default initReducer.reducer