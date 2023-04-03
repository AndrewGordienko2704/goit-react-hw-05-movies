import { List, Item, Title, Text } from './ListReviews.styled';

export const ListReviews = ({ reviews }) => (
  <List>
    {reviews &&
      reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <Title>Author: {author}</Title>
          <Text>{content}</Text>
        </Item>
      ))}
  </List>
);