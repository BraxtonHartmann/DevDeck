import BookmarkItem from './BookmarkItem';
import styles from './BookmarkList.module.css';

const BookmarkList = props => {
  if (props.items.length === 0) {
    return <p className={styles.empty}>No bookmarks found in this category.</p>;
  }

  return (
    <ul className={styles.list}>
      {props.items.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          id={bookmark.id}
          title={bookmark.title}
          url={bookmark.url}
          category={bookmark.category}
          isFavorite={bookmark.isFavorite}
          onFavoriteToggle={props.onToggleFavorite}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default BookmarkList;