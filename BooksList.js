import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ref, onValue} from 'firebase/database';
import {db} from '../firebaseConfig'; // Adjust the path if necessary

const BooksList = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const booksRef = ref(db, 'books/');
    onValue(
      booksRef,
      snapshot => {
        const data = snapshot.val();
        const booksList = data ? Object.keys(data).map(key => data[key]) : [];
        setBooks(booksList);
        setLoading(false);
      },
      error => {
        console.error(error);
        setLoading(false);
      },
    );
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('BookDetail', {book: item})}>
            <Image source={{uri: item.coverPage}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.bookName}>{item.name}</Text>
              <Text style={styles.bookAuthor}>by {item.author}</Text>
              <Text style={styles.bookRating}>Rating: {item.rating}</Text>
              <Text style={styles.bookSummary}>{item.summary}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#ddd',
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
    color: '#555',
    marginVertical: 5,
  },
  bookRating: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  bookSummary: {
    fontSize: 14,
    color: '#666',
  },
});

export default BooksList;
