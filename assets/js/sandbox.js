'use strict';

const pattern1 = new RegExp('\\b\\w{4}\\b', 'g');
const pattern2 = /\b\w{4}\b/g;

if (pattern2.test('qwer 1231 @#$#')) {
  console.log(true);
}else{
  console.log(false);
}

const str = 'All 1956my troubles 1998seemed 1999so far away';
const pattern3 = /\b(\d{4})([a-z]+)/gi;
const pattern4 = /\b(?:\d{4})([a-z]+)/gi;

const newStr1 = str.replace(pattern3,'$1');
//All 1956 troubles 1998 1999 far away

const newStr2 = str.replace(pattern3,'$2');
//All my troubles seemed so far away

const newStr3 = str.replace(pattern3,'$&');
//All 1956my troubles 1998seemed 1999so far away

const newStr4 = str.replace(pattern4,'$1');
//All my troubles seemed so far away

const str2 = 'All 1956my troubles qweqwe1998seemed 1999so far away';
const pattern5 = /\b(?:[a-z]*)(\d{4})([a-z]+)/gi;

const newStr5 = str.replace(pattern5,'$2 - $1');
//All my - 1956 troubles seemed - 1998 so - 1999 far away