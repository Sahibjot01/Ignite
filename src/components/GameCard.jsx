import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    console.log(game.id);
    dispatch(loadDetail(game.id));
  };
  return (
    <StyledGameCard onClick={loadDetailHandler}>
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <p>Rating : {game.rating ? game.rating : "not available"}</p>
      <img src={game.background_image} alt={game.name} />
    </StyledGameCard>
  );
};

const StyledGameCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default GameCard;
