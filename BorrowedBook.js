import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {returnBook} from '../redux/bookSlice';

const BorrowedBooks = () => {
  const borrowedBooks = useSelector(state => state.books.borrowedBooks);
  const dispatch = useDispatch();

  const handleReturnBook = bookId => {
    dispatch(returnBook(bookId));
    Alert.alert('Success', 'Book Returned Successfully');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={borrowedBooks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={{uri: item.coverPage}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.bookName}>{item.name}</Text>
              <Text style={styles.bookAuthor}>by {item.author}</Text>
              <Button
                title="Return"
                onPress={() => handleReturnBook(item.id)}
                color="#ff6347"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No borrowed books</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#777',
    marginVertical: 3,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
});

export default BorrowedBooks;
