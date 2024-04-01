import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { fetchBoardgame } from "../features/slices/boardgameSlice";
import { useParams } from "react-router-dom";

import BGInfoPanel from "../components/BGInfoPanel";
import BGCredPanel from "../components/BGCredPanel";
import Spinner from "../components/Spinner";

import { clearText } from "../utils/common";
import BasicTabs from "../components/BGTabPanel";

const SingleGame: React.FC = () => {
  const { id } = useParams();
  const { boardgameInfo, boardgameLoadingStatus } = useAppSelector(
    (state) => state.boardgame
  );
  const dispatch = useAppDispatch();

  //state for comments loading

  useEffect(() => {
    if (typeof id === "string") dispatch(fetchBoardgame(+id));
  }, [id]);

  return (
    <main className="">
      {boardgameLoadingStatus === "pending" && <Spinner />}
      {boardgameLoadingStatus === "succeed" && (
        <>
          <div className="shadow rounded">
            <div className="row m-0 mt-3 p-5 ">
              <div className="col-xs-12 col-md-4 col-lg-3">
                <img
                  className="game-img"
                  src={boardgameInfo.image}
                  alt={boardgameInfo.title}
                />
              </div>
              <div className="game-info col-xs-12 col-md-8 col-lg-9">
                <div className="info-header">
                  <div className="d-flex">
                    <h2 className="game-title">{boardgameInfo.title}</h2>
                    <p className="game-year">({boardgameInfo.year})</p>
                  </div>
                  <p className="game-thesis">
                    Build networks, grow industries, and navigate the world of
                    the Industrial Revolution
                  </p>
                </div>
                <p className="game-description">
                  {clearText(boardgameInfo.description)}
                </p>
                <BGInfoPanel
                  minPlayers={boardgameInfo.minPlayers}
                  maxPlayers={boardgameInfo.maxPlayers}
                  minAge={boardgameInfo.minAge}
                  minPlaytime={boardgameInfo.minPlaytime}
                  maxPlaytime={boardgameInfo.maxPlaytime}
                  complexity={boardgameInfo.statistics.complexity}
                />

                <BGCredPanel
                  alternativeNames={boardgameInfo.alternativeNames}
                  links={boardgameInfo.links}
                />
              </div>
            </div>

            <BasicTabs />
          </div>
        </>
      )}
    </main>
  );
};

export default SingleGame;
