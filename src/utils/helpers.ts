import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
