import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { fetchBoardgame } from "../features/slices/boardgameSlice";
import { useParams } from "react-router-dom";
import { uid } from "uid";

import BGInfoPanel from "../components/BGInfoPanel";
import BGCredPanel from "../components/BGCredPanel";
import Spinner from "../components/Spinner";
import CommentBox from "../components/CommentBox";

import { clearText } from "../utils/common";

const SingleGame: React.FC = () => {
  const { id } = useParams();
  const { boardgameInfo, boardgameLoadingStatus } = useAppSelector(
    (state) => state.boardgame
  );
  const dispatch = useAppDispatch();

  //state for comments loading
  const [currentComments, setCurrentComments] = useState<number>(10);

  useEffect(() => {
    if (typeof id === "string") dispatch(fetchBoardgame(+id));
  }, [id]);

  const loadComments = () => {
    setCurrentComments((currentComments) => (currentComments += 10));
  };

  return (
    <main>
      {boardgameLoadingStatus === "pending" && <Spinner />}
      {boardgameLoadingStatus === "succeed" && (
        <>
          <div className="game-page shadow-lg row m-0 mt-3 p-5 rounded">
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
                  Build networks, grow industries, and navigate the world of the
                  Industrial Revolution
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
          <section className="shadow rounded mt-5">
            <h3 className="text-center py-3">Comments</h3>
            {boardgameInfo.comments?.slice(0, currentComments).map((item) => (
              <CommentBox {...item} key={uid()} />
            ))}
          </section>
          {boardgameInfo.comments?.length &&
          boardgameInfo.comments?.length > currentComments ? (
            <button
              onClick={loadComments}
              className="btn btn-outline-primary d-block mx-auto my-3"
            >
              Load More
            </button>
          ) : null}
        </>
      )}
    </main>
  );
};

export default SingleGame;
