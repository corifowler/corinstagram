import $ from 'jquery';

const APP_ID = 'A96YNm8IMB167ffbgJ3l3jXdUwtYYlfBWjcL7ZLB';
const API_KEY = 'QCKU616iJJLg3Uh0au5rOAkI7XjmdvZE9MR990C4';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});