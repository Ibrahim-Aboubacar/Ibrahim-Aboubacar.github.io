const getFileName = (url) => {
    try {
        let arr = url.split("/");
        const nameArr = arr[arr.length - 1].split(".");
        return nameArr[0].replaceAll("-", " ");
    } catch (error) {
        console.log(error);
        return "Alt name not found!";
    }
};

export default getFileName;
