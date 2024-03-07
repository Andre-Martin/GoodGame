import GameListItem from "../components/GameListItem";

import { gameListMockInfo } from "../utils/mockInfo";

const GameList = () => {
  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      <table className="table table-hover container">
        <tbody>
          <GameListItem {...gameListMockInfo} />
          <GameListItem {...gameListMockInfo} number={2} year={2012} />
          <GameListItem {...gameListMockInfo} number={3} year={2013} />
          <GameListItem {...gameListMockInfo} number={4} year={2019} />
        </tbody>
      </table>
    </main>
  );
};

export default GameList;
