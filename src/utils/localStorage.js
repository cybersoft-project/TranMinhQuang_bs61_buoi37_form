export const setLocalStorage =(data)=>{
    localStorage.setItem("danhSachSinhVien",
        JSON.stringify(data)
    )
}
export const getLocalStorage = () => {
    
    if (localStorage.getItem("danhSachSinhVien")) {
        return JSON.parse(
            localStorage.getItem("danhSachSinhVien")
        );
    }
    return [];

}