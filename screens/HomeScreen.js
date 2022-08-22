import {StyleSheet, Text, View} from "react-native";
import {SearchBar} from "react-native-elements";
import queryFiler from "../utility/index";
import axios from "axios";

import React, {useState} from "react";

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  const queryFiler = (filer) => {
    console.log(filer);
    axios({
      method: "GET",
      url: `http://countmyvotetx.org/api/filers/search.json?query=${filer}&page=1`,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateSearch = (search) => {
    console.log("setting search to ", search);
    setSearch(search);
    setTimeout(() => {
      queryFiler(search);
    }, 1000);
  };

  return (
    <View>
      <Text>
        Enter below the name of a candidate, officeholder or political action
        commitee
      </Text>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
