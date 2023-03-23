import React from "react";
import styled from "@emotion/styled";
import Card from "../../../components/Card";
import useAiringTodayTv from "./useAiringTodayTv";
import Slider from "../../../components/Slider";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const AiringTodayTvSection: React.FC = () => {
  const { data, isLoading } = useAiringTodayTv();

  const getYear = (date: string) => date.split('-')[0];

  return (
    <Base>
      <Title>Airing Today</Title><br />
      {
        isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {
              data.data.results.map(movie => (
                <Card
                  key={movie.id}
                  linkUrl={`/movie/${movie.id}`}
                  title={movie.name}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                  voteAverage={movie.vote_average}
                  year={getYear(movie.first_air_date)}
                />
              ))
            }
          </Slider>
        )
      }
    </Base>
  )
}

export default AiringTodayTvSection;