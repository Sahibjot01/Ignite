import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { imageResizeURL } from "../util";
const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
    console.log(typeof game.id);
  };

  return (
    <StyledGameCard onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <p>Rating : {game.rating ? game.rating : "not available"}</p>
        <motion.img
          layoutId={`image ${game.id}`}
          src={imageResizeURL(game.background_image, 1280)}
          alt={game.name}
        />
      </Link>
    </StyledGameCard>
  );
};

const StyledGameCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default memo(GameCard);
