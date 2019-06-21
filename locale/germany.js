//! moment-holiday.js locale configuration
//! locale : Germany
//! author : Kodie Grantham : https://github.com/kodie
/* regions :
      BB : Brandenburg
      BE : Berlin
      BW : Baden-Württemberg
      BY : Bayern
      HB : Bremen
      HE : Hessen
      HH : Hamburg
      MV : Mecklenburg-Vorpommern
      NI : Niedersachsen
      NW : Nordrhein-Westfalen
      RP : Rheinland-Pfalz
      SN : Sachsen
      SL : Saarland
      ST : Sachsen-Anhalt
      TH : Thüringen
*/

(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  moment.holidays.germany = {
    "Neujahr": {
      date: '1/1',
      keywords: ['new', 'year']
    },
    "Karfreitag": {
      date: 'easter-2',
      keywords: ['good', 'friday']
    },
    "Ostersonntag": {
      date: 'easter',
      keywords: ['easter'],
      keywords_n: ['monday'],
      regions: ['bb']
    },
    "Ostermontag": {
      date: 'easter+1',
      keywords: ['easter', 'monday']
    },
    "Heilige Drei Könige": {
      date: '1/6',
      keywords: ['konige'],
      regions: ['bw', 'by', 'st']
    },
    "Internationaler Frauentag": {
      date: '3/8',
      regions: ['be']
    },
    "Maifeiertag": {
      date: '5/1'
    },
    "Christi Himmelfahrt": {
      date: 'easter+39',
      kaywords: ['ascension']
    },
    "Pfingstsonntag": {
      date: 'easter+49',
      keywords: ['pentecost'],
      regions: ['bb']
    },
    "Pfingstmontag": {
      date: 'easter+50',
      keywords: ['whit', 'monday']
    },
    "Fronleichnam": {
      date: 'easter+60',
      keywords: ['corpus', 'christi'],
      regions: ['bw', 'by', 'he', 'nw', 'rp', 'sl']
    },
    "Mariä Himmelfahrt": {
      date: '8/15',
      keywords: ['maria'],
      regions: ['sl']
    },
    "Tag der deutschen Einheit": {
      date: '10/3'
    },
    "Reformationstag": {
      date: '10/31',
      regions: ['bb', 'hb', 'hh', 'mv', 'ni', 'sn', 'st', 'sh', 'th']
    },
    "Allerheiligen": {
      date: '11/1',
      regions: ['bw', 'by', 'nw', 'rp', 'sl']
    },
    "Buß- und Bettag": {
      date: '11/(3,[17])',
      keywords: ['bub'],
      regions: ['sn']
    },
    "Erster Weihnachtsfeiertag": {
      date: '12/25',
      keywords_y: ['erster']
    },
    "Zweiter Weihnachtsfeiertag": {
      date: '12/26',
      keywords_y: ['zweiter']
    }
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);
