import { useContext } from 'react';
import { MovieContext } from '../Movie';
import { BookingContext } from './../../../Booking';

const useMovieData = () => {
  const {
    movieDataList,
    setMovieDataList,
    setMovieActive,
    movieSelectList,
    setMovieTabName,
    setMovieSelectList,
  } = useContext(MovieContext);
  const { setMovieID, setMovieValue } = useContext(BookingContext);
  const handleTabAllBtn = () => {
    setMovieTabName('all');
  };

  const handleTabCurBtn = () => {
    setMovieTabName('curation');
  };

  const handleMovieClick = data => {
    const movieList = [...movieDataList];
    const clickIndex = clickSearchItem(data);
    data.like = true;

    const selectList = [...movieSelectList];
    const changeIndex = selectList.findIndex(item => item !== -1);
    const alertCheckList = selectList.filter(item => item && !undefined);
    selectList.splice(changeIndex, 0, data);
    if (alertCheckList.length < 3) {
      selectList.pop();
      movieList.splice(clickIndex, data);
      setMovieDataList(movieList);
      setMovieActive(true);
      setMovieSelectList(selectList);
      setMovieID(data.movie_id);
      setMovieValue(data.movie_title);
    } else {
      alert('영화는 최대 3개 까지 선택가능합니다.');
      return;
    }
  };
  const handleMovieDelete = data => {
    const selectList = [...movieSelectList];
    const deleteIndex = deleteSearchItem(data);
    data.like = false;
    selectList.splice(deleteIndex, 1);
    selectList.push(undefined);
    setMovieSelectList(selectList);
  };

  const deleteSearchItem = data => {
    return movieSelectList.findIndex(item => item.title === data.title);
  };
  const clickSearchItem = data => {
    return movieDataList.findIndex(item => item.title === data.title);
  };

  return {
    movieDelete: handleMovieDelete,
    all: handleTabAllBtn,
    curation: handleTabCurBtn,
    movieClicked: handleMovieClick,
  };
};

export default useMovieData;
