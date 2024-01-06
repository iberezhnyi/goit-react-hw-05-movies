import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonStyled } from 'components/Button/Button.styled';
import {
  FormContainer,
  InputStyled,
  SearchFormStyled,
} from './SearchMovieForm.styled';

const SearchMovieForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const query = evt.target.query.value.trim();

    if (query === '') {
      toast.warn('Please enter valid movie name');
      return;
    }

    // const nextSearchParams = query !== '' ? { query } : {};

    setSearchParams({ query });
  };

  useEffect(() => {
    const nextSearchQuery = searchParams.get('query') ?? '';

    !searchQuery && setSearchQuery(nextSearchQuery);
  }, [searchQuery, searchParams]);

  return (
    <FormContainer>
      <SearchFormStyled onSubmit={handleSubmit}>
        <ButtonStyled type="submit">Search</ButtonStyled>

        <InputStyled
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Movie name"
          onChange={handleChange}
          value={searchQuery}
        />
      </SearchFormStyled>
    </FormContainer>
  );
};

export default SearchMovieForm;
