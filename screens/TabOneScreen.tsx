import { MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

export default function TabOneScreen() {
  var now = moment().format('LL');
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.topNav}>
          <Text style={styles.txtFightCovid}>Fight Covid-19</Text>
          <Text style={styles.txtExclamination}>Ayo lawan Covid-19 di Indonesia bersama</Text>
          <View style={styles.searchBar}>
            <Ionicons name="ios-location-sharp" size={24} color="#6347E7" />
            <Text style={{ paddingLeft: 12 }}>Indonesia</Text>
          </View>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.updateSection}>
            <Text style={styles.subJudul}>Update Terkini</Text>
            <Text style={{ color: '#AAAAAA' }}>{now}</Text>
          </View>

          <View style={styles.casesCount}>
            <View style={styles.newCases}>
              <MaterialCommunityIcons name="virus" size={24} color="#6045E2" />
              <Text style={{ color: '#6045E2', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>6760</Text>
              <Text>Positif</Text>
            </View>
            <View style={styles.recoverCases}>
              <FontAwesome name="heart" size={24} color="#2ECC71" />
              <Text style={{ color: '#2ECC71', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>6760</Text>
              <Text>Sembuh</Text>
            </View>
            <View style={styles.deathCases}>
              <Entypo name="circle-with-cross" size={24} color="#FF1800" />
              <Text style={{ color: '#FF1800', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>1.000.000</Text>
              <Text>Meningggal</Text>
            </View>
          </View>

          <View style={styles.banner}>
            <View>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Pahlawan Covid</Text>
              <Text style={{ color: 'white', paddingTop: 6 }}>Jadilah pahlawan untuk daerahmu{"\n"}#PahlawanCovid-19</Text>
            </View>
            <Entypo name="chevron-right" size={24} color="white" style={{ alignSelf: 'center' }} />
          </View>

          <View style={styles.covidService}>
            <Text style={styles.subJudul}>Layanan Fight Covid-19</Text>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  topNav: {
    backgroundColor: '#5C42DC',
    width: '100%',
    height: 135,
    padding: 16
  },
  txtFightCovid: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  txtExclamination: {
    color: '#FFFFFF',
    paddingTop: 4
  },
  searchBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  mainContent: {
    paddingRight: 16,
    paddingLeft: 16
  },
  updateSection: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subJudul: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  casesCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12
  },
  newCases: {
    width: 102,
    height: 107,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recoverCases: {
    width: 102,
    height: 107,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deathCases: {
    width: 102,
    height: 107,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner: {
    width: '100%',
    height: 87,
    backgroundColor: '#6045E2',
    borderRadius: 4,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  covidService: {
    paddingTop: 20
  }
});
