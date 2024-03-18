import Address from "@/components/userBoard/address/address";

export type AddressType = {
  title: string;
  zipCode: number;
  streetNameAddress: string;
  address: string;
  addressDetail: string;
  phoneNumber: number;
};

export default function Page() {
  const addressData = Array.from({ length: 3 }, (_, i) => ({
    title: "titleName" + i,
    zipCode: 1234,
    streetNameAddress: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
    address: "지번주소지번주소지번주소지번주소지번주소지번주소",
    addressDetail:
      "상세주소상세주소상세주소상세주소상세주소상세주소상세주소상세주소",
    phoneNumber: 1012345678,
  }));
  return <Address data={addressData} />;
}
