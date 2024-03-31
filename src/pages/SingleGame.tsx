import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { fetchBoardgame } from "../features/slices/boardgameSlice";
import { useParams } from "react-router-dom";
import { uid } from "uid";

import Spinner from "../components/Spinner";

import CommentBox from "../components/CommentBox";

import { clearText } from "../utils/common";

const SingleGame: React.FC = () => {
  const { id } = useParams();
  const { boardgameInfo, boardgameLoadingStatus } = useAppSelector(
    (state) => state.boardgame
  );
  const dispatch = useAppDispatch();

  //state for comments pagination
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
              <div className="game-panel_block">
                <div className="game-panel_item">
                  <span className="sub-info">
                    {boardgameInfo.minPlayers}-{boardgameInfo.maxPlayers}
                    Players
                  </span>
                  <span className="sup-info">Community: 2-4 --- Best: 3-4</span>
                </div>
                <div className="game-panel_item">
                  <span className="sub-info">
                    {boardgameInfo.minPlaytime}-{boardgameInfo.maxPlaytime}min
                  </span>
                  <span className="sup-info">Playing Time</span>
                </div>
                <div className="game-panel_item">
                  <span className="sub-info">Age: {boardgameInfo.minAge}+</span>
                  <span className="sup-info">
                    Community: {boardgameInfo.minAge}+
                  </span>
                </div>
                <div className="game-panel_item">
                  <span className="sub-info">Weight: 3.88/5</span>
                  <span className="sup-info">'Complexity' Rating</span>
                </div>
              </div>

              <ul className="m-0 p-0">
                <li>
                  <span className="text-danger-emphasis">
                    Alternatives Names:
                  </span>
                  <span className="fw-light">
                    Brass, YooMama, Nutella Lover
                  </span>
                </li>
                <li>
                  <span className="text-danger-emphasis">Designers</span>
                  <span className="fw-light">
                    Gavana Brown, Matt Tolman, Martin Wallace
                  </span>
                </li>
                <li>
                  <span className="text-danger-emphasis"> Artists:</span>
                  <span className="fw-light">
                    Gavan Brown, Lina Cossette, David Forest, Damien Mammoliti,
                    Matt Tolman
                  </span>
                </li>
                <li>
                  <span className="text-danger-emphasis">Publisher: </span>
                  <span className="fw-light">
                    Roxley, Arclight Games, Board Game Rookie
                  </span>
                </li>
              </ul>
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
