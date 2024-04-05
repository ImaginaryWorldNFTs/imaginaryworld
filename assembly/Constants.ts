import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Imaginary World";
  export const SYMBOL: string = "IMW";
  export const MINT_PRICE: u64 = 1061500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 55;
  export const URI: string = "https://bafybeidj272vyt4dzhex6zmzp4666xjev55iqblbzu4i5qcq7i6ykhh2ti.ipfs.nftstorage.link";
  export const OWNER: Uint8Array = Base58.decode("1EwYTYLrxN8iyXTh1Acso9LgV5TGP9e1ey");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1CKPdBdh29pTXrUV4UNtVnNDyUBzxfg4U3");
}