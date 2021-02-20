import { CommonInterfaceElact } from "@/common/common.interface";

export interface BaceUserdata {
  authKey: CommonInterfaceElact;
  hash: string;
  index: string;
  range: string;
  telephone: string;
  userico: string;
  usermail: string;
  usernickname: string;
  position: string;
  startdate: string;
  companyname: string;
}
export interface EditUserData {
  usernickname: string;
  telephone: string;
  usermail: string;
  userico: string;
  position: string;
  startdate: string;
  companyname: string;
}
