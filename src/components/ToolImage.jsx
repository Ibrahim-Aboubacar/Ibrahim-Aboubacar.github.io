import * as PropTypes from "prop-types";
import icons from "../icons.json"

export default function ToolImage({ tool }) {
    const publicPath = "/src/assets/imgs/icons/";
    let image = publicPath;
    let link = '/';
    if (icons[tool]) {
        image = publicPath + icons[tool]['icon'];
        link = icons[tool]['site_url'] + "?utm_source=" + encodeURI('https://ibrahim-aboubacar.github.io/');
    }
    return (
        <a href={link} target="_blank" className="flex aspect-square w-10 items-center justify-center" title={"Click to visite website"}>
            <img className="h-full" src={image} alt={"Tool or techno" + tool + " image icon"} />
        </a>
    )
}
const ToolImagePropTypes = {
    tool: PropTypes.string
};
ToolImage.propTypes = ToolImagePropTypes;