import React, { FC } from "react";
import { View } from "react-native";
import { Drawer, Divider, Text, Avatar } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={{ backgroundColor: "#1B435C", height: "100%" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            marginTop: 50,
            marginBottom: 10,
          }}
        >
          <Avatar.Image
            size={100}
            source={{ uri: "https://source.unsplash.com/random" }}
            style={{ marginRight: "10%", marginLeft: 10 }}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            User name
          </Text>
        </View>
        <Divider style={{ backgroundColor: "white", height: 3 }} />
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "80%" }}>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                Inbox
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Approvals
              </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                Activity Management
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Task
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Event
              </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                ATS
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Requisition
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Candidate List
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Candidate PipeLine
              </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                Organization Management
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Account
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Contact
              </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                Employ Self Service
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                ERF
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Time Sheet
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Expense Sheet
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Leave
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Separation
              </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
              <Text
                style={{ marginLeft: "10%", color: "gray", marginVertical: 10 }}
              >
                Other
              </Text>
              <Divider style={{ backgroundColor: "white", height: 1.5 }} />
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Change password
              </Text>
              <Text
                style={{
                  marginLeft: "10%",
                  color: "white",
                  marginVertical: 10,
                }}
              >
                Contact Us
              </Text>
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "white", height: 3 }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: "20%",
            }}
          >
            Log out
          </Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
