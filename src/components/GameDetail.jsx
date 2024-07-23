import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imageResizeURL } from "../util";

const GameDetail = () => {
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    let element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <StyledCardShadowDiv className="shadow" onClick={exitDetailHandler}>
          <StyledDetailedCard>
            <StyledStatsDiv>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>rating : {game.rating}</p>
              </div>
              <StyledInfoDiv>
                <h3>Platforms</h3>
                <StyledPlatformsDiv>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </StyledPlatformsDiv>
              </StyledInfoDiv>
            </StyledStatsDiv>

            <StyledMediaDiv>
              <img
                src={imageResizeURL(game.background_image, 1280)}
                alt={game.background_image}
              />
            </StyledMediaDiv>
            <StyledDescriptionDiv>
              <p>{game.description_raw}</p>
            </StyledDescriptionDiv>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  key={screen.id}
                  src={imageResizeURL(screen.image, 1280)}
                  alt={screen.image}
                />
              ))}
            </div>
          </StyledDetailedCard>
        </StyledCardShadowDiv>
      )}
    </>
  );
};

const StyledCardShadowDiv = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetailedCard = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const StyledStatsDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfoDiv = styled(motion.div)`
  text-align: center;
`;

const StyledPlatformsDiv = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyledMediaDiv = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
  }
`;

const StyledDescriptionDiv = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
