
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castGet } from 'service/fetchApi';
import { CastList } from './CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const CastList = async () => {
      try {
        const { cast } = await castGet(movieId);
        if (cast.length === 0) {
          setIsEmpty(true);
        }
        setCast(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    CastList();
  }, [movieId]);

  return (
    <>
      <ul>
        {!isEmpty && !error && <CastList listCast={cast} />}
      </ul>
    </>
  );
};
export default Cast;