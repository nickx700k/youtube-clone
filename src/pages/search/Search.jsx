import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Search.scss";
import { fetchApi } from "../../api/fetchData";
import VideoCard from "../../components/video-card/VideoCard";
import { UtilityContext } from "../../components/utility/Provider";

const Search = () => {
  const { theme } = useContext(UtilityContext);

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchApi(`search?part=snippet%2Cid&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, [searchTerm]);

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className={`search ${theme}`}>
      <div className="search--container">
        <div className="search--container--head">
          <h2 className="search--container--head--h2">
            Display Result for {searchTerm}
          </h2>
          <i
            class="bx bx-arrow-back search--container--head--icon"
            onClick={handleExit}
          ></i>
        </div>

        <div className="search--container--videos">
          {loading ? (
            <h2 className="loading">Loading...</h2>
          ) : (
            videos?.map((video) => <VideoCard video={video} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
