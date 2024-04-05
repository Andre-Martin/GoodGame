import { List } from "@mui/material";
import CredPanelItem from "./CredPanelItem";
import { useAppSelector } from "../../../features/hooks/redux.hooks";

const CredPanel = () => {
  const { links, alternativeNames } = useAppSelector(
    (state) => state.boardgame.boardgameInfo
  );
  return (
    <List className="m-0 p-0">
      <CredPanelItem title="Categories" arr={links.categories} />
      <CredPanelItem title="Family" arr={links.families} />
      <CredPanelItem title="Alternative Names" arr={alternativeNames} />
      <CredPanelItem title="Designers" arr={links.designers} />
      <CredPanelItem title="Artists" arr={links.artists} />
      <CredPanelItem title="Publisher" arr={links.publishers} />
    </List>
  );
};

export default CredPanel;
