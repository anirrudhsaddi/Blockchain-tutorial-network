import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export class Trader extends Participant {
      tradeId: string;
      firstName: string;
      lastName: string;
   }
   export class Commodity extends Asset {
      tradingSymbol: string;
      description: string;
      mainExchange: string;
      owner: Trader;
      value: number;
   }
   export class Trade extends Transaction {
      commodity: Commodity;
      newOwner: Trader;
   }
// }
