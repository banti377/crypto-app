export interface Coins {
  status: string;
  data: CoinsData;
}
export interface CoinsData {
  stats: Stats;
  base: Base;
  coins?: (CoinsEntity)[] | null;
}
export interface Stats {
  total: number;
  offset: number;
  limit: number;
  order: string;
  base: string;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: number;
  total24hVolume: number;
}
export interface Base {
  symbol: string;
  sign: string;
}
export interface CoinsEntity {
  id: number;
  uuid: string;
  slug: string;
  symbol: string;
  name: string;
  description: string;
  color?: string | null;
  iconType: string;
  iconUrl: string;
  websiteUrl?: string | null;
  socials?: (SocialsEntityOrLinksEntity | null)[] | null;
  links?: (SocialsEntityOrLinksEntity1)[] | null;
  confirmedSupply: boolean;
  numberOfMarkets: number;
  numberOfExchanges: number;
  type: string;
  volume: number;
  marketCap: number;
  price: string;
  circulatingSupply?: number | null;
  totalSupply?: number | null;
  approvedSupply: boolean;
  firstSeen: number;
  listedAt: number;
  change: number;
  rank: number;
  history?: (string)[] | null;
  allTimeHigh: AllTimeHigh;
  penalty: boolean;
}
export interface SocialsEntityOrLinksEntity {
  name: string;
  url: string;
  type: string;
}
export interface SocialsEntityOrLinksEntity1 {
  name: string;
  url: string;
  type: string;
}
export interface AllTimeHigh {
  price: string;
  timestamp: number;
}
