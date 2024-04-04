// Hàm tìm index của một mảng object cấp độ một dạng [object1, object2...objectn] với cặp props-value thoã mãn điện kiện nào đó
export const findIndexObjectInArrayTypeOne = (props, value, objectArr)=>{
    return objectArr.findIndex(item=>item[props]==value, 0);
    //array đại diện cho arr, 0: fromIndex, duyệt bắt đầu từ vị trí nào, ngoài ra findIndex còn có tham số thisArg giúp xử lí liên qua đến con trỏ this
}