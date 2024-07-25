import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { imageResizeURL } from "../util";
import { popUp } from "../Animation";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
    console.log(typeof game.id);
  };

  return (
    <StyledGameCard
      onClick={loadDetailHandler}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <p>Rating : {game.rating ? game.rating : "not available"}</p>
        {game.background_image ? (
          <motion.img
            layoutId={`image ${game.id}`}
            src={imageResizeURL(game.background_image, 1280)}
            alt={game.name}
          />
        ) : (
          <FallbackImage />
        )}
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

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
`;
export default memo(GameCard);
