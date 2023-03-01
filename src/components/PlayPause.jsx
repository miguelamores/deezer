import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay }) =>
  isPlaying && song.title === activeSong.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
