export function capitalizeFirstLetter(string) {
    if (!string) return ''; // Kiểm tra chuỗi rỗng
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

}

export function capitalizeAllFirstLetters(string) {
    if (!string) return '';
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function splitString(str) {
    const firstSpaceIndex = str.indexOf(' '); // Tìm vị trí khoảng trắng đầu tiên

    if (firstSpaceIndex === -1) {
        return [str]; // Nếu không có khoảng trắng, trả về mảng chỉ chứa chuỗi
    }

    // Tách chuỗi tại khoảng trắng đầu tiên
    const firstWord = str.slice(0, firstSpaceIndex);
    const restOfString = str.slice(firstSpaceIndex + 1);

    return [firstWord, restOfString];
}
export function maskWords(str) {
    return str.split(' ').map(word => '*'.repeat(word.length)).join(' ');
}