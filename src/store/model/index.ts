
import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {Asus} from './asus';
import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Config} from '../../config';
import {Evga} from './evga';
import {MicroCenter} from './microcenter';
import {NewEgg} from './newegg';
import {NewEggCa} from './newegg-ca';
import {Nvidia} from './nvidia';
import {Nvidia2} from './nvidia2';
import {Store} from './store';
import {OfficeDepot} from './officedepot';
import {Zotac} from './zotac';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[Asus.name, Asus],
	[BestBuy.name, BestBuy],
	[BAndH.name, BAndH],
	[Evga.name, Evga],
	[MicroCenter.name, MicroCenter],
	[NewEgg.name, NewEgg],
	[NewEggCa.name, NewEggCa],
	[Nvidia.name, Nvidia],
	[Nvidia2.name, Nvidia2],
	[OfficeDepot.name, OfficeDepot],
	[Zotac.name, Zotac]
]);

const list = new Map();

for (const name of Config.store.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';
