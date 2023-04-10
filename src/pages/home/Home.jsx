import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import VideoCard from "../../components/video-card/VideoCard";
import { UtilityContext } from "../../components/utility/Provider";
import { fetchApi } from "../../api/fetchData";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { cat, cats, theme } = useContext(UtilityContext);

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchApi(`search?q=${cats}&part=snippet%2Cid`).then((data) =>
      setVideos(data.items)
    );

    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, [cats]);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className={`home ${theme}`}>
      <div className="home--container">
        <div className="home--container--head">
          <div className="home--container--head--title page-title">
            {cat} <span>Videos</span>
          </div>
          <form
            onSubmit={handleSearch}
            className="home--container--head--search"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="home--container--head--search--input"
              type="text"
              placeholder="Please Search..."
            />
            <i class="bx bx-search home--container--head--search--icon"></i>
          </form>
        </div>
        <div className="home--container">
          <div className="home--container--videos">
            {loading ? (
              <h2 className="loading">LOADING...</h2>
            ) : (
              videos?.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
