import styled from 'styled-components';
const FavoriteButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background-color: salmon;
  margin-left: 3px;
`;
const BookmarkItem = props => {
  return (
    <li className={`bookmark-card ${props.isFavorite ? 'favorite' : ''}`}>
      <div>
        <h3>{props.title}</h3>
        <span
          style={{
            backgroundColor: props.category === 'Documentation'
              ? '#dbeafe'
              : props.category === 'Tools'
                ? '#dcfce7'
                : '#fef3c7',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
        >
          {props.category}
        </span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div>
        <FavoriteButton onClick={() => props.onFavoriteToggle(props.id)}>
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </FavoriteButton>
        <DeleteButton onClick={() => props.onDelete(props.id)}>
          Delete
        </DeleteButton>
      </div>
    </li>
  );
};

export default BookmarkItem;