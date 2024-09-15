import * as PropTypes from "prop-types";
// import icons from "../icons.json"
import useIcon from "../hooks/useIcon";

export default function ToolImage({ tool }) {
    let [image, link] = useIcon(tool);
    // const publicPath = "/src/assets/imgs/icons/";
    // let image = publicPath;
    // let link = '/';
    if (link != '/') {
        link = link + "?utm_source=" + encodeURI('https://ibrahim-aboubacar.github.io/');
    }
    return (
        <a href={link} target="_blank" className="flex aspect-square w-7 items-center justify-center sm:w-10" aria-label={"Click to visite website of " + tool} title={"Click to visite website of " + tool}>
            <img loading="lazy" className="h-full" src={image} alt={tool + " icon"} />
        </a>
    )
}
const ToolImagePropTypes = {
    tool: PropTypes.string
};
ToolImage.propTypes = ToolImagePropTypes;