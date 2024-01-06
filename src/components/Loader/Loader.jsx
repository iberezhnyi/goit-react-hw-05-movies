import { Circles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <Circles
        height="80"
        width="80"
        color="#e4624b"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
