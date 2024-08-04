import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {borrowBook} from '../redux/bookSlice';

const BookDetail = ({route}) => {
  const {book} = route.params;
  const borrowedBooks = useSelector(state => state.books.borrowedBooks);
  const dispatch = useDispatch();

  const handleBorrowBook = () => {
    if (borrowedBooks.length < 3) {
      dispatch(borrowBook(book));
      Alert.alert('Success', 'Book Borrowed Successfully');
    } else {
      Alert.alert(
        'Limit Exceeded',
        'You cannot borrow more than 3 books at a time.',
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: book.coverPage}} style={styles.image} />
      <Text style={styles.title}>{book.name}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.rating}>Rating: {book.rating}</Text>
      <Text style={styles.summary}>{book.summary}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBorrowBook}>
        <Text style={styles.buttonText}>Borrow</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookDetail;
