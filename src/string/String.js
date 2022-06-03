import React from "react";

const String = () => {
  let panchayat = "Gajab Baijati Hai";
  let panchayat2 = "Fulera Gav Mai";

  let result = panchayat.charAt(6);
  console.log("charAt", result);

  let length = panchayat.length;
  console.log("length", length);

  //slice gives selected part as a result
  let slice = panchayat.slice(0, 5);
  console.log("slice", slice);

  //slice gives selected part as a result
  let substring = panchayat.substring(0, 5);
  console.log("substring", substring);

  //slice and substring both gives similar returns string in case of similar start and stop, now we see difference between them

  //   If start > stop, then function swaps both arguments.
  let substring2 = panchayat.substring(5, 0);
  console.log("substring reverse", substring2);
  //   If start > stop, This function will return an empty string. (“”)
  let slice2 = panchayat.slice(5, 0);
  console.log("slice reverse", slice2);

  //   If any argument is negative or is NaN, it is treated as 0......practically its gives blanc string so theory is wrong
  let substring3 = panchayat.substring(0);
  let substring4 = panchayat.substring(0, -5);
  console.log("substring ", substring3);
  console.log("substring negative", substring4);

  //   If start is negative, It sets char from the end of string, like substr()
  let slice3 = panchayat.slice(-1, 5);
  console.log("slice start negative", slice3);

  //   If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
  let slice4 = panchayat.slice(0, -5);
  console.log("slice stop negative", slice4);

  //   substr is also work as similar to slice and substring
  let substr = panchayat.substr(0, 5);
  console.log("substr", substr);

  // converting to Lower case
  let lowerCase = panchayat.toLowerCase();
  console.log("lower case", lowerCase);

  let upperCase = panchayat.toUpperCase();
  console.log("UpperCase", upperCase);

  //   trim removes white space from both sides of string
  let trim = panchayat.trim();
  console.log("trim", trim);

  //   split() splits a string into an array of substrings, and returns the array
  let split = panchayat.split();
  console.log("split", split);
  let split1 = panchayat.split("");
  console.log("split1", split1);
  let split2 = panchayat.split(" ");
  console.log("split2", split2);

  //   split() splits a string into an array of substrings, and returns the array for perticular word
  let split3 = panchayat.split(" ");
  console.log("split for 1 word", split3[1]);

  let split4 = panchayat.split(" ", 2);
  console.log("split4", split4);

  //   replace() searches a string for a value, and returns a new string with the specified value(s) replaced
  let replace = panchayat.replace("Baijati", "Ijjat");
  console.log("replace", replace);

  //   includes() returns true if a string contains a specified string. It is case sensitive
  let includes = panchayat.includes("Hai");
  console.log("includes", includes);

  //   he concat() method joins two or more strings.
  let concat = panchayat.concat(panchayat2);
  console.log("concat", concat);

  let concat2 = panchayat.concat(" ", panchayat2);
  console.log("concat Space", concat2);

  return (
    <div>
      <h5>charAt:-{result}</h5>
      <h5>length:-{length}</h5>
      <h5>slice:-{slice}</h5>
      <h5>substring:-{substring}</h5>
      <h5>lowerCase:-{lowerCase}</h5>
      <h5>upperCase:-{upperCase}</h5>
      <h5>Replace:-{replace}</h5>
      <h5>concat:-{concat2}</h5>
    </div>
  );
};

export default String;
