import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Contact {
  name: string;
  phone: string;
}

const contacts: Contact[] = [
  {name: 'Test1', phone: '9999999999'},
  {name: 'Test2', phone: '9999999998'},
  {name: 'ATest3', phone: '9999999997'},
  {name: 'BTest4', phone: '9999999996'},
  {name: 'CTest5', phone: '9999999995'},
  {name: 'DTest6', phone: '9999999994'},
  {name: 'ETest7', phone: '9999999993'},
  {name: 'FTest8', phone: '9999999992'},
  {name: 'GTest9', phone: '9999999991'},
  {name: 'HTest10', phone: '9999999990'},
  {name: 'ITest11', phone: '9999999981'},
  {name: 'JTest12', phone: '9999999982'},
  {name: 'KTest13', phone: '9999999983'},
  {name: 'LTest14', phone: '9999999984'},
  {name: 'MTest15', phone: '9999999985'},
  {name: 'NTest16', phone: '9999999986'},
  {name: 'OTest17', phone: '9999999987'},
  {name: 'PTest18', phone: '9999999988'},
  {name: 'QTest19', phone: '9999999989'},
  {name: 'RTest20', phone: '9999999970'},
];
const App = () => {
  const [visibleContacts, setVisibleContacts] = useState<Contact[]>(
    contacts.slice(0, 5),
  );
  const [currentIndex, setCurrentIndex] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = () => {
    if (currentIndex < contacts.length && !loading) {
      setLoading(true);
      setTimeout(() => {
        const nextIndex = currentIndex + 5;
        setVisibleContacts(contacts.slice(0, nextIndex));
        setCurrentIndex(nextIndex);
        setLoading(false);
      }, 1000);
    }
  };

  const renderContact = ({item}: {item: Contact}) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.initialCircle}>
          <Text style={styles.initial}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.contactMenus}>
          <Text style={styles.contactName}>{item.name}</Text>
          <View style={styles.contactPhone}>
            <Image source={require('./assets/call.png')} style={styles.icon} />
            <Text> +91 - {item.phone}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require('./assets/delete-removebg-preview.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#9c3352" />
      </View>
    ) : null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* <EvilIcons name="user" size={32} color="#9d3352" /> */}
          <Image
            source={require('./assets/images-removebg-preview.png')}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>Team Members</Text>
        </View>
        <Image source={require('./assets/info.png')} style={styles.logo} />
      </View>

      <FlatList
        data={visibleContacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderContact}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Members</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    height: 30,
    width: 30,
  },
  icon: {
    height: 25,
    width: 25,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#9d3352',
    shadowOpacity: 0.9,
    shadowOffset: {width: 4, height: 10},
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  initialCircle: {
    width: 46,
    height: 46,
    borderRadius: 30,
    backgroundColor: '#dcc1c8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  initial: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  contactMenus: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '400',
  },
  contactPhone: {
    color: '#555',
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    // alignItems: 'center',
  },
  loaderContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#9c3352',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default App;
