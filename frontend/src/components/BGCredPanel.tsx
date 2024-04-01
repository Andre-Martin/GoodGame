import { SingleGameLinks } from "../utils/types";

interface Props {
  alternativeNames: string[];
  links: SingleGameLinks;
}

const BGCredPanel = ({ alternativeNames, links }: Props) => {
  return (
    <ul className="m-0 p-0">
      <li>
        <span className="text-danger-emphasis">Alternatives Names:</span>
        <span className="fw-light">
          {alternativeNames.length !== 0
            ? alternativeNames.join(", ")
            : " None"}
        </span>
      </li>
      <li>
        <span className="text-danger-emphasis">Designers: </span>
        <span className="fw-light">{links.designers.join(", ")}</span>
      </li>
      <li>
        <span className="text-danger-emphasis"> Artists: </span>
        <span className="fw-light">{links.artists.join(", ")}</span>
      </li>
      <li>
        <span className="text-danger-emphasis">Publisher: </span>
        <span className="fw-light">{links.publishers.join(", ")}</span>
      </li>
    </ul>
  );
};

export default BGCredPanel;
