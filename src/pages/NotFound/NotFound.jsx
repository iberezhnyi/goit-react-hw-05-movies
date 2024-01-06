import { NotFoundStyled, TitleStyled, LinkStyled } from './NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundStyled>
      <TitleStyled>Something went wrong.</TitleStyled>
      <LinkStyled to={'/'}>To home page</LinkStyled>
    </NotFoundStyled>
  );
}
