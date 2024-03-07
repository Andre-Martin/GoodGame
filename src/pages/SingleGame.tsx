import { useParams } from "react-router-dom";

const SingleGame = () => {
  const { id } = useParams();
  return (
    <main>
      <div className="game-page shadow-lg row m-0 mt-3 p-5 rounded">
        <div className="col-xs-12 col-md-4 col-lg-3">
          <img className="game-img" src={`/src/img/gameImg${id}.png`} />
        </div>
        <div className="game-info col-xs-12 col-md-8 col-lg-9">
          <div className="info-header">
            <div className="d-flex">
              <h2 className="game-title">Clue</h2>
              <p className="game-year">(2019)</p>
            </div>
            <p className="game-thesis">
              Build networks, grow industries, and navigate the world of the
              Industrial Revolution
            </p>
          </div>
          <p className="game-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi non
            nesciunt, ad dicta consequatur, odit ratione alias animi
            voluptatibus amet unde asperiores, repudiandae magnam veritatis modi
            vitae hic enim beatae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aut voluptate natus nostrum ipsam harum asperiores
            itaque maiores sunt saepe praesentium optio fugiat temporibus,
            deleniti cupiditate reiciendis vero voluptatem accusantium non?
          </p>
          <div className="game-panel_block">
            <div className="game-panel_item">
              <span className="sub-info">2-4 Players</span>
              <span className="sup-info">Community: 2-4 --- Best: 3-4</span>
            </div>
            <div className="game-panel_item">
              <span className="sub-info">60-120min</span>
              <span className="sup-info">Playing Time</span>
            </div>
            <div className="game-panel_item">
              <span className="sub-info">Age: 14+</span>
              <span className="sup-info">Community: 14+</span>
            </div>
            <div className="game-panel_item">
              <span className="sub-info">Weight: 3.88/5</span>
              <span className="sup-info">'Complexity' Rating</span>
            </div>
          </div>

          <ul className="m-0 p-0">
            <li>
              <span className="text-danger-emphasis">Alternatives Names:</span>
              <span className="fw-light">Brass, YooMama, Nutella Lover</span>
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
                Gavan Brown, Lina Cossette, David Forest, Damien Mammoliti, Matt
                Tolman
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
    </main>
  );
};

export default SingleGame;
