import iconsData from "../icons";

export default function useIcon(iconName) {
    return [iconsData[iconName]["icon"], iconsData[iconName]["site_url"]];
}
