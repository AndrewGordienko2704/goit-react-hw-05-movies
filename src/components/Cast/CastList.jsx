import { List, Item, Img, Title, Text } from './CastList.styled';

export const CastList = ({ listCast }) => {
  const Img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {listCast &&
        listCast.map(({ id, character, name, profile_path, original_name }) => (
          <Item key={id}>
            <Img src={Img_url + profile_path} alt={name && original_name} />
            <Title>{name && original_name}</Title>
            <Text>{character}</Text>
          </Item>
        ))}
    </List>
  );
};