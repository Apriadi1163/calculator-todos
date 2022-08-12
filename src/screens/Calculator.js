///
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  let combine = "";

  function getResult() {
    for (let i = 0; i < num.length; i++) {
      combine = combine + num[i];
    }
    let calcResult = eval(combine);
    setResult(` ${calcResult}`);
    setLastNumber(combine + "");
  }
  function percentHandler() {
    let a = parseFloat(...num);
    let resPer = a / 100;
    setNum([resPer]);
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Screens}>
          <View style={styles.formResult}>
            <Text style={styles.resulte}>{lastNumber}</Text>
          </View>
          <View style={styles.formResult}>
            <Text style={styles.result}>{result == 0 ? num : result}</Text>
          </View>
        </View>
        <View style={styles.formBtn}>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "1"])}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "2"])}
          >
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "-"])}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "+"])}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formBtn}>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "3"])}
          >
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "4"])}
          >
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "/"])}
          >
            <Text>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "*"])}
          >
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formBtn}>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "5"])}
          >
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "6"])}
          >
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => percentHandler()}
          >
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnbtn} onPress={() => getResult()}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formBtn}>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "7"])}
          >
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "8"])}
          >
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "9"])}
          >
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnbtn}
            onPress={() => setNum([...num, "0"])}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formBtn}>
          <TouchableOpacity
            style={styles.btnbtns}
            onPress={() => {
              setNum("");
              setResult(0);
              setLastNumber("");
            }}
          >
            <Text>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dc143c",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  formBtn: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    marginVertical: 10,
  },

  formResult: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
  result: {
    color: "#663399",
    fontSize: 33,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "right",
    marginHorizontal: 33,
    marginBottom: 3,
  },
  resulte: {
    color: "#483d8b",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "right",
    marginHorizontal: 33,
  },
  btnbtn: {
    backgroundColor: "#f0fff0",
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginStart: 10,
    marginBottom: 10,
    marginTop: 10,
    marginEnd: 10,
  },
  btnbtns: {
    backgroundColor: "#f0fff0",
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  Screens:{
    height: 100,
    width: "100%",
    marginBottom: 5,
    backgroundColor: "#f0fff0",
    borderRadius: 5,
  }
});


