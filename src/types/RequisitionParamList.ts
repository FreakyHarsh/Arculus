import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RequisitionParamList = {
  Home: any;
  Detail: any;
  Create: any;
  InternalSubmitalsList: any;
  AddInternalSubmital: any;
  UpdateInternalSubmital: any;
}

export type RequisitionNavProp<T extends keyof RequisitionParamList> = {
  navigation: StackNavigationProp<RequisitionParamList, T>;
  route: RouteProp<RequisitionParamList, T>;
};